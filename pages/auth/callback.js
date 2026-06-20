import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSupabase } from '../../lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      router.push('/login');
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/');
      } else {
        router.push('/login');
      }
    });
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
      <p style={{fontSize:'0.85rem', color:'var(--muted)'}}>Signing you in...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
