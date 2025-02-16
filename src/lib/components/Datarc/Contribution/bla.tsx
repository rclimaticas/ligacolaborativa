/* eslint-disable react/button-has-type */
import { ContributionData } from '@/lib/components/models/Datarc/Contribution';

const { title, button } = ContributionData;

export default function Contribution() {
  return (
    <div className="flex flex-col items-center gap-3 p-5 text-black-300">
      <h1 className="text-center text-2xl md:text-3xl">{title.name}</h1>
      <p className="text-left lg:text-center">{title.description}</p>
      <button className="w-[280px] rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]">
        {button.name}
      </button>
    </div>
  );
}
