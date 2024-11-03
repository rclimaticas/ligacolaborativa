/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import { EkonaviData } from '@/lib/components/models/Home/Ekonavi';

const { title } = EkonaviData;

export default function PartnerEkonavi() {
  return (
    <div className="relative bottom-0 mt-0 grid gap-2 lg:mt-32 xl:bottom-72">
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
