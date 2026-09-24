"use client";

import React from "react";
import Link from "next/link";
import { TECHNICAL_PROJECTS } from "@/data/projects";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const { language } = useLanguage();

  const labels = {
    "pt-BR": {
      badge: "APLICAÇÃO PRÁTICA",
      title: "Projetos que conectam engenharia, ambiente e inovação.",
      cta: "Ver projetos e pesquisas",
    },
    "en": {
      badge: "PRACTICAL APPLICATION",
      title: "Projects bridging engineering, sustainability, and innovation.",
      cta: "View projects & research",
    },
    "es": {
      badge: "APLICACIÓN PRÁCTICA",
      title: "Proyectos que conectan ingeniería, medio ambiente e innovación.",
      cta: "Ver proyectos e investigaciones",
    },
  };

  const current = labels[language] || labels["pt-BR"];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-2">
              {current.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {current.title}
            </h2>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 hover:text-sky-900 mt-4 md:mt-0 transition-colors group"
          >
            <span>{current.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>


        {/* Grid dos 6 Cards de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {project.category}
                  </span>
                  <Layers className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="space-y-1.5 mb-6">
                  {project.scope.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-sky-800 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explorar fundamentos técnicos</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-700" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
