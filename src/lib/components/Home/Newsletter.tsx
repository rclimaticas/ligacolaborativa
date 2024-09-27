/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Newsletter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <form className="relative bottom-0 w-full p-5 lg:p-32 xl:bottom-[800px]">
        <h1 className="text-center text-2xl lg:text-left">
          Receba atualizações
        </h1>
        <div className="border-teal-500 flex flex-col items-center gap-10 border-b py-2">
          <input
            className="bg-transparent mr-3 w-full appearance-none border-none bg-[#ebebab] px-2 py-1 leading-tight text-black-300 focus:outline-none"
            type="text"
            placeholder="Seu nome"
            aria-label="Full name"
          />
          <input
            className="bg-transparent mr-3 w-full appearance-none border-none bg-[#ebebab] px-2 py-1 leading-tight text-black-300 focus:outline-none"
            type="text"
            placeholder="Seu email"
            aria-label="Email"
          />
        </div>
      </form>
      <div className="relative bottom-0 w-full p-5 lg:p-32 xl:bottom-[980px]">
        <img src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png" />
      </div>
    </div>
  );
}
