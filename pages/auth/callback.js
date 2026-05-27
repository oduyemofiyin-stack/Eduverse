import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../../context/AppContext';

export default function AuthCallback() {
  const { login, addUser } = useApp();
  const router = useRouter();

  useEffect(() => {
    function processToken(token) {
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          const user = {
            id: data.sub,
            firstName: data.given_name || data.name?.split(' ')[0] || 'User',
            lastName: data.family_name || data.name?.split(' ').slice(1).join(' ') || '',
            email: data.email,
            picture: data.picture ? `${data.picture}?sz=200` : '',
            provider: 'Google',
          };
          addUser(user);
          login(user);
          router.push('/');
        })
        .catch(() => router.push('/login'));
    }

    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      processToken(accessToken);
      return;
    }

    const stored = sessionStorage.getItem('google_token');
    if (stored) {
      sessionStorage.removeItem('google_token');
      processToken(stored);
      return;
    }

    router.push('/login');
  }, []);

  return (
    <div style={{
      minHeight:'100vh', background:'var(--bg)',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', gap:'1rem',
    }}>
      <div style={{
        width:'44px', height:'44px', borderRadius:'50%',
        border:'3px solid rgba(68,136,255,0.2)',
        borderTop:'3px solid #4488ff',
        animation:'spin 0.8s linear infinite',
      }}/>
      <p style={{fontSize:'0.85rem', color:'var(--muted)'}}>Signing you in with Google...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}