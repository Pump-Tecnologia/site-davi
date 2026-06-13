"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        setError("Credenciais inválidas. Tente novamente.");
        return;
      }

      router.push("/painel");
      router.refresh();
    } catch {
      setError("Não foi possível autenticar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-300">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-md border border-gray-700 bg-brand-bg px-3 py-2 text-brand-text outline-none ring-brand-gold/50 transition focus:ring-2"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-semibold text-gray-300">
          Senha
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-md border border-gray-700 bg-brand-bg px-3 py-2 text-brand-text outline-none ring-brand-gold/50 transition focus:ring-2"
          required
        />
      </div>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-md px-4 py-2 text-sm font-bold transition ${
          loading
            ? "cursor-not-allowed bg-gray-700 text-gray-300"
            : "bg-brand-gold text-brand-bg hover:bg-brand-goldHover"
        }`}
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
