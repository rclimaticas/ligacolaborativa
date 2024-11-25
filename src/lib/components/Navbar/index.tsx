import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function App() {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
