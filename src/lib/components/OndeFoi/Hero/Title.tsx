/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */

import Link from 'next/link';

export default function Title() {
  return (
    <div className="motion-preset-slide-left flex w-full font-roboto text-white">
      <div className="mt-10 grid w-full items-center justify-center gap-5 px-2 lg:mt-0">
        <h2 className="text-center text-4xl font-bold md:text-6xl lg:text-left">
          Monitor de Ocorrências de Conflitos Socioambientais{' '}
        </h2>
        <p className="w-full text-center text-lg font-normal lg:text-left lg:text-2xl">
          <span className="underline decoration-green-100 hover:bg-orange hover:text-black-300 hover:decoration-black-300">
            OndeFoi
          </span>{' '}
          é uma aplicação para registros de conflitos socioambientais e
          identificação de assessoria técnica.
        </p>
        <Link href="/login">
          <div className="mb-10 flex w-full items-center justify-center rounded-lg border-2 border-black-300 bg-orange px-5 py-2 font-sans font-bold text-black-300 lg:mb-0 lg:w-52">
            ACESSAR ONDEFOI
          </div>
        </Link>
      </div>
    </div>
  );
}
