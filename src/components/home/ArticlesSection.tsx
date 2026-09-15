import React from "react";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/articles";
import { ArrowRight, Clock, FileText, User } from "lucide-react";

export default function ArticlesSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-2">
              CONHECIMENTO TÉCNICO & EDITORIAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-2">
              Conhecimento para quem quer compreender antes de aplicar.
            </h2>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Artigos, estudos e conteúdos sobre Engenharia, Inteligência Artificial, Meio Ambiente e Processos Industriais.
            </p>
          </div>
          <Link
            href="/conhecimento/artigos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 hover:text-sky-900 mt-4 md:mt-0 transition-colors group shrink-0"
          >
            <span>Ver todos os artigos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid dos 6 Artigos Iniciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Metadados: Categoria e Leitura */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs">
                  <span className="font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-100">
                    {article.categoryLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Título do Artigo */}
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-sky-900 transition-colors mb-2.5 leading-snug">
                  <Link href={`/conhecimento/artigos/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Rodapé do Card Editorial */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate max-w-[170px]">Prof. Dr. Wagner Vasconcelos</span>
                </div>

                <Link
                  href={`/conhecimento/artigos/${article.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
