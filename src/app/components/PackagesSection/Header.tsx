import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
          Pacotes
        </span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold ">
          Confira nossos pacotes
        </h2>
      </div>

      <div className="flex gap-2 lg:gap-4 self-end">
        <button className="w-6 lg:w-10 h-6 lg:h-10 flex items-center border justify-center bg-[#FFFFF] text-[#1B2543] rounded-full">
          <FaArrowLeft />
        </button>
        <button className="w-6 lg:w-10 h-6 lg:h-10  flex items-center justify-center bg-[#1B2543] text-white rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Header;
