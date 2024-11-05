import Link from 'next/link';

import { SpotlightData } from '@/lib/components/models/Datarc/Spotlight';

const { title, button } = SpotlightData;

export default function Title() {
  return (
    <div className="mt-10 flex w-full items-center justify-center bg-white text-black-300 xl:mt-0">
      <div className="grid w-full gap-5">
        <h2 className="text-center text-3xl font-bold md:text-5xl xl:text-left">
          {title.name}
        </h2>
        <p className="text-left text-2xl">{title.description}</p>
        <Link
          href="https://brasil.mapbiomas.org/2024/05/28/matopiba-passa-a-amazonia-e-assume-a-lideranca-do-desmatamento-no-brasil/#:~:text=Em%202023%2C%20a%20%C3%A1rea%20m%C3%A9dia,de%208%20%C3%A1rvores%20por%20segundo"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="submit"
            className="z-20 w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
          >
            {button.name}
          </button>
        </Link>
      </div>
    </div>
  );
}
