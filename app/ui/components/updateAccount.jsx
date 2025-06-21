'use client'

import { useState } from 'react'

export default function UpdateAccount() {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensagem('')
    setErro('')

    try {
      const response = await fetch('/api/updateAccount', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nome, senha }),
      })

      const data = await response.json()
      if (!response.ok) {
        setErro(data.erro || 'Erro ao atualizar usuário')
      } else {
        setMensagem(data.mensagem)
        setEmail('')
        setNome('')
        setSenha('')
      }
    } catch (err) {
      setErro('Erro ao conectar com o servidor')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 shadow text-gray-900 dark:text-white p-5">
      <h2 className="text-lg font-bold">Atualizar Usuário</h2>

      <input
        type="email"
        placeholder="E-mail (Obrigatório)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border-b rounded"
      />

      <input
        type="text"
        placeholder="Novo Nome (opcional)"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full p-2 border-b rounded"
      />

      <input
        type="password"
        placeholder="Nova Senha (opcional)"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full p-2 border-b rounded"
      />

      <button type="submit" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Atualizar
      </button>

      {mensagem && <p className="text-green-600">{mensagem}</p>}
      {erro && <p className="text-red-600">{erro}</p>}
    </form>
  )
}
