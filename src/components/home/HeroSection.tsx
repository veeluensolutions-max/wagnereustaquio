"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Cog, Shield, BarChart3, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f8fc] via-white to-slate-50/60 pt-6 pb-16 lg:pt-10 lg:pb-20 border-b border-slate-200/70">
      {/* Imagem de fundo arquitetônico de alta tecnologia em baixa opacidade */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Degradê ambiental de vidro suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-white pointer-events-none" />

      {/* Micro-rotulagem editorial das margens */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-3 select-none pointer-events-none opacity-50">
        <div className="w-6 h-0.5 bg-sky-600 mb-1" />
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 [writing-mode:vertical-rl] rotate-180">
          CIÊNCIA • TECNOLOGIA • SOCIEDADE • SOLUÇÕES
        </span>
      </div>

      <div className="absolute right-6 top-1/3 -translate-y-1/2 hidden 2xl:flex flex-col items-end gap-3 select-none pointer-events-none opacity-50 max-w-[140px] text-right">
        <div className="w-8 h-0.5 bg-sky-600 mb-1" />
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 leading-tight">
          CONHECIMENTO QUE TRANSFORMA REALIDADES
        </span>
        <span className="font-body text-[9px] font-medium uppercase tracking-[0.08em] text-slate-400 mt-4 leading-tight">
          ENGENHARIA PARA UM AMANHÃ MAIS SEGURO E SUSTENTÁVEL.
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna Narrativa Principal (Esquerda) */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
            
            {/* 1. EYEBROW (DM Sans 600, tracking 0.1em) */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200/80 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                <span>ENGENHARIA • PESQUISA • TECNOLOGIA</span>
              </div>
            </div>

            {/* 2. HEADLINE & 3. NOME PROFISSIONAL */}
            <div className="space-y-3.5 sm:space-y-4">
              {/* HERO H1: 3 linhas editoriais equilibradas, Manrope 650, sem orfãs em nenhuma resolução */}
              <h1 className="font-heading font-[650] text-[clamp(1.7rem,5vw,4.2rem)] leading-[1.06] sm:leading-[1.02] tracking-[-0.04em] text-slate-950 max-w-2xl">
                <span className="block whitespace-nowrap sm:whitespace-normal">Ciência, Engenharia&nbsp;e</span>
                <span className="block whitespace-nowrap sm:whitespace-normal">Inteligência aplicadas</span>
                <span className="block text-sky-800 font-[650]">a desafios reais.</span>
              </h1>

              {/* NOME PROFISSIONAL: Manrope 650, claramente secundário ao H1 com hierarquia refinada */}
              <p className="font-heading font-[650] text-base sm:text-lg md:text-xl text-slate-700 tracking-[-0.02em]">
                Prof. Dr. Wagner Eustáquio de Vasconcelos
              </p>
            </div>

            {/* 4. DESCRIÇÃO: DM Sans 400, line-height 1.68, letter-spacing -0.008em, min 16px no mobile */}
            <p className="font-body font-normal text-base sm:text-[17px] text-slate-600 leading-[1.7] tracking-[-0.008em] max-w-xl">
              Engenheiro, pesquisador e professor com trajetória acadêmica e industrial em Inteligência Artificial, Segurança de Processos, Engenharia Ambiental, Modelagem e Soluções Industriais.
            </p>

            {/* 5. OS 4 CARDS DE CREDENCIAIS (GRID 2x2 TRANSLÚCIDO E INTERATIVO) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Card 1: Doutorado */}
              <div className="card-elevation-hover relative overflow-hidden p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 hover:border-sky-400/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)] flex items-start gap-3 group">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-[13px] sm:text-[14px] text-slate-900 leading-snug tracking-[-0.015em] group-hover:text-sky-950 transition-colors">
                    Doutorado em Tecnologias Energéticas e Nucleares
                  </p>
                  <p className="font-body font-semibold text-[11.5px] text-sky-700 mt-0.5 tracking-normal">
                    UFPE
                  </p>
                </div>
              </div>

              {/* Card 2: Mestrado */}
              <div className="card-elevation-hover relative overflow-hidden p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 hover:border-sky-400/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)] flex items-start gap-3 group">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  <Cog className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-[13px] sm:text-[14px] text-slate-900 leading-snug tracking-[-0.015em] group-hover:text-sky-950 transition-colors">
                    Mestrado em Engenharia Nuclear
                  </p>
                  <p className="font-body font-semibold text-[11.5px] text-sky-700 mt-0.5 tracking-normal">
                    IME
                  </p>
                </div>
              </div>

              {/* Card 3: Especialização */}
              <div className="card-elevation-hover relative overflow-hidden p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 hover:border-sky-400/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)] flex items-start gap-3 group">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-[13px] sm:text-[14px] text-slate-900 leading-snug tracking-[-0.015em] group-hover:text-sky-950 transition-colors">
                    Engenharia de Segurança do Trabalho
                  </p>
                  <p className="font-body font-semibold text-[11.5px] text-sky-700 mt-0.5 tracking-normal">
                    USP
                  </p>
                </div>
              </div>

              {/* Card 4: MIT Extensão */}
              <div className="card-elevation-hover relative overflow-hidden p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 hover:border-sky-400/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)] flex items-start gap-3 group">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-[13px] sm:text-[14px] text-slate-900 leading-snug tracking-[-0.015em] group-hover:text-sky-950 transition-colors">
                    Data Science & Big Data
                  </p>
                  <p className="font-body font-semibold text-[11.5px] text-sky-700 mt-0.5 tracking-normal">
                    MIT — Extensão 45h
                  </p>
                </div>
              </div>
            </div>

            {/* 6. CTAs DA HERO: DM Sans 600, micro-interações fluidas */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/sobre/trajetoria"
                onClick={() => trackEvent("select_item", { item_name: "Hero CTA Trajetoria" })}
                className="font-body font-semibold text-sm relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white bg-[#07172e] hover:bg-sky-950 active:bg-sky-900 shadow-lg shadow-slate-950/20 hover:shadow-xl hover:shadow-sky-950/25 transition-all duration-300 group min-h-[48px] tracking-[-0.005em]"
              >
                <span className="relative z-10">Conheça minha trajetória</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
              </Link>

              <Link
                href="/produtos/cursos"
                onClick={() => trackEvent("select_item", { item_name: "Hero CTA Cursos" })}
                className="font-body font-semibold text-sm inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-slate-800 bg-white/95 hover:bg-white active:bg-slate-100 border border-slate-300/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 group min-h-[48px] tracking-[-0.005em]"
              >
                <BookOpen className="w-4 h-4 text-sky-700 group-hover:scale-110 transition-transform" />
                <span>Explore cursos e conteúdos</span>
              </Link>
            </div>

            {/* Link oficial do Lattes: DM Sans 500, min 13px */}
            <div className="pt-0.5">
              <a
                href="http://lattes.cnpq.br/7844785807954101"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_lattes", { location: "hero_subtext" })}
                className="font-body font-medium text-[13px] text-slate-500 hover:text-sky-850 transition-colors inline-flex items-center gap-1.5 min-h-[36px] group"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-700 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                <span>Consulta de produção acadêmica e técnica na Plataforma Lattes do CNPq →</span>
              </a>
            </div>

            {/* Barra de Síntese Rápida de Métricas (Números: Manrope 700; Descrições: DM Sans 400-500) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="font-heading font-bold text-base sm:text-lg text-slate-950 tracking-[-0.035em]">+20 anos</p>
                <p className="font-body font-normal text-[13px] text-slate-500 mt-0.5">de experiência</p>
              </div>
              <div>
                <p className="font-heading font-semibold text-base sm:text-lg text-slate-950 tracking-[-0.025em]">Pesquisa</p>
                <p className="font-body font-normal text-[13px] text-slate-500 mt-0.5">com impacto real</p>
              </div>
              <div>
                <p className="font-heading font-semibold text-base sm:text-lg text-slate-950 tracking-[-0.025em]">Formação</p>
                <p className="font-body font-normal text-[13px] text-slate-500 mt-0.5">de profissionais</p>
              </div>
              <div>
                <p className="font-heading font-semibold text-base sm:text-lg text-slate-950 tracking-[-0.025em]">Soluções</p>
                <p className="font-body font-normal text-[13px] text-slate-500 mt-0.5">para um futuro sustentável</p>
              </div>
            </div>

          </div>

          {/* 7. IMAGEM / RETRATO OFICIAL COM CALIGRAFIA E VIDRO TRANSLÚCIDO */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-md">
              {/* Halo luminoso de ambientação e profundidade */}
              <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-sky-500/20 via-sky-300/10 to-indigo-500/15 rounded-[3rem] blur-2xl -z-10 pointer-events-none animate-pulse-glow" />

              {/* Moldura flutuante translúcida */}
              <div className="relative bg-white/80 backdrop-blur-2xl p-3.5 rounded-[2.5rem] border border-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                
                {/* Watermark textual superior direito: DM Sans 600 */}
                <div className="absolute top-6 right-6 z-10 text-right select-none pointer-events-none">
                  <p className="font-body text-[9.5px] font-semibold uppercase tracking-[0.12em] text-slate-400/90 leading-tight">
                    PESQUISA<br />TECNOLOGIA<br />PESSOAS<br />IMPACTO REAL
                  </p>
                  <div className="w-6 h-0.5 bg-sky-600 ml-auto mt-1" />
                </div>

                {/* Retrato oficial */}
                <div className="relative aspect-[3.4/4] w-full rounded-[2rem] overflow-hidden bg-slate-100 shadow-inner">
                  <Image
                    src="/images/wagner-vasconcelos.jpg"
                    alt="Retrato oficial do Prof. Dr. Wagner Eustáquio de Vasconcelos"
                    fill
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 440px"
                    priority
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Caligrafia exclusiva manuscrita sobre a foto: Caveat script */}
                  <div className="absolute bottom-4 right-4 z-10 select-none pointer-events-none text-right">
                    <p className="font-script text-white text-2xl sm:text-3xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] -rotate-3">
                      Conhecimento<br />
                      <span className="text-sky-200">que transforma</span><br />
                      realidades
                    </p>
                  </div>
                </div>

                {/* Placa institucional inferior de autoridade */}
                <div className="mt-3 bg-[#08182f] p-4 rounded-2xl text-white shadow-md border border-white/10">
                  <p className="font-heading font-[650] text-sm tracking-[-0.015em] text-white">
                    Prof. Dr. Wagner Eustáquio de Vasconcelos
                  </p>
                  <p className="font-body text-sky-300 text-xs font-medium mt-0.5 tracking-normal">
                    Engenharia • Inteligência Artificial • Sustentabilidade
                  </p>
                </div>

                {/* Sub-barra com validação CNPq com indicador pulsante vivo */}
                <div className="mt-2.5 px-3 py-1 flex items-center justify-between text-xs text-slate-600 font-body font-medium">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11.5px] text-slate-700 font-semibold">Atuação Científica e Industrial</span>
                  </div>
                  <a
                    href="http://lattes.cnpq.br/7844785807954101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11.5px] text-slate-800 hover:text-sky-800 font-semibold transition-colors"
                  >
                    <span>CNPq / Lattes Oficial</span>
                    <ExternalLink className="w-3 h-3 text-sky-700" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
