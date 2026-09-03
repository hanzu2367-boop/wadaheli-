import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const herPhoto = new URL('../../assets/photo/content (1).png', import.meta.url).href;
const mcdoPhoto = new URL('../../assets/photo/786969445_1924994741743249_5173460865842375802_n.jpg', import.meta.url).href;

const makePlaceholder = (label: string, colors: [string, string]) => {
  const [start, end] = colors;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${start}"/>
          <stop offset="100%" stop-color="${end}"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="1200" fill="url(#g)"/>
      <circle cx="600" cy="480" r="210" fill="rgba(255,255,255,0.16)"/>
      <path d="M350 900c75-180 260-360 250-360s180 180 250 360" fill="rgba(255,255,255,0.12)"/>
      <text x="600" y="640" text-anchor="middle" fill="white" font-size="90" font-family="Georgia, serif" font-weight="700">${label}</text>
      <text x="600" y="720" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="44" font-family="Arial, sans-serif">Your photo here</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const photos = [
  {
    id: 1,
    title: 'Our First McDonald\'s Memory',
    description: 'The beginning of our beautiful story together ❤️',
    image: mcdoPhoto,
    span: 'col-span-2 row-span-2',
  },
];

function PhotoCard({ photo, index }: { photo: typeof photos[0]; index: number }) {
  const { ref, isInView } = useInView(0.15);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`${photo.span} relative group cursor-pointer`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full min-h-[180px] sm:min-h-[220px] rounded-3xl overflow-hidden shadow-romantic transition-all duration-500 ${
          isHovered ? 'shadow-romantic-lg -translate-y-2' : ''
        }`}
      >
        {/* Actual photo */}
        <img
          src={photo.image}
          alt={photo.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : ''}`}
          loading="lazy"
        />

        {/* Heart overlay on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white">
                <h4 className="font-display text-lg font-semibold mb-1">{photo.title}</h4>
                <p className="font-body text-sm opacity-80">{photo.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corner heart icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.8">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function PhotoGallerySection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-20 sm:py-32 px-4 overflow-hidden" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="script-text text-lg text-lavender-300 block mb-2">Captured memories</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Photo Gallery
          </h2>
          <p className="font-body text-gray-400 max-w-md mx-auto">
            A collection of our most treasured moments, each one a piece of our heart.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {photos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
