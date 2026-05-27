import { useState, useMemo } from 'react';

function hashToHue(courseId) {
  if (courseId == null) return 200;
  const str = String(courseId);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return ((hash % 360) + 360) % 360;
}

export default function CourseImage({ src, alt, courseId, style, ...rest }) {
  const [errored, setErrored] = useState(false);

  const hue = useMemo(() => hashToHue(courseId), [courseId]);

  if (errored || !src) {
    const hue2 = (hue + 60) % 360;
    return (
      <div
        style={{
          width:'100%', height:'100%',
          background: `linear-gradient(135deg, hsl(${hue}, 65%, 35%), hsl(${hue2}, 55%, 22%))`,
          display:'flex', alignItems:'center', justifyContent:'center',
          ...style,
        }}
        {...rest}
      >
        <svg viewBox="0 0 100 100" style={{width:'55%', height:'55%', opacity:0.35}}>
          <path d="M65 8c14 6 26 18 27 32 1 14-9 28-19 39-10 11-20 18-33 20-13 2-27-2-34-12-7-10-6-27-4-41 2-14 7-27 16-36 9-9 22-14 34-13 12 1 19 5 13 11z" fill="rgba(255,255,255,0.08)"/>
          <path d="M70 18c10 5 18 14 19 24 1 10-6 20-13 28-7 8-15 14-24 16-9 2-20 0-26-7-6-7-6-20-5-30-1-10 4-20 11-27 7-7 16-10 25-9 9 1 17 4 13 5z" fill="rgba(255,255,255,0.15)"/>
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src} alt={alt} loading="lazy"
      onError={() => setErrored(true)}
      style={{
        width:'100%', height:'100%', objectFit:'cover', display:'block',
        ...style,
      }}
      {...rest}
    />
  );
}
