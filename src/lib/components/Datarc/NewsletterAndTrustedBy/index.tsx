/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Newsletter from '@/lib/components/Datarc/NewsletterAndTrustedBy/Newsletter';
import TrustedBy from '@/lib/components/Datarc/NewsletterAndTrustedBy/TrustedBy';

export default function NewsletterAndTrustedBy() {
  return (
    <div className="relative bottom-0 h-[1600px] w-full bg-[#ebebab] bg-cover text-black-300 xl:bottom-[600px] xl:h-[1300px] xl:bg-fundo">
      <div className="relative top-[200px] grid grid-cols-1 xl:top-[700px] xl:grid-cols-2">
        <Newsletter />
        <TrustedBy />
      </div>
    </div>
  );
}
