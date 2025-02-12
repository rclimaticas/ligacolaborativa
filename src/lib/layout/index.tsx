/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import Navbar from '../components/Navbar/index';
import { ThemeProvider } from '@/lib/components/theme-provider';
import 'flipdown/dist/flipdown.css';

// import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const GoogleID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      indexedDB.deleteDatabase('myApp');
      console.log('Banco de dados "myApp" deletado');
    }
  }, []);

  // ocultar o Header nas rotas /login e /register
  const hideHeader =
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/user' ||
    pathname === '/graph' ||
    pathname === '/comingsoon';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleOAuthProvider clientId={GoogleID}>
        <div className="flex min-h-screen flex-col bg-white">
          {!hideHeader && <Navbar />}
          <ToastContainer />
          <main className="flex flex-grow flex-col">{children}</main>
        </div>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Layout;
