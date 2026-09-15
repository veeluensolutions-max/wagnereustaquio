import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductInstructor from "@/components/products/ProductInstructor";
import WaitlistForm from "@/components/products/WaitlistForm";
import { LEAD_MAGNET_7_APLICACOES } from "@/data/products";
import { BookOpen, CheckCircle2, Sparkles, Clock, AlertCircle, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Aplicações Práticas de IA na Engenharia | Guia Gratuito | Prof. Dr. Wagner Eustáquio",
  description:
    "Descubra como a Inteligência Artificial, Lógica Fuzzy e Redes Neurais resolvem problemas reais de confiabilidade, processos e meio ambiente.",
  alternates: {
    canonical: "/materiais/7-aplicacoes-ia-engenharia",
  },
};

export default function LeadMagnetPage() {
  const guide = LEAD_MAGNET_7_APLICACOES;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Materiais Técnicos" },
            { label: "7 Aplicações de IA" },
          ]}
        />

        {/* HERO */}
        <div className="py-8 border-b border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              GUIA TÉCNICO GRATUITO
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{guide.badge || "EM DESENVOLVIMENTO"}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {guide.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {guide.fullDescription || guide.description}
          </p>

          <div className="pt-2">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shadow-sm cursor-pointer"
            >
              <span>Garantir exemplar no lançamento</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* PREVIEW DOS 7 CASOS PRÁTICOS */}
        <section className="py-10 border-b border-slate-100 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              CONTEÚDO DO GUIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Os 7 Cenários Industriais Abordados
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Aplicações selecionadas com base em mais de 20 anos de docência, pesquisa e projetos em plantas industriais reais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {guide.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* AVISO ÉTICO TRANSPARENTE: SEM DOWNLOAD FAKE */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs flex items-start gap-3 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Material em fase de finalização editorial:</strong>
              <span>
                Para assegurar a máxima precisão técnica, este guia está sendo revisado pelo Prof. Wagner. Ao se inscrever no formulário abaixo, você será o primeiro a receber o PDF diretamente no seu e-mail assim que a edição for liberada.
              </span>
            </div>
          </div>
        </section>

        {/* BIOGRAFIA DO AUTOR */}
        <section className="py-10 border-b border-slate-100">
          <ProductInstructor />
        </section>

        {/* FORMULÁRIO DE CAPTURA */}
        <section id="waitlist" className="py-12">
          <WaitlistForm
            productTitle="Guia: 7 Aplicações de IA na Engenharia"
            defaultInterest="IA"
            sourceContext="lead_magnet_7_aplicacoes"
          />
        </section>

      </div>
    </div>
  );
}
