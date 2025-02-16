/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

export default function Contribution() {
  return (
    <div className="motion-preset-slide-right flex grid grid-cols-1 items-center justify-center gap-2 lg:justify-start">
      <p className="text-left font-sans text-base font-bold text-black-300 md:text-xl lg:text-3xl">
        Trustedby
      </p>
      <div className="rounded-lg border-4 border-green-100 bg-white shadow-lg">
        <img
          alt="Imagem"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png"
        />
      </div>
    </div>
  );
}
