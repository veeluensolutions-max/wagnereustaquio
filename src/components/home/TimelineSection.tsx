"use client";

import React from "react";
import Link from "next/link";
import { TIMELINE_DATA } from "@/data/timeline";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TimelineSection() {
  const { language } = useLanguage();

  const labels = {
    "pt-BR": {
      badge: "CRONOLOGIA & MARCOS",
      title: "Uma trajetória de evolução contínua.",
      cta: "Ver trajetória completa",
    },
    "en": {
      badge: "CHRONOLOGY & MILESTONES",
      title: "A journey of continuous evolution.",
      cta: "View complete timeline",
    },
    "es": {
      badge: "CRONOLOGÍA E HITOS",
      title: "Una trayectoria de evolución continua.",
      cta: "Ver trayectoria completa",
    },
  };

  const current = labels[language] || labels["pt-BR"];

  return (
    <section className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200/70">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-800 block mb-2">
              {current.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              {current.title}
            </h2>
          </div>
          <Link
            href="/sobre/trajetoria"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-850 hover:text-sky-950 mt-4 md:mt-0 transition-colors group min-h-[44px]"
          >
            <span>{current.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-700" />
          </Link>
        </div>


        {/* Timeline Estruturada e Responsiva */}
        <div className="relative">
          {/* Linha vertical central para telas desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-200" />

          <div className="space-y-8 lg:space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Ponto central na timeline */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-sky-600 shadow-sm items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  </div>

                  {/* Card de Conteúdo */}
                  <div className="w-full lg:w-1/2 lg:px-8">
                    <div
                      className={`p-7 rounded-3xl border transition-all duration-300 ${
                        item.isComplementary
                          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/90 text-white border-sky-500/25 shadow-xl shadow-slate-950/15"
                          : "bg-white text-slate-900 border-slate-200/80 hover:border-sky-300/80 shadow-2xs hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-lg ${
                            item.isComplementary
                              ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                              : "bg-slate-100 text-slate-800 border border-slate-200"
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.year}</span>
                        </span>

                        {item.badge && (
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                              item.isComplementary
                                ? "bg-sky-950/90 text-sky-300 border border-sky-700/60"
                                : "bg-sky-50 text-sky-800 border border-sky-200/80"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-lg font-extrabold tracking-tight mb-1 leading-snug ${
                          item.isComplementary ? "text-white" : "text-slate-950"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-xs font-bold mb-3 ${
                          item.isComplementary ? "text-sky-300" : "text-sky-850"
                        }`}
                      >
                        {item.institution}
                      </p>

                      <p
                        className={`text-xs leading-relaxed font-normal ${
                          item.isComplementary ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Espaçador para o outro lado no desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Rodapé da Timeline */}
        <div className="text-center mt-14 pt-6">
          <Link
            href="/sobre/trajetoria"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all min-h-[48px]"
          >
            <span>Ver trajetória completa e detalhada</span>
            <ArrowRight className="w-4 h-4 text-sky-700" />
          </Link>
        </div>

      </div>
    </section>
  );
}
