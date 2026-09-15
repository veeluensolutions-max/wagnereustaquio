import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_MENTORINGS } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import WaitlistForm from "@/components/products/WaitlistForm";
import ProductInstructor from "@/components/products/ProductInstructor";
import { Users, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentoria Técnica e Profissional | Prof. Dr. Wagner Eustáquio",
  description:
    "Acompanhamento individual e direcionamento técnico em IA aplicada, modelagem matemática, segurança de processos e transição para consultoria.",
  alternates: {
    canonical: "/produtos/mentorias",
  },
};

export default function MentoriasPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Mentorias Técnicas" },
          ]}
        />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            ACOMPANHAMENTO INDIVIDUAL & ESTRATÉGICO
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Mentoria técnica e desenvolvimento profissional.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Orientação técnica personalizada conduzida diretamente pelo Prof. Dr. Wagner Eustáquio de Vasconcelos para engenheiros, gestores técnicos, consultores e pesquisadores.
          </p>
        </div>

        {/* As Duas Linhas de Mentoria */}
        <section className="py-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-950">
            Linhas de Mentoria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DETAILED_MENTORINGS.map((m) => (
              <ProductCard key={m.id} product={m} basePath="/produtos/mentorias" />
            ))}
          </div>
        </section>

        {/* Formulário de Manifestação de Interesse */}
        <section className="my-8">
          <WaitlistForm
            productTitle="Programa de Mentorias Especializadas"
            defaultInterest="Mentoria Técnica"
            sourceContext="mentoring_hub"
          />
        </section>

        {/* Instrutor */}
        <section className="my-10">
          <ProductInstructor />
        </section>

      </div>
    </div>
  );
}
