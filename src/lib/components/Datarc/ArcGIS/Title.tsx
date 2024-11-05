import { ArcGISData } from '@/lib/components/models/Datarc/ArcGIS';

const { title } = ArcGISData;

export default function Title() {
  return (
    <div className="flex w-full items-center justify-center bg-white text-black-300 xl:mt-0">
      <div className="grid w-full gap-5">
        <h2 className="text-center text-3xl font-bold md:text-5xl xl:text-left">
          {title.name}
        </h2>
        <p className="text-left text-2xl">{title.description}</p>
      </div>
    </div>
  );
}
