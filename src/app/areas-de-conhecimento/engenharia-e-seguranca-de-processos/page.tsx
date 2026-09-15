import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ShieldAlert, ArrowRight, CheckCircle2, ShieldCheck, Wrench, AlertTriangle } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";
import SpecialtyDiagram from "@/components/knowledge/SpecialtyDiagram";
import FutureProductCard from "@/components/knowledge/FutureProductCard";

export const metadata: Metadata = {
  title: "Engenharia e Segurança de Processos | Prof. Dr. Wagner Eustáquio",
  description:
    "Segurança, confiabilidade e integridade aplicadas a processos e equipamentos industriais. Conhecimento técnico e pericial em NR-13, HAZOP e mitigação de riscos.",
  alternates: {
    canonical: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
  },
};

export default function EngenhariaSegurancaPage() {
  const specialties = [
    {
      title: "Segurança de Processos Industriais",
      slug: "seguranca-de-processos",
      description: "Identificação de perigos, análise de camadas de proteção (LOPA) e gestão de integridade mecânica.",
    },
    {
      title: "NR-13: Caldeiras e Vasos de Pressão",
      slug: "nr-13",
      description: "Inspeção compulsória de conformidade técnica e legal, ensaios não destrutivos e reconstituição de prontuários.",
    },
    {
      title: "Tomada de Decisão em Ambientes Críticos",
      slug: "tomada-de-decisao",
      description: "Métodos multicritério para priorização de intervenções em paradas de manutenção e gestão de ativos de alto risco.",
    },
  ];

  const practicalApplications = [
    "Condução e facilitação de análises de perigo e operabilidade (HAZOP) em plantas químicas",
    "Inspeção periódica e extraordinária de conformidade com a NR-13 para caldeiras e vasos de pressão",
    "Determinação de espessura mínima por ultrassom e cálculo de vida útil residual de tubulações",
    "Elaboração de laudos periciais de engenharia mecânica e segurança do trabalho",
  ];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Áreas de Conhecimento", href: "/areas-de-conhecimento" },
            { label: "Engenharia & Segurança de Processos" },
          ]}
        />

        {/* 1. Hero */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>ÁREA DE CONHECIMENTO 02</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Engenharia e Segurança de Processos
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            Segurança, confiabilidade e integridade aplicadas a processos e equipamentos industriais.
          </p>
        </header>

        {/* 2. Contexto da Área */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            CONFIABILIDADE & PREVENÇÃO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            A integridade física como premissa intransigente
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            Em plantas industriais de processamento contínuo — como refinarias, usinas químicas, fábricas de papel e celulose e terminais de combustíveis —, a retenção segura de fluidos pressurizados, inflamáveis ou tóxicos é o requisito mais crítico da operação. Uma falha de integridade mecânica pode resultar em perdas humanas, catástrofes ambientais e paradas não programadas com prejuízos na casa de milhões de reais.
          </p>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            A engenharia de segurança de processos estrutura barreiras independentes de proteção física e operacional, assegurando que os equipamentos trabalhem estritamente dentro dos envelopes seguros de pressão e temperatura projetados segundo as normas ASME, API e normas regulamentadoras nacionais.
          </p>
        </section>

        {/* 3. Diagrama Visual */}
        <SpecialtyDiagram type="seguranca" />

        {/* 4. Relação de Wagner com o Tema */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            ATUAÇÃO PROFISSIONAL
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Prática de campo, docência e perícias de engenharia
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            Wagner Eustáquio de Vasconcelos combina a sólida formação teórica de Doutor em Engenharia Química com a especialização em Engenharia de Segurança do Trabalho (UFPE). Ao longo de sua carreira, atuou diretamente em inspeções de conformidade de caldeiras e vasos de pressão como Profissional Habilitado (PH) pela NR-13, além de ministrar disciplinas de segurança de processos e termodinâmica na graduação e pós-graduação.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Profissional Habilitado (PH) para cumprimento da NR-13",
              "Condução de ensaios não destrutivos (ultrassom e partículas)",
              "Reconstituição de prontuários técnicos e livros de registro",
              "Perito assistente em processos judiciais e auditorias industriais",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-body text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Especialidades Relacionadas */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="mb-6">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
              DISCIPLINAS CONECTADAS
            </span>
            <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
              Especialidades deste Território
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {specialties.map((spec) => (
              <div
                key={spec.slug}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-heading font-semibold text-base text-slate-950 mb-2 group-hover:text-sky-900 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="font-body text-xs text-slate-600 leading-relaxed mb-4">
                    {spec.description}
                  </p>
                </div>
                <Link
                  href={`/especialidades/${spec.slug}`}
                  className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px] pt-2"
                >
                  <span>Acessar especialidade</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Aplicações Práticas */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            ENGENHARIA NA PRÁTICA
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Aplicações Industriais e Periciais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practicalApplications.map((app, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-body text-slate-700">
                {app}
              </div>
            ))}
          </div>
        </section>

        {/* 7. Produtos Futuros */}
        <FutureProductCard
          product={{
            title: "Guia Prático de Gestão da NR-13",
            subtitle: "Modelos de Laudo, Checklists de Campo e Cálculos de Espessura Mínima",
            description: "Material de referência para engenheiros mecânicos e químicos atuarem com segurança jurídica e rigor técnico na conformidade de caldeiras e vasos sob pressão.",
            tag: "Em desenvolvimento",
          }}
          specialtySlug="nr-13"
        />

        {/* 8. AuthorBox */}
        <AuthorBox />

        {/* 9. Navegação entre Áreas */}
        <div className="py-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/areas-de-conhecimento/inteligencia-artificial"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Área Anterior: IA & Dados
          </Link>
          <Link
            href="/areas-de-conhecimento/meio-ambiente-e-sustentabilidade"
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>Próxima Área: Meio Ambiente & Sustentabilidade</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
