import RecentPosts from '@/lib/components/Home/Posts/RecentPosts';
import PartnerEkonavi from '@/lib/components/Home/SupportAndMapBiomes/PartnerEkonavi';

export default function SupportMapBiomesWidget() {
  return (
    <div>
      <PartnerEkonavi />
      <RecentPosts />
    </div>
  );
}
