import Doodle from '@/lib/components/Datarc/ArcGIS/Doodle';
import Title from '@/lib/components/Datarc/ArcGIS/Title';

export default function ArcGIS() {
  return (
    <div className="relative bottom-[400px] flex grid h-screen flex-col items-center justify-center gap-5 p-5 md:p-20">
      <Title />
      <Doodle />
    </div>
  );
}
