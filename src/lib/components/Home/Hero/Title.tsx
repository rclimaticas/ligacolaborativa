/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useState, useEffect } from 'react';

import { HeroData } from '@/lib/components/models/Home/Hero';

const { title, button } = HeroData;

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
        <h2 className="text-center text-3xl font-bold md:text-left md:text-5xl">
          Plataforma Colaborativa <br />
          <span
            className={`inline-block overflow-hidden whitespace-nowrap ${words[currentWord].className}`}
          >
            {isTyping
              ? words[currentWord].text
              : words[currentWord].text.slice(0, -1)}
          </span>
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
