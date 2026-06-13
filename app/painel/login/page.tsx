import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-bg px-4 text-brand-text">
      <div className="w-full max-w-md rounded-xl border border-gray-800 bg-brand-card p-8">
        <h1 className="mb-3 text-2xl font-bold text-white">Login</h1>
        <p className="mb-6 text-sm text-gray-400">
          Acesse o painel Studio Elite com o e-mail e a senha enviados após a compra.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
