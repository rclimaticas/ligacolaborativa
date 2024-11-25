'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import Navbar from '../components/Navbar/index';
import { ThemeProvider } from '@/lib/components/theme-provider';

// import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const GoogleID = process.env.GOOGLE_ID ?? '';
  const pathname = usePathname();

  // Ocultar o Header nas rotas /login e /register
  const hideHeader =
    pathname === '/login' || pathname === '/register' || pathname === '/user';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleOAuthProvider clientId={GoogleID}>
        <div className="flex min-h-screen flex-col bg-white">
          {!hideHeader && <Navbar />}
          <main className="flex flex-grow flex-col">{children}</main>
        </div>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Layout;
