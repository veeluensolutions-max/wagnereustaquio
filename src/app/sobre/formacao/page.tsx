"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { 
  GraduationCap,
  ArrowRight, 
  ExternalLink, 
  ChevronDown, 
  X 
} from "lucide-react";

interface FormacaoItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionShort: string;
  period: string;
  workload?: string;
  researchFocus?: string;
  thesisTitle?: string;
  relatedAreas: string[];
  description: string;
  isComplementary?: boolean;
}

export default function FormacaoPage() {
  const [selectedItem, setSelectedItem] = useState<FormacaoItem | null>(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // 1. Formação Acadêmica Principal (Graduação, Mestrado, Doutorado)
  const mainDegrees: FormacaoItem[] = [
    {
      id: "graduacao-unicap",
      degree: "Graduação",
      field: "Engenharia Química",
      institution: "Universidade Católica de Pernambuco",
      institutionShort: "UNICAP",
      period: "1995 – 2000",
      researchFocus: "Processos químicos, termodinâmica e operações unitárias industriais.",
      relatedAreas: ["Fenômenos de Transporte", "Operações Unitárias", "Cinética Química", "Modelagem de Processos"],
      description: "Formação de base sólida em engenharia de processos químicos, balanços de massa e energia, com rigor experimental e cálculo diferencial aplicado.",
    },
    {
      id: "mestrado-ime",
      degree: "Mestrado",
      field: "Engenharia Nuclear",
      institution: "Instituto Militar de Engenharia",
      institutionShort: "IME",
      period: "2003 – 2005",
      researchFocus: "Modelagem computacional e física de sistemas nucleares críticos.",
      relatedAreas: ["Física de Reatores", "Radionuclídeos", "Monitoramento Ambiental", "Modelagem Numérica"],
      description: "Pesquisa avançada com foco em cálculo de dispersão, segurança radiológica e desenvolvimento de rotinas computacionais de alta precisão analítica.",
    },
    {
      id: "doutorado-ufpe",
      degree: "Doutorado",
      field: "Tecnologias Energéticas e Nucleares",
      institution: "Universidade Federal de Pernambuco",
      institutionShort: "UFPE",
      period: "2005 – 2009",
      thesisTitle: "Aplicação de Técnicas de Inteligência Artificial na Avaliação da Exposição de Populações de Regiões de Alto Background Natural",
      researchFocus: "Inteligência Artificial, Lógica Fuzzy e Redes Neurais para suporte à decisão.",
      relatedAreas: ["Lógica Fuzzy", "Redes Neuro-Fuzzy", "Avaliação de Risco", "Tomada de Decisão"],
      description: "Desenvolvimento pioneiro de sistemas neuro-fuzzy híbridos capazes de modelar incertezas operacionais e ambientais complexas na engenharia.",
    },
  ];

  // 2. Pós-Doutorados
  const postDocs: FormacaoItem[] = [
    {
      id: "posdoc-ufpe",
      degree: "Pós-Doutorado",
      field: "Sistemas Computacionais e Modelagem",
      institution: "Universidade Federal de Pernambuco",
      institutionShort: "UFPE",
      period: "2011 – 2015",
      researchFocus: "Aprofundamento de modelos numéricos de dispersão ambiental.",
      relatedAreas: ["Modelagem de Dispersão", "Simulação Avançada", "Ambiente e Energia"],
      description: "Investigação continuada na fronteira entre física de processos, algoritmos computacionais e impactos ambientais.",
    },
    {
      id: "posdoc-ime",
      degree: "Pós-Doutorado",
      field: "Engenharia e Métodos Quantitativos",
      institution: "Instituto Militar de Engenharia",
      institutionShort: "IME",
      period: "2026",
      researchFocus: "Modelagem matemática e segurança em sistemas críticos de engenharia.",
      relatedAreas: ["Segurança de Sistemas Críticos", "Engenharia de Métodos", "Pesquisa Quantitativa"],
      description: "Nova etapa de investigação científica no IME direcionada a métodos numéricos de última geração aplicados à engenharia.",
    },
  ];

  // 3. Especialização
  const specializations: FormacaoItem[] = [
    {
      id: "esp-seguranca-usp",
      degree: "Especialização (Pós-Graduação Lato Sensu)",
      field: "Engenharia de Segurança do Trabalho",
      institution: "Universidade de São Paulo",
      institutionShort: "USP",
      period: "2018 – 2020",
      workload: "634 horas",
      researchFocus: "Prevenção de perdas industriais, normas regulamentadoras e gestão de risco.",
      relatedAreas: ["NR-13 Vasos e Caldeiras", "Análise de Riscos HAZOP", "Higiene Ocupacional", "Integridade Estrutural"],
      description: "Especialização aprofundada com 634 horas de carga horária registrada, voltada para gestão de conformidade, perícias técnicas e mitigação de risco catastrófico em plantas operacionais.",
    },
  ];

  // 4. Formação Complementar & Certificações Executivas
  const complementary: FormacaoItem[] = [
    {
      id: "mit-extension",
      degree: "Formação Complementar / Extensão Universitária",
      field: "Data Science and Big Data: Making Data-Driven Decisions",
      institution: "Massachusetts Institute of Technology",
      institutionShort: "MIT",
      period: "2025",
      workload: "45 horas",
      researchFocus: "Análise preditiva, big data e tomada de decisão estratégica.",
      relatedAreas: ["Machine Learning", "Data Pipelines", "Tomada de Decisão", "Modelagem Preditiva"],
      description: "Programa executivo intensivo focado na arquitetura de tomada de decisão fundamentada em dados em larga escala e modelos preditivos modernos.",
      isComplementary: true,
    },
    {
      id: "black-belt",
      degree: "Certificação Profissional Especialista",
      field: "Black Belt Lean Six Sigma",
      institution: "Formação e Certificação de Especialista",
      institutionShort: "LSS Black Belt",
      period: "2017",
      researchFocus: "Controle estatístico avançado de processos e metodologia DMAIC.",
      relatedAreas: ["Controle Estatístico Multivariado", "Metodologia DMAIC", "Redução de Variabilidade", "Gestão de Qualidade"],
      description: "Capacitação na liderança de projetos de melhoria contínua e redução de perdas através de controle estatístico rigoroso.",
      isComplementary: true,
    },
    {
      id: "green-belt",
      degree: "Certificação Profissional",
      field: "Green Belt Lean Six Sigma",
      institution: "Formação e Certificação",
      institutionShort: "LSS Green Belt",
      period: "2016",
      researchFocus: "Otimização de processos produtivos e ferramentas de qualidade.",
      relatedAreas: ["DMAIC", "Padronização de Processos", "Análise de Causa Raiz"],
      description: "Fundamentação em ferramentas estatísticas para eliminação de desperdícios e estabilização de fluxos produtivos.",
      isComplementary: true,
    },
  ];

  // 5. Outras formações técnicas e normas (área recolhível)
  const technicalNorms = [
    { code: "NR-13", title: "Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos de Armazenamento", scope: "Inspeção de segurança, cálculo de PMTA e integridade estrutural." },
    { code: "NR-20", title: "Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis", scope: "Classificação de instalações e controle de fontes de ignição." },
    { code: "NR-33", title: "Segurança e Saúde nos Trabalhos em Espaços Confinados", scope: "Identificação, monitoramento atmosférico e controle de acessos críticos." },
    { code: "NR-35", title: "Trabalho em Altura", scope: "Análise de risco, sistemas de ancoragem e procedimentos de resgate." },
    { code: "END", title: "Ensaios Não Destrutivos Industriais", scope: "Técnicas de inspeção sem alteração das características do equipamento." },
    { code: "AERMOD", title: "Modelagem Matemática de Dispersão Atmosférica", scope: "Simulação de plumas e conformidade com resoluções CONAMA." },
  ];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Sobre o Autor", href: "/sobre" },
            { label: "Formação Acadêmica" },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>RIGOR, CIÊNCIA E TITULAÇÕES OFICIAIS</span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Formação acadêmica
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em] max-w-3xl">
            Uma trajetória acadêmica construída entre Engenharia, Ciência, Segurança, Tecnologia e tomada de decisão.
          </p>
        </header>

        {/* NÍVEL 1: FORMAÇÃO ACADÊMICA PRINCIPAL */}
        <section className="py-10 sm:py-12 border-b border-slate-200/80">
          <div className="mb-6">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-1">
              NÍVEL STRICTO SENSU & GRADUAÇÃO
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Formação Acadêmica Principal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {mainDegrees.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70">
                      {item.degree}
                    </span>
                    <span className="font-body text-xs text-slate-400 font-medium font-mono">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-base sm:text-lg text-slate-950 tracking-[-0.02em] mb-1 leading-snug group-hover:text-sky-900 transition-colors">
                    {item.field}
                  </h3>

                  <p className="font-body text-xs font-semibold text-sky-850 mb-3">
                    {item.institution}
                  </p>

                  <p className="font-body text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                  <span>Ver detalhes da titulação</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NÍVEL 2: PÓS-DOUTORADOS */}
        <section className="py-10 sm:py-12 border-b border-slate-200/80">
          <div className="mb-6">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-indigo-800 block mb-1">
              PESQUISA AVANÇADA
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Pós-Doutorados
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {postDocs.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-indigo-400/80 shadow-2xs hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/70">
                      {item.degree}
                    </span>
                    <span className="font-body text-xs text-slate-400 font-medium font-mono">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-base sm:text-lg text-slate-950 tracking-[-0.02em] mb-1 leading-snug group-hover:text-indigo-900 transition-colors">
                    {item.institution}
                  </h3>

                  <p className="font-body text-xs font-semibold text-slate-700 mb-3">
                    {item.field}
                  </p>

                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-800 group-hover:text-indigo-950">
                  <span>Ver linha de pesquisa</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NÍVEL 3: ESPECIALIZAÇÃO */}
        <section className="py-10 sm:py-12 border-b border-slate-200/80">
          <div className="mb-6">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-800 block mb-1">
              PÓS-GRADUAÇÃO LATO SENSU
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Especialização
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {specializations.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-400/80 shadow-2xs hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer group"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                      {item.degree}
                    </span>
                    <span className="font-body text-xs text-slate-400 font-mono">
                      {item.period} • {item.workload}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-slate-950 tracking-[-0.02em] group-hover:text-emerald-900 transition-colors">
                    {item.field}
                  </h3>

                  <p className="font-body text-xs sm:text-sm font-semibold text-slate-700">
                    {item.institution} ({item.institutionShort})
                  </p>

                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="font-body text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 group-hover:bg-slate-950 group-hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>Consultar grade & áreas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NÍVEL 4: FORMAÇÃO COMPLEMENTAR / FORMAÇÃO EXECUTIVA */}
        <section className="py-10 sm:py-12 border-b border-slate-200/80">
          <div className="mb-6">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-1">
              ATUALIZAÇÃO EXECUTIVA & CERTIFICAÇÕES
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Formação Complementar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {complementary.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between cursor-pointer group ${
                  item.institutionShort === "MIT"
                    ? "bg-slate-900 text-white border-sky-500/30 shadow-lg shadow-slate-950/10 hover:border-sky-400"
                    : "bg-white text-slate-900 border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-heading text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      item.institutionShort === "MIT"
                        ? "bg-sky-500/20 text-sky-300 border border-sky-400/30"
                        : "bg-slate-100 text-slate-700"
                    }`}>
                      {item.workload ? `${item.workload}` : "Certificação"}
                    </span>
                    <span className={`font-body text-xs font-mono ${item.institutionShort === "MIT" ? "text-slate-400" : "text-slate-400"}`}>
                      {item.period}
                    </span>
                  </div>

                  <h3 className={`font-heading font-semibold text-base tracking-[-0.02em] mb-1 leading-snug ${
                    item.institutionShort === "MIT" ? "text-white group-hover:text-sky-200" : "text-slate-950 group-hover:text-sky-900"
                  }`}>
                    {item.field}
                  </h3>

                  <p className={`font-body text-xs font-semibold mb-3 ${
                    item.institutionShort === "MIT" ? "text-sky-300" : "text-sky-850"
                  }`}>
                    {item.institution}
                  </p>

                  <p className={`font-body text-xs leading-relaxed line-clamp-3 ${
                    item.institutionShort === "MIT" ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className={`pt-4 mt-5 border-t text-xs font-semibold flex items-center justify-between ${
                  item.institutionShort === "MIT" ? "border-slate-800 text-sky-300" : "border-slate-100 text-sky-800"
                }`}>
                  <span>Ver detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NÍVEL 5: FORMAÇÕES TÉCNICAS E NORMAS (ÁREA RECOLHÍVEL / ACCORDION) */}
        <section className="py-10 sm:py-12 border-b border-slate-200/80">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500 block mb-1">
                  CERTIFICAÇÕES TÉCNICAS E NORMAS
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
                  Normas Regulamentadoras e Ensaios Industriais
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-600 mt-1">
                  Capacitações técnicas aplicadas em ambientes industriais e periciais (NR-13, NR-20, NR-33, NR-35 e END).
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className="font-body text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-2 shrink-0 cursor-pointer min-h-[44px]"
              >
                <span>{isAccordionOpen ? "Ocultar Normas" : "Expandir Normas e Cursos"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAccordionOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {isAccordionOpen && (
              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
                {technicalNorms.map((norm) => (
                  <div key={norm.code} className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-xs font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200/70">
                        {norm.code}
                      </span>
                      <span className="font-body text-xs font-semibold text-slate-900 line-clamp-1">{norm.title}</span>
                    </div>
                    <p className="font-body text-[11.5px] text-slate-600 leading-relaxed">{norm.scope}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Rodapé com Link para Lattes */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-500 text-center sm:text-left">
            Todas as titulações e cargas horárias são homologadas e registradas na base do CNPq.
          </p>
          <Link
            href="/curriculo-lattes"
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1"
          >
            <span>Ver certificação no Lattes Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* DRAWER / BOTTOM SHEET DE DETALHES DA TITULAÇÃO (Otimizado para iPhone e Desktop) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div
            className="w-full sm:max-w-lg bg-white rounded-t-[2.5rem] sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto border border-slate-200 animate-in slide-in-from-bottom duration-300"
            style={{
              paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
            }}
          >
            {/* Cabeçalho do Drawer */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="font-heading text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70 inline-block mb-2">
                  {selectedItem.degree}
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em] leading-snug">
                  {selectedItem.field}
                </h3>
                <p className="font-body text-xs font-semibold text-sky-850 mt-1">
                  {selectedItem.institution} ({selectedItem.institutionShort})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Informações detalhadas */}
            <div className="py-5 space-y-4 font-body text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Período de Realização</span>
                  <span className="font-semibold text-slate-900">{selectedItem.period}</span>
                </div>
                {selectedItem.workload && (
                  <div>
                    <span className="text-slate-400 block font-medium">Carga Horária</span>
                    <span className="font-semibold text-slate-900">{selectedItem.workload}</span>
                  </div>
                )}
              </div>

              {selectedItem.thesisTitle && (
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Título da Tese / Dissertação
                  </span>
                  <p className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 font-medium text-slate-900 text-xs sm:text-sm leading-snug">
                    “{selectedItem.thesisTitle}”
                  </p>
                </div>
              )}

              {selectedItem.researchFocus && (
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Foco de Pesquisa & Métodos
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedItem.researchFocus}
                  </p>
                </div>
              )}

              {selectedItem.relatedAreas.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Áreas Relacionadas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.relatedAreas.map((area, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Contexto e Relevância
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>

            {/* Ação de Fechamento */}
            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-full py-3 rounded-xl font-body text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer min-h-[44px]"
              >
                Fechar detalhes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
