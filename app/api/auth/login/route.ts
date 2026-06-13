import { NextResponse } from "next/server";

type LoginPayload = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginPayload;

  const validEmail = process.env.PANEL_AUTH_EMAIL;
  const validPassword = process.env.PANEL_AUTH_PASSWORD;

  if (!validEmail || !validPassword) {
    return NextResponse.json(
      { error: "Autenticação não configurada no servidor." },
      { status: 500 }
    );
  }

  const isValid = body.email === validEmail && body.password === validPassword;

  if (!isValid) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: "studio-elite-auth",
    value: "authenticated",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return response;
}
