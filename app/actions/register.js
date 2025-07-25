"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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

  const { token } = await res.json();

  const cookieStore = cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  if (user) {
    cookieStore.set("user", user, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });
  }

  if (email) {
    cookieStore.set("email", email, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });
  }

  redirect("/login");
}
