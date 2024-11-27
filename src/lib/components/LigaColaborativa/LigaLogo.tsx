/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

'use client';

import { useState, useEffect, useRef } from 'react';

interface DoodleProps {
  justifyClass?: string;
  motionClass?: string;
}

export default function Doodle({
  justifyClass = 'lg:justify-start',
  motionClass = 'motion-preset-slide-right',
}: DoodleProps) {
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
    <div
      className={`w-full items-center justify-center bg-white lg:flex ${justifyClass}`}
    >
      <div ref={ref} className={isVisible ? motionClass : 'opacity-0'}>
        <img src="https://iili.io/JPqtFnV.md.png" />
      </div>
    </div>
  );
}
