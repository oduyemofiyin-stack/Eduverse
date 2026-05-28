import { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { useRouter } from 'next/router';

export default function Header() {
  const { currentUser, logout, wishlist, enrolled, theme, toggleTheme } = useApp();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const sy = window.scrollY;
      setScrolled(sy > 20);
      if (sy > 100) {
        setHeaderHidden(sy > lastScrollY.current);
      } else {
        setHeaderHidden(false);
      }
      lastScrollY.current = sy;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    {label:'Courses', path:'/'},
    {label:'Search', path:'/search'},
    {label:'Dashboard', path:'/dashboard'},
    {label:`Wishlist${wishlist.length > 0 ? ` (${wishlist.length})` : ''}`, path:'/wishlist'},
    {label:`My Learning${enrolled.length > 0 ? ` (${enrolled.length})` : ''}`, path:'/enrolled'},
    {label:'About', path:'/about'},
    {label:'Contact', path:'/contact'},
  ];

  return (
    <header className={`header-collapsible ${headerHidden ? 'header-hidden' : ''}`} style={{
      position:'sticky', top:0, zIndex:200,
      background: scrolled ? 'var(--header-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition:'background 0.3s, backdrop-filter 0.3s, border-color 0.3s, box-shadow 0.3s',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
    }}>
      <div style={{
        height:'66px', padding:'0 1.2rem',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        maxWidth:'1280px', margin:'0 auto',
      }}>

        {/* LEFT: HAMBURGER (mobile) + LOGO (desktop) */}
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <button
            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setDropdownOpen(false); }}
            className="hamburger"
            aria-label="Menu"
            style={{
              background:'var(--surface2)', border:'1px solid var(--border2)',
              borderRadius:'9px', padding:'0.4rem 0.6rem',
              cursor:'pointer', color:'var(--text)', fontSize:'1.1rem', lineHeight:'1',
              transition:'background 0.2s',
            }}>
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="3" x2="15" y2="15"/><line x1="15" y1="3" x2="3" y2="15"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="4" x2="16" y2="4"/><line x1="2" y1="9" x2="16" y2="9"/><line x1="2" y1="14" x2="16" y2="14"/>
              </svg>
            )}
          </button>
          <div onClick={() => { router.push('/'); setMobileMenuOpen(false); }}
            style={{display:'flex', alignItems:'center', gap:'8px', cursor:'pointer'}}>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
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
              fontFamily:'Georgia, serif', fontSize:'1.3rem', fontWeight:'700',
              background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            }}>Eduverse</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>

          {/* DESKTOP NAV */}
          <nav style={{display:'flex', alignItems:'center', gap:'2px'}} className="desktop-nav">
            {navItems.map(item => {
              const isActive = router.pathname === item.path;
              return (
                <button key={item.path} onClick={() => router.push(item.path)} style={{
                  fontFamily:'inherit', fontSize:'0.76rem', fontWeight:'500',
                  padding:'0.32rem 0.7rem', borderRadius:'9px', border:'none',
                  cursor:'pointer', position:'relative',
                  background: isActive ? 'var(--surface2)' : 'transparent',
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  transition:'background 0.2s, color 0.2s',
                }}>
{item.ico} {item.label}
                  {isActive && (
                    <span style={{
                      position:'absolute', bottom:'2px', left:'50%',
                      transform:'translateX(-50%)',
                      width:'16px', height:'3px',
                      borderRadius:'100px',
                      background:'linear-gradient(90deg,var(--blue),var(--teal))',
                    }}/>
                  )}
                </button>
              );
            })}
          </nav>

          {/* THEME TOGGLE */}
          <button
            onClick={() => {
              toggleTheme();
              const btn = document.getElementById('themeBtn');
              if (btn) { btn.classList.remove('theme-spin'); void btn.offsetWidth; btn.classList.add('theme-spin'); }
            }}
            id="themeBtn"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              background:'var(--surface2)', border:'1px solid var(--border2)',
              borderRadius:'9px', padding:'0.38rem 0.6rem',
              cursor:'pointer', fontSize:'0.95rem', lineHeight:'1',
            }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* USER AVATAR / GOOGLE SIGN-IN */}
          {currentUser ? (
            <div style={{position:'relative'}}>
              <div onClick={() => { setDropdownOpen(!dropdownOpen); setMobileMenuOpen(false); }}
                style={{
                  display:'flex', alignItems:'center', gap:'6px',
                  background:'var(--surface2)', border:'1px solid var(--border2)',
                  borderRadius:'100px', padding:'0.25rem 0.7rem 0.25rem 0.3rem',
                  cursor:'pointer', transition:'background 0.2s',
                }}>
                {currentUser.picture && !avatarError ? (
                  <img src={currentUser.picture} alt="avatar" referrerPolicy="no-referrer"
                    onError={() => setAvatarError(true)}
                    style={{width:'26px', height:'26px', borderRadius:'50%', objectFit:'cover'}}/>
                ) : (
                  <div style={{
                    width:'26px', height:'26px', borderRadius:'50%',
                    background:'linear-gradient(135deg,var(--blue),var(--teal))',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'0.68rem', fontWeight:'700', color:'#fff',
                  }}>
                    {(currentUser.firstName[0] + (currentUser.lastName[0] || '')).toUpperCase()}
                  </div>
                )}
                <span className="user-name-desktop" style={{fontSize:'0.76rem', fontWeight:'600', color:'var(--text)', maxWidth:'80px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                  {currentUser.firstName}
                </span>
                <span style={{fontSize:'0.6rem', color:'var(--muted)'}}>▾</span>
              </div>

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div className="dropdown-enter" style={{
                  position:'absolute', top:'calc(100% + 8px)', right:0,
                  background:'var(--surface)', border:'1px solid var(--border2)',
                  borderRadius:'14px', padding:'0.5rem',
                  minWidth:'200px', zIndex:300,
                  boxShadow:'var(--shadow-lg)',
                }}>
                  <div style={{padding:'0.6rem 0.8rem 0.8rem', borderBottom:'1px solid var(--border)', marginBottom:'0.4rem'}}>
                    <div style={{fontSize:'0.85rem', fontWeight:'700', color:'var(--text)', marginBottom:'0.15rem'}}>
                      {currentUser.firstName} {currentUser.lastName}
                    </div>
                    <div style={{fontSize:'0.75rem', color:'var(--muted)'}}>{currentUser.email}</div>
                  </div>
                  {[
                  {ico:'👤', label:'My Profile', path:'/profile'},
                  {ico:'📊', label:'Dashboard', path:'/dashboard'},
                  {ico:'📚', label:'My Learning', path:'/enrolled'},
                  {ico:'♡', label:'Wishlist', path:'/wishlist'},
                  {ico:'🔍', label:'Search', path:'/search'},
                  {ico:'ℹ️', label:'About', path:'/about'},
                  {ico:'✉️', label:'Contact', path:'/contact'},
                  ].map(item => (
                    <button key={item.path}
                      onClick={() => { router.push(item.path); setDropdownOpen(false); }}
                      style={{
                        display:'flex', alignItems:'center', gap:'0.6rem',
                        padding:'0.55rem 0.8rem', borderRadius:'9px',
                        fontSize:'0.82rem', cursor:'pointer',
                        color:'var(--muted)', border:'none',
                        background:'none', width:'100%', textAlign:'left',
                        transition:'background 0.15s, color 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background='var(--surface2)'; e.currentTarget.style.color='var(--text)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background='none'; e.currentTarget.style.color='var(--muted)'; }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    onClick={() => { logout(); setDropdownOpen(false); router.push('/login'); }}
                    style={{
                      display:'flex', alignItems:'center', gap:'0.6rem',
                      padding:'0.65rem 0.8rem', borderRadius:'9px',
                      fontSize:'0.82rem', cursor:'pointer', color:'var(--red)',
                      border:'none', background:'none', width:'100%', textAlign:'left',
                      marginTop:'0.2rem', borderTop:'1px solid var(--border)',
                      transition:'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background='rgba(255,107,107,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background='none'}
                  >
                    ↩ Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => router.push('/login')}
              style={{
                background:'linear-gradient(135deg,var(--blue),#3366dd)', border:'none',
                borderRadius:'9px', padding:'0.38rem 0.75rem',
                color:'#fff', fontFamily:'inherit', fontSize:'0.76rem', fontWeight:'600',
                cursor:'pointer', whiteSpace:'nowrap', lineHeight:'1',
              }}>
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-open' : ''}`} style={{
        background:'var(--surface)', borderTop:'1px solid var(--border)',
        overflow:'hidden',
        maxHeight: mobileMenuOpen ? '70vh' : '0',
        transition:'max-height 0.3s var(--ease-out)',
      }}>
        <div style={{padding:'0.5rem 1.2rem 1rem', display:'flex', flexDirection:'column', gap:'0.2rem'}}>
          {navItems.map(item => (
            <button key={item.path}
              onClick={() => { router.push(item.path); setMobileMenuOpen(false); }}
              style={{
                fontFamily:'inherit', fontSize:'0.88rem', fontWeight:'500',
                padding:'0.65rem 1rem', borderRadius:'10px', border:'none',
                cursor:'pointer', textAlign:'left',
                background: router.pathname === item.path ? 'var(--surface2)' : 'transparent',
                color: router.pathname === item.path ? 'var(--text)' : 'var(--muted)',
              }}>
              {item.label}
            </button>
          ))}
          {currentUser && (
            <>
              <div style={{display:'flex', alignItems:'center', gap:'0.7rem', padding:'0.8rem 1rem', borderBottom:'1px solid var(--border)', marginBottom:'0.3rem'}}>
                {currentUser.picture && !avatarError ? (
                  <img src={currentUser.picture} alt="avatar" referrerPolicy="no-referrer"
                    onError={() => setAvatarError(true)}
                    style={{width:'34px', height:'34px', borderRadius:'50%', objectFit:'cover'}}/>
                ) : (
                  <div style={{
                    width:'34px', height:'34px', borderRadius:'50%',
                    background:'linear-gradient(135deg,var(--blue),var(--teal))',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'0.75rem', fontWeight:'700', color:'#fff', flexShrink:0,
                  }}>
                    {(currentUser.firstName[0] + (currentUser.lastName[0] || '')).toUpperCase()}
                  </div>
                )}
                <div>
                  <div style={{fontSize:'0.88rem', fontWeight:'700', color:'var(--text)'}}>{currentUser.firstName} {currentUser.lastName}</div>
                  <div style={{fontSize:'0.72rem', color:'var(--muted)'}}>{currentUser.email}</div>
                </div>
              </div>
              <button
                onClick={() => { logout(); setMobileMenuOpen(false); router.push('/login'); }}
                style={{fontFamily:'inherit', fontSize:'0.88rem', fontWeight:'500', padding:'0.65rem 1rem', borderRadius:'10px', border:'none', cursor:'pointer', textAlign:'left', background:'transparent', color:'var(--red)', marginTop:'0.2rem', borderTop:'1px solid var(--border)', paddingTop:'0.8rem'}}>
                ↩ Sign Out
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .user-name-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}