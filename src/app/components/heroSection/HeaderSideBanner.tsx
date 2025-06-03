import clsx from "clsx";
import React from "react";
import Link from "next/link";

interface HeaderSideBannerProps {
  className?: string;
}

function HeaderSideBanner({ className }: HeaderSideBannerProps) {
  return (
    <div
      className={clsx(
        "bg-background text-foreground bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat rounded-3xl relative",
        "h-[300px] sm:h-[400px] md:h-[600px] lg:h-[900px]",
        className
      )}
    >
      <Link
        href={"/"}
        className="absolute bg-[#F6C010] px-4 py-2 rounded-full right-5 top-5 xs:right-3 xs:top-3 sm:right-4 sm:top-4"
      >
        Tirar meu visto agora!
      </Link>
      <div className="absolute bottom-0 left-5 flex flex-col w-8/10 py-4 lg:py-8 px-4 lg:px-4 text-white">
        <h2 className="sm:text-5xl md:text-4xl lg:text-[44px] font-semibold font-sans">
          Realize o seu sonho com a ajuda da Tirar Visto!
        </h2>
        <span className="text-[12px]  lg:text-[14px] font-sans">
          Com um serviço profissional, você não terá dor de cabeça para todo o
          processo do visto e entrevistas no consulado.
        </span>
      </div>
    </div>
  );
}

export default HeaderSideBanner;
