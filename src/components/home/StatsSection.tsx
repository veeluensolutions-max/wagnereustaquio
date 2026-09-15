import React from "react";
import { STATS_DATA } from "@/data/stats";
import { Info } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-2">
            EXPERIÊNCIA E ESCALA
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-[650] text-slate-950 tracking-[-0.035em] leading-[1.15]">
            Uma trajetória construída entre ciência, ensino e indústria.
          </h2>
        </div>

        {/* Grid de Números: Manrope 700 para números, DM Sans 400-500 para descrições */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/80 backdrop-blur-sm p-7 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:border-sky-300/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="font-heading text-4xl sm:text-5xl font-bold tracking-[-0.035em] text-slate-950 mb-2.5">
                  {stat.number}
                </p>
                <h3 className="font-heading text-sm sm:text-[15px] font-semibold text-slate-950 mb-1.5 tracking-[-0.015em]">
                  {stat.label}
                </h3>
                <p className="font-body text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal tracking-[-0.005em]">
                  {stat.sublabel}
                </p>
              </div>

              {stat.legalNote && (
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-start gap-1.5 text-[11.5px] text-slate-500 font-body">
                  <Info className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                  <span className="italic leading-snug">{stat.legalNote}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
