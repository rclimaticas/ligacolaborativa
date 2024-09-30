import Doodle from '@/lib/components/Home/Hero/Doodle';

const LoginPage = () => (
  <div className="mt-32 flex flex-col sm:flex-row">
    <Doodle />
    <div className="flex w-full items-center justify-center bg-white text-black-300 lg:w-1/2">
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
          className="relative bottom-3 w-full rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
        >
          Saber Mais
        </button>
      </div>
    </div>
  </div>
);

export default LoginPage;
