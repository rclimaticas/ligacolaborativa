'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const shouldShowHeader = pathname === '/';
  const GoogleID = process.env.GOOGLE_ID ?? '';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleOAuthProvider clientId={GoogleID}>
        {/* Adicionando min-h-screen para garantir que ocupe toda a altura da viewport */}
        <div className="flex h-full flex-col bg-white md:h-screen">
          {shouldShowHeader && <Header />}
          <main className="flex flex-col">{children}</main>
          {/* flex-grow garante que o conteúdo cresça para preencher o espaço */}
        </div>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Layout;
