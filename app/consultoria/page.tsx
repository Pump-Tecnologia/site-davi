"use client";

import { useEffect } from "react";
import { animate, stagger } from "motion";

export default function ConsultoriaPage() {
  useEffect(() => {
    animate(".anim-item", { opacity: [0, 1], y: [15, 0] }, { duration: 0.8, delay: stagger(0.15) });
  }, []);

  return (
    <div className="consultoria-root p-6 md:p-12 antialiased max-w-3xl mx-auto">
      <nav className="anim-item opacity-0 mb-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </a>
      </nav>

      <header className="anim-item opacity-0 mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Domine a IA e multiplique sua produtividade
        </h1>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Não é sobre usar o ChatGPT. É sobre entender qual IA resolve cada problema, dominar a engenharia de
          prompt e criar fluxos que economizam horas do seu dia. Seja para acelerar sua carreira ou escalar seu
          negócio, eu te mostro o caminho técnico e estratégico.
        </p>
      </header>

      <div className="space-y-6 mb-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="anim-item opacity-0 relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-gray-300 font-semibold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#0a0a0a]">
            1
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
            <h3 className="text-white font-medium mb-1">Diagnóstico e Direcionamento</h3>
            <p className="text-sm text-gray-400">
              Analisamos seu momento atual para identificar onde a IA pode gerar impacto imediato, eliminando o
              excesso de ferramentas inúteis.
            </p>
          </div>
        </div>

        <div className="anim-item opacity-0 relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-gray-300 font-semibold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#0a0a0a]">
            2
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
            <h3 className="text-white font-medium mb-1">Exploração de Ecossistemas</h3>
            <p className="text-sm text-gray-400">
              Te apresento o &quot;mundo real&quot; das IAs (Claude, Gemini, Perplexity) e como cada uma se comporta
              na prática para a sua necessidade específica.
            </p>
          </div>
        </div>

        <div className="anim-item opacity-0 relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-gray-300 font-semibold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#0a0a0a]">
            3
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
            <h3 className="text-white font-medium mb-1">Poder de Execução</h3>
            <p className="text-sm text-gray-400">
              Focamos em Engenharia de Prompt e fluxos de trabalho para que você aprenda a extrair o máximo de
              inteligência das ferramentas por conta própria.
            </p>
          </div>
        </div>
      </div>

      <div className="anim-item opacity-0 glass-card p-8 rounded-2xl text-center border-white/10">
        <h3 className="text-xl text-white font-medium mb-2">Pronto para transformar sua operação?</h3>
        <p className="text-sm text-gray-400 mb-2">As vagas para mentoria 1:1 são extremamente limitadas.</p>

        <a
          href="#"
          className="inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors w-full md:w-auto"
        >
          Garantir minha vaga
        </a>
      </div>
    </div>
  );
}
