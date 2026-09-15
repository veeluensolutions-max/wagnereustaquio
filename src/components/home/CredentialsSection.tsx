"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CREDENTIALS_DATA } from "@/data/credentials";

export default function CredentialsSection() {
  const [showAll, setShowAll] = useState(false);

  // 4 credenciais principais com os logotipos e brasões oficiais reais
  const featuredCredentials = [
    {
      id: "ufpe",
      logo: (
        <div className="relative flex flex-col items-center justify-center w-12 h-12">
          <div className="relative w-8 h-9 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/instituicoes/ufpe.png"
              alt="Brasão Oficial UFPE"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-heading text-[10px] font-bold tracking-tight text-[#8A1515] mt-0.5">
            UFPE
          </span>
        </div>
      ),
      degree: "Doutorado",
      field: "Tecnologias Energéticas e Nucleares",
      institution: "Universidade Federal de Pernambuco",
      badge: "Ênfase em IA e Redes Neuro-Fuzzy",
    },
    {
      id: "ime",
      logo: (
        <div className="relative flex items-center justify-center w-12 h-12">
          <div className="relative w-9 h-11 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/instituicoes/ime.svg"
              alt="Brasão Oficial IME"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ),
      degree: "Mestrado",
      field: "Engenharia Nuclear",
      institution: "Instituto Militar de Engenharia",
      badge: "Modelagem Computacional",
    },
    {
      id: "usp",
      logo: (
        <div className="relative flex items-center justify-center w-14 h-12">
          <div className="relative w-12 h-8 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/instituicoes/usp.svg"
              alt="Logotipo Oficial USP"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ),
      degree: "Especialização",
      field: "Engenharia de Segurança do Trabalho",
      institution: "Universidade de São Paulo",
      badge: "Prevenção e Análise de Risco",
    },
    {
      id: "mit",
      logo: (
        <div className="relative flex items-center justify-center w-14 h-12">
          <div className="relative w-12 h-7 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/instituicoes/mit.svg"
              alt="Logotipo Oficial MIT"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ),
      degree: "Extensão",
      field: "Data Science & Big Data",
      institution: "Massachusetts Institute of Technology",
      subInstitution: "Executive Program (45h)",
      badge: "Tomada de Decisão com Dados",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/70 overflow-hidden">
      {/* Luz difusa de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200/60 gap-4">
          <div>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-2">
              FORMAÇÃO & PESQUISA
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-[650] text-slate-950 tracking-[-0.035em] leading-[1.15]">
              Credenciais acadêmicas de alta exigência
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-6">
            <p className="font-body text-sm sm:text-base text-slate-600 max-w-sm leading-[1.65] font-normal tracking-[-0.005em]">
              Fundamentação científica construída em instituições de excelência nacional e internacional.
            </p>
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 transition-colors whitespace-nowrap self-start sm:self-center inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span>{showAll ? "Ocultar detalhes" : "Ver todas"}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${showAll ? "rotate-90" : "group-hover:translate-x-0.5"}`} />
            </button>
          </div>
        </div>

        {/* Linha dos 4 Cards Institucionais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {featuredCredentials.map((cred) => (
            <div
              key={cred.id}
              className="group relative bg-white/85 hover:bg-white backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 hover:border-sky-300 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(2,132,199,0.08)] flex items-start gap-4"
            >
              {/* Emblema / Logo Oficial da Instituição */}
              <div className="shrink-0 flex items-center justify-center p-2 rounded-xl bg-slate-50/90 border border-slate-100 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                {cred.logo}
              </div>

              {/* Textos */}
              <div className="min-w-0 flex-1">
                <div className="font-heading font-semibold text-[14px] sm:text-[15px] text-slate-950 tracking-[-0.02em] leading-snug">
                  {cred.degree}
                </div>
                <div className="font-body font-normal text-[13px] sm:text-[13.5px] text-slate-600 line-clamp-2 mt-0.5 leading-snug tracking-[-0.005em]">
                  {cred.field}
                </div>
                {cred.subInstitution && (
                  <div className="font-body font-semibold text-[11px] text-slate-500 mt-1 tracking-normal">
                    {cred.institution}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lista completa expansível preservando todo o conteúdo */}
        {showAll && (
          <div className="mb-10 p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 animate-in fade-in duration-300">
            <h3 className="font-heading font-semibold text-sm text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-700" />
              Trajetória Acadêmica e Formações Complementares Registradas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CREDENTIALS_DATA.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border text-xs ${
                    item.isComplementary
                      ? "bg-slate-900 text-white border-sky-500/30"
                      : "bg-white text-slate-800 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-body font-semibold text-sky-700">{item.institutionShort}</span>
                    {item.period && <span className="font-body text-[11px] text-slate-500 font-mono">{item.period}</span>}
                  </div>
                  <div className="font-heading font-semibold text-slate-950 mb-1 tracking-[-0.015em]">{item.degree}</div>
                  <div className="font-body text-slate-600 text-[12px] leading-relaxed tracking-[-0.005em]">{item.description}</div>
                  {item.highlightNote && (
                    <div className="mt-2 font-body text-[11px] font-semibold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                      {item.highlightNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-right">
              <Link
                href="/sobre#formacao"
                className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1"
              >
                Ver memorial acadêmico detalhado no Sobre →
              </Link>
            </div>
          </div>
        )}

        {/* Rodapé Editorial com Citação em Newsreader Italic e Assinatura em Caveat */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/70">
          <p className="font-editorial italic font-normal text-sm sm:text-base text-slate-600 text-center sm:text-left tracking-[-0.01em]">
            <span className="text-sky-700 not-italic text-lg leading-none select-none mr-1">“</span>
            Ciência e engenharia a serviço de pessoas, organizações e de um futuro mais sustentável.
            <span className="text-sky-700 not-italic text-lg leading-none select-none ml-1">”</span>
          </p>

          <div className="font-script text-2xl sm:text-3xl text-slate-700 tracking-wide select-none transform -rotate-2 hover:text-sky-900 transition-colors">
            Wagner Vasconcelos
          </div>
        </div>

      </div>
    </section>
  );
}
