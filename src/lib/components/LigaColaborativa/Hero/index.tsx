import Doodle from '@/lib/components/LigaColaborativa/Hero/Doodle';
import Title from '@/lib/components/LigaColaborativa/Hero/Title';

export default function Hero() {
  return (
    <div className="mt-52 flex h-full flex-col gap-10 p-4 md:gap-3 lg:flex-row">
      <Title />
      <Doodle />
    </div>
  );
}
