'use client';

import Loader from '@/components/ui/Loader/Loader';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const checkAAuthentication = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } else {
        setIsChecking(true);
      }
    };

    checkAAuthentication();
  }, [router]);

  if (!isChecking) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
