/* eslint-disable react-hooks/exhaustive-deps */

import Link from 'next/link';

export default function Title() {
  return (
    <div className="motion-preset-slide-left flex w-full text-white lg:w-1/2">
      <div className="grid w-full items-center justify-center gap-5 px-2">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
          Monitor de Ocorrências de Conflitos Socioambientais{' '}
        </h2>
        <p className="w-full text-center text-xl font-normal lg:text-left">
          <span className="underline decoration-green-100 hover:bg-orange hover:text-black-300 hover:decoration-black-300">
            OndeFoi
          </span>{' '}
          é uma aplicação para registros de conflitos socioambientais e
          identificação de assessoria técnica.
        </p>
        <Link href="/login">
          <div className="flex w-full items-center justify-center rounded-lg border-2 border-black-300 bg-orange px-5 py-2 font-bold text-black-300 lg:w-1/2">
            Acessar OndeFoi
          </div>
        </Link>
      </div>
    </div>
  );
}
