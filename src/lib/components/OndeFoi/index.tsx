// import Graph from '@/lib/components/Graph/index';
import About from '@/lib/components/OndeFoi/About/index';
import Card from '@/lib/components/OndeFoi/Card/index';
import Contribution from '@/lib/components/OndeFoi/Contribution/index';
import Dashboard from '@/lib/components/OndeFoi/Dashboard/index';
import Hero from '@/lib/components/OndeFoi/Hero/index';

export function OndeFoi() {
  return (
    <div className="grid overflow-hidden">
      <Hero />
      <div className="flex flex-col bg-fundoOndeFoi">
        <About />
        <Card />
        <Dashboard />
        <Contribution />
      </div>
    </div>
  );
}
