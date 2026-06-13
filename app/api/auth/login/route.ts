import { NextResponse } from "next/server";
import {
  SESSION_COOKIE_NAME,
  SESSION_TTL_SECONDS,
  createSessionToken
} from "@/lib/session";

type LoginPayload = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginPayload;

  const validEmail = process.env.PANEL_AUTH_EMAIL;
  const validPassword = process.env.PANEL_AUTH_PASSWORD;
  const authSecret = process.env.AUTH_SECRET;

  if (!validEmail || !validPassword || !authSecret) {
    return NextResponse.json(
      { error: "Autenticação não configurada no servidor." },
      { status: 500 }
    );
  }

  const isValid = body.email === validEmail && body.password === validPassword;

  if (!isValid) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }

  const token = await createSessionToken(validEmail, authSecret);

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS
  });

  return response;
}
