/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Contribution from '@/lib/components/Home/Contribution/index';

export default function Newsletter() {
  return (
    <div className="relative bottom-[350px] h-full lg:h-[50px] xl:bottom-[200px]">
      <div className="relative bottom-0 w-full p-5 lg:p-32">
        <h1 className="mb-2 text-right text-3xl">TrustedBy</h1>
        <img src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png" />
      </div>
      <Contribution />
    </div>
  );
}
