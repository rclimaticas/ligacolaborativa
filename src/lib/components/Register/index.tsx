/* eslint-disable import/extensions */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use client';

import RegisterForm from '@/lib/components/Register/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="relative flex h-screen flex-col sm:flex-row">
      <div className="absolute inset-0 bg-white opacity-0 lg:bg-fundoRegister lg:opacity-75" />{' '}
      <div className="relative z-10 flex h-full w-full justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
