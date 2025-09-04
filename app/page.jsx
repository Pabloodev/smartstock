"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const frases = [
    "Análise com IA!",
    "Gestão de estoque!",
    "Análise de dados!",
    "Fácil documentação!",
    "Exportação em PDF e Excel!",
    "Dashboard intuitiva!",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 5500); // muda a cada 2,5s
    return () => clearInterval(interval);
  }, [frases.length]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center justify-center gap-5">
          <img src="athonfav.png" alt="Icon Athon Telecom" className="w-10" />
          <h1 className="text-3xl font-medium">Smart Stock</h1>
          <span className="text-end text-cyan-200">por Athon Networks</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg flex flex-col gap-5 items-start">
            <h2 className="text-5xl font-medium">
              Nossa <span className="text-gradient">Gestão</span>, de um Jeito
              Muito Mais <span className="text-gradient">Fácil</span>.
            </h2>

            {/* Carrossel de frases */}
            <AnimatePresence mode="wait">
            <motion.div
              key={frases[index]}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full"
            >
              <p className="text-xl text-cyan-300">
                {frases[index]}
              </p>
            </motion.div>
          </AnimatePresence>

            <Link href="/home">
              <div className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-lg cursor-pointer p-0.5 shadow-lg shadow-blue-500/50 hover:from-purple-500 hover:to-sky-500 transition duration-300 w-fit">
                <button className="bg-black text-white px-4 py-2 rounded-lg duration-700 cursor-pointer">
                  Acesse o aplicativo
                </button>
              </div>
            </Link>

            <footer className="absolute bottom-4 left-4 text-xs text-white">
              © 2025 Athon Networks · Beta
            </footer>
          </div>
        </div>
      </div>

      {/* Imagem à direita com print + hero */}
      <div className="relative hidden lg:flex flex-col items-center justify-center">
        <div className="relative flex items-center gap-6">
          <div className="bg-gradient-to-t from-sky-500 to-indigo-500 rounded-xl cursor-pointer p-0.5 shadow-lg shadow-blue-500/50 hover:from-purple-500 hover:to-sky-500 transition duration-300 w-fit animate-bounce-slow border border-white/10 border-dashed rotate-2">
            <img
              src="/print.png"
              alt="Print do app"
              className="w-[700px] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
