import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SPEAKING_FORMATS, DETAILED_SPEAKING_THEMES, SPEAKING_EVENTS } from "@/data/speaking";
import ProductInstructor from "@/components/products/ProductInstructor";
import MobileStickyCta from "@/components/products/MobileStickyCta";
import {
  Mic,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Calendar,
  Clock,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Palestras | Wagner Eustáquio de Vasconcelos",
  description:
    "Palestras e apresentações sobre Engenharia, Inteligência Artificial, Segurança de Processos, Meio Ambiente e tomada de decisão.",
  alternates: {
    canonical: "/palestras",
  },
  openGraph: {
    title: "Palestras | Wagner Eustáquio de Vasconcelos",
    description:
      "Conhecimento técnico para eventos, equipes e instituições. Palestras acadêmicas, corporativas e keynotes técnicas.",
    type: "website",
  },
};

export default function PalestrasPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Palestras e Conferências" }]} />

        {/* HERO */}
        <div className="py-8 border-b border-slate-200 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            CONFERÊNCIAS & EVENTOS CORPORATIVOS
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight max-w-4xl">
            Conhecimento técnico para eventos, equipes e instituições.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Palestras sobre Engenharia, Inteligência Artificial, Segurança de Processos, Meio Ambiente, Sustentabilidade e tomada de decisão.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="/contato/palestras"
              className="min-h-[44px] px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
            >
              <span>Solicitar palestra</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#temas"
              className="min-h-[44px] px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center transition-colors text-center cursor-pointer"
            >
              Ver temas disponíveis
            </a>
          </div>
        </div>

        {/* 1. OS 4 BLOCOS ORGANIZACIONAIS */}
        <section className="py-12 border-b border-slate-100 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              MODALIDADES DE APRESENTAÇÃO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Formatos de Atuação
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Apresentações desenhadas conforme a maturidade do público e os objetivos estratégicos do evento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPEAKING_FORMATS.map((format) => (
              <div
                key={format.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded border border-sky-100 block w-fit mb-3">
                    {format.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    {format.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {format.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                  <strong className="block text-slate-700 font-semibold mb-0.5">Público-alvo:</strong>
                  <span>{format.targetAudience}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. OS 8 TEMAS DE PALESTRAS */}
        <section id="temas" className="py-12 border-b border-slate-100 space-y-8 scroll-mt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                EMENTAS ESTRUTURADAS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Temas para Palestras e Keynotes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Conteúdos fundamentados em publicações científicas e casos reais do setor produtivo.
              </p>
            </div>
            <Link
              href="/contato/palestras"
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-950 text-white font-semibold text-xs flex items-center gap-2 hover:bg-slate-800 transition-colors shrink-0"
            >
              <span>Consultar datas para seu evento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {DETAILED_SPEAKING_THEMES.map((theme) => (
              <div
                key={theme.id}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {theme.formats.map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 leading-snug">
                    {theme.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {theme.summary}
                  </p>

                  {/* Objetivos */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Objetivos Principais:
                    </span>
                    {theme.objectives.map((obj, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tópicos Abordados */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Tópicos Abordados:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {theme.topics.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                          <span className="line-clamp-1">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-slate-500 italic">
                    {theme.durationNote}
                  </span>
                  <Link
                    href={`/contato/palestras?tema=${encodeURIComponent(theme.title)}`}
                    className="min-h-[44px] inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900"
                  >
                    <span>Solicitar tema</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. HISTÓRICO DE APRESENTAÇÕES */}
        <section className="py-12 border-b border-slate-100 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              EXPERIÊNCIA COMPROVADA
            </span>
            <h2 className="text-2xl font-bold text-slate-950">
              Apresentações & Conferências Realizadas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SPEAKING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
                  <span className="text-sky-700 font-bold uppercase">{event.type}</span>
                  <span>{event.year}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-950">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {event.event}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INSTRUTOR */}
        <section className="py-12 border-b border-slate-100">
          <ProductInstructor />
        </section>

        {/* CTA FINAL */}
        <section className="my-10 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase text-sky-400">DISPONIBILIDADE DE AGENDA</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Planejando seu próximo congresso ou evento institucional?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Consulte disponibilidades de data e formato de participação presencial ou remota para eventos acadêmicos, corporativos e setoriais.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/contato/palestras"
              className="min-h-[44px] px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
            >
              <span>Solicitar Palestra</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

      {/* Sticky Bottom CTA no iPhone */}
      <MobileStickyCta
        buttonText="Solicitar Palestra"
        targetId="temas"
        badge="Palestra & Eventos"
      />
    </div>
  );
}
