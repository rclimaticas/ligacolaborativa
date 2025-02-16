import Image from 'next/image';

export default function Doodle() {
  return (
    <div className="mt-10 w-full items-center bg-white lg:mt-0">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/arcgis-BXUFbAj1.png"
        alt="Imagem"
        width={1400}
        height={1400}
      />
    </div>
  );
}
