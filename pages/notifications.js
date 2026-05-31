import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

// Notification center — shows all activity feed items
export default function Notifications() {
  const { activityLog, markNotificationsRead, unreadNotifications } = useApp();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    markNotificationsRead();
  }, []);

  const typeColors = {
    xp: 'var(--gold)',
    badge: 'var(--teal)',
    enroll: 'var(--blue)',
    lesson: 'var(--blue)',
    certificate: 'var(--teal)',
    wishlist: 'var(--pink)',
    quiz: 'var(--gold)',
    comment: 'var(--text2)',
    note: 'var(--muted)',
    leaderboard: 'var(--gold)',
    course_complete: 'var(--teal)',
  };

  const typeIcons = {
    xp: '⚡',
    badge: '🏅',
    enroll: '📚',
    lesson: '▶️',
    certificate: '🎓',
    wishlist: '❤️',
    quiz: '🧠',
    comment: '💬',
    note: '📝',
    leaderboard: '🏆',
    course_complete: '✅',
  };

  const filtered = filter === 'all' ? activityLog : activityLog.filter(a => a.type === filter);
  const types = [...new Set(activityLog.map(a => a.type))];

  if (loading) return (
    <div className="page-container" style={{maxWidth:'800px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'200px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'140px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      {Array.from({length:5}).map((_,i) => (
        <div key={i} style={{height:'60px', background:'var(--surface2)', borderRadius:'12px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      ))}
    </div>
  );

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'800px', margin:'0 auto'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.4rem'}}>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.5rem, 4vw, 2rem)', fontWeight:'700', display:'flex', alignItems:'center', gap:'0.5rem'}}>
            Notifications
            {unreadNotifications > 0 && (
              <span style={{fontSize:'0.7rem', background:'var(--pink)', color:'#fff', padding:'0.15rem 0.5rem', borderRadius:'100px', fontWeight:'700'}}>{unreadNotifications} new</span>
            )}
          </h1>
          <span style={{fontSize:'0.82rem', color:'var(--muted)'}}>{activityLog.length} total</span>
        </div>
        <p style={{color:'var(--muted)', fontSize:'0.88rem', marginBottom:'1.2rem'}}>Your activity and achievement history on Eduverse.</p>

        <div style={{display:'flex', gap:'0.4rem', flexWrap:'wrap', marginBottom:'1.2rem', overflowX:'auto', scrollbarWidth:'none'}}>
          <button onClick={() => setFilter('all')} style={{
            fontSize:'0.72rem', fontWeight:'600', padding:'0.35rem 0.9rem', borderRadius:'100px',
            border: filter === 'all' ? 'none' : '1px solid var(--border)',
            background: filter === 'all' ? 'linear-gradient(135deg,var(--blue),#3366dd)' : 'var(--surface)',
            color: filter === 'all' ? '#fff' : 'var(--muted)', cursor:'pointer', whiteSpace:'nowrap',
          }}>All</button>
          {types.map(type => (
            <button key={type} onClick={() => setFilter(type)} style={{
              fontSize:'0.72rem', fontWeight:'600', padding:'0.35rem 0.9rem', borderRadius:'100px',
              border: filter === type ? 'none' : '1px solid var(--border)',
              background: filter === type ? 'linear-gradient(135deg,var(--blue),#3366dd)' : 'var(--surface)',
              color: filter === type ? '#fff' : 'var(--muted)', cursor:'pointer', whiteSpace:'nowrap',
            }}>{typeIcons[type] || '•'} {type}</button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div style={{textAlign:'center', padding:'3rem 1rem', color:'var(--muted)'}}>
            <div style={{fontSize:'3rem', marginBottom:'0.5rem'}}>🔔</div>
            <h3 style={{fontFamily:'Georgia, serif', color:'var(--text)', marginBottom:'0.3rem'}}>No notifications yet</h3>
            <p style={{fontSize:'0.88rem'}}>Start learning and your activity will show up here.</p>
          </div>
        ) : (
          <div style={{display:'flex', flexDirection:'column', gap:'0.4rem'}}>
            {filtered.map((a, i) => (
              <div key={a.id} className={`list-item`} style={{
                display:'flex', alignItems:'center', gap:'0.8rem', padding:'0.85rem 1rem',
                borderRadius:'12px', background:'var(--card-bg)', border:'1px solid var(--border)',
                transition:'background 0.2s',
              }}>
                <div style={{
                  width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                  fontSize:'1rem', background: (typeColors[a.type] || 'var(--surface2)') + '18',
                }}>
                  {typeIcons[a.type] || '•'}
                </div>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:'0.85rem', fontWeight:'500', lineHeight:'1.4'}}>{a.detail}</div>
                  <div style={{fontSize:'0.7rem', color:'var(--muted)', marginTop:'0.15rem'}}>
                    {new Date(a.date).toLocaleDateString('en-US', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
