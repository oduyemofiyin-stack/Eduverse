import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../../context/AppContext';
import { saveUserData } from '../../lib/firestore';
import { logger } from '../../lib/logger';

export default function AuthCallback() {
  const { signInWithGoogle } = useApp();
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const idToken = params.get('id_token');
    const accessToken = params.get('access_token');

    if (idToken) {
      fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      })
        .then(res => {
          if (!res.ok) throw new Error('Login failed');
          return res.json();
        })
        .then(data => {
          localStorage.setItem('eduverse_token', data.token);
          const user = {
            id: data.user.id,
            email: data.user.email || '',
            firstName: data.user.firstName || '',
            lastName: data.user.lastName || '',
            username: '',
            picture: data.user.picture || '',
            provider: 'google',
            createdAt: data.user.createdAt || new Date().toISOString(),
          };
          signInWithGoogle(user);
          if (!data.user.wishlist || data.user.wishlist.length === 0) {
            saveUserData(user.id, {
              email: user.email, firstName: user.firstName,
              lastName: user.lastName, picture: user.picture,
              provider: user.provider, createdAt: user.createdAt,
              wishlist: [], enrolled: [], progress: {},
              readingProgress: {}, completed: [], ratings: {},
              xp: 0, streak: 0, badges: [], activityLog: [],
              notes: {}, bookmarks: {}, comments: {},
              certificates: [], reviews: [], studyTime: {},
              followingPaths: [],
            });
          }
          logger.info('Google Sign-In', 'Successful backend auth', { email: user.email });
          router.push('/');
        })
        .catch(() => {
          // Fallback to client-side auth if backend is unavailable
          if (accessToken) {
            fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${accessToken}` }
            })
              .then(res => res.json())
              .then(data => {
                const user = {
                  id: data.sub,
                  email: data.email || '',
                  firstName: data.given_name || data.name?.split(' ')[0] || '',
                  lastName: data.family_name || data.name?.split(' ').slice(1).join(' ') || '',
                  username: '',
                  picture: data.picture || '',
                  provider: 'google',
                  createdAt: new Date().toISOString(),
                };
                signInWithGoogle(user);
                saveUserData(user.id, {
                  email: user.email, firstName: user.firstName,
                  lastName: user.lastName, picture: user.picture,
                  provider: user.provider, createdAt: user.createdAt,
                  wishlist: [], enrolled: [], progress: {},
                  readingProgress: {}, completed: [], ratings: {},
                  xp: 0, streak: 0, badges: [], activityLog: [],
                  notes: {}, bookmarks: {}, comments: {},
                  certificates: [], reviews: [], studyTime: {},
                  followingPaths: [],
                });
                logger.info('Google Sign-In', 'Successful OAuth (fallback)', { email: user.email });
                router.push('/');
              })
              .catch(() => router.push('/login'));
            return;
          }
          router.push('/login');
        });
      return;
    }

    if (accessToken) {
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
        .then(res => res.json())
        .then(data => {
          const user = {
            id: data.sub,
            email: data.email || '',
            firstName: data.given_name || data.name?.split(' ')[0] || '',
            lastName: data.family_name || data.name?.split(' ').slice(1).join(' ') || '',
            username: '',
            picture: data.picture || '',
            provider: 'google',
            createdAt: new Date().toISOString(),
          };
          signInWithGoogle(user);
          saveUserData(user.id, {
            email: user.email, firstName: user.firstName,
            lastName: user.lastName, picture: user.picture,
            provider: user.provider, createdAt: user.createdAt,
            wishlist: [], enrolled: [], progress: {},
            readingProgress: {}, completed: [], ratings: {},
            xp: 0, streak: 0, badges: [], activityLog: [],
            notes: {}, bookmarks: {}, comments: {},
            certificates: [], reviews: [], studyTime: {},
            followingPaths: [],
          });
          logger.info('Google Sign-In', 'Successful OAuth', { email: user.email });
          router.push('/');
        })
        .catch(() => router.push('/login'));
      return;
    }

    router.push('/login');
  }, [signInWithGoogle, router]);

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
