import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_PROJECTS, getProjectBySlug } from "@/data/projects";
import { PERSON_SCHEMA_ID } from "@/lib/schema";
import ProductInstructor from "@/components/products/ProductInstructor";
import {
  Calendar,
  Factory,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  FileText,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DETAILED_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: `${project.title} | Projetos Técnicos | Prof. Dr. Wagner Eustáquio`,
    description: project.summary,
    alternates: {
      canonical: `/projetos/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Prof. Dr. Wagner Eustáquio`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Schema.org WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: project.title,
    description: project.summary,
    author: {
      "@id": PERSON_SCHEMA_ID,
    },
  };

  const otherProjects = DETAILED_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="py-12 bg-white">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Projetos", href: "/projetos" },
            { label: project.theme, href: "/projetos" },
            { label: project.title },
          ]}
        />

        {/* HERO DO PROJETO */}
        <div className="py-8 border-b border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              PROJETO TÉCNICO • {project.theme}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              <Calendar className="w-3 h-3 text-slate-500" />
              <span>{project.year}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-200">
              <Factory className="w-3 h-3 text-sky-600" />
              <span>{project.sector}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span>Tipo de atuação: <strong>{project.type}</strong></span>
            <span>•</span>
            <span>Responsável Técnico: <strong>Prof. Dr. Wagner Eustáquio</strong></span>
          </div>
        </div>

        {/* CONTEXTO & OBJETIVO */}
        <section className="py-10 border-b border-slate-100 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              CONTEXTO OPERACIONAL
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Cenário e Justificativa da Intervenção
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.context}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
              Objetivo Técnico Principal:
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {project.objective}
            </p>
          </div>
        </section>

        {/* DESAFIO & ABORDAGEM */}
        <section className="py-10 border-b border-slate-100 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              COMPLEXIDADE DE ENGENHARIA
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              O Desafio Técnico
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Abordagem Metodológica Executada:
            </h3>
            <div className="space-y-2.5">
              {project.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADOS DOCUMENTADOS */}
        {project.results && project.results.length > 0 && (
          <section className="py-10 border-b border-slate-100 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              ENTREGA TÉCNICA
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Resultados Factualmente Documentados
            </h2>
            <div className="space-y-2.5 pt-1">
              {project.results.map((r, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5 mt-4">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Relatórios técnicos, laudos periciais e ARTs emitidos sob termo de confidencialidade industrial e conformidade ética de engenharia.
              </span>
            </div>
          </section>
        )}

        {/* CONEXÕES: ESPECIALIDADES & ARTIGOS */}
        <section className="py-10 border-b border-slate-100 space-y-4">
          <h2 className="text-base font-bold text-slate-900">
            Conexões Técnicas Relacionadas:
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.relatedSpecialties.map((slug) => (
              <Link
                key={slug}
                href={`/especialidades/${slug}`}
                className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-800 text-xs font-semibold border border-slate-200 transition-colors"
              >
                Especialidade: {slug.replace(/-/g, " ")}
              </Link>
            ))}
            {project.relatedPublications &&
              project.relatedPublications.map((pubSlug) => (
                <Link
                  key={pubSlug}
                  href={`/conhecimento/publicacoes-cientificas/${pubSlug}`}
                  className="px-3.5 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-semibold border border-sky-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Artigo Científico Correlato</span>
                </Link>
              ))}
          </div>
        </section>

        {/* BIO DO AUTOR */}
        <section className="py-10 border-b border-slate-100">
          <ProductInstructor />
        </section>

        {/* CTA CONTATO */}
        <div className="my-10 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Demanda de projeto similar em sua empresa?</h3>
            <p className="text-xs text-slate-300">
              Conecte-se diretamente para uma análise preliminar de viabilidade e escopo técnico.
            </p>
          </div>
          <Link
            href="/contato/projetos"
            className="min-h-[44px] px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shrink-0 transition-colors flex items-center gap-2"
          >
            <span>Falar sobre Projetos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* OUTROS PROJETOS */}
        <section className="py-8">
          <h3 className="text-lg font-bold text-slate-950 mb-4">
            Outros Projetos Técnicos Selecionados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projetos/${p.slug}`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-white transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-sky-700 block mb-1">
                    {p.theme}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-900 line-clamp-2 mb-2">
                    {p.title}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-sky-700 inline-flex items-center gap-1 pt-2">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
