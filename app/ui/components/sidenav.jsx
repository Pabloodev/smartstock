import Link from "next/link"
import { House, Router, Settings, LibraryBig } from 'lucide-react';

import Logout from "./Logout";

export default function Sidenav() {
  return (
    <div className="bg-zinc-950bg-zinc-900 h-screen w-[120px] border-r-1 border-white text-white p-10 flex flex-col justif items-center gap-10">

      <div className="flex items-center">
        <Link href={"/"}>
          <img src="/athonfav.png" className="w-8" alt="Icon Athon Telecom" />
        </Link>
      </div>

      <div>
        <ul className="flex flex-col gap-10">
          <li className="flex items-centar gap-2">
            <Link href={"/home"} title="Voltar a tela inicial">
              <House className="text-green-400" size={25} />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href={"/home/comodato"} title="Equipamentos em comodatos">
              <Router className="text-red-400" size={25} />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href={"/home/records"} title="Registros">
              <LibraryBig className="text-blue-400" size={25} />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href={"/home/settings"} title="Configurações">
              <Settings className="text-purple-400" size={25} />
            </Link>
          </li>

        </ul>

      </div>

      <Logout />

    </div>
  )
}