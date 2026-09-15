import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ArrowRight, Compass, GraduationCap, FileText, Cpu, Microscope, BookOpen, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Wagner Eustáquio de Vasconcelos | Engenharia, IA e Pesquisa",
  description:
    "Conheça a trajetória de Wagner Eustáquio de Vasconcelos, engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Engenharia e Meio Ambiente.",
  alternates: {
    canonical: "/sobre",
  },
};

const IDENTITY_PILLARS = [
  {
    role: "ENGENHEIRO",
    icon: Cpu,
    description: "Pesquisa, processos, segurança, ambiente e sistemas industriais.",
    accent: "border-sky-200/80 bg-sky-50/50 text-sky-800",
  },
  {
    role: "PESQUISADOR",
    icon: Microscope,
    description: "Modelagem, Inteligência Artificial, lógica fuzzy, redes neurais e tomada de decisão.",
    accent: "border-indigo-200/80 bg-indigo-50/50 text-indigo-800",
  },
  {
    role: "PROFESSOR",
    icon: BookOpen,
    description: "Ensino superior em diferentes áreas da Engenharia.",
    accent: "border-emerald-200/80 bg-emerald-50/50 text-emerald-800",
  },
  {
    role: "ESPECIALISTA",
    icon: ShieldAlert,
    description: "Atuação técnica em segurança de processos, emissões atmosféricas, qualidade do ar e soluções industriais.",
    accent: "border-amber-200/80 bg-amber-50/50 text-amber-800",
  },
];

export default function SobreHubPage() {
  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb de Navegação */}
        <Breadcrumbs items={[{ label: "Sobre o Autor" }]} />

        {/* 1. HERO INSTITUCIONAL */}
        <section className="py-8 sm:py-12 border-b border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Coluna de Texto Principal */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/70 inline-block mb-3">
                  SOBRE WAGNER
                </span>
                
                <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
                  Uma trajetória construída entre ciência, engenharia e aplicação.
                </h1>
              </div>

              <p className="font-body text-base sm:text-lg text-slate-600 leading-[1.7] font-normal tracking-[-0.008em]">
                Prof. Dr. Wagner Eustáquio de Vasconcelos é engenheiro, pesquisador e professor com uma trajetória que conecta formação científica, experiência acadêmica e atuação técnica em problemas reais da Engenharia e da indústria.
              </p>

              {/* Botões de Ação Principais (CTAs) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/sobre/trajetoria"
                  className="font-body font-semibold text-sm inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white bg-slate-950 hover:bg-sky-950 active:bg-sky-900 shadow-md shadow-slate-950/20 transition-all min-h-[48px] tracking-[-0.005em]"
                >
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span>Conheça a trajetória</span>
                </Link>

                <Link
                  href="/sobre/formacao"
                  className="font-body font-semibold text-sm inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs transition-all min-h-[48px] tracking-[-0.005em]"
                >
                  <GraduationCap className="w-4 h-4 text-sky-700" />
                  <span>Ver formação acadêmica</span>
                </Link>

                <Link
                  href="/curriculo-lattes"
                  className="font-body font-semibold text-sm inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sky-900 bg-sky-50/80 hover:bg-sky-100/80 border border-sky-200/80 transition-all min-h-[48px] tracking-[-0.005em]"
                >
                  <FileText className="w-4 h-4 text-sky-700" />
                  <span>Currículo Lattes</span>
                </Link>
              </div>

              {/* Acesso Direto à Biografia Longa */}
              <div className="pt-2">
                <Link
                  href="/sobre/biografia"
                  className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1.5 group tracking-[-0.005em]"
                >
                  <span>Ler biografia editorial completa em 7 capítulos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Coluna da Imagem Oficial com Estilo Editorial Translúcido */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative bg-white/80 backdrop-blur-xl p-3.5 rounded-[2.5rem] border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  <div className="relative aspect-[3.3/4] w-full rounded-[2rem] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/wagner-vasconcelos.jpg"
                      alt="Prof. Dr. Wagner Eustáquio de Vasconcelos"
                      fill
                      sizes="(max-width: 640px) 340px, 420px"
                      priority
                      className="object-cover object-top"
                    />
                    
                    {/* Caligrafia exclusiva manuscrita sobreposta */}
                    <div className="absolute bottom-4 right-4 select-none pointer-events-none text-right">
                      <p className="font-script text-white text-2xl sm:text-3xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] -rotate-3">
                        Conhecimento<br />
                        <span className="text-sky-200">que transforma</span><br />
                        realidades
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 p-3.5 rounded-2xl bg-slate-900 text-white">
                    <p className="font-heading font-[650] text-sm tracking-[-0.015em] text-white">
                      Prof. Dr. Wagner Eustáquio de Vasconcelos
                    </p>
                    <p className="font-body text-sky-300 text-xs font-medium mt-0.5 tracking-normal">
                      Engenharia • Inteligência Artificial • Sustentabilidade
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. RESUMO BIOGRÁFICO EDITORIAL */}
        <section className="py-14 sm:py-18 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block">
              POSICIONAMENTO E PROPÓSITO
            </span>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-[-0.035em] leading-[1.2]">
              Engenharia como ponto de partida. Pesquisa como método. Aplicação como propósito.
            </h2>

            <div className="space-y-4 font-body text-base sm:text-lg text-slate-600 leading-[1.75] tracking-[-0.008em]">
              <p>
                Graduado em Engenharia Química, Wagner construiu sua trajetória acadêmica em áreas que envolvem Engenharia Nuclear, Inteligência Artificial, Segurança de Processos, Engenharia Ambiental, Modelagem e tomada de decisão.
              </p>
              <p>
                Ao longo da carreira, conciliou pesquisa, docência, gestão acadêmica e execução de projetos técnicos, desenvolvendo uma atuação multidisciplinar voltada à aplicação do conhecimento científico em desafios industriais e ambientais.
              </p>
            </div>

            {/* Citação Editorial em Destaque */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 my-8">
              <blockquote className="font-editorial italic font-normal text-lg sm:text-xl text-slate-700 leading-relaxed tracking-[-0.01em]">
                <span className="text-sky-700 not-italic text-2xl leading-none select-none mr-1.5">“</span>
                Pesquisa, ensino e aplicação não são caminhos separados. São partes de um mesmo processo de construção de conhecimento.
                <span className="text-sky-700 not-italic text-2xl leading-none select-none ml-1.5">”</span>
              </blockquote>
              <p className="font-body text-xs text-slate-400 uppercase tracking-widest font-semibold mt-4">
                Diretriz Institucional de Atuação
              </p>
            </div>
          </div>
        </section>

        {/* 3. BLOCO DE IDENTIDADE PROFISSIONAL (4 PILARES) */}
        <section className="py-14 sm:py-18 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto mb-10 text-center sm:text-left">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-2">
              CAMPOS DE ATUAÇÃO INTEGRADA
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-[-0.035em]">
              Identidade Profissional
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {IDENTITY_PILLARS.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={pilar.role}
                  className="p-6 rounded-3xl bg-white/85 backdrop-blur-md border border-slate-200/80 hover:border-sky-300/80 shadow-2xs hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-slate-50 border border-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-slate-700 group-hover:text-sky-400" />
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-slate-950 tracking-[-0.02em] mb-2">
                      {pilar.role}
                    </h3>

                    <p className="font-body text-sm text-slate-600 leading-[1.65] tracking-[-0.005em]">
                      {pilar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. HUB DE DIRECIONAMENTO PARA SUB-PÁGINAS */}
        <section className="py-14 sm:py-18">
          <div className="max-w-4xl mx-auto mb-8 text-center sm:text-left">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-2">
              APROFUNDAMENTO TEMÁTICO
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.035em]">
              Explore a documentação completa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/sobre/biografia"
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 inline-block mb-3">
                  Narrativa Completa
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em] mb-2 group-hover:text-sky-900 transition-colors">
                  Biografia Oficial
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  História em 7 capítulos detalhando da Engenharia Química ao Doutorado em IA e atuação na indústria.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                <span>Acessar leitura longa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/sobre/trajetoria"
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200/70 inline-block mb-3">
                  Cronologia & Marcos
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em] mb-2 group-hover:text-sky-900 transition-colors">
                  Linha do Tempo
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  Marcos estratégicos de 1995 a 2026 com filtros por áreas acadêmica, pesquisa, profissional e formação.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                <span>Ver cronologia</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/sobre/formacao"
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/70 inline-block mb-3">
                  Graus & Titulações
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em] mb-2 group-hover:text-sky-900 transition-colors">
                  Formação Acadêmica
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  Detalhamento de graduação, mestrado, doutorado, pós-doutorados, especialização e formação executiva.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                <span>Consultar titulações</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
