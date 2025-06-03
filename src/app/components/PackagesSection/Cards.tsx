import Image from "next/image";
import React from "react";

function Cards() {
  const packages = [
    {
      image: "/passport.png",
      title: "Passaporte",
      atendimento: "On-line",
      tempo: "45 dias",
      price: "R$ 890,00",
    },
    {
      title: "Passaporte + Visto",
      price: "R$ 1.290,00",
      atendimento: "On-line + Presencial",
      tempo: "25 dias",
      image: "/travel.png",
    },
    {
      title: "Consultoria Completa",
      price: "R$ 1.890,00",
      atendimento: "Presencial Completo",
      tempo: "10 dias",
      image: "/agence.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {packages.map((pkg, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
        >
          <Image
            src={pkg.image}
            alt={pkg.title}
            width={400}
            height={300}
            className="w-full h-auto object-cover p-3 rounded-3xl max-h-[160px] md:max-h-none"
          />

          <div className="p-2 md:p-6 flex flex-col gap-1 md:gap-3">
            <div className="flex gap-2 text-xs font-medium">
              <span className="border border-black-200 px-4 py-1 rounded-full">
                Basic
              </span>
              <span className="border text-gray-600 border-gray-200 px-4 py-1 rounded-full">
                Premium
              </span>
            </div>

            <h3 className="text-2xl md:text-[28px] font-semibold">
              {pkg.title}
            </h3>

            <div className="text-sm flex flex-row justify-between pr-18">
              <div className="flex flex-col">
                <p className="text-black-600 font-semibold">Atendimento</p>
                <span className="text-gray-400">{pkg.atendimento}</span>
              </div>

              <div className="flex flex-col">
                <p className="text-black-600 font-semibold">
                  {pkg.title === "Consultoria Completa" ? "Duration" : "Tempo"}
                </p>
                <span className="text-gray-400">{pkg.tempo}</span>
              </div>
            </div>

            {/* divider */}
            <div className="w-full h-[1px] bg-[#b4b4b460] px-2 my-1 md:my-2" />

            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-gray-400 text-sm">A partir de</p>
                <span className="text-2xl md:text-[32px] font-semibold">
                  {pkg.price}
                </span>
              </div>

              <button className="bg-[#1B2543] text-white mt-4 px-4 py-1 md:py-2 rounded-full self-start">
                Contratar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
