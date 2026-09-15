import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { 
  FileText, 
  Award, 
  BookOpen, 
  FlaskConical, 
  Mic, 
  ArrowRight, 
  Sparkles,
  Layers,
  Calendar,
  ExternalLink
} from "lucide-react";
import { ARTICLES_DATA } from "@/data/articles";
import { SCIENTIFIC_PUBLICATIONS } from "@/data/publications";
import { PUBLISHED_BOOK } from "@/data/book";
import { RESEARCH_PROJECTS } from "@/data/researchProjects";
import { SPEAKING_EVENTS } from "@/data/speaking";

export const metadata: Metadata = {
  title: "Conhecimento, Pesquisa e Produção Intelectual | Prof. Dr. Wagner Eustáquio",
  description:
    "Conteúdos, publicações científicas, pesquisas, livros e palestras que conectam Engenharia, Inteligência Artificial, Meio Ambiente, Segurança de Processos e tomada de decisão.",
  alternates: {
    canonical: "/conhecimento",
  },
};

export default function ConhecimentoHubPage() {
  const editorialHubs = [
    {
      id: "artigos",
      title: "Artigos Técnicos e Análises",
      href: "/conhecimento/artigos",
      icon: FileText,
      count: `${ARTICLES_DATA.length} artigos estruturados`,
      description: "Artigos aprofundados sobre Inteligência Artificial, Lógica Fuzzy, AERMOD, amostragem isocinética e conformidade técnica.",
      cta: "Acessar acervo de artigos",
      recentHighlight: "Inteligência Artificial aplicada à Engenharia: conceitos e aplicações",
    },
    {
      id: "publicacoes",
      title: "Publicações Científicas",
      href: "/conhecimento/publicacoes-cientificas",
      icon: Award,
      count: `${SCIENTIFIC_PUBLICATIONS.length} trabalhos indexados`,
      description: "Artigos em periódicos científicos, anais de congressos nacionais e internacionais registrados na Plataforma Lattes.",
      cta: "Consultar publicações",
      recentHighlight: "Aplicação de Sistemas Neuro-Fuzzy na Predição de Dispersão de Contaminantes",
    },
    {
      id: "livros",
      title: "Livros e Obras Monográficas",
      href: "/conhecimento/livros",
      icon: BookOpen,
      count: "1 obra monográfica de referência (163 p.)",
      description: "Obra autoral publicada em 2010 sobre fundamentos da teoria de conjuntos nebulosos e dispersão ambiental.",
      cta: "Conhecer o livro",
      recentHighlight: PUBLISHED_BOOK.title,
    },
    {
      id: "pesquisas",
      title: "Projetos de Pesquisa",
      href: "/conhecimento/pesquisas",
      icon: FlaskConical,
      count: `${RESEARCH_PROJECTS.length} projetos documentados`,
      description: "Linhas de pesquisa aplicada desenvolvidas em cooperação com UFPE, CNPq e polos industriais regionais.",
      cta: "Explorar linhas de pesquisa",
      recentHighlight: "Lógica Fuzzy Aplicada a Problemas da Área Nuclear",
    },
    {
      id: "palestras",
      title: "Palestras e Conferências",
      href: "/conhecimento/palestras",
      icon: Mic,
      count: `${SPEAKING_EVENTS.length} conferências documentadas`,
      description: "Apresentações magnas, seminários acadêmicos e treinamentos corporativos in-company.",
      cta: "Ver histórico de palestras",
      recentHighlight: "Inteligência Artificial Aplicada à Engenharia e Tomada de Decisão (UFPE)",
    },
  ];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Conhecimento" }]} />

        {/* Hero Principal */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Layers className="w-3.5 h-3.5" />
            <span>CONHECIMENTO</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12] max-w-4xl">
            Pesquisa, experiência e conhecimento aplicado.
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            Conteúdos, publicações, pesquisas e materiais que conectam Engenharia, Inteligência Artificial, Meio Ambiente, Segurança de Processos e tomada de decisão.
          </p>
        </header>

        {/* Grade dos 5 Blocos Editoriais */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editorialHubs.map((hub) => {
            const Icon = hub.icon;

            return (
              <div
                key={hub.id}
                className="p-7 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-800 shadow-2xs group-hover:bg-slate-950 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/50">
                      {hub.count}
                    </span>
                  </div>

                  <h2 className="font-heading font-[650] text-xl text-slate-950 tracking-[-0.02em] mb-2 leading-snug">
                    {hub.title}
                  </h2>

                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {hub.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs font-body text-slate-700 mb-6">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Destaque Editorial:
                    </span>
                    <span className="font-medium text-slate-900 line-clamp-1">
                      {hub.recentHighlight}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={hub.href}
                    className="inline-flex items-center justify-between w-full font-body text-xs sm:text-sm font-semibold text-sky-800 hover:text-sky-950 group-hover:translate-x-0.5 transition-all min-h-[44px]"
                  >
                    <span>{hub.cta}</span>
                    <ArrowRight className="w-4 h-4 text-sky-700 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Seção de Validação Oficial pelo Lattes */}
        <section className="my-8 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-400">
              ORIGEM E RIGOR DOCUMENTAL
            </span>
            <h3 className="font-heading font-semibold text-xl text-white tracking-[-0.02em]">
              Todo o acervo possui respaldo factual na base oficial do CNPq
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl">
              Consulte a íntegra das titulações, bancas examinadoras, orientações de TCC e registros acadêmicos do Prof. Dr. Wagner Eustáquio de Vasconcelos.
            </p>
          </div>
          <Link
            href="/curriculo-lattes"
            className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-body text-xs font-semibold tracking-wide transition-all shrink-0 min-h-[44px] flex items-center justify-center gap-2"
          >
            <span>Ver Lattes Homologado</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </section>

      </div>
    </div>
  );
}
