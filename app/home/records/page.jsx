// app/registros/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Download, FileText, Sheet } from 'lucide-react';

export default function Page() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tipoSelecionado, setTipoSelecionado] = useState("EQUIPAMENTO_DEVOLVIDO");
  const [dropDownActive, setDropDownActive] = useState(false)

  const diagnosticos = [
    { label: "Equipamento Devolvido", value: "EQUIPAMENTO_DEVOLVIDO" },
    { label: "Troca do Equipamento", value: "TROCA_DO_EQUIPAMENTO" },
    { label: "Troca/Refeito Conector", value: "TROCA_REFEITO_CONECTOR_TROCA_DE_EQUIPAMENTO" },
    { label: "Rede Mesh", value: "REDE_MESH_TROCA_DE_EQUIPAMENTO" },
    { label: "Mudança Local Equipamento", value: "MUDANCA_DE_LOCAL_DO_EQUIPAMENTO_TROCA_DE_EQUIPAMENTO" },
    { label: "Mudança de Endereço", value: "MUDANCA_DE_ENDERECO_TROCA_DO_EQUIPAMENTO" },
    { label: "Desconectado da Caixa", value: "DESCONECTADO_DA_CAIXA_TROCA_DO_EQUIPAMENTO" },
    { label: "Troca do Cabeamento", value: "TROCA_DO_CABEAMENTO_TROCA_DO_EQUIPAMENTO" },
    { label: "Reativação", value: "REATIVACAO_TROCA_DO_EQUIPAMENTO" },
    { label: "Mudança + Cabeamento Existente", value: "MUDANCA_DE_ENDERECO_CABEAMENTO_EXISTENTE_TROCA_DO_EQUIPAMENTO" },
    { label: "Remanejamento c/ Sobra Técnica", value: "REMANEJAMENTO_COM_SOBRA_TECNICA_TROCA_DO_EQUIPAMENTO" },
    { label: "Fibra Atenuada", value: "FIBRA_ATENUADA_TROCA_DO_EQUIPAMENTO" },
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

        console.log("Dados recebidos:", data);
        setRegistros(data[tipoSelecionado] || []);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setRegistros([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [tipoSelecionado]);


  async function handleDownloadPDF() {
    const res = await fetch("/api/records?assunto=${tipoSelecionado}");
    const data = await res.json();
    exportPDF(data);
  }

  async function handleDownloadXLSX() {
    const res = await fetch("/api/records?assunto=${tipoSelecionado}");
    const data = await res.json();
    exportXLSX(data);
  }


  return (
    <div className="bg-white shadow dark:bg-gray-900 text-gray-900 dark:text-white p-8 rounded-lg">
      <h1 className="text-gray-900 dark:text-white text-2xl font-semibold mb-6">Registros de Equipamentos Devolvidos</h1>

      <div className="flex items-center gap-10 mb-10">
        <div>
          <label className="text-sm mr-2">Tipo de Diagnóstico:</label>
          <select
            value={tipoSelecionado}
            onChange={((e) => setTipoSelecionado(e.target.value))}
            className="dark:bg-slate-800 text-gray-900 dark:text-white cursor-pointer border border-slate-700 px-4 py-2 rounded hover:border-blue-500 transitions duration-300"
          >
            {diagnosticos.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <button onClick={() => setDropDownActive(!dropDownActive)} className="flex items-center border-1 border-slate-800 hover:border-blue-500 transitions duration-300 gap-3 dark:bg-slate-800 text-gray-900 dark:text-white cursor-pointer border border-slate-700 px-4 py-2 rounded-sm">
            <p>Baixar relatório</p>
            <Download />
          </button>

          {dropDownActive && (
            <div className="flex flex-col gap-2 text-start p-1 absolute bg-white dark:bg-slate-900 rounded-sm">
              <button onClick={handleDownloadPDF} className="px-2 py-3 flex items-center gap-2 cursor-pointer bg-white dark:bg-slate-800 border-1 border-gray-900 rounded-sm text-sm transition duration-300 hover:border-blue-500">
                <span>Baixar em PDF</span>
                <FileText />
              </button>
              <button onClick={handleDownloadXLSX} className="px-2 py-3 flex items-center gap-2 cursor-pointer bg-white dark:bg-slate-800 border-1 border-gray-900 rounded-sm text-sm transition duration-300 hover:border-blue-500">
                <span>Baixar em XLSX</span>
                <Sheet />
              </button>
            </div>
          )}
        </div>
      </div>


      {loading ? (
        <p className="text-gray-400">Carregando registros...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full table-auto text-sm">
            <thead className="dark:bg-slate-800 dark:text-gray-300 text-gray-900">
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
                  className={idx % 2 === 0 ? "bg-white border border-t-gray-300 dark:bg-slate-900" : "bg-slate-800"}
                >
                  <td className="px-4 py-2">{registro.id ?? "—"}</td>
                  <td className="px-4 py-2">{formatarData(registro.data_abertura)}</td>
                  <td className="px-4 py-2">{formatarData(registro.data_fechamento)}</td>
                  <td className="px-4 py-2">{registro.id_cliente}</td>
                  <td className="px-4 py-2">{registro.id_contrato}</td>
                  <td className="px-4 py-2">{registro.nome_cliente ?? "—"}</td>
                  <td className="px-4 py-2">{registro.id_mac ?? "—"}</td>
                  <td className="px-4 py-2 text-green-400">{registro.status_comodato ?? "—"}</td>
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
