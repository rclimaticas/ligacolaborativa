import Image from 'next/image';

export default function Doodle() {
  return (
    <div className="mt-10 w-full items-center justify-center bg-white">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/d9gXTLF.md.png"
        alt="Imagem"
        width={590}
        height={590}
      />
    </div>
  );
}
