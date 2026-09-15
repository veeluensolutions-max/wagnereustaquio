import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ExternalLink, Award, ShieldCheck, GraduationCap, FileText, Microscope, Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Currículo Lattes | Wagner Eustáquio de Vasconcelos",
  description:
    "Consulte a trajetória acadêmica, produção científica, projetos, orientações e produção técnica de Wagner Eustáquio de Vasconcelos na Plataforma Lattes do CNPq.",
  alternates: {
    canonical: "/curriculo-lattes",
  },
};

export default function CurriculoLattesPage() {
  const lattesUrl = "http://lattes.cnpq.br/7844785807954101";

  const internalCards = [
    {
      title: "Formação Acadêmica",
      subtitle: "Graduação, Mestrado, Doutorado e Pós-Docs",
      href: "/sobre/formacao",
      icon: GraduationCap,
      description: "Memorial completo de titulações acadêmicas e especializações em instituições de alta exigência.",
    },
    {
      title: "Publicações Científicas",
      subtitle: "Artigos em periódicos e anais de congressos",
      href: "/conhecimento/publicacoes-cientificas",
      icon: FileText,
      description: "Produção bibliográfica registrada com foco em modelagem, IA, redes neurais e dispersão ambiental.",
    },
    {
      title: "Linhas de Pesquisa",
      subtitle: "Investigação quantitativa e métodos",
      href: "/conhecimento/pesquisas",
      icon: Microscope,
      description: "Projetos de pesquisa desenvolvidos no IME, UFPE e centros tecnológicos nacionais.",
    },
    {
      title: "Produção Técnica",
      subtitle: "Projetos industriais e consultoria",
      href: "/projetos",
      icon: Wrench,
      description: "Aplicações de engenharia em segurança de processos, auditorias NR-13 e modelagem matemática.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Currículo Lattes (CNPq)" }]} />

        {/* Card Principal de Validação Oficial CNPq */}
        <div className="bg-white/90 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/90 shadow-[0_16px_40px_rgba(15,23,42,0.06)] text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-sky-50 text-sky-800 flex items-center justify-center mx-auto border border-sky-100 shadow-2xs">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/70 inline-block">
              PLATAFORMA LATTES • CNPQ
            </span>
            <h1 className="font-heading font-[650] text-3xl sm:text-4xl text-slate-950 tracking-[-0.035em]">
              Currículo acadêmico e científico
            </h1>
          </div>

          <p className="font-body text-base text-slate-600 leading-[1.7] max-w-2xl mx-auto font-normal tracking-[-0.005em]">
            Consulte a trajetória acadêmica, produção científica, projetos, orientações e produção técnica de Wagner Eustáquio de Vasconcelos na Plataforma Lattes do Conselho Nacional de Desenvolvimento Científico e Tecnológico — CNPq.
          </p>

          {/* Selo com o ID Lattes Oficial */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ID Lattes: <strong>7844785807954101</strong></span>
          </div>

          {/* Botões de Ação Principal e Secundário */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={lattesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-body font-semibold text-sm inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white bg-slate-950 hover:bg-sky-950 active:bg-sky-900 shadow-md transition-all min-h-[48px] tracking-[-0.005em]"
            >
              <span>Ver Currículo Lattes no CNPq</span>
              <ExternalLink className="w-4 h-4 text-sky-400" />
            </a>

            <Link
              href="/sobre/trajetoria"
              className="w-full sm:w-auto font-body font-semibold text-sm inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all min-h-[48px] tracking-[-0.005em]"
            >
              <span>Conheça a trajetória resumida</span>
            </Link>
          </div>
        </div>

        {/* CARDS DIRECIONAIS INTERNOS */}
        <div className="space-y-6 pt-4">
          <div className="text-center sm:text-left">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500 block mb-1">
              NAVEGAÇÃO COMPLEMENTAR NA PLATAFORMA
            </span>
            <h2 className="font-heading font-[650] text-2xl text-slate-950 tracking-[-0.025em]">
              Explore as seções internas de documentação
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internalCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-sky-400 transition-colors mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-heading font-semibold text-base text-slate-950 tracking-[-0.015em] mb-1 group-hover:text-sky-900 transition-colors">
                      {card.title}
                    </h3>

                    <p className="font-body text-xs font-semibold text-sky-850 mb-2">
                      {card.subtitle}
                    </p>

                    <p className="font-body text-xs text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                    <span>Acessar seção</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
