import Image from "next/image";
import React from "react";

function ImagesDesign() {
  const destinations = [
    {
      name: "Bali, Indonésia",
      image: "/bali.png",
    },
    {
      name: "Nova York, Estados Unidos",
      image: "/ny.png",
    },
    {
      name: "Santorini, Grécia",
      image: "/santorini.png",
    },
    {
      name: "Paris, França",
      image: "/paris.png",
    },
    {
      name: "Cidade do Cabo, África do Sul",
      image: "/capetown.png",
    },
    {
      name: "Mumbai, Índia",
      image: "/mumbai.png",
    },
  ];

  return (
    <div className="w-full mb-12 md:mb-0">
      {/* MOBILE SLIDER */}
      <div className="block md:hidden overflow-x-auto whitespace-nowrap px-4 space-x-4 flex snap-x snap-mandatory">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="relative inline-block w-[280px] h-[180px] snap-start rounded-xl overflow-hidden shadow-md flex-shrink-0"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-3 rounded-full text-white text-xs py-1">
              {dest.name}
            </div>
          </div>
        ))}
      </div>

      {/* apenas no deSKTOP*/}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {destinations.map((dest, index) => {
          const isEdgeColumn = index % 3 === 0 || index % 3 === 2;
          const isFirstRow = index < 3;

          return (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-md flex items-center justify-center 
                ${isEdgeColumn ? "h-[85%]" : "h-full"} 
                ${isFirstRow ? "self-end" : "self-start"}`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute md:bottom-2 lg:bottom-4 self-center bg-white/15 backdrop-blur-md px-3 rounded-[20px] text-white p-1 text-center">
                <p className="md:text-xs lg:text-sm font-medium">{dest.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImagesDesign;
