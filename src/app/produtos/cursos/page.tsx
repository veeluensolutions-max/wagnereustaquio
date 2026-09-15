import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_COURSES } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import WaitlistForm from "@/components/products/WaitlistForm";
import { GraduationCap, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos Técnicos de Extensão | Prof. Dr. Wagner Eustáquio",
  description:
    "Formações de engenharia com rigor acadêmico e validação prática em Inteligência Artificial, Lógica Fuzzy e Modelagem AERMOD.",
  alternates: {
    canonical: "/produtos/cursos",
  },
};

export default function CursosPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Cursos Técnicos" },
          ]}
        />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            EDUCAÇÃO CONTINUADA DE ENGENHARIA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Cursos Técnicos de Extensão
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Programas desenhados para capacitar engenheiros e líderes técnicos a dominar Inteligência Artificial, modelagem matemática e dispersão atmosférica com rigor conceitual e foco em problemas reais.
          </p>
        </div>

        {/* Grade de Cursos */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {DETAILED_COURSES.map((course) => (
            <ProductCard key={course.id} product={course} basePath="/produtos/cursos" />
          ))}
        </div>

        {/* Formulário Geral de Interesse em Cursos */}
        <div className="my-8">
          <WaitlistForm
            productTitle="Cursos de Extensão em Engenharia"
            defaultInterest="IA"
            sourceContext="courses_hub"
          />
        </div>

        {/* Padrão de Qualidade Acadêmica */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600 leading-relaxed">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-700" />
            <span>Padrão de Qualidade Acadêmica e Técnica</span>
          </h3>
          <p>
            Todos os programas conduzidos pelo Prof. Dr. Wagner Eustáquio de Vasconcelos integram metodologia com certificação técnica fundamentada em mais de 20 anos de experiência acadêmica na UFPE/UNICAP e projetos na indústria química, ambiental e de energia.
          </p>
        </div>

      </div>
    </div>
  );
}
