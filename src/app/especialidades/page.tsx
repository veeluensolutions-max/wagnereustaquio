import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SPECIALTIES_DATA } from "@/data/specialties";
import { ArrowRight, Cpu, ShieldAlert, Leaf, Compass, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Catálogo de Especialidades Técnicas | Prof. Dr. Wagner Eustáquio",
  description:
    "Explore as 11 especialidades técnicas em Engenharia, Inteligência Artificial, Segurança de Processos e Meio Ambiente com embasamento científico e aplicações industriais.",
  alternates: {
    canonical: "/especialidades",
  },
};

export default function EspecialidadesIndexPage() {
  const clusters = [
    {
      id: "ia",
      title: "Inteligência Artificial, Modelos Difusos & Decisão",
      pillarTitle: "Inteligência Artificial & Dados",
      pillarHref: "/areas-de-conhecimento/inteligencia-artificial",
      icon: Cpu,
      slugs: [
        "inteligencia-artificial-na-engenharia",
        "logica-fuzzy",
        "redes-neurais",
        "tomada-de-decisao",
      ],
    },
    {
      id: "seguranca",
      title: "Segurança de Processos & Integridade Mecânica",
      pillarTitle: "Engenharia & Segurança de Processos",
      pillarHref: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
      icon: ShieldAlert,
      slugs: [
        "seguranca-de-processos",
        "nr-13",
        "tomada-de-decisao",
      ],
    },
    {
      id: "ambiente",
      title: "Meio Ambiente, Emissões & Modelagem Atmosférica",
      pillarTitle: "Meio Ambiente & Sustentabilidade",
      pillarHref: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
      icon: Leaf,
      slugs: [
        "emissoes-atmosfericas",
        "amostragem-isocinetica",
        "modelagem-de-dispersao-atmosferica",
        "aermod",
        "qualidade-do-ar",
      ],
    },
  ];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Especialidades Técnicas" }]} />

        {/* Hero do Catálogo */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Compass className="w-3.5 h-3.5" />
            <span>MATRIZ DE COMPETÊNCIAS APLICADAS</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12] max-w-4xl">
            Especialidades de Engenharia, IA e Sustentabilidade
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            Consulte o embasamento teórico, as formulações matemáticas, os diagramas conceituais e os critérios práticos de aplicação de cada uma das nossas frentes de especialidade técnica.
          </p>
        </header>

        {/* Clusters de Especialidades */}
        <div className="py-12 space-y-12">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <section
                key={cluster.id}
                className="p-7 sm:p-9 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-800 shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-semibold text-sky-800 uppercase tracking-widest block">
                        TERRITÓRIO TEMÁTICO
                      </span>
                      <h2 className="font-heading font-[650] text-xl text-slate-950 tracking-[-0.02em]">
                        {cluster.title}
                      </h2>
                    </div>
                  </div>

                  <Link
                    href={cluster.pillarHref}
                    className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 shrink-0"
                  >
                    <span>Ver Pilar: {cluster.pillarTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cluster.slugs.map((slug) => {
                    const spec = SPECIALTIES_DATA[slug];
                    if (!spec) return null;

                    return (
                      <div
                        key={slug}
                        className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-sky-300 hover:bg-white transition-all flex flex-col justify-between group shadow-2xs hover:shadow-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="font-heading text-[10.5px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200/70 text-slate-600">
                              {spec.pillarSlug === "inteligencia-artificial" ? "IA & DADOS" : spec.pillarSlug === "engenharia-e-seguranca-de-processos" ? "SEGURANÇA" : "MEIO AMBIENTE"}
                            </span>
                          </div>

                          <h3 className="font-heading font-semibold text-base text-slate-950 mb-2 group-hover:text-sky-900 transition-colors leading-snug">
                            {spec.title}
                          </h3>

                          <p className="font-body text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                            {spec.summary}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                          <Link
                            href={`/especialidades/${spec.slug}`}
                            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1.5 min-h-[44px]"
                          >
                            <span>Acessar conteúdo</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
