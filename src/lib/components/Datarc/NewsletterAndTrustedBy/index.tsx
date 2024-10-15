/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Newsletter from '@/lib/components/Datarc/NewsletterAndTrustedBy/Newsletter';
import TrustedBy from '@/lib/components/Datarc/NewsletterAndTrustedBy/TrustedBy';

export default function NewsletterAndTrustedBy() {
  return (
    <div className="relative bottom-[600px] h-[2000px] w-full bg-fundo bg-cover text-black-300 xl:h-[1200px]">
      <div className="relative top-[700px] grid grid-cols-1 xl:grid-cols-2">
        <Newsletter />
        <TrustedBy />
      </div>
    </div>
  );
}
