/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/LoginForm.tsx
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { GoogleLogin } from '@react-oauth/google';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset', // Altere "white" para a cor desejada
    WebkitTextFillColor: 'black', // Altere "black" para a cor do texto desejada
  },
});

export default function RegisterForm() {
  return (
    <div className="flex w-full items-center justify-center font-roboto">
      <div className="min-w-4xl grid w-[500px] rounded-3xl bg-white shadow-none lg:shadow-2xl">
        <form className="flex w-full flex-col items-center justify-center gap-3 p-10 font-roboto text-black-200 lg:gap-6">
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
            id="name"
            label="Nome"
            variant="outlined"
            fullWidth
          />
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
            href="/login"
            className="w-full cursor-pointer text-center hover:underline"
          >
            Já fez seu cadastro? Faça seu login e contribua!{' '}
          </a>
          <button
            type="submit"
            className="w-full rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
