'use client'

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/dataSite";
import { User, UserCog } from "lucide-react";
import Logout from "./Logout";
import { cn } from "@/lib/utils";

export default function Sidenav() {
  const pathname = usePathname();
  const [user, setUser] = useState("");
  const [dropdownActive, setDropdownActive] = useState(false);

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

  return (
    <aside
      className={cn(
        "w-64 bg-background-elevated border-r border-card-border flex flex-col h-screen justify-between"
      )}
    >
      {/* Logo estilo lovable zone */}
      <div className="p-6 border-b border-card-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <img src="/athonfav.png" alt="" />
          </div>
          <span className="font-semibold text-foreground text-lg">
            Smarstock
          </span>
        </div>
      </div>

      {/* Navigation com estilo lovable zone */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={link.title}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                    "hover:bg-secondary/50 hover:text-foreground",
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20 shadow-glow"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile estilo lovable zone */}
      <div className="p-4 border-t border-card-border">
        <div className="flex flex-col gap-4">
          {dropdownActive && (
            <div className="flex flex-col items-start gap-3 cursor-pointer">
              <Logout />
              <Link
                href={"/home/settings"}
                className="flex items-start gap-3 hover:text-blue-300 cursor-pointer"
              >
                <UserCog className="text-blue-300" />
                <p>Editar Perfil</p>
              </Link>
            </div>
          )}
          <button
            onClick={() => setDropdownActive((prev) => !prev)}
            className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 transition duration-300 hover:scale-105 cursor-pointer w-full"
          >
            <User />
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-semibold text-primary-foreground">
              {user?.[0]?.toUpperCase() || "U"}
            </div>
            <span className="text-sm font-medium text-foreground">
              {user ? user : "Carregando..."}
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
