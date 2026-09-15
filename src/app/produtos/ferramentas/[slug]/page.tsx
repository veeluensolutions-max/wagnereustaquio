import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_TOOLS, getProductBySlug } from "@/data/products";
import WaitlistForm from "@/components/products/WaitlistForm";
import ProductInstructor from "@/components/products/ProductInstructor";
import RelatedProducts from "@/components/products/RelatedProducts";
import { Wrench, CheckCircle2, Clock, AlertTriangle, FileSpreadsheet } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DETAILED_TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getProductBySlug(slug);

  if (!tool) {
    return { title: "Ferramenta não encontrada" };
  }

  return {
    title: `${tool.title} | Recursos Práticos | Prof. Dr. Wagner Eustáquio`,
    description: tool.description,
    alternates: {
      canonical: `/produtos/ferramentas/${tool.slug}`,
    },
  };
}

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;
  const tool = getProductBySlug(slug);

  if (!tool || tool.type !== "tool") {
    notFound();
  }

  const otherTools = DETAILED_TOOLS.filter((t) => t.slug !== tool.slug);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Ferramentas & Recursos", href: "/produtos/ferramentas" },
            { label: tool.title },
          ]}
        />

        {/* HERO DA FERRAMENTA */}
        <div className="py-8 border-b border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              RECURSO PRÁTICO DE ENGENHARIA
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>{tool.badge || "PLANEJADO"}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
            <FileSpreadsheet className="w-8 h-8 text-sky-700 shrink-0" />
            <span>{tool.title}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {tool.description}
          </p>

          {/* AVISO REGULATÓRIO NR-13 OU GERAL */}
          {tool.disclaimer && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3 leading-relaxed">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Aviso Regulatório e de Responsabilidade:</strong>
                <span>{tool.disclaimer}</span>
              </div>
            </div>
          )}

          <div className="pt-2">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              <span>Manifestar interesse na ferramenta</span>
            </a>
          </div>
        </div>

        {/* RECURSOS E DESTAQUES */}
        <section className="py-10 border-b border-slate-100 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Estrutura e Recursos Inclusos
          </h2>

          <div className="space-y-3">
            {tool.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 italic">
            Recursos em fase de validação técnica computacional e adequação à legislação vigente. Não há simulação vazia ou arquivo genérico disponível para download antes da aprovação final.
          </p>
        </section>

        {/* INSTRUTOR / RESPONSÁVEL TÉCNICO */}
        <section className="py-10 border-b border-slate-100">
          <ProductInstructor />
        </section>

        {/* FORMULÁRIO DE INTERESSE */}
        <section id="waitlist" className="py-12">
          <WaitlistForm
            productTitle={tool.title}
            defaultInterest={tool.title}
            sourceContext={`tool_page_${tool.slug}`}
          />
        </section>

        {/* OUTRAS FERRAMENTAS */}
        <RelatedProducts products={otherTools} title="Outras Ferramentas e Recursos" />
      </div>
    </div>
  );
}
