import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SPEAKING_EVENTS } from "@/data/speaking";
import { Mic, Calendar, ArrowRight, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";

export const metadata: Metadata = {
  title: "Palestras, Conferências e Treinamentos | Prof. Dr. Wagner Eustáquio",
  description:
    "Histórico de apresentações técnicas, conferências magnas e workshops corporativos ministrados pelo Prof. Dr. Wagner Eustáquio de Vasconcelos.",
  alternates: {
    canonical: "/conhecimento/palestras",
  },
};

export default function PalestrasPage() {
  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Palestras & Apresentações" },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Mic className="w-3.5 h-3.5" />
            <span>DISSEMINAÇÃO DE CONHECIMENTO</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Palestras, Conferências e Treinamentos
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            Apresentações técnicas, conferências em congressos científicos e capacitações in-company conectando ciência de ponta e desafios reais da indústria.
          </p>
        </header>

        {/* Lista de Apresentações */}
        <div className="py-10 space-y-5">
          {SPEAKING_EVENTS.map((event) => (
            <article
              key={event.id}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-heading text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200/50 uppercase">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Ano {event.year}</span>
                  </div>
                </div>

                <h2 className="font-heading font-[650] text-xl text-slate-950 tracking-[-0.02em] mb-2 leading-snug">
                  {event.title}
                </h2>

                <p className="font-body text-xs font-semibold text-sky-850 mb-3 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-sky-700" />
                  <span>{event.event}</span>
                </p>

                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-body">
                <span className="text-slate-400">
                  Tema: <strong className="text-slate-700 font-medium">{event.theme}</strong>
                </span>
                <span className="text-emerald-700 font-semibold">
                  Realizada
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA para Contratar Palestra / Treinamento */}
        <div className="my-8 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-400">
              PALESTRAS & WORKSHOPS IN-COMPANY
            </span>
            <h3 className="font-heading font-semibold text-xl text-white tracking-[-0.02em]">
              Leve este conhecimento para a sua empresa ou universidade
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl">
              Treinamentos personalizados em Inteligência Artificial para Engenheiros, Gestão da NR-13 e Modelagem com AERMOD.
            </p>
          </div>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-body text-xs font-semibold tracking-wide transition-all shrink-0 min-h-[44px] flex items-center justify-center gap-2"
          >
            <span>Solicitar Proposta</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* AuthorBox */}
        <AuthorBox />

      </div>
    </div>
  );
}
