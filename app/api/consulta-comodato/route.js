export async function POST(req) {
  const body = await req.json(); // lê o corpo da requisição
  const { mac } = body;

  const response = await fetch(`http://10.28.18.58:9000/consulta-comodato?mac=${encodeURIComponent(mac)}`, {
    method: "GET",
  });

  const data = await response.json();
  return Response.json(data);
}
