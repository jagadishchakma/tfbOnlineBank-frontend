'use client';
import { useEffect, useState } from 'react';
import { isAuthenticated } from './AuthContext';
import { redirect, usePathname } from 'next/navigation';

const PrivateRoute = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated()) {
      redirect("/login"); // Redirect to the login page
    }
    
    setIsClient(true)
  }, [redirect]);

  return (isAuthenticated() && isClient)  && children 
};

export default PrivateRoute;
