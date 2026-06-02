import { useEffect } from 'react';

export default function BottomSheet({ open, onClose, title, children }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        style={{
          position:'fixed', inset:0, zIndex:350,
          background:'rgba(0,0,0,0.5)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition:'opacity 0.3s',
        }}
      />

      {/* SHEET */}
      <div style={{
        position:'fixed', bottom:0, left:0, right:0, zIndex:360,
        background:'var(--surface)',
        borderTopLeftRadius:'20px', borderTopRightRadius:'20px',
        maxHeight:'85vh', overflowY:'auto',
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        transition:'transform 0.35s var(--ease-out, cubic-bezier(0.16,1,0.3,1))',
        padding:'1rem 1.2rem calc(1rem + env(safe-area-inset-bottom, 0px))',
        boxShadow:'0 -10px 60px rgba(0,0,0,0.3)',
      }}>
        {/* HANDLE */}
        <div style={{
          width:'36px', height:'4px', borderRadius:'100px',
          background:'var(--muted2)', margin:'0 auto 1rem',
          opacity:0.4,
        }}/>

        {title && (
          <div style={{
            fontSize:'1.1rem', fontWeight:'700', fontFamily:'Georgia, serif',
            marginBottom:'1rem', color:'var(--text)',
          }}>
            {title}
          </div>
        )}

        {children}
      </div>
    </>
  );
}
