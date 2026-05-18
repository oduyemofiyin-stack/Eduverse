import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProvider, useApp } from '../context/AppContext';
import { ToastProvider } from '../components/Toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function AuthGuard({ Component, pageProps }) {
  const { currentUser } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [currentUser, router.pathname]);

  if (!currentUser && router.pathname !== '/login') return null;

  if (router.pathname === '/login') {
    return <Component {...pageProps} />;
  }

  return (
    <div style={{
      minHeight:'100vh', background:'#06080f',
      color:'#eef0f8', display:'flex', flexDirection:'column',
    }}>
      <div style={{
        position:'fixed', inset:0,
        background:'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.08) 0%, transparent 60%)',
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