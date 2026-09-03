import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Footer() {
  const { ref, isInView } = useInView(0.1);

  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-pink-50/50 to-transparent" />
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-pink-200" />
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#f47293" className="animate-heartbeat">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <p className="script-text text-2xl sm:text-3xl text-petal-400 mb-3">
          Together Forever
        </p>
        <p className="font-body text-sm text-gray-400 mb-6">Let's grow together and never give up on each other, no matter what we go through</p>

        <svg viewBox="0 0 60 40" className="w-16 h-auto mx-auto mb-4 opacity-40">
          <circle cx="20" cy="20" r="12" fill="white" stroke="#e8e0e8" strokeWidth="0.5" />
          <circle cx="14" cy="12" r="4" fill="#3a3a3a" />
          <circle cx="26" cy="12" r="4" fill="#3a3a3a" />
          <ellipse cx="17" cy="19" rx="4" ry="3.5" fill="#3a3a3a" />
          <ellipse cx="23" cy="19" rx="4" ry="3.5" fill="#3a3a3a" />
          <circle cx="17" cy="18.5" r="1.5" fill="white" />
          <circle cx="23" cy="18.5" r="1.5" fill="white" />
          <ellipse cx="20" cy="22" rx="1.5" ry="1" fill="#3a3a3a" />

          <circle cx="40" cy="20" r="12" fill="white" stroke="#e8e0e8" strokeWidth="0.5" />
          <circle cx="34" cy="12" r="4" fill="#3a3a3a" />
          <circle cx="46" cy="12" r="4" fill="#3a3a3a" />
          <ellipse cx="37" cy="19" rx="4" ry="3.5" fill="#3a3a3a" />
          <ellipse cx="43" cy="19" rx="4" ry="3.5" fill="#3a3a3a" />
          <circle cx="37" cy="18.5" r="1.5" fill="white" />
          <circle cx="43" cy="18.5" r="1.5" fill="white" />
          <ellipse cx="40" cy="22" rx="1.5" ry="1" fill="#3a3a3a" />

          <path d="M28 16 C28 14.5, 30 14, 30.5 15.5 C31 14, 33 14.5, 33 16 C33 18, 30.5 19.5, 30.5 19.5 C30.5 19.5, 28 18, 28 16Z" fill="#f47293" opacity="0.6" />
        </svg>

        <p className="font-body text-xs text-gray-300">
          ✨ Our love story, forever in bloom ✨
        </p>
      </motion.div>
    </footer>
  );
}
