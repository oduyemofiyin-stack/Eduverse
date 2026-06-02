import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../../context/AppContext';
import instructors from '../../data/instructors';
import courses from '../../data/courses';

export default function InstructorDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { enrolled, getCourseProgress } = useApp();
  const [loading, setLoading] = useState(true);

  const instructor = instructors.find(inst => inst.id === id);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 300); return () => clearTimeout(t); }, []);

  if (!instructor && !loading) return (
    <div className="page-container" style={{textAlign:'center', padding:'4rem 1.2rem', color:'var(--muted)'}}>
      <h2 style={{fontFamily:'Georgia, serif', color:'var(--text)'}}>Instructor not found</h2>
      <button onClick={() => router.push('/instructors')} style={{fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.4rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff', marginTop:'1rem'}}>Back to Instructors</button>
    </div>
  );

  if (loading || !instructor) return (
    <div className="page-container" style={{maxWidth:'1000px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{display:'flex', gap:'1.5rem', alignItems:'center', marginBottom:'2rem'}}>
        <div style={{width:'80px', height:'80px', borderRadius:'50%', background:'var(--surface2)'}} className="shimmer-block"/>
        <div><div style={{width:'200px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.3rem'}} className="shimmer-block"/><div style={{width:'140px', height:'14px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/></div>
      </div>
      <div style={{height:'300px', background:'var(--surface2)', borderRadius:'20px'}} className="shimmer-block"/>
    </div>
  );

  const instCourses = instructor.courses.map(cId => courses.find(c => c.id === cId)).filter(Boolean);

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'1000px', margin:'0 auto'}}>
        <button onClick={() => router.push('/instructors')} style={{background:'none', border:'none', color:'var(--muted)', cursor:'pointer', fontSize:'0.85rem', marginBottom:'1rem', display:'inline-flex', alignItems:'center', gap:'0.3rem'}}>← Back to Instructors</button>

        <div style={{borderRadius:'20px', overflow:'hidden', border:'1px solid var(--border)', padding:'2rem', background:'var(--card-bg)'}}>
          <div style={{display:'flex', flexWrap:'wrap', gap:'1.5rem', alignItems:'center', marginBottom:'1.5rem'}}>
            <div style={{width:'100px', height:'100px', borderRadius:'50%', overflow:'hidden', flexShrink:0, background: instructor.coverColor, padding:'3px'}}>
              <img src={instructor.avatar} alt={instructor.name} style={{width:'100%', height:'100%', borderRadius:'50%', background:'var(--bg)'}}/>
            </div>
            <div style={{flex:1}}>
              <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.4rem, 3vw, 2rem)', fontWeight:'700', marginBottom:'0.2rem'}}>{instructor.name}</h1>
              <div style={{fontSize:'0.88rem', color:'var(--blue)', fontWeight:'600', marginBottom:'0.3rem'}}>{instructor.role}</div>
              <p style={{fontSize:'0.88rem', color:'var(--muted)', lineHeight:'1.7', maxWidth:'600px'}}>{instructor.bio}</p>
            </div>
            <div style={{display:'flex', gap:'0.6rem'}}>
              {instructor.social.github !== '#' && <a href={instructor.social.github} target="_blank" rel="noopener noreferrer" style={{width:'36px', height:'36px', borderRadius:'50%', background:'var(--surface2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--muted)', fontSize:'0.8rem', border:'1px solid var(--border)'}}>GH</a>}
              {instructor.social.twitter !== '#' && <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" style={{width:'36px', height:'36px', borderRadius:'50%', background:'var(--surface2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--muted)', fontSize:'0.8rem', border:'1px solid var(--border)'}}>TW</a>}
              {instructor.social.linkedin !== '#' && <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" style={{width:'36px', height:'36px', borderRadius:'50%', background:'var(--surface2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--muted)', fontSize:'0.8rem', border:'1px solid var(--border)'}}>LI</a>}
            </div>
          </div>

          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'1.5rem'}}>
            {instructor.expertise.map(e => (
              <span key={e} style={{fontSize:'0.7rem', fontWeight:'600', padding:'0.3rem 0.8rem', borderRadius:'100px', background:'rgba(68,136,255,0.1)', color:'var(--blue)', border:'1px solid rgba(68,136,255,0.2)'}}>{e}</span>
            ))}
          </div>

          <div className="reveal" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1rem', maxWidth:'400px'}}>
            <div style={{textAlign:'center', padding:'1rem', borderRadius:'12px', background:'var(--surface)'}}>
              <div style={{fontWeight:'700', fontSize:'1.3rem', color:'var(--gold)'}}>{instructor.stats.rating}</div>
              <div style={{fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.06em', textTransform:'uppercase'}}>Rating</div>
            </div>
            <div style={{textAlign:'center', padding:'1rem', borderRadius:'12px', background:'var(--surface)'}}>
              <div style={{fontWeight:'700', fontSize:'1.3rem'}}>{instructor.stats.courses}</div>
              <div style={{fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.06em', textTransform:'uppercase'}}>Courses</div>
            </div>
            <div style={{textAlign:'center', padding:'1rem', borderRadius:'12px', background:'var(--surface)'}}>
              <div style={{fontWeight:'700', fontSize:'1.3rem', color:'var(--teal)'}}>{instructor.stats.students.toLocaleString()}+</div>
              <div style={{fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.06em', textTransform:'uppercase'}}>Students</div>
            </div>
          </div>
        </div>

        <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', fontWeight:'700', margin:'2rem 0 1rem'}}>Courses by {instructor.name.split(' ')[0]}</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap:'1rem'}}>
          {instCourses.map(c => {
            const prog = enrolled.includes(c.id) ? getCourseProgress(c.id, c.lessons.length) : 0;
            return (
              <div key={c.id} className="list-item" style={{borderRadius:'16px', overflow:'hidden', border:'1px solid var(--border)', cursor:'pointer', background:'var(--card-bg)', transition:'border-color 0.2s, box-shadow 0.2s'}}
                onClick={() => router.push(`/courses/${c.id}`)}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(68,136,255,0.25)'; e.currentTarget.style.boxShadow='0 8px 30px rgba(68,136,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.boxShadow='none'; }}
              >
                <div style={{height:'140px', overflow:'hidden', background:'var(--surface2)'}}>
                  <img src={c.img} alt={c.title} loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s'}}
                    onMouseEnter={e => e.target.style.transform='scale(1.1)'}
                    onMouseLeave={e => e.target.style.transform='scale(1)'}
                  />
                </div>
                <div style={{padding:'1rem'}}>
                  <div style={{fontSize:'0.66rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.07em', color:'var(--blue)', marginBottom:'0.2rem'}}>{c.category}</div>
                  <div style={{fontWeight:'700', fontSize:'0.9rem', lineHeight:'1.3', marginBottom:'0.3rem'}}>{c.title}</div>
                  <div style={{fontSize:'0.76rem', color:'var(--muted)'}}>{c.duration}</div>
                  {prog > 0 && (
                    <div style={{marginTop:'0.5rem', height:'4px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                      <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:'linear-gradient(90deg,var(--blue),var(--teal))'}}/>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
