import Doodle from '@/lib/components/Datarc/Spotlight/Doodle';
import Title from '@/lib/components/Datarc/Spotlight/Title';

export default function Spotlight() {
  return (
    <div className="relative bottom-0 flex h-screen flex-col items-center justify-center p-5 md:p-20 xl:bottom-[130px] xl:flex-row">
      <Doodle />
      <Title />
    </div>
  );
}
