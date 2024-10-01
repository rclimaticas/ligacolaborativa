export default function Contribution() {
  return (
    <div className="relative bottom-0 grid gap-4 p-5 text-center text-3xl xl:bottom-[1100px] xl:p-32 xl:text-left">
      <h1 className="text-3xl">Como você pode contribuir?</h1>
      <div className="text-2xl font-light">
        Nosso projeto não possui financiamento permanente e conta com doações e
        prestações de serviços para seguir contribuindo com os povos, culturas e
        natureza Inclua em seus projetos uma % para contratar nossos estudos de
        impacto nos ODS, diagnósticos socioambientais, estudos de gênero,
        vulnerabilidade e resiliência climática, dentre outros.
        <button
          type="submit"
          className="ml-0 mt-5 w-56 rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:ml-2 lg:mt-0"
        >
          Contribua
        </button>
      </div>
    </div>
  );
}
