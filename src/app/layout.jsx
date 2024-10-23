'use client';

import Navigation from "@/components/global/Navigation";
import '@/css/global_css/aside_navigation.css';
import { redirect, usePathname } from "next/navigation";
import Layout from "@/components/global/Layout";
import '@/css/global_css/global.css';
import '@/css/global_css/responsive.css';
import { AuthProvider } from "@/js/AuthContext";
import HomeNavigation from "@/components/home/HomeNavigation";
import Footer from "@/components/home/Footer";





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
  } else if (pathname == '/' || pathname=='/contact_us' || pathname=='/services' || pathname=='/about_us') {
    return (
      <AuthProvider>
        <Layout>
          <section className="sticky-top">
            <HomeNavigation />
          </section>
          <section>
            {children}
          </section>
          <section>
            <Footer />
          </section>
        </Layout>
      </AuthProvider>
    )
  } else {
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
}
