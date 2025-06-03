"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={clsx(
        "flex justify-between items-center my-4 px-4 bg-background text-foreground ",
        className
      )}
    >
      <Image src="/logo.svg" alt="Logo" width={152} height={42} />
      <Link href={"/"} className="hidden md:block">
        <strong>Home</strong>
      </Link>
      <Link href={"/"} className="hidden md:block">
        Quem Somos
      </Link>
      <Link href={"/"} className="hidden md:block">
        Serviços
      </Link>
      <Link href={"/"} className="hidden md:block">
        contacto
      </Link>

      {/* HAMBURGUER PARA O MOBILE*/}
      <button
        className="block md:hidden text-2xl text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-50">
          <a href="#" className="text-gray-800">
            Início
          </a>
          <a href="#" className="text-gray-800">
            Sobre
          </a>
          <a href="#" className="text-gray-800">
            Contato
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
