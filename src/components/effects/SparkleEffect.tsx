import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const sparkleColors = ['#f8a0b5', '#b9a3d8', '#fbc8d4', '#fcebd5', '#d1c1e6'];

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const arr: Sparkle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 12 + i * 10,
      y: 18 + (i % 5) * 14,
      size: 8 + (i % 3) * 4,
      color: sparkleColors[i % sparkleColors.length],
      delay: i * 0.5,
      duration: 2.4 + (i % 2) * 0.8,
    }));
    setSparkles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((s) => (
        <svg
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            opacity: 0.7,
          }}
          viewBox="0 0 24 24"
          fill={s.color}
        >
          <path d="M12 0l2.5 8.5L24 12l-9.5 3.5L12 24l-2.5-8.5L0 12l9.5-3.5z" />
        </svg>
      ))}
    </div>
  );
}
