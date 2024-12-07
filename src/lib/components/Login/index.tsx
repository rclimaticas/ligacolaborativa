/* eslint-disable import/extensions */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use client';

import LoginForm from '@/lib/components/Login/LoginForm';

export default function LoginPage() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center sm:flex-row">
      <div className="absolute inset-0 bg-white opacity-0 lg:bg-fundoLogin lg:opacity-75" />{' '}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
