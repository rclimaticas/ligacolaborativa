/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use client';

import { Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

export default function SkeletonLoginForm() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center font-roboto">
        <div className="min-w-4xl grid w-full rounded-3xl bg-white shadow-none lg:w-[500px] lg:shadow-2xl">
          <form className="flex w-full flex-col items-center justify-center gap-6 p-10 font-roboto text-black-200 lg:gap-10">
            <div className="flex flex-row items-center justify-center gap-5">
              <div>
                <button className="flex items-center justify-center rounded-full border-2 border-black-300 border-opacity-10 hover:bg-orange">
                  <Skeleton variant="circular">
                    <img
                      className="p-1"
                      src="/assets/google.png"
                      alt="Google"
                      style={{ width: '50px', height: '50px' }}
                    />
                  </Skeleton>
                </button>
              </div>
              <div>
                <button className="flex items-center justify-center rounded-full border-2 border-black-300 border-opacity-10 hover:bg-orange">
                  <Skeleton variant="circular">
                    <img
                      className="p-1"
                      src="/assets/metamask.png"
                      alt="Google"
                      style={{ width: '50px', height: '50px' }}
                    />
                  </Skeleton>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Skeleton className="w-full" variant="rectangular">
                <span className="mr-3 w-[40px] border-b" />
                <a href="#" className="">
                  ou faça login com o email
                </a>
                <span className="ml-3 w-[40px] border-b" />
              </Skeleton>
            </div>
            <Skeleton
              sx={{
                width: { lg: 400, md: 400, sm: 300 },
                maxWidth: '100%',
              }}
              variant="rectangular"
            >
              <CustomTextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Skeleton>

            <Skeleton
              sx={{
                width: { lg: 400, md: 400, sm: 300 },
                maxWidth: '100%',
              }}
              variant="rectangular"
            >
              <CustomTextField
                required
                id="password"
                name="password"
                label="Senha"
                variant="outlined"
                fullWidth
              />
            </Skeleton>

            <Skeleton className="w-full" variant="rectangular">
              <a
                href="/register"
                className="w-full cursor-pointer text-center hover:underline"
              >
                Não tem registro ainda? Se registre aqui{' '}
              </a>
            </Skeleton>

            <Skeleton
              sx={{
                width: { lg: 400, md: 400, sm: 300 },
                maxWidth: '100%',
              }}
              variant="rectangular"
            >
              <CustomTextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Skeleton>
          </form>
        </div>
      </div>
    </div>
  );
}
