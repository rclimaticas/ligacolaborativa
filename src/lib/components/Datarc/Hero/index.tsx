import Doodle from '@/lib/components/Datarc/Hero/Doodle';
import Title from '@/lib/components/Datarc/Hero/Title';

export default function Hero() {
  return (
    <div className="mt-10 flex h-screen flex-col items-center justify-center p-5 sm:flex-row md:p-20">
      <Doodle />
      <Title />
    </div>
  );
}
