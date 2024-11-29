/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Doodle() {
  return (
    <div className="motion-preset-slide-right items-center justify-center lg:flex lg:justify-end">
      {/* <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png"
        alt="Imagem"
        width={500}
        height={500}
      /> */}
      <Image
        alt="Imagem"
        width={500}
        height={500}
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/image-removebg-preview+(22).png"
      />
    </div>
  );
}
