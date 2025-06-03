import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

function Social() {
  return (
    <div className="flex flex-col md:gap-2 lg:gap-4 mt-6 items-center lg:items-start">
      <h2 className="text-base font-semibold">Siga em nossas redes:</h2>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2 md:gap-4">
        <Link
          href="#"
          className="border px-3 py-1 rounded-full flex items-center justify-center md:justify-start gap-2 text-sm"
        >
          {/* Ícone só mobile */}
          <FaInstagram size={18} className="md:hidden" />
          {/* Texto só desktop */}
          <span className="hidden md:inline">Instagram</span>
        </Link>

        <Link
          href="#"
          className="border px-3 py-1 rounded-full flex items-center justify-center md:justify-start gap-2 text-sm"
        >
          <FaXTwitter size={18} className="md:hidden" />
          <span className="hidden md:inline">X</span>
        </Link>

        <Link
          href="#"
          className="border px-3 py-1 rounded-full flex items-center justify-center md:justify-start gap-2 text-sm"
        >
          <FaFacebookF size={18} className="md:hidden" />
          <span className="hidden md:inline">Facebook</span>
        </Link>

        <Link
          href="#"
          className="border px-3 py-1 rounded-full flex items-center justify-center md:justify-start gap-2 text-sm"
        >
          <FaYoutube size={18} className="md:hidden" />
          <span className="hidden md:inline">YouTube</span>
        </Link>
      </div>
    </div>
  );
}

export default Social;
