import type { ReactNode } from "react";
import { Header } from "@/components/Header";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
      <Header showLogout />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-8 pt-24 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
