/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from 'next/link';

export default function Contribution() {
  return (
    <div className="motion-preset-slide-right flex grid grid-cols-1 items-center justify-center gap-5 lg:justify-start">
      <div className="flex items-center justify-center rounded-lg border-4 border-green-100 bg-white shadow-lg">
        <img
          alt="Imagem"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/financiadores-CY6bvfzI+(1).png"
          className="mt-2"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <Link href="https://www.espiralds.com/doe">
          <div className="mb-10 flex w-full items-center justify-center rounded-lg border-2 border-black-300 bg-orange px-5 py-2 font-sans font-bold text-black-300 lg:mb-0 lg:w-52">
            CONTRIBUA
          </div>
        </Link>
      </div>
    </div>
  );
}
