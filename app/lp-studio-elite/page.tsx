"use client";

import { useEffect } from "react";
import { animate, stagger } from "motion";

function fallback(url: string) {
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.src !== url) {
      img.src = url;
    }
  };
}

export default function LpStudioElitePage() {
  useEffect(() => {
    animate(
      ".anim-item",
      { opacity: [0, 1], y: [25, 0] },
      { duration: 0.9, delay: stagger(0.15), ease: [0.16, 1, 0.3, 1] }
    );
  }, []);

  return (
    <div className="lp-root scroll-smooth antialiased pb-24 md:pb-0 selection:bg-green-500/30">
      {/* HERO SECTION */}
      <header className="relative pt-12 pb-16 md:pt-24 md:pb-28 px-6 max-w-5xl mx-auto text-center z-10">
        <div className="anim-item opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Acesso Imediato Liberado
        </div>

        <h1 className="anim-item opacity-0 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Transforme fotos comuns em retratos de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            R$ 5.000,00
          </span>{" "}
          com o Studio Elite
        </h1>

        <p className="anim-item opacity-0 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light mb-12 leading-relaxed">
          Tenha em mãos a maior biblioteca de prompts profissionais do mercado. Copie, cole e gere imagens com
          realismo de estúdio em segundos, usando IAs gratuitas.
        </p>

        <div className="anim-item opacity-0">
          <a
            href="https://pay.kiwify.com.br/C8x4hvg"
            className="btn-primary btn-pulse inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 rounded-xl text-lg md:text-xl font-bold uppercase tracking-wide"
          >
            QUERO ACESSO AO STUDIO ELITE
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </a>
          <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-1 uppercase tracking-widest font-semibold">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Pagamento Único e Seguro
          </p>
        </div>
      </header>

      <section>
        <div className="max-w-6xl mx-auto px-6 mt-8 md:mt-12 mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Item 1 */}
          <div className="anim-item vitrine-item opacity-0 p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex gap-1 h-60 sm:h-64 md:h-80 rounded-xl overflow-hidden bg-[#0a0a0a]">
              <div className="w-1/2 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lp-studio-elite/antes-1.jpg"
                  alt="Antes"
                  className="w-full h-full object-cover grayscale opacity-30 blur-[1px]"
                  onError={fallback("https://via.placeholder.com/300x400/111/333?text=Selfie")}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <span className="absolute top-3 left-3 text-[9px] bg-black/80 px-2 py-1 rounded text-gray-400 border border-white/10 uppercase tracking-widest font-semibold">
                  Foto Comum
                </span>
              </div>
              <div className="w-1/2 relative overflow-hidden border-l border-green-500/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lp-studio-elite/depois-1.jpg"
                  alt="Depois"
                  className="after-img w-full h-full object-cover"
                  onError={fallback("https://via.placeholder.com/300x400/052e16/22c55e?text=Studio+Elite")}
                />
                <span className="absolute bottom-3 right-3 text-[9px] bg-green-600/90 backdrop-blur-sm px-2 py-1 rounded text-white font-bold uppercase tracking-widest shadow-lg border border-green-400/50">
                  Studio Elite
                </span>
              </div>
            </div>
            <p className="text-sm text-center text-gray-400 font-medium mt-4 tracking-wide uppercase">
              Retrato Corporativo
            </p>
          </div>

          {/* Item 2 */}
          <div className="anim-item vitrine-item opacity-0 p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex gap-1 h-60 sm:h-64 md:h-80 rounded-xl overflow-hidden bg-[#0a0a0a]">
              <div className="w-1/2 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lp-studio-elite/antes-2.jpg"
                  alt="Antes"
                  className="w-full h-full object-cover grayscale opacity-30 blur-[1px]"
                  onError={fallback("https://via.placeholder.com/300x400/111/333?text=Selfie")}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <span className="absolute top-3 left-3 text-[9px] bg-black/80 px-2 py-1 rounded text-gray-400 border border-white/10 uppercase tracking-widest font-semibold">
                  Foto Comum
                </span>
              </div>
              <div className="w-1/2 relative overflow-hidden border-l border-green-500/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lp-studio-elite/depois-2.jpg"
                  alt="Depois"
                  className="after-img w-full h-full object-cover"
                  onError={fallback("https://via.placeholder.com/300x400/052e16/22c55e?text=Studio+Elite")}
                />
                <span className="absolute bottom-3 right-3 text-[9px] bg-green-600/90 backdrop-blur-sm px-2 py-1 rounded text-white font-bold uppercase tracking-widest shadow-lg border border-green-400/50">
                  Studio Elite
                </span>
              </div>
            </div>
            <p className="text-sm text-center text-gray-400 font-medium mt-4 tracking-wide uppercase">
              Estilo Lifestyle
            </p>
          </div>

          {/* Item 3 */}
          <div className="anim-item vitrine-item opacity-0 p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex gap-1 h-60 sm:h-64 md:h-80 rounded-xl overflow-hidden bg-[#0a0a0a]">
              <div className="w-1/2 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lp-studio-elite/antes-3.jpg"
                  alt="Antes"
                  className="w-full h-full object-cover grayscale opacity-30 blur-[1px]"
                  onError={fallback("https://via.placeholder.com/300x400/111/333?text=Selfie")}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <span className="absolute top-3 left-3 text-[9px] bg-black/80 px-2 py-1 rounded text-gray-400 border border-white/10 uppercase tracking-widest font-semibold">
                  Foto Comum
                </span>
              </div>
              <div className="w-1/2 relative overflow-hidden border-l border-green-500/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lp-studio-elite/depois-3.jpg"
                  alt="Depois"
                  className="after-img w-full h-full object-cover"
                  onError={fallback("https://via.placeholder.com/300x400/052e16/22c55e?text=Studio+Elite")}
                />
                <span className="absolute bottom-3 right-3 text-[9px] bg-green-600/90 backdrop-blur-sm px-2 py-1 rounded text-white font-bold uppercase tracking-widest shadow-lg border border-green-400/50">
                  Studio Elite
                </span>
              </div>
            </div>
            <p className="text-sm text-center text-gray-400 font-medium mt-4 tracking-wide uppercase">
              Autoridade Elite
            </p>
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO SECTION */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="anim-item opacity-0 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">O Fim das Sessões Caras</h2>
          <p className="text-gray-400 mt-3">
            Compare e entenda por que o Studio Elite é a escolha inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="anim-item opacity-0 glass-card p-8 rounded-2xl border-t-2 border-t-red-500/50 relative overflow-hidden">
            <h3 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Estúdio Tradicional
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span> R$ 1.500 a R$ 5.000 por sessão
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span> Semanas de espera para agendar e editar
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span> Custo extra com roupas, maquiagem e viagem
              </li>
            </ul>
          </div>

          <div className="anim-item opacity-0 glass-card p-8 rounded-2xl border-t-2 border-t-green-500 bg-green-900/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Studio Elite
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm md:text-base relative z-10">
              <li className="flex items-start gap-3 font-semibold text-white">
                <span className="text-green-400">✓</span> Apenas R$ 29,90 (Taxa única e vitalícia)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✓</span> Retratos com qualidade de revista em 2 minutos
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✓</span> Roupas, iluminação e cenários de luxo infinitos
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* RECURSOS (ÍCONES MINIMALISTAS) */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="anim-item opacity-0 flex flex-col items-center text-center p-6 glass-card rounded-2xl">
            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4 border border-green-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">200+ Prompts</h3>
            <p className="text-gray-400 text-sm">
              Biblioteca completa para estilos masculinos e femininos. Só copiar e colar.
            </p>
          </div>

          <div className="anim-item opacity-0 flex flex-col items-center text-center p-6 glass-card rounded-2xl">
            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4 border border-green-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Engenharia de Luz</h3>
            <p className="text-gray-400 text-sm">
              O segredo exato para a IA gerar textura de pele real e acabar com a &quot;cara de boneco&quot;.
            </p>
          </div>

          <div className="anim-item opacity-0 flex flex-col items-center text-center p-6 glass-card rounded-2xl">
            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4 border border-green-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">IAs Gratuitas</h3>
            <p className="text-gray-400 text-sm">
              Aprenda a rodar os códigos em ferramentas 100% gratuitas, sem mensalidades caras.
            </p>
          </div>

          <div className="anim-item opacity-0 flex flex-col items-center text-center p-6 glass-card rounded-2xl">
            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4 border border-green-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Acesso Vitalício</h3>
            <p className="text-gray-400 text-sm">
              Pague apenas uma vez. Receba todas as futuras atualizações de prompts de graça.
            </p>
          </div>
        </div>
      </section>

      {/* ANCORAGEM ANTES DA OFERTA (CARROSSÉIS INFINITOS) */}
      <section className="w-full mb-16 overflow-hidden py-4">
        <div className="anim-item opacity-0 text-center mb-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            O que você será capaz de criar:
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Imagens 100% geradas utilizando a nossa engenharia de prompts.
          </p>
        </div>

        <div className="mask-edges">
          {/* Carrossel 1: Masculino (Direita para Esquerda) */}
          <div className="group relative flex overflow-hidden w-full mb-4">
            <div className="flex gap-4 min-w-max animate-scroll-left group-hover:[animation-play-state:paused] pr-4">
              {[
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
              ]
                .concat([
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                ])
                .map((fb, i) => (
                  <div
                    key={`man-${i}`}
                    className="w-48 md:w-64 aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer shadow-lg border border-white/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/lp-studio-elite/man-${(i % 4) + 1}.jpg`}
                      alt="Exemplo Masculino"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      onError={fallback(fb)}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Carrossel 2: Feminino (Esquerda para Direita) */}
          <div className="group relative flex overflow-hidden w-full">
            <div className="flex gap-4 min-w-max animate-scroll-right group-hover:[animation-play-state:paused] pr-4">
              {[
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              ]
                .concat([
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                ])
                .map((fb, i) => (
                  <div
                    key={`woman-${i}`}
                    className="w-48 md:w-64 aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer shadow-lg border border-white/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/lp-studio-elite/woman-${(i % 4) + 1}.jpg`}
                      alt="Exemplo Feminino"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      onError={fallback(fb)}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFER SECTION (OFERTA IRRECUSÁVEL) */}
      <section id="oferta" className="max-w-4xl mx-auto px-6 mb-24 scroll-mt-24">
        <div className="anim-item opacity-0 glass-card card-premium rounded-3xl p-1 md:p-1.5 relative overflow-hidden">
          <div className="absolute top-7 right-0 bg-green-600 text-white text-[10px] md:text-xs font-bold px-8 py-1.5 uppercase tracking-widest transform translate-x-7 -translate-y-2 rotate-45 shadow-lg z-20 border-y border-green-400">
            OFERTA LIMITADA
          </div>

          <div className="bg-[#070707] rounded-[22px] p-8 md:p-12 relative z-10 border border-white/5">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                STUDIO ELITE: PACK COMPLETO
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                A coleção completa com prompts otimizados para retratos masculinos e femininos de alta fidelidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-300">
                  <strong className="text-white block mb-1">200 Prompts de Elite</strong> Otimizados para todos os
                  estilos e profissões (Masculino &amp; Feminino).
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-300">
                  <strong className="text-white block mb-1">Engenharia de Luz e Textura</strong> O segredo exato
                  para a IA não deixar com &quot;cara de boneco&quot;.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-300">
                  <strong className="text-white block mb-1">Acesso Vitalício</strong> Pague uma única vez e tenha
                  acesso para sempre à plataforma.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-300">
                  <strong className="text-white block mb-1">Atualizações Inclusas</strong> Receba novos setups de
                  estúdio sempre que a IA atualizar, sem custo.
                </p>
              </div>
            </div>

            <div className="text-center mb-10 bg-gradient-to-r from-transparent via-green-900/20 to-transparent py-6 rounded-2xl border-y border-green-500/10">
              <p className="text-gray-500 line-through text-sm mb-2 uppercase tracking-widest font-semibold">
                De R$ 147,00 por apenas
              </p>
              <div className="flex justify-center items-start gap-1 mb-2">
                <span className="text-2xl font-bold text-green-500 mt-2">R$</span>
                <span className="text-7xl font-extrabold text-white leading-none tracking-tighter">
                  29<span className="text-5xl">,90</span>
                </span>
              </div>
              <p className="text-sm text-green-400 font-bold uppercase tracking-widest">Pagamento Único</p>
            </div>

            <a
              href="https://pay.kiwify.com.br/C8x4hvg"
              className="btn-primary w-full md:max-w-lg md:mx-auto py-5 rounded-xl text-xl font-bold flex items-center justify-center gap-3 uppercase tracking-wide"
            >
              QUERO ACESSO AO STUDIO ELITE
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Garantia */}
            <div className="mt-10 flex items-center justify-center gap-5 text-left pt-2 opacity-80 hover:opacity-100 transition-opacity">
              <svg
                className="w-14 h-14 text-gray-400 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div>
                <p className="text-white font-bold text-sm tracking-wide">Garantia Blindada de 7 Dias</p>
                <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                  Risco zero. Se não gerar fotos realistas, devolvemos seu dinheiro na hora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <div className="anim-item opacity-0 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          <details className="anim-item opacity-0 glass-card rounded-xl group overflow-hidden">
            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-white">
              Funciona mesmo em IAs 100% gratuitas?
              <svg
                className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="p-5 md:p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
              Sim! O segredo não está na ferramenta, mas na engenharia do prompt (o texto que você envia). Ensinamos
              como usar ferramentas gratuitas para ter resultados de alto nível.
            </div>
          </details>

          <details className="anim-item opacity-0 glass-card rounded-xl group overflow-hidden">
            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-white">
              Como recebo o acesso ao Studio Elite?
              <svg
                className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="p-5 md:p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
              Imediatamente após a aprovação do pagamento (PIX ou Cartão), você receberá um e-mail com seu login e
              senha para acessar nossa área de membros com todos os prompts.
            </div>
          </details>

          <details className="anim-item opacity-0 glass-card rounded-xl group overflow-hidden">
            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-white">
              Preciso de computador para gerar as imagens?
              <svg
                className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="p-5 md:p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
              Não. Você pode fazer todo o processo direto do celular em poucos segundos, copiando o prompt e colando
              em uma IA gratuita. É simples, rápido e prático para gerar imagens de alto nível sem precisar de
              computador.
            </div>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="anim-item opacity-0 text-center pb-24 md:pb-10 pt-10 border-t border-white/5 bg-[#030303]">
        <p className="text-sm text-gray-500 font-semibold mb-3 tracking-widest uppercase">© 2024 STUDIO ELITE.</p>
        <p className="text-xs text-gray-600 max-w-xl mx-auto px-6 leading-relaxed">
          Este site não é afiliado a plataformas de IA de terceiros. Os resultados dependem da correta aplicação dos
          prompts.
        </p>
      </footer>

      {/* FLOATING CTA MOBILE */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-50 md:hidden flex justify-center pb-6">
        <a
          href="https://pay.kiwify.com.br/C8x4hvg"
          className="btn-primary w-full max-w-sm py-4 rounded-xl text-center font-bold text-base uppercase tracking-wide shadow-2xl"
        >
          QUERO ACESSO POR R$ 29,90
        </a>
      </div>
    </div>
  );
}
