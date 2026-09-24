"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, BookOpen } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/context/LanguageContext";

export default function FinalCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Gradientes e luzes de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block font-body">
          {t.sections.finalCtaBadge}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
          {t.sections.finalCtaTitle}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
          {t.sections.finalCtaDesc}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contato"
            onClick={() => trackEvent("select_item", { item_name: "Final CTA Contato" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-white/10 hover:shadow-xl transition-all text-sm group"
          >
            <Mail className="w-4 h-4 text-sky-700" />
            <span>{t.sections.finalCtaButton}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/areas-de-conhecimento"
            onClick={() => trackEvent("select_item", { item_name: "Final CTA Especialidades" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-md transition-all text-sm"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>{t.sections.finalCtaSecondary}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
