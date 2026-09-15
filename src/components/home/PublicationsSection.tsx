import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Award, Layers, FlaskConical } from "lucide-react";

const PUBLICATION_CATEGORIES = [
  {
    id: "artigos-periodicos",
    title: "Artigos Científicos",
    icon: FileText,
    description: "Publicações em periódicos indexados abordando modelos difusos, segurança de processos e sustentabilidade.",
    highlight: "Nacional e Internacional",
  },
  {
    id: "livros-capitulos",
    title: "Livros e Capítulos Técnicos",
    icon: BookOpen,
    description: "Obras autorais e coautorias com foco em incertezas ambientais e aplicações de inteligência computacional.",
    highlight: "Obra publicada em 2010",
  },
  {
    id: "congressos",
    title: "Anais de Congressos e Conferências",
    icon: Award,
    description: "Trabalhos apresentados nos principais simpósios de engenharia química, nuclear, ambiental e computacional.",
    highlight: "Apresentações Técnicas",
  },
  {
    id: "projetos-pesquisa",
    title: "Projetos de Pesquisa Aplicada",
    icon: FlaskConical,
    description: "Iniciativas de inovação e investigação científica desenvolvidas em cooperação acadêmica e industrial.",
    highlight: "UFPE, IME e Parceiros",
  },
  {
    id: "producao-tecnica",
    title: "Produção Técnica e Laudos",
    icon: Layers,
    description: "Relatórios de dispersão atmosférica, pareceres regulatórios e memórias de cálculo de engenharia.",
    highlight: "Aplicação Industrial",
  },
];

export default function PublicationsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-2">
              PRODUÇÃO CIENTÍFICA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
              Pesquisa e produção científica.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A produção acadêmica de Wagner Eustáquio de Vasconcelos inclui trabalhos sobre Inteligência Artificial, lógica fuzzy, engenharia nuclear, sustentabilidade, recursos hídricos, processos industriais, emissões e meio ambiente.
            </p>
          </div>

          <Link
            href="/conhecimento/publicacoes-cientificas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 hover:text-sky-900 mt-4 md:mt-0 transition-colors group shrink-0"
          >
            <span>Explorar produção acadêmica</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid dos 5 Eixos de Produção Científica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PUBLICATION_CATEGORIES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-800 mb-4 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 block w-fit mb-2">
                    {item.highlight}
                  </span>

                  <h3 className="text-sm font-bold text-slate-950 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
