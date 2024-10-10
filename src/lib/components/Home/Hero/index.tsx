import Doodle from '@/lib/components/Home/Hero/Doodle';
import Title from '@/lib/components/Home/Hero/Title';

export default function Hero() {
  return (
    <div className="mt-32 flex flex-col sm:flex-row">
      <Doodle />
      <Title />
    </div>
  );
}
