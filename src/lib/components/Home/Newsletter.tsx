/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Newsletter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <form className="relative bottom-0 w-full p-5 lg:p-32 xl:bottom-[800px]">
        <h1 className="text-center text-2xl lg:text-left">
          Receba atualizações
        </h1>
        <div className="mt-5 grid gap-5">
          <div className="relative mt-2 w-72 md:w-full">
            <input
              type="name"
              id="name"
              className="text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
              placeholder=" "
            />
            <label
              htmlFor="email_address"
              className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
            >
              Nome
            </label>
          </div>
          <div className="relative mt-2 w-72 md:w-full">
            <input
              type="email"
              id="email"
              className="text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
            >
              Email
            </label>
          </div>
          <button className="w-20 rounded-lg bg-orange p-2">Enviar</button>
        </div>
      </form>
      <div className="relative bottom-0 w-full p-5 lg:p-32 xl:bottom-[980px]">
        <img src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png" />
      </div>
    </div>
  );
}
