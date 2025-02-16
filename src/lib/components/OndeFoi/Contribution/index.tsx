import Contribution from '@/lib/components/OndeFoi/Contribution/Contribution';
import Trustedby from '@/lib/components/OndeFoi/Contribution/Trustedby';

export default function Dashboard() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex grid h-full w-full max-w-[1500px] grid-cols-1 flex-col items-center justify-center gap-20 p-4 lg:grid-cols-2 lg:flex-row lg:p-32">
        <Trustedby />
        <Contribution />
      </div>
    </div>
  );
}
