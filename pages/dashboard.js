import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import CelebrationModal from '../components/CelebrationModal';
import { DashboardSkeleton } from '../components/Skeleton';
import courses from '../data/courses';

export default function Dashboard() {
  const { enrolled, completed, progress, getCourseProgress, xp, streak, badges, activityLog, getLevelInfo, BADGE_DEFS, currentUser } = useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [celebration, setCelebration] = useState(null);

  // Show celebration when a new badge is earned (first load)
  useEffect(() => {
    if (!loading && badges.length > 0) {
      const lastBadge = badges[badges.length - 1];
      const def = BADGE_DEFS[lastBadge];
      if (def) {
        setCelebration({ icon: def.icon, title: `Badge Earned: ${def.label}`, desc: def.desc });
      }
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (!currentUser) return null;
  if (loading) return <DashboardSkeleton/>;

  const levelInfo = getLevelInfo(xp);
  const enrolledCourses = courses.filter(c => enrolled.includes(c.id));
  const completedCourses = courses.filter(c => completed.includes(c.id));
  const totalLessonsWatched = Object.values(progress).reduce((sum, arr) => sum + arr.length, 0);

  // Activity heatmap data (last 12 weeks)
  const today = new Date();
  const heatmapData = [];
  for (let d = 90; d >= 0; d--) {
    const date = new Date(today);
    date.setDate(date.getDate() - d);
    const dateStr = date.toDateString();
    const count = activityLog.filter(a => new Date(a.date).toDateString() === dateStr).length;
    heatmapData.push({ date: dateStr, count: Math.min(count, 8) });
  }

  const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = [];
  for (let m = 0; m < 3; m++) {
    const d = new Date(today);
    d.setMonth(d.getMonth() - m);
    months.unshift(d.toLocaleString('default', { month: 'short' }));
  }

  const heatColor = (c) => {
    if (c === 0) return 'var(--surface2)';
    if (c <= 2) return 'rgba(68,136,255,0.25)';
    if (c <= 4) return 'rgba(68,136,255,0.5)';
    if (c <= 6) return 'rgba(68,136,255,0.75)';
    return 'rgba(68,136,255,1)';
  };

  return (
    <div className="page-container page-transition" style={{maxWidth:'1100px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>

      {/* XP & STREAK HEADER */}
      <div style={{
        background:'linear-gradient(135deg, var(--surface), var(--surface2))',
        border:'1px solid var(--border)', borderRadius:'20px',
        padding:'1.5rem 2rem', marginBottom:'1.5rem',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        flexWrap:'wrap', gap:'1rem',
      }}>
        <div>
          <div style={{fontSize:'0.76rem', color:'var(--muted)', fontWeight:'600', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:'0.2rem'}}>Welcome back</div>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700'}}>{currentUser.firstName}'s Dashboard</h1>
        </div>
        <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
          <div style={{textAlign:'center', padding:'0.5rem 1rem', background:'var(--surface)', borderRadius:'12px', border:'1px solid var(--border)'}}>
            <div style={{fontSize:'1.3rem', fontWeight:'700', color:'var(--gold)'}}>{xp}</div>
            <div style={{fontSize:'0.68rem', color:'var(--muted)', letterSpacing:'0.05em', textTransform:'uppercase'}}>XP</div>
          </div>
          <div style={{textAlign:'center', padding:'0.5rem 1rem', background:'var(--surface)', borderRadius:'12px', border:'1px solid var(--border)'}}>
            <div style={{fontSize:'1.3rem', fontWeight:'700', color: streak >= 7 ? 'var(--gold)' : 'var(--teal)'}}>🔥 {streak}</div>
            <div style={{fontSize:'0.68rem', color:'var(--muted)', letterSpacing:'0.05em', textTransform:'uppercase'}}>Day Streak</div>
          </div>
          <div style={{textAlign:'center', padding:'0.5rem 1rem', background:'var(--surface)', borderRadius:'12px', border:'1px solid var(--border)'}}>
            <div style={{fontSize:'1.3rem', fontWeight:'700', color:'var(--blue)'}}>Lv.{levelInfo.level}</div>
            <div style={{fontSize:'0.68rem', color:'var(--muted)', letterSpacing:'0.05em', textTransform:'uppercase'}}>{levelInfo.title}</div>
          </div>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.5rem'}} className="dash-grid">
        {/* LEVEL PROGRESS */}
        <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'16px', padding:'1.3rem'}}>
          <h3 style={{fontSize:'0.82rem', fontWeight:'700', marginBottom:'0.8rem'}}>Level Progress</h3>
          <div style={{display:'flex', alignItems:'center', gap:'0.8rem', marginBottom:'0.6rem'}}>
            <div style={{fontSize:'2rem', fontWeight:'700', color:'var(--blue)'}}>{levelInfo.level}</div>
            <div>
              <div style={{fontSize:'0.85rem', fontWeight:'600'}}>{levelInfo.title}</div>
              <div style={{fontSize:'0.72rem', color:'var(--muted)'}}>{levelInfo.nextTitle ? `Next: ${levelInfo.nextTitle}` : 'Maximum level'}</div>
            </div>
          </div>
          {levelInfo.xpForNext > 0 && (
            <>
              <div style={{width:'100%', height:'6px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden', marginBottom:'0.4rem'}}>
                <div style={{width:`${levelInfo.progress}%`, height:'100%', borderRadius:'100px', background:'linear-gradient(90deg,var(--blue),var(--teal))', transition:'width 0.6s'}}/>
              </div>
              <div style={{fontSize:'0.72rem', color:'var(--muted)'}}>{xp - (levelInfo.level >= 2 ? [0,0,100,250,500,1000,2000,3500,5000,7500,10000][levelInfo.level] : 0)} / {levelInfo.xpForNext} XP to next level</div>
            </>
          )}
        </div>

        {/* STATS OVERVIEW */}
        <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'16px', padding:'1.3rem'}}>
          <h3 style={{fontSize:'0.82rem', fontWeight:'700', marginBottom:'0.8rem'}}>Overview</h3>
          <div className="overview-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.8rem'}}>
            {[
              {label:'Enrolled', value:enrolledCourses.length, color:'var(--blue)'},
              {label:'Completed', value:completedCourses.length, color:'var(--gold)'},
              {label:'Lessons Done', value:totalLessonsWatched, color:'var(--teal)'},
              {label:'Badges', value:badges.length, color:'var(--pink)'},
            ].map(s => (
              <div key={s.label} style={{background:'var(--surface2)', borderRadius:'10px', padding:'0.8rem', textAlign:'center'}}>
                <div style={{fontSize:'1.4rem', fontWeight:'700', color:s.color}}>{s.value}</div>
                <div style={{fontSize:'0.68rem', color:'var(--muted)', letterSpacing:'0.04em', textTransform:'uppercase'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.5rem'}} className="dash-grid">
        {/* ACTIVITY HEATMAP */}
        <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'16px', padding:'1.3rem'}}>
          <h3 style={{fontSize:'0.82rem', fontWeight:'700', marginBottom:'0.8rem'}}>Activity (Last 90 Days)</h3>
          <div style={{display:'flex', gap:'2px'}}>
            <div style={{display:'flex', flexDirection:'column', gap:'2px', marginRight:'4px', paddingTop:'14px'}}>
              {['Mon','','Wed','','Fri',''].map(d => (
                <span key={d} style={{fontSize:'0.55rem', color:'var(--muted2)', height:'10px', lineHeight:'10px'}}>{d}</span>
              ))}
            </div>
            <div style={{display:'flex', gap:'2px', flexWrap:'wrap', flex:1, alignContent:'flex-start'}}>
              {heatmapData.map((d, i) => (
                <div key={i} title={`${d.date}: ${d.count} activities`} style={{
                  width:'10px', height:'10px', borderRadius:'2px',
                  background: heatColor(d.count),
                  transition:'background 0.2s',
                }}/>
              ))}
            </div>
          </div>
        </div>

        {/* BADGES */}
        <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'16px', padding:'1.3rem'}}>
          <h3 style={{fontSize:'0.82rem', fontWeight:'700', marginBottom:'0.8rem'}}>Badges ({badges.length}/{Object.keys(BADGE_DEFS).length})</h3>
          <div style={{display:'flex', gap:'0.6rem', flexWrap:'wrap'}}>
            {Object.entries(BADGE_DEFS).map(([id, def]) => {
              const earned = badges.includes(id);
              return (
                <div key={id} title={def.desc} style={{
                  padding:'0.4rem 0.7rem', borderRadius:'100px',
                  background: earned ? 'rgba(68,136,255,0.15)' : 'var(--surface2)',
                  border: `1px solid ${earned ? 'rgba(68,136,255,0.3)' : 'var(--border)'}`,
                  color: earned ? 'var(--text)' : 'var(--muted2)',
                  fontSize:'0.78rem', fontWeight:'500',
                  opacity: earned ? 1 : 0.5,
                  display:'flex', alignItems:'center', gap:'0.3rem',
                  transition:'all 0.2s',
                }}>
                  <span style={{fontSize:'0.9rem'}}>{earned ? def.icon : '🔒'}</span>
                  {def.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ACTIVITY FEED */}
      <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'16px', padding:'1.3rem'}}>
        <h3 style={{fontSize:'0.82rem', fontWeight:'700', marginBottom:'0.8rem'}}>Recent Activity</h3>
        {activityLog.length === 0 ? (
          <div style={{textAlign:'center', padding:'2rem', color:'var(--muted)'}}>
            <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>🚀</div>
            <p style={{fontSize:'0.85rem'}}>Start learning to see your activity here!</p>
          </div>
        ) : (
          <div style={{display:'flex', flexDirection:'column', gap:'0.4rem', maxHeight:'400px', overflowY:'auto'}}>
            {activityLog.slice(0, 30).map(a => {
              const icons = { xp:'⚡', badge:'🏅', enroll:'📚', lesson:'🎯', certificate:'🎓', quiz:'🧠', note:'📝', comment:'💬', wishlist:'♡' };
              return (
                <div key={a.id} style={{
                  display:'flex', alignItems:'center', gap:'0.7rem',
                  padding:'0.5rem 0.7rem', borderRadius:'8px',
                  background:'var(--surface2)', fontSize:'0.82rem',
                }}>
                  <span style={{fontSize:'1rem'}}>{icons[a.type] || '📌'}</span>
                  <span style={{flex:1, color:'var(--text)'}}>{a.detail}</span>
                  <span style={{fontSize:'0.68rem', color:'var(--muted2)'}}>
                    {new Date(a.date).toLocaleDateString(undefined, { month:'short', day:'numeric' })}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .dash-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <CelebrationModal open={!!celebration} onClose={() => setCelebration(null)}
        icon={celebration?.icon} title={celebration?.title} desc={celebration?.desc} />
    </div>
  );
}