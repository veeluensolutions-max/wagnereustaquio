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
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Produtos & Formação" }]} />

        {/* Cabeçalho da Página */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            APRENDIZAGEM & APLICAÇÃO
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Conhecimento técnico transformado em aplicação prática.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Cursos, materiais, ferramentas e experiências de aprendizagem para profissionais que desejam aprofundar conhecimentos em Engenharia, Inteligência Artificial, Modelagem, Meio Ambiente e Segurança de Processos.
          </p>
        </div>

        {/* Banner do Curso Principal em Destaque */}
        <div className="my-10 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-sky-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{FEATURED_COURSE_IN_DEVELOPMENT.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {FEATURED_COURSE_IN_DEVELOPMENT.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {FEATURED_COURSE_IN_DEVELOPMENT.headline} {FEATURED_COURSE_IN_DEVELOPMENT.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sky-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-sky-400" />
                8 Módulos Práticos
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Sem Caixas-Pretas
              </span>
              <span className="text-slate-400">• Turma Piloto em Breve</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href={`/produtos/cursos/${FEATURED_COURSE_IN_DEVELOPMENT.slug}`}
              className="min-h-[44px] px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
            >
              <span>Conhecer a Formação</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/conhecimento/artigos"
              className="min-h-[44px] px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center justify-center transition-colors text-center cursor-pointer"
            >
              Explorar Artigos
            </Link>
          </div>
        </div>

        {/* 1. Bloco Cursos */}
        <section className="py-8 border-b border-slate-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Cursos & Formações
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Programas profundos combinando teoria matemática, modelagem computacional e casos industriais reais.
              </p>
            </div>
            <Link
              href="/produtos/cursos"
              className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 shrink-0"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DETAILED_COURSES.map((curso) => (
              <ProductCard key={curso.id} product={curso} basePath="/produtos/cursos" />
            ))}
          </div>
        </section>

        {/* 2. Bloco E-books */}
        <section className="py-8 border-b border-slate-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  E-books & Manuais Técnicos
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Guias objetivos para consulta ágil no dia a dia da bancada, simulações e projetos regulatórios.
              </p>
            </div>
            <Link
              href="/produtos/ebooks"
              className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 shrink-0"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DETAILED_EBOOKS.map((ebook) => (
              <ProductCard key={ebook.id} product={ebook} basePath="/produtos/ebooks" />
            ))}
          </div>
        </section>

        {/* 3. Bloco Ferramentas */}
        <section className="py-8 border-b border-slate-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                  <Wrench className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Ferramentas, Planilhas & Modelos
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Recursos práticos para aceleração de análises de engenharia com confiabilidade de cálculo.
              </p>
            </div>
            <Link
              href="/produtos/ferramentas"
              className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 shrink-0"
            >
              <span>Ver todas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DETAILED_TOOLS.map((tool) => (
              <ProductCard key={tool.id} product={tool} basePath="/produtos/ferramentas" />
            ))}
          </div>
        </section>

        {/* 4. Bloco Mentorias */}
        <section className="py-8 border-b border-slate-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Mentorias Técnicas & Profissionais
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Acompanhamento individual direto com o Prof. Wagner para aceleração de carreira e resolução de desafios técnicos complexos.
              </p>
            </div>
            <Link
              href="/produtos/mentorias"
              className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 shrink-0"
            >
              <span>Saiba mais</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DETAILED_MENTORINGS.map((mentoria) => (
              <ProductCard key={mentoria.id} product={mentoria} basePath="/produtos/mentorias" />
            ))}
          </div>
        </section>

        {/* 5. Bloco Corporativo: Treinamentos & Palestras */}
        <section className="py-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>SOLUÇÕES CORPORATIVAS & IN-COMPANY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Treinamentos Corporativos & Palestras Técnicas
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Capacite sua equipe com treinamentos fechados em IA na Engenharia, Lógica Fuzzy, Segurança de Processos (PSM / NR-13) e Modelagem de Dispersão Atmosférica customizados para os desafios reais da sua empresa.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href="/produtos/treinamentos"
                className="min-h-[44px] px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
              >
                <span>Solicitar Proposta In-Company</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
