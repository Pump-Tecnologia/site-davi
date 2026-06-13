import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, isValidSessionToken } from "@/lib/session";

const LOGIN_PATH = "/painel/login";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // A própria tela de login precisa ficar acessível sem sessão.
  if (pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  const authSecret = process.env.AUTH_SECRET;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = Boolean(authSecret) && (await isValidSessionToken(token, authSecret as string));

  if (isAuthenticated) {
    return NextResponse.next();
  }

  // API protegida: responde 401 em vez de redirecionar (não é navegação).
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  // Páginas do painel: manda para o login.
  const loginUrl = new URL(LOGIN_PATH, request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/painel", "/painel/:path*", "/api/prompts/:path*"]
};
