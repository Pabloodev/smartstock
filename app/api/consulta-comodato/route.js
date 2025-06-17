export async function POST(req) {
  try {
    const body = await req.json();
    const { mac } = body;

    if (!mac) {
      return new Response(JSON.stringify({ erro: "MAC não fornecido." }), { status: 400 });
    }

    const response = await fetch(`http://10.28.18.58:9000/consulta-comodato?mac=${encodeURIComponent(mac)}`);
    const data = await response.json();

    if (!Array.isArray(data)) {
      return new Response(JSON.stringify({ erro: "Aparelho já registrado em estoque." }), {
        status: 404,
      });
    }

    return Response.json(data);

  } catch (error) {
    return new Response(JSON.stringify({ erro: "Esse MAC já tem baixa no estoque." }), {
      status: 400,
    });
  }
}
