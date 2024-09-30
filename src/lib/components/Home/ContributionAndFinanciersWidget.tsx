import Newsletter from '@/lib/components/Home/Newsletter';
import RecentPosts from '@/lib/components/Home/Posts/RecentPosts';
import MapBiomesUpdates from '@/lib/components/Home/SupportAndMapBiomes/MapBiomesUpdates';
import PartnerEkonavi from '@/lib/components/Home/SupportAndMapBiomes/PartnerEkonavi';

export async function getStaticProps() {
  const data = {};

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}

export default function SupportMapBiomesWidget() {
  return (
    <div className="mt-20 h-full w-full bg-fundo bg-cover text-black-300">
      <div className="flex flex-wrap items-center justify-center gap-10 p-5 text-black-200 text-black-300 lg:p-32 xl:flex-nowrap">
        <MapBiomesUpdates />
        <PartnerEkonavi />
      </div>
      <RecentPosts />
      <Newsletter />
    </div>
  );
}
