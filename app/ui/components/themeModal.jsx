"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ThemeModal({ onClose }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setSelected(saved);
  }, []);

  function applyTheme(theme) {
    setSelected(theme);
    localStorage.setItem("theme", theme);

    const root = document.documentElement;
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      root.classList.toggle("dark", theme === "dark");
    }
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[600px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Alterar tema</h2>
          <button onClick={onClose} className="text-red-500 cursor-pointer hover:text-gray-400">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { id: "dark", label: "Modo escuro", img: "/dark.png" },
            { id: "system", label: "Automático", img: "/dark.png" },
            { id: "light", label: "Modo claro", img: "/light.png" },
          ].map(({ id, label, img }) => (
            <button
              key={id}
              onClick={() => applyTheme(id)}
              className={`cursor-pointer border-gray-900 hover:border-blue-300 rounded-xl overflow-hidden border transition-all duration-200 ${
                selected === id ? "border-blue-500 ring-2 ring-blue-500" : "border-transparent"
              }`}
            >
              <img src={img} alt={label} className="w-full h-[80px] object-cover" />
              <div className="text-center py-2 text-sm font-medium bg-white dark:bg-gray-900 text-black dark:text-white">
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
