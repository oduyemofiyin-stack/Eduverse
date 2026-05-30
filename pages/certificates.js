import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import courses from '../data/courses';

export default function Certificates() {
  const { certificates } = useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);
  const certRef = useRef(null);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t); }, []);

  const certList = [...certificates].reverse();

  if (loading) return (
    <div className="page-container" style={{maxWidth:'1000px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'200px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'160px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'1rem'}}>
        {Array.from({length:3}).map((_,i) => <div key={i} style={{height:'220px', background:'var(--surface2)', borderRadius:'16px'}} className="shimmer-block"/>)}
      </div>
    </div>
  );

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'1000px', margin:'0 auto'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.5rem, 4vw, 2rem)', fontWeight:'700', marginBottom:'0.3rem'}}>
          My <span className="shimmer-text">Certificates</span>
        </h1>
        <p style={{color:'var(--muted)', fontSize:'0.88rem', marginBottom:'1.5rem'}}>Every completed course earns you a certificate. Show off your achievements.</p>

        {certList.length === 0 ? (
          <div style={{textAlign:'center', padding:'4rem 1rem', color:'var(--muted)', border:'1px dashed var(--border)', borderRadius:'20px'}}>
            <div style={{fontSize:'3rem', marginBottom:'0.5rem'}}>🎓</div>
            <h3 style={{fontFamily:'Georgia, serif', color:'var(--text)', marginBottom:'0.3rem'}}>No certificates yet</h3>
            <p style={{fontSize:'0.88rem', marginBottom:'1rem'}}>Complete a course to earn your first certificate.</p>
            <button onClick={() => router.push('/')} style={{fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.4rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff'}}>Browse Courses</button>
          </div>
        ) : (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap:'1.3rem'}}>
            {certList.map((cert, i) => {
              const course = courses.find(c => c.id === cert.courseId);
              const date = new Date(cert.completionDate);
              return (
                <div key={cert.code} className="list-item" style={{
                  borderRadius:'16px', overflow:'hidden', cursor:'pointer',
                  background:'var(--card-bg)', border:'1px solid var(--border)',
                  transition:'border-color 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,192,64,0.25)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(240,192,64,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div style={{
                    padding:'2rem 1.5rem', textAlign:'center',
                    background:'linear-gradient(135deg, rgba(240,192,64,0.08), rgba(68,136,255,0.08))',
                    borderBottom:'1px solid var(--border)',
                  }}>
                    <div style={{fontSize:'2.5rem', marginBottom:'0.3rem'}}>🎓</div>
                    <div style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', color:'var(--gold)', marginBottom:'0.2rem'}}>Certificate of Completion</div>
                  </div>
                  <div style={{padding:'1.2rem 1.5rem'}}>
                    <div style={{fontWeight:'700', fontSize:'0.95rem', marginBottom:'0.3rem'}}>{cert.courseName}</div>
                    <div style={{fontSize:'0.78rem', color:'var(--muted)'}}>
                      Issued to <span style={{color:'var(--text)', fontWeight:'600'}}>{cert.userName}</span>
                    </div>
                    <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.5rem'}}>
                      {date.toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' })}
                    </div>
                    <div style={{
                      fontSize:'0.6rem', color:'var(--muted2)', letterSpacing:'0.04em',
                      padding:'0.3rem 0.6rem', borderRadius:'8px', background:'var(--surface2)',
                      display:'inline-block', fontFamily:'monospace',
                    }}>
                      {cert.code}
                    </div>
                    {course && (
                      <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginTop:'0.6rem'}}>
                        <div style={{width:'32px', height:'32px', borderRadius:'6px', overflow:'hidden', flexShrink:0, background:'var(--surface2)'}}>
                          <img src={course.img} alt="" loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                        </div>
                        <span style={{fontSize:'0.72rem', color:'var(--muted)'}}>{course.category}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {selectedCert && (
          <div style={{position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem', background:'rgba(0,0,0,0.7)', backdropFilter:'blur(8px)'}}
            onClick={() => setSelectedCert(null)}
          >
            <div ref={certRef} style={{maxWidth:'600px', width:'100%', borderRadius:'20px', overflow:'hidden', background:'var(--card-bg)', border:'1px solid var(--border)', animation:'scaleIn 0.3s ease'}}
              onClick={e => e.stopPropagation()}
            >
              <div style={{
                padding:'3rem 2rem', textAlign:'center',
                background:'linear-gradient(135deg, rgba(240,192,64,0.1), rgba(68,136,255,0.1))',
                borderBottom:'2px solid var(--gold)',
              }}>
                <div style={{fontSize:'3.5rem', marginBottom:'0.5rem'}}>🎓</div>
                <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.5rem', fontWeight:'700', color:'var(--gold)', marginBottom:'0.3rem'}}>Certificate of Completion</h2>
                <div style={{width:'60px', height:'2px', background:'var(--gold)', margin:'0.5rem auto'}}/>
                <p style={{fontSize:'0.85rem', color:'var(--muted)', marginBottom:'1rem'}}>This certifies that</p>
                <p style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'0.5rem'}}>{selectedCert.userName}</p>
                <p style={{fontSize:'0.85rem', color:'var(--muted)', marginBottom:'1rem'}}>has successfully completed the course</p>
                <p style={{fontSize:'1.2rem', fontWeight:'700', color:'var(--teal)', marginBottom:'0.5rem'}}>{selectedCert.courseName}</p>
                <p style={{fontSize:'0.8rem', color:'var(--muted)'}}>
                  on {new Date(selectedCert.completionDate).toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' })}
                </p>
              </div>
              <div style={{padding:'1rem 1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.5rem'}}>
                <span style={{fontSize:'0.6rem', color:'var(--muted2)', fontFamily:'monospace'}}>ID: {selectedCert.code}</span>
                <button onClick={() => window.print()}
                  style={{fontSize:'0.78rem', fontWeight:'600', padding:'0.4rem 1rem', borderRadius:'8px', border:'none', cursor:'pointer', background:'var(--surface2)', color:'var(--text)'}}
                >🖨️ Print</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
