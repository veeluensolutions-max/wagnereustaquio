import React from "react";
import { TEACHING_DATA } from "@/data/teaching";
import { GraduationCap, BookOpen, Award, CheckCircle } from "lucide-react";

export default function TeachingSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-2">
            DOCÊNCIA & ENSINO SUPERIOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            {TEACHING_DATA.headline}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {TEACHING_DATA.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cursos e Níveis de Atuação */}
          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-slate-950 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-700" />
              <span>Cursos e Departamentos</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {TEACHING_DATA.courses.map((course, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>

            {/* Destaque Discreto e Respeitoso */}
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 italic flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{TEACHING_DATA.discreetHighlight}</span>
            </div>
          </div>

          {/* Nuvem de Disciplinas Estruturadas */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-950 mb-1">
                Disciplinas Ministradas
              </h3>
              <p className="text-xs text-slate-500">
                Ementas com rigor conceitual e aplicação prática nos laboratórios e indústrias:
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {TEACHING_DATA.disciplines.map((discipline, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-900 border border-slate-200/80 hover:border-sky-200 text-xs font-semibold transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-700 opacity-70" />
                  <span>{discipline}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 leading-relaxed pt-2">
              A atuação docente de Wagner Vasconcelos combina dedicação metodológica em sala de aula, rigor matemático em modelagem e o compartilhamento de vivência direta no atendimento às exigências industriais.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
