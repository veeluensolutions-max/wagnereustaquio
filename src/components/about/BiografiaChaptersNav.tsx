"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Chapter {
  id: string;
  number: string;
  title: string;
}

interface BiografiaChaptersNavProps {
  chapters: Chapter[];
  navLabel?: string;
  indexBtnLabel?: string;
  readingSummaryLabel?: string;
}

export default function BiografiaChaptersNav({
  chapters,
  navLabel,
  indexBtnLabel,
  readingSummaryLabel,
}: BiografiaChaptersNavProps) {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState<string>("capitulo-1");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const displayNavLabel =
    navLabel || (language === "en" ? "Chapters:" : language === "es" ? "Capítulos:" : "Capítulos:");
  const displayIndexBtn =
    indexBtnLabel || (language === "en" ? "Index" : language === "es" ? "Índice" : "Índice");
  const displayReadingSummary =
    readingSummaryLabel ||
    (language === "en"
      ? "Table of Contents"
      : language === "es"
      ? "Sumario de Lectura"
      : "Sumário de Leitura");

  // Monitorar scroll para destacar capítulo ativo
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const chapter of chapters) {
        const element = document.getElementById(chapter.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters]);

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpenMobile(false);
    }
  };

  return (
    <div className="py-4 border-b border-slate-200/80 sticky top-[72px] sm:top-[80px] z-30 bg-white/90 backdrop-blur-xl transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        
        {/* Desktop: Pílulas de Navegação por Capítulos */}
        <div className="hidden lg:flex items-center space-x-1.5 overflow-x-auto py-1 scrollbar-none">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-slate-400 mr-2 shrink-0">
            {displayNavLabel}
          </span>
          {chapters.map((chapter) => {
            const isActive = activeId === chapter.id;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => scrollToChapter(chapter.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium font-body transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-slate-950 text-white shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                <span className="opacity-60 mr-1 font-heading font-bold">{chapter.number}</span>
                <span>{chapter.title}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile (iPhones): Botão de Abertura em Dropdown/Bottom Drawer */}
        <div className="flex lg:hidden w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            <span className="font-body text-xs font-semibold text-slate-700">
              {chapters.find((c) => c.id === activeId)?.title || displayReadingSummary}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpenMobile(!isOpenMobile)}
            className="font-body text-xs font-semibold text-sky-800 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/80 flex items-center gap-1 cursor-pointer"
            aria-expanded={isOpenMobile}
          >
            <span>{displayIndexBtn} ({chapters.length})</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpenMobile ? "rotate-180" : ""}`} />
          </button>
        </div>


      </div>

      {/* Drawer Mobile de Capítulos */}
      {isOpenMobile && (
        <div className="lg:hidden mt-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-1 animate-in fade-in duration-150">
          {chapters.map((chapter) => {
            const isActive = activeId === chapter.id;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => scrollToChapter(chapter.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-body transition-colors cursor-pointer ${
                  isActive
                    ? "bg-sky-50 text-sky-900 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-sky-700">{chapter.number}</span>
                  <span>{chapter.title}</span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-sky-700" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
