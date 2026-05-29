import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../../context/AppContext';
import learningPaths from '../../data/paths';
import courses from '../../data/courses';

export default function LearningPaths() {
  const { followingPaths, togglePathFollow, getPathProgress } = useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="page-container" style={{maxWidth:'1240px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'280px', height:'32px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'200px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'2rem'}} className="shimmer-block"/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'1.3rem'}}>
        {Array.from({length:6}).map((_,i) => (
          <div key={i} style={{height:'220px', background:'var(--surface2)', borderRadius:'20px'}} className="shimmer-block"/>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'1240px', margin:'0 auto'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.8rem, 5vw, 2.6rem)', fontWeight:'700', marginBottom:'0.4rem'}}>
          Learning <span className="shimmer-text">Paths</span>
        </h1>
        <p style={{color:'var(--muted)', fontSize:'0.95rem', maxWidth:'560px', lineHeight:'1.7', marginBottom:'1.5rem'}}>
          Curated sequences of courses designed to take you from beginner to job-ready. Follow a path and track your progress.
        </p>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap:'1.3rem'}}>
          {learningPaths.map((path, i) => {
            const isFollowing = followingPaths.includes(path.id);
            const prog = getPathProgress(path.courses);
            const pathCourses = path.courses.map(id => courses.find(c => c.id === id)).filter(Boolean);
            return (
              <div key={path.id} className="list-item"
                style={{borderRadius:'20px', overflow:'hidden', cursor:'pointer', background:'var(--card-bg)', border:'1px solid var(--border)', transition:'border-color 0.3s, box-shadow 0.3s'}}
                onMouseEnter={e => { e.currentTarget.style.borderColor = path.color + '44'; e.currentTarget.style.boxShadow = `0 12px 40px ${path.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                onClick={() => router.push(`/paths/${path.id}`)}
              >
                <div style={{padding:'1.5rem 1.5rem 1.2rem', background: `linear-gradient(135deg, ${path.color}15, transparent)`}}>
                  <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'0.8rem'}}>
                    <div style={{fontSize:'2.2rem', lineHeight:'1'}}>{path.icon}</div>
                    <div style={{display:'flex', gap:'0.4rem', alignItems:'center', flexWrap:'wrap'}}>
                      <span style={{fontSize:'0.65rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.06em', padding:'0.2rem 0.6rem', borderRadius:'100px', background: path.color + '22', color: path.color}}>{path.level}</span>
                      <span style={{fontSize:'0.65rem', color:'var(--muted)', fontWeight:'500'}}>{path.duration}</span>
                    </div>
                  </div>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', fontWeight:'700', marginBottom:'0.3rem', color:'var(--text)'}}>{path.title}</h3>
                  <p style={{fontSize:'0.82rem', color:'var(--muted)', lineHeight:'1.5', marginBottom:'0.5rem'}}>{path.subtitle}</p>
                  <p style={{fontSize:'0.78rem', color:'var(--text2)', lineHeight:'1.5', marginBottom:'0.8rem'}}>{path.description}</p>
                </div>

                <div style={{padding:'0 1.5rem 1rem'}}>
                  <div style={{display:'flex', gap:'0.3rem', flexWrap:'wrap', marginBottom:'0.8rem'}}>
                    {pathCourses.map((c, idx) => {
                      if (!c) return null;
                      return (
                      <div key={c.id} style={{
                        width:'32px', height:'32px', borderRadius:'8px', overflow:'hidden', border:'2px solid var(--border)', flexShrink:0,
                        transition:'border-color 0.2s, transform 0.2s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = path.color + '66'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'scale(1)'; }}
                      >
                        <img src={c.img} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                      </div>
                      );
                    })}
                  </div>

                  <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
                    <div style={{flex:1, height:'5px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                      <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:`linear-gradient(90deg, ${path.color}, ${path.color}88)`, transition:'width 0.6s'}}/>
                    </div>
                    <span style={{fontSize:'0.75rem', fontWeight:'600', color:'var(--muted)'}}>{prog}%</span>
                  </div>
                </div>

                <div style={{padding:'0.7rem 1.5rem', borderTop:'1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <span style={{fontSize:'0.76rem', color:'var(--muted)'}}>{path.courses.length} courses</span>
                  <button onClick={e => { e.stopPropagation(); togglePathFollow(path.id); }}
                    style={{
                      fontSize:'0.72rem', fontWeight:'700', padding:'0.35rem 1rem', borderRadius:'100px',
                      border: isFollowing ? 'none' : `1px solid var(--border)`,
                      background: isFollowing ? `linear-gradient(135deg, ${path.color}, ${path.color}88)` : 'var(--surface)',
                      color: isFollowing ? '#fff' : 'var(--text)',
                      cursor:'pointer', transition:'all 0.25s',
                    }}
                  >{isFollowing ? 'Following' : 'Follow Path'}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
