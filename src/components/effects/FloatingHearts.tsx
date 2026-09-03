import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const heartColors = ['#f47293', '#f8a0b5', '#ec6b6b', '#d94f4f', '#eb4570', '#f58585'];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const arr: Heart[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: (i * 18 + 8) % 100,
      size: 12 + (i % 4) * 6,
      opacity: 0.25 + (i % 3) * 0.08,
      duration: 12 + (i % 3) * 3,
      delay: i * 0.8,
      color: heartColors[i % heartColors.length],
    }));
    setHearts(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.x}%`,
            bottom: '-20px',
            animation: `particleFloat ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          <svg
            width={h.size}
            height={h.size}
            viewBox="0 0 24 24"
            fill={h.color}
            opacity={h.opacity}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
