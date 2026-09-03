import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'timeline', label: 'Timeline', icon: '⏰' },
  { id: 'gallery', label: 'Gallery', icon: '📷' },
  { id: 'letters', label: 'Letters', icon: '💌' },
  { id: 'music', label: 'Music', icon: '🎵' },
  { id: 'surprise', label: 'Surprise', icon: '🎁' },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
        >
          <div className="glass-card-strong px-3 py-2 flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="group relative px-3 py-2 rounded-xl hover:bg-pink-50 transition-all duration-300"
                title={item.label}
              >
                <span className="text-lg group-hover:scale-125 transition-transform duration-300 inline-block">
                  {item.icon}
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </button>
            ))}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3 py-2 rounded-xl hover:bg-pink-50 transition-all duration-300 ml-1 border-l border-pink-100"
              title="Back to top"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f8a0b5" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
