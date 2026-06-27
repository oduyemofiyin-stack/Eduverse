import { useEffect } from 'react';

export default function CelebrationModal({ open, onClose, icon, title, desc }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(onClose, 4000);
      return () => { clearTimeout(timer); document.body.style.overflow = ''; };
    }
    document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:400,
      display:'flex', alignItems:'center', justifyContent:'center',
      background:'rgba(0,0,0,0.6)',
      animation:'fadeIn 0.3s ease',
    }} onClick={onClose}>
      <div style={{
        background:'var(--surface)',
        border:'1px solid var(--border2)',
        borderRadius:'24px', padding:'2rem',
        textAlign:'center', maxWidth:'320px', width:'90%',
        animation:'scaleIn 0.4s var(--ease-spring, cubic-bezier(0.34,1.56,0.64,1))',
        boxShadow:'var(--shadow-lg)',
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          fontSize:'3.5rem', marginBottom:'0.8rem',
          animation:'badgePulse 1s ease-in-out infinite',
        }}>{icon}</div>
        <div style={{
          fontFamily:'Georgia, serif', fontSize:'1.3rem',
          fontWeight:'700', marginBottom:'0.4rem',
          color:'var(--text)',
        }}>{title}</div>
        {desc && <div style={{fontSize:'0.85rem', color:'var(--muted)', lineHeight:'1.5'}}>{desc}</div>}
        <button onClick={onClose} style={{
          marginTop:'1.2rem', padding:'0.6rem 1.5rem',
          borderRadius:'12px', border:'none', cursor:'pointer',
          background:'linear-gradient(135deg,var(--blue),#3366dd)',
          color:'#fff', fontFamily:'inherit', fontSize:'0.85rem',
          fontWeight:'600',
        }}>Awesome!</button>
      </div>
    </div>
  );
}
