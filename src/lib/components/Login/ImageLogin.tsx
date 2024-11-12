import Image from 'next/image';

export default function ImageLogin() {
  return (
    <div className="bg-gray-100 hidden w-full justify-center lg:flex">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/75ba33192562945.65dddcd30b0c9.png"
        alt="Imagem de login"
        className="h-full w-full object-cover"
        layout="fill"
      />
    </div>
  );
}
