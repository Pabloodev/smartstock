"use client";

import { TrendingUp } from 'lucide-react';
import { useState, useEffect } from "react";

export default function Chart() {

  const [data, setData] = useState({});
  const [total, setTotal] = useState(0); // State to hold the sum

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch("http://10.28.18.58:9000/estatisticas", { cache: "no-store" });
        const response = await res.json();
        console.log(response);

        // Calculate the sum of all values in the response object
        const calculatedTotal = Object.values(response).reduce((acc, value) => acc + Number(value), 0);

        setData(response);
        setTotal(calculatedTotal); // Update the total state
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fecthData();
  }, []);

  return (
    <div className="bg-zinc-800 text-white p-5 rounded-xl w-[400px] flex flex-col gap-10 items-center">
      <div>
        <h1 className="text-lg font-medium">Total de equipamentos retirados</h1>
        <p className="text-gray-300">Contagem total a partir de junho de 2025.</p>
      </div>

      <div className="text-center bg-zinc-900 w-40 h-40 p-10 rounded-full border-5 border-blue-500 flex flex-col justify-center items-center">
        {/* Display the total from the state */}
        <span className="text-5xl font-bold">{total}</span>
        <p className="text-sm text-gray-300">Equipamentos</p>
      </div>

      <div className='flex items-center gap-3'>
        <p className='text-sm'>Contagem aproximada</p>
        <TrendingUp className='text-blue-500'/>
      </div>
    </div>
  );
}