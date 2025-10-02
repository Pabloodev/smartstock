"use server";

export async function register(formData) {
  const user = formData.get("user")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { error: true, message: "Email e senha são obrigatórios." };
  }

  const res = await fetch("http://10.28.18.58:9000/registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, email, password }),
  });

  if (!res.ok) {
    return { error: true, message: "Erro ao registrar usuário." };
  }

  return { success: true };
}
