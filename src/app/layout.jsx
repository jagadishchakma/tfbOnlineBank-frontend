'use client';

import Navigation from "@/components/global/Navigation";
import '@/css/global_css/aside_navigation.css';
import { usePathname } from "next/navigation";
import Layout from "@/components/global/Layout";
import '@/css/global_css/global.css';
import { AuthProvider } from "@/js/AuthContext";
import PrivateRoute from "@/js/PrivateRoute";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  if (pathname === '/login' || pathname == '/registration') {
    return (
      <AuthProvider>
          <Layout>
            <section className="main">
              {children}
            </section>
          </Layout>
      </AuthProvider>
    )
  }
  return (
    <AuthProvider>
      <PrivateRoute>
        <Layout>
          <section>
            <Navigation />
          </section>
          <section className="main">
            {children}
          </section>
        </Layout>
      </PrivateRoute>
    </AuthProvider>
  );
}
