import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "STUDIO ELITE: Pack de Prompts Realistas",
  description:
    "Tenha em mãos a maior biblioteca de prompts profissionais do mercado. Copie, cole e gere imagens com realismo de estúdio em segundos."
};

export default function LpStudioEliteLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
