import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Vérifie bien que ta branche s'appelle main
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!, 
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articles",
        path: "src/content/blog", // ADAPTE SELON TON DOSSIER
        fields: [
          { type: "string", name: "title", label: "Titre", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Corps", isBody: true },
        ],
      },
    ],
  },
});