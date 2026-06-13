import { DashboardLayout } from "@/components/DashboardLayout";
import { PromptCard } from "@/components/PromptCard";
import { getPromptPreviews } from "@/lib/prompts";

export default async function DashboardPage() {
  const prompts = getPromptPreviews();

  return (
    <DashboardLayout>
      <section className="mb-10">
        <h2 className="mb-2 text-3xl font-bold text-white">Command Center</h2>
        <p className="text-gray-400">
          Passe o mouse ou toque nas imagens para copiar a estruturae prompt avançado de geração de imagens.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            id={prompt.id}
            categoria={prompt.categoria}
            titulo={prompt.titulo}
            imageUrl={prompt.imageUrl}
          />
        ))}
      </section>
    </DashboardLayout>
  );
}
