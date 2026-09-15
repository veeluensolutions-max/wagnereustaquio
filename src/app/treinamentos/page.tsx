import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductInstructor from "@/components/products/ProductInstructor";
import MobileStickyCta from "@/components/products/MobileStickyCta";
import {
  Briefcase,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Wind,
  Layers,
  Leaf,
  Settings,
  ArrowRight,
  Factory,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Treinamentos Técnicos | Wagner Eustáquio de Vasconcelos",
  description:
    "Treinamentos técnicos personalizados para equipes e organizações em IA, Segurança de Processos, NR-13, Emissões e AERMOD.",
  alternates: {
    canonical: "/treinamentos",
  },
  openGraph: {
    title: "Treinamentos Técnicos | Wagner Eustáquio de Vasconcelos",
    description:
      "Programas personalizados para profissionais e empresas que precisam aprofundar conhecimentos técnicos e melhorar decisões.",
    type: "website",
  },
};

export default function TreinamentosInstitucionalPage() {
  const trainingThemes = [
    {
      title: "IA aplicada à Engenharia",
      desc: "Modelagem matemática, redes neurais e lógica fuzzy para predição e controle industrial.",
      icon: Cpu,
    },
    {
      title: "Segurança de Processos",
      desc: "Gestão de riscos maiores (PSM), facilitação de HAZOP e camadas de proteção.",
      icon: ShieldCheck,
    },
    {
      title: "NR-13 e Integridade Mecânica",
      desc: "Inspeção de vasos de pressão, caldeiras, taxas de corrosão e conformidade regulatória.",
      icon: Settings,
    },
    {
      title: "Emissões Atmosféricas",
      desc: "Metodologia de inventário de poluentes, fontes estacionárias e amostragem isocinética.",
      icon: Wind,
    },
    {
      title: "Modelagem de Dispersão",
      desc: "Teoria da camada limite atmosférica, pluma de poluentes e dinâmica de dispersão.",
      icon: Layers,
    },
    {
      title: "AERMOD na Prática",
      desc: "Parametrização do AERMET, AERMAP, efeito de esteira predial (PRIME) e relatórios CONAMA.",
      icon: Factory,
    },
    {
      title: "Sustentabilidade Industrial",
      desc: "Balanço quantitativo de massa e energia, conservação de água e ecoeficiência em processos.",
      icon: Leaf,
    },
    {
      title: "Tomada de Decisão Multicritério",
      desc: "Lógica fuzzy e matrizes de julgamento para priorização técnica sob incerteza de dados.",
      icon: Users,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Treinamentos Técnicos" }]} />

        {/* HERO */}
        <div className="py-8 border-b border-slate-200 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            CAPACITAÇÃO EMPRESARIAL & IN-COMPANY
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight max-w-4xl">
            Treinamentos técnicos para equipes e organizações.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Programas personalizados para profissionais e empresas que precisam aprofundar conhecimentos técnicos e melhorar decisões.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="/contato/treinamentos"
              className="min-h-[44px] px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
            >
              <span>Solicitar proposta de treinamento</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#temas"
              className="min-h-[44px] px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center transition-colors text-center cursor-pointer"
            >
              Ver ementas temáticas
            </a>
          </div>
        </div>

        {/* CUSTOMIZAÇÃO & FLEXIBILIDADE */}
        <section className="py-12 border-b border-slate-100 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              METODOLOGIA ADAPTADA À PLANTA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Treinamentos estruturados sob medida
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Cada indústria possui desafios operacionais singulares. Por isso, os treinamentos são calibrados conforme as necessidades específicas da sua organização:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase text-sky-800 block">Perfil da Equipe</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ajuste da linguagem técnica para engenheiros seniores, operadores ou equipes multidisciplinares.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase text-sky-800 block">Segmento Industrial</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Casos práticos e normas direcionadas à realidade da química, energia, alimentos, papel ou mineração.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase text-sky-800 block">Nível e Objetivos</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Do alinhamento conceitual introdutório à imersão avançada em cálculos e rotinas em Python.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase text-sky-800 block">Formato & Modalidade</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Imersões presenciais in-company, workshops remotos ao vivo ou modelos híbridos interativos.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 italic pt-1">
            * Carga horária e dinâmica são desenhadas exclusivamente conforme o escopo e a disponibilidade da equipe, sem pacotes genéricos fixos.
          </p>
        </section>

        {/* TEMAS DISPONÍVEIS */}
        <section id="temas" className="py-12 border-b border-slate-100 space-y-8 scroll-mt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                MATRIZ DE CAPACITAÇÃO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Principais Temas de Treinamento
              </h2>
            </div>
            <Link
              href="/contato/treinamentos"
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-950 text-white font-semibold text-xs flex items-center gap-2 hover:bg-slate-800 transition-colors shrink-0"
            >
              <span>Solicitar proposta in-company</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingThemes.map((theme, idx) => {
              const Icon = theme.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950">
                      {theme.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {theme.desc}
                    </p>
                  </div>

                  <Link
                    href={`/contato/treinamentos?tema=${encodeURIComponent(theme.title)}`}
                    className="min-h-[44px] pt-3 border-t border-slate-100 inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900"
                  >
                    <span>Pedir proposta neste tema</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* INSTRUTOR */}
        <section className="py-12 border-b border-slate-100">
          <ProductInstructor />
        </section>

        {/* CTA FINAL */}
        <section className="my-10 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase text-sky-400">PROPOSTAS CORPORATIVAS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Eleve a maturidade técnica e analítica da sua equipe
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Solicite um alinhamento preliminar com o Prof. Wagner para estruturar o programa de capacitação ideal para as metas da sua empresa.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/contato/treinamentos"
              className="min-h-[44px] px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
            >
              <span>Solicitar Proposta de Treinamento</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

      {/* Sticky Bottom CTA no iPhone */}
      <MobileStickyCta
        buttonText="Solicitar Proposta"
        targetId="temas"
        badge="In-Company"
      />
    </div>
  );
}
