import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SCIENTIFIC_PUBLICATIONS, ScientificPublication } from "@/data/publications";
import { SPECIALTIES_DATA } from "@/data/specialties";
import { PERSON_SCHEMA_ID } from "@/lib/schema";
import { Award, ExternalLink, ArrowRight, CheckCircle2, Copy, BookOpen } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";
import ContentEngagementTracker from "@/components/analytics/ContentEngagementTracker";

interface PublicationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SCIENTIFIC_PUBLICATIONS.map((pub) => ({
    slug: pub.slug,
  }));
}

export async function generateMetadata({
  params,
}: PublicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pub = SCIENTIFIC_PUBLICATIONS.find((p) => p.slug === slug);

  if (!pub) {
    return {
      title: "Publicação não encontrada",
    };
  }

  return {
    title: `${pub.title} | Wagner Eustáquio de Vasconcelos`,
    description: pub.editorialSummary,
    alternates: {
      canonical: `/conhecimento/publicacoes-cientificas/${slug}`,
    },
    openGraph: {
      title: pub.title,
      description: pub.editorialSummary,
      type: "article",
    },
  };
}

export default async function PublicationDetailPage({ params }: PublicationPageProps) {
  const { slug } = await params;
  const pub = SCIENTIFIC_PUBLICATIONS.find((p) => p.slug === slug);

  if (!pub) {
    notFound();
  }

  const relatedSpecialties = (pub.relatedSpecialties || [])
    .map((s) => SPECIALTIES_DATA[s])
    .filter(Boolean);

  const relatedPubs = (pub.relatedPublicationSlugs || [])
    .map((s) => SCIENTIFIC_PUBLICATIONS.find((p) => p.slug === s))
    .filter(Boolean) as ScientificPublication[];

  // Schema ScholarlyArticle
  const scholarlySchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": pub.title,
    "description": pub.editorialSummary,
    "datePublished": `${pub.year}`,
    "inLanguage": "pt-BR",
    "author": pub.authors.map((authorName) => ({
      "@type": "Person",
      "name": authorName,
      ...(authorName.includes("Wagner")
        ? {
            "@id": PERSON_SCHEMA_ID,
            "sameAs": "http://lattes.cnpq.br/7844785807954101",
          }
        : {}),
    })),
    "isPartOf": {
      "@type": "Periodical",
      "name": pub.journalOrEvent,
    },
  };

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      {/* Schema ScholarlyArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlySchema) }}
      />

      <ContentEngagementTracker
        eventName="view_publication"
        params={{
          content_title: pub.title,
          content_slug: pub.slug,
          content_type: "scientific_publication",
          publication_year: pub.year,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Publicações Científicas", href: "/conhecimento/publicacoes-cientificas" },
            { label: pub.typeLabel },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-[11px] font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70 uppercase tracking-wider">
              {pub.typeLabel}
            </span>
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
              Ano {pub.year}
            </span>
          </div>

          <h1 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-[-0.03em] leading-snug">
            {pub.title}
          </h1>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-body text-slate-600 space-y-1 shadow-2xs">
            <p>
              <strong className="text-slate-900">Veículo de Publicação:</strong> {pub.journalOrEvent}
            </p>
            {pub.volume && (
              <p>
                <strong className="text-slate-900">Volume / Edição:</strong> {pub.volume} {pub.issue && `(${pub.issue})`} {pub.pages && `— ${pub.pages}`}
              </p>
            )}
            <p>
              <strong className="text-slate-900">Autores:</strong> {pub.authors.join(", ")}
            </p>
          </div>
        </header>

        {/* Resumo Editorial */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            RESUMO EDITORIAL
          </span>
          <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
            Contexto Científico e Metodológico
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            {pub.editorialSummary}
          </p>
        </section>

        {/* Relação com as Áreas de Atuação */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            CONEXÃO COM A PRÁTICA
          </span>
          <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
            Relação com os Territórios de Conhecimento
          </h2>
          <div className="space-y-2">
            {pub.areasRelationship.map((areaRel, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-body text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>{areaRel}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Como Citar */}
        <section className="py-10 border-b border-slate-200/80 space-y-3">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            REFERÊNCIA PADRONIZADA (ABNT)
          </span>
          <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
            Como Citar este Trabalho
          </h2>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed select-all">
            {pub.citationText}
          </div>
        </section>

        {/* Especialidades Relacionadas */}
        {relatedSpecialties.length > 0 && (
          <section className="py-10 border-b border-slate-200/80 space-y-4">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
              APROFUNDAMENTO TÉCNICO
            </span>
            <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
              Especialidades Conectadas
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

        {/* Publicações Relacionadas */}
        {relatedPubs.length > 0 && (
          <section className="py-10 border-b border-slate-200/80 space-y-4">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
              PRODUÇÃO CORRELATA
            </span>
            <h2 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
              Trabalhos Acadêmicos Relacionados
            </h2>
            <div className="space-y-3">
              {relatedPubs.map((relPub) => (
                <Link
                  key={relPub.slug}
                  href={`/conhecimento/publicacoes-cientificas/${relPub.slug}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all block group"
                >
                  <span className="font-mono text-[10.5px] font-semibold text-slate-400 block mb-1">
                    Ano {relPub.year} • {relPub.typeLabel}
                  </span>
                  <h3 className="font-heading font-semibold text-sm text-slate-900 group-hover:text-sky-900 transition-colors">
                    {relPub.title}
                  </h3>
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
            href="/conhecimento/publicacoes-cientificas"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Voltar para Publicações Científicas
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
