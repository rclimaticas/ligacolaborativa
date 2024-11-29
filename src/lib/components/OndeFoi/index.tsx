import About from '@/lib/components/OndeFoi/About/index';
import Hero from '@/lib/components/OndeFoi/Hero/index';

export function OndeFoi() {
  return (
    <div className="grid gap-32">
      <Hero />
      <About />
    </div>
  );
}
