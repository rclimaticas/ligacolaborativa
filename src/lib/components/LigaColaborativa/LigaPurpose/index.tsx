import Doodle from '@/lib/components/LigaColaborativa/LigaPurpose/Doodle';
import Title from '@/lib/components/LigaColaborativa/LigaPurpose/Title';

export default function LigaPurpose() {
  return (
    <div className="flex h-full flex-col gap-10 p-4 md:gap-3 lg:flex-row">
      <Doodle />
      <Title />
    </div>
  );
}
