import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const letters = [
  {
    id: 1,
    from: 'To My Love',
    date: 'The First Day',
    preview: 'From the moment I saw you, my world changed forever...',
    content: `From the moment I saw you, my world changed forever. Your smile illuminated the darkest corners of my heart, and your laughter became the sweetest melody I'd ever heard.\n\nEvery moment with you feels like a beautiful dream I never want to wake up from. You are my sunshine on cloudy days, my calm in the storm, and my greatest adventure.\n\nI fall in love with you more and more each day, and I promise to cherish every second we share together.\n\nForever and always yours,`,
    color: 'border-pink-200',
    accent: 'text-pink-400',
  },
  {
    id: 2,
    from: 'My Dearest',
    date: 'Our Anniversary',
    preview: 'Another year of loving you, and I wouldn\'t trade it for anything...',
    content: `Another year of loving you, and I wouldn't trade it for anything in this world. You've given me the most beautiful journey anyone could ever dream of.\n\nThrough every laugh, every tear, every challenge, and every triumph — you've been my rock, my best friend, and my greatest love.\n\nThank you for choosing me, for loving me, for making every single day an adventure. Here's to a lifetime more of beautiful memories together.\n\nWith all my heart,`,
    color: 'border-lavender-200',
    accent: 'text-lavender-500',
  },
  {
    id: 3,
    from: 'Always Yours',
    date: 'Just Because',
    preview: 'I woke up today and the first thing I thought about was you...',
    content: `I woke up today and the first thing I thought about was you. That happens every morning, you know. You're the first thought on my mind when the sun rises, and the last whisper on my lips before I drift to sleep.\n\nI love the way you make ordinary moments extraordinary. A simple walk becomes an adventure. A quiet evening becomes a treasured memory. Everything is better when I'm with you.\n\nYou are my greatest blessing, my sweetest dream, and my forever love.\n\nYours always and forever,`,
    color: 'border-rose-200',
    accent: 'text-rose-400',
  },
];

function LetterCard({ letter, index }: { letter: typeof letters[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <div
        className={`glass-card-strong p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:shadow-romantic-lg hover:-translate-y-1 border-l-4 ${letter.color}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className={`script-text text-lg ${letter.accent}`}>{letter.from}</span>
            <span className="block text-xs text-gray-400 mt-1 font-body">{letter.date}</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </div>
        
        <p className="font-body text-sm text-gray-500 italic leading-relaxed">
          "{letter.preview}"
        </p>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-pink-100">
                <div className="letter-paper p-6 sm:p-8">
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-loose whitespace-pre-line">
                    {letter.content}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function LoveLettersSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-20 sm:py-32 px-4 overflow-hidden" id="letters">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-petal-100/20 blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="script-text text-lg text-pink-300 block mb-2">Words from the heart</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Love Letters
          </h2>
          <p className="font-body text-gray-400 max-w-md mx-auto">
            Tap on a letter to unfold the love hidden within each word.
          </p>
        </motion.div>

        {/* Letters */}
        <div className="space-y-6">
          {letters.map((letter, index) => (
            <LetterCard key={letter.id} letter={letter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
