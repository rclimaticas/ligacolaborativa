import Doodle from '@/lib/components/Home/Hero/Doodle';
import Title from '@/lib/components/Home/Hero/Title';

export default function Hero() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="mt-32 flex w-[1300px] flex-col sm:flex-row">
        <Doodle />
        <Title />
      </div>
    </div>
  );
}
