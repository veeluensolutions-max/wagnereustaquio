import React from "react";
import Link from "next/link";
import { PRODUCTS_CATALOG } from "@/data/products";
import { GraduationCap, BookOpen, Wrench, Users, ArrowRight, CheckCircle2, Briefcase, Layers } from "lucide-react";
import { ProductType, ProductStatus } from "@/data/products";

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

const STATUS_CONFIG: Record<ProductStatus, { label: string; className: string }> = {
  waitlist: {
    label: "Lista de Espera",
    className: "bg-amber-50 text-amber-800 border-amber-200/80",
  },
  coming_soon: {
    label: "Em Breve",
    className: "bg-sky-50 text-sky-800 border-sky-200/80",
  },
  available: {
    label: "Disponível",
    className: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
  },
  planned: {
    label: "Planejado",
    className: "bg-slate-100 text-slate-700 border-slate-200",
  },
  unavailable: {
    label: "Encerrado",
    className: "bg-slate-100 text-slate-500 border-slate-200",
  },
};

export default function ProductsSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Luz ambiente sutil decorativa */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800 mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>SOLUÇÕES & FORMAÇÃO TÉCNICA</span>
          </div>
          <h2 className="section-h2-token text-3xl sm:text-4xl text-slate-950 mb-4">
            Transforme conhecimento técnico em aplicação prática.
          </h2>
          <p className="body-text-token text-slate-600 max-w-2xl">
            Metodologias validadas pela experiência de campo e pelo rigor científico, estruturadas em diferentes formatos para seu desenvolvimento profissional contínuo.
          </p>
        </div>

        {/* Grid dos 4 Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {PRODUCTS_CATALOG.filter((p) => p.type !== "training" && p.type !== "lead_magnet").map((product) => {
            const Icon = ICON_BY_TYPE[product.type];
            const href = HREF_BY_TYPE[product.type];
            const statusInfo = STATUS_CONFIG[product.status];

            return (
              <div
                key={product.id}
                className="card-elevation-hover relative overflow-hidden bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-300/80 shadow-[0_4px_24px_rgba(15,23,42,0.03)] flex flex-col justify-between group"
              >
                {/* Linha superior de destaque em gradiente que ilumina no hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Topo do Card: Ícone e Badges */}
                  <div className="flex items-start justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-50 to-slate-100/80 border border-slate-200/90 flex items-center justify-center text-sky-800 shadow-2xs group-hover:from-sky-600 group-hover:to-slate-950 group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10.5px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border ${statusInfo.className}`}>
                        {statusInfo.label}
                      </span>
                      <span className="text-[10px] font-body font-medium uppercase tracking-wider text-slate-400">
                        {product.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Título do Produto */}
                  <h3 className="card-title-token text-lg text-slate-950 mb-2.5 group-hover:text-sky-950 transition-colors">
                    {product.title}
                  </h3>

                  {/* Descrição */}
                  <p className="font-body text-xs text-slate-600 leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Destaques Técnicos com Ícones Esmeralda */}
                  <div className="space-y-2 mb-6 pt-1">
                    {product.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                  <span className="text-[11px] font-medium text-slate-400">
                    Formação contínua
                  </span>

                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-slate-900 group-hover:text-sky-700 transition-colors"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
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

