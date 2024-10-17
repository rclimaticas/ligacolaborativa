/* eslint-disable react/jsx-no-undef */

import type { NextPage } from 'next/types';

import ArcGIS from '@/lib/components/Datarc/ArcGIS/index';
import Carousel from '@/lib/components/Datarc/Carousel/index';
import Contribution from '@/lib/components/Datarc/Contribution/index';
import Hero from '@/lib/components/Datarc/Hero/index';
import Maps from '@/lib/components/Datarc/Maps/index';
import NewsletterAndTrustedBy from '@/lib/components/Datarc/NewsletterAndTrustedBy/index';
import Spotlight from '@/lib/components/Datarc/Spotlight/index';

const DataRC: NextPage = () => {
  return (
    <div className="h-[5000px] md:h-[4000px]">
      <Hero />
      <Carousel />
      <Contribution />
      <Spotlight />
      <ArcGIS />
      <Maps />
      <NewsletterAndTrustedBy />
    </div>
  );
};

export default DataRC;
