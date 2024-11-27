/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

'use client';

import { useState, useEffect, useRef } from 'react';

export default function Doodle() {
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
    <div className="motion-preset-slide-right w-full items-center justify-center bg-white lg:flex lg:justify-start">
      {/* <Image
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png"
          alt="Imagem"
          width={500}
          height={500}
        /> */}
      <div
        ref={ref}
        className={`${isVisible ? 'motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-opacity-in-[0%] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate' : 'opacity-0'}`}
      >
        <img src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/roadmap-CcJ9RuDW.png" />
      </div>
    </div>
  );
}
