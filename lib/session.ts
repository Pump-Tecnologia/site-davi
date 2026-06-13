// Sessão assinada do painel Studio Elite.
// Token = base64url(payload).base64url(HMAC-SHA256(payload, AUTH_SECRET)).
// Usa Web Crypto (crypto.subtle), disponível tanto no runtime Node quanto no Edge,
// então o mesmo código funciona na rota de login e no proxy.

export const SESSION_COOKIE_NAME = "studio-elite-auth";
export const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 horas

const encoder = new TextEncoder();
const decoder = new TextDecoder();

type SessionPayload = {
  sub: string;
  exp: number;
};

function toBase64url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64url(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function sign(data: string, secret: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return new Uint8Array(signature);
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a[i] ^ b[i];
  }
  return mismatch === 0;
}

function nowInSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

export async function createSessionToken(subject: string, secret: string): Promise<string> {
  const payload: SessionPayload = {
    sub: subject,
    exp: nowInSeconds() + SESSION_TTL_SECONDS
  };
  const payloadPart = toBase64url(encoder.encode(JSON.stringify(payload)));
  const signaturePart = toBase64url(await sign(payloadPart, secret));
  return `${payloadPart}.${signaturePart}`;
}

export async function isValidSessionToken(
  token: string | undefined,
  secret: string
): Promise<boolean> {
  if (!token) {
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 2) {
    return false;
  }

  const [payloadPart, signaturePart] = parts;

  const expectedSignature = await sign(payloadPart, secret);
  const providedSignature = fromBase64url(signaturePart);
  if (!timingSafeEqual(expectedSignature, providedSignature)) {
    return false;
  }

  try {
    const payload = JSON.parse(decoder.decode(fromBase64url(payloadPart))) as SessionPayload;
    return typeof payload.exp === "number" && payload.exp > nowInSeconds();
  } catch {
    return false;
  }
}
