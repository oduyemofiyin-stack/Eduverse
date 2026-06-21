import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.replace('/'), 2000);
    return () => clearTimeout(t);
  }, []);

  return null;
}
