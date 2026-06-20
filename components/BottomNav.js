import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';

const tabs = [
  { label: 'Home', path: '/', icon: (a) => <svg width="20" height="20" viewBox="0 0 24 24" fill={a ? 'var(--accent)' : 'none'} stroke="currentColor" strokeWidth="1.8"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
  { label: 'Search', path: '/search', icon: (a) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg> },
  { label: 'Learning', path: '/enrolled', icon: (a) => <svg width="20" height="20" viewBox="0 0 24 24" fill={a ? 'var(--accent)' : 'none'} stroke="currentColor" strokeWidth="1.8"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
  { label: 'Dashboard', path: '/dashboard', icon: (a) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-2a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" /></svg> },
  { label: 'Profile', path: '/profile', icon: (a) => <svg width="20" height="20" viewBox="0 0 24 24" fill={a ? 'var(--accent)' : 'none'} stroke="currentColor" strokeWidth="1.8"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
];

export default function BottomNav() {
  const router = useRouter();
  const { currentUser } = useApp();

  return (
    <nav className="bottom-nav" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
      background: 'rgba(10,10,12,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: '0.25rem 0 env(safe-area-inset-bottom, 0.25rem) 0',
      height: 'calc(52px + env(safe-area-inset-bottom, 0px))',
    }}>
      {tabs.map(tab => {
        const isActive = router.pathname === tab.path;
        const show = tab.path === '/profile' ? !!currentUser : true;
        if (!show) return null;
        return (
          <button key={tab.path} onClick={() => router.push(tab.path)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px',
              padding: '4px 8px', minWidth: '48px', minHeight: '40px',
              color: isActive ? 'var(--accent)' : 'var(--muted2)',
              transition: 'color 0.2s ease',
            }}>
            {tab.icon(isActive)}
            <span style={{
              fontSize: '0.55rem', fontWeight: isActive ? '700' : '500',
              letterSpacing: '0.02em',
            }}>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
