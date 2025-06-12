"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function register(formData) {
  const nome = formData.get("nome");
  const email = formData.get("email");
  const senha = formData.get("senha");

  if (!email || !senha) {
    return { error: true, message: "Usuário e senha são obrigatórios." };
  }

  const res = await fetch("http://10.28.18.58:9000/registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, email, senha }),
  });

  if (!res.ok) {
    return { error: true, message: "Login ou senha incorretos." };
  }


  const { token } = await res.json();

  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("nome", nome, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("email", email, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("senha", senha, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  redirect("/");
}
