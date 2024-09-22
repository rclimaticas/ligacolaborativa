/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next';

import SomeText from '@/lib/components/samples/SomeText';
import Carousel from '@/lib/components/Swiper';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex-col items-center justify-center gap-8 bg-white p-5 text-center lg:px-32">
        <SomeText />
      </div>
      <div className="bg-green-200 p-5 lg:p-32">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
