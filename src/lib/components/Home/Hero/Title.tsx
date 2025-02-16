/* eslint-disable no-new */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

import { HeroData } from '@/lib/components/models/Home/Hero';

const { title, button } = HeroData;

export default function Title() {
  useEffect(() => {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
      new Typewriter(typewriterElement, {
        strings: ['Dos Povos.', 'Da natureza.', 'Das Culturas.'],
        autoStart: true,
        loop: true,
      });
    }
  }, []);
  return (
    <div className="motion-preset-slide-left flex w-full items-center justify-center bg-white text-black-300 lg:w-1/2">
      <div className="grid w-full gap-5 px-2">
        <h2 className="text-center text-3xl font-bold md:text-left md:text-5xl">
          Plataforma Colaborativa <br /> <span id="typewriter" />
        </h2>
        <h3 className="text-left text-xl font-bold">{title.description}</h3>
        <button
          type="submit"
          className="relative bottom-3 w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
        >
          {button.name}
        </button>
      </div>
    </div>
  );
}
