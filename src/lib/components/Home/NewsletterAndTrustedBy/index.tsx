/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Newsletter from '@/lib/components/Home/NewsletterAndTrustedBy/Newsletter';
import TrustedBy from '@/lib/components/Home/NewsletterAndTrustedBy/TrustedBy';

export default function NewsletterAndTrustedBy() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid w-[1500px] grid-cols-1 xl:grid-cols-2">
        <Newsletter />
        <TrustedBy />
      </div>
    </div>
  );
}
