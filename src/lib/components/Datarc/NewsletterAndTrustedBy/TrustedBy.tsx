/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import LigaContribution from '@/lib/components/Datarc/LigaContribution/LigaContribution';

export default function Newsletter() {
  return (
    <div className="relative bottom-0 mt-[-50px] h-full w-full lg:h-[50px] xl:bottom-[200px]">
      <div className="relative bottom-0 w-full p-5 lg:p-32">
        <h1 className="relative top-[0px] mb-2 flex w-full justify-end text-3xl lg:top-[80px]">
          TrustedBy
        </h1>
        <img
          className="relative top-[0px] flex lg:top-[80px]"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png"
        />
      </div>
      <LigaContribution />
    </div>
  );
}
