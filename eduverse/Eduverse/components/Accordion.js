import { useState } from 'react';

export default function Accordion({ sections, accentColor }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
      {sections.map((s, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} style={{
            background:'var(--surface)', border:'1px solid var(--border)',
            borderRadius:'14px', overflow:'hidden',
          }}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              style={{
                width:'100%', background:'none', border:'none',
                padding:'1rem 1.2rem', cursor:'pointer',
                display:'flex', alignItems:'center', justifyContent:'space-between',
                gap:'0.8rem', fontFamily:'inherit',
                color:'var(--text)',
              }}
            >
              <span style={{
                fontFamily:'Georgia, serif', fontSize:'0.95rem',
                fontWeight:'700', textAlign:'left',
              }}>{s.title}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accentColor || 'var(--muted)'} strokeWidth="2.5" strokeLinecap="round"
                style={{
                  flexShrink:0, transition:'transform 0.3s',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div style={{
              overflow:'hidden',
              maxHeight: isOpen ? '2000px' : '0',
              transition:'max-height 0.4s var(--ease-out), padding 0.3s',
              padding: isOpen ? '0 1.2rem 1rem' : '0 1.2rem',
            }}>
              <p style={{
                fontSize:'0.85rem', lineHeight:'1.8', color:'var(--text2)',
                whiteSpace:'pre-line', margin:0,
              }}>{s.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
