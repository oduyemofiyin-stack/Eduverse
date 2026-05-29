import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../../context/AppContext';
import learningPaths from '../../data/paths';
import courses from '../../data/courses';

export default function PathDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { completed, followingPaths, togglePathFollow, getPathProgress, enrolled, toggleEnroll } = useApp();
  const [loading, setLoading] = useState(true);

  const path = learningPaths.find(p => p.id === id);
  const isFollowing = followingPaths.includes(id);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 300); return () => clearTimeout(t); }, []);

  if (!path && !loading) return (
    <div className="page-container" style={{textAlign:'center', padding:'4rem 1.2rem', color:'var(--muted)'}}>
      <h2 style={{fontFamily:'Georgia, serif', color:'var(--text)'}}>Path not found</h2>
      <button onClick={() => router.push('/paths')} style={{fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.4rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff', marginTop:'1rem'}}>Back to Paths</button>
    </div>
  );

  if (loading || !path) return (
    <div className="page-container" style={{maxWidth:'1240px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'300px', height:'32px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'180px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{height:'400px', background:'var(--surface2)', borderRadius:'20px'}} className="shimmer-block"/>
    </div>
  );

  const pathCourses = path.courses.map(cId => courses.find(c => c.id === cId)).filter(Boolean);
  const prog = getPathProgress(path.courses);
  const completedCount = path.courses.filter(cId => completed.includes(cId)).length;

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'1000px', margin:'0 auto'}}>
        <button onClick={() => router.push('/paths')} style={{background:'none', border:'none', color:'var(--muted)', cursor:'pointer', fontSize:'0.85rem', marginBottom:'1rem', display:'inline-flex', alignItems:'center', gap:'0.3rem'}}>← Back to Paths</button>

        <div style={{
          borderRadius:'20px', overflow:'hidden', border:'1px solid var(--border)',
          background:`linear-gradient(135deg, ${path.color}15, transparent)`,
          padding:'2rem',
        }}>
          <div style={{display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.8rem'}}>
            <span style={{fontSize:'2.5rem'}}>{path.icon}</span>
            <span style={{fontSize:'0.7rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.06em', padding:'0.25rem 0.7rem', borderRadius:'100px', background: path.color + '22', color: path.color}}>{path.level}</span>
          </div>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.6rem, 4vw, 2.4rem)', fontWeight:'700', marginBottom:'0.3rem'}}>{path.title}</h1>
          <p style={{fontSize:'1rem', color:'var(--text2)', marginBottom:'0.5rem'}}>{path.subtitle}</p>
          <p style={{fontSize:'0.88rem', color:'var(--muted)', lineHeight:'1.7', maxWidth:'600px', marginBottom:'1.2rem'}}>{path.description}</p>

          <div style={{display:'flex', gap:'1.5rem', flexWrap:'wrap', marginBottom:'1.2rem'}}>
            <div><span style={{fontSize:'0.72rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em'}}>Courses</span><div style={{fontWeight:'700', fontSize:'1.1rem'}}>{path.courses.length}</div></div>
            <div><span style={{fontSize:'0.72rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em'}}>Completed</span><div style={{fontWeight:'700', fontSize:'1.1rem', color:'var(--teal)'}}>{completedCount}/{path.courses.length}</div></div>
            <div><span style={{fontSize:'0.72rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em'}}>Progress</span><div style={{fontWeight:'700', fontSize:'1.1rem'}}>{prog}%</div></div>
          </div>

          <div style={{height:'6px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden', marginBottom:'1.5rem'}}>
            <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:`linear-gradient(90deg, ${path.color}, ${path.color}88)`, transition:'width 0.8s'}}/>
          </div>

          <button onClick={() => togglePathFollow(path.id)}
            style={{
              fontSize:'0.85rem', fontWeight:'700', padding:'0.6rem 1.6rem', borderRadius:'10px',
              border: isFollowing ? 'none' : '1px solid var(--border)',
              background: isFollowing ? `linear-gradient(135deg, ${path.color}, ${path.color}88)` : 'var(--surface)',
              color: isFollowing ? '#fff' : 'var(--text)',
              cursor:'pointer', transition:'all 0.25s',
            }}
          >{isFollowing ? 'Following ✓' : 'Follow This Path'}</button>
        </div>

        <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', fontWeight:'700', margin:'2rem 0 1rem'}}>Courses in this Path</h2>
        <div style={{display:'flex', flexDirection:'column', gap:'0.8rem'}}>
          {pathCourses.map((c, idx) => {
            const done = completed.includes(c.id);
            const enrolledIn = enrolled.includes(c.id);
            return (
              <div key={c.id} className="list-item" style={{
                display:'flex', alignItems:'center', gap:'1rem', padding:'1rem 1.2rem',
                borderRadius:'16px', border:'1px solid var(--border)', background:'var(--card-bg)',
                cursor:'pointer', transition:'border-color 0.2s',
              }}
                onClick={() => router.push(`/courses/${c.id}`)}
                onMouseEnter={e => e.currentTarget.style.borderColor = path.color + '44'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{
                  width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:'700', fontSize:'0.9rem', flexShrink:0,
                  background: done ? path.color + '33' : 'var(--surface2)',
                  color: done ? path.color : 'var(--muted)',
                  border: `2px solid ${done ? path.color : 'var(--border)'}`,
                }}>{done ? '✓' : idx + 1}</div>
                <div style={{width:'48px', height:'48px', borderRadius:'10px', overflow:'hidden', flexShrink:0, background:'var(--surface2)'}}>
                  <img src={c.img} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontWeight:'700', fontSize:'0.9rem', marginBottom:'0.15rem', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{c.title}</div>
                  <div style={{fontSize:'0.76rem', color:'var(--muted)'}}>{c.category} · {c.duration}{enrolledIn ? ' · Enrolled' : ''}</div>
                </div>
                {done && <span style={{fontSize:'0.72rem', fontWeight:'700', color:'var(--teal)', whiteSpace:'nowrap'}}>✓ Completed</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
