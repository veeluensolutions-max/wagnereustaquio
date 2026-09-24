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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-body font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Disponível</span>
          </span>
        );
      case "waitlist":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-body font-semibold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/80">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Lista de Interesse</span>
          </span>
        );
      case "coming_soon":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-body font-semibold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200/80">
            <Clock className="w-3 h-3 text-sky-600" />
            <span>Em Produção</span>
          </span>
        );
      case "planned":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10.5px] font-body font-medium text-slate-600 bg-slate-100 border border-slate-200">
            Planejado
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card-elevation-hover relative overflow-hidden flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300/80 p-6 sm:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.03)] group">
      {/* Linha superior de destaque que surge no hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[10.5px] font-body font-semibold uppercase tracking-wider text-sky-800 bg-sky-50/90 px-2.5 py-1 rounded-md border border-sky-200/60">
            {product.categoryLabel}
          </span>
          {getStatusBadge()}
        </div>

        <h3 className="card-title-token text-lg sm:text-xl text-slate-950 mb-2.5 group-hover:text-sky-950 transition-colors leading-snug">
          {product.title}
        </h3>

        <p className="font-body text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-5">
          {product.description}
        </p>

        {product.disclaimer && (
          <div className="mb-4 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-2.5 text-[11.5px] text-amber-900 leading-relaxed font-body">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{product.disclaimer}</span>
          </div>
        )}

        <div className="space-y-2 mb-6 pt-1">
          {product.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
        <span className="text-[11px] text-slate-400 font-body font-medium">
          {product.status === "waitlist" || product.status === "coming_soon"
            ? "Turma / exemplar em breve"
            : product.status === "available"
            ? "Inscrições abertas"
            : "Em fase de estruturação"}
        </span>

        <Link
          href={getHref()}
          className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-slate-900 group-hover:text-sky-700 transition-colors"
        >
          <span>{product.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

