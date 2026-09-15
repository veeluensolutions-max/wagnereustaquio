"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { TIMELINE_DATA, TimelineCategory } from "@/data/timeline";
import { Compass, GraduationCap, Microscope, Briefcase, BookOpen, ArrowRight } from "lucide-react";

export default function TrajetoriaPage() {
  const [selectedFilter, setSelectedFilter] = useState<"todos" | TimelineCategory>("todos");

  const filterTabs = [
    { key: "todos", label: "Todos os Marcos", icon: Compass },
    { key: "academico", label: "Acadêmico & Docência", icon: BookOpen },
    { key: "pesquisa", label: "Pesquisa & Ciência", icon: Microscope },
    { key: "profissional", label: "Profissional & Indústria", icon: Briefcase },
    { key: "formacao", label: "Formação & Graus", icon: GraduationCap },
  ];

  const filteredEvents = TIMELINE_DATA.filter((item) => {
    if (selectedFilter === "todos") return true;
    return item.categories.includes(selectedFilter);
  });

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Sobre o Autor", href: "/sobre" },
            { label: "Trajetória" },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-10 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Compass className="w-3.5 h-3.5" />
            <span>CRONOLOGIA HISTÓRICA • 1995 A 2026</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Trajetória
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            Evolução cronológica e marcos estratégicos integrando ciência, docência e indústria.
          </p>
        </header>

        {/* Filtros Opcionais de Categoria */}
        <div className="py-6 border-b border-slate-200/80">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedFilter(tab.key as "todos" | TimelineCategory)}
                  className={`px-4 py-2.5 rounded-2xl font-body text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer min-h-[44px] ${
                    isActive
                      ? "bg-slate-950 text-white shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-slate-200/80"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-sky-400" : "text-slate-500"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          <p className="font-body text-xs text-slate-400 mt-2">
            Mostrando {filteredEvents.length} de {TIMELINE_DATA.length} marcos estratégicos registrados.
          </p>
        </div>

        {/* Linha do Tempo Estruturada e Otimizada para iPhone */}
        <div className="py-10 sm:py-14 relative">
          {/* Linha vertical condutora contínua */}
          <div className="absolute left-4 sm:left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-sky-600 via-slate-300 to-slate-200" />

          <div className="space-y-8 sm:space-y-10">
            {filteredEvents.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 sm:gap-8 pl-1 sm:pl-2 group"
              >
                {/* Marcador Circular na Linha */}
                <div className="relative z-10 mt-1 flex items-center justify-center shrink-0">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    item.isComplementary
                      ? "bg-sky-600 border-white shadow-md shadow-sky-600/30 text-white"
                      : "bg-white border-sky-600 text-sky-800 shadow-sm"
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-sky-700" />
                  </div>
                </div>

                {/* Card de Conteúdo do Marco */}
                <div
                  className={`flex-1 p-5 sm:p-7 rounded-3xl border transition-all duration-300 ${
                    item.isComplementary
                      ? "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/90 text-white border-sky-500/30 shadow-xl shadow-slate-950/10"
                      : "bg-white/90 backdrop-blur-sm text-slate-900 border-slate-200/90 hover:border-sky-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-heading text-xs font-bold px-3 py-1 rounded-full ${
                        item.isComplementary
                          ? "bg-sky-500/20 text-sky-300 border border-sky-400/30"
                          : "bg-sky-50 text-sky-800 border border-sky-200/70"
                      }`}
                    >
                      {item.year}
                    </span>

                    {item.badge && (
                      <span
                        className={`font-body text-[10.5px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                          item.isComplementary
                            ? "bg-sky-950 text-sky-300 border border-sky-700/60"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-heading font-semibold text-base sm:text-lg tracking-[-0.02em] mb-1 leading-snug ${
                      item.isComplementary ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`font-body text-xs font-semibold mb-3 ${
                      item.isComplementary ? "text-sky-300" : "text-sky-850"
                    }`}
                  >
                    {item.institution}
                  </p>

                  <p
                    className={`font-body text-sm leading-relaxed font-normal ${
                      item.isComplementary ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé Direcional da Trajetória */}
        <div className="py-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-500 text-center sm:text-left">
            Para consultar a lista completa de bancas, artigos e orientações, acesse o Lattes oficial.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/sobre/formacao"
              className="font-body text-xs font-semibold text-slate-700 hover:text-sky-850"
            >
              Ver Formação Detalhada
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/curriculo-lattes"
              className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1"
            >
              <span>Base Lattes CNPq</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
