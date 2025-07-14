"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveLeft } from 'lucide-react';

export default function RequestReset() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://10.28.18.58:9000/solicitar-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMensagem(data.mensagem);
    } catch (error) {
      setMensagem("Erro ao enviar solicitação.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center px-4">


      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <Link className="text-sm flex items-center gap-2 transition duration-300 hover:scale-115" href={"/login"}>
          <MoveLeft />
          <span>Voltar ao login</span>
        </Link>

        <div>
          <h1 className="text-3xl font-bold text-white">Resete sua senha</h1>
          <p className="text-sm text-gray-300">Digite seu email para receber o link de reset</p>
        </div>


        <label className="block text-sm">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" border-1 rounded-sm p-2"
          required
        />



        <button type="submit" className="cursor-pointer flex items-center gap-3 justify-center border-1 border-white px-6 py-2 rounded hover:bg-zinc-700 transition duration-700">
          Enviar
        </button>


        {mensagem && (
          <p className="mt-4 text-sm text-center text-green-400">{mensagem}</p>
        )}
      </form>
    </div>
  );
}
