"use client";

import React from "react";
import Link from "next/link";
import { SPEAKING_DATA } from "@/data/speaking";
import { Mic, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function SpeakingSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-2">
              PALESTRAS & TREINAMENTOS CORPORATIVOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
              {SPEAKING_DATA.headline}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {SPEAKING_DATA.description}
            </p>
          </div>

          <Link
            href={SPEAKING_DATA.ctaHref}
            onClick={() => trackEvent("request_speaking", { location: "speaking_section_header" })}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-sky-950 text-white text-xs font-semibold shadow-sm transition-all mt-4 md:mt-0 shrink-0 group"
          >
            <span>{SPEAKING_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid dos 6 Temas Centrais de Palestras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKING_DATA.topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center mb-4">
                  <Mic className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Formatos presencial e online executivo</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
