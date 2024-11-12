/* eslint-disable import/extensions */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use client';

import LoginForm from '@/lib/components/Login/LoginForm';

export default function LoginPage() {
  return (
    <div className="relative flex h-screen flex-col sm:flex-row">
      <div className="absolute inset-0 bg-fundoLogin opacity-75" />{' '}
      <div className="relative z-10 flex w-full justify-center">
        <LoginForm />
      </div>
    </div>
  );
}