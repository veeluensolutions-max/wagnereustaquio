"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ArrowRight, Compass, GraduationCap, FileText, Cpu, Microscope, BookOpen, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SobreClient() {
  const { language } = useLanguage();

  const content = {
    "pt-BR": {
      badge: "SOBRE WAGNER",
      h1: "Uma trajetória construída entre ciência, engenharia e aplicação.",
      lead: "Prof. Dr. Wagner Eustáquio de Vasconcelos é engenheiro, pesquisador e professor com uma trajetória que conecta formação científica, experiência acadêmica e atuação técnica em problemas reais da Engenharia e da indústria.",
      ctaTimeline: "Conheça a trajetória",
      ctaEducation: "Ver formação acadêmica",
      ctaLattes: "Currículo Lattes",
      linkBio: "Ler biografia editorial completa em 7 capítulos",
      handwriting: { line1: "Conhecimento", line2: "que transforma", line3: "realidades" },
      authorTitle: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      authorSub: "Engenharia • Inteligência Artificial • Sustentabilidade",
      purposeBadge: "POSICIONAMENTO E PROPÓSITO",
      purposeTitle: "Engenharia como ponto de partida. Pesquisa como método. Aplicação como propósito.",
      p1: "Graduado em Engenharia Química, Wagner construiu sua trajetória acadêmica em áreas que envolvem Engenharia Nuclear, Inteligência Artificial, Segurança de Processos, Engenharia Ambiental, Modelagem e tomada de decisão.",
      p2: "Ao longo da carreira, conciliou pesquisa, docência, gestão acadêmica e execução de projetos técnicos, desenvolvendo uma atuação multidisciplinar voltada à aplicação do conhecimento científico em desafios industriais e ambientais.",
      quote: "Pesquisa, ensino e aplicação não são caminhos separados. São partes de um mesmo processo de construção de conhecimento.",
      quoteLabel: "Diretriz Institucional de Atuação",
      pillarsBadge: "CAMPOS DE ATUAÇÃO INTEGRADA",
      pillarsTitle: "Identidade Profissional",
      pillars: [
        {
          role: "ENGENHEIRO",
          icon: Cpu,
          description: "Pesquisa, processos, segurança, ambiente e sistemas industriais.",
        },
        {
          role: "PESQUISADOR",
          icon: Microscope,
          description: "Modelagem, Inteligência Artificial, lógica fuzzy, redes neurais e tomada de decisão.",
        },
        {
          role: "PROFESSOR",
          icon: BookOpen,
          description: "Ensino superior em diferentes áreas da Engenharia.",
        },
        {
          role: "ESPECIALISTA",
          icon: ShieldAlert,
          description: "Atuação técnica em segurança de processos, emissões atmosféricas, qualidade do ar e soluções industriais.",
        },
      ],
      hubBadge: "APROFUNDAMENTO TEMÁTICO",
      hubTitle: "Explore a documentação completa",
      card1: {
        badge: "Narrativa Completa",
        title: "Biografia Oficial",
        desc: "História em 7 capítulos detalhando da Engenharia Química ao Doutorado em IA e atuação na indústria.",
        btn: "Acessar leitura longa",
      },
      card2: {
        badge: "Cronologia & Marcos",
        title: "Linha do Tempo",
        desc: "Marcos estratégicos de 1995 a 2026 com filtros por áreas acadêmica, pesquisa, profissional e formação.",
        btn: "Ver cronologia",
      },
      card3: {
        badge: "Graus & Titulações",
        title: "Formação Acadêmica",
        desc: "Detalhamento de graduação, mestrado, doutorado, pós-doutorados, especialização e formação executiva.",
        btn: "Consultar titulações",
      },
    },
    "en": {
      badge: "ABOUT WAGNER",
      h1: "A professional trajectory built between science, engineering, and practice.",
      lead: "Prof. Dr. Wagner Eustáquio de Vasconcelos is an engineer, researcher, and professor connecting rigorous scientific background, academic mentorship, and industrial problem-solving.",
      ctaTimeline: "Explore career timeline",
      ctaEducation: "View academic degrees",
      ctaLattes: "Lattes Curriculum",
      linkBio: "Read full 7-chapter editorial biography",
      handwriting: { line1: "Knowledge", line2: "that transforms", line3: "realities" },
      authorTitle: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      authorSub: "Engineering • Artificial Intelligence • Sustainability",
      purposeBadge: "POSITIONING & PURPOSE",
      purposeTitle: "Engineering as the starting point. Research as the method. Application as the purpose.",
      p1: "With a Bachelor's in Chemical Engineering, Wagner developed his trajectory across Nuclear Engineering, Artificial Intelligence, Process Safety, Environmental Science, and Computational Decision Modeling.",
      p2: "Across his tenure, he integrated scientific research, higher education teaching, academic leadership, and industrial engineering projects into a multidisciplinary career solving real-world challenges.",
      quote: "Research, teaching, and industrial application are not separate tracks. They form a single integrated process of knowledge development.",
      quoteLabel: "Institutional Guiding Principle",
      pillarsBadge: "INTEGRATED DOMAINS OF PRACTICE",
      pillarsTitle: "Professional Identity",
      pillars: [
        {
          role: "ENGINEER",
          icon: Cpu,
          description: "Applied research, continuous process engineering, safety, environment, and industrial systems.",
        },
        {
          role: "RESEARCHER",
          icon: Microscope,
          description: "Computational modeling, Artificial Intelligence, fuzzy logic, neural networks, and decision support.",
        },
        {
          role: "PROFESSOR",
          icon: BookOpen,
          description: "Higher education teaching and mentorship across diverse engineering disciplines.",
        },
        {
          role: "SPECIALIST",
          icon: ShieldAlert,
          description: "Technical consulting in process safety, atmospheric emissions, air quality, and forensic engineering.",
        },
      ],
      hubBadge: "THEMATIC EXPLORATION",
      hubTitle: "Explore the comprehensive dossier",
      card1: {
        badge: "Complete Narrative",
        title: "Official Biography",
        desc: "7-chapter chronological story detailing the journey from Chemical Engineering to AI PhD and industrial consulting.",
        btn: "Open long-read dossier",
      },
      card2: {
        badge: "Chronology & Milestones",
        title: "Career Timeline",
        desc: "Strategic milestones from 1995 to 2026 filtered by academia, scientific research, industry, and degrees.",
        btn: "View timeline",
      },
      card3: {
        badge: "Degrees & Credentials",
        title: "Academic Degrees",
        desc: "Comprehensive breakdown of undergraduate degree, Master's, PhD, Post-Doctorates, specialization, and executive training.",
        btn: "View academic degrees",
      },
    },
    "es": {
      badge: "SOBRE WAGNER",
      h1: "Una trayectoria construida entre ciencia, ingeniería y aplicación.",
      lead: "El Prof. Dr. Wagner Eustáquio de Vasconcelos es ingeniero, investigador y profesor con una trayectoria que conecta formación científica, experiencia académica y actuación técnica en la industria.",
      ctaTimeline: "Conozca la trayectoria",
      ctaEducation: "Ver formación académica",
      ctaLattes: "Currículum Lattes",
      linkBio: "Leer biografía editorial completa en 7 capítulos",
      handwriting: { line1: "Conocimiento", line2: "que transforma", line3: "realidades" },
      authorTitle: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      authorSub: "Ingeniería • Inteligencia Artificial • Sostenibilidad",
      purposeBadge: "POSICIONAMIENTO Y PROPÓSITO",
      purposeTitle: "Ingeniería como punto de partida. Investigación como método. Aplicación como propósito.",
      p1: "Graduado en Ingeniería Química, Wagner forjó su trayectoria académica en áreas que abarcan Ingeniería Nuclear, Inteligencia Artificial, Seguridad de Procesos y Gestión Ambiental.",
      p2: "A lo largo de su carrera, integró investigación científica, docencia universitaria, gestión directiva y consultoría técnica en complejos industriales y ambientales.",
      quote: "Investigación, docencia y aplicación industrial no son caminos separados. Son partes de un mismo proceso de construcción de conocimiento.",
      quoteLabel: "Directriz Institucional de Actuación",
      pillarsBadge: "CAMPOS DE ACTUACIÓN INTEGRADA",
      pillarsTitle: "Identidad Profesional",
      pillars: [
        {
          role: "INGENIERO",
          icon: Cpu,
          description: "Investigación, procesos químicos, seguridad, medio ambiente y sistemas industriales.",
        },
        {
          role: "INVESTIGADOR",
          icon: Microscope,
          description: "Modelado matemático, Inteligencia Artificial, lógica difusa, redes neuronales y toma de decisiones.",
        },
        {
          role: "PROFESOR",
          icon: BookOpen,
          description: "Educación superior y mentoría en distintas ramas de la Ingeniería.",
        },
        {
          role: "ESPECIALISTA",
          icon: ShieldAlert,
          description: "Consultoría técnica en seguridad de procesos, emisiones atmosféricas, calidad del aire y peritajes.",
        },
      ],
      hubBadge: "PROFUNDIZACIÓN TEMÁTICA",
      hubTitle: "Explore la documentación completa",
      card1: {
        badge: "Narrativa Completa",
        title: "Biografía Oficial",
        desc: "Historia en 7 capítulos detallando de la Ingeniería Química al Doctorado en IA y consultoría industrial.",
        btn: "Acceder a lectura completa",
      },
      card2: {
        badge: "Cronología e Hitos",
        title: "Línea de Tiempo",
        desc: "Hitos estratégicos de 1995 a 2026 con filtros por áreas académica, investigación, profesional y grados.",
        btn: "Ver cronología",
      },
      card3: {
        badge: "Grados y Titulaciones",
        title: "Formación Académica",
        desc: "Detalle de licenciatura, maestría, doctorado, postdoctorados, especialización y extensión ejecutiva.",
        btn: "Consultar titulaciones",
      },
    },
  };

  const cur = content[language] || content["pt-BR"];

  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb de Navegação */}
        <Breadcrumbs items={[{ label: "Sobre o Autor" }]} />

        {/* 1. HERO INSTITUCIONAL */}
        <section className="py-8 sm:py-12 border-b border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Coluna de Texto Principal */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/70 inline-block mb-3">
                  {cur.badge}
                </span>
                
                <h1 className="font-heading font-[650] text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-[-0.035em] leading-[1.12]">
                  {cur.h1}
                </h1>
              </div>

              <p className="font-body text-base sm:text-lg text-slate-600 leading-[1.7] font-normal tracking-[-0.008em]">
                {cur.lead}
              </p>

              {/* Botões de Ação Principais (CTAs) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/sobre/trajetoria"
                  className="font-body font-semibold text-sm inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white bg-slate-950 hover:bg-sky-950 active:bg-sky-900 shadow-md shadow-slate-950/20 transition-all min-h-[48px] tracking-[-0.005em]"
                >
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span>{cur.ctaTimeline}</span>
                </Link>

                <Link
                  href="/sobre/formacao"
                  className="font-body font-semibold text-sm inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs transition-all min-h-[48px] tracking-[-0.005em]"
                >
                  <GraduationCap className="w-4 h-4 text-sky-700" />
                  <span>{cur.ctaEducation}</span>
                </Link>

                <Link
                  href="/curriculo-lattes"
                  className="font-body font-semibold text-sm inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sky-900 bg-sky-50/80 hover:bg-sky-100/80 border border-sky-200/80 transition-all min-h-[48px] tracking-[-0.005em]"
                >
                  <FileText className="w-4 h-4 text-sky-700" />
                  <span>{cur.ctaLattes}</span>
                </Link>
              </div>

              {/* Acesso Direto à Biografia Longa */}
              <div className="pt-2">
                <Link
                  href="/sobre/biografia"
                  className="font-body text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1.5 group tracking-[-0.005em]"
                >
                  <span>{cur.linkBio}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Coluna da Imagem Oficial */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative bg-white/80 backdrop-blur-xl p-3.5 rounded-[2.5rem] border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  <div className="relative aspect-[3.3/4] w-full rounded-[2rem] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/wagner-vasconcelos.jpg"
                      alt="Prof. Dr. Wagner Eustáquio de Vasconcelos"
                      fill
                      sizes="(max-width: 640px) 340px, 420px"
                      priority
                      className="object-cover object-top"
                    />
                    
                    {/* Caligrafia exclusiva manuscrita sobreposta */}
                    <div className="absolute bottom-4 right-4 select-none pointer-events-none text-right">
                      <p className="font-script text-white text-2xl sm:text-3xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] -rotate-3">
                        {cur.handwriting.line1}<br />
                        <span className="text-sky-200">{cur.handwriting.line2}</span><br />
                        {cur.handwriting.line3}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 p-3.5 rounded-2xl bg-slate-900 text-white">
                    <p className="font-heading font-[650] text-sm tracking-[-0.015em] text-white">
                      {cur.authorTitle}
                    </p>
                    <p className="font-body text-sky-300 text-xs font-medium mt-0.5 tracking-normal">
                      {cur.authorSub}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. RESUMO BIOGRÁFICO EDITORIAL */}
        <section className="py-14 sm:py-18 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block">
              {cur.purposeBadge}
            </span>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-[-0.035em] leading-[1.2]">
              {cur.purposeTitle}
            </h2>

            <div className="space-y-4 font-body text-base sm:text-lg text-slate-600 leading-[1.75] tracking-[-0.008em]">
              <p>{cur.p1}</p>
              <p>{cur.p2}</p>
            </div>

            {/* Citação Editorial em Destaque */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 my-8">
              <blockquote className="font-editorial italic font-normal text-lg sm:text-xl text-slate-700 leading-relaxed tracking-[-0.01em]">
                <span className="text-sky-700 not-italic text-2xl leading-none select-none mr-1.5">“</span>
                {cur.quote}
                <span className="text-sky-700 not-italic text-2xl leading-none select-none ml-1.5">”</span>
              </blockquote>
              <p className="font-body text-xs text-slate-400 uppercase tracking-widest font-semibold mt-4">
                {cur.quoteLabel}
              </p>
            </div>
          </div>
        </section>

        {/* 3. BLOCO DE IDENTIDADE PROFISSIONAL */}
        <section className="py-14 sm:py-18 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto mb-10 text-center sm:text-left">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-2">
              {cur.pillarsBadge}
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-[-0.035em]">
              {cur.pillarsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cur.pillars.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={pilar.role}
                  className="p-6 rounded-3xl bg-white/85 backdrop-blur-md border border-slate-200/80 hover:border-sky-300/80 shadow-2xs hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-slate-50 border border-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-slate-700 group-hover:text-sky-400" />
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-slate-950 tracking-[-0.02em] mb-2">
                      {pilar.role}
                    </h3>

                    <p className="font-body text-sm text-slate-600 leading-[1.65] tracking-[-0.005em]">
                      {pilar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. HUB DE DIRECIONAMENTO PARA SUB-PÁGINAS */}
        <section className="py-14 sm:py-18">
          <div className="max-w-4xl mx-auto mb-8 text-center sm:text-left">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block mb-2">
              {cur.hubBadge}
            </span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.035em]">
              {cur.hubTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/sobre/biografia"
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 inline-block mb-3">
                  {cur.card1.badge}
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em] mb-2 group-hover:text-sky-900 transition-colors">
                  {cur.card1.title}
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {cur.card1.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                <span>{cur.card1.btn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/sobre/trajetoria"
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200/70 inline-block mb-3">
                  {cur.card2.badge}
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em] mb-2 group-hover:text-sky-900 transition-colors">
                  {cur.card2.title}
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {cur.card2.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                <span>{cur.card2.btn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/sobre/formacao"
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400/80 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/70 inline-block mb-3">
                  {cur.card3.badge}
                </span>
                <h3 className="font-heading font-semibold text-xl text-slate-950 tracking-[-0.02em] mb-2 group-hover:text-sky-900 transition-colors">
                  {cur.card3.title}
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {cur.card3.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950">
                <span>{cur.card3.btn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
