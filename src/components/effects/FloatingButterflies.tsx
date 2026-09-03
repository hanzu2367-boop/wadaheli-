import { useEffect, useState } from 'react';

interface Butterfly {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  flutterDuration: number;
  driftX: number;
  driftY: number;
}

const colors = ['#f8a0b5', '#b9a3d8', '#fbc8d4', '#d1c1e6', '#f58585', '#a088ca'];

export default function FloatingButterflies() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    const arr: Butterfly[] = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: 12 + i * 28,
      y: 18 + (i % 2) * 24,
      size: 18 + i * 6,
      color: colors[i % colors.length],
      delay: i * 0.8,
      duration: 14 + i * 2,
      flutterDuration: 2.2,
      driftX: -12 + i * 6,
      driftY: -10 + i * 8,
    }));

    setButterflies(arr);
  }, []);

  return (
    <>
      <style>{`
        @keyframes drift {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(14px, -18px, 0) rotate(8deg);
          }
          100% {
            transform: translate3d(-12px, 12px, 0) rotate(-8deg);
          }
        }

        @keyframes flutter {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
          }
          50% {
            transform: scaleY(1.12) scaleX(0.96);
          }
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {butterflies.map((b) => (
          <svg
            key={b.id}
            className="absolute"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: b.size,
              height: b.size,
              transformOrigin: 'center center',
              animation: `drift ${b.duration}s ease-in-out ${b.delay}s infinite alternate, flutter ${b.flutterDuration}s ease-in-out ${b.delay}s infinite`,
              opacity: 0.85,
            }}
            viewBox="0 0 40 30"
            fill="none"
            aria-hidden="true"
          >
            <ellipse cx="14" cy="12" rx="12" ry="9" fill={b.color} opacity="0.72" />
            <ellipse cx="26" cy="12" rx="12" ry="9" fill={b.color} opacity="0.72" />
            <ellipse cx="20" cy="15" rx="2" ry="8" fill={b.color} opacity="0.9" />
            <circle cx="12" cy="11" r="3" fill="white" opacity="0.4" />
            <circle cx="28" cy="11" r="3" fill="white" opacity="0.4" />
          </svg>
        ))}
      </div>
    </>
  );
}
