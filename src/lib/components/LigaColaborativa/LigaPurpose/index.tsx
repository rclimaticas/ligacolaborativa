import LigaLogo from '@/lib/components/LigaColaborativa/LigaLogo';
import Title from '@/lib/components/LigaColaborativa/LigaPurpose/Title';

export default function LigaPurpose() {
  return (
    <div className="flex h-full flex-col items-center gap-10 md:gap-3 lg:flex-row">
      <LigaLogo motionClass="motion-preset-slide-left" />
      <Title />
    </div>
  );
}
