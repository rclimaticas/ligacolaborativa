/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useState, useEffect } from 'react';

export default function Title() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = [
    { text: 'dos Povos.', className: 'motion-preset-typewriter-[10]' },
    { text: 'das Culturas.', className: 'motion-preset-typewriter-[13]' },
    { text: 'das Naturezas.', className: 'motion-preset-typewriter-[14]' },
  ];

  const typingSpeed = 120;
  const intervalBetweenWords = 540;

  useEffect(() => {
    const wordLength = words[currentWord].text.length;
    const typingDuration = wordLength * typingSpeed;

    const timeout = setTimeout(
      () => {
        if (isTyping) {
          setIsTyping(false);
        } else {
          setCurrentWord((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }
      },
      isTyping ? typingDuration : intervalBetweenWords
    );

    return () => clearTimeout(timeout);
  }, [currentWord, isTyping]);

  return (
    <div className="motion-preset-slide-left flex w-full items-center justify-center bg-white text-black-300 lg:w-1/2">
      <div className="grid w-full gap-5 px-2">
        <h2 className="text-center text-3xl font-bold md:text-left md:text-3xl">
          A Liga Colaborativa dos Povos - LCdP é de diferentes etnias, culturas,
          territórios e biomas, com objetivo de resolver conflitos
          socioambientais para alcance da paz, prosperidade global e direito à
          vida.{' '}
          <span className="underline decoration-orange hover:bg-orange hover:text-white hover:decoration-black-300">
            Colabore com a LCdP.
          </span>
        </h2>
      </div>
    </div>
  );
}
