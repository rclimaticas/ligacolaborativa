import Image from 'next/image';

const LoginPage = () => (
  <div className="h-xl flex flex-col sm:flex-row">
    <div className="hidden w-1/2 items-center bg-white lg:flex">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/JXrpbXn.md.png"
        alt="Imagem"
        width={500}
        height={500}
      />
    </div>
    <div className="flex w-full items-center justify-center bg-white text-black-200 lg:w-1/2">
      <div className="grid w-full gap-5 px-2">
        <h2 className="text-center text-3xl font-bold md:text-left md:text-5xl">
          Plataforma Colaborativa dos Povos, Culturas e da Natureza
        </h2>
        <h3 className="text-left text-xl font-bold">
          Um espaço descentralizado com o propósito de conectar redes, saberes
          tradicionais, dados técnicos e acadêmicos.
        </h3>
        <button
          type="submit"
          className="text-black relative bottom-3 w-full rounded-xl bg-orange p-2 shadow-[rgba(0,0,15,0.5)_-3px_10px_4px_0px]"
        >
          Saber Mais
        </button>
      </div>
    </div>
  </div>
);

export default LoginPage;
