"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, BookOpen } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Gradientes e luzes de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
          COMPROMISSO COM O IMPACTO REAL
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Conhecimento técnico deve gerar transformação.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore conteúdos, cursos, pesquisas e oportunidades de colaboração técnica, acadêmica e industrial.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/conhecimento"
            onClick={() => trackEvent("select_item", { item_name: "Final CTA Explorar Conteúdos" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-white/10 hover:shadow-xl transition-all text-sm group"
          >
            <BookOpen className="w-4 h-4 text-sky-700" />
            <span>Explorar conteúdos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/contato"
            onClick={() => trackEvent("select_item", { item_name: "Final CTA Contato" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-md transition-all text-sm"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>Entrar em contato</span>
          </Link>
        </div>

        <p className="text-xs text-slate-500 pt-4">
          Atendimento a demandas técnicas, corporativas e institucionais.
        </p>
      </div>
    </section>
  );
}
