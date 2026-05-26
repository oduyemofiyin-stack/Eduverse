import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
      aria-label="Scroll to top"
      style={{
        position:'fixed', bottom:'80px', right:'16px', zIndex:250,
        width:'44px', height:'44px', borderRadius:'50%',
        background:'var(--surface2)', border:'1px solid var(--border2)',
        color:'var(--muted)', cursor:'pointer', fontSize:'1.1rem',
        display:'flex', alignItems:'center', justifyContent:'center',
        opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: show ? 'auto' : 'none',
        transition:'opacity 0.3s, transform 0.3s, background 0.2s',
        boxShadow:'var(--shadow-md)',
      }}
      onMouseEnter={e => { e.currentTarget.style.background='var(--surface3)'; e.currentTarget.style.color='var(--text)'; }}
      onMouseLeave={e => { e.currentTarget.style.background='var(--surface2)'; e.currentTarget.style.color='var(--muted)'; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
  );
}
