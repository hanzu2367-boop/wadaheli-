import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const surprises = [
  {
    id: 1,
    icon: '💝',
    title: 'A Promise',
    message: 'I promise to love you on your best days and your worst, to stand beside you in every storm, and to always find my way back to you.',
    gradient: 'from-pink-200 to-rose-300',
  },
  {
    id: 2,
    icon: '🌟',
    title: 'Fun Fact',
    message: 'Did you know? You blink more when you\'re talking to someone you love. So every time our eyes meet, it\'s because my heart is overflowing!',
    gradient: 'from-lavender-200 to-purple-300',
  },
  {
    id: 3,
    icon: '🔮',
    title: 'Future Dreams',
    message: 'I dream of a little house with a big garden, your laughter echoing through the halls, and growing old together while still holding hands.',
    gradient: 'from-violet-200 to-pink-300',
  },
  {
    id: 4,
    icon: '🍯',
    title: 'Sweet Memory',
    message: 'A beautiful chapter in our love story that I will cherish forever.',
    gradient: 'from-amber-200 to-orange-300',
  },
  {
    id: 5,
    icon: '🎨',
    title: 'You Are...',
    message: 'You are the melody in my favorite song, the color in my favorite painting, the warmth in my favorite blanket, and the love of my life.',
    gradient: 'from-cyan-200 to-blue-300',
  },
  {
    id: 6,
    icon: '🌙',
    title: 'Goodnight',
    message: 'As the moonlight kisses the sea, know that I\'m sending all my love to you. Sweet dreams, my love. Until tomorrow\'s sunrise brings us together again.',
    gradient: 'from-indigo-200 to-purple-300',
  },
];

function SurpriseCard({ surprise, index }: { surprise: typeof surprises[0]; index: number }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const { ref, isInView } = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="relative cursor-pointer group"
        onClick={() => setIsRevealed(!isRevealed)}
      >
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="front"
              className={`glass-card p-8 sm:p-10 text-center bg-gradient-to-br ${surprise.gradient} bg-opacity-20 hover:shadow-romantic-lg transition-all duration-500 hover:-translate-y-2 min-h-[200px] flex flex-col items-center justify-center`}
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-5xl mb-4 block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {surprise.icon}
              </motion.span>
              <h3 className="font-display text-xl font-semibold text-gray-600 mb-2">{surprise.title}</h3>
              <p className="script-text text-sm text-gray-400">Tap to reveal 💕</p>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              className={`glass-card-strong p-8 sm:p-10 text-center min-h-[200px] flex flex-col items-center justify-center shadow-romantic-lg`}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl mb-3 block">{surprise.icon}</span>
              <h3 className="font-display text-lg font-semibold text-gray-600 mb-4">{surprise.title}</h3>
              <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed italic">
                "{surprise.message}</p>
              <p className="script-text text-xs text-petal-300 mt-4">Tap to close</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function SurpriseSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-20 sm:py-32 px-4 overflow-hidden" id="surprise">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="script-text text-lg text-rose-300 block mb-2">Little treasures</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Surprise Messages
          </h2>
          <p className="font-body text-gray-400 max-w-md mx-auto">
            Collecting moments, creating forever. 🌙
          </p>
        </motion.div>

        {/* Surprise grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {surprises.map((surprise, index) => (
            <SurpriseCard key={surprise.id} surprise={surprise} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
