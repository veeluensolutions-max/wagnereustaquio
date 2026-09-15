import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function RelatedProducts({
  products,
  title = "Continue aprendendo",
  subtitle = "Recursos complementares de formação e ferramentas desenvolvidos para aprofundar sua prática.",
}: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-12 border-t border-slate-200">
      <div className="mb-8 space-y-1">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
          FORMAÇÃO CONTÍNUA
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
