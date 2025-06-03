import React from "react";
import Header from "./Header";
import HeaderSideBanner from "./HeaderSideBanner";
import Equip from "./Equip";
import Metrics from "./Metrics";

export default function HeroSection() {
  return (
    <div className="lg:pl-16 lg:pr-4 pt-4 px-2 pb-8 ">
      <div className="flex justify-between">
        <div className="lg:w-3/7 w-full">
          <Header />
          {/* banner só proMOBILE */}
          <HeaderSideBanner className="lg:w-6/11 block lg:hidden  " />

          <h1 className=" font-semibold font-sans sm:pt-12 mt-4 lg:mt-0 md:pt-8 lg:pt-0 text-2xl md:text-4xl lg:text-[54px]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>

          {/* divider */}
          <div className="md:w-3/4 mx-auto lg:w-full h-[1px] bg-[#8D8D8D] mt-4 md:mt-12 lg:mt-8 mb-16 px-12" />

          <Equip />
          <Metrics />
        </div>
        <HeaderSideBanner className="lg:w-6/11 lg:block hidden" />
      </div>
    </div>
  );
}
