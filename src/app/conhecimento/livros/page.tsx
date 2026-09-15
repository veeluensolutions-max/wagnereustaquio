import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PUBLISHED_BOOK } from "@/data/book";
import { BookOpen, Check, ArrowRight, ShieldCheck, Award } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";

export const metadata: Metadata = {
  title: "Livros e Obras Monográficas | Prof. Dr. Wagner Eustáquio",
  description:
    "Obra monográfica de referência em Lógica Fuzzy aplicada à modelagem de incertezas e radioatividade ambiental, publicada pelo Prof. Dr. Wagner Eustáquio de Vasconcelos.",
  alternates: {
    canonical: "/conhecimento/livros",
  },
};

export default function LivrosPage() {
  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Livros e Obras Técnicas" },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PRODUÇÃO MONOGRÁFICA AUTORAL</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Livros e Obras Técnicas
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            Publicações estruturadas reunindo fundamentos teóricos de inteligência computacional, conjuntos nebulosos e aplicações em engenharia ambiental.
          </p>
        </header>

        {/* Card Principal da Obra */}
        <div className="my-10 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col md:flex-row items-start gap-8">
          {/* Mockup / Capa da Obra */}
          <div className="w-full md:w-56 shrink-0 aspect-[3/4] rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 p-6 flex flex-col justify-between text-white border border-sky-500/30 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-sky-400 block uppercase">
                Edição 2010 • 163 p.
              </span>
              <span className="text-xs font-bold text-slate-300 block">
                Prof. Dr. Wagner Eustáquio de Vasconcelos
              </span>
            </div>

            <div className="my-auto py-4">
              <h2 className="font-heading font-bold text-sm sm:text-base leading-snug text-white">
                Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental
              </h2>
            </div>

            <div className="border-t border-slate-800 pt-2 text-[10px] text-slate-400 font-mono">
              Novas Edições Acadêmicas
            </div>
          </div>

          {/* Dados e Detalhes da Obra */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-heading text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200/60 uppercase">
                LIVRO AUTORAL HOMOLOGADO
              </span>
              <span className="font-mono text-xs font-semibold text-slate-500">
                163 Páginas • Ano 2010
              </span>
            </div>

            <h2 className="font-heading font-[650] text-2xl text-slate-950 tracking-[-0.02em] leading-snug">
              {PUBLISHED_BOOK.title}
            </h2>

            <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
              {PUBLISHED_BOOK.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="font-heading font-semibold text-xs text-slate-900 uppercase tracking-wider block">
                Eixos Principais da Obra:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PUBLISHED_BOOK.topics.slice(0, 4).map((top, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-body text-slate-700">
                    <Check className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span className="line-clamp-1">{top}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/conhecimento/livros/${PUBLISHED_BOOK.slug}`}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-body text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-2 min-h-[44px]"
              >
                <span>Acessar Ficha Completa da Obra</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/especialidades/logica-fuzzy"
                className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
              >
                <span>Ver Especialidade Lógica Fuzzy</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* AuthorBox */}
        <AuthorBox />

      </div>
    </div>
  );
}
