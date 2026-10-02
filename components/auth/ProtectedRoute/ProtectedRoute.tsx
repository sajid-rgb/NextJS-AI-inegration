'use client';

import Loader from '@/components/ui/Loader/Loader';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (!token) {
      router.replace('/login');
      return;
    }

    setIsChecking(true);
  }, [router]);

  if (!isChecking) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
