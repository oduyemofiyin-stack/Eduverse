import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { ProfileSkeleton } from '../components/Skeleton';
import courses from '../data/courses';

export default function Profile() {
  const { currentUser, enrolled, wishlist, completed, getCourseProgress, logout, xp, streak, badges, getLevelInfo, BADGE_DEFS, certificates, syncToFirestore } = useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [pfpError, setPfpError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!currentUser) return null;
  if (loading) return <ProfileSkeleton/>;

  const enrolledCourses = courses.filter(c => enrolled.includes(c.id));
  const completedCourses = courses.filter(c => completed.includes(c.id));
  const wishlistCourses = courses.filter(c => wishlist.includes(c.id));
  const totalProgress = enrolledCourses.length > 0
    ? Math.round(enrolledCourses.reduce((sum, c) => sum + getCourseProgress(c.id, c.lessons.length), 0) / enrolledCourses.length)
    : 0;
  const levelInfo = getLevelInfo(xp);

  return (
    <div className="page-container" style={{maxWidth:'900px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>

      {/* PROFILE HEADER */}
      <div style={{
        background:'linear-gradient(135deg,#0d1117,#161b26)',
        border:'1px solid rgba(255,255,255,0.06)',
        borderRadius:'20px', padding:'2rem',
        display:'flex', alignItems:'center', gap:'1.5rem',
        flexWrap:'wrap', marginBottom:'1.5rem',
      }}>
        {/* AVATAR */}
        <div style={{position:'relative', flexShrink:0}}>
          {currentUser.picture && !pfpError ? (
            <img
              src={currentUser.picture}
              alt="avatar"
              referrerPolicy="no-referrer"
              onError={() => setPfpError(true)}
              style={{width:'90px', height:'90px', borderRadius:'50%', objectFit:'cover', border:'3px solid #f0c040'}}
            />
          ) : (
            <div style={{
              width:'90px', height:'90px', borderRadius:'50%',
              background:'linear-gradient(135deg,#4488ff,#00d4aa)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'Georgia, serif', fontSize:'2.2rem', fontWeight:'700',
              color:'#fff', border:'3px solid #f0c040',
            }}>
              {(currentUser.firstName[0] + (currentUser.lastName[0] || '')).toUpperCase()}
            </div>
          )}
          {/* ONLINE DOT */}
          <div style={{
            position:'absolute', bottom:'4px', right:'4px',
            width:'16px', height:'16px', borderRadius:'50%',
            background:'#00d4aa', border:'2px solid #0d1117',
          }}/>
        </div>

        {/* USER INFO */}
        <div style={{flex:1, minWidth:'200px'}}>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'1.6rem', fontWeight:'700', marginBottom:'0.2rem'}}>
            {currentUser.firstName} {currentUser.lastName}
          </h1>
          <div style={{fontSize:'0.85rem', color:'#7a80a0', marginBottom:'0.6rem'}}>{currentUser.email}</div>
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
            <span style={{
              fontSize:'0.72rem', fontWeight:'600', letterSpacing:'0.06em', textTransform:'uppercase',
              padding:'0.2rem 0.7rem', borderRadius:'100px',
              background:'rgba(240,192,64,0.15)', color:'#f0c040',
              border:'1px solid rgba(240,192,64,0.3)',
            }}>
              {currentUser.provider === 'Google' ? '🔷 Google Account' : '✉️ Email Account'}
            </span>
          </div>
        </div>

        {/* XP & STREAK */}
        <div style={{display:'flex', gap:'0.6rem'}}>
          <div style={{textAlign:'center', padding:'0.4rem 0.7rem', background:'#0d1117', borderRadius:'10px', border:'1px solid rgba(255,255,255,0.06)'}}>
            <div style={{fontSize:'1rem', fontWeight:'700', color:'#f0c040'}}>⚡{xp}</div>
            <div style={{fontSize:'0.6rem', color:'#7a80a0', letterSpacing:'0.04em', textTransform:'uppercase'}}>XP</div>
          </div>
          <div style={{textAlign:'center', padding:'0.4rem 0.7rem', background:'#0d1117', borderRadius:'10px', border:'1px solid rgba(255,255,255,0.06)'}}>
            <div style={{fontSize:'1rem', fontWeight:'700', color: streak >= 7 ? '#f0c040' : '#00d4aa'}}>🔥{streak}</div>
            <div style={{fontSize:'0.6rem', color:'#7a80a0', letterSpacing:'0.04em', textTransform:'uppercase'}}>Streak</div>
          </div>
          <div style={{textAlign:'center', padding:'0.4rem 0.7rem', background:'#0d1117', borderRadius:'10px', border:'1px solid rgba(255,255,255,0.06)'}}>
            <div style={{fontSize:'1rem', fontWeight:'700', color:'#4488ff'}}>Lv.{levelInfo.level}</div>
            <div style={{fontSize:'0.6rem', color:'#7a80a0', letterSpacing:'0.04em', textTransform:'uppercase'}}>{levelInfo.title}</div>
          </div>
        </div>

        {/* SYNC */}
        <button
          onClick={() => { setSyncing(true); syncToFirestore(); setTimeout(() => setSyncing(false), 1200); }}
          style={{
            fontSize:'0.82rem', fontWeight:'600',
            padding:'0.6rem 1.2rem', borderRadius:'10px',
            border:'1px solid rgba(68,136,255,0.3)',
            background:'rgba(68,136,255,0.08)', color:'#4488ff',
            cursor:'pointer',
            opacity: syncing ? 0.5 : 1,
          }}
          disabled={syncing}
        >
          {syncing ? '⏳ Syncing...' : '☁️ Sync to Cloud'}
        </button>

        {/* SIGN OUT */}
        <button
          onClick={() => { logout(); router.push('/login'); }}
          style={{
            fontSize:'0.84rem', fontWeight:'600',
            padding:'0.6rem 1.2rem', borderRadius:'10px',
            border:'1px solid rgba(255,107,107,0.3)',
            background:'rgba(255,107,107,0.08)', color:'#ff6b6b',
            cursor:'pointer',
          }}
        >
          ↩ Sign Out
        </button>
      </div>

      {/* STATS ROW */}
      <div className="profile-stats" style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(160px,100%), 1fr))',
        gap:'1rem', marginBottom:'1.5rem',
      }}>
        {[
          {ico:'📚', label:'Enrolled', value:enrolledCourses.length, color:'#4488ff'},
          {ico:'🏆', label:'Completed', value:completedCourses.length, color:'#f0c040'},
          {ico:'♡', label:'Wishlisted', value:wishlistCourses.length, color:'#ff6b9d'},
          {ico:'📈', label:'Avg Progress', value:`${totalProgress}%`, color:'#00d4aa'},
        ].map(s => (
          <div key={s.label} style={{
            background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)',
            borderRadius:'14px', padding:'1.2rem', textAlign:'center',
          }}>
            <div style={{fontSize:'1.8rem', marginBottom:'0.4rem'}}>{s.ico}</div>
            <div style={{fontFamily:'Georgia, serif', fontSize:'1.6rem', fontWeight:'700', color:s.color}}>{s.value}</div>
            <div style={{fontSize:'0.75rem', color:'#7a80a0', marginTop:'0.2rem'}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* BADGES */}
      <div style={{marginBottom:'1.5rem'}}>
        <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', fontWeight:'700', marginBottom:'1rem'}}>
          🏅 Badges ({badges.length}/{Object.keys(BADGE_DEFS).length})
        </h2>
        <div style={{display:'flex', gap:'0.7rem', flexWrap:'wrap'}}>
          {Object.entries(BADGE_DEFS).map(([id, def]) => {
            const earned = badges.includes(id);
            return (
              <div key={id} title={def.desc} style={{
                padding:'0.5rem 0.8rem', borderRadius:'100px',
                background: earned ? 'rgba(68,136,255,0.12)' : '#0d1117',
                border: `1px solid ${earned ? 'rgba(68,136,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
                color: earned ? '#eef0f8' : '#3a4060',
                fontSize:'0.82rem', fontWeight:'500',
                opacity: earned ? 1 : 0.5,
                display:'flex', alignItems:'center', gap:'0.4rem',
              }}>
                <span>{earned ? def.icon : '🔒'}</span>
                {def.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* ENROLLED COURSES */}
      {enrolledCourses.length > 0 && (
        <div style={{marginBottom:'1.5rem'}}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', fontWeight:'700', marginBottom:'1rem'}}>
            📚 My Courses
          </h2>
          <div style={{display:'flex', flexDirection:'column', gap:'0.7rem'}}>
            {enrolledCourses.map(c => {
              const prog = getCourseProgress(c.id, c.lessons.length);
              const isDone = completed.includes(c.id);
              return (
                <div key={c.id}
                  onClick={() => router.push(`/courses/${c.id}`)}
                  style={{
                    background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)',
                    borderRadius:'14px', padding:'1rem',
                    display:'flex', alignItems:'center', gap:'1rem',
                    cursor:'pointer', transition:'all 0.2s', flexWrap:'wrap',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(68,136,255,0.22)'; e.currentTarget.style.background='#161b26'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.background='#0d1117'; }}
                >
                  <img src={c.img} alt={c.title} style={{width:'60px', height:'60px', borderRadius:'10px', objectFit:'cover', flexShrink:0}}/>
                  <div style={{flex:1, minWidth:'150px'}}>
                    <div style={{fontFamily:'Georgia, serif', fontSize:'0.95rem', fontWeight:'700', marginBottom:'0.2rem'}}>{c.title}</div>
                    <div style={{fontSize:'0.76rem', color:'#7a80a0', marginBottom:'0.5rem'}}>by {c.instructor}</div>
                    <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                      <div style={{flex:1, height:'4px', background:'rgba(255,255,255,0.06)', borderRadius:'100px'}}>
                        <div style={{height:'100%', borderRadius:'100px', background:'linear-gradient(135deg,#4488ff,#00d4aa)', width:`${prog}%`, transition:'width 0.4s'}}/>
                      </div>
                      <span style={{fontSize:'0.72rem', color:'#7a80a0', flexShrink:0}}>{prog}%</span>
                    </div>
                  </div>
                  {isDone ? (
                    <span style={{fontSize:'0.72rem', fontWeight:'700', padding:'0.2rem 0.7rem', borderRadius:'100px', background:'rgba(240,192,64,0.15)', color:'#f0c040', border:'1px solid rgba(240,192,64,0.3)', flexShrink:0}}>🏆 Completed</span>
                  ) : (
                    <span style={{fontSize:'0.72rem', fontWeight:'700', padding:'0.2rem 0.7rem', borderRadius:'100px', background:'rgba(68,136,255,0.15)', color:'#4488ff', border:'1px solid rgba(68,136,255,0.3)', flexShrink:0}}>In Progress</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CERTIFICATES */}
      {completedCourses.length > 0 && (
        <div style={{marginBottom:'1.5rem'}}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', fontWeight:'700', marginBottom:'1rem'}}>
            🏆 My Certificates
          </h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap:'1rem'}}>
            {completedCourses.map(c => {
              const cert = certificates.filter(cert => cert.courseId === c.id).slice(-1)[0];
              return (
                <div key={c.id} style={{
                  background:'linear-gradient(135deg,#0a0e1a,#0f1528)',
                  border:'1px solid rgba(240,192,64,0.3)',
                  borderRadius:'14px', padding:'1.2rem', textAlign:'center',
                }}>
                  <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>🎓</div>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'0.95rem', fontWeight:'700', color:'#f0c040', marginBottom:'0.3rem'}}>{c.title}</div>
                  <div style={{fontSize:'0.75rem', color:'#7a80a0', marginBottom:'0.3rem'}}>by {c.instructor}</div>
                  {cert && (
                    <div style={{fontSize:'0.65rem', color:'#3a4060', fontFamily:'monospace', letterSpacing:'0.05em', marginBottom:'0.8rem', wordBreak:'break-all'}}>
                      {cert.code}
                    </div>
                  )}
                  <button
                    onClick={() => router.push(`/courses/${c.id}`)}
                    style={{
                      fontSize:'0.8rem', fontWeight:'600', padding:'0.5rem 1rem',
                      borderRadius:'8px', border:'none', cursor:'pointer',
                      background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                    }}
                  >View Certificate</button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* EMPTY STATE */}
      {enrolledCourses.length === 0 && (
        <div style={{textAlign:'center', padding:'3rem 1rem', color:'#7a80a0'}}>
          <div style={{fontSize:'3.5rem', marginBottom:'0.8rem'}}>🎯</div>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', color:'#eef0f8', marginBottom:'0.4rem'}}>Start your learning journey</h2>
          <p style={{marginBottom:'1.4rem'}}>Enroll in a course to track your progress here</p>
          <button onClick={() => router.push('/')} style={{
            fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
            borderRadius:'12px', border:'none', cursor:'pointer',
            background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
          }}>Browse Courses</button>
        </div>
      )}
    </div>
  );
}