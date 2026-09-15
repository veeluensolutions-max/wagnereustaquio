"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function AuthorBox() {
  const handleLattesClick = () => {
    trackEvent("click_lattes", {
      location: "author_box",
    });
  };

  const handleProfileClick = () => {
    trackEvent("select_item", {
      item_name: "Author Profile Bio",
      location: "author_box",
    });
  };

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Foto com badge */}
        <div className="relative shrink-0">
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-200">
            <Image
              src="/images/wagner-perfil.jpg"
              alt="Prof. Dr. Wagner Eustáquio de Vasconcelos"
              width={80}
              height={80}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-sky-700 text-white flex items-center justify-center shadow-sm" title="Doutor UFPE">
            <GraduationCap className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Informações do Autor */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-sky-800 bg-sky-100/70 px-2.5 py-0.5 rounded-full border border-sky-200/50">
              AUTORIDADE TÉCNICA RESPONSÁVEL
            </span>
            <span className="font-body text-xs text-slate-500 font-mono">
              CREA-PE / CNPq
            </span>
          </div>

          <h3 className="font-heading font-[650] text-lg sm:text-xl text-slate-950 tracking-[-0.02em]">
            Prof. Dr. Wagner Eustáquio de Vasconcelos
          </h3>

          <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Segurança de Processos, Engenharia Ambiental, Modelagem e soluções aplicadas à indústria.
          </p>

          {/* Links Internos de Autoridade */}
          <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-body font-semibold">
            <Link
              href="/sobre/biografia"
              onClick={handleProfileClick}
              className="text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 min-h-[44px] py-1"
            >
              <span>Biografia Completa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <span className="text-slate-300 hidden sm:inline">•</span>

            <Link
              href="/conhecimento/publicacoes-cientificas"
              className="text-slate-700 hover:text-slate-950 inline-flex items-center gap-1 min-h-[44px] py-1"
            >
              <span>Produção Científica</span>
            </Link>

            <span className="text-slate-300 hidden sm:inline">•</span>

            <Link
              href="/curriculo-lattes"
              onClick={handleLattesClick}
              className="text-slate-700 hover:text-sky-800 inline-flex items-center gap-1 min-h-[44px] py-1"
            >
              <span>Currículo Lattes Oficial</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
