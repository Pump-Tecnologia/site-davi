"use client";

import { useState } from "react";

type PromptCardProps = {
  id: string;
  categoria: string;
  titulo: string;
  imageUrl: string;
};

export function PromptCard({ id, categoria, titulo, imageUrl }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleCopy() {
    try {
      setLoading(true);
      const response = await fetch(`/api/prompts/${id}`, {
        method: "GET",
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error("Falha ao buscar prompt");
      }

      const data = (await response.json()) as { promptContent: string };
      await navigator.clipboard.writeText(data.promptContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Erro ao copiar o prompt. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <article
      className={`group relative flex h-[450px] flex-col overflow-hidden rounded-xl border border-gray-800 bg-brand-card transition-all duration-300 ${
        copied ? "shadow-[0_0_20px_rgba(212,175,55,0.3)] border-brand-gold" : ""
      }`}
    >
      <div className="relative h-[70%] w-full overflow-hidden bg-black">
        <img
          src={imageUrl}
          alt={titulo}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/60 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleCopy}
            disabled={loading}
            className={`flex w-full max-w-[220px] items-center justify-center gap-2 rounded-md px-6 py-3 font-bold shadow-lg transition-all duration-300 ${
              copied
                ? "bg-green-500 text-white"
                : "bg-brand-gold text-brand-bg hover:bg-brand-goldHover"
            } ${loading ? "cursor-not-allowed opacity-75" : ""}`}
          >
            {copied ? "Copiado!" : loading ? "Copiando..." : "Copiar Prompt"}
          </button>
        </div>
      </div>
      <div className="flex h-[30%] flex-col justify-center border-t border-gray-800/50 p-5">
        <span className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-gold">{categoria}</span>
        <h3 className="text-lg font-semibold leading-tight text-brand-text">{titulo}</h3>
      </div>
    </article>
  );
}
