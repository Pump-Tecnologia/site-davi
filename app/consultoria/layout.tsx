import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mentoria em IA | Davi Bruno",
  description:
    "Mentoria em IA para acelerar carreira e negócios com estratégias práticas, fluxos inteligentes e execução de alto nível."
};

export default function ConsultoriaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
