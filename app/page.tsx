"use client";

import { useEffect } from "react";
import { animate, stagger } from "motion";

export default function LandingPage() {
  useEffect(() => {
    animate(
      ".anim-item",
      { opacity: [0, 1], y: [24, 0], scale: [0.98, 1] },
      { duration: 0.75, delay: stagger(0.09, { startDelay: 0.08 }), ease: [0.22, 1, 0.36, 1] }
    );

    animate(
      ".link-card",
      { y: [0, -2, 0] },
      { duration: 4.6, repeat: Infinity, delay: stagger(0.22), ease: "easeInOut" }
    );

    const cards = document.querySelectorAll<HTMLElement>(".link-card");
    const handlers: Array<{
      card: HTMLElement;
      move: (event: MouseEvent) => void;
      leave: () => void;
    }> = [];

    cards.forEach((card) => {
      const move = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(
          x * 6
        ).toFixed(2)}deg) translateY(-3px)`;
      };
      const leave = () => {
        card.style.transform = "";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ card, move, leave });
    });

    return () => {
      handlers.forEach(({ card, move, leave }) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div className="landing-root flex flex-col items-center justify-center p-6 antialiased selection:bg-white/30">
      <main className="main-shell w-full max-w-md flex flex-col items-center gap-8">
        {/* Profile Header */}
        <header className="flex flex-col items-center gap-4 text-center anim-item opacity-0">
          <div className="w-32 h-32 rounded-full overflow-hidden avatar-glow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/avatar.png"
              alt="Davi Bruno"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">Davi Bruno | Tech e IA</h1>
            <p className="text-gray-400 text-sm mt-1 font-light">Construindo acessibilidade com Tech e IA</p>
            <p className="text-green-400 text-xs mt-8 font-semibold tracking-widest">PRODUTOS E SERVIÇOS</p>
          </div>
        </header>

        {/* Professional Bio Links */}
        <nav className="w-full flex flex-col gap-3">
          {/* Pump Software House */}
          <a
            href="https://pumpsites.com.br"
            className="anim-item opacity-0 group glass-card link-card card-blue relative rounded-2xl p-4 flex items-center justify-between gap-4 min-h-20"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/logo-pump.png"
                alt="Pump"
                className="w-10 h-10 object-contain rounded-lg flex-shrink-0"
              />
              <h3 className="font-semibold text-gray-100 text-sm leading-snug">
                Construa seu App, Sistema ou Site
              </h3>
            </div>
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Convexa IA */}
          <a
            href="/atendimento"
            className="anim-item opacity-0 group glass-card link-card relative rounded-2xl p-4 flex items-center justify-between gap-4 min-h-20"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/logo-convexa.png"
                alt="Convexa"
                className="w-10 h-10 object-contain rounded-lg flex-shrink-0"
              />
              <h3 className="font-semibold text-gray-100 text-sm leading-snug">
                Sua empresa atendendo 24h com IA
              </h3>
            </div>
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Pacotes de Prompts */}
          <div className="anim-item opacity-0 group glass-card link-card card-green relative rounded-2xl p-4 flex items-center justify-between gap-4 min-h-20">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/logo-studio.jpeg"
                  alt="Studio Elite"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-100 text-sm leading-snug">
                Meus Prompts de Elite para Imagens
              </h3>
            </div>
            <span className="badge badge-gray flex-shrink-0">Em Breve</span>
          </div>

          {/* Consultoria Estratégica */}
          <a
            href="/consultoria"
            className="anim-item opacity-0 group glass-card link-card card-green relative rounded-2xl p-4 flex items-center justify-between gap-4 min-h-20"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 text-sm leading-snug">
                Mentoria de IA para carreiras e negócios
              </h3>
            </div>
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </nav>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-md flex justify-center gap-4 mt-12 anim-item opacity-0">
        <a
          href="https://www.youtube.com/@odavibruno"
          target="_blank"
          className="social-link p-3 rounded-lg glass-card group transition-transform duration-500"
        >
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/davibruno"
          target="_blank"
          className="social-link p-3 rounded-lg glass-card group transition-transform duration-500"
        >
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
      </footer>
    </div>
  );
}
