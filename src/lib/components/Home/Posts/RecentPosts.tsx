import Image from 'next/image';

export default function RecentPosts() {
  return (
    <h1 className="relative bottom-0 p-5 text-center text-3xl underline xl:bottom-[600px] xl:p-32 xl:text-left">
      Publicações Recentes
      <div className="mt-5 flex flex-wrap items-center justify-center gap-5 md:justify-between lg:flex lg:flex-nowrap lg:justify-center xl:justify-start">
        {/* Post-1 */}
        <Image
          className="hidden transform transition-transform duration-300 hover:scale-105 xl:block"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/article1-CRX__5vu.png"
          alt="Post-1"
          width={180}
          height={180}
        />
        <Image
          className="block xl:hidden"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/article1-CRX__5vu.png"
          alt="Post-1"
          width="300"
          height="300"
        />

        {/* Post-2 */}
        <Image
          className="hidden transform transition-transform duration-300 hover:scale-105 xl:block"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/article2-DoBxtVVI.png"
          alt="Post-1"
          width={175}
          height={175}
        />
        <Image
          className="block xl:hidden"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/article2-DoBxtVVI.png"
          alt="Post-1"
          width={300}
          height={300}
        />
      </div>
    </h1>
  );
}
