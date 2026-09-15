import React from "react";
import { INDUSTRY_EXPERIENCE } from "@/data/industryExperience";
import { Factory, ShieldCheck } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-800 block mb-2">
            ATUAÇÃO INDUSTRIAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Conhecimento testado fora da sala de aula.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A atuação profissional de Wagner reúne pesquisa científica e execução técnica em diferentes segmentos industriais e institucionais.
          </p>
        </div>

        {/* Grid dos 10 Segmentos Industriais */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {INDUSTRY_EXPERIENCE.map((segment) => (
            <div
              key={segment.id}
              className="p-5 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-sky-300/80 hover:shadow-[0_12px_28px_rgba(15,23,42,0.05)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 text-sky-800 flex items-center justify-center mb-3 shadow-2xs group-hover:bg-slate-950 group-hover:text-white transition-colors duration-200">
                  <Factory className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-950 mb-1 leading-snug">
                  {segment.name}
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 mt-2.5 pt-2.5 border-t border-slate-200/60 leading-tight">
                {segment.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Nota ética */}
        <div className="mt-10 pt-4 flex items-center gap-2.5 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Os setores acima representam domínios técnicos de aplicação declarados no histórico de projetos do autor. Não implica vínculo ou endosso institucional direto.
          </span>
        </div>

      </div>
    </section>
  );
}
