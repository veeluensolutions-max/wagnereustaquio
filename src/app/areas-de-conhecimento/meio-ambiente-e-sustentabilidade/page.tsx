import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Leaf, ArrowRight, CheckCircle2, Wind, CloudFog, BarChart3 } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";
import SpecialtyDiagram from "@/components/knowledge/SpecialtyDiagram";
import FutureProductCard from "@/components/knowledge/FutureProductCard";

export const metadata: Metadata = {
  title: "Meio Ambiente, Monitoramento e Sustentabilidade | Prof. Dr. Wagner Eustáquio",
  description:
    "Engenharia aplicada à avaliação, monitoramento e controle de impactos ambientais. Emissões atmosféricas, amostragem isocinética e modelagem AERMOD.",
  alternates: {
    canonical: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
  },
};

export default function MeioAmbientePage() {
  const specialties = [
    {
      title: "Emissões Atmosféricas Industriais",
      slug: "emissoes-atmosfericas",
      description: "Inventários de fontes poluidoras, balanços de queima e tecnologias de abatimento de gases e particulados.",
    },
    {
      title: "Amostragem Isocinética de Chaminés",
      slug: "amostragem-isocinetica",
      description: "Medição de campo com sonda alinhada segundo normas ABNT e EPA 5 para taxa real de material particulado.",
    },
    {
      title: "Modelagem de Dispersão Atmosférica",
      slug: "modelagem-de-dispersao-atmosferica",
      description: "Simulação computacional do transporte, diluição e deposição de poluentes com base na micrometeorologia.",
    },
    {
      title: "Modelo Regulatório AERMOD",
      slug: "aermod",
      description: "Sistema padrão EPA para fontes industriais complexas integrando processamento AERMET e relevo AERMAP.",
    },
    {
      title: "Monitoramento e Qualidade do Ar",
      slug: "qualidade-do-ar",
      description: "Avaliação do Índice de Qualidade do Ar (IQAr), material particulado (PM10/PM2.5) e normas CONAMA 491.",
    },
  ];

  const practicalApplications = [
    "Estudos de dispersão de poluentes com AERMOD para licenciamento de indústrias e termelétricas",
    "Campanhas de amostragem isocinética em chaminés de caldeiras, fornos e secadores industriais",
    "Elaboração de inventários de emissões para relatórios de sustentabilidade e órgãos ambientais",
    "Diagnóstico e otimização de sistemas de filtração e lavadores de gases industriais",
  ];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Áreas de Conhecimento", href: "/areas-de-conhecimento" },
            { label: "Meio Ambiente & Sustentabilidade" },
          ]}
        />

        {/* 1. Hero */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Leaf className="w-3.5 h-3.5" />
            <span>ÁREA DE CONHECIMENTO 03</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Meio Ambiente, Monitoramento e Sustentabilidade
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            Engenharia aplicada à avaliação, monitoramento e controle de impactos ambientais.
          </p>
        </header>

        {/* 2. Contexto da Área */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            RIGOR METROLÓGICO & COMPLIANCE
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Da medição no duto à proteção do ar que respiramos
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            A gestão ambiental na indústria moderna não pode ser orientada por estimativas vagas. Ela exige dados metrológicos comprováveis, amostragem representativa em chaminés e modelagens matemáticas de dispersão atmosférica capazes de reproduzir com exatidão como os efluentes gasosos interagem com o vento, o relevo e as comunidades circunvizinhas.
          </p>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            A convergência entre a coleta física de dados em campo e a simulação computacional permite às indústrias dimensionar sistemas de abatimento economicamente viáveis, atender às condicionantes dos órgãos ambientais e mitigar riscos de autuações e paralisações operacionais.
          </p>
        </section>

        {/* 3. Diagrama Visual */}
        <SpecialtyDiagram type="dispersao" />

        {/* 4. Relação de Wagner com o Tema */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            PESQUISA & EXPERIÊNCIA DE CAMPO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Pesquisas em dispersão e vivência em monitoramento ambiental
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            Ao longo de suas pesquisas na pós-graduação e projetos de extensão na UFPE, Wagner desenvolveu modelos de dispersão aplicados a poluentes atmosféricos e radiação ambiental, culminando em artigos internacionais e livro técnico publicado. Em campo, coordenou e participou de campanhas de amostragem isocinética de chaminés e estudos de impacto com o sistema AERMOD para indústrias de diversos portes no Nordeste e outras regiões do país.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Modelagem com o sistema regulatório US-EPA AERMOD",
              "Amostragem isocinética conforme ABNT NBR 12019 e EPA 5",
              "Inventários de emissões atmosféricas e queima de biomassa",
              "Avaliação de conformidade com a Resolução CONAMA 491/2018",
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
              CAMADA DE ESPECIALIZAÇÃO
            </span>
            <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
              Especialidades deste Território
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            Aplicações Industriais e Ambientais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practicalApplications.map((app, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-body text-slate-700">
                {app}
              </div>
            ))}
          </div>
        </section>

        {/* 7. Conteúdo Selecionado */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="mb-4">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
              CONHECIMENTO PUBLICADO
            </span>
            <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
              Artigo em Destaque
            </h2>
          </div>

          <Link
            href="/conhecimento/artigos/como-funciona-modelagem-de-dispersao-atmosferica"
            className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 block transition-all shadow-2xs group"
          >
            <span className="font-body text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200/50 inline-block mb-2">
              DISPERSÃO ATMOSFÉRICA
            </span>
            <h3 className="font-heading font-semibold text-base sm:text-lg text-slate-950 group-hover:text-sky-900 transition-colors">
              Como funciona a Modelagem de Dispersão Atmosférica
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2">
              Da formulação matemática gaussiana aos processadores meteorológicos do AERMOD: como estimar com precisão o impacto das emissões no solo.
            </p>
          </Link>
        </section>

        {/* 8. Produtos Futuros */}
        <FutureProductCard
          product={{
            title: "Curso de Introdução ao AERMOD",
            subtitle: "Modelagem de Dispersão Aplicada ao Licenciamento Ambiental",
            description: "Aprenda a pré-processar dados no AERMET, configurar terreno no AERMAP e interpretar manchas de isoconcentração para laudos periciais e relatórios de impacto.",
            tag: "Em desenvolvimento",
          }}
          specialtySlug="aermod"
        />

        {/* 9. AuthorBox */}
        <AuthorBox />

        {/* 10. Navegação entre Áreas */}
        <div className="py-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/areas-de-conhecimento/engenharia-e-seguranca-de-processos"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Área Anterior: Engenharia & Segurança
          </Link>
          <Link
            href="/areas-de-conhecimento/educacao-e-desenvolvimento"
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>Próxima Área: Educação & Desenvolvimento</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
