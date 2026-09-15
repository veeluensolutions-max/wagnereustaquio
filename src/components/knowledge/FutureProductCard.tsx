"use client";

import React, { useState } from "react";
import { Sparkles, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { FutureProduct } from "@/data/specialties";
import { trackEvent } from "@/lib/analytics";

interface FutureProductCardProps {
  product: FutureProduct;
  specialtySlug: string;
}

export default function FutureProductCard({ product, specialtySlug }: FutureProductCardProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    trackEvent("join_specialty_waitlist", {
      product_name: product.title,
      specialty: specialtySlug,
      product_category: product.tag || "Material",
      product_status: "waitlist",
    });

    trackEvent("generate_lead", {
      lead_type: "waitlist",
      interest: product.title,
      specialty: specialtySlug,
      form_name: "future_product_card",
    });

    setIsSubmitted(true);
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 text-white border border-sky-500/20 shadow-xl relative overflow-hidden">
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-[11px] font-body font-semibold tracking-wider uppercase text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{product.tag}</span>
          </div>
          <span className="font-body text-xs text-slate-400">
            Acesso antecipado & materiais exclusivos
          </span>
        </div>

        <h3 className="font-heading font-[650] text-xl sm:text-2xl text-white tracking-[-0.025em] mb-1">
          {product.title}
        </h3>

        <p className="font-body text-xs sm:text-sm font-medium text-sky-200 mb-3">
          {product.subtitle}
        </p>

        <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mb-6">
          {product.description}
        </p>

        {isSubmitted ? (
          <div className="p-4 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-xs sm:text-sm text-sky-100 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              Obrigado! Seu interesse foi registrado. Você receberá avisos exclusivos em primeira mão assim que a formação for aberta.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail corporativo"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs font-body focus:outline-none focus:border-sky-400 transition-colors min-h-[44px]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-body text-xs font-semibold tracking-wide transition-all shadow-md shadow-sky-600/30 flex items-center justify-center gap-2 shrink-0 cursor-pointer min-h-[44px]"
            >
              <span>Entrar na Lista</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
