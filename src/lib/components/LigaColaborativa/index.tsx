import Colaborate from '@/lib/components/LigaColaborativa/Colaborate/index';
import Hero from '@/lib/components/LigaColaborativa/Hero/index';
import LigaLogo from '@/lib/components/LigaColaborativa/LigaLogo';
import LigaPurpose from '@/lib/components/LigaColaborativa/LigaPurpose/index';
import Newsletter from '@/lib/components/LigaColaborativa/Newsletter/index';
import RoadMap from '@/lib/components/LigaColaborativa/RoadMap/index';

export function LigaColaborativa() {
  return (
    <div className="grid gap-32 p-4 lg:p-32">
      <Hero />
      <LigaPurpose />
      <RoadMap />
      <Colaborate />
      <div className="flex items-center p-3">
        <div className="w-full">
          <Newsletter />
        </div>
        <div className="flex w-full items-end justify-end">
          <LigaLogo justifyClass="lg:justify-end" />
        </div>
      </div>
    </div>
  );
}
