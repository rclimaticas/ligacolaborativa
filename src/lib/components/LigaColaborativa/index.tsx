import Colaborate from '@/lib/components/LigaColaborativa/Colaborate/index';
import Hero from '@/lib/components/LigaColaborativa/Hero/index';
import LigaPurpose from '@/lib/components/LigaColaborativa/LigaPurpose/index';
import RoadMap from '@/lib/components/LigaColaborativa/RoadMap/index';

export function LigaColaborativa() {
  return (
    <div>
      <Hero />
      <LigaPurpose />
      <RoadMap />
      <Colaborate />
    </div>
  );
}
