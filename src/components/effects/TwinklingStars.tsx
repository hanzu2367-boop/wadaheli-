import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function TwinklingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const arr: Star[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: (i * 11) % 100,
      y: (i * 9) % 100,
      size: 2 + (i % 3),
      delay: i * 0.4,
      duration: 2.2 + (i % 3) * 0.8,
    }));
    setStars(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
        >
          <svg
            width={s.size * 3}
            height={s.size * 3}
            viewBox="0 0 24 24"
            fill="none"
            style={{
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          >
            <path
              d="M12 0l2.5 8.5L24 12l-9.5 3.5L12 24l-2.5-8.5L0 12l9.5-3.5z"
              fill="url(#starGrad)"
              opacity="0.8"
            />
            <defs>
              <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbc8d4" />
                <stop offset="100%" stopColor="#d1c1e6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
