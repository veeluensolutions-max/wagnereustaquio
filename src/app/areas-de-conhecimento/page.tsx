import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { 
  Cpu, 
  ShieldAlert, 
  Leaf, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Áreas de Conhecimento e Atuação | Prof. Dr. Wagner Eustáquio",
  description:
    "Conhecimento multidisciplinar conectando Engenharia, Inteligência Artificial, Segurança de Processos, Meio Ambiente e Educação para solucionar problemas complexos.",
  alternates: {
    canonical: "/areas-de-conhecimento",
  },
};

interface AreaCard {
  id: string;
  num: string;
  title: string;
  href: string;
  icon: React.ElementType;
  description: string;
  specialties: { label: string; href?: string }[];
  ctaLabel: string;
}

const AREAS_CONFIG: AreaCard[] = [
  {
    id: "ia",
    num: "01",
    title: "Inteligência Artificial & Dados",
    href: "/areas-de-conhecimento/inteligencia-artificial",
    icon: Cpu,
    description:
      "Aplicação de Inteligência Artificial, lógica fuzzy, redes neurais, Data Science, Big Data e métodos computacionais à Engenharia, modelagem e tomada de decisão.",
    specialties: [
      { label: "Inteligência Artificial na Engenharia", href: "/especialidades/inteligencia-artificial-na-engenharia" },
      { label: "Lógica Fuzzy", href: "/especialidades/logica-fuzzy" },
      { label: "Redes Neurais", href: "/especialidades/redes-neurais" },
      { label: "Tomada de Decisão", href: "/especialidades/tomada-de-decisao" },
    ],
    ctaLabel: "Explorar Inteligência Artificial & Dados",
  },
  {
    id: "seguranca",
    num: "02",
    title: "Engenharia & Segurança de Processos",
    href: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
    icon: ShieldAlert,
    description:
      "Segurança, confiabilidade, inspeções, processos industriais, NR-13, integridade de equipamentos e análise de riscos.",
    specialties: [
      { label: "Segurança de Processos", href: "/especialidades/seguranca-de-processos" },
      { label: "NR-13", href: "/especialidades/nr-13" },
      { label: "HAZOP" },
      { label: "Confiabilidade" },
      { label: "Inspeções" },
      { label: "Vasos de Pressão" },
    ],
    ctaLabel: "Explorar Engenharia & Segurança",
  },
  {
    id: "ambiente",
    num: "03",
    title: "Meio Ambiente & Sustentabilidade",
    href: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
    icon: Leaf,
    description:
      "Monitoramento ambiental, emissões atmosféricas, qualidade do ar, modelagem, recursos naturais, resíduos e sustentabilidade.",
    specialties: [
      { label: "Emissões Atmosféricas", href: "/especialidades/emissoes-atmosfericas" },
      { label: "Amostragem Isocinética", href: "/especialidades/amostragem-isocinetica" },
      { label: "Modelagem de Dispersão", href: "/especialidades/modelagem-de-dispersao-atmosferica" },
      { label: "AERMOD", href: "/especialidades/aermod" },
      { label: "Qualidade do Ar", href: "/especialidades/qualidade-do-ar" },
    ],
    ctaLabel: "Explorar Meio Ambiente & Sustentabilidade",
  },
  {
    id: "educacao",
    num: "04",
    title: "Educação & Desenvolvimento",
    href: "/areas-de-conhecimento/educacao-e-desenvolvimento",
    icon: GraduationCap,
    description:
      "Ensino superior, pesquisa aplicada, formação de profissionais, gestão acadêmica e desenvolvimento técnico.",
    specialties: [
      { label: "Educação em Engenharia" },
      { label: "Pesquisa Aplicada" },
      { label: "Lean Six Sigma" },
      { label: "Desenvolvimento Profissional" },
    ],
    ctaLabel: "Explorar Educação & Desenvolvimento",
  },
];

export default function AreasDeConhecimentoPage() {
  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Áreas de Conhecimento" }]} />

        {/* Hero do Hub */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Layers className="w-3.5 h-3.5" />
            <span>ÁREAS DE CONHECIMENTO</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12] max-w-4xl">
            Conhecimento multidisciplinar para problemas complexos.
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            A trajetória de Wagner Eustáquio de Vasconcelos conecta Engenharia, Inteligência Artificial, Meio Ambiente, Segurança de Processos, Pesquisa e Educação. Essas áreas se complementam na análise e solução de desafios técnicos, industriais e ambientais.
          </p>
        </header>

        {/* Grid dos 4 Pilares Principais */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {AREAS_CONFIG.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.id}
                className="p-7 sm:p-9 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-800 shadow-2xs group-hover:bg-slate-950 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold text-sky-800 uppercase tracking-widest block">
                          PILAR {area.num}
                        </span>
                        <h2 className="font-heading font-[650] text-xl sm:text-2xl text-slate-950 tracking-[-0.02em] leading-snug">
                          {area.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
                      Especialidades relacionadas:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {area.specialties.map((spec, idx) => (
                        spec.href ? (
                          <Link
                            key={idx}
                            href={spec.href}
                            className="font-body text-xs font-medium px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-900 border border-slate-200/70 hover:border-sky-200 transition-colors inline-flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                            <span>{spec.label}</span>
                          </Link>
                        ) : (
                          <span
                            key={idx}
                            className="font-body text-xs font-medium px-3 py-1.5 rounded-xl bg-slate-50 text-slate-600 border border-slate-200/60 inline-flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <span>{spec.label}</span>
                          </span>
                        )
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <Link
                    href={area.href}
                    className="inline-flex items-center justify-between w-full font-body text-xs sm:text-sm font-semibold text-sky-800 hover:text-sky-950 group-hover:translate-x-0.5 transition-all min-h-[44px]"
                  >
                    <span>{area.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 text-sky-700 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Banner de Conexão com Especialidades */}
        <section className="my-6 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-400">
              CAMADA DE PROFUNDIDADE TÉCNICA
            </span>
            <h3 className="font-heading font-semibold text-xl text-white tracking-[-0.02em]">
              Explore o Catálogo Completo de Especialidades
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl">
              Consulte páginas profundas para cada disciplina, com fundamentos teóricos, diagramas conceituais e aplicações industriais.
            </p>
          </div>
          <Link
            href="/especialidades"
            className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-body text-xs font-semibold tracking-wide transition-all shrink-0 min-h-[44px] flex items-center justify-center gap-2"
          >
            <span>Ver Todas as Especialidades</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

      </div>
    </div>
  );
}
