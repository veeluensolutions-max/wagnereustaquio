"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Bookmark, ExternalLink } from "lucide-react";
import BiografiaChaptersNav from "@/components/about/BiografiaChaptersNav";
import { useLanguage } from "@/context/LanguageContext";
import { BIOGRAFIA_TRANSLATIONS } from "@/data/biografiaData";

export default function BiografiaClient() {
  const { language } = useLanguage();
  const data = BIOGRAFIA_TRANSLATIONS[language] || BIOGRAFIA_TRANSLATIONS["pt-BR"];

  const chaptersNavItems = data.chapters.map((c) => ({
    id: c.id,
    number: c.number,
    title: c.title,
  }));

  return (
    <article className="py-10 sm:py-14 bg-white min-h-screen text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Sobre o Autor", href: "/sobre" },
            { label: data.title },
          ]}
        />

        {/* Cabeçalho Editorial */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Bookmark className="w-3.5 h-3.5" />
            <span>{data.officialBadge}</span>
          </div>

          <h1 className="font-heading font-[650] text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-[-0.04em] leading-[1.08]">
            {data.title}
          </h1>

          <p className="font-body font-normal text-lg sm:text-xl text-slate-600 leading-[1.6] tracking-[-0.01em] max-w-3xl">
            {data.subtitle}
          </p>
        </header>

        {/* Painel de Navegação Rápida entre Capítulos */}
        <BiografiaChaptersNav
          chapters={chaptersNavItems}
          navLabel={data.chaptersNavLabel}
          indexBtnLabel={data.indexMobileBtn}
          readingSummaryLabel={data.readingSummary}
        />

        {/* Retrato e Síntese de Fatos */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-200/80">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative aspect-[3.4/4] w-full max-w-[280px] rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-200">
              <Image
                src="/images/wagner-vasconcelos.jpg"
                alt="Prof. Dr. Wagner Eustáquio de Vasconcelos"
                fill
                sizes="280px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block">
                {data.factualSheetTitle}
              </span>
              <ul className="font-body text-sm text-slate-700 space-y-2 leading-relaxed">
                {data.factualFacts.map((fact, idx) => (
                  <li key={idx}>
                    <strong className="font-semibold text-slate-950">{fact.label} </strong>
                    <span>{fact.value}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <a
                  href="http://lattes.cnpq.br/7844785807954101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 transition-colors"
                >
                  <span>{data.lattesValidationText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* NARRATIVA EM 7 CAPÍTULOS */}
        <div className="py-12 max-w-3xl mx-auto space-y-16">
          {data.chapters.map((chapter) => (
            <section
              key={chapter.id}
              id={chapter.id}
              className="scroll-mt-24 space-y-5 pt-8 first:pt-0 border-t first:border-t-0 border-slate-100"
            >
              <div className="flex items-center gap-3">
                <span className={`font-heading text-xs font-bold px-2.5 py-1 rounded-md ${chapter.badgeBg} ${chapter.badgeText}`}>
                  {chapter.badge}
                </span>
                <span className="font-body text-xs text-slate-400 font-medium">
                  {chapter.period}
                </span>
              </div>

              <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
                {chapter.heading}
              </h2>

              {/* Destaque opcional */}
              {chapter.callout && (
                <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200/80 my-4">
                  <p className="font-heading font-semibold text-lg text-sky-950 leading-snug">
                    {chapter.callout.quote}
                  </p>
                  <p className="font-body text-xs text-sky-800 mt-2 font-medium">
                    {chapter.callout.sub}
                  </p>
                </div>
              )}

              {/* Citação em destaque */}
              {chapter.quoteBlock && (
                <blockquote className="pl-4 border-l-2 border-sky-500 font-heading text-slate-900 font-semibold text-base py-1">
                  {chapter.quoteBlock}
                </blockquote>
              )}

              {/* Parágrafos de texto */}
              <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
                {chapter.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {/* Grade de disciplinas para docência */}
                {chapter.disciplines && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                    {chapter.disciplines.map((disc, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{disc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tópicos com marcadores */}
                {chapter.bulletPoints && (
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                    {chapter.bulletPoints.map((item, bIdx) => (
                      <li key={bIdx}>
                        <strong>{item.bold} </strong>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links cruzados */}
                {chapter.crossLinks && chapter.crossLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {chapter.crossLinks.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.href}
                        className="text-sky-800 font-semibold underline underline-offset-4 hover:text-sky-950 inline-flex items-center gap-1 text-sm"
                      >
                        <span>{link.label} →</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* Fechamento Síntese da Biografia */}
          <div className="mt-8 p-7 rounded-3xl bg-slate-900 text-white space-y-3">
            <p className="font-heading font-semibold text-lg text-white">
              {data.closingCard.title}
            </p>
            <p className="font-body text-sm text-slate-300 leading-relaxed">
              {data.closingCard.p}
            </p>
            <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-sky-300 font-medium">
              <Link href="/sobre/trajetoria" className="hover:text-white inline-flex items-center gap-1">
                <span>{data.closingCard.timelineLink}</span>
              </Link>
              <Link href="/sobre/formacao" className="hover:text-white inline-flex items-center gap-1">
                <span>{data.closingCard.educationLink}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
