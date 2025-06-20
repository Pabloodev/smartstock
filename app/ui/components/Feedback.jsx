"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [comentario, setComentario] = useState("");
  const [nota, setNota] = useState(0);
  const [enviado, setEnviado] = useState(false);

  const enviarFeedback = async () => {
    if (!comentario.trim() || nota === 0) return;

    // Simulação de envio (você pode adaptar para Firebase ou API interna)
    console.log("Enviando feedback:", { comentario, nota });
    setEnviado(true);
    setComentario("");
    setNota(0);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white">Enviar Feedback</h2>

      <label className="text-sm text-slate-300">Comentário:</label>
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        rows={4}
        className="w-full mt-1 p-2 bg-slate-800 text-white rounded border border-slate-600"
        placeholder="Digite sua sugestão, elogio ou crítica..."
      />

      <button
        onClick={enviarFeedback}
        className="mt-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        disabled={!comentario.trim() || nota === 0}
      >
        Enviar
      </button>

      {enviado && (
        <p className="text-green-400 text-sm mt-3">Obrigado pelo seu feedback!</p>
      )}
    </div>
  );
}