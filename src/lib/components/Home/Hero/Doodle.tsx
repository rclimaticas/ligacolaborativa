import Image from 'next/image';

export default function Doodle() {
  return (
    <div className="motion-preset-slide-right hidden w-1/2 items-center bg-white lg:flex">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/JXrpbXn.md.png"
        alt="Imagem"
        width={500}
        height={500}
      />
    </div>
  );
}
