import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_MENTORINGS, getProductBySlug } from "@/data/products";
import WaitlistForm from "@/components/products/WaitlistForm";
import ProductInstructor from "@/components/products/ProductInstructor";
import RelatedProducts from "@/components/products/RelatedProducts";
import { Users, CheckCircle2, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DETAILED_MENTORINGS.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mentoria = getProductBySlug(slug);

  if (!mentoria) {
    return { title: "Mentoria não encontrada" };
  }

  return {
    title: `${mentoria.title} | Orientação Especializada | Prof. Dr. Wagner Eustáquio`,
    description: mentoria.description,
    alternates: {
      canonical: `/produtos/mentorias/${mentoria.slug}`,
    },
  };
}

export default async function MentoringDetailPage({ params }: Props) {
  const { slug } = await params;
  const mentoria = getProductBySlug(slug);

  if (!mentoria || mentoria.type !== "mentoring") {
    notFound();
  }

  const otherMentorings = DETAILED_MENTORINGS.filter((m) => m.slug !== mentoria.slug);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Mentorias", href: "/produtos/mentorias" },
            { label: mentoria.title },
          ]}
        />

        {/* HERO DA MENTORIA */}
        <div className="py-8 border-b border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              ACOMPANHAMENTO INDIVIDUAL & ESTRATÉGICO
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{mentoria.badge || "VAGAS LIMITADAS"}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {mentoria.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {mentoria.description}
          </p>

          <div className="pt-2">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shadow-sm cursor-pointer"
            >
              <span>{mentoria.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* DETALHES & BENEFÍCIOS */}
        <section className="py-10 border-b border-slate-100 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">
              Como funciona o acompanhamento
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {mentoria.fullDescription || mentoria.description}
            </p>
          </div>

          {mentoria.audience && (
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-700" />
                <span>Perfil indicado:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mentoria.audience.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {mentoria.benefits && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-950">
                O que está incluso na mentoria:
              </h3>
              <div className="space-y-2.5">
                {mentoria.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* INSTRUTOR */}
        <section className="py-10 border-b border-slate-100">
          <ProductInstructor />
        </section>

        {/* FORMULÁRIO DE APLICAÇÃO */}
        <section id="waitlist" className="py-12">
          <WaitlistForm
            productTitle={mentoria.title}
            defaultInterest={mentoria.slug === "mentoria-tecnica" ? "IA / Modelagem" : "Carreira / Perícias"}
            sourceContext={`mentoring_page_${mentoria.slug}`}
          />
        </section>

        {/* OUTRA MENTORIA */}
        <RelatedProducts products={otherMentorings} title="Outras Modalidades de Mentoria" />
      </div>
    </div>
  );
}
