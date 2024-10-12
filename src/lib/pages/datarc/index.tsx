/* eslint-disable react/jsx-no-undef */

import type { NextPage } from 'next/types';

import Carousel from '@/lib/components/Datarc/Carousel/index';
import Contribution from '@/lib/components/Datarc/Contribution/index';
import Hero from '@/lib/components/Datarc/Hero/index';

const DataRC: NextPage = () => {
  return (
    <div className="h-[1200px] md:h-[2000px]">
      <Hero />
      <Carousel />
      <Contribution />
    </div>
  );
};

export default DataRC;
