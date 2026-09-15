import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { GraduationCap, ArrowRight, CheckCircle2, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";
import FutureProductCard from "@/components/knowledge/FutureProductCard";

export const metadata: Metadata = {
  title: "Educação, Pesquisa e Desenvolvimento Profissional | Prof. Dr. Wagner Eustáquio",
  description:
    "Ensino superior em engenharia, pesquisa aplicada, gestão acadêmica e desenvolvimento de profissionais com metodologias ativas e Lean Six Sigma.",
  alternates: {
    canonical: "/areas-de-conhecimento/educacao-e-desenvolvimento",
  },
};

export default function EducacaoDesenvolvimentoPage() {
  const corePillars = [
    {
      title: "Ensino Superior e Docência em Engenharia",
      description: "Mais de 15 anos dedicados à formação de engenheiros químicos, de produção e ambientais em instituições como UNINASSAU e UFPE.",
      icon: GraduationCap,
    },
    {
      title: "Pesquisa Científica e Extensão Universitária",
      description: "Coordenação e participação em grupos de pesquisa do CNPq, projetos com fomento FAPESP/FACEPE e publicação de artigos em periódicos indexados.",
      icon: BookOpen,
    },
    {
      title: "Melhoria Contínua & Lean Six Sigma",
      description: "Aplicação de métodos de controle estatístico de processos (CEP), DMAIC e eliminação de variabilidade operacional em ambientes industriais.",
      icon: TrendingUp,
    },
    {
      title: "Gestão Acadêmica e Mentoria Técnica",
      description: "Coordenação de cursos de graduação e pós-graduação, estruturação de projetos pedagógicos de curso (PPC) e capacitação corporativa in-company.",
      icon: Users,
    },
  ];

  const practicalApplications = [
    "Formação de centenas de engenheiros atuantes em refinarias, indústrias químicas e consultorias",
    "Desenvolvimento de projetos pedagógicos alinhados às diretrizes curriculares do MEC e CREA",
    "Capacitação corporativa em segurança de processos, normas regulamentadoras e inteligência analítica",
    "Mentoria técnica individual para transição de carreira e aprofundamento acadêmico em pós-graduação",
  ];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Áreas de Conhecimento", href: "/areas-de-conhecimento" },
            { label: "Educação & Desenvolvimento" },
          ]}
        />

        {/* 1. Hero */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ÁREA DE CONHECIMENTO 04</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Educação, Pesquisa e Desenvolvimento Profissional
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            Ensino superior, pesquisa aplicada, formação de profissionais, gestão acadêmica e desenvolvimento técnico contínuo.
          </p>
        </header>

        {/* 2. Contexto da Área */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            FORMAÇÃO DE TALENTOS & MÉTODO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            A transmissão do rigor científico para a nova geração
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            O conhecimento técnico só atinge seu impacto máximo quando é compartilhado, testado e perpetuado. A atuação na docência superior e na formação corporativa constitui um dos pilares mais duradouros da trajetória do Prof. Dr. Wagner Eustáquio de Vasconcelos.
          </p>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            Com mais de uma década e meia lecionando disciplinas analíticas e laboratoriais, sua metodologia pedagógica conecta os conceitos teóricos mais abstratos da termodinâmica e da modelagem matemática com desafios concretos enfrentados diariamente nos parques industriais do país.
          </p>
        </section>

        {/* 3. Pilares de Atuação */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="mb-6">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
              EIXOS ESTRUTURANTES
            </span>
            <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
              Pilares de Formação e Desenvolvimento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-sky-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/50 flex items-center justify-center text-sky-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-slate-950 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Relação de Wagner com o Tema */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            HISTÓRICO ACADÊMICO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Docência superior, orientações e produção bibliográfica
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            Wagner atuou como professor universitário titular e adjunto, orientador de dezenas de trabalhos de conclusão de curso (TCC), projetos de iniciação científica e dissertações. Coordenou colegiados de cursos de engenharia, participou ativamente de avaliações do MEC/INEP e integrou comitês de extensão comunitária.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Docente titular em cursos de Engenharia Química e Ambiental",
              "Autor de livro didático e técnico registrado na Biblioteca Nacional",
              "Instrutor de programas de especialização em Engenharia de Segurança",
              "Facilitador de dinâmicas ativas de aprendizado baseado em problemas (PBL)",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-body text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Aplicações Práticas */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            IMPACTO NA FORMAÇÃO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Resultados na Prática
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practicalApplications.map((app, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-body text-slate-700">
                {app}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Produtos Futuros */}
        <FutureProductCard
          product={{
            title: "Mentoria Técnica para Engenheiros",
            subtitle: "Da Carreira Operacional à Autoridade Consultiva",
            description: "Programa exclusivo de orientação individual focando na transição profissional para perito técnico, consultor independente e liderança em segurança de processos.",
            tag: "Em desenvolvimento",
          }}
          specialtySlug="educacao-e-desenvolvimento"
        />

        {/* 7. AuthorBox */}
        <AuthorBox />

        {/* 8. Navegação entre Áreas */}
        <div className="py-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/areas-de-conhecimento/meio-ambiente-e-sustentabilidade"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Área Anterior: Meio Ambiente
          </Link>
          <Link
            href="/especialidades"
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>Ver Todas as Especialidades</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
