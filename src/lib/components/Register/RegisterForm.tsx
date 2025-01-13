/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/LoginForm.tsx
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type React from 'react';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password
    ) {
      setError('Por favor, preencha todos os campos.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://backend-production-2453.up.railway.app/register',
        registerData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      alert(`Registro bem-sucedido`);
      console.log(response.data);
      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center font-roboto">
      <div className="min-w-4xl grid w-[500px] rounded-3xl bg-white shadow-none lg:shadow-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-3 p-10 font-roboto text-black-200 lg:gap-6"
        >
          <div className="flex w-full justify-center text-2xl">
            Se registre para contribuir.
          </div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          <div className="flex items-center justify-between">
            <span className="mr-3 w-[40px] border-b" />
            <a href="#" className="">
              ou faça seu registro com o email
            </a>
            <span className="ml-3 w-[40px] border-b" />
          </div>
          <CustomTextField
            required
            id="username"
            name="username"
            label="Nome"
            variant="outlined"
            fullWidth
            value={registerData.username}
            onChange={handleLogin}
          />
          <CustomTextField
            required
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={registerData.email}
            onChange={handleLogin}
          />
          <CustomTextField
            required
            id="password"
            name="password"
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            value={registerData.password}
            onChange={handleLogin}
          />
          <a
            href="/login"
            className="w-full cursor-pointer text-center hover:underline"
          >
            Já fez seu cadastro? Faça seu login e contribua!{' '}
          </a>
          {/* <button
            type="submit"
            className="w-full rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
          >
            Cadastrar
          </button> */}
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
          >
            {loading ? <CircularProgress size="30px" /> : 'Cadastrar'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
