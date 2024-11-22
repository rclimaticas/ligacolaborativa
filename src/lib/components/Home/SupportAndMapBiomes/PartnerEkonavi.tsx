/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

import { EkonaviData } from '@/lib/components/models/Home/Ekonavi';

const { title } = EkonaviData;

export default function PartnerEkonavi() {
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
      ref={ref}
      className={`relative bottom-0 mt-0 grid gap-2 lg:mt-32 xl:bottom-72 ${
        isVisible
          ? 'motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-opacity-in-[0%] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate'
          : 'opacity-0'
      }`}
      style={{ transition: 'opacity 1s ease' }}
    >
      <div>
        <h1 className="text-center text-4xl xl:text-right">{title.name}</h1>
      </div>
      <div className="flex justify-center xl:justify-end">
        <Link
          href="https://ekonavi.com/regen?r=r4f4.eu"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="transform transition-transform duration-300 hover:scale-105"
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/ekonavi.png"
          />
        </Link>
      </div>
    </div>
  );
}
