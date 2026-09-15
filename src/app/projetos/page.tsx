"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_PROJECTS, PROJECT_THEMES, INDUSTRY_SECTORS, ProjectTheme } from "@/data/projects";
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Factory, Calendar, Sparkles, Filter } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ProjetosPage() {
  const [selectedTheme, setSelectedTheme] = useState<string>("Todos");

  const filteredProjects = useMemo(() => {
    if (selectedTheme === "Todos") return DETAILED_PROJECTS;
    return DETAILED_PROJECTS.filter((p) => p.theme === selectedTheme);
  }, [selectedTheme]);

  const handleFilterClick = (theme: string) => {
    setSelectedTheme(theme);
    trackEvent("view_projects", { filter_theme: theme });
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Projetos & Atuação Técnica" }]} />

        {/* CABEÇALHO */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            EXPERIÊNCIA INDUSTRIAL & ACADÊMICA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Projetos que conectam ciência, engenharia e aplicação.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Uma trajetória técnica construída em pesquisa, consultoria, monitoramento, segurança de processos, modelagem e soluções industriais.
          </p>
        </div>

        {/* BARRA DE FILTROS TEMÁTICOS */}
        <div className="py-8 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Filter className="w-3.5 h-3.5 text-sky-700" />
            <span>Filtrar por Área de Atuação:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            <button
              onClick={() => handleFilterClick("Todos")}
              className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                selectedTheme === "Todos"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Todos os Projetos ({DETAILED_PROJECTS.length})
            </button>
            {PROJECT_THEMES.map((theme) => {
              const isSelected = selectedTheme === theme;
              return (
                <button
                  key={theme}
                  onClick={() => handleFilterClick(theme)}
                  className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-950 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {theme}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRADE DE CARDS DE PROJETOS VERTICAIS */}
        <section className="py-10 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              Projetos Selecionados {selectedTheme !== "Todos" && `• ${selectedTheme}`}
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              {filteredProjects.length} {filteredProjects.length === 1 ? "projeto" : "projetos"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                      {project.theme}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {project.year}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    {project.type} • {project.sector}
                  </span>

                  <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-sky-900 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Abordagem Técnica:
                    </span>
                    {project.approach.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Casos reais de engenharia
                  </span>
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-900 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Ver projeto</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SETORES INDUSTRIAIS ATENDIDOS */}
        <section className="py-12 border-t border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              PRESENÇA MULTISSETORIAL
            </span>
            <h2 className="text-2xl font-bold text-slate-950 mt-1 mb-2">
              Experiência em diferentes setores industriais
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Soluções aplicadas e auditorias técnicas em operações industriais com requisitos rigorosos de qualidade, segurança e sustentabilidade:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {INDUSTRY_SECTORS.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-2 text-sky-800">
                  <Factory className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{s.name}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Compromisso de Confidencialidade:</strong> Em observância estrita aos contratos de não-divulgação (NDA) e à ética da engenharia consultiva, dados restritos, formulações e identidades corporativas privadas são rigorosamente preservados.
            </span>
          </div>
        </section>

        {/* CTA CONTATO DE PROJETOS */}
        <section className="my-10 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase text-sky-400">DEMANDAS TÉCNICAS & LAUDOS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Precisa de diagnóstico, laudo ou consultoria para sua planta?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Atendimento especializado para modelagem atmosférica (AERMOD), segurança de processos (HAZOP/NR-13) e sistemas inteligentes de tomada de decisão.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/contato/projetos"
              className="min-h-[44px] px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
            >
              <span>Solicitar Avaliação de Projeto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
