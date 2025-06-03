import Link from "next/link";
import React from "react";

function Description() {
  return (
    <div className="w-full flex md:gap-4 lg:gap-8 mb-6 md:mb-0 px-4 md:px-0 items-center md:items-start flex-col md:flex-row justify-between ">
      <div className="flex flex-col  md:basis-2/3 lg:basis-1/3  items-center md:items-start ">
        <Link
          href={"/"}
          className="bg-yellow-400  text-black py-2 px-4 rounded-full md:text-xs lg:text-sm font-semibold px-0"
        >
          Veja como funciona
        </Link>
        <h2 className="text-1xl md:text-4xl lg:text-[46px] mb-4 pt-4  leading-tight">
          Sua tranquilidade não tem preço!
        </h2>
      </div>

      <p className="w-full md:w-3/5 text-bottom self-center text-gray-600 text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

export default Description;
