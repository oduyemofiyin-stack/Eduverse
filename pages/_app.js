import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppProvider, useApp } from '../context/AppContext';
import { ToastProvider } from '../components/Toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function AuthGuard({ Component, pageProps }) {
  const { currentUser, theme } = useApp();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Give localStorage time to load before checking auth
    const timer = setTimeout(() => setChecking(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!checking && !currentUser && router.pathname !== '/login' && router.pathname !== '/admin') {
      router.push('/login');
    }
  }, [checking, currentUser, router.pathname]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Show nothing while checking auth
  if (checking) return (
    <div style={{
      minHeight:'100vh',
      background: theme === 'light' ? '#f0f4ff' : '#06080f',
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      <div style={{
        width:'40px', height:'40px', borderRadius:'50%',
        border:'3px solid rgba(68,136,255,0.2)',
        borderTop:'3px solid #4488ff',
        animation:'spin 0.8s linear infinite',
      }}/>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  if (!currentUser && router.pathname !== '/login' && router.pathname !== '/admin') return null;

  if (router.pathname === '/login' || router.pathname === '/admin') {
    return <Component {...pageProps} />;
  }

  return (
    <div style={{
      minHeight:'100vh',
      background:'var(--bg)',
      color:'var(--text)',
      display:'flex',
      flexDirection:'column',
      transition:'background 0.3s ease, color 0.3s ease',
    }}>
      <div style={{
        position:'fixed', inset:0,
        background: theme === 'dark'
          ? 'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.08) 0%, transparent 60%)'
          : 'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.04) 0%, transparent 60%)',
        pointerEvents:'none', zIndex:0,
      }}/>
      <Header />
      <main style={{flex:1, position:'relative', zIndex:1}}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ToastProvider>
        <AuthGuard Component={Component} pageProps={pageProps} />
      </ToastProvider>
    </AppProvider>
  );
}