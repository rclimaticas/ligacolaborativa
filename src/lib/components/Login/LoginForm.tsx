/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        'https://backend-production-2453.up.railway.app/login',
        loginData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      alert(`Login bem-sucedido! Token: ${response.data.token}`);
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center font-roboto">
        <div className="min-w-4xl grid w-[500px] rounded-3xl bg-white shadow-none lg:shadow-2xl">
          <form
            className="flex w-full flex-col items-center justify-center gap-6 p-10 font-roboto text-black-200 lg:gap-10"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full justify-center text-2xl">
              <Image
                alt="Logo"
                width="80"
                height="80"
                src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
              />
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
                ou faça login com o email
              </a>
              <span className="ml-3 w-[40px] border-b" />
            </div>
            <CustomTextField
              required
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={handleLogin}
              value={loginData.email}
            />
            <CustomTextField
              required
              id="password"
              name="password"
              label="Senha"
              variant="outlined"
              fullWidth
              onChange={handleLogin}
              value={loginData.password}
            />
            <a
              href="/register"
              className="w-full cursor-pointer text-center hover:underline"
            >
              Não tem registro ainda? Se registre aqui{' '}
            </a>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
            >
              {loading ? <CircularProgress size="30px" /> : 'ENTRAR'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
