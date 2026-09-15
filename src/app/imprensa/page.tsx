import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  Download,
  Mail,
  Award,
  CheckCircle2,
  ArrowRight,
  Newspaper,
  Mic,
  FileText,
  Radio,
  Calendar,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Imprensa | Wagner Eustáquio de Vasconcelos",
  description:
    "Sala de imprensa oficial, biografia executiva, media kit e canal de atendimento para jornalistas, veículos de comunicação e podcasts.",
  alternates: {
    canonical: "/imprensa",
  },
  openGraph: {
    title: "Imprensa | Wagner Eustáquio de Vasconcelos",
    description:
      "Informações institucionais, temas para entrevistas e media kit do Prof. Dr. Wagner Eustáquio de Vasconcelos.",
    type: "website",
  },
};

export default function ImprensaPage() {
  const interviewTopics = [
    "Inteligência Artificial na Engenharia",
    "Segurança de Processos Industriais",
    "Meio Ambiente e Qualidade do Ar",
    "Emissões Atmosféricas e Modelagem AERMOD",
    "Sustentabilidade e Transição Energética",
    "Educação e Futuro das Engenharias",
    "Tomada de Decisão e Lógica Fuzzy",
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Imprensa & Mídia" }]} />

        {/* CABEÇALHO */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            SALA DE IMPRENSA OFICIAL
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Imprensa e participações.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Canal de atendimento dedicado a jornalistas, produtores editoriais, veículos de comunicação, podcasts e organizadores de conferências setoriais.
          </p>
        </div>

        {/* FOTO OFICIAL & MEDIA KIT */}
        <section className="py-12 border-b border-slate-100">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-[240px] rounded-2xl overflow-hidden bg-slate-200 shadow-md border-2 border-white">
                <Image
                  src="/images/wagner-vasconcelos.jpg"
                  alt="Retrato oficial do Prof. Dr. Wagner Eustáquio de Vasconcelos"
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MEDIA KIT INSTITUCIONAL</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-950">
                Prof. Dr. Wagner Eustáquio de Vasconcelos
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fotografia em alta definição, biografias resumida e estendida, tópicos de especialidade e autorização para reprodução editorial em eventos e publicações jornalísticas.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contato/imprensa"
                  className="min-h-[44px] px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Solicitar Media Kit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/curriculo-lattes"
                  className="min-h-[44px] px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-sky-300 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Currículo Lattes Oficial</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BIOGRAFIAS PADRONIZADAS */}
        <section className="py-12 border-b border-slate-100 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              PADRÕES BIOGRÁFICOS EDITORIAIS
            </span>
            <h2 className="text-2xl font-bold text-slate-950 mt-1">
              Textos Oficiais para Divulgação
            </h2>
          </div>

          {/* Bio Curta */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Biografia Curta (Para crachás, banners e introduções de painéis):
              </span>
              <span className="text-[11px] font-mono text-slate-400">Texto Editorial Oficial</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif italic bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              “Prof. Dr. Wagner Eustáquio de Vasconcelos é engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Segurança de Processos, Engenharia Ambiental, Modelagem e soluções aplicadas à indústria.”
            </p>
          </div>

          {/* Bio Longa */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Biografia Estendida (Para artigos jornalísticos, ementas e programas de congresso):
              </span>
              <span className="text-[11px] font-mono text-slate-400">Base Factual Lattes</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              Doutor em Tecnologias Energéticas e Nucleares pela Universidade Federal de Pernambuco (UFPE) com período de pós-doutorado, Mestre em Engenharia de Produção com foco em modelagem e Engenheiro Químico pela Universidade Católica de Pernambuco (UNICAP). Atuou como pesquisador do Centro Regional de Ciências Nucleares do Nordeste (CRCN/CNEN), professor de ensino superior e consultor técnico sênior em centenas de projetos e laudos industriais em todo o Brasil. É autor do livro de referência <em>Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental</em> (2010) e de dezenas de artigos científicos sobre modelagem de dispersão de poluentes, algoritmos neuro-fuzzy, segurança de processos (NR-13/HAZOP) e tomada de decisão em cenários críticos de engenharia.
            </p>
          </div>
        </section>

        {/* ÁREAS PARA ENTREVISTAS */}
        <section className="py-12 border-b border-slate-100 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              DISPONIBILIDADE TEMÁTICA
            </span>
            <h2 className="text-2xl font-bold text-slate-950">
              Áreas para Entrevistas e Reportagens
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Fontes especializadas para matérias de economia, ciência, tecnologia industrial, meio ambiente e regulação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {interviewTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800"
              >
                <div className="w-2 h-2 rounded-full bg-sky-600 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ESTRUTURA PARA PARTICIPAÇÕES & PODCASTS */}
        <section className="py-12 border-b border-slate-100 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              FORMATOS DE COBERTURA
            </span>
            <h2 className="text-2xl font-bold text-slate-950">
              Participações e Pautas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <Newspaper className="w-6 h-6 text-sky-700" />
              <h3 className="text-sm font-bold text-slate-950">Entrevistas e Artigos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Opinião técnica fundamentada e artigos de análise sobre acidentes industriais, conformidade ambiental e IA na engenharia.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <Radio className="w-6 h-6 text-sky-700" />
              <h3 className="text-sm font-bold text-slate-950">Podcasts e Vídeos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Participação em bancadas técnicas, programas de inovação industrial e debates sobre transição energética.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <Calendar className="w-6 h-6 text-sky-700" />
              <h3 className="text-sm font-bold text-slate-950">Cobertura de Eventos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Declarações à imprensa e apoio técnico durante conferências e simpósios de engenharia.
              </p>
            </div>
          </div>
        </section>

        {/* CTA CONTATO IMPRENSA */}
        <section className="my-10 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase text-sky-400">PRAZOS JORNALÍSTICOS</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Atendimento ágil para fechamento de pautas
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Solicite entrevistas, declarações técnicas ou materiais em alta definição informando seu veículo e prazo de fechamento.
            </p>
          </div>

          <Link
            href="/contato/imprensa"
            className="min-h-[44px] px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shrink-0 transition-colors shadow-md flex items-center gap-2"
          >
            <span>Falar com Assessoria</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </div>
  );
}
