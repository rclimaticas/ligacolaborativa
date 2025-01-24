/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import type React from 'react';
import Countdown from 'react-countdown';

const Input = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

const UpdateForm: React.FC = () => {
  const [countdownDate, setCountdownDate] = useState<number>(
    Math.floor(Date.now() / 1000) + 86400
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  useEffect(() => {
    setCountdownDate(Math.floor(Date.now() / 1000) + 86400);
  }, []);

  return (
    <div className="mt-[-900px] w-full bg-black-300">
      <div className="flex w-full items-center justify-center font-roboto">
        <div />
        <form
          onSubmit={handleSubmit}
          className="text-gray-700 flex w-full flex-col items-center justify-center gap-6 p-10 font-roboto lg:gap-10"
        >
          <div className="mt-10 flex grid grid-cols-2 items-center justify-center gap-10">
            <div className="flex items-center justify-center bg-white text-black-300">
              <Countdown
                date={countdownDate * 1000} // Converte para milissegundos
                renderer={({ hours, minutes, seconds, completed }) => {
                  if (completed) {
                    return <span>Contagem concluída!</span>;
                  }
                  return (
                    <div>
                      <span>{hours < 10 ? `0${hours}` : hours}:</span>
                      <span>{minutes < 10 ? `0${minutes}` : minutes}:</span>
                      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                    </div>
                  );
                }}
              />
            </div>

            <div className="flex flex-col items-center justify-end gap-5 rounded-lg bg-white p-5 shadow-xl">
              <div className="bg-white">
                <Input
                  required
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <button
                type="submit"
                className="hover:bg-blue-600 rounded bg-black-300 px-4 py-2 text-black-300 text-white"
              >
                Enviar Email
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
