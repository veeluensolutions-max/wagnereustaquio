"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { RESEARCH_PROJECTS, ResearchCategory } from "@/data/researchProjects";
import { FlaskConical, Search, ArrowRight, Calendar, CheckCircle2, Building2 } from "lucide-react";

export default function PesquisasIndexPage() {
  const [selectedCat, setSelectedCat] = useState<string>("todas");

  const categories = [
    { key: "todas", label: "Todas as Linhas" },
    { key: "ia-modelagem", label: "IA & Modelagem" },
    { key: "nuclear", label: "Engenharia Nuclear" },
    { key: "meio-ambiente", label: "Meio Ambiente" },
    { key: "processos", label: "Processos Industriais" },
    { key: "sustentabilidade", label: "Sustentabilidade" },
    { key: "automacao", label: "Controle & Automação" },
  ];

  const filteredProjects = RESEARCH_PROJECTS.filter((p) => {
    return selectedCat === "todas" || p.category === selectedCat;
  });

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Projetos de Pesquisa" },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>PESQUISA CIENTÍFICA APLICADA</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Linhas e Projetos de Pesquisa
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            Projetos acadêmicos e aplicados desenvolvidos no âmbito de grupos de pesquisa do CNPq e programas de pós-graduação da UFPE e instituições parceiras.
          </p>
        </header>

        {/* Abas de Categorias */}
        <div className="py-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setSelectedCat(c.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-body font-medium transition-all cursor-pointer min-h-[44px] ${
                selectedCat === c.key
                  ? "bg-slate-950 text-white shadow-xs"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/70"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Lista de Projetos */}
        <div className="py-4 space-y-4">
          {filteredProjects.map((proj) => (
            <article
              key={proj.slug}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-heading text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200/50 uppercase">
                    {proj.categoryLabel}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{proj.period}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-body">{proj.status}</span>
                  </div>
                </div>

                <h2 className="font-heading font-[650] text-lg sm:text-xl text-slate-950 tracking-[-0.02em] group-hover:text-sky-900 transition-colors mb-2 leading-snug">
                  <Link href={`/conhecimento/pesquisas/${proj.slug}`}>
                    {proj.title}
                  </Link>
                </h2>

                <p className="font-body text-xs font-semibold text-sky-850 mb-3 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-sky-700" />
                  <span>{proj.institution}</span>
                </p>

                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {proj.objective}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-body text-slate-400">
                  Participantes: {proj.participants[0]}
                </span>

                <Link
                  href={`/conhecimento/pesquisas/${proj.slug}`}
                  className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
                >
                  <span>Ver objetivos e métodos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
