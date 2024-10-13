import { SpotlightData } from '@/lib/components/models/Datarc/Spotlight';

const { title, button } = SpotlightData;

export default function Title() {
  return (
    <div className="mt-10 flex w-full items-center justify-center bg-white text-black-300 xl:mt-0 xl:w-1/2">
      <div className="grid w-full gap-5">
        <h2 className="text-center text-3xl font-bold md:text-5xl xl:text-left">
          {title.name}
        </h2>
        <p className="text-left font-bold">{title.description}</p>
        <button
          type="submit"
          className="w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
        >
          {button.name}
        </button>
      </div>
    </div>
  );
}
