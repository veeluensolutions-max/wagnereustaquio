import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  DETAILED_COURSES,
  DETAILED_EBOOKS,
  DETAILED_TOOLS,
  DETAILED_MENTORINGS,
  DETAILED_TRAININGS,
  FEATURED_COURSE_IN_DEVELOPMENT,
} from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import {
  GraduationCap,
  BookOpen,
  Wrench,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Produtos, Cursos e Recursos Técnicos | Prof. Dr. Wagner Eustáquio",
  description:
    "Cursos, materiais didáticos, ferramentas de cálculo e mentorias para profissionais de Engenharia, Inteligência Artificial, Modelagem e Segurança de Processos.",
  alternates: {
    canonical: "/produtos",
  },
  openGraph: {
    title: "Produtos, Cursos e Recursos Técnicos | Prof. Dr. Wagner Eustáquio",
    description:
      "Conhecimento técnico transformado em aplicação prática. Formações, e-books e recursos com rigor acadêmico e validação industrial.",
    type: "website",
  },
};

export default function ProdutosHubPage() {
  return (
    <div className="py-12 bg-gradient-to-b from-white via-slate-50/40 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Produtos & Formação" }]} />

        {/* Cabeçalho da Página */}
        <div className="py-8 sm:py-10 border-b border-slate-200/80 space-y-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800 shadow-2xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              <span>APRENDIZAGEM & APLICAÇÃO PRÁTICA</span>
            </div>
          </div>
          <h1 className="hero-h1-token text-slate-950 max-w-4xl">
            Conhecimento técnico transformado em aplicação prática.
          </h1>
          <p className="body-text-token text-slate-600 max-w-3xl">
            Cursos, materiais, ferramentas e experiências de aprendizagem para profissionais que desejam aprofundar conhecimentos em Engenharia, Inteligência Artificial, Modelagem, Meio Ambiente e Segurança de Processos.
          </p>
        </div>

        {/* Banner do Curso Principal em Destaque (Estética VIP Futurista) */}
        <div className="my-10 sm:my-12 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#061224] via-[#091830] to-[#040c1a] text-white border border-sky-500/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Luz aurora difusa */}
          <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-heading font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5" />
              <span>{FEATURED_COURSE_IN_DEVELOPMENT.badge}</span>
            </div>
            
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              {FEATURED_COURSE_IN_DEVELOPMENT.title}
            </h2>
            
            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {FEATURED_COURSE_IN_DEVELOPMENT.headline} {FEATURED_COURSE_IN_DEVELOPMENT.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-heading font-semibold text-sky-300 pt-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-800/50">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                8 Módulos Práticos
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-800/50">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                Sem Caixas-Pretas
              </span>
              <span className="text-slate-400 font-body font-normal">• Turma Piloto em Estruturação</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 relative z-10">
            <Link
              href={`/produtos/cursos/${FEATURED_COURSE_IN_DEVELOPMENT.slug}`}
              className="min-h-[48px] px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20 group text-center cursor-pointer"
            >
              <span>Conhecer a Formação</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/conhecimento/artigos"
              className="min-h-[48px] px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-heading font-semibold text-xs flex items-center justify-center transition-all text-center cursor-pointer hover:border-slate-600"
            >
              Explorar Artigos
            </Link>
          </div>
        </div>

        {/* 1. Bloco Cursos */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 to-slate-100 border border-sky-200/80 text-sky-800 flex items-center justify-center shadow-2xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="section-h2-token text-xl sm:text-2xl text-slate-950">
                  Cursos & Formações Continuadas
                </h2>
              </div>
              <p className="body-text-token text-slate-600 text-xs sm:text-sm">
                Programas profundos combinando teoria matemática, modelagem computacional e casos industriais reais.
              </p>
            </div>
            <Link
              href="/produtos/cursos"
              className="text-xs font-heading font-semibold text-sky-700 hover:text-sky-950 inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-sky-50/80 hover:bg-sky-100 border border-sky-200/60 transition-colors group"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {DETAILED_COURSES.map((curso) => (
              <ProductCard key={curso.id} product={curso} basePath="/produtos/cursos" />
            ))}
          </div>
        </section>

        {/* 2. Bloco E-books */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 to-slate-100 border border-sky-200/80 text-sky-800 flex items-center justify-center shadow-2xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="section-h2-token text-xl sm:text-2xl text-slate-950">
                  E-books & Manuais Técnicos
                </h2>
              </div>
              <p className="body-text-token text-slate-600 text-xs sm:text-sm">
                Guias objetivos para consulta ágil no dia a dia da bancada, simulações e projetos regulatórios.
              </p>
            </div>
            <Link
              href="/produtos/ebooks"
              className="text-xs font-heading font-semibold text-sky-700 hover:text-sky-950 inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-sky-50/80 hover:bg-sky-100 border border-sky-200/60 transition-colors group"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DETAILED_EBOOKS.map((ebook) => (
              <ProductCard key={ebook.id} product={ebook} basePath="/produtos/ebooks" />
            ))}
          </div>
        </section>

        {/* 3. Bloco Ferramentas */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 to-slate-100 border border-sky-200/80 text-sky-800 flex items-center justify-center shadow-2xs">
                  <Wrench className="w-5 h-5" />
                </div>
                <h2 className="section-h2-token text-xl sm:text-2xl text-slate-950">
                  Ferramentas, Planilhas & Modelos de Cálculo
                </h2>
              </div>
              <p className="body-text-token text-slate-600 text-xs sm:text-sm">
                Recursos práticos para aceleração de análises de engenharia com confiabilidade de cálculo e conformidade.
              </p>
            </div>
            <Link
              href="/produtos/ferramentas"
              className="text-xs font-heading font-semibold text-sky-700 hover:text-sky-950 inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-sky-50/80 hover:bg-sky-100 border border-sky-200/60 transition-colors group"
            >
              <span>Ver todas</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DETAILED_TOOLS.map((tool) => (
              <ProductCard key={tool.id} product={tool} basePath="/produtos/ferramentas" />
            ))}
          </div>
        </section>

        {/* 4. Bloco Mentorias */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 to-slate-100 border border-sky-200/80 text-sky-800 flex items-center justify-center shadow-2xs">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="section-h2-token text-xl sm:text-2xl text-slate-950">
                  Mentorias Técnicas & Acompanhamento
                </h2>
              </div>
              <p className="body-text-token text-slate-600 text-xs sm:text-sm">
                Acompanhamento individual direto com o Prof. Wagner para aceleração de carreira e resolução de desafios técnicos complexos.
              </p>
            </div>
            <Link
              href="/produtos/mentorias"
              className="text-xs font-heading font-semibold text-sky-700 hover:text-sky-950 inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-sky-50/80 hover:bg-sky-100 border border-sky-200/60 transition-colors group"
            >
              <span>Saiba mais</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {DETAILED_MENTORINGS.map((mentoria) => (
              <ProductCard key={mentoria.id} product={mentoria} basePath="/produtos/mentorias" />
            ))}
          </div>
        </section>

        {/* 5. Bloco Corporativo: Treinamentos & Palestras */}
        <section className="py-12">
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#07172e] via-[#091f3d] to-[#051122] text-white border border-sky-500/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/20 text-sky-300 text-xs font-heading font-semibold uppercase tracking-wider border border-sky-500/30">
                <Briefcase className="w-3.5 h-3.5" />
                <span>SOLUÇÕES CORPORATIVAS & IN-COMPANY</span>
              </div>
              <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Treinamentos Corporativos & Palestras Técnicas
              </h2>
              <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                Capacite sua equipe com treinamentos fechados em IA na Engenharia, Lógica Fuzzy, Segurança de Processos (PSM / NR-13) e Modelagem de Dispersão Atmosférica customizados para os desafios reais da sua planta industrial.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto relative z-10">
              <Link
                href="/produtos/treinamentos"
                className="min-h-[48px] px-7 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20 text-center cursor-pointer group"
              >
                <span>Solicitar Proposta In-Company</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
