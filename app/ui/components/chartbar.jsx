"use client";

import { useMemo, useState, useEffect } from "react";

export default function Chartbar() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch("http://10.28.18.58:9000/estatisticas", { cache: "no-store" });
        const response = await res.json();

        console.log(response);
        setData(response);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fecthData();
  }, []);

  // Encontra o valor máximo para calcular a proporção das barras
  const maxValue = useMemo(() => {
    const values = Object.values(data);
    if (values.length === 0) return 0;
    return Math.max(...values);
  }, [data]);

  // Função para formatar os nomes longos das OS
  const formatLabel = (label) => {
    return label
      .replace(/_TROCA_DO_EQUIPAMENTO/g, "") // Remove a parte repetitiva
      .replace(/_/g, " ") // Troca underscores por espaços
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-slate-800 text-white p-6 rounded-xl w-[500px] h-[700px] flex flex-col gap-6 border-2 border-blue-500">
      <div>
        <h1 className="text-lg font-medium">Total de equipamentos retirados por OS</h1>
        <p className="text-gray-500 text-sm">Contagem total a partir de junho de 2025.</p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {/* Itera sobre o objeto de dados para criar cada linha do gráfico */}
        {Object.entries(data).map(([key, value]) => {
          // Calcula a largura da barra em porcentagem. Evita divisão por zero.
          const barWidth = maxValue > 0 ? (value / maxValue) * 100 : 0;
          
          return (
            <div key={key} className="flex items-center gap-4 text-sm">
              {/* Nome da OS */}
              <span className="w-1/3 truncate" title={formatLabel(key)}>
                {formatLabel(key)}
              </span>
              
              {/* Container da Barra + Valor */}
              <div className="flex-1 flex items-center gap-2">
                <div className="w-full bg-gray-900 rounded-full h-5">
                  <div
                    className="bg-blue-500 h-5 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${barWidth}%` }}
                  >
                  </div>
                </div>
                 {/* Valor */}
                <span className="font-semibold w-8 text-right">{value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}