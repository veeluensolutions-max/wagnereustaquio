"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SCIENTIFIC_PUBLICATIONS, PublicationType } from "@/data/publications";
import { Award, Search, ArrowRight, ExternalLink, BookOpen, Calendar } from "lucide-react";

export default function PublicacoesCientificasIndexPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("todos");

  const types = [
    { key: "todos", label: "Todos os Tipos" },
    { key: "periodico", label: "Periódicos Científicos" },
    { key: "congresso", label: "Anais de Congressos" },
  ];

  const filteredPubs = SCIENTIFIC_PUBLICATIONS.filter((pub) => {
    const matchesType = selectedType === "todos" || pub.type === selectedType;
    const matchesSearch =
      pub.title.toLowerCase().includes(search.toLowerCase()) ||
      pub.journalOrEvent.toLowerCase().includes(search.toLowerCase()) ||
      pub.theme.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Publicações Científicas" },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Award className="w-3.5 h-3.5" />
            <span>PRODUÇÃO ACADÊMICA REGISTRADA</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Publicações Científicas e Artigos Indexados
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            Artigos publicados em periódicos com revisão por pares e anais de congressos nacionais e internacionais com respaldo factual na Plataforma Lattes do CNPq.
          </p>
        </header>

        {/* Busca e Filtros */}
        <div className="py-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por título, periódico ou tema (ex: neuro-fuzzy, dose, efluentes)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-body focus:outline-none focus:border-sky-500 shadow-2xs transition-colors min-h-[44px]"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {types.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setSelectedType(t.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-body font-medium transition-all cursor-pointer min-h-[44px] ${
                  selectedType === t.key
                    ? "bg-slate-950 text-white shadow-xs"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/70"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Publicações */}
        <div className="py-6 space-y-4">
          {filteredPubs.map((pub) => (
            <article
              key={pub.slug}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-heading text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200/50 uppercase">
                    {pub.typeLabel}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    Ano {pub.year}
                  </span>
                </div>

                <h2 className="font-heading font-[650] text-lg sm:text-xl text-slate-950 tracking-[-0.02em] group-hover:text-sky-900 transition-colors mb-2 leading-snug">
                  <Link href={`/conhecimento/publicacoes-cientificas/${pub.slug}`}>
                    {pub.title}
                  </Link>
                </h2>

                <p className="font-body text-xs font-semibold text-sky-850 mb-3">
                  {pub.journalOrEvent} {pub.volume && `• ${pub.volume}`} {pub.pages && `• ${pub.pages}`}
                </p>

                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {pub.editorialSummary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-body text-slate-400">
                  Autores: {pub.authors.join(", ")}
                </span>

                <Link
                  href={`/conhecimento/publicacoes-cientificas/${pub.slug}`}
                  className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
                >
                  <span>Ver ficha técnica e citação</span>
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
