import Doodle from '@/lib/components/OndeFoi/Dashboard/Doodle';
import Text from '@/lib/components/OndeFoi/Dashboard/Text';

export default function Dashboard() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-10 flex grid h-full w-full grid-cols-1 flex-col items-center justify-center p-4 lg:flex-row lg:p-32">
        <Doodle />
        <Text />
      </div>
    </div>
  );
}
