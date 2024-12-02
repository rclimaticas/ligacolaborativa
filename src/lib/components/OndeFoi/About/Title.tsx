/* eslint-disable react-hooks/exhaustive-deps */

export default function Title() {
  return (
    <div className="motion-preset-slide-left flex w-full text-black-300">
      <div className="w-full items-center justify-center gap-5">
        <h2 className="text-center text-3xl font-bold md:text-3xl lg:text-right">
          Sobre o Aplicativo:
        </h2>
        <p className="w-full text-center text-lg font-normal lg:text-right">
          O OndeFoi surge como uma ferramenta essencial para o registro de{' '}
          <span className="underline decoration-green-100 hover:bg-orange hover:text-black-300 hover:decoration-black-300">
            conflitos socioambientais
          </span>{' '}
          e climáticos para direcionamento de assessoria aos povos, comunidades
          e natureza.
        </p>
        <h2 className="w-full text-center text-3xl font-bold md:text-3xl lg:text-right">
          Nossa Estrutura:
        </h2>
        <p className="w-full text-center text-lg font-normal lg:text-right">
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
