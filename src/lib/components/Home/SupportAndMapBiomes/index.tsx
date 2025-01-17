import NewsletterAndTrustedBy from '@/lib/components/Home/NewsletterAndTrustedBy/index';
import PostsWidget from '@/lib/components/Home/Posts/index';
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
    <div className="mt-20 h-[4200px] w-full bg-fundo bg-cover text-black-300 md:h-[4100px] xl:h-full">
      <div className="flex items-center justify-center">
        <div className="flex w-[1500px] flex-wrap items-center justify-center gap-10 p-5 text-black-200 text-black-300 lg:p-32 xl:flex-nowrap">
          <MapBiomesUpdates />
          <PartnerEkonavi />
        </div>
      </div>
      <PostsWidget />
      <NewsletterAndTrustedBy />
    </div>
  );
}
