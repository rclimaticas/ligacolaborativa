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

    setIsMdScreen(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMdScreen(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      loop
      pagination={{ clickable: true }}
      navigation={isMdScreen}
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        375: {
          slidesPerView: 1,
        },
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      <div className="w-1/2">
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.espiralds.com/sofia"
          >
            <Image
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9CjUnR.md.png"
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
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9AlFs4.png"
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
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9AlTzb.png"
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
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9AlGIa.png"
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
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9A0CCv.png"
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
      </div>
    </Swiper>
  );
}
