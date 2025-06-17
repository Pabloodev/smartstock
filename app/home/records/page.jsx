// app/registros/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tipoSelecionado, setTipoSelecionado] = useState("EQUIPAMENTO_DEVOLVIDO");

  const diagnosticos = [
    "EQUIPAMENTO_DEVOLVIDO",
    "TROCA_DO_EQUIPAMENTO",
    "TROCA_REFEITO_CONECTOR_TROCA_DE_EQUIPAMENTO",
    "REDE_MESH_TROCA_DE_EQUIPAMENTO",
    "MUDANCA_DE_LOCAL_DO_EQUIPAMENTO_TROCA_DE_EQUIPAMENTO",
    "MUDANCA_DE_ENDERECO_TROCA_DO_EQUIPAMENTO",
    "DESCONECTADO_DA_CAIXA_TROCA_DO_EQUIPAMENTO",
    "TROCA_DO_CABEAMENTO_TROCA_DO_EQUIPAMENTO",
    "REATIVACAO_TROCA_DO_EQUIPAMENTO",
    "MUDANCA_DE_ENDERECO_CABEAMENTO_EXISTENTE_TROCA_DO_EQUIPAMENTO",
    "REMANEJAMENTO_COM_SOBRA_TECNICA_TROCA_DO_EQUIPAMENTO",
    "FIBRA_ATENUADA_TROCA_DO_EQUIPAMENTO"
  ];

  function formatarData(dataString) {
    const data = new Date(dataString);
    return new Intl.DateTimeFormat("pt-BR").format(data);
  }


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`/api/records?assunto=${tipoSelecionado}`);
        const data = await res.json();

        if (!data || !Array.isArray(data[tipoSelecionado])) {
          console.error("Formato inesperado:", data);
          setRegistros([]);
          return;
        }

        setRegistros(data[tipoSelecionado]);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setRegistros([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [tipoSelecionado]); // <== importante


  return (
    <div className="bg-[#0f172a] text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Registros de Equipamentos Devolvidos</h1>

      <div className="mb-6">
        <label className="text-sm mr-2">Tipo de Diagnóstico:</label>
        <select
          value={tipoSelecionado}
          onChange={(e) => setTipoSelecionado(e.target.value)}
          className="bg-slate-800 text-white border border-slate-700 px-4 py-2 rounded"
        >
          {diagnosticos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-gray-400">Carregando registros...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Data Abertura</th>
                <th className="px-4 py-2 text-left">Data Fechamento</th>
                <th className="px-4 py-2 text-left">ID Cliente</th>
                <th className="px-4 py-2 text-left">ID Contrato</th>
                <th className="px-4 py-2 text-left">Cliente</th>
                <th className="px-4 py-2 text-left">ID MAC</th>
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
                  <td className="px-4 py-2">{formatarData(registro.data_abertura)}</td>
                  <td className="px-4 py-2">{formatarData(registro.data_fechamento)}</td>
                  <td className="px-4 py-2">{registro.id_cliente}</td>
                  <td className="px-4 py-2">{registro.id_contrato}</td>
                  <td className="px-4 py-2">{registro.nome_cliente ?? "—"}</td>
                  <td className="px-4 py-2">{registro.id_mac ?? "—"}</td>
                  <td className="px-4 py-2 text-green-200">{registro.status_comodato ?? "—"}</td>
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
