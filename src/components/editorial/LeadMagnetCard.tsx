"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function LeadMagnetCard() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    trackEvent("download_lead_magnet", {
      lead_magnet_name: "7 aplicações práticas de Inteligência Artificial que todo engenheiro deveria conhecer",
      lead_magnet_topic: "IA Aplicada à Engenharia",
      source_page: "article_contextual_card",
    });

    trackEvent("generate_lead", {
      lead_type: "lead_magnet",
      interest: "7 aplicações práticas de IA",
      form_name: "lead_magnet_card",
    });

    setSubmitted(true);
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-md bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[10.5px] font-heading font-bold uppercase tracking-wider">
            GUIA TÉCNICO EXCLUSIVO
          </span>
          <span className="font-body text-xs text-amber-400 font-semibold">
            Status: Em desenvolvimento
          </span>
        </div>

        <h3 className="font-heading font-[650] text-lg sm:text-xl text-white tracking-[-0.02em] mb-2 leading-snug">
          7 aplicações práticas de Inteligência Artificial que todo engenheiro deveria conhecer.
        </h3>

        <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-xl">
          Um panorama estruturado sobre soft sensors, redes neuro-fuzzy, controle preditivo e otimização de utilidades industriais com rigor científico.
        </p>

        {submitted ? (
          <div className="p-4 rounded-2xl bg-sky-500/20 border border-sky-400/30 text-xs sm:text-sm text-sky-100 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              Obrigado! Seu interesse foi registrado. Você receberá o material por e-mail assim que a edição for concluída.
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
                placeholder="Seu e-mail profissional"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs font-body focus:outline-none focus:border-sky-400 transition-colors min-h-[44px]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-body text-xs font-semibold tracking-wide transition-all shadow-md shadow-sky-600/30 flex items-center justify-center gap-2 shrink-0 cursor-pointer min-h-[44px]"
            >
              <span>Quero Receber</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
