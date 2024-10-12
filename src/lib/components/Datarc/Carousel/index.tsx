/* eslint-disable @next/next/no-img-element */

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    // Set initial value
    setIsMdScreen(mediaQuery.matches);

    // Define a listener for changes in the media query
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMdScreen(e.matches);
    };

    // Add the listener
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className="relative bottom-[80px] bg-green-200 p-20">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        loop
        pagination={{ clickable: true }}
        navigation={isMdScreen}
        slidesPerView={4}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0PoJ.png"
              alt="Collaborate 1"
              width={900}
              height={900}
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
