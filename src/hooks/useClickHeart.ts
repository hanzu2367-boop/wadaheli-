import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
}

export function useClickHeart() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const nextHeart = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
      };

      setHearts((prev) => [...prev, nextHeart]);

      window.setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== nextHeart.id));
      }, 1500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return hearts;
}
