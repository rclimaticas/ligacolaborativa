/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      navigation={isMdScreen}
      slidesPerView={1}
    >
      <SwiperSlide>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.espiralds.com/sofia"
        >
          <img
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"
            alt="Collaborate 1"
          />
        </a>
        {/* {auth ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.espiralds.com/sofia'}
          >
            <img src={collaborate1} alt="Collaborate 1" />
          </a>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'/sofia'}
          >
            <img src={collaborate1} alt="Collaborate 1" />
          </a>
        )} */}
      </SwiperSlide>
      <SwiperSlide>
        <a target="_blank" rel="noopener noreferrer" href="/ondefoi">
          <img
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"
            alt="Collaborate 2"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
