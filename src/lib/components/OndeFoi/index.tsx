import About from '@/lib/components/OndeFoi/About/index';
import Card from '@/lib/components/OndeFoi/Card/index';
import Dashboard from '@/lib/components/OndeFoi/Dashboard/index';
import Hero from '@/lib/components/OndeFoi/Hero/index';

export function OndeFoi() {
  return (
    <div className="grid">
      <Hero />
      <About />
      <Card />
      <Dashboard />
    </div>
  );
}
