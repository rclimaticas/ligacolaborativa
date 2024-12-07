/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/LoginForm.tsx
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { GoogleLogin } from '@react-oauth/google';
import Image from 'next/image';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

export default function LoginForm() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center font-roboto">
        <div className="min-w-4xl grid w-[500px] rounded-3xl bg-white shadow-none lg:shadow-2xl">
          <form className="flex w-full flex-col items-center justify-center gap-6 p-10 font-roboto text-black-200 lg:gap-10">
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
              label="Email"
              variant="outlined"
              fullWidth
            />
            <CustomTextField
              required
              id="password"
              label="Senha"
              variant="outlined"
              fullWidth
            />
            <a
              href="/register"
              className="w-full cursor-pointer text-center hover:underline"
            >
              Não tem registro ainda? Se registre aqui{' '}
            </a>
            <button
              type="submit"
              className="w-full rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
            >
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
