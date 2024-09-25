/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function PartnerEkonavi() {
  return (
    <div className="relative bottom-0 grid gap-2 xl:bottom-80">
      <div>
        <h1 className="text-center text-4xl xl:text-right">
          Faça parte da Ekonavi, uma rede social colaborativa que te paga por
          impacto gerado.
        </h1>
      </div>
      <div className="flex justify-end">
        <img
          className="transform transition-transform duration-300 hover:scale-105"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/ekonavi.png"
        />
      </div>
    </div>
  );
}
