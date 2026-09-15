import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { ArrowRight, CheckCircle2, Sparkles, Clock, AlertCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  basePath?: string;
}

export default function ProductCard({ product, basePath = "/produtos" }: ProductCardProps) {
  const getHref = () => {
    if (product.type === "course") return `/produtos/cursos/${product.slug}`;
    if (product.type === "ebook") return `/produtos/ebooks/${product.slug}`;
    if (product.type === "tool") return `/produtos/ferramentas/${product.slug}`;
    if (product.type === "mentoring") return `/produtos/mentorias/${product.slug}`;
    if (product.type === "training") return `/produtos/treinamentos`;
    if (product.type === "lead_magnet") return `/materiais/${product.slug}`;
    return `${basePath}/${product.slug}`;
  };

  const getStatusBadge = () => {
    switch (product.status) {
      case "available":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            Disponível
          </span>
        );
      case "waitlist":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Lista de Interesse</span>
          </span>
        );
      case "coming_soon":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200">
            <Clock className="w-3 h-3 text-sky-600" />
            <span>Em Produção</span>
          </span>
        );
      case "planned":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200">
            Planejado
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-7 hover:border-sky-300 hover:shadow-md transition-all group">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 bg-sky-50/80 px-2.5 py-1 rounded">
            {product.categoryLabel}
          </span>
          {getStatusBadge()}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-900 transition-colors leading-snug">
          {product.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          {product.description}
        </p>

        {product.disclaimer && (
          <div className="mb-4 p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-start gap-2 text-[11px] text-amber-900 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{product.disclaimer}</span>
          </div>
        )}

        <div className="space-y-2 mb-6">
          {product.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          {product.status === "waitlist" || product.status === "coming_soon"
            ? "Turma / exemplar em breve"
            : product.status === "available"
            ? "Inscrições abertas"
            : "Em fase de estruturação"}
        </span>

        <Link
          href={getHref()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 group-hover:text-sky-900 group-hover:translate-x-0.5 transition-all"
        >
          <span>{product.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
        </Link>
      </div>
    </div>
  );
}
