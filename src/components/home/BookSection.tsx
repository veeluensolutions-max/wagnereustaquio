"use client";

import React from "react";
import Link from "next/link";
import { PUBLISHED_BOOK } from "@/data/book";
import { BookOpen, Check, ArrowRight, ShieldCheck, Bookmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-sm relative overflow-hidden">
          {/* Luz de fundo sutil */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Mockup 3D Tridimensional do Livro Físico */}
            <div className="lg:col-span-5 flex justify-center perspective-1000 py-4">
              <div className="relative w-full max-w-[280px] aspect-[3/4.4] rounded-r-2xl rounded-l-md bg-gradient-to-br from-slate-950 via-[#0a182c] to-[#040e1d] p-6 flex flex-col justify-between book-3d-shadow text-white transform hover:rotate-y-[-6deg] hover:scale-[1.02] transition-all duration-500 cursor-pointer group">
                
                {/* Efeito de lombada do livro (borda esquerda iluminada) */}
                <div className="absolute left-0 inset-y-0 w-4 bg-gradient-to-r from-white/10 via-transparent to-black/40 rounded-l-md pointer-events-none" />
                <div className="absolute left-4 inset-y-0 w-px bg-white/10 pointer-events-none" />

                {/* Páginas do livro visíveis na lateral direita */}
                <div className="absolute -right-2 top-2 bottom-2 w-2 bg-gradient-to-r from-slate-200 via-amber-50 to-slate-300 rounded-r-xs shadow-md pointer-events-none" />

                {/* Grade técnica de circuito suave */}
                <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

                {/* Topo da Capa */}
                <div className="relative z-10 pl-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
                      <Bookmark className="w-4 h-4" />
                    </div>
                    <span className="text-[9.5px] font-mono uppercase tracking-widest text-sky-300 bg-sky-950/70 px-2 py-0.5 rounded border border-sky-800/60">
                      2010 • ISBN
                    </span>
                  </div>

                  <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-sky-400 block mb-1.5">
                    {t.sections.bookBadge}
                  </span>
                  <h4 className="font-heading font-[650] text-base leading-snug tracking-tight text-white drop-shadow-sm group-hover:text-sky-200 transition-colors">
                    {PUBLISHED_BOOK.title}
                  </h4>
                </div>

                {/* Rodapé da Capa */}
                <div className="relative z-10 pl-2 pt-4 border-t border-slate-700/60">
                  <p className="font-heading font-semibold text-xs text-slate-100">
                    Prof. Dr. Wagner Eustáquio de Vasconcelos
                  </p>
                  <p className="font-body text-[10px] text-slate-400 mt-0.5">
                    Modelagem Nebulosa em Problemas Ambientais
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo Editorial sobre a Obra */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800 mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-sky-700" />
                  <span>{t.sections.bookBadge}</span>
                </div>
                <h2 className="section-h2-token text-2xl sm:text-3xl lg:text-4xl text-slate-950 mb-3">
                  {PUBLISHED_BOOK.title}
                </h2>
                <p className="body-text-token text-slate-600 leading-relaxed">
                  {PUBLISHED_BOOK.description}
                </p>
              </div>

              {/* Eixos da Obra com Checkmarks Esmeralda */}
              <div className="space-y-2.5 pt-1">
                <p className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-500">
                  {t.common.readMore}:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PUBLISHED_BOOK.scope.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-700">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA e Validação */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={PUBLISHED_BOOK.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-sky-950 active:bg-slate-950 text-white text-xs font-heading font-semibold transition-all group shadow-md shadow-slate-900/15"
                >
                  <span>{t.sections.bookCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-body">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{t.footer.verifiedData}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
