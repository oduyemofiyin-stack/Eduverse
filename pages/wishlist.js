import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { CourseGridSkeleton } from '../components/Skeleton';
import courses from '../data/courses';

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const wishlisted = courses.filter(c => wishlist.includes(c.id));

  if (loading) return (
    <div className="page-container" style={{maxWidth:'1240px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{marginBottom:'1.8rem'}}>
        <div style={{width:'200px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
        <div style={{width:'180px', height:'14px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/>
      </div>
      <CourseGridSkeleton count={6}/>
    </div>
  );

  return (
    <div className="page-container" style={{maxWidth:'1240px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{marginBottom:'1.8rem'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.6rem,4vw,2rem)', fontWeight:'700', marginBottom:'0.3rem'}}>My Wishlist</h1>
        <p style={{color:'var(--muted)', fontSize:'0.88rem'}}>Courses you have saved for later</p>
      </div>

      {wishlisted.length === 0 ? (
        <div style={{textAlign:'center', padding:'4rem 1rem', color:'var(--muted)'}}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', color:'var(--text)', marginBottom:'0.4rem'}}>Wishlist is empty</h2>
          <p style={{marginBottom:'1.4rem'}}>Browse and save courses you love</p>
          <button onClick={() => router.push('/')} style={{
            fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
            borderRadius:'12px', border:'none', cursor:'pointer',
            background:'linear-gradient(135deg,var(--gold),#c8960a)', color:'#000',
          }}>Browse Courses</button>
        </div>
      ) : (
        <div className="course-card-grid" style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(min(295px, 100%), 1fr))',
          gap:'1rem',
        }}>
          {wishlisted.map(c => (
            <div key={c.id}
              onClick={() => router.push(`/courses/${c.id}`)}
              style={{
                background:'var(--surface)',
                border:'1px solid var(--border)',
                borderRadius:'16px', overflow:'hidden', cursor:'pointer',
                transition:'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(var(--blue-rgb,68,136,255),0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--border)'; }}
            >
              <div style={{width:'100%', height:'170px', position:'relative', overflow:'hidden'}}>
                <img src={c.img} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                <div style={{position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 55%)'}}/>
                <span style={{position:'absolute', top:'9px', left:'9px', fontSize:'0.67rem', fontWeight:'700', textTransform:'uppercase', padding:'0.22rem 0.65rem', borderRadius:'100px', background:'rgba(0,212,170,0.18)', color:'var(--teal)', border:'1px solid rgba(0,212,170,0.28)'}}>Free</span>
                <div
                  onClick={e => { e.stopPropagation(); toggleWishlist(c.id); }}
                  style={{position:'absolute', top:'9px', right:'9px', width:'32px', height:'32px', borderRadius:'50%', background:'rgba(0,0,0,0.72)', border:'1px solid rgba(255,255,255,0.13)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', cursor:'pointer', color:'var(--pink)'}}
                ></div>
              </div>
              <div style={{padding:'1rem'}}>
                <div style={{fontSize:'0.7rem', fontWeight:'600', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.4rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                    <span>{c.category}</span>
                    <span style={{
                      fontSize:'0.6rem', fontWeight:'700', textTransform:'uppercase',
                      padding:'0.15rem 0.5rem', borderRadius:'100px',
                      color: c.level === 'beginner' ? 'var(--teal)' : c.level === 'intermediate' ? 'var(--gold)' : 'var(--pink)',
                      background: c.level === 'beginner' ? 'rgba(0,212,170,0.15)' : c.level === 'intermediate' ? 'rgba(240,192,64,0.15)' : 'rgba(255,107,157,0.15)',
                    }}>{c.level}</span>
                  </div>
                <div style={{fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700', lineHeight:'1.35', marginBottom:'0.4rem', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{c.title}</div>
                <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.7rem'}}>by {c.instructor}</div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid var(--border)', paddingTop:'0.65rem', flexWrap:'wrap', gap:'0.3rem'}}>
                  <span style={{fontSize:'0.78rem'}}>{c.rating}</span>
                  <span style={{fontSize:'0.76rem', color:'var(--muted)'}}>{c.duration}</span>
                  <span style={{fontFamily:'Georgia, serif', fontWeight:'700', color:'var(--teal)', fontSize:'0.92rem'}}>Free</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}