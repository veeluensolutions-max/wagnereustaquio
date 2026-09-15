"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown, Check, X } from "lucide-react";
import { ArticleSection } from "@/data/articles";

interface ArticleTableOfContentsProps {
  sections: ArticleSection[];
}

export default function ArticleTableOfContents({ sections }: ArticleTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpenMobile(false);
    }
  };

  return (
    <>
      {/* Sumário Desktop */}
      <div className="my-8 p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200/60">
          <List className="w-4 h-4 text-sky-800" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-slate-800">
            Sumário do Artigo
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-body transition-all flex items-center justify-between cursor-pointer min-h-[44px] ${
                  isActive
                    ? "bg-sky-100/70 text-sky-950 font-semibold shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className="line-clamp-1">{section.title}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-sky-700 shrink-0 ml-2" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Botão Flutuante Mobile para Sumário */}
      <div className="lg:hidden fixed bottom-6 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpenMobile(true)}
          className="px-4 py-2.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white font-body text-xs font-semibold shadow-xl border border-slate-700 flex items-center gap-2 cursor-pointer min-h-[44px]"
          aria-label="Abrir sumário"
        >
          <List className="w-4 h-4 text-sky-400" />
          <span>Sumário</span>
        </button>
      </div>

      {/* Drawer Bottom Sheet Mobile */}
      {isOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-200">
          <div
            className="w-full bg-white rounded-t-[2.5rem] p-6 shadow-2xl border-t border-slate-200 max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom duration-300"
            style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <List className="w-4 h-4 text-sky-800" />
                <h3 className="font-heading font-semibold text-sm text-slate-900">
                  Navegar pelas Seções
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpenMobile(false)}
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3.5 rounded-2xl text-xs sm:text-sm font-body transition-colors flex items-center justify-between min-h-[44px] ${
                      isActive
                        ? "bg-sky-100 text-sky-950 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{section.title}</span>
                    {isActive && <Check className="w-4 h-4 text-sky-700 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
