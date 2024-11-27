import Doodle from '@/lib/components/LigaColaborativa/Hero/Doodle';
import Title from '@/lib/components/LigaColaborativa/Hero/Title';

export default function Hero() {
  return (
    <div className="mt-32 flex h-full flex-col gap-10 md:gap-3 lg:mt-20 lg:flex-row">
      <Title />
      <Doodle />
    </div>
  );
}
