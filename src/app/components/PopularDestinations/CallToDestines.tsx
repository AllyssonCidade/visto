import React from "react";

function CallToDestines() {
  return (
    <div className="flex flex-col  items-center mb-12">
      <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
        Top Destinos
      </span>
      <h2 className=" text-2xl md:text-4xl lg:text-[56px] font-bold mb-4">
        Destinos mais procurados
      </h2>
      <p className="text-gray-600 max-w-xl">
        Confira os destinos mais procurados por nossos clientes nos últimos
        meses, qual será o seu novo destino?
      </p>
      <button className="bg-[#1B2543] text-white mt-6 px-6 py-2 rounded-full font-semibold">
        Conheça mais
      </button>
    </div>
  );
}

export default CallToDestines;
