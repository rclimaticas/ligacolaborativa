import { HeroData } from '@/lib/components/models/Datarc/Hero';

const { title, button } = HeroData;

export default function Title() {
  return (
    <div className="flex w-full items-center justify-center bg-white text-black-300 xl:w-1/2">
      <div className="grid w-full gap-5">
        <h2 className="text-center text-3xl font-bold md:text-left md:text-5xl">
          {title.name}
        </h2>
        <h3 className="text-left text-xl font-bold">{title.description}</h3>
        <button
          type="submit"
          className="relative bottom-3 w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
        >
          {button.name}
        </button>
      </div>
    </div>
  );
}
