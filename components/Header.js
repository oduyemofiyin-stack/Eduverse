import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useRouter } from 'next/router';

export default function Header() {
  const { currentUser, logout, wishlist, enrolled } = useApp();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header style={{
      position:'sticky', top:0, zIndex:200,
      height:'66px', padding:'0 1.5rem',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background:'rgba(6,8,15,0.92)', backdropFilter:'blur(24px)',
      borderBottom:'1px solid rgba(255,255,255,0.06)',
    }}>

      {/* LOGO */}
      <div onClick={() => router.push('/')} style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer'}}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" stroke="url(#g1)" strokeWidth="1.5"/>
          <ellipse cx="18" cy="18" rx="17" ry="6.5" stroke="url(#g2)" strokeWidth="1" strokeDasharray="2.5 2" transform="rotate(-22 18 18)"/>
          <circle cx="18" cy="18" r="4" fill="url(#g3)"/>
          <circle cx="29" cy="10" r="1.8" fill="#f0c040" opacity="0.85"/>
          <circle cx="7" cy="26" r="1.4" fill="#4488ff" opacity="0.75"/>
          <defs>
            <linearGradient id="g1" x1="1" y1="1" x2="35" y2="35"><stop stopColor="#f0c040"/><stop offset="1" stopColor="#4488ff"/></linearGradient>
            <linearGradient id="g2" x1="1" y1="18" x2="35" y2="18"><stop stopColor="#4488ff"/><stop offset="1" stopColor="#00d4aa"/></linearGradient>
            <linearGradient id="g3" x1="14" y1="14" x2="22" y2="22"><stop stopColor="#f0c040"/><stop offset="1" stopColor="#4488ff"/></linearGradient>
          </defs>
        </svg>
        <span style={{
          fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700',
          background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
        }}>Eduverse</span>
      </div>

      {/* NAV */}
      <nav style={{display:'flex', alignItems:'center', gap:'4px', flexWrap:'wrap'}}>
        {[
          {label:'Courses', path:'/'},
          {label:`♡ Wishlist${wishlist.length > 0 ? ` (${wishlist.length})` : ''}`, path:'/wishlist'},
          {label:`✓ My Learning${enrolled.length > 0 ? ` (${enrolled.length})` : ''}`, path:'/enrolled'},
          {label:'About', path:'/about'},
          {label:'Contact', path:'/contact'},
        ].map(item => (
          <button key={item.path} onClick={() => router.push(item.path)} style={{
            fontFamily:'inherit', fontSize:'0.78rem', fontWeight:'500',
            padding:'0.35rem 0.75rem', borderRadius:'9px', border:'none',
            cursor:'pointer',
            background: router.pathname === item.path ? '#161b26' : 'transparent',
            color: router.pathname === item.path ? '#eef0f8' : '#7a80a0',
            transition:'all 0.2s',
          }}>
            {item.label}
          </button>
        ))}

        {/* USER AVATAR + DROPDOWN */}
        {currentUser && (
          <div style={{position:'relative', marginLeft:'8px'}}>

            {/* AVATAR BUTTON */}
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display:'flex', alignItems:'center', gap:'8px',
                background:'#161b26', border:'1px solid rgba(255,255,255,0.13)',
                borderRadius:'100px', padding:'0.3rem 0.8rem 0.3rem 0.35rem',
                cursor:'pointer',
              }}
            >
              {currentUser.picture ? (
                <img
                  src={currentUser.picture}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                  style={{width:'28px', height:'28px', borderRadius:'50%', objectFit:'cover'}}
                />
              ) : (
                <div style={{
                  width:'28px', height:'28px', borderRadius:'50%',
                  background:'linear-gradient(135deg,#4488ff,#00d4aa)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.72rem', fontWeight:'700', color:'#fff',
                }}>
                  {(currentUser.firstName[0] + (currentUser.lastName[0] || '')).toUpperCase()}
                </div>
              )}
              <span style={{fontSize:'0.8rem', fontWeight:'600', color:'#eef0f8'}}>
                {currentUser.firstName}
              </span>
              <span style={{fontSize:'0.65rem', color:'#7a80a0'}}>▾</span>
            </div>

            {/* DROPDOWN MENU */}
            {dropdownOpen && (
              <div style={{
                position:'absolute', top:'calc(100% + 8px)', right:0,
                background:'#0d1117', border:'1px solid rgba(255,255,255,0.13)',
                borderRadius:'14px', padding:'0.5rem',
                minWidth:'200px', zIndex:300,
                boxShadow:'0 20px 50px rgba(0,0,0,0.5)',
              }}>

                {/* USER INFO */}
                <div style={{padding:'0.6rem 0.8rem 0.8rem', borderBottom:'1px solid rgba(255,255,255,0.06)', marginBottom:'0.4rem'}}>
                  <div style={{fontSize:'0.85rem', fontWeight:'700', color:'#eef0f8', marginBottom:'0.15rem'}}>
                    {currentUser.firstName} {currentUser.lastName}
                  </div>
                  <div style={{fontSize:'0.75rem', color:'#7a80a0'}}>
                    {currentUser.email}
                  </div>
                </div>

                {/* MENU ITEMS */}
                {[
                  {ico:'📚', label:'My Learning', path:'/enrolled'},
                  {ico:'♡', label:'Wishlist', path:'/wishlist'},
                  {ico:'👤', label:'About', path:'/about'},
                  {ico:'📞', label:'Contact', path:'/contact'},
                ].map(item => (
                  <button key={item.path} onClick={() => { router.push(item.path); setDropdownOpen(false); }} style={{
                    display:'flex', alignItems:'center', gap:'0.6rem',
                    padding:'0.55rem 0.8rem', borderRadius:'9px',
                    fontSize:'0.82rem', cursor:'pointer',
                    color:'#7a80a0', transition:'all 0.2s',
                    border:'none', background:'none', width:'100%', textAlign:'left',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='#161b26'; e.currentTarget.style.color='#eef0f8'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='none'; e.currentTarget.style.color='#7a80a0'; }}
                  >
                    {item.ico} {item.label}
                  </button>
                ))}

                {/* SIGN OUT */}
                <button onClick={() => { logout(); setDropdownOpen(false); router.push('/login'); }} style={{
                  display:'flex', alignItems:'center', gap:'0.6rem',
                  padding:'0.55rem 0.8rem', borderRadius:'9px',
                  fontSize:'0.82rem', cursor:'pointer',
                  color:'#ff6b6b', transition:'all 0.2s',
                  border:'none', background:'none', width:'100%', textAlign:'left',
                  marginTop:'0.2rem', borderTop:'1px solid rgba(255,255,255,0.06)',
                  paddingTop:'0.7rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(255,107,107,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='none'; }}
                >
                  ↩ Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}