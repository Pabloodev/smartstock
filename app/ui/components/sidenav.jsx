'use client'

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/dataSite";
import { User, UserCog, Moon, Sun } from "lucide-react";
import Logout from "./Logout";

export default function Sidenav() {
  const pathname = usePathname();
  const [user, setUser] = useState("");
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selected, setSelected] = useState("system");
  const [currentTheme, setCurrentTheme] = useState("light"); // "light" ou "dark"

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/me', {
          credentials: 'include',
        });
        const data = await response.json();
        setUser(data.user || "Desconhecido");
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
        setUser("Erro");
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setSelected(saved);
    updateTheme(saved);
  }, []);

  function updateTheme(theme) {
    const root = document.documentElement;
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
      setCurrentTheme(prefersDark ? "dark" : "light");
    } else {
      root.classList.toggle("dark", theme === "dark");
      setCurrentTheme(theme);
    }
  }

  function applyTheme(theme) {
    setSelected(theme);
    localStorage.setItem("theme", theme);
    updateTheme(theme);
  }

  return (
    <div className="bg-white dark:bg-gray-900 h-screen w-[250px] border-r border-blue-400 text-black dark:text-white p-10 flex flex-col justify-between items-center gap-10">
      <div className="w-full">
        <div className="flex items-center mb-10">
          <div className="flex items-center gap-3">
            <img src="/athonfav.png" className="w-8" alt="Icon Athon Telecom" />
            <p className="font-medium">Athon Telecom</p>
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
                  <span className="font-medium">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center flex-col">
        <div className="relative flex flex-col items-start gap-5">
          {dropdownActive && (
            <div className="flex flex-col items-start gap-3 cursor-pointer">
              <Logout />
              <Link href={"/home/settings"} className="flex items-start gap-3 hover:text-blue-300 cursor-pointer">
                <UserCog className="text-blue-300" />
                <p>Editar Perfil</p>
              </Link>
            </div>
          )}
          <button
            onClick={() => setDropdownActive(prev => !prev)}
            className="cursor-pointer flex items-center gap-3 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl p-2 hover:text-red-300"
          >
            <User />
            <p>{user ? user : "Carregando..."}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
