'use client';
import { useEffect, useRef } from 'react';
import { initStarfield } from '../lib/animations';

export default function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = initStarfield(canvasRef.current);
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
}
