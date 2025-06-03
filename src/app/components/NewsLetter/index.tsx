import Image from "next/image";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <div className="flex flex-col md:flex-row md:px-8 lg:px-16 py-8 w-full justify-between sm:items-center  ">
      <div className="flex flex-col gap-4 max-w-md">
        <h2
          className="text-2xl md:text-4xl text-center lg:text-left
 lg:text-[56px] font-semibold"
        >
          Está com alguma dúvida?
        </h2>
        <p className="text-gray-600  text-center lg:text-left">
          Entre em contato através do nosso canal direto ao cliente através do
          botão abaixo.
        </p>
        <button className="bg-[#1B2543] text-white hidden lg:block mt-8 sm:px-2 md:px-4 lg:px-6 md:py-2 lg:py-4 rounded-full w-fit">
          Central de Atendimento
        </button>
      </div>

      {/* APENAS NO MOBILE */}
      <div className="flex flex-col items-center gap-6 max-w-md mt-8 lg:hidden">
        <button className="bg-[#1B2543] text-white px-6 py-3 rounded-full w-fit">
          Central de Atendimento
        </button>

        <Link
          href="#"
          className="flex flex-col items-center text-center border border-black border-t-0 border-l-0 border-r-0 border-b-1"
        >
          <div className="flex flex-row">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Receba novidades
            </h3>
            <Image
              src="/arrow-up.svg"
              alt="Seta"
              width={36}
              height={36}
              className="self-end"
            />
          </div>
        </Link>
      </div>

      <Link
        href="#"
        className="hidden lg:flex flex-row items-center justify-between gap-4 border border-black border-t-0 border-l-0 border-r-0 border-b-1 w-fit"
      >
        <h3 className="sm:text-2xl md:text-3xl lg:text-[40px]">
          Receba novidades
        </h3>
        <Image src="/arrow-up.svg" alt="Logo" width={40} height={40} />
      </Link>
    </div>
  );
}

export default index;
