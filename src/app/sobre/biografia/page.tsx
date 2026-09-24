import React from "react";
import type { Metadata } from "next";
import { getProfilePageSchema } from "@/lib/schema";
import BiografiaClient from "@/components/about/BiografiaClient";

export const metadata: Metadata = {
  title: "Biografia de Wagner Eustáquio de Vasconcelos",
  description:
    "Conheça a trajetória acadêmica e profissional do Prof. Dr. Wagner Eustáquio de Vasconcelos, da Engenharia à Inteligência Artificial aplicada.",
  alternates: {
    canonical: "/sobre/biografia",
  },
};

export default function BiografiaPage() {
  const profilePageSchema = getProfilePageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <BiografiaClient />
    </>
  );
}
