"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Award, Layers, FlaskConical } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PublicationsSection() {
  const { language } = useLanguage();

  const labels = {
    "pt-BR": {
      badge: "PRODUÇÃO CIENTÍFICA",
      title: "Pesquisa e produção científica.",
      description: "A produção acadêmica de Wagner Eustáquio de Vasconcelos inclui trabalhos sobre Inteligência Artificial, lógica fuzzy, engenharia nuclear, sustentabilidade, recursos hídricos, processos industriais, emissões e meio ambiente.",
      cta: "Explorar produção acadêmica",
      categories: [
        {
          id: "artigos-periodicos",
          title: "Artigos Científicos",
          icon: FileText,
          description: "Publicações em periódicos indexados abordando modelos difusos, segurança de processos e sustentabilidade.",
          highlight: "Nacional e Internacional",
        },
        {
          id: "livros-capitulos",
          title: "Livros e Capítulos Técnicos",
          icon: BookOpen,
          description: "Obras autorais e coautorias com foco em incertezas ambientais e aplicações de inteligência computacional.",
          highlight: "Obra publicada em 2010",
        },
        {
          id: "congressos",
          title: "Anais de Congressos e Conferências",
          icon: Award,
          description: "Trabalhos apresentados nos principais simpósios de engenharia química, nuclear, ambiental e computacional.",
          highlight: "Apresentações Técnicas",
        },
        {
          id: "projetos-pesquisa",
          title: "Projetos de Pesquisa Aplicada",
          icon: FlaskConical,
          description: "Iniciativas de inovação e investigação científica desenvolvidas em cooperação acadêmica e industrial.",
          highlight: "UFPE, IME e Parceiros",
        },
        {
          id: "producao-tecnica",
          title: "Produção Técnica e Laudos",
          icon: Layers,
          description: "Relatórios de dispersão atmosférica, pareceres regulatórios e memórias de cálculo de engenharia.",
          highlight: "Aplicação Industrial",
        },
      ],
    },
    "en": {
      badge: "SCIENTIFIC PRODUCTION",
      title: "Research and scientific production.",
      description: "Wagner Eustáquio de Vasconcelos' academic output includes peer-reviewed papers on Artificial Intelligence, fuzzy logic, nuclear engineering, sustainability, water resources, industrial process safety, and environment.",
      cta: "Explore academic production",
      categories: [
        {
          id: "artigos-periodicos",
          title: "Scientific Articles",
          icon: FileText,
          description: "Publications in indexed journals addressing fuzzy models, process safety, and environmental sustainability.",
          highlight: "National & International",
        },
        {
          id: "livros-capitulos",
          title: "Books & Technical Chapters",
          icon: BookOpen,
          description: "Authored books and book chapters focusing on environmental uncertainties and computational intelligence.",
          highlight: "Published in 2010",
        },
        {
          id: "congressos",
          title: "Conference Proceedings",
          icon: Award,
          description: "Papers presented at key symposiums in chemical, nuclear, environmental, and computational engineering.",
          highlight: "Technical Keynotes",
        },
        {
          id: "projetos-pesquisa",
          title: "Applied Research Projects",
          icon: FlaskConical,
          description: "Innovation and scientific research initiatives conducted in academic and industrial collaboration.",
          highlight: "UFPE, IME & Partners",
        },
        {
          id: "producao-tecnica",
          title: "Technical Reports & Audits",
          icon: Layers,
          description: "Atmospheric dispersion reports, regulatory opinions, and complex engineering calculation memories.",
          highlight: "Industrial Practice",
        },
      ],
    },
    "es": {
      badge: "PRODUCCIÓN CIENTÍFICA",
      title: "Investigación y producción científica.",
      description: "La producción académica de Wagner Eustáquio de Vasconcelos incluye trabajos sobre Inteligencia Artificial, lógica difusa, ingeniería nuclear, sostenibilidad, recursos hídricos, procesos industriales y medio ambiente.",
      cta: "Explorar producción académica",
      categories: [
        {
          id: "artigos-periodicos",
          title: "Artículos Científicos",
          icon: FileText,
          description: "Publicaciones en revistas indexadas sobre modelos difusos, seguridad de procesos y sostenibilidad.",
          highlight: "Nacional e Internacional",
        },
        {
          id: "livros-capitulos",
          title: "Libros y Capítulos Técnicos",
          icon: BookOpen,
          description: "Obras autorales y coautorías enfocadas en incertidumbres ambientales y modelos neuro-fuzzy.",
          highlight: "Obra publicada en 2010",
        },
        {
          id: "congressos",
          title: "Actas de Congresos y Conferencias",
          icon: Award,
          description: "Trabajos presentados en los principales simposios de ingeniería química, nuclear, ambiental y computacional.",
          highlight: "Ponencias Técnicas",
        },
        {
          id: "projetos-pesquisa",
          title: "Proyectos de Investigación Aplicada",
          icon: FlaskConical,
          description: "Iniciativas de innovación e investigación científica desarrolladas en cooperación académica e industrial.",
          highlight: "UFPE, IME y Socios",
        },
        {
          id: "producao-tecnica",
          title: "Producción Técnica y Peritajes",
          icon: Layers,
          description: "Informes de dispersión atmosférica, dictámenes normativos y memorias de cálculo de ingeniería.",
          highlight: "Aplicación Industrial",
        },
      ],
    },
  };

  const current = labels[language] || labels["pt-BR"];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-2">
              {current.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
              {current.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {current.description}
            </p>
          </div>

          <Link
            href="/conhecimento/publicacoes-cientificas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 hover:text-sky-900 mt-4 md:mt-0 transition-colors group shrink-0"
          >
            <span>{current.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid dos 5 Eixos de Produção Científica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {current.categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 text-sky-700 flex items-center justify-center mb-3 shadow-2xs group-hover:bg-slate-950 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-950 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
