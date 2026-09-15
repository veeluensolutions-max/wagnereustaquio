import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SPECIALTIES_DATA } from "@/data/specialties";
import { PERSON_SCHEMA_ID } from "@/lib/schema";
import { siteConfig } from "@/lib/seo";
import { 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  ShieldAlert, 
  ExternalLink,
  Layers,
  AlertCircle
} from "lucide-react";
import FuzzySimulator from "@/components/tools/FuzzySimulator";
import SpecialtyDiagram from "@/components/knowledge/SpecialtyDiagram";
import SpecialtyFAQ from "@/components/knowledge/SpecialtyFAQ";
import AuthorBox from "@/components/knowledge/AuthorBox";
import FutureProductCard from "@/components/knowledge/FutureProductCard";
import ContentEngagementTracker from "@/components/analytics/ContentEngagementTracker";

interface SpecialtyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SPECIALTIES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: SpecialtyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = SPECIALTIES_DATA[slug];

  if (!specialty) {
    return {
      title: "Especialidade não encontrada",
    };
  }

  return {
    title: specialty.seoTitle || `${specialty.h1} | Prof. Dr. Wagner Eustáquio`,
    description: specialty.metaDescription || specialty.summary,
    alternates: {
      canonical: `/especialidades/${slug}`,
    },
    openGraph: {
      title: specialty.seoTitle || specialty.h1,
      description: specialty.metaDescription || specialty.summary,
      url: `/especialidades/${slug}`,
      type: "article",
    },
  };
}

export default async function SpecialtyPage({ params }: SpecialtyPageProps) {
  const { slug } = await params;
  const specialty = SPECIALTIES_DATA[slug];

  if (!specialty) {
    notFound();
  }

  const relatedSpecialties = (specialty.clusterRelatedSlugs || [])
    .map((s) => SPECIALTIES_DATA[s])
    .filter(Boolean);

  // Schema JSON-LD: Article + Person + Breadcrumbs
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteConfig.siteUrl}/especialidades/${specialty.slug}#article`,
        "headline": specialty.h1,
        "description": specialty.metaDescription || specialty.summary,
        "inLanguage": "pt-BR",
        "author": {
          "@id": PERSON_SCHEMA_ID,
        },
        "publisher": {
          "@type": "Person",
          "@id": PERSON_SCHEMA_ID,
          "name": siteConfig.authorName,
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://wagner-vasconcelos.eng.br/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": specialty.pillarTitle,
            "item": `https://wagner-vasconcelos.eng.br/areas-de-conhecimento/${specialty.pillarSlug}`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": specialty.title,
            "item": `https://wagner-vasconcelos.eng.br/especialidades/${specialty.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <ContentEngagementTracker
        eventName="view_specialty"
        params={{
          specialty: specialty.title,
          knowledge_area: specialty.pillarTitle,
          content_slug: specialty.slug,
          content_type: "specialty",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Áreas de Conhecimento", href: "/areas-de-conhecimento" },
            { label: specialty.pillarTitle, href: `/areas-de-conhecimento/${specialty.pillarSlug}` },
            { label: specialty.title },
          ]}
        />

        {/* 1. Cabeçalho Editorial */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={`/areas-de-conhecimento/${specialty.pillarSlug}`}
              className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 bg-sky-50 hover:bg-sky-100 px-3 py-1 rounded-full border border-sky-200/70 transition-colors inline-flex items-center gap-1.5"
            >
              <span>PILAR: {specialty.pillarTitle}</span>
            </Link>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.14]">
            {specialty.h1}
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            {specialty.lead || specialty.summary}
          </p>
        </header>

        {/* 2. Diagrama Conceitual / Fluxo */}
        <SpecialtyDiagram type={specialty.diagramType} />

        {/* 3. Visão Geral e Conceito Técnico */}
        <section className="py-10 border-b border-slate-200/80 space-y-5">
          <div>
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
              FUNDAMENTAÇÃO
            </span>
            <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
              O que é e como funciona
            </h2>
          </div>

          <div className="space-y-4 font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>{specialty.description}</p>
            {specialty.technicalConcept && (
              <p className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 text-slate-800 leading-relaxed text-xs sm:text-sm">
                <strong className="font-semibold text-slate-950 block mb-1">Princípio Operacional:</strong>
                {specialty.technicalConcept}
              </p>
            )}
          </div>
        </section>

        {/* 4. Simulador Interativo Embarcado (quando aplicável) */}
        {specialty.slug === "logica-fuzzy" && (
          <section className="py-10 border-b border-slate-200/80">
            <div className="mb-4">
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block mb-1">
                FERRAMENTA INTERATIVA
              </span>
              <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
                Simulador de Inferência Fuzzy em Tempo Real
              </h2>
              <p className="font-body text-xs sm:text-sm text-slate-600 mt-1">
                Experimente alterar as entradas operacionais de temperatura e pressão para observar as funções de pertinência e o cálculo contínuo da saída desfuzzificada.
              </p>
            </div>
            <FuzzySimulator />
          </section>
        )}

        {/* 5. Experiência e Pesquisa de Wagner */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <div>
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block mb-1">
              AUTORIDADE & RIGOR FACTUAL
            </span>
            <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
              A relação de Wagner com esta disciplina
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            {specialty.wagnerConnection}
          </p>

          {/* Bloco de Livro Relacionado */}
          {specialty.hasBook && (
            <div className="mt-6 p-6 rounded-2xl bg-white border border-sky-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-800 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
                    OBRA PUBLICADA
                  </span>
                  <h3 className="font-heading font-semibold text-base text-slate-950">
                    Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental
                  </h3>
                  <p className="font-body text-xs text-slate-500">
                    Livro técnico autoral publicado em 2010 (Ed. Novas Edições Acadêmicas).
                  </p>
                </div>
              </div>
              <Link
                href="/conhecimento/livros"
                className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors shrink-0 min-h-[44px] flex items-center gap-1.5"
              >
                <span>Conheça o livro</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Aviso Normativo Discreto (ex: NR-13) */}
          {specialty.disclaimer && (
            <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs font-body flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{specialty.disclaimer}</p>
            </div>
          )}
        </section>

        {/* 6. Fundamentos e Aplicações Industriais */}
        <section className="py-10 border-b border-slate-200/80 space-y-8">
          <div>
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
              CONHECIMENTO APLICADO
            </span>
            <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em] mb-4">
              Fundamentos Técnicos & Aplicações
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-heading font-semibold text-sm text-slate-900 uppercase tracking-wider text-sky-800">
                  Fundamentos Teóricos
                </h3>
                <ul className="space-y-2">
                  {specialty.fundamentals.map((fund, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-body text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                      <span>{fund}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-semibold text-sm text-slate-900 uppercase tracking-wider text-slate-800">
                  Aplicações Industriais Reais
                </h3>
                <ul className="space-y-2">
                  {specialty.industrialApplications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-body text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ Contextual com Schema FAQPage */}
        {specialty.faqItems && specialty.faqItems.length > 0 && (
          <SpecialtyFAQ
            items={specialty.faqItems}
            specialtyTitle={specialty.title}
          />
        )}

        {/* 8. Produtos Futuros / Lista de Interesse */}
        {specialty.futureProduct && (
          <FutureProductCard
            product={specialty.futureProduct}
            specialtySlug={specialty.slug}
          />
        )}

        {/* 9. AuthorBox Institucional */}
        <AuthorBox />

        {/* 10. Continue Explorando (Links Internos) */}
        {relatedSpecialties.length > 0 && (
          <section className="py-10 border-t border-slate-200/80">
            <div className="mb-6">
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
                NAVEGAÇÃO CONTEXTUAL
              </span>
              <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
                Continue explorando especialidades correlatas
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedSpecialties.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/especialidades/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-slate-950 group-hover:text-sky-900 transition-colors mb-2">
                      {rel.title}
                    </h3>
                    <p className="font-body text-xs text-slate-600 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-sky-800">
                    <span>Acessar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navegação Inferior */}
        <div className="py-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/especialidades"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Voltar para Todas as Especialidades
          </Link>
          <Link
            href={`/areas-de-conhecimento/${specialty.pillarSlug}`}
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>Ver Pilar: {specialty.pillarTitle}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
