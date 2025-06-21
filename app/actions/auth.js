"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function sign(formData) {
  const email = formData.get("email")?.toString();
  const senha = formData.get("senha")?.toString();
  const user = formData.get("user")?.toString();

  if (!email || !senha) {
    return { error: true, message: "Email e senha são obrigatórios." };
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

  const cookieStore = cookies();

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

  cookieStore.set("user", user, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  redirect("/home");
}
