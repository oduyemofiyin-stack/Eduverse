'use client';
import { useEffect, useRef } from 'react';

export default function HeroScene() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7;
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%2306080f' width='100' height='100'/%3E%3C/svg%3E"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0,
        }}
      >
        <source src="https://cdn.pixabay.com/video/2022/09/20/131993-751915314_large.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(6,8,15,0.15) 0%, rgba(6,8,15,0.6) 100%)',
        zIndex: 0,
      }} />
    </>
  );
}
