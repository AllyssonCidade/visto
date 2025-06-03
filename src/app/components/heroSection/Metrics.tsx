import React from "react";

function Metrics() {
  return (
    <div className="flex flex-row justify-between items-center px-4 md:px-8 lg:px-0 mt-8 md:mt-12 lg:mt-20">
      <div className="flex flex-col items-center">
        <p className="text-[28px] md:text-[36px] lg:text-[44px] font-sans">
          509
        </p>
        <span className="text-[12px] md:text-[14px] lg:text-[16px] text-[#8D8D8D] font-sans text-center">
          Vistos Tirados
        </span>
      </div>

      <div className="h-[40px] w-[1px] bg-[#8d8d8d63] mx-2 md:mx-6 lg:mx-12" />

      <div className="flex flex-col items-center">
        <p className="text-[28px] md:text-[36px] lg:text-[44px] font-sans">
          602
        </p>
        <span className="text-[12px] md:text-[14px] lg:text-[16px] text-[#8D8D8D] font-sans text-center">
          Passaportes Tirados
        </span>
      </div>

      <div className="h-[40px] w-[1px] bg-[#8d8d8d63] mx-2 md:mx-6 lg:mx-12" />

      <div className="flex flex-col items-center">
        <p className="text-[28px] md:text-[36px] lg:text-[44px] font-sans">
          634
        </p>
        <span className="text-[12px] md:text-[14px] lg:text-[16px] text-[#8D8D8D] font-sans text-center">
          Famílias Felizes
        </span>
      </div>
    </div>
  );
}

export default Metrics;
