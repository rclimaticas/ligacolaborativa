/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use client';

import Image from 'next/image';

import LoginForm from '../../components/login-form';
import ApiUserRepository from '@/services/api-user-repository';
import { LoginUser } from '@/useCases/login-user';

export default function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    const userRepository = new ApiUserRepository('https://api.example.com');
    const loginUserUseCase = new LoginUser(userRepository);

    loginUserUseCase
      .execute({ email, password })
      .then(() => {
        console.warn('Login bem-sucedido!');
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error);
      });
  };

  return (
    <div className="flex h-screen flex-col bg-white sm:flex-row">
      <div className="bg-gray-100 hidden w-1/2 justify-center lg:flex">
        <Image
          src="https://arte-orange-login.s3.sa-east-1.amazonaws.com/img_login.png"
          alt="Imagem de login"
          className="h-auto w-full"
          width={800}
          height={500}
        />
      </div>
      <div className="flex h-screen w-full items-center justify-center font-roboto">
        <div className="grid max-w-2xl gap-10">
          <h2 className="text-black text-center text-2xl font-normal md:text-5xl">
            Entre no Orange Portfólio
          </h2>
          <LoginForm onLogin={handleLogin} />
          <a
            href="/login"
            className="relative bottom-6 block text-sm font-normal opacity-50 hover:underline md:px-0 md:text-base"
          >
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
}
