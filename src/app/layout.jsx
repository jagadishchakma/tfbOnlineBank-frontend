'use client';

import Navigation from "@/components/global/Navigation";
import '@/css/global_css/aside_navigation.css';
import { usePathname } from "next/navigation";
import Layout from "@/components/global/Layout";
import '@/css/global_css/global.css';



export default function RootLayout({ children }) {
  const pathname = usePathname();
  if (pathname === '/login' || pathname == '/registration') {
    return (
      <Layout>
        <section className="main">
          {children}
        </section>
      </Layout>
    )
  }
  return (
    <Layout>
      <section>
        <Navigation />
      </section>
      <section className="main">
        {children}
      </section>
    </Layout>
  );
}
