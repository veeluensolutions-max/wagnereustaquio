import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_EBOOKS } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import WaitlistForm from "@/components/products/WaitlistForm";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "E-books e Manuais Técnicos de Engenharia | Prof. Dr. Wagner Eustáquio",
  description:
    "Guias de referência prática, e-books e procedimentos de cálculo sobre IA na Engenharia, AERMOD e Lógica Fuzzy.",
  alternates: {
    canonical: "/produtos/ebooks",
  },
};

export default function EbooksPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "E-books Técnicos" },
          ]}
        />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            MATERIAL DIDÁTICO & REFERÊNCIA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            E-books e Manuais de Engenharia
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Publicações técnicas estruturadas para consulta rápida na bancada de trabalho, sala de controle e desenvolvimento de projetos de consultoria.
          </p>
        </div>

        {/* Grade de E-books */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {DETAILED_EBOOKS.map((ebook) => (
            <ProductCard key={ebook.id} product={ebook} basePath="/produtos/ebooks" />
          ))}
        </div>

        {/* Destaque Lead Magnet */}
        <div className="my-8 p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-mono uppercase text-sky-400">MATERIAL DIDÁTICO GRATUITO</span>
            <h3 className="text-xl font-bold">7 Aplicações Práticas de IA na Engenharia</h3>
            <p className="text-xs text-slate-300">
              Conheça onde e como a Inteligência Artificial e a Lógica Fuzzy geram impacto concreto na rotina industrial.
            </p>
          </div>
          <Link
            href="/materiais/7-aplicacoes-ia-engenharia"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shrink-0 transition-colors shadow-sm"
          >
            Conhecer o Guia
          </Link>
        </div>

        {/* Formulário Geral de Interesse */}
        <div className="my-8">
          <WaitlistForm
            productTitle="E-books e Manuais Técnicos"
            defaultInterest="E-books"
            sourceContext="ebooks_hub"
          />
        </div>

      </div>
    </div>
  );
}
