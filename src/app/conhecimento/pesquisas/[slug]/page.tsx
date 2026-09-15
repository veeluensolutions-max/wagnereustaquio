import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { RESEARCH_PROJECTS, ResearchProject } from "@/data/researchProjects";
import { SCIENTIFIC_PUBLICATIONS } from "@/data/publications";
import { SPECIALTIES_DATA } from "@/data/specialties";
import { FlaskConical, Calendar, Building2, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";

interface ResearchPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return RESEARCH_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = RESEARCH_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Pesquisa não encontrada" };
  }

  return {
    title: `${project.title} | Linha de Pesquisa | Wagner Eustáquio`,
    description: project.objective,
    alternates: {
      canonical: `/conhecimento/pesquisas/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.objective,
      type: "article",
    },
  };
}

export default async function ResearchDetailPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const project = RESEARCH_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedSpecialties = (project.relatedSpecialties || [])
    .map((s) => SPECIALTIES_DATA[s])
    .filter(Boolean);

  const relatedPubs = (project.relatedPublicationSlugs || [])
    .map((s) => SCIENTIFIC_PUBLICATIONS.find((p) => p.slug === s))
    .filter((p): p is (typeof SCIENTIFIC_PUBLICATIONS)[0] => Boolean(p));

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Pesquisas", href: "/conhecimento/pesquisas" },
            { label: project.categoryLabel },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-[11px] font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
              {project.period}
            </span>
            <span className="font-body text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60">
              {project.status}
            </span>
          </div>

          <h1 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-[-0.03em] leading-snug">
            {project.title}
          </h1>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-body text-slate-600 space-y-1 shadow-2xs">
            <p>
              <strong className="text-slate-900">Instituição Sede:</strong> {project.institution}
            </p>
            <p>
              <strong className="text-slate-900">Pesquisadores Participantes:</strong> {project.participants.join("; ")}
            </p>
          </div>
        </header>

        {/* Objetivo e Contexto */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            OBJETIVO E ESCOPO
          </span>
          <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
            Objetivo do Projeto
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            {project.objective}
          </p>

          <h3 className="font-heading font-semibold text-lg text-slate-950 tracking-[-0.02em] pt-4">
            Contexto Científico e Tecnológico
          </h3>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            {project.context}
          </p>
        </section>

        {/* Métodos Empregados */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            METODOLOGIA
          </span>
          <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
            Procedimentos e Métodos Aplicados
          </h2>
          <div className="space-y-2">
            {project.methods.map((method, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-body text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>{method}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Aplicações Práticas Reais */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            TRANSFERÊNCIA TECNOLÓGICA
          </span>
          <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
            Aplicações no Setor Produtivo e Ambiental
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.practicalApplications.map((app, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 text-xs sm:text-sm font-body text-slate-700 shadow-2xs">
                {app}
              </div>
            ))}
          </div>
        </section>

        {/* Publicações Originadas deste Projeto */}
        {relatedPubs.length > 0 && (
          <section className="py-10 border-b border-slate-200/80 space-y-4">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
              PRODUÇÃO VINCULADA
            </span>
            <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
              Publicações Científicas Decorrentes
            </h2>
            <div className="space-y-3">
              {relatedPubs.map((p) => (
                <Link
                  key={p.slug}
                  href={`/conhecimento/publicacoes-cientificas/${p.slug}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all block group"
                >
                  <span className="font-mono text-[10.5px] font-semibold text-slate-400 block mb-1">
                    {p.year} • {p.journalOrEvent}
                  </span>
                  <h3 className="font-heading font-semibold text-sm text-slate-900 group-hover:text-sky-900 transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Especialidades Relacionadas */}
        {relatedSpecialties.length > 0 && (
          <section className="py-10 border-b border-slate-200/80 space-y-4">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
              DISCIPLINAS CONECTADAS
            </span>
            <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
              Especialidades Correlatas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedSpecialties.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/especialidades/${spec.slug}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all block group"
                >
                  <h3 className="font-heading font-semibold text-sm text-slate-950 group-hover:text-sky-900 mb-1">
                    {spec.title}
                  </h3>
                  <span className="font-body text-xs text-sky-800 inline-flex items-center gap-1 font-medium">
                    <span>Acessar especialidade</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* AuthorBox */}
        <AuthorBox />

        {/* Navegação Inferior */}
        <div className="py-8 border-t border-slate-200/80 flex items-center justify-between">
          <Link
            href="/conhecimento/pesquisas"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Voltar para Projetos de Pesquisa
          </Link>
          <Link
            href="/curriculo-lattes"
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>Ver no Lattes Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
