import React from "react";
import Links from "./Links";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="bg-white px-4 md:px-8 lg:px-10 sm:py-4 lg:py-8 lg:pt-32">
      <div className="flex flex-col lg:flex-row justify-between gap-8 items-center lg:items-start">
        <Social />
        <Links />
      </div>

      <div className="mt-8 lg:mt-16 text-center text-sm text-black">
        © 2025 Tirar Visto – Todos os Direitos Reservados
      </div>
    </footer>
  );
}
