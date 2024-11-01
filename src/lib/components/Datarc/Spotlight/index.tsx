import Image from '@/lib/components/Datarc/Spotlight/Image';
import Title from '@/lib/components/Datarc/Spotlight/Title';

export default function Spotlight() {
  return (
    <div className="relative mb-0 flex h-screen flex-col items-center justify-center gap-2 p-5 md:p-20 lg:flex-row lg:gap-10 xl:mb-40 xl:mt-[-100px]">
      <Title />
      <Image />
    </div>
  );
}
