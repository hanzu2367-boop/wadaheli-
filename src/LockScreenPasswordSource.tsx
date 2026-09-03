import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Delete } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

const PASSCODE = '082726';

const lockHearts = [
  { left: '8%', top: '14%', size: 'text-6xl', color: 'text-pink-300', delay: 0, drift: -18 },
  { left: '82%', top: '22%', size: 'text-7xl', color: 'text-pink-400', delay: 0.8, drift: 14 },
  { left: '52%', top: '72%', size: 'text-5xl', color: 'text-pink-200', delay: 1.6, drift: -12 },
  { left: '18%', top: '68%', size: 'text-4xl', color: 'text-pink-300', delay: 2.4, drift: 16 },
  { left: '72%', top: '58%', size: 'text-4xl', color: 'text-pink-200', delay: 3.2, drift: -10 },
];

const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (input.length === 6) {
      if (input === PASSCODE) {
        onUnlock();
      } else {
        setError(true);
        setTimeout(() => {
          setInput('');
          setError(false);
        }, 500);
      }
    }
  }, [input, onUnlock]);

  const handlePress = (num: string) => {
    if (input.length < 6) {
      setInput((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff7fa] via-[#fbdbe7] to-[#f8bfd0] text-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,194,211,0.4),transparent_30%)]" />

      {lockHearts.map((heart, index) => (
        <motion.div
          key={index}
          className={`absolute ${heart.size} ${heart.color} select-none`}
          style={{ left: heart.left, top: heart.top, willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: 20, scale: 0.7 }}
          animate={{ opacity: [0, 0.65, 0.9, 0.65, 0], y: [20, heart.drift, -8, heart.drift, 20], scale: [0.72, 1, 1.08, 1, 0.72] }}
          transition={{
            duration: 6,
            delay: heart.delay,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          ♥
        </motion.div>
      ))}

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-pink-600">
              Enter Passcode
            </div>
            <motion.div
              className="flex gap-4"
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full border border-pink-400 transition-all duration-200 ${
                    i < input.length ? 'bg-pink-500' : 'bg-transparent'
                  }`}
                />
              ))}
            </motion.div>
          </div>

          <div className="grid w-full max-w-[280px] grid-cols-3 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handlePress(num.toString())}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-200 bg-white/50 text-2xl font-light text-pink-600 shadow-sm transition-colors active:bg-pink-100 backdrop-blur-sm sm:h-16 sm:w-16"
              >
                {num}
              </button>
            ))}
            <div className="h-14 w-14 sm:h-16 sm:w-16" />
            <button
              onClick={() => handlePress('0')}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-200 bg-white/50 text-2xl font-light text-pink-600 shadow-sm transition-colors active:bg-pink-100 backdrop-blur-sm sm:h-16 sm:w-16"
            >
              0
            </button>
            <button
              onClick={handleDelete}
              className="flex h-14 w-14 items-center justify-center rounded-full text-pink-600 transition-colors active:bg-pink-100 sm:h-16 sm:w-16"
            >
              <Delete size={24} />
            </button>
          </div>

          <div className="mt-8 text-xs font-medium text-pink-400">
            Clue: kiss mo muna ako
          </div>
        </div>

      </div>
    </div>
  );
};

export default LockScreen;

// PASSCODE SOURCE:
// const PASSCODE = '082726';
