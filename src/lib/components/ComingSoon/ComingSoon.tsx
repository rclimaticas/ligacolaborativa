/* eslint-disable react/no-unknown-property */
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
import { toast, ToastContainer } from 'react-toastify';
import './ComingSoon.css';

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/newsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar formulário');
      }

      toast.success('Cadastro realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setFormData({ name: '', email: '' });
    } catch (error) {
      toast.error('Erro ao enviar cadastro!', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.error('Erro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop muted={isMuted}>
        <source src="/assets/comingsoon.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento <code>audio</code>.
      </audio>

      <div className="flex min-h-screen flex-col items-center justify-center bg-opacity-25 bg-fundoComingSoon">
        <div className="mt-20 text-white">
          <p className="text-xl font-bold md:text-2xl">
            A NOVA ONDA{' '}
            <span className="underline decoration-orange">ESTÁ CHEGANDO</span>
            !!!
          </p>
        </div>
        <div className="z-20 flex h-full flex-row gap-10 p-4 md:gap-3 lg:flex-row lg:p-32">
          <div className="flex w-full flex-col items-center justify-center gap-20 lg:flex-row">
            <div className="flex w-full flex-col gap-2">
              <img
                style={{ width: '400px', height: '400px' }}
                className="hidden w-full transform rounded-full border-2 border-orange bg-white transition-all duration-500 ease-out hover:scale-105 lg:flex"
                src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
                alt="Logo"
              />
              <div className="timer mt-8 text-center text-white">
                <div className="text-md flex justify-center gap-4 font-bold md:text-xl">
                  <div className="timer-item">
                    <span className="timer-number">{timeLeft.hours} </span>
                    <span className="timer-label">Horas</span>
                  </div>
                  <div className="timer-item">
                    <span className="timer-number">{timeLeft.minutes} </span>
                    <span className="timer-label">Minutos</span>
                  </div>
                  <div className="timer-item">
                    <span className="timer-number">{timeLeft.seconds} </span>
                    <span className="timer-label">Segundos</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-20"
              >
                <div className="brutalist-container w-full">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="DIGITE SEU NOME"
                    className="brutalist-input smooth-type"
                    type="text"
                  />
                  <label className="brutalist-label">USERNAME</label>
                </div>
                <div className="brutalist-container">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="DIGITE SEU EMAIL"
                    className="brutalist-input smooth-type"
                    type="email"
                  />
                  <label className="brutalist-label">EMAIL</label>
                </div>
                <div className="flex w-full items-center justify-center">
                  <button
                    className="brutalist-button mt-10 flex"
                    type="submit"
                    disabled={isLoading}
                  >
                    <div className="w-full items-center justify-center rounded-full bg-white">
                      <Image
                        alt="Logo"
                        width="80"
                        height="80"
                        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
                      />
                    </div>
                    <div className="button-text w-[500px]">
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-white" />
                        </div>
                      ) : (
                        <>
                          <span>Seja VIP na</span>
                          <span>NOVA LIGA</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 mt-[-480px] flex h-full flex-col items-center justify-center bg-opacity-25 bg-fundoComingSoon lg:mt-[-20px]">
        <div className="mt-[-190px] flex h-full flex-col gap-10 p-4 md:gap-3 lg:flex-row lg:p-32">
          <img
            src="https://cdn.dribbble.com/users/92386/screenshots/2153348/media/f507f34f36222c5eda36d0ac2285c307.gif"
            alt="Background animation"
            style={{
              borderRadius: '10px',
              width: '100%',
              maskImage:
                'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'radial-gradient(circle, rgba(0,0,0,1) 2%, rgba(0,0,0,0) 70%)',
            }}
            className="opacity-40 lg:opacity-100"
          />
        </div>
        <div className="mb-10 flex w-full">
          <p className="w-full text-center text-base md:text-sm">
            © 2025 Liga Colaborativa dos Povos. Todos os direitos reservados.
          </p>
        </div>
      </div>

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
        <div className="custom-toast-container">
          <ToastContainer />
          <style jsx>
            {`
              .custom-toast-container {
                position: fixed !important;
                top: 0;
                right: 0;
                z-index: 9999;
                pointer-events: none;
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
