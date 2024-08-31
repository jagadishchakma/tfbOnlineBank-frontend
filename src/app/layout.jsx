'use client';

import Navigation from "@/components/global/Navigation";
import '@/css/global_css/aside_navigation.css';
import { redirect, usePathname } from "next/navigation";
import Layout from "@/components/global/Layout";
import '@/css/global_css/global.css';
import '@/css/global_css/responsive.css';
import { AuthProvider } from "@/js/AuthContext";





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
  if(pathname == '/'){
    redirect('/dashboard')
  }
  return (
    <AuthProvider>
        <Layout>
          <section>
            <Navigation />
          </section>
          <section className="main">
            {children}
          </section>
        </Layout>
    </AuthProvider>
  );
}
