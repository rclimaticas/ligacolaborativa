import Image from 'next/image';

export default function Doodle() {
  return (
    <div className="hidden w-1/2 items-center bg-white xl:flex">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/Mother+Earth+Day-cuate+(1).png"
        alt="Imagem"
        width={590}
        height={590}
      />
    </div>
  );
}
