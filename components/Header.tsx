import { LogoutButton } from "@/components/LogoutButton";

type HeaderProps = {
  showLogout?: boolean;
};

export function Header({ showLogout = true }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-brand-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold tracking-tight text-white">
          STUDIO<span className="text-brand-gold">ELITE</span>
        </h1>
        {showLogout ? <LogoutButton /> : null}
      </div>
    </header>
  );
}
