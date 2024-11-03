/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */

'use client';

import axios from 'axios';
import type React from 'react';
import { useEffect, useState } from 'react';

import { MapBiomesData } from '@/lib/components/models/Home/MapBiomes';

const { title, button } = MapBiomesData;

interface Noticia {
  id: string;
  titulo: string;
  introducao: string;
  link: string;
  imgSrc?: string;
}

const MapBiomes: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchNoticias = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://backend-rclimaticas-2.onrender.com/scrape-news'
      );
      console.log(response.data);
      if (Array.isArray(response.data)) {
        setNoticias(response.data.slice(0, 3));
      } else {
        /* empty */
      }
      setLoading(false);
    } catch (error) {
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

  return (
    <div className="h-full lg:h-[650px]">
      <div className="relative bottom-40 mt-32 rounded-lg bg-white p-6 text-black-300 shadow-xl md:mt-0 lg:bottom-72 xl:bottom-96 xl:w-10/12">
        <h1 className="mb-5 text-center text-3xl font-bold">{title.name}</h1>
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
        <div className="mt-6 flex justify-center">
          <a
            href="https://agenciadenoticias.ibge.gov.br/agencia-noticias.html"
            className="hover:bg-blue-600 rounded-lg bg-orange px-4 py-2 font-bold transition-colors"
          >
            {button.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapBiomes;
