import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import instructors from '../../data/instructors';
import courses from '../../data/courses';

// Instructors listing page — currently only shows Oduye Emmanuel
export default function Instructors() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t); }, []);

  if (loading) return (
    <div className="page-container" style={{maxWidth:'1240px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'220px', height:'32px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'160px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'2rem'}} className="shimmer-block"/>
      <div style={{height:'200px', background:'var(--surface2)', borderRadius:'20px'}} className="shimmer-block"/>
    </div>
  );

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'1240px', margin:'0 auto'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.8rem, 5vw, 2.6rem)', fontWeight:'700', marginBottom:'0.4rem'}}>
          Our <span className="shimmer-text">Instructors</span>
        </h1>
        <p style={{color:'var(--muted)', fontSize:'0.95rem', maxWidth:'560px', lineHeight:'1.7', marginBottom:'2rem'}}>
          Meet the experts behind Eduverse courses. Passionate educators dedicated to making quality education free for everyone.
        </p>

        <div style={{display:'flex', flexDirection:'column', gap:'1.3rem'}}>
          {instructors.map((inst, i) => {
            const instCourses = inst.courses.map(id => courses.find(c => c.id === id)).filter(Boolean);
            return (
              <div key={inst.id} className="list-item" style={{
                borderRadius:'20px', overflow:'hidden', cursor:'pointer',
                background:'var(--card-bg)', border:'1px solid var(--border)',
                transition:'border-color 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(68,136,255,0.25)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(68,136,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.boxShadow='none'; }}
                onClick={() => router.push(`/instructors/${inst.id}`)}
              >
                <div style={{display:'flex', flexWrap:'wrap', gap:'1.5rem', padding:'1.5rem', alignItems:'center'}}>
                  <div style={{
                    width:'80px', height:'80px', borderRadius:'50%', overflow:'hidden', flexShrink:0,
                    background: inst.coverColor, padding:'3px',
                  }}>
                    <Image src={inst.avatar} alt={inst.name} width={80} height={80} style={{borderRadius:'50%', background:'var(--bg)'}}/>
                  </div>
                  <div style={{flex:1, minWidth:'200px'}}>
                    <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', fontWeight:'700', marginBottom:'0.15rem'}}>{inst.name}</h2>
                    <div style={{fontSize:'0.82rem', color:'var(--blue)', fontWeight:'600', marginBottom:'0.4rem'}}>{inst.role}</div>
                    <p style={{fontSize:'0.82rem', color:'var(--muted)', lineHeight:'1.6', marginBottom:'0.5rem'}}>{inst.bio}</p>
                    <div style={{display:'flex', gap:'0.4rem', flexWrap:'wrap'}}>
                      {inst.expertise.map(e => (
                        <span key={e} style={{fontSize:'0.65rem', fontWeight:'600', padding:'0.2rem 0.6rem', borderRadius:'100px', background:'rgba(68,136,255,0.1)', color:'var(--blue)', border:'1px solid rgba(68,136,255,0.2)'}}>{e}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{textAlign:'right', flexShrink:0}}>
                    <div style={{fontWeight:'700', fontSize:'1.1rem', color:'var(--gold)'}}>{inst.stats.rating}</div>
                    <div style={{fontSize:'0.7rem', color:'var(--muted)'}}>Rating</div>
                    <div style={{fontWeight:'700', fontSize:'1rem', marginTop:'0.5rem'}}>{inst.stats.courses}</div>
                    <div style={{fontSize:'0.7rem', color:'var(--muted)'}}>Courses</div>
                    <div style={{fontWeight:'700', fontSize:'1rem', marginTop:'0.5rem'}}>{inst.stats.students.toLocaleString()}+</div>
                    <div style={{fontSize:'0.7rem', color:'var(--muted)'}}>Students</div>
                  </div>
                </div>
                <div style={{padding:'0.8rem 1.5rem', borderTop:'1px solid var(--border)', display:'flex', gap:'0.5rem', flexWrap:'wrap', alignItems:'center'}}>
                  <span style={{fontSize:'0.72rem', color:'var(--muted)', fontWeight:'500'}}>Courses by {inst.name.split(' ')[0]}:</span>
                  {instCourses.slice(0, 5).map(c => c ? (
                    <span key={c.id} style={{fontSize:'0.7rem', fontWeight:'600', padding:'0.2rem 0.6rem', borderRadius:'100px', background:'var(--surface2)', color:'var(--text2)', cursor:'pointer'}}
                      onClick={e => { e.stopPropagation(); router.push(`/courses/${c.id}`); }}
                    >{c.title}</span>
                  ) : null)}
                  {instCourses.length > 5 && <span style={{fontSize:'0.7rem', color:'var(--muted)'}}>+{instCourses.length - 5} more</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
