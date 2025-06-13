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
      .then(res => res.json())
      .then(data => {
        console.log("Resultado:", data[0]);
        setResultado(data[0]);
      })
      .catch(err => {
        console.error("Erro na consulta:", err);
        setResultado({ erro: "Erro ao consultar MAC" });
      });
  }

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Escaneie o QR Code do MAC:</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Escaneie com o maquina ou digite o mac manualmente..."
        className="border border-blue-500 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-md rounded-sm"
      />
      <div>
        {resultado ? (
          resultado.erro ? (
            <div className="mt-4 text-red-500 font-semibold">
              {resultado.erro}
            </div>
          ) : (
            <div className="flex flex-col gap-5 border-1 border-white rounded-lg text-white w-[800px] p-4 mt-4 rounded-lg">
              <div>
                <p className="text-green-500 text-center">Aparelho baixado com sucesso!</p>
              </div>

              <p><span className="text-gray-300">ID Contrato:</span> {resultado.id_contrato}</p>
              <p><span className="text-gray-300">ID OS:</span> {resultado.id_os}</p>
              <p><span className="text-gray-300">ID Patrimonio:</span> {resultado.id_patrimonio}</p>
              <p><span className="text-gray-300">ID Diagnósitico:</span> {resultado.id_su_diagnostico}</p>

              <p><span className="text-gray-300">Data de abertura:</span> {formatarData(resultado.data_abertura)}</p>
              <p><span className="text-gray-300">Data de agendamento:</span> {formatarData(resultado.data_agenda)}</p>
              <p><span className="text-gray-300">Data de fechamento:</span> {formatarData(resultado.data_fechamento)}</p>

              <p><span className="text-gray-300">Aparelho:</span> {resultado.descricao}</p>
              <p><span className="text-gray-300">Número patrimonio:</span> {resultado.numero_patrimonial}</p>
              <p><span className="text-gray-300">Serial:</span> {resultado.serial}</p>
              <p><span className="text-gray-300">Protocolo:</span> {resultado.protocolo}</p>
              <p><span className="text-gray-300">Valor do aparelho:</span> {resultado.valor_unitario}</p>


              <p><span className="text-gray-300">Técnico que retirou:</span> {resultado.nome_tecnico}</p>
              <p><span className="text-gray-300">Status comodato:</span> {resultado.status_comodato}</p>
            </div>
          )
        ) : (
          <div className="pt-10">
            <span>Passe o leitor bip no código de barras do MAC do aparelho</span>
          </div>
        )}
      </div>
    </div>
  );
}

