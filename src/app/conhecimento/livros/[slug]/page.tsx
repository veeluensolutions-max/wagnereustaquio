import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PUBLISHED_BOOK } from "@/data/book";
import { getBookSchema } from "@/lib/schema";
import { BookOpen, Check, ArrowRight, Layers, Sparkles, ExternalLink } from "lucide-react";
import AuthorBox from "@/components/knowledge/AuthorBox";
import ContentEngagementTracker from "@/components/analytics/ContentEngagementTracker";

interface BookPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [{ slug: PUBLISHED_BOOK.slug }];
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== PUBLISHED_BOOK.slug) {
    return { title: "Livro não encontrado" };
  }

  return {
    title: `${PUBLISHED_BOOK.title} | Prof. Dr. Wagner Eustáquio`,
    description: PUBLISHED_BOOK.description,
    alternates: {
      canonical: `/conhecimento/livros/${slug}`,
    },
    openGraph: {
      title: PUBLISHED_BOOK.title,
      description: PUBLISHED_BOOK.description,
      type: "book",
    },
  };
}

export default async function BookDetailPage({ params }: BookPageProps) {
  const { slug } = await params;
  if (slug !== PUBLISHED_BOOK.slug) {
    notFound();
  }

  const book = PUBLISHED_BOOK;

  // Schema Book conectado à entidade central
  const bookSchema = getBookSchema(book);

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 min-h-screen text-slate-900">
      {/* Schema Book */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      <ContentEngagementTracker
        eventName="view_book"
        params={{
          content_title: book.title,
          content_slug: book.slug,
          content_type: "book",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Conhecimento", href: "/conhecimento" },
            { label: "Livros", href: "/conhecimento/livros" },
            { label: book.title },
          ]}
        />

        {/* Cabeçalho */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-[11px] font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70 uppercase tracking-wider">
              OBRA MONOGRÁFICA AUTORAL
            </span>
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
              Ano {book.year} • {book.pages} páginas
            </span>
          </div>

          <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.14]">
            {book.title}
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-slate-600 leading-[1.65] tracking-[-0.008em]">
            {book.subtitle}
          </p>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-xs sm:text-sm font-body text-slate-600 space-y-1 shadow-2xs">
            <p><strong className="text-slate-900">Autor:</strong> {book.author}</p>
            <p><strong className="text-slate-900">Editora:</strong> {book.publisher}</p>
            <p><strong className="text-slate-900">Extensão:</strong> {book.pages} páginas</p>
          </div>
        </header>

        {/* Contexto da Obra */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            CONTEXTO & GÊNESE
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Contexto da Obra
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            {book.context}
          </p>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            {book.description}
          </p>
        </section>

        {/* Temas Abordados */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            CONTEÚDO PROGRAMÁTICO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Temas Abordados no Livro
          </h2>
          <div className="space-y-2">
            {book.topics.map((t, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-body text-slate-800">
                <Check className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Estrutura de Capítulos */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 block">
            SUMÁRIO DA OBRA
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Estrutura dos Capítulos
          </h2>
          <div className="space-y-2">
            {book.tableOfContents.map((chap, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-xs sm:text-sm font-body text-slate-700 font-medium">
                {chap}
              </div>
            ))}
          </div>
        </section>

        {/* Relação com a Trajetória de Wagner */}
        <section className="py-10 border-b border-slate-200/80 space-y-4">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 block">
            HISTÓRICO ACADÊMICO
          </span>
          <h2 className="font-heading font-semibold text-2xl text-slate-950 tracking-[-0.02em]">
            Relação com a Trajetória de Wagner
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
            {book.trajectoryConnection}
          </p>

          <div className="pt-4">
            <Link
              href="/especialidades/logica-fuzzy"
              className="px-6 py-3 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-body text-xs font-semibold tracking-wide transition-all shadow-md inline-flex items-center gap-2 min-h-[44px]"
            >
              <span>{book.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* AuthorBox */}
        <AuthorBox />

        {/* Navegação Inferior */}
        <div className="py-8 border-t border-slate-200/80 flex items-center justify-between">
          <Link
            href="/conhecimento/livros"
            className="font-body text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center"
          >
            ← Voltar para Obras e Livros
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
