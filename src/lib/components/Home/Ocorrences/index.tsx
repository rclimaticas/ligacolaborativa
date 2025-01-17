import Occurrences from '@/lib/components/Home/Ocorrences/Occurrences';

export default function OcorrencesWidget() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex min-h-full w-[1500px] flex-wrap items-center justify-center gap-10 p-5 text-black-200 text-black-300 lg:flex-nowrap lg:p-32">
        <Occurrences />
      </div>
    </div>
  );
}
