import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PandaCouple from './PandaCouple';

const floatingHearts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: (i * 13) % 100,
  delay: i * 0.6,
  duration: 6 + (i % 4),
  size: 14 + (i % 4) * 6,
}));

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-heart">
      {/* Gradient background with parallax */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #fde8e8 0%, #f0ebf7 40%, #fef9f3 70%, #fde6ea 100%)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      {/* Large decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-petal-200/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-lavender-200/20 blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cream-200/30 blur-3xl animate-float-slow" />
      {/* Floating hearts in hero */}
      {floatingHearts.map((h) => (
        <div
          key={h.id}
          className="absolute pointer-events-none"
          style={{
            left: `${h.x}%`,
            bottom: '-30px',
            animation: `particleFloat ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill="#f47293" opacity="0.25">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Panda couple illustration */}
          <div className="mb-6">
            <PandaCouple />
          </div>

          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-petal-300 to-transparent" />
            <span className="script-text text-xl sm:text-2xl text-petal-400 whitespace-nowrap">Cassandra and me Jerome ❤️</span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-petal-300 to-transparent" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="section-title">Our Love Story</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="script-text text-2xl sm:text-3xl text-petal-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Every moment with you is a beautiful dream
          </motion.p>

          {/* Description */}
          <motion.p
            className="font-body text-base sm:text-lg text-lavender-400/80 max-w-lg mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            A magical collection of our precious memories, love letters, 
            and the little things that make our love story uniquely ours
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="script-text text-sm text-petal-300">Scroll down to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8a0b5" strokeWidth="2">
                <path d="M7 10l5 5 5-5" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
