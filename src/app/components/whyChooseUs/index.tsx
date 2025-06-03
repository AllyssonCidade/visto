import Image from "next/image";
import React from "react";

function WhyChooseUs() {
  return (
    <div className="flex flex-col md:px-8 lg:px-16 md:py-8 lg:py-18  px-2 md:px-0 md:mt-8 lg:mt-0 justify-between bg-[#eeeeee]">
      <div className="flex flex-row w-full gap-2 md:gap-16 mb-4 md:mb-0">
        <h3 className="text-2xl md:text-4xl  lg:text-[54px] self-start w-full md:w-3/5  font-sans">
          Consultoria completa para tirar seu visto
        </h3>
        {/* SÓ NO MOBILE */}
        <Image
          src="/icoTell.svg"
          alt="Logo"
          width={60}
          height={40}
          className="md:hidden block mr-2"
        />

        {/* SÓ NO desktip */}
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
          width={60}
          height={40}
          className="md:hidden block ml-2"
        />

        {/* SÓ NO desktip */}
        <Image
          src="/icoTime.svg"
          alt="Logo"
          width={100}
          height={80}
          className="hidden md:block"
        />
        <h3 className="text-2xl md:text-4xl lg:text-[54px] self-start w-full md:w-3/5  font-sans">
          {" "}
          você está em boas mãos!
        </h3>
      </div>
    </div>
  );
}

export default WhyChooseUs;
