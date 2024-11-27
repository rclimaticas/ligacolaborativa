/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useState, useEffect, useRef } from 'react';

export default function Title() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="motion-preset-slide-left flex w-full items-center justify-center bg-white text-black-300">
      <div className="grid w-full gap-5">
        <div
          ref={ref}
          className={`${isVisible ? 'motion-preset-slide-right' : 'opacity-0'}`}
        >
          <h2 className="text-center text-3xl font-bold md:text-right md:text-3xl">
            A Liga Colaborativa dos Povos é uma futura DAO construída pelas
            organizações parceiras que têm o propósito de criar infraestrutura
            regenerativa por meio da construção de pontes para apoio mútuo entre{' '}
            <span className="underline decoration-orange hover:bg-orange hover:text-white hover:decoration-black-300">
              povos e organizações de fundamentos síncronos..
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
