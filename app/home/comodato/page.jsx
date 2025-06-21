"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const inputRef = useRef(null);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        const mac = inputRef.current?.value.trim();
        if (mac) {
          enviarConsulta(mac);
          if (inputRef.current) inputRef.current.value = "";
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  function formatarData(dataString) {
    const data = new Date(dataString);
    return new Intl.DateTimeFormat("pt-BR").format(data);
  }

  function enviarConsulta(mac) {
    fetch("/api/consulta-comodato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mac }),
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          setResultado({ erro: data.erro || "Erro desconhecido." });
          return;
        }

        if (Array.isArray(data)) {
          setResultado(data[0]);
        } else {
          setResultado({ erro: "Formato inesperado de resposta da API." });
        }
      })
      .catch((err) => {
        console.error("Erro na consulta:", err);
        setResultado({ erro: "Erro ao consultar MAC" });
      });
  }

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Escaneie o QR Code do MAC:</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Escaneie com o maquina ou digite o mac manualmente..."
        className="border border-blue-500 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-md rounded-sm text-gray-900 dark:text-white"
      />
      <div>
        {resultado ? (
          resultado.erro ? (
            <div className="p-10">
              <h3 className="text-xl text-red-200 font-bold mb-4">{resultado.erro}</h3>
              <table className="min-w-[1200px] text-sm text-left border-collapse rounded-sm">
                <thead className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-400 uppercase text-xs rounded-lg">
                  <tr>
                    <th className="px-4 py-2">ID Contrato</th>
                    <th className="px-4 py-2">ID OS</th>
                    <th className="px-4 py-2">ID Patrimônio</th>
                    <th className="px-4 py-2">ID Diagnóstico</th>
                    <th className="px-4 py-2">Data Abertura</th>
                    <th className="px-4 py-2">Data Agendamento</th>
                    <th className="px-4 py-2">Data Fechamento</th>
                    <th className="px-4 py-2">Aparelho</th>
                    <th className="px-4 py-2">Nº Patrimonial</th>
                    <th className="px-4 py-2">Serial</th>
                    <th className="px-4 py-2">Protocolo</th>
                    <th className="px-4 py-2" >Valor do Aparelho</th>
                    <th className="px-4 py-2">Técnico</th>
                    <th className="px-4 py-2">Status Comodato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                    <td className="px-4 py-4">--</td>
                  </tr>
                </tbody>
              </table>
            </div>

          ) : (
            <div className="mt-8 overflow-x-auto text-white">
              <h3 className="text-xl text-green-200 font-bold mb-4">Aparelho baixado com sucesso!</h3>
              <table className="min-w-[1200px] text-sm text-left border-collapse rounded-lg">
                <thead className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-400 uppercase text-xs rounded-lg">
                  <tr>
                    <th className="px-4 py-2">ID Contrato</th>
                    <th className="px-4 py-2">ID OS</th>
                    <th className="px-4 py-2">ID Patrimônio</th>
                    <th className="px-4 py-2">ID Diagnóstico</th>
                    <th className="px-4 py-2">Data Abertura</th>
                    <th className="px-4 py-2">Data Agendamento</th>
                    <th className="px-4 py-2">Data Fechamento</th>
                    <th className="px-4 py-2">Aparelho</th>
                    <th className="px-4 py-2">Nº Patrimonial</th>
                    <th className="px-4 py-2">Serial</th>
                    <th className="px-4 py-2">Protocolo</th>
                    <th className="px-4 py-2" >Valor do Aparelho</th>
                    <th className="px-4 py-2">Técnico</th>
                    <th className="px-4 py-2">Status Comodato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900 border-b border-gray-70">
                    <td className="px-4 py-2">{resultado.id_contrato}</td>
                    <td className="px-4 py-2">{resultado.id_os}</td>
                    <td className="px-4 py-2">{resultado.id_patrimonio}</td>
                    <td className="px-4 py-2">{resultado.id_su_diagnostico}</td>
                    <td className="px-4 py-2">{formatarData(resultado.data_abertura)}</td>
                    <td className="px-4 py-2">{formatarData(resultado.data_agenda)}</td>
                    <td className="px-4 py-2">{formatarData(resultado.data_fechamento)}</td>
                    <td className="px-4 py-2">{resultado.descricao}</td>
                    <td className="px-4 py-2">{resultado.numero_patrimonial}</td>
                    <td className="px-4 py-2">{resultado.serial}</td>
                    <td className="px-4 py-2">{resultado.protocolo}</td>
                    <td className="px-4 py-2">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(resultado.valor_unitario)}
                    </td>
                    <td className="px-4 py-2">{resultado.nome_tecnico}</td>
                    <td className="px-4 py-2">{resultado.status_comodato}</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-400 mt-2">Total de registros: 1</p>
            </div>
          )
        ) : (
          <div className="p-10 rounded-lg">
            <table className="min-w-[1200px] text-sm text-left border-collapse rounded-lg">
              <thead className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-400 uppercase text-xs">
                <tr>
                  <th className="px-4 py-2">ID Contrato</th>
                  <th className="px-4 py-2">ID OS</th>
                  <th className="px-4 py-2">ID Patrimônio</th>
                  <th className="px-4 py-2">ID Diagnóstico</th>
                  <th className="px-4 py-2">Data Abertura</th>
                  <th className="px-4 py-2">Data Agendamento</th>
                  <th className="px-4 py-2">Data Fechamento</th>
                  <th className="px-4 py-2">Aparelho</th>
                  <th className="px-4 py-2">Nº Patrimonial</th>
                  <th className="px-4 py-2">Serial</th>
                  <th className="px-4 py-2">Protocolo</th>
                  <th className="px-4 py-2" >Valor do Aparelho</th>
                  <th className="px-4 py-2">Técnico</th>
                  <th className="px-4 py-2">Status Comodato</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-900 text-gray-900 border-b border-gray-700">
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                  <td className="px-4 py-4">--</td>
                </tr>
              </tbody>
            </table>
            <div className="pt-10 text-gray-900 dark:text-white">
              <span>Passe o leitor bip no código de barras do MAC do aparelho</span>
            </div>
          </div>

        )}
      </div>
    </div>
  );
}

