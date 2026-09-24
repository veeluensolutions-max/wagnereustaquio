"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Microscope, BrainCircuit, Cog, CheckCircle, ArrowRight as ArrowRightIcon } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/context/LanguageContext";

const STEP_ICONS = [Microscope, BrainCircuit, Cog, CheckCircle];

export default function PositioningSection() {
  const { t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2);

  const steps = t.positioning.steps.map((step, idx) => ({
    ...step,
    icon: STEP_ICONS[idx] || Cog,
  }));

  return (
    <section className="py-20 lg:py-24 bg-[#071322] text-white relative overflow-hidden border-b border-slate-800/80">
      {/* Elementos gráficos e halos de fundo */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Bloco de Texto Principal */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-300 mb-5">
            {t.positioning.badge}
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-[650] tracking-[-0.035em] text-white mb-6 leading-[1.15]">
            {t.positioning.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-slate-300 leading-[1.7] mb-4 font-normal tracking-[-0.008em]">
            {t.positioning.p1}
          </p>

          <p className="font-body text-sm sm:text-base text-slate-400 leading-[1.7] mb-8 font-normal tracking-[-0.006em]">
            {t.positioning.p2}
          </p>

          <Link
            href="/sobre/trajetoria"
            onClick={() => trackEvent("select_item", { item_name: "Posicionamento CTA Trajetoria" })}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-body text-sm font-semibold transition-all shadow-lg shadow-sky-600/25 group min-h-[48px] tracking-[-0.005em]"
          >
            <span>{t.positioning.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Diagrama Visual Dinâmico: Pesquisa -> Conhecimento -> Aplicação -> Resultado */}
        <div className="mt-8 pt-8 border-t border-slate-800/80">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400 mb-6">
            FLUXO METODOLÓGICO DE TRANSFORMAÇÃO
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((item, idx) => {
              const IconComponent = item.icon;
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-6 rounded-3xl border transition-all duration-300 relative select-none min-h-[120px] ${
                    isSelected
                      ? "bg-slate-900/90 border-sky-400/60 shadow-xl shadow-sky-950/60 ring-1 ring-sky-400/40"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 border border-sky-400/30">
                      {item.step}
                    </span>
                    <IconComponent className={`w-4 h-4 ${isSelected ? "text-sky-300" : "text-slate-500"}`} />
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-white mb-1.5 tracking-[-0.02em]">
                    {item.label}
                  </h3>

                  <p className="font-body text-xs text-sky-300 font-medium mb-3 line-clamp-1">
                    {item.tagline}
                  </p>

                  <p className="font-body text-xs text-slate-400 leading-relaxed font-normal">
                    {item.detail}
                  </p>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRightIcon className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
