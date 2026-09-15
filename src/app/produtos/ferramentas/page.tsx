import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_TOOLS } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import WaitlistForm from "@/components/products/WaitlistForm";
import FuzzySimulator from "@/components/tools/FuzzySimulator";
import { Wrench, Sparkles, FileSpreadsheet, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ferramentas, Planilhas e Recursos de Engenharia | Prof. Dr. Wagner Eustáquio",
  description:
    "Checklists operacionais NR-13, planilhas de conversão de emissões, scripts em Python e simuladores interativos de apoio à decisão.",
  alternates: {
    canonical: "/produtos/ferramentas",
  },
};

export default function FerramentasPage() {
  const categories = [
    { label: "Planilhas", desc: "Modelos automatizados de cálculo" },
    { label: "Checklists", desc: "Roteiros de conformidade e auditoria" },
    { label: "Templates", desc: "Estruturas documentais para laudos" },
    { label: "Modelos", desc: "Simulações e scripts em Python" },
    { label: "Calculadoras", desc: "Simuladores interativos online" },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Ferramentas & Recursos" },
          ]}
        />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            PRODUTIVIDADE & RIGOR EM CAMPO
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Ferramentas e Recursos de Engenharia
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Planilhas técnicas, rotinas computacionais e checklists desenvolvidos para acelerar análises de engenharia com confiabilidade de cálculo e conformidade regulatória.
          </p>

          {/* Badges de Categorias */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((c, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Simulador Interativo Online */}
        <section className="py-8">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase text-sky-700 font-bold">RECURSO INTERATIVO</span>
            <h2 className="text-xl font-bold text-slate-900">Simulador de Decisão Fuzzy</h2>
            <p className="text-xs text-slate-600">
              Teste o motor de inferência difusa Mamdani diretamente no navegador.
            </p>
          </div>
          <FuzzySimulator />
        </section>

        {/* Grade de Ferramentas */}
        <section className="py-8 space-y-6">
          <h2 className="text-2xl font-bold text-slate-950">
            Catálogo de Ferramentas & Modelos de Cálculo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DETAILED_TOOLS.map((tool) => (
              <ProductCard key={tool.id} product={tool} basePath="/produtos/ferramentas" />
            ))}
          </div>
        </section>

        {/* Formulário Geral de Interesse */}
        <div className="my-8">
          <WaitlistForm
            productTitle="Ferramentas e Planilhas de Engenharia"
            defaultInterest="Ferramentas"
            sourceContext="tools_hub"
          />
        </div>

      </div>
    </div>
  );
}
