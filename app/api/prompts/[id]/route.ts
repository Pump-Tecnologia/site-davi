import { NextResponse } from "next/server";
import { buildPromptText, getPromptDataById } from "@/lib/prompts";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const promptData = getPromptDataById(id);

  if (!promptData) {
    return NextResponse.json({ error: "Prompt não encontrado" }, { status: 404 });
  }

  const promptContent = buildPromptText(promptData);

  return NextResponse.json(
    { promptContent },
    {
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
