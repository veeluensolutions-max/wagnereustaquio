"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ShieldAlert, Leaf, GraduationCap, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = [Cpu, ShieldAlert, Leaf, GraduationCap];

export default function AuthorityAreasSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14">
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-2">
            {t.authority.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-[650] text-slate-950 tracking-[-0.035em] leading-[1.15] mb-4">
            {t.authority.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-600 leading-[1.7] font-normal tracking-[-0.008em]">
            {t.authority.description}
          </p>
        </div>

        {/* Grid de 4 Cards de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.authority.areas.map((area, idx) => {
            const Icon = ICONS[idx] || Cpu;

            return (
              <div
                key={area.id}
                className="bg-slate-50/50 hover:bg-white rounded-[2rem] p-8 lg:p-9 border border-slate-200/80 flex flex-col justify-between hover:border-sky-300/80 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 group"
              >
                <div>
                  {/* Cabeçalho com Ícone e Tagline */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center text-sky-850 shadow-2xs group-hover:bg-slate-950 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-sky-800">
                        {t.authority.pilarBadge}
                      </span>
                      <h3 className="font-heading text-xl lg:text-2xl font-semibold text-slate-950 tracking-[-0.025em] leading-snug">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="font-body text-sm sm:text-[15px] text-slate-600 leading-[1.65] mb-6 font-normal tracking-[-0.005em]">
                    {area.description}
                  </p>

                  {/* Tópicos Chave */}
                  <div className="space-y-2.5 mb-8">
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                      {t.common.readMore}:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {area.highlights.map((topic, index) => (
                        <div key={index} className="flex items-center gap-2 font-body text-xs sm:text-[13px] text-slate-700 font-medium tracking-normal">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA do Pilar */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={area.href}
                    className="font-body inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-sky-800 group-hover:translate-x-1 transition-all min-h-[44px] tracking-[-0.005em]"
                  >
                    <span>{t.common.viewAll}</span>
                    <ArrowRight className="w-4 h-4 text-sky-700" />
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
