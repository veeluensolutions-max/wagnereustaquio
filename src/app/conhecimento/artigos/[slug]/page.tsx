import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ARTICLES_DATA, Article } from "@/data/articles";
import { SPECIALTIES_DATA } from "@/data/specialties";
import { getArticleSchema } from "@/lib/schema";
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  Layers,
  FileText
} from "lucide-react";
import ReadingProgressBar from "@/components/editorial/ReadingProgressBar";
import ArticleTableOfContents from "@/components/editorial/ArticleTableOfContents";
import ArticleReferences from "@/components/editorial/ArticleReferences";
import RegulatoryDisclaimer from "@/components/editorial/RegulatoryDisclaimer";
import LeadMagnetCard from "@/components/editorial/LeadMagnetCard";
import ArticleShareButtons from "@/components/editorial/ArticleShareButtons";
import AuthorBox from "@/components/knowledge/AuthorBox";
import NewsletterSection from "@/components/home/NewsletterSection";
import ArticleEngagementTracker from "@/components/analytics/ArticleEngagementTracker";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: `${article.h1} | Prof. Dr. Wagner Eustáquio`,
    description: article.subtitle || article.excerpt,
    alternates: {
      canonical: `/conhecimento/artigos/${slug}`,
    },
    // Controle de Indexação: apenas artigos published são indexáveis
    robots: {
      index: article.status === "published",
      follow: true,
    },
    openGraph: {
      title: article.h1,
      description: article.subtitle || article.excerpt,
      type: "article",
      url: `/conhecimento/artigos/${slug}`,
      authors: [article.author.name],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedSpecialties = (article.relatedSpecialties || [])
    .map((s) => SPECIALTIES_DATA[s])
    .filter(Boolean);

  const relatedArticles = (article.relatedArticles || [])
    .map((s) => ARTICLES_DATA.find((a) => a.slug === s))
    .filter(Boolean) as Article[];

  // Schema JSON-LD Article conectado à entidade central
  const schemaData = getArticleSchema({
    title: article.h1,
    description: article.subtitle || article.excerpt,
    slug: article.slug,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    tags: article.tags,
  });

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900 relative">
      <ReadingProgressBar />
      <ArticleEngagementTracker
        articleTitle={article.h1}
        articleCategory={article.categoryLabel}
        articleSlug={article.slug}
      />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Artigos", href: "/conhecimento/artigos" },
            { label: article.categoryLabel },
          ]}
        />

        {/* Cabeçalho do Artigo */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-[11px] font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70 uppercase tracking-wider">
              {article.categoryLabel}
            </span>
            <span className="font-body text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 uppercase">
              STATUS: DRAFT
            </span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.14]">
            {article.h1}
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            {article.subtitle}
          </p>

          {/* Metadados Editoriais */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-body text-slate-500 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800">
                {article.author.name}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Atualizado em {article.updatedAt}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Botões de Compartilhamento Superior */}
        <ArticleShareButtons title={article.h1} url={`/conhecimento/artigos/${article.slug}`} />

        {/* Sumário Dinâmico */}
        <ArticleTableOfContents sections={article.sections} />

        {/* Disclaimer Regulatório (quando aplicável) */}
        {article.disclaimer && (
          <RegulatoryDisclaimer customText={article.disclaimer} />
        )}

        {/* Corpo do Artigo (Tipografia Confortável >= 16px) */}
        <main className="py-8 space-y-10">
          {article.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="space-y-3 scroll-mt-28">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-slate-950 tracking-[-0.02em] leading-snug">
                {section.title}
              </h2>
              <p className="font-body text-base text-slate-700 leading-[1.8] tracking-[-0.005em]">
                {section.content}
              </p>
            </section>
          ))}
        </main>

        {/* Lead Magnet Contextual de IA (quando aplicável) */}
        {article.hasLeadMagnet && <LeadMagnetCard />}

        {/* Referências Bibliográficas ABNT */}
        <ArticleReferences references={article.references} />

        {/* Botões de Compartilhamento Inferior */}
        <ArticleShareButtons title={article.h1} url={`/conhecimento/artigos/${article.slug}`} />

        {/* AuthorBox Oficial de Wagner */}
        <AuthorBox />

        {/* Especialidades Relacionadas */}
        {relatedSpecialties.length > 0 && (
          <section className="my-10 pt-8 border-t border-slate-200/80">
            <div className="mb-4">
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
                CONEXÃO METODOLÓGICA
              </span>
              <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
                Especialidades Conectadas a este Tema
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedSpecialties.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/especialidades/${spec.slug}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all block group"
                >
                  <h4 className="font-heading font-semibold text-sm text-slate-900 group-hover:text-sky-900 mb-1">
                    {spec.title}
                  </h4>
                  <span className="font-body text-xs text-sky-800 inline-flex items-center gap-1 font-medium">
                    <span>Aprofundar</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Artigos Relacionados */}
        {relatedArticles.length > 0 && (
          <section className="my-10 pt-8 border-t border-slate-200/80">
            <div className="mb-4">
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block mb-1">
                LEIA TAMBÉM
              </span>
              <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em]">
                Artigos Complementares
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((relArt) => (
                <Link
                  key={relArt.slug}
                  href={`/conhecimento/artigos/${relArt.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all block group"
                >
                  <span className="font-body text-[11px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100 inline-block mb-2">
                    {relArt.categoryLabel}
                  </span>
                  <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-900 group-hover:text-sky-900 transition-colors line-clamp-2 mb-1">
                    {relArt.title}
                  </h4>
                  <p className="font-body text-xs text-slate-500 line-clamp-2">
                    {relArt.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Editorial */}
        <div className="my-12">
          <NewsletterSection />
        </div>

        {/* Navegação Inferior */}
        <div className="py-8 border-t border-slate-200/80 flex items-center justify-between">
          <Link
            href="/conhecimento/artigos"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Voltar para todos os Artigos
          </Link>
          <Link
            href="/conhecimento"
            className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>Hub de Conhecimento</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
