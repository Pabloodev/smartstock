// app/api/reset-senha/route.js
import axios from "axios";

export async function PUT(request) {
  try {
    const data = await request.json();

    const response = await axios.put(
      "http://10.28.18.58:9000/atualizar-usuario",
      data
    );

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        erro: "Erro ao resetar senha.",
        detalhes: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
