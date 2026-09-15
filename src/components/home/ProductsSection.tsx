import React from "react";
import Link from "next/link";
import { PRODUCTS_CATALOG } from "@/data/products";
import { GraduationCap, BookOpen, Wrench, Users, ArrowRight, CheckCircle2, Briefcase } from "lucide-react";
import { ProductType } from "@/data/products";

const ICON_BY_TYPE: Record<ProductType, React.ElementType> = {
  course: GraduationCap,
  ebook: BookOpen,
  tool: Wrench,
  mentoring: Users,
  training: Briefcase,
  lead_magnet: BookOpen,
};

const HREF_BY_TYPE: Record<ProductType, string> = {
  course: "/produtos/cursos",
  ebook: "/produtos/ebooks",
  tool: "/produtos/ferramentas",
  mentoring: "/produtos/mentorias",
  training: "/produtos/treinamentos",
  lead_magnet: "/materiais/7-aplicacoes-ia-engenharia",
};

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-2">
            SOLUÇÕES & FORMAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
            Transforme conhecimento técnico em aplicação prática.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Metodologias validadas pela experiência de campo e pelo rigor científico, estruturadas em diferentes formatos para seu desenvolvimento profissional.
          </p>
        </div>

        {/* Grid dos 4 Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_CATALOG.filter((p) => p.type !== "training" && p.type !== "lead_magnet").map((product) => {
            const Icon = ICON_BY_TYPE[product.type];
            const href = HREF_BY_TYPE[product.type];

            return (
              <div
                key={product.id}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-800 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                    {product.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {product.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    Turmas e materiais
                  </span>

                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-sky-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-700" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
