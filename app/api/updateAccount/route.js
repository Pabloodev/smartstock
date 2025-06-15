// app/api/atualizar-usuario/route.js
import { NextResponse } from 'next/server';

export async function PUT(request) {
  try {
    const body = await request.json();
    const { email, nome, senha } = body;

    if (!email) {
      return NextResponse.json({ erro: 'E-mail é obrigatório' }, { status: 400 });
    }

    if (!nome && !senha) {
      return NextResponse.json({ erro: 'Informe ao menos um campo para atualizar (nome ou senha)' }, { status: 400 });
    }

    // Aqui você faria a chamada para o backend Python, por exemplo:
    const res = await fetch('http://10.28.18.58:9000/atualizar-usuario', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, nome, senha }),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ erro: 'Erro interno', detalhes: error.message }, { status: 500 });
  }
}
