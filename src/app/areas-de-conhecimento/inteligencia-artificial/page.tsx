import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Cpu, ArrowRight, Sparkles, BookOpen, Layers, ExternalLink, CheckCircle2 } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";
import SpecialtyDiagram from "@/components/knowledge/SpecialtyDiagram";
import FutureProductCard from "@/components/knowledge/FutureProductCard";

export const metadata: Metadata = {
  title: "Inteligência Artificial & Dados na Engenharia | Prof. Dr. Wagner Eustáquio",
  description:
    "Modelos inteligentes, lógica fuzzy, redes neurais, Data Science e métodos computacionais aplicados à resolução de problemas complexos de Engenharia e tomada de decisão.",
  alternates: {
    canonical: "/areas-de-conhecimento/inteligencia-artificial",
  },
};

export default function InteligenciaArtificialPage() {
  const specialties = [
    {
      title: "Inteligência Artificial na Engenharia",
      slug: "inteligencia-artificial-na-engenharia",
      description: "Integração de princípios físicos fundamentais com aprendizado de máquina para modelagem e controle de processos.",
    },
    {
      title: "Lógica Fuzzy",
      slug: "logica-fuzzy",
      description: "Modelagem matemática de incertezas, conjuntos nebulosos e sistemas de inferência para ambientes industriais.",
    },
    {
      title: "Redes Neurais Artificiais",
      slug: "redes-neurais",
      description: "Reconhecimento de padrões não lineares, algoritmos preditivos e soft sensors para monitoramento de plantas.",
    },
    {
      title: "Tomada de Decisão",
      slug: "tomada-de-decisao",
      description: "Métodos multicritério quantitativos para priorização de intervenções e alocação de recursos em ativos críticos.",
    },
  ];

  const practicalApplications = [
    "Soft sensors para estimativa em tempo real de variáveis de processo de difícil medição contínua",
    "Otimização energética e controle preditivo em caldeiras e reatores industriais",
    "Modelagem de dispersão de poluentes atmosféricos sob dados meteorológicos variáveis",
    "Matrizes automatizadas de risco e confiabilidade para paradas de manutenção",
  ];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Áreas de Conhecimento", href: "/areas-de-conhecimento" },
            { label: "Inteligência Artificial & Dados" },
          ]}
        />

        {/* 1. Hero da Área */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Cpu className="w-3.5 h-3.5" />
            <span>ÁREA DE CONHECIMENTO 01</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Inteligência Artificial aplicada à Engenharia e à tomada de decisão.
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            Modelos inteligentes, lógica fuzzy, redes neurais, Data Science e métodos computacionais aplicados a problemas de Engenharia.
          </p>
        </header>

        {/* 2. Contexto da Área */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            CONTEXTO & FUNDAMENTAÇÃO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            IA como ferramenta de Engenharia
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            Na Engenharia, a Inteligência Artificial não opera como um recurso genérico de geração de texto ou correlação superficial. Trata-se de uma ferramenta analítica de precisão, concebida para modelar comportamentos dinâmicos severamente não lineares, tratar incertezas inerentes a sensores industriais e viabilizar decisões operacionais em frações de segundo.
          </p>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            Ao incorporar leis de conservação de massa e energia à arquitetura dos modelos computacionais, os sistemas inteligentes garantem previsibilidade e segurança de processos, eliminando o risco de soluções arbitrárias em instalações de alto risco.
          </p>
        </section>

        {/* 3. Bloco Visual Conceitual */}
        <SpecialtyDiagram type="ia" />

        {/* 4. Relação de Wagner com o Tema */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            TRAJETÓRIA & EVIDÊNCIAS
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Pesquisa acadêmica sólida antes do boom comercial
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            A atuação de Wagner Eustáquio de Vasconcelos em Inteligência Artificial possui base acadêmica documentada e homologada pelo CNPq. Muito antes da recente popularização de modelos generativos, sua tese de Doutorado em Engenharia Química na Universidade Federal de Pernambuco (concluída em 2006) desenvolveu modelos computacionais avançados envolvendo:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Lógica fuzzy e teoria de conjuntos nebulosos",
              "Redes neurais e arquiteturas híbridas neuro-fuzzy",
              "Sistemas multicritério de tomada de decisão",
              "Modelagem ambiental sob dados imprecisos",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-body text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            Essa base científica foi expandida com a publicação do livro <em>“Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental”</em> (2010) e atualizada no programa executivo <em>“Designing and Building AI Products and Services”</em> pelo MIT Professional Education (2024).
          </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            Aplicações Industriais e Operacionais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practicalApplications.map((app, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-body text-slate-700">
                {app}
              </div>
            ))}
          </div>
        </section>

        {/* 7. Conteúdos e Artigos Relacionados */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
                CONHECIMENTO PUBLICADO
              </span>
              <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
                Artigos Técnicos Selecionados
              </h2>
            </div>
            <Link
              href="/conhecimento/artigos"
              className="text-xs font-body font-semibold text-sky-800 hover:text-sky-950 hidden sm:inline-flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            <Link
              href="/conhecimento/artigos/7-aplicacoes-praticas-de-inteligencia-artificial-na-engenharia"
              className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 block transition-all shadow-2xs group"
            >
              <span className="font-body text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200/50 inline-block mb-2">
                ARTIGO TÉCNICO
              </span>
              <h3 className="font-heading font-semibold text-base text-slate-950 group-hover:text-sky-900 transition-colors">
                7 Aplicações Práticas de Inteligência Artificial na Engenharia
              </h3>
              <p className="font-body text-xs text-slate-600 mt-1 line-clamp-2">
                Casos reais de utilização de modelos computacionais em processos contínuos, manutenção preditiva e tomada de decisão.
              </p>
            </Link>

            <Link
              href="/conhecimento/artigos/o-que-e-logica-fuzzy-e-como-funciona-na-engenharia"
              className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 block transition-all shadow-2xs group"
            >
              <span className="font-body text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200/50 inline-block mb-2">
                FUNDAMENTOS MATEMÁTICOS
              </span>
              <h3 className="font-heading font-semibold text-base text-slate-950 group-hover:text-sky-900 transition-colors">
                O que é Lógica Fuzzy e como funciona na Engenharia
              </h3>
              <p className="font-body text-xs text-slate-600 mt-1 line-clamp-2">
                Conceito matemático de conjuntos nebulosos, funções de pertinência e aplicações em controle sob incerteza.
              </p>
            </Link>
          </div>
        </section>

        {/* 8. Produtos Futuros */}
        <FutureProductCard
          product={{
            title: "Formação IA Aplicada à Engenharia",
            subtitle: "Modelagem Preditiva e Redes Neurais para Processos Industriais",
            description: "Conteúdo avançado abordando Physics-Informed Neural Networks, soft sensors e controle preditivo com estudos práticos de plantas reais.",
            tag: "Em desenvolvimento",
          }}
          specialtySlug="inteligencia-artificial-na-engenharia"
        />

        {/* 9. AuthorBox */}
        <AuthorBox />

        {/* 10. Links Relacionados & Navegação de Áreas */}
        <div className="py-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/areas-de-conhecimento"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Voltar para Áreas de Conhecimento
          </Link>
          <Link
            href="/areas-de-conhecimento/engenharia-e-seguranca-de-processos"
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>Próxima Área: Engenharia & Segurança</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
