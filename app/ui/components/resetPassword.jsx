"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MoveLeft } from 'lucide-react';

export default function ResetPassword() {
  const [novaSenha, setNovaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMensagem("Token não encontrado na URL.");
      return;
    }

    try {
      const res = await fetch("http://10.28.18.58:9000/resetar-senha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, novaSenha }),
      });

      const data = await res.json();

      setMensagem(data.mensagem || data.erro);
    } catch (error) {
      setMensagem("Erro ao conectar ao servidor.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >

        <Link className="text-sm flex items-center gap-2 transition duration-300 hover:scale-115" href={"/login"}>
          <MoveLeft />
          <span>Voltar ao login</span>
        </Link>

        <h1 className="text-2xl font-bold text-white">Redefinir Senha</h1>

        <label className="block mb-2 text-sm">Nova senha:</label>
        <input
          type="password"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer transitions duration-300"
        >
          Redefinir
        </button>

        {mensagem && (
          <p className="mt-4 text-sm text-center text-red-600">{mensagem}</p>
        )}
      </form>
    </div>
  );
}
