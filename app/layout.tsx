import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: "Davi Bruno | Tech e IA",
  description: "Construindo acessibilidade com Tech e IA",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${sora.variable}`}>
      <body className="font-sans min-h-screen antialiased">{children}</body>
    </html>
  );
}
