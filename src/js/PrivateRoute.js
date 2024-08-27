'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './AuthContext';


const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login'); // Redirect to the login page
    }
  }, [router]);

  return isAuthenticated() ? children : null;
};

export default PrivateRoute;
