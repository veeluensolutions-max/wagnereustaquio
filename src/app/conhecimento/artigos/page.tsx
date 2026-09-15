"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ARTICLES_DATA, ArticleCategory } from "@/data/articles";
import { FileText, Search, ArrowRight, Clock, Tag, Sparkles } from "lucide-react";

export default function ArtigosIndexPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");

  const categories = [
    { key: "todas", label: "Todas as Categorias" },
    { key: "ia", label: "Inteligência Artificial" },
    { key: "modelagem", label: "Modelagem Atmosférica" },
    { key: "emissoes", label: "Emissões & Chaminés" },
    { key: "seguranca", label: "Segurança de Processos" },
    { key: "engenharia", label: "Engenharia de Processos" },
    { key: "meio-ambiente", label: "Meio Ambiente" },
    { key: "decisao", label: "Tomada de Decisão" },
  ];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCategory = selectedCategory === "todas" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Artigos Técnicos" },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <FileText className="w-3.5 h-3.5" />
            <span>SISTEMA EDITORIAL</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Artigos Técnicos e Análises Fundamentadas
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            Textos autorais desenvolvidos para engenheiros, pesquisadores e gestores técnicos que buscam rigor científico aplicado à prática industrial.
          </p>
        </header>

        {/* Barra de Busca e Filtros */}
        <div className="py-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por título, conceito ou tecnologia (ex: fuzzy, AERMOD, NR-13)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-body focus:outline-none focus:border-sky-500 shadow-2xs transition-colors min-h-[44px]"
            />
          </div>

          {/* Abas de Categoria */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-body font-medium transition-all cursor-pointer min-h-[44px] ${
                  selectedCategory === cat.key
                    ? "bg-slate-950 text-white shadow-xs"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Artigos */}
        <div className="py-6 space-y-5">
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 text-slate-500 font-body text-sm">
              Nenhum artigo encontrado para os critérios de busca selecionados.
            </div>
          ) : (
            filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200/50 uppercase tracking-wider">
                        {art.categoryLabel}
                      </span>
                      <span className="font-body text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 uppercase">
                        DRAFT
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-body text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{art.readTime}</span>
                      </span>
                    </div>
                  </div>

                  <h2 className="font-heading font-[650] text-xl sm:text-2xl text-slate-950 tracking-[-0.02em] group-hover:text-sky-900 transition-colors mb-2 leading-snug">
                    <Link href={`/conhecimento/artigos/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h2>

                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {art.subtitle || art.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {art.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-body text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-body text-slate-400 font-medium">
                    Autor: Prof. Dr. Wagner Eustáquio de Vasconcelos
                  </span>

                  <Link
                    href={`/conhecimento/artigos/${art.slug}`}
                    className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1.5 min-h-[44px]"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
