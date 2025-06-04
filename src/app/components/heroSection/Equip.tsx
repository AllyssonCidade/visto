import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function Equip() {
  return (
    <div className="flex justify-between flex-col md:flex-row  md:gap-0 lg:px-0 px-4">
      {/* SÓ NO MOBILE */}
      <div className="w-full md:w-1/2 lg:w-1/3 items-center flex h-full flex-col self-end lg:hidden block">
        <Image
          src="/vdeo.png"
          alt="Logo"
          width={380}
          height={320}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 220px, 280px"
          className="rounded-2xl "
        />

        <div className="flex items-center w-full md:w-auto justify-between md:gap-2 mt-2 md:mt-4">
          <div>
            <p className="font-semibold text-[16px]">Conheça a Bruna</p>
            <span className="text-sm text-[#8D8D8D] font-sans ">Ver vídeo</span>
          </div>
          <Link href="/" className="rounded-full bg-[#1B2543] p-2 text-white">
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-none md:items-start md:w-1/2 lg:w-2/3">
        <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#8D8D8D] font-sans mb-[40px]">
          Com uma equipe altamente treinada, nós temos todos os procedimentos
          para que seu processo seja o mais tranquilo e rápido. Uma consultoria
          completa para você e sua família não ter nenhuma preocupação na sua
          viagem.
        </p>

        <Link
          href="/"
          className="bg-[#1B2543] px-4 py-2 rounded-full text-white inline-flex items-center gap-2"
        >
          Saiba mais <FaArrowRight />
        </Link>
      </div>

      <div className="md:w-1/2 lg:w-1/3 items-end flex h-full flex-col self-end hidden lg:block">
        <Image
          src="/vdeo.png"
          alt="Logo"
          width={280}
          height={220}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 220px, 280px"
          className="rounded-2xl "
        />

        <div className="flex items-center gap-2 mt-4">
          <div>
            <p className="font-semibold text-[16px]">Conheça a Bruna</p>
            <span className="text-sm text-[#8D8D8D] font-sans ">Ver vídeo</span>
          </div>
          <Link href="/" className="rounded-full bg-[#1B2543] p-2 text-white">
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Equip;
