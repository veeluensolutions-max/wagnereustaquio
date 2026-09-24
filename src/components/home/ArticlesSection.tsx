import React from "react";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/articles";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  ia: "bg-indigo-50/90 text-indigo-800 border-indigo-200/80",
  engenharia: "bg-sky-50/90 text-sky-800 border-sky-200/80",
  seguranca: "bg-amber-50/90 text-amber-800 border-amber-200/80",
  "meio-ambiente": "bg-emerald-50/90 text-emerald-800 border-emerald-200/80",
  sustentabilidade: "bg-teal-50/90 text-teal-800 border-teal-200/80",
  modelagem: "bg-blue-50/90 text-blue-800 border-blue-200/80",
};

export default function ArticlesSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-slate-700 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-700" />
              <span>CONHECIMENTO TÉCNICO & EDITORIAL</span>
            </div>
            <h2 className="section-h2-token text-3xl sm:text-4xl text-slate-950 mb-3">
              Conhecimento para quem quer compreender antes de aplicar.
            </h2>
            <p className="body-text-token text-slate-600 max-w-2xl">
              Artigos, estudos e conteúdos aprofundados sobre Engenharia, Inteligência Artificial, Meio Ambiente e Processos Industriais.
            </p>
          </div>
          <Link
            href="/conhecimento/artigos"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-sky-800 hover:text-sky-950 mt-4 md:mt-0 transition-colors group shrink-0 px-4 py-2 rounded-xl bg-sky-50/60 hover:bg-sky-100/80 border border-sky-200/60"
          >
            <span>Ver acervo completo de artigos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Grid dos Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {ARTICLES_DATA.map((article) => {
            const categoryClass = CATEGORY_COLORS[article.category] || "bg-slate-50 text-slate-700 border-slate-200";

            return (
              <article
                key={article.slug}
                className="card-elevation-hover relative overflow-hidden bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-300/80 shadow-[0_4px_24px_rgba(15,23,42,0.03)] flex flex-col justify-between group"
              >
                {/* Linha superior de destaque translúcido no hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 via-sky-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Metadados: Categoria e Tempo de Leitura */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`font-body text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${categoryClass}`}>
                      {article.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11.5px] font-body font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Título do Artigo */}
                  <h3 className="card-title-token text-lg text-slate-950 group-hover:text-sky-900 transition-colors mb-3 leading-snug">
                    <Link href={`/conhecimento/artigos/${article.slug}`} className="focus:outline-none">
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Rodapé do Card Editorial */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-[10px] font-heading font-bold text-sky-800 shrink-0">
                      W
                    </div>
                    <span className="truncate max-w-[150px] font-body font-medium">Prof. Dr. Wagner</span>
                  </div>

                  <Link
                    href={`/conhecimento/artigos/${article.slug}`}
                    className="inline-flex items-center gap-1 font-heading font-semibold text-sky-700 hover:text-sky-950 group-hover:translate-x-1 transition-all"
                  >
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

