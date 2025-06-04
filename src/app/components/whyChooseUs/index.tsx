import Image from "next/image";
import React from "react";

function WhyChooseUs() {
  return (
    <div className="w-full bg-[#eeeeee]">
      {/*NÃO CONSEGUI PENSAR EM NADA MELHOR PARA O MOBILE, ENTÃO BOTEI UM SLIDE */}
      <div className="md:hidden flex flex-col items-center justify-center overflow-hidden relative py-4">
        <div className="w-full overflow-hidden whitespace-nowrap mb-[-4]">
          <div className="flex animate-slideRightLoop min-w-max">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="text-2xl font-bold mx-4 inline-flex items-center gap-2"
              >
                Consultoria completa para tirar seu visto
                <Image
                  src="/icoTell.svg"
                  alt="Ícone Tell"
                  width={70}
                  height={70}
                />
              </span>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="flex animate-slideLeftLoop min-w-max">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="text-2xl font-bold mx-4 inline-flex items-center gap-2"
              >
                você está em boas mãos!
                <Image
                  src="/icoTime.svg"
                  alt="Ícone Time"
                  width={70}
                  height={70}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* parte do desktop */}
      <div className="hidden md:flex flex-col md:px-8 lg:px-16 md:py-8 lg:py-18 px-2 md:px-0 md:mt-8 lg:mt-0 justify-between">
        <div className="flex flex-row w-full gap-2 md:gap-16 mb-4 md:mb-0">
          <h3 className="text-2xl md:text-4xl lg:text-[54px] self-start w-full md:w-3/5 font-sans">
            Consultoria completa para tirar seu visto
          </h3>
          <Image
            src="/icoTell.svg"
            alt="Logo"
            width={100}
            height={80}
            className="hidden md:block"
          />
        </div>

        <div className="flex flex-row w-full gap-8 justify-end items-end text-right">
          <Image
            src="/icoTime.svg"
            alt="Logo"
            width={100}
            height={80}
            className="hidden md:block"
          />
          <h3 className="text-2xl md:text-4xl lg:text-[54px] self-start w-full md:w-3/5 font-sans">
            você está em boas mãos!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
