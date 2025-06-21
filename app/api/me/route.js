"use server"

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user")?.value;
  return NextResponse.json({ user });
}