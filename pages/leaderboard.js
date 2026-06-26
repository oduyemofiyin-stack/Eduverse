import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import courses from '../data/courses';

const RankCard = ({ rank, title, value, icon, color }) => (
  <div style={{padding:'1.2rem', borderRadius:'16px', background:'var(--card-bg)', border:'1px solid var(--border)', textAlign:'center'}}>
    <div style={{fontSize:'0.65rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--muted)', marginBottom:'0.2rem'}}>{title}</div>
    <div style={{fontSize:'2rem', fontWeight:'700', color: color || 'var(--text)'}}>{value}</div>
    <div style={{fontSize:'0.7rem', color:'var(--muted2)'}}>{icon}</div>
  </div>
);

const BadgeList = ({ badges }) => {
  const allBadges = [
    { id: 'first_lesson', icon: '', label: 'First Steps' },
    { id: 'quiz_whiz', icon: '', label: 'Quiz Whiz' },
    { id: 'streak_7', icon: '', label: 'Streak Master' },
    { id: 'graduate', icon: '', label: 'Course Graduate' },
    { id: 'explorer', icon: '', label: 'Knowledge Seeker' },
    { id: 'centurion', icon: '', label: 'Centurion' },
    { id: 'bookworm', icon: '', label: 'Bookworm' },
  ];
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(130px, 1fr))', gap:'0.8rem'}}>
      {allBadges.map(b => {
        const earned = badges.includes(b.id);
        return (
          <div key={b.id} style={{
            padding:'1rem', borderRadius:'12px', textAlign:'center',
            background: earned ? `${'rgba(0,212,170,0.1)'}` : 'var(--surface2)',
            border: `1px solid ${earned ? 'rgba(0,212,170,0.2)' : 'var(--border)'}`,
            opacity: earned ? 1 : 0.4,
            transition:'opacity 0.2s, transform 0.2s',
          }}>
            <div style={{fontSize:'1.5rem', marginBottom:'0.2rem', filter: earned ? 'none' : 'grayscale(1)'}}>{b.icon}</div>
            <div style={{fontSize:'0.72rem', fontWeight:'600', color: earned ? 'var(--teal)' : 'var(--muted)'}}>{b.label}</div>
            {earned && <div style={{fontSize:'0.6rem', color:'var(--teal)'}}>✓ Earned</div>}
          </div>
        );
      })}
    </div>
  );
};

export default function Leaderboard() {
  const { xp, streak, badges, getLevelInfo, enrolled, completed, activityLog } = useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('global');

  useEffect(() => { const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t); }, []);

  const levelInfo = getLevelInfo(xp);
  const completedCount = completed.length;
  const enrolledCount = enrolled.length;

  const activityByDate = {};
  activityLog.forEach(a => {
    const day = new Date(a.date).toDateString();
    activityByDate[day] = (activityByDate[day] || 0) + 1;
  });
  const mostActiveDay = Math.max(...Object.values(activityByDate), 0);

  if (loading) return (
    <div className="page-container" style={{maxWidth:'1000px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'220px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'160px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'1rem', marginBottom:'1.5rem'}}>
        {Array.from({length:4}).map((_,i) => <div key={i} style={{height:'100px', background:'var(--surface2)', borderRadius:'16px'}} className="shimmer-block"/>)}
      </div>
    </div>
  );

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'1000px', margin:'0 auto'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.5rem, 4vw, 2.2rem)', fontWeight:'700', marginBottom:'0.3rem'}}>
          <span className="shimmer-text">Leaderboard</span>
        </h1>
        <p style={{color:'var(--muted)', fontSize:'0.88rem', marginBottom:'1.5rem', maxWidth:'500px'}}>Track your achievements, badges, and learning stats. Compete with yourself and improve every day.</p>

        <div style={{display:'flex', gap:'0.4rem', marginBottom:'1.5rem'}}>
          <button onClick={() => setTab('global')} style={{
            fontSize:'0.78rem', fontWeight:'600', padding:'0.4rem 1.2rem', borderRadius:'100px',
            border: tab === 'global' ? 'none' : '1px solid var(--border)',
            background: tab === 'global' ? 'linear-gradient(135deg,var(--blue),#3366dd)' : 'var(--surface)',
            color: tab === 'global' ? '#fff' : 'var(--muted)', cursor:'pointer',
          }}>My Stats</button>
          <button onClick={() => setTab('badges')} style={{
            fontSize:'0.78rem', fontWeight:'600', padding:'0.4rem 1.2rem', borderRadius:'100px',
            border: tab === 'badges' ? 'none' : '1px solid var(--border)',
            background: tab === 'badges' ? 'linear-gradient(135deg,var(--blue),#3366dd)' : 'var(--surface)',
            color: tab === 'badges' ? '#fff' : 'var(--muted)', cursor:'pointer',
          }}>Badges</button>
        </div>

        {tab === 'global' && (
          <>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(170px, 1fr))', gap:'1rem', marginBottom:'2rem'}}>
              <RankCard rank={levelInfo.level} title="Level" value={`${levelInfo.title}`} icon={`Level ${levelInfo.level}`} color="var(--gold)" />
              <RankCard rank={xp} title="Total XP" value={xp.toLocaleString()} icon={`${levelInfo.progress}% to ${levelInfo.nextTitle || 'Max'}`} color="var(--blue)" />
              <RankCard rank={streak} title="Streak" value={`${streak}d`} icon="" color="var(--pink)" />
              <RankCard rank={completedCount} title="Courses Done" value={completedCount} icon={`${enrolledCount} enrolled`} color="var(--teal)" />
            </div>

            <div style={{padding:'1.2rem', borderRadius:'16px', background:'var(--card-bg)', border:'1px solid var(--border)', marginBottom:'1.5rem'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.5rem'}}>
                <span style={{fontSize:'0.85rem', fontWeight:'700'}}>Next Level</span>
                <span style={{fontSize:'0.72rem', color:'var(--muted)'}}>{levelInfo.nextTitle || 'Max Level'}</span>
              </div>
              <div style={{height:'6px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                <div style={{width:`${levelInfo.progress}%`, height:'100%', borderRadius:'100px', background:'linear-gradient(90deg,var(--gold),var(--blue))', transition:'width 0.6s'}}/>
              </div>
              <div style={{fontSize:'0.72rem', color:'var(--muted)', marginTop:'0.3rem', textAlign:'right'}}>
                {xp} / {levelInfo.xpForNext > 0 ? xp + (levelInfo.xpForNext - Math.round(levelInfo.xpForNext * levelInfo.progress / 100)) : 'Max'}
              </div>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'1rem', marginBottom:'1.5rem'}}>
              <div style={{padding:'1rem', borderRadius:'12px', background:'var(--surface)', border:'1px solid var(--border)'}}>
                <div style={{fontSize:'0.65rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--muted)', marginBottom:'0.15rem'}}>Total Activity</div>
                <div style={{fontWeight:'700', fontSize:'1.3rem'}}>{activityLog.length}</div>
                <div style={{fontSize:'0.65rem', color:'var(--muted2)'}}>actions logged</div>
              </div>
              <div style={{padding:'1rem', borderRadius:'12px', background:'var(--surface)', border:'1px solid var(--border)'}}>
                <div style={{fontSize:'0.65rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--muted)', marginBottom:'0.15rem'}}>Most Active Day</div>
                <div style={{fontWeight:'700', fontSize:'1.3rem'}}>{mostActiveDay}</div>
                <div style={{fontSize:'0.65rem', color:'var(--muted2)'}}>actions in one day</div>
              </div>
            </div>
          </>
        )}

        {tab === 'badges' && <BadgeList badges={badges} />}
      </div>
    </div>
  );
}
