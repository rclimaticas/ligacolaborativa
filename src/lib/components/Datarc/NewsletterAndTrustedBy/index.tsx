/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// import { AllRightsReserved } from '@/lib/components/Datarc/NewsletterAndTrustedBy/AllRightsReserved';
import Newsletter from '@/lib/components/Datarc/NewsletterAndTrustedBy/Newsletter';
import TrustedBy from '@/lib/components/Datarc/NewsletterAndTrustedBy/TrustedBy';

export default function NewsletterAndTrustedBy() {
  return (
    <div className="relative bottom-0 mt-20 h-[1200px] w-full bg-[#ebebab] bg-cover text-black-300 sm:h-[1000px] md:h-[1300px] lg:h-[2000px] xl:bottom-[600px] xl:mt-0 xl:h-[1050px] xl:bg-fundo">
      <div className="relative grid grid-cols-1 xl:top-[700px] xl:grid-cols-2">
        <Newsletter />
        <TrustedBy />
      </div>
    </div>
  );
}
