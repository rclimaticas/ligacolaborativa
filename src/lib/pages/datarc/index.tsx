/* eslint-disable react/jsx-no-undef */

import type { NextPage } from 'next/types';

import ArcGIS from '@/lib/components/Datarc/ArcGIS/index';
import CarouselAndContribution from '@/lib/components/Datarc/CarouselAndContribution/index';
import Contribution from '@/lib/components/Datarc/Contribution/index';
import Hero from '@/lib/components/Datarc/Hero/index';
import Maps from '@/lib/components/Datarc/Maps/index';
import NewsletterAndTrustedBy from '@/lib/components/Datarc/NewsletterAndTrustedBy/index';
import Spotlight from '@/lib/components/Datarc/Spotlight/index';

const DataRC: NextPage = () => {
  return (
    <div className="h-[4600px] xl:h-[4000px]">
      <Hero />
      <CarouselAndContribution />
      <Contribution />
      <Spotlight />
      <ArcGIS />
      <Maps />
      <NewsletterAndTrustedBy />
    </div>
  );
};

export default DataRC;
