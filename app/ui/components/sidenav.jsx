'use client'

import Link from "next/link";
import { House, Router, Settings, LibraryBig } from 'lucide-react';
import clsx from "clsx";
import Logout from "./Logout";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/home",
    label: "Início",
    title: "Voltar à tela inicial",
    icon: <House className="text-green-400" size={25} />,
    activeColor: "bg-blue-950",
  },
  {
    href: "/home/comodato",
    label: "Comodatos",
    title: "Equipamentos em comodato",
    icon: <Router className="text-orange-400" size={25} />,
    activeColor: "bg-blue-950",
  },
  {
    href: "/home/records",
    label: "Registros",
    title: "Registros",
    icon: <LibraryBig className="text-blue-400" size={25} />,
    activeColor: "bg-blue-950",
  },
  {
    href: "/home/settings",
    label: "Configurações",
    title: "Configurações",
    icon: <Settings className="text-purple-400" size={25} />,
    activeColor: "bg-blue-950",
  },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-900 h-screen w-[250px] border-r border-blue-400 text-white p-10 flex flex-col justify-between items-center gap-10">
      <div className="w-full">
        <div className="flex items-center mb-10">
          <div className="flex items-center gap-3">
            <img src="/athonfav.png" className="w-8" alt="Icon Athon Telecom" />
            <p>Athon Telecom</p>
          </div>
        </div>

        <ul className="flex flex-col gap-5 w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={link.title}
                  className={clsx(
                    "flex items-center gap-3 px-4 py-2 rounded-md transition-colors",
                    "hover:opacity-80",
                    isActive && link.activeColor
                  )}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Logout />
    </div>
  );
}
