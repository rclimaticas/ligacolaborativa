/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Doodle() {
  return (
    <div className="motion-preset-slide-right w-full items-center justify-center lg:flex lg:justify-start">
      {/* <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png"
        alt="Imagem"
        width={500}
        height={500}
      /> */}
      <Image
        alt="Imagem"
        width={400}
        height={400}
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logo-BD4VjkRU.png"
        className="hidden w-96 rounded-full border-4 border-green-100 shadow-lg lg:flex"
      />
    </div>
  );
}
