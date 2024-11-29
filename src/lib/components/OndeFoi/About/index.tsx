/* eslint-disable import/extensions */
import Doodle from '@/lib/components/OndeFoi/About/Doodle';
import Title from '@/lib/components/OndeFoi/About/Title';

export default function About() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-white p-4 md:gap-3 lg:flex-row lg:p-32">
      <Doodle />
      <Title />
    </div>
  );
}
