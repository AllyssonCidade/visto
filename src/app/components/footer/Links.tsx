import Link from "next/link";
import React from "react";

function Links() {
  return (
    <div className="flex flex-row justify-between w-full lg:w-1/2 pr-0 lg:pr-16 text-sm text-gray-700">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold mb-2">Empresa</h4>
        <ul className="space-y-1 flex flex-col gap-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Quem somos</Link>
          </li>
          <li>
            <Link href="/">Serviços</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold mb-2">Novidades</h4>
        <ul className="space-y-1 flex flex-col gap-1">
          <li>
            <Link href="/">Passaporte</Link>
          </li>
          <li>
            <Link href="/">Visto</Link>
          </li>
          <li>
            <Link href="/">Entrevista</Link>
          </li>
          <li>
            <Link href="/">Polícia Federal</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold mb-2">Suporte</h4>
        <ul className="space-y-1 flex flex-col gap-1">
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
          <li>
            <Link href="/">Dúvidas Frequentes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Links;
