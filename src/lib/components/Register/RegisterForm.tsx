/* eslint-disable consistent-return */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
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
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { ethers } from 'ethers';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import type React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import SkeletonLoginForm from '@/lib/components/Login/SkeletonLoginForm';
import { TOKEN_KEY } from '@/middleware';
import { openDB } from '@/services/UserStorage';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!registerData.name || !registerData.email || !registerData.password) {
      setError('Por favor, preencha todos os campos.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        registerData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      toast.success('Registro realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.log(response.data);
      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Ocorreu um erro inesperado.');
      toast.error('Erro ao registrar usuário!', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;

        if (!access_token) {
          console.error('ID Token não recebido!');
          return;
        }

        console.log('ID Token enviado para o backend:', access_token);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tokenGoogle: access_token }),
            credentials: 'include',
          }
        );

        const data = await response.json();

        const { user } = data;
        console.log('Dados de login recebidos:', user);
        const db = await openDB();
        const transaction = db.transaction('user_data', 'readwrite');
        const objectStore = transaction.objectStore('user_data');

        const addRequest = objectStore.add(user);

        await new Promise((resolve, reject) => {
          addRequest.onsuccess = () => resolve(true);
          addRequest.onerror = (e) => {
            console.error('Erro ao salvar no IndexedDB:', e);
            reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
          };
        });

        const { token } = data.user;
        console.log('Token recebido:', token);

        if (token) {
          Cookie.set(TOKEN_KEY, token, { expires: 7 });
          toast.success('Login realizado com sucesso!', {
            position: 'top-right',
            autoClose: 3000,
          });
        } else {
          console.error('Token não recebido na resposta!');
        }

        setTimeout(() => {
          router.push('/');
        }, 3000);
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    },
    onError: () => console.error('Erro no login com o Google'),
  });

  const handleMetaMaskLogin = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const address = await signer.getAddress();

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/metamask`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ metamaskAddress: address }),
            credentials: 'include',
          }
        );

        const data = await response.json();

        console.log('Resposta do backend:', data);

        const { user, token } = data;

        console.log('Dados de login recebidos:', user);
        const db = await openDB();
        const transaction = db.transaction('user_data', 'readwrite');
        const objectStore = transaction.objectStore('user_data');

        const addRequest = objectStore.add(user);

        await new Promise((resolve, reject) => {
          addRequest.onsuccess = () => resolve(true);
          addRequest.onerror = (e) => {
            console.error('Erro ao salvar no IndexedDB:', e);
            reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
          };
        });

        if (token) {
          Cookie.set(TOKEN_KEY, token, { expires: 7 });
          toast.success('Login realizado com sucesso!', {
            position: 'top-right',
            autoClose: 3000,
          });
          console.log('Token recebido:', token);
        } else {
          console.error('Token não recebido na resposta!');
        }

        router.push('/');
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

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      const handleLoad = () => {
        setIsPageLoaded(true);
      };
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      {isPageLoaded ? (
        <div className="flex w-full items-center justify-center font-roboto">
          <div className="min-w-4xl grid w-[500px] rounded-3xl bg-white shadow-none lg:shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-center justify-center gap-3 p-10 font-roboto text-black-200 lg:gap-6"
            >
              <div className="flex w-full justify-center text-2xl">
                Se registre para contribuir.
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <button
                    onClick={handleMetaMaskLogin}
                    disabled={loading}
                    className="flex items-center justify-center rounded-full border-2 border-black-300 border-opacity-10 hover:bg-orange"
                  >
                    <img
                      className="p-1"
                      src="/assets/metamask.png"
                      alt="Google"
                      style={{ width: '50px', height: '50px' }}
                    />
                  </button>
                </div>
                <button
                  onClick={() => login()}
                  className="flex items-center justify-center rounded-full border-2 border-black-300 border-opacity-10 hover:bg-orange"
                >
                  <img
                    className="p-1"
                    src="/assets/google.png"
                    alt="Google"
                    style={{ width: '50px', height: '50px' }}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="mr-3 w-[40px] border-b" />
                <a href="#" className="">
                  ou faça seu registro com o email
                </a>
                <span className="ml-3 w-[40px] border-b" />
              </div>
              <CustomTextField
                required
                id="name"
                name="name"
                label="Nome"
                variant="outlined"
                fullWidth
                value={registerData.name}
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
            </form>
          </div>
        </div>
      ) : (
        <div>
          <SkeletonLoginForm />
        </div>
      )}
    </div>
  );
}
