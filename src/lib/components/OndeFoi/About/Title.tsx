/* eslint-disable react-hooks/exhaustive-deps */

export default function Title() {
  return (
    <div className="motion-preset-slide-left flex w-full font-sans text-black-300">
      <div className="mb-10 mt-5 flex w-full flex-col items-center justify-center gap-5 lg:mb-0 lg:mt-0">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-right">
          Sobre o Aplicativo:
        </h2>
        <p className="w-full text-center text-2xl font-normal">
          O OndeFoi surge como uma ferramenta essencial para o registro de{' '}
          <span className="underline decoration-green-100 hover:bg-orange hover:text-black-300 hover:decoration-black-300">
            conflitos socioambientais
          </span>{' '}
          e climáticos para direcionamento de assessoria aos povos, comunidades
          e natureza.
        </p>
        <h2 className="w-full text-center text-3xl font-bold md:text-4xl">
          Nossa Estrutura:
        </h2>
        <p className="w-full text-center text-2xl font-normal">
          Nosso processo de registro é estruturado com a finalidade de{' '}
          <span className="underline decoration-green-100 hover:bg-orange hover:text-black-300 hover:decoration-black-300">
            coletar informações
          </span>{' '}
          abragentes e detalhadas em seções especificas para direcionar para
          solução efetiva, que incluem:
        </p>
      </div>
    </div>
  );
}
