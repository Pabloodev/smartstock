"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function sign(formData) {
  const email = formData.get("email");
  const senha = formData.get("senha");

  if (!email || !senha) {
    return { error: true, message: "Usuário e senha são obrigatórios." };
  }

  const res = await fetch("http://10.28.18.58:9000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
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

  redirect("/home");
}
