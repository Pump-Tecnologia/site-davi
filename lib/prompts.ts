export type PromptItem = {
  id: string;
  categoria: string;
  titulo: string;
  imageUrl: string;
  promptData: Record<string, unknown>;
};

const promptsData: PromptItem[] = [
  {
    id: "p1",
    categoria: "Foto Speakeasy",
    titulo: "Retrato Bar Noturno Místico",
    imageUrl: "/assets/davi-speakeasy-01.jpg",
    promptData: {
      camera: {
        model: "Hasselblad H6D-100c",
        lens: "50mm f/3.5 II",
        settings: {
          f_stop: "f/2.8",
          shutter_speed: "1/125s",
          iso: 250
        }
      },
      lighting_physics: {
        key_light: "Softbox on the left providing clean 5500K light on the face",
        fill_light: "Ambient light",
        rim_light: "Warm amber light coming from the bar shelves, creating an outline on the jacket",
        style: "Sophisticated, luxurious, relaxed, yet imposing lifestyle"
      },
      render_parameters: {
        skin_texture: "Realistic skin texture, sharp eyes, extremely detailed leather and fabric textures",
        color_gradation:
          "Rich and vivid, neutral and bright face contrasting with the warm golden bokeh of the background",
        depth_of_field: "Sharp subject, softly blurred background creating bokeh circles"
      },
      environment: {
        background:
          "Blurred drink bottles with backlighting and warm amber light of an exclusive speakeasy bar",
        clothing: "Dark brown suede leather jacket over a dark gray long-sleeved t-shirt",
        pose: "Leaning casually, relaxed posture, looking slightly out of the camera with a subtle and confident smile"
      }
    }
  },
  {
    id: "p2",
    categoria: "VSL Irresistível",
    titulo: "Setup Podcast Milionário",
    imageUrl: "/assets/davi-speakeasy-02.jpg",
    promptData: {
      camera: { model: "Sony A7SIII", lens: "35mm G-Master" },
      lighting: { key: "Keylight 5600K", practical: "RGB Tube Lights (Purple/Blue)" },
      environment: {
        pose: "Sitting at podcast desk, holding mic",
        background: "Acoustic panels, luxury bookshelf"
      },
      parameters: { "--ar": "16:9", "--v": "6.0", "--q": "2" }
    }
  },
  {
    id: "p3",
    categoria: "Reels Viral",
    titulo: "Lifestyle Urbano Dinâmico",
    imageUrl: "/assets/davi-speakeasy-03.jpg",
    promptData: {
      camera: { model: "iPhone 15 Pro Max", lens: "Main Camera 24mm" },
      lighting: { key: "Natural Overcast Sunlight", rim: "None" },
      environment: {
        pose: "Walking towards camera, mid-stride",
        background: "New York street, low angle"
      },
      parameters: { "--ar": "9:16", "--v": "6.0", "--c": "10" }
    }
  },
  {
    id: "p4",
    categoria: "Corporate Elite",
    titulo: "CEO de Tecnologia Minimalista",
    imageUrl: "/assets/davi-speakeasy-04.jpg",
    promptData: {
      camera: { model: "Canon EOS R5", lens: "85mm f/1.2" },
      lighting: { key: "Large Window Light Right", fill: "White Reflector Left" },
      environment: {
        pose: "Arms crossed, confident subtle smile",
        background: "Clean concrete wall, minimal plant"
      },
      parameters: { "--ar": "4:5", "--v": "6.0", "--style": "raw" }
    }
  }
];

export type PromptPreview = Omit<PromptItem, "promptData">;

export function getPromptPreviews(): PromptPreview[] {
  return promptsData.map(({ promptData: _promptData, ...preview }) => preview);
}

export function getPromptDataById(id: string): Record<string, unknown> | null {
  const item = promptsData.find((prompt) => prompt.id === id);
  if (!item) {
    return null;
  }
  return item.promptData;
}

export function buildPromptText(promptData: Record<string, unknown>): string {
  const promptBlock = JSON.stringify(promptData, null, 2);
  return `Use the photo I just sent as a reference for the theme and pose. Apply the professional photography technical guidelines to the following object:

${promptBlock}

The goal is to recreate this portrait with studio-quality technical detail, maintaining my identity but ensuring the lighting, texture, and background blur described.`;
}
