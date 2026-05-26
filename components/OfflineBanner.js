import { useState, useEffect } from 'react';

export default function OfflineBanner() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    function goOffline() { setOffline(true); }
    function goOnline() { setOffline(false); }
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    setOffline(!navigator.onLine);
    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div style={{
      position:'fixed', top:0, left:0, right:0, zIndex:500,
      background:'rgba(255,107,107,0.95)',
      backdropFilter:'blur(10px)',
      padding:'0.5rem 1rem',
      textAlign:'center',
      fontSize:'0.78rem', fontWeight:'600', color:'#fff',
      animation:'slideDown 0.3s ease',
    }}>
      You are offline — some features may be unavailable
    </div>
  );
}
