/* eslint-disable import/extensions */
import Doodle from '@/lib/components/OndeFoi/Hero/Doodle';
import Title from '@/lib/components/OndeFoi/Hero/Title';

export default function Hero() {
  return (
    <div className="mt-12 flex h-full w-full items-center justify-center bg-green-100 lg:bg-gradient">
      <div className="flex h-full w-full max-w-[1500px] flex-col items-center justify-center gap-10 p-4 md:gap-3 lg:flex-row lg:p-32">
        <Title />
        <Doodle />
      </div>
    </div>
  );
}
