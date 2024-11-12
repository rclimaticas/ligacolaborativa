/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/LoginForm.tsx
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import TextField from '@mui/material/TextField';

export default function LoginForm() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-10 font-roboto">
      <div className="grid max-w-2xl gap-10 rounded-3xl bg-white shadow-2xl">
        <form className="flex flex-col items-center justify-center gap-10 p-10 font-roboto text-black-200">
          <div className="flex w-full text-center text-xl md:text-2xl">
            Bem vindo a Liga Colabrativa dos Povos
          </div>
          <div className="flex items-center justify-between">
            <span className="mr-3 w-[40px] border-b" />
            <a href="#" className="">
              ou faça login com o email
            </a>
            <span className="ml-3 w-[40px] border-b" />
          </div>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            id="password"
            label="Senha"
            variant="outlined"
            fullWidth
          />
          <a className="w-full cursor-pointer text-center hover:underline">
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
  );
}
