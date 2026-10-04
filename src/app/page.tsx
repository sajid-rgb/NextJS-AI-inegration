'use client';

import { getToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hasToken = getToken();
    if (hasToken) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, []);

  return <></>;
};

export default RootPage;
