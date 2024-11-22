/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

import { OccurrencesData } from '../../models/Home/Ocorrences';

const { title, button } = OccurrencesData;

export default function Occurrences() {
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
    <>
      <div
        ref={ref}
        className={`grid w-full gap-5 text-center transition-opacity duration-1000 lg:w-10/12 lg:text-left ${
          isVisible ? 'motion-preset-slide-right' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 1s ease-in-out' }}
      >
        <h1 className="text-4xl">No período...</h1>
        <div className="text-2xl">
          Foram registrados 20 ocorrências, sendo 6 animais selvagens
          encontrados, 4 conflitos com empreendimentos, 2 desmatamentos, 3
          poluições no rio, 1 poluição de solo/erosão, 1 queimada e 3 outras
          ocorrências.
        </div>
        <Link
          href="/assets/boletiminfo.pdf"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="submit"
            className="w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:w-1/2"
          >
            Ler Boletim Mensal
          </button>
        </Link>
      </div>

      <div
        className={`flex w-full flex-col justify-center gap-5 text-center transition-opacity duration-1000 lg:justify-end lg:text-right ${
          isVisible ? 'motion-preset-slide-left' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 1s ease-in-out' }}
      >
        <h2>
          {title.name}
          <Link
            href="https://arcg.is/1mzbme"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="submit"
              className="ml-0 mt-5 w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:ml-2 lg:mt-0 lg:w-3/5"
            >
              {button.name}
            </button>
          </Link>
        </h2>
        <div className="flex items-center justify-center">
          <Image
            className="shadow-[rgba(0,0,15,0.5)_-10px_10px_4px_0px]"
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/dashboard-DAWr450K.png"
            alt="Dashboard"
            width={700}
            height={700}
          />
        </div>
      </div>
    </>
  );
}

// /* eslint-disable consistent-return */

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState, useRef } from 'react';

// import { OccurrencesData } from '../../models/Home/Ocorrences';

// const { title, button } = OccurrencesData;

// export default function Occurrences() {
//   const [isVisibleRight, setIsVisibleRight] = useState(false);
//   const [isVisibleLeft, setIsVisibleLeft] = useState(false);
//   const [isClient, setIsClient] = useState(false); // Estado para controlar se estamos no cliente

//   const refRight = useRef(null);
//   const refLeft = useRef(null);

//   // Verifica se estamos no ambiente cliente
//   useEffect(() => {
//     setIsClient(true); // Definimos como true após o componente ser montado
//   }, []);

//   // Limpa o localStorage ao recarregar a página para garantir que a animação aconteça novamente
//   useEffect(() => {
//     if (isClient) {
//       localStorage.removeItem('hasAnimatedRight');
//       localStorage.removeItem('hasAnimatedLeft');
//     }
//   }, [isClient]);

//   // Verifica se a animação já foi realizada (somente no cliente)
//   const hasAnimatedRight = isClient
//     ? localStorage.getItem('hasAnimatedRight') === 'true'
//     : false;
//   const hasAnimatedLeft = isClient
//     ? localStorage.getItem('hasAnimatedLeft') === 'true'
//     : false;

//   // Força a execução do IntersectionObserver ao carregar a página
//   useEffect(() => {
//     if (isClient) {
//       // Função para verificar se o elemento está visível
//       const checkVisibility = (
//         ref: React.RefObject<HTMLElement>,
//         setState: React.Dispatch<React.SetStateAction<boolean>>,
//         localStorageKey: string
//       ) => {
//         if (
//           ref.current &&
//           ref.current.getBoundingClientRect().top < window.innerHeight
//         ) {
//           setState(true);
//           localStorage.setItem(localStorageKey, 'true');
//         }
//       };

//       // Verificar imediatamente após o carregamento
//       checkVisibility(refRight, setIsVisibleRight, 'hasAnimatedRight');
//       checkVisibility(refLeft, setIsVisibleLeft, 'hasAnimatedLeft');
//     }
//   }, [isClient]);

//   useEffect(() => {
//     if (isClient) {
//       const observerRight = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting && !hasAnimatedRight) {
//             setIsVisibleRight(true);
//             localStorage.setItem('hasAnimatedRight', 'true'); // Marca que a animação foi feita
//           }
//         },
//         { threshold: 0.3 }
//       );

//       const observerLeft = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting && !hasAnimatedLeft) {
//             setIsVisibleLeft(true);
//             localStorage.setItem('hasAnimatedLeft', 'true'); // Marca que a animação foi feita
//           }
//         },
//         { threshold: 0.3 }
//       );

//       const currentRefRight = refRight.current;
//       const currentRefLeft = refLeft.current;

//       if (currentRefRight) {
//         observerRight.observe(currentRefRight);
//       }

//       if (currentRefLeft) {
//         observerLeft.observe(currentRefLeft);
//       }

//       return () => {
//         if (currentRefRight) {
//           observerRight.unobserve(currentRefRight);
//         }
//         if (currentRefLeft) {
//           observerLeft.unobserve(currentRefLeft);
//         }
//       };
//     }
//   }, [isClient, hasAnimatedRight, hasAnimatedLeft]);

//   if (!isClient) {
//     return null; // Evita renderização no servidor
//   }

//   return (
//     <>
//       <div
//         ref={refRight}
//         className={`grid w-full gap-5 text-center lg:w-10/12 lg:text-left ${
//           isVisibleRight ? 'motion-preset-slide-right' : 'opacity-0' // Esconde até a animação começar
//         }`}
//         style={{ transition: 'opacity 1s ease' }} // Transição suave
//       >
//         <h1 className="text-4xl">No período...</h1>
//         <div className="text-2xl">
//           Foram registrados 20 ocorrências, sendo 6 animais selvagens
//           encontrados, 4 conflitos com empreendimentos, 2 desmatamentos, 3
//           poluições no rio, 1 poluição de solo/erosão, 1 queimada e 3 outras
//           ocorrências.
//         </div>
//         <Link
//           href="/assets/boletiminfo.pdf"
//           passHref
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button
//             type="submit"
//             className="hover:motion-preset-confetti w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:w-1/2"
//           >
//             Ler Boletim Mensal
//           </button>
//         </Link>
//       </div>
//       <div
//         ref={refLeft}
//         className={`flex w-full flex-col justify-center gap-5 text-center lg:justify-end lg:text-right ${
//           isVisibleLeft ? 'motion-preset-slide-left' : 'opacity-0' // Esconde até a animação começar
//         }`}
//         style={{ transition: 'opacity 1s ease' }} // Transição suave
//       >
//         <h2>
//           {title.name}
//           <Link
//             href="https://arcg.is/1mzbme"
//             passHref
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button
//               type="submit"
//               className="hover:motion-preset-slide-right ml-0 mt-5 w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:ml-2 lg:mt-0 lg:w-3/5"
//             >
//               {button.name}
//             </button>
//           </Link>
//         </h2>
//         <div className="flex items-center justify-center">
//           <Image
//             className="shadow-[rgba(0,0,15,0.5)_-10px_10px_4px_0px]"
//             src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/dashboard-DAWr450K.png"
//             alt="Dashboard"
//             width={700}
//             height={700}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
