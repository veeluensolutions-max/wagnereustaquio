import React from "react";
import type { Metadata } from "next";
import SobreClient from "@/components/about/SobreClient";

export const metadata: Metadata = {
  title: "Sobre Wagner Eustáquio de Vasconcelos | Engenharia, IA e Pesquisa",
  description:
    "Conheça a trajetória de Wagner Eustáquio de Vasconcelos, engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Engenharia e Meio Ambiente.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobreHubPage() {
  return <SobreClient />;
}
