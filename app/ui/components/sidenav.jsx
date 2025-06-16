import Link from "next/link";
import { House, Router, Settings, LibraryBig } from 'lucide-react';

import Logout from "./Logout";

export default function Sidenav() {
  return (
    <div className="bg-gray-900 h-screen w-[240px] border-r border-blue-400 text-white p-10 flex flex-col justify-between items-center gap-10">

      <div className="w-full">

        <div className="flex items-center mb-10">
        <div className="flex items-center gap-3">
          <img src="/athonfav.png" className="w-8" alt="Icon Athon Telecom" />
          <p>Athon Telecom</p>
        </div>
      </div>

        <ul className="flex flex-col gap-6 w-full">
          <li>
            <Link href={"/home"} title="Voltar a tela inicial" className="flex items-center gap-3 hover:text-green-400 transition-colors">
              <House className="text-green-400" size={25} />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link href={"/home/comodato"} title="Equipamentos em comodato" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
              <Router className="text-orange-400" size={25} />
              <span>Comodatos</span>
            </Link>
          </li>
          <li>
            <Link href={"/home/records"} title="Registros" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <LibraryBig className="text-blue-400" size={25} />
              <span>Registros</span>
            </Link>
          </li>
          <li>
            <Link href={"/home/settings"} title="Configurações" className="flex items-center gap-3 hover:text-purple-400 transition-colors">
              <Settings className="text-purple-400" size={25} />
              <span>Configurações</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <Logout />
    </div>
  );
}
