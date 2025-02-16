/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

export default function Doodle() {
  return (
    <div className="motion-preset-slide-right w-full items-center justify-center lg:flex lg:justify-start">
      {/* <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png"
        alt="Imagem"
        width={500}
        height={500}
      /> */}
      <img
        alt="Imagem"
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/image-removebg-preview+(22).png"
        className="hidden w-full lg:flex"
      />
    </div>
  );
}
