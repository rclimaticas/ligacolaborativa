// src/components/LoginForm.tsx
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-3 font-roboto"
    >
      <div className="flex w-full text-sm text-black-200 sm:w-full md:text-2xl">
        Faça o login com o email
      </div>
      <div className="relative mt-2 w-72 md:w-full">
        <input
          type="email"
          id="email_address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent text-gray-900 focus:border-blue-600 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none rounded-lg border-2 border-black-100 px-2.5 pb-2.5 pt-4 text-sm focus:outline-none focus:ring-0 dark:text-white"
          placeholder=" "
        />
        <label
          htmlFor="email_address"
          className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          style={{ backgroundColor: 'white', pointerEvents: 'none' }}
        >
          Email address
        </label>
      </div>
      <div className="relative w-72 sm:w-full">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent text-gray-900 focus:border-blue-600 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none rounded-lg border-2 border-black-100 px-2.5 pb-2.5 pt-4 text-sm focus:outline-none focus:ring-0 dark:text-white"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          style={{ backgroundColor: 'white', pointerEvents: 'none' }}
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        className="w-72 rounded-lg bg-orange p-2 text-white md:w-full"
      >
        ENTRAR
      </button>
    </form>
  );
}
