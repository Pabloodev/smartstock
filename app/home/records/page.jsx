// app/registros/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/records");
        const data = await res.json();

        if (!data || !Array.isArray(data["EQUIPAMENTO_DEVOLVIDO"])) {
          console.error("Formato inesperado:", data);
          setRegistros([]);
          return;
        }

        setRegistros(data["EQUIPAMENTO_DEVOLVIDO"]);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-[#0f172a] text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Registros de Equipamentos Devolvidos</h1>

      {loading ? (
        <p className="text-gray-400">Carregando registros...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Data Abertura</th>
                <th className="px-4 py-2 text-left">Cliente</th>
                <th className="px-4 py-2 text-left">Descrição</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">OS</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}
                >
                  <td className="px-4 py-2">{registro.id ?? "—"}</td>
                  <td className="px-4 py-2">{registro.data_abertura?.slice(0, 10) ?? "—"}</td>
                  <td className="px-4 py-2">{registro.nome_cliente ?? "—"}</td>
                  <td className="px-4 py-2">{registro.descricao ?? "—"}</td>
                  <td className="px-4 py-2">{registro.status_comodato ?? "—"}</td>
                  <td className="px-4 py-2">{registro.id_os ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && (
        <p className="mt-4 text-sm text-slate-400">
          Total de registros: {registros.length}
        </p>
      )}
    </div>
  );
}
