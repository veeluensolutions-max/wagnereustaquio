"use client";

import React from "react";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/articles";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORY_COLORS: Record<string, string> = {
  ia: "bg-indigo-50/90 text-indigo-800 border-indigo-200/80",
  engenharia: "bg-sky-50/90 text-sky-800 border-sky-200/80",
  seguranca: "bg-amber-50/90 text-amber-800 border-amber-200/80",
  "meio-ambiente": "bg-emerald-50/90 text-emerald-800 border-emerald-200/80",
  sustentabilidade: "bg-teal-50/90 text-teal-800 border-teal-200/80",
  modelagem: "bg-blue-50/90 text-blue-800 border-blue-200/80",
};

export default function ArticlesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-slate-700 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-700" />
              <span>{t.sections.articlesBadge}</span>
            </div>
            <h2 className="section-h2-token text-3xl sm:text-4xl text-slate-950 mb-3">
              {t.sections.articlesTitle}
            </h2>
            <p className="body-text-token text-slate-600 max-w-2xl">
              {t.footer.summary}
            </p>
          </div>
          <Link
            href="/conhecimento/artigos"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-sky-800 hover:text-sky-950 mt-4 md:mt-0 transition-colors group shrink-0 px-4 py-2 rounded-xl bg-sky-50/60 hover:bg-sky-100/80 border border-sky-200/60"
          >
            <span>{t.sections.articlesCta}</span>
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
                    <span className="font-body text-xs text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Título do Artigo */}
                  <h3 className="card-h3-token text-lg sm:text-[19px] font-semibold text-slate-950 mb-3 group-hover:text-sky-900 transition-colors line-clamp-2">
                    <Link href={`/conhecimento/artigos/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Resumo */}
                  <p className="body-text-token text-sm text-slate-600 line-clamp-3 mb-6 font-normal leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Link de Leitura */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/conhecimento/artigos/${article.slug}`}
                    className="font-body inline-flex items-center gap-1.5 text-xs font-semibold text-sky-850 hover:text-sky-950 group-hover:translate-x-1 transition-all"
                  >
                    <span>{t.common.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-700" />
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
