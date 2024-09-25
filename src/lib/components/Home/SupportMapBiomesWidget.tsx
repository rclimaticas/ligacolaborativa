import MapBiomesUpdates from '@/lib/components/Home/MapBiomesUpdates';
import PartnerEkonavi from '@/lib/components/Home/PartnerEkonavi';

// Função de pre-renderização estática
export async function getStaticProps() {
  // Aqui você pode buscar dados ou fazer qualquer processamento necessário
  // Esses dados serão passados como props para o componente
  const data = {}; // Exemplo de dados que podem ser obtidos

  return {
    props: {
      data, // Esses dados serão acessíveis no componente como props
    },
    revalidate: 3600, // Revalida a cada 1 hora (3600 segundos)
  };
}

export default function SupportMapBiomesWidget() {
  return (
    <div className="mt-20 h-full w-full bg-fundo bg-cover text-black-300">
      <div className="flex flex-wrap items-center justify-center gap-10 p-5 text-black-200 text-black-300 lg:p-32 xl:flex-nowrap">
        <MapBiomesUpdates />
        <PartnerEkonavi />
      </div>
    </div>
  );
}
