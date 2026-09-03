import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const timelineData = [
  {
    date: 'First Meeting',
    title: 'The Day Our Eyes Met',
    description: 'It was a beautiful day when fate brought us together. A spark lit up, and everything felt right.',
    icon: '✨',
    color: 'from-pink-300 to-rose-400',
  },
  {
    date: 'First Date',
    title: 'Our Magical Evening',
    description: 'Nervous smiles, gentle laughter, and the sweetest conversation that lasted forever. We knew this was special.',
    icon: '🌙',
    color: 'from-lavender-300 to-purple-400',
  },
  {
    date: 'Together',
    title: 'The Journey Begins',
    description: 'Hand in hand, we started building our own little world filled with love, trust, and endless adventures.',
    icon: '💕',
    color: 'from-pink-200 to-lavender-300',
  },
  {
    date: 'First Trip',
    title: 'Adventures Together',
    description: 'Exploring new places, sharing new experiences, and creating memories that would last a lifetime.',
    icon: '🌸',
    color: 'from-rose-200 to-pink-300',
  },
  {
    date: 'Anniversary',
    title: 'Celebrating Our Love',
    description: 'Every anniversary is a reminder of how beautiful our journey has been and how much more there is to come.',
    icon: '🎂',
    color: 'from-lavender-200 to-pink-300',
  },
  {
    date: 'Today',
    title: 'And Forever After',
    description: 'Today, tomorrow, and always — our love story continues to unfold in the most beautiful ways.',
    icon: '💖',
    color: 'from-pink-300 to-rose-300',
  },
];

function TimelineItem({ item, index }: { item: typeof timelineData[0]; index: number }) {
  const { ref, isInView } = useInView(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-12 sm:mb-16 ${
        isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } flex-col sm:flex-row`}
    >
      {/* Content card */}
      <motion.div
        className={`w-full sm:w-[calc(50%-40px)] ${isLeft ? 'sm:text-right' : 'sm:text-left'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="glass-card p-6 sm:p-8 group hover:shadow-romantic-lg transition-all duration-500 hover:-translate-y-1">
          <span className="script-text text-sm text-petal-400 block mb-1">{item.date}</span>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-700 mb-3">
            {item.title}
          </h3>
          <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="relative z-10 my-4 sm:my-0 sm:mx-0 mx-auto"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
      >
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
          <span className="text-2xl">{item.icon}</span>
        </div>
        {/* Pulse ring */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-30 animate-ping`} style={{ animationDuration: '3s' }} />
      </motion.div>

      {/* Empty space for the other side */}
      <div className="hidden sm:block w-[calc(50%-40px)]" />
    </div>
  );
}

export default function TimelineSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-20 sm:py-32 px-4 overflow-hidden" id="timeline">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-petal-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="script-text text-lg text-petal-300 block mb-2">A journey of love</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Memory Timeline
          </h2>
          <p className="font-body text-gray-400 max-w-md mx-auto">
            A beautiful chapter in our love story that I will cherish forever.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - visible on desktop */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-petal-200 via-lavender-300 to-petal-200 -translate-x-1/2" />
          
          {/* Mobile line */}
          <div className="sm:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-petal-200 via-lavender-300 to-petal-200" />

          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
