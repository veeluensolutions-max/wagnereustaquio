import React from "react";
import Link from "next/link";
import { PUBLISHED_BOOK } from "@/data/book";
import { BookOpen, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function BookSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Espaço reservado elegante para a capa real */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[260px] aspect-[3/4.2] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 border-2 border-slate-700 p-6 flex flex-col justify-between shadow-xl text-white relative overflow-hidden">
                {/* Linhas técnicas de circuito no fundo da capa de demonstração */}
                <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center mb-4">
                    <BookOpen className="w-4 h-4 text-sky-300" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block mb-1">
                    Publicação Oficial • 2010
                  </span>
                  <h4 className="text-sm font-bold leading-snug tracking-tight text-white">
                    {PUBLISHED_BOOK.title}
                  </h4>
                </div>

                <div className="relative z-10 pt-4 border-t border-slate-700/80">
                  <p className="text-[11px] font-semibold text-slate-200">
                    Wagner E. de Vasconcelos
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5">
                    {PUBLISHED_BOOK.coverPlaceholderText}
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo sobre a Obra */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-1">
                  LIVRO PUBLICADO
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
                  {PUBLISHED_BOOK.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {PUBLISHED_BOOK.description}
                </p>
              </div>

              {/* Tópicos Abordados */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Eixos fundamentais da obra:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PUBLISHED_BOOK.scope.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA e Aviso Legal */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={PUBLISHED_BOOK.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-950 text-white text-xs font-semibold transition-colors"
                >
                  <span>{PUBLISHED_BOOK.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Obra catalogada e registrada na produção do autor</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
