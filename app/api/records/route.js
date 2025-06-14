// app/api/registros/route.ts
export async function GET() {
  const url = "http://10.28.18.58:9000/dados-tabelas?nome_tabela=EQUIPAMENTO_DEVOLVIDO&data_coluna=data_abertura&ordem=data_abertura DESC&limite=10";

  try {
    const res = await fetch(url);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ erro: "Erro ao buscar dados da API externa" }),
      { status: 500 }
    );
  }
}
