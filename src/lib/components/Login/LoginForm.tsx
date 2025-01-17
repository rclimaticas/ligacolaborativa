/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { ethers } from 'ethers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { saveUserData } from '@/services/UserStorage';

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

  // const signIn = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     try {
  //       const token = response.access_token;

  //       const serverResponse = await axios.post(
  //         'https://crispy-system-7v7pvgxg9q9wcr4-3333.app.github.dev/auth/google',
  //         {
  //           token,
  //         }
  //       );
  //       toast.success('Login realizado com sucesso!', {
  //         position: 'top-right',
  //         autoClose: 3000,
  //       });
  //       setTimeout(() => {
  //         router.push('/');
  //       }, 3000);
  //     } catch (error) {
  //       console.error('Erro ao autenticar:', error.response?.data?.error);
  //     }
  //   },
  //   onError: (error) => {
  //     console.error('Erro ao tentar fazer login com o Google:', error);
  //   },
  // });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ocorreu um erro inesperado.');
      }

      const userData = await response.json();
      await saveUserData('user', userData);

      toast.success('Login realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  const handleMetaMaskLogin = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);

        const provider = new ethers.BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();

        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const address = await signer.getAddress();

        const response = await axios.post(
          'https://crispy-system-7v7pvgxg9q9wcr4-3333.app.github.dev/auth/metamask',
          { metamaskAddress: address }
        );

        if (response.data.token) {
          toast.success('Login com MetaMask bem-sucedido!', {
            position: 'top-right',
            autoClose: 3000,
          });

          router.push('/');
        }
      } catch (err) {
        console.error('Erro ao conectar com MetaMask:', err);
        toast.error('Erro ao tentar fazer login com MetaMask.', {
          position: 'top-right',
          autoClose: 3000,
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast.error('MetaMask não detectado. Por favor, instale o MetaMask.', {
        position: 'top-right',
        autoClose: 3000,
      });
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
            {/* <div className="flex w-full justify-center text-2xl">
              <Image
                alt="Logo"
                width="80"
                height="80"
                src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
              />
            </div> */}
            <div className="flex flex-row items-center justify-center gap-10">
              <div>
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    try {
                      const { credential } = credentialResponse;
                      const response = await axios.post(
                        'https://crispy-system-7v7pvgxg9q9wcr4-3333.app.github.dev/auth/google',
                        {
                          token: credential,
                        }
                      );
                      toast.success('Login realizado com sucesso!', {
                        position: 'top-right',
                        autoClose: 3000,
                      });
                      setTimeout(() => {
                        router.push('/');
                      }, 3000);
                    } catch (error) {
                      // console.error(
                      //   'Erro ao autenticar:',
                      //   error.response?.data?.error
                      // );
                    }
                  }}
                  onError={() => console.error('Erro no login com o Google')}
                />
              </div>
              <div>
                <button
                  onClick={handleMetaMaskLogin}
                  disabled={loading}
                  className="flex h-[40px] items-center justify-center rounded-md border-2 border-black-100 bg-white p-3 text-black-300 text-white"
                >
                  <p className="font-light text-black-200">
                    {loading ? 'Conectando...' : 'Sign in with MetaMask'}
                  </p>
                </button>
              </div>
            </div>
            <div className="custom-toast-container">
              <ToastContainer />
              <style jsx>
                {`
                  .custom-toast-container {
                    position: fixed !important;
                    top: 0;
                    right: 0;
                    z-index: 9999;
                    pointer-events: none; /* Para evitar que interaja com outros elementos */
                  }
                `}
              </style>
            </div>
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
