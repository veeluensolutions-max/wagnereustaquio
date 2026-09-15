import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
    short_name: "Prof. Wagner",
    description:
      "Plataforma oficial do Prof. Dr. Wagner Eustáquio de Vasconcelos. Engenharia, Inteligência Artificial e Sustentabilidade aplicadas a problemas reais.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
