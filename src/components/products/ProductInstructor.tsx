import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Award, ExternalLink, ArrowRight } from "lucide-react";

export default function ProductInstructor() {
  return (
    <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-sm shrink-0 bg-slate-200">
          <Image
            src="/images/wagner-perfil.jpg"
            alt="Prof. Dr. Wagner Eustáquio de Vasconcelos"
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
            SEU INSTRUTOR & RESPONSÁVEL TÉCNICO
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Prof. Dr. Wagner Eustáquio de Vasconcelos
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Doutor em Tecnologias Energéticas e Nucleares (UFPE) • Mestre em Engenharia de Produção • Engenheiro Químico
          </p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Com mais de duas décadas de atuação integrando pesquisa científica de ponta e liderança técnica na indústria, Wagner foi pesquisador do CRCN/CNEN, professor universitário e consultor sênior em modelagem computacional, segurança de processos (PSM/NR-13) e emissões atmosféricas. É autor do livro técnico <em>Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental</em> (2010, 163 p.).
      </p>

      <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
        <Link
          href="/sobre/biografia"
          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-900 inline-flex items-center gap-1.5 transition-all shadow-2xs"
        >
          <span>Biografia Completa</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-700" />
        </Link>
        <Link
          href="/sobre/formacao"
          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-900 inline-flex items-center gap-1.5 transition-all shadow-2xs"
        >
          <span>Formação Acadêmica</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-700" />
        </Link>
        <Link
          href="/conhecimento/publicacoes-cientificas"
          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-900 inline-flex items-center gap-1.5 transition-all shadow-2xs"
        >
          <span>Artigos & Livro</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-700" />
        </Link>
        <Link
          href="/curriculo-lattes"
          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-900 inline-flex items-center gap-1.5 transition-all shadow-2xs"
        >
          <span>Currículo Lattes</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </Link>
      </div>
    </div>
  );
}
