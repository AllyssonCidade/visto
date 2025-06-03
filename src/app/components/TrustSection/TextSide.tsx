"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function TextSide() {
  const [activeModal, setActiveModal] = useState<null | string>(null);

  const handleOpen = (key: string) => setActiveModal(key);
  const handleClose = () => setActiveModal(null);

  const items = [
    {
      key: "etapa",
      title: "Etapa Inicial",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      key: "entrevista",
      title: "Processo de Entrevista",
      description:
        "Nesta etapa, você será preparado para a entrevista no consulado com orientações especializadas.",
    },
    {
      key: "documentos",
      title: "Entrega de Documentos",
      description:
        "Ajudamos na separação e envio correto dos documentos para que tudo esteja em conformidade.",
    },
  ];

  return (
    <div className="w-full flex flex-row lg:justify-center items-center md:justify-between px-4 md:px-0">
      {/* SÓ NO DESKTOP */}
      <div className="rounded-xl self-center hidden md:block overflow-hidden md:mt-0 lg:mt-8 flex flex-col md:w-4/10 lg:w-6/10 md:gap-0 lg:gap-2">
        <Image
          src="/Happy_tourist.png"
          alt="Família feliz no aeroporto"
          width={1400}
          height={600}
          className="rounded-xl md:w-full lg:w-9/10 h-auto object-cover"
        />
      </div>

      <div className="flex flex-col md:w-5/10 lg:w-4/10 justify-evenly gap-4 md:gap-2 lg:gap-0">
        {/* SÓ NO CELULAR */}
        <div className="rounded-xl self-center md:hidden block overflow-hidden mt-4">
          <Image
            src="/Happy_tourist.png"
            alt="Família feliz no aeroporto"
            width={1400}
            height={600}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {items.map(({ key, title, description }) => (
          <div key={key}>
            <div className="flex justify-between items-center md:hidden">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                onClick={() => handleOpen(key)}
                className="text-sm text-blue-700 flex items-center gap-1"
              >
                <FaPlus /> <span>Leia mais</span>
              </button>
            </div>

            {/* so no Desktop*/}
            <div className="hidden md:block">
              <h3 className="md:text-1xl lg:text-[44px] md:font-semibold lg:font-bold">
                {title}
              </h3>
              <p className="text-gray-600 md:text-xs lg:text-sm pr-8">
                {description}
              </p>
            </div>

            <hr className="my-3" />

            {/* so mobile */}
            {activeModal === key && (
              <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 md:hidden">
                <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg relative">
                  <button
                    onClick={handleClose}
                    className="absolute top-2 right-3 text-gray-600 font-bold text-lg"
                  >
                    X
                  </button>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextSide;
