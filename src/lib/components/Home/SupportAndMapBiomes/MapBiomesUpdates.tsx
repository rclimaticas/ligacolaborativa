/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */

'use client';

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */

'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import type React from 'react';
import { useEffect, useState, useRef } from 'react';

import { MapBiomesData } from '@/lib/components/models/Home/MapBiomes';
import {
  getMapBiomesData,
  saveMapBiomesData,
} from '@/services/MapBiomesStorage';

const { title, button } = MapBiomesData;

interface Noticia {
  id: string;
  titulo: string;
  introducao: string;
  link: string;
  imgSrc?: string;
}

const MAX_DATA_AGE = 60 * 60 * 1000;

const MapBiomes: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const fetchNoticias = async () => {
    setLoading(true);

    const storedData = await getMapBiomesData('noticias');

    const currentTime = Date.now();

    if (storedData && currentTime - storedData.timestamp < MAX_DATA_AGE) {
      setNoticias(storedData.noticias);
      setLoading(false);
    } else {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/scrape-news`
        );
        if (Array.isArray(response.data)) {
          const newNoticias = response.data.slice(0, 3);

          await saveMapBiomesData('noticias', {
            noticias: newNoticias,
            timestamp: Date.now(),
          });

          setNoticias(newNoticias);
        } else {
          setError('Não foi possível recuperar os dados.');
        }
      } catch (error) {
        setError('Erro ao buscar as notícias.');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNoticias();

    const intervalId = setInterval(() => {
      fetchNoticias();
    }, 3600000);

    return () => clearInterval(intervalId);
  }, []);

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
    <div className="h-full lg:h-[650px]">
      <div
        ref={ref}
        className={`mt-50 relative bottom-40 rounded-lg bg-white p-6 text-black-300 shadow-xl md:mt-0 md:mt-32 lg:bottom-72 xl:bottom-96 xl:w-10/12 ${
          isVisible ? 'motion-preset-slide-right' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 1s ease' }}
      >
        <h1 className="mb-5 w-full text-center text-3xl font-bold">
          {title.name}
        </h1>
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            <div className="flex h-full w-[800px] items-center justify-center rounded-md bg-white lg:h-[785px]">
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            </div>
          </div>
        ) : (
          <div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="space-y-6">
              {noticias.map((noticia) => (
                <a
                  key={noticia.id}
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-gray-300 block transform rounded-lg border p-4 shadow transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={noticia.imgSrc}
                    alt={noticia.titulo}
                    className="mb-4 h-40 w-full rounded-lg object-cover"
                  />
                  <h2 className="text-xl font-semibold">{noticia.titulo}</h2>
                  <p className="text-gray-600 mt-2">{noticia.introducao}</p>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="mt-6 flex w-full justify-center">
          <div className="hover:motion-preset-confetti">
            <a
              href="https://agenciadenoticias.ibge.gov.br/agencia-noticias.html"
              className="rounded-lg bg-orange px-4 py-2 font-bold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBiomes;
