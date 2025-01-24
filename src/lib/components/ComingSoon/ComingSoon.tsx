/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */

'use client';

import Image from 'next/image';
import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa';

import './ComingSoon.css';

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 14);
      targetDate.setHours(0, 0, 0, 0);

      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.error('Autoplay bloqueado pelo navegador.');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop muted={isMuted}>
        <source src="/assets/comingsoon.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento <code>audio</code>.
      </audio>

      <div className="flex items-center justify-center bg-opacity-25 bg-fundoComingSoon">
        <div className="flex h-full flex-row gap-10 p-4 md:gap-3 lg:flex-row lg:p-32">
          <div className="flex w-full items-center justify-center gap-20">
            <div className="watch">
              <div className="frame">
                <div className="text">
                  <div>{timeLeft.hours}</div>
                  <div className="flex text-8xl">
                    <div>{timeLeft.minutes}</div>
                    <div>:</div>
                    <div>{timeLeft.seconds}</div>
                  </div>
                </div>
              </div>
              <div className="sideBtn" />
              <div className="powerBtn" />
              <div className="dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-20">
                <div className="mb-2">
                  <p>A NOVA ONDA ESTÁ CHEGANDO!!!</p>
                </div>
                <div className="brutalist-container w-full">
                  <input
                    placeholder="DIGITE SEU NOME"
                    className="brutalist-input smooth-type"
                    type="text"
                  />
                  <label className="brutalist-label">USERNAME</label>
                </div>
                <div className="brutalist-container">
                  <input
                    placeholder="DIGITE SEU EMAIL"
                    className="brutalist-input smooth-type"
                    type="text"
                  />
                  <label className="brutalist-label">EMAIL</label>
                </div>
              </div>
              <button className="brutalist-button mt-10">
                <div className="w-full items-center justify-center rounded-full bg-white">
                  <Image
                    alt="Logo"
                    width="80"
                    height="80"
                    src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
                  />
                </div>
                <div className="button-text w-[500px]">
                  <span>Seja VIP na</span>
                  <span>NOVA LIGA</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[-20px] flex flex-col items-center justify-center bg-opacity-25 bg-fundoComingSoon">
        <div className="mt-[-190px] flex h-full flex-col gap-10 p-4 md:gap-3 lg:flex-row lg:p-32">
          <img
            src="https://cdn.dribbble.com/users/92386/screenshots/2153348/media/f507f34f36222c5eda36d0ac2285c307.gif"
            style={{
              borderRadius: '10px',
              maskImage:
                'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'radial-gradient(circle, rgba(0,0,0,1) 2%, rgba(0,0,0,0) 70%)',
            }}
          />
        </div>
        <div className="mb-10">
          <p className="text-sm">
            © 2025 Liga Colaborativa dos Povos. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Botões de controle de áudio */}
      <div className="audio-control-container fixed bottom-5 right-5 flex gap-4">
        <button
          className="bg-gray-800 hover:bg-gray-700 rounded-full p-4 text-white shadow-lg transition"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar Áudio' : 'Tocar Áudio'}
        >
          {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 rounded-full p-4 text-white shadow-lg transition"
          onClick={toggleMute}
          aria-label={isMuted ? 'Desmutar Áudio' : 'Mutar Áudio'}
        >
          {isMuted ? <FaVolumeMute size={30} /> : <FaVolumeUp size={30} />}
        </button>
      </div>
    </>
  );
};

export default ComingSoon;
