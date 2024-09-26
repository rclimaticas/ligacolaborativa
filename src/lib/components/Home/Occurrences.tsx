import Image from 'next/image';

export default function Occurrences() {
  return (
    <div className="flex min-h-full flex-wrap items-center justify-center gap-10 p-5 text-black-200 text-black-300 lg:flex-nowrap lg:p-32">
      <div className="grid w-full gap-5 lg:w-10/12">
        <h1 className="text-4xl">No período...</h1>
        <div className="text-2xl">
          Foram registrados 20 ocorrências, sendo 6 animais selvagens
          encontrados, 4 conflitos com empreendimentos, 2 desmatamentos, 3
          poluições no rio, 1 poluição de solo/erosão, 1 queimada e 3 outras
          ocorrências.
        </div>
        <button
          type="submit"
          className="w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:w-1/2"
        >
          Ler Boletim Mensal
        </button>
      </div>
      <div className="flex w-full flex-col justify-center gap-5 text-right lg:justify-end">
        <h2 className="text-left">
          Registre Ocorrências de conflitos em seu território e receba apoio
          gratuito.
          <button
            type="submit"
            className="ml-0 mt-5 w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:ml-2 lg:mt-0 lg:w-3/5"
          >
            Acessar aplicativo aqui
          </button>
        </h2>
        <div className="flex items-center justify-center">
          <Image
            className="shadow-[rgba(0,0,15,0.5)_-10px_10px_4px_0px]"
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/dashboard-DAWr450K.png"
            alt="Dashboard"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
