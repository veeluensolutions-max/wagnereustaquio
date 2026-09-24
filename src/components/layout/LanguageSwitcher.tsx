"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, ChevronDown, Check } from "lucide-react";
import { Language } from "@/data/translations";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile" | "drawer";
}

export default function LanguageSwitcher({
  className = "",
  variant = "desktop",
}: LanguageSwitcherProps) {
  const { language, setLanguage, currentOption, supportedLanguages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  // Variante para o drawer lateral do celular (botões horizontais lado a lado)
  if (variant === "drawer") {
    return (
      <div className={`space-y-2 ${className}`}>
        <span className="block font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800">
          {t.header.switchLanguageAria}
        </span>
        <div className="grid grid-cols-3 gap-2">
          {supportedLanguages.map((option) => {
            const isSelected = option.code === language;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold font-body transition-all min-h-[44px] cursor-pointer ${
                  isSelected
                    ? "bg-sky-950 text-white shadow-xs border border-sky-900"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 active:bg-slate-200"
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-sm leading-none">{option.flag}</span>
                <span>{option.short}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Variante mobile para a barra superior
  if (variant === "mobile") {
    return (
      <div className={`relative ${className}`} ref={containerRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 h-9 px-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs text-xs font-semibold font-body transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={t.header.switchLanguageAria}
        >
          <span className="text-xs leading-none">{currentOption.flag}</span>
          <span className="text-[11px] uppercase tracking-wider text-slate-900 font-bold">
            {currentOption.short}
          </span>
          <ChevronDown
            className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-sky-700" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_16px_40px_rgba(15,23,42,0.15)] border border-slate-200/90 p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            role="menu"
          >
            <div className="space-y-0.5">
              {supportedLanguages.map((option) => {
                const isSelected = option.code === language;
                return (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => handleSelectLanguage(option.code)}
                    role="menuitem"
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left font-body text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-sky-50 text-sky-950 font-semibold"
                        : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-950"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base leading-none">{option.flag}</span>
                      <span className="text-[13px]">{option.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-sky-700" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Variante Desktop padrão
  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="font-body font-semibold text-xs text-slate-700 hover:text-sky-950 bg-white hover:bg-slate-50 px-3 py-2 rounded-full transition-all flex items-center gap-1.5 border border-slate-200/90 shadow-2xs tracking-[-0.005em] cursor-pointer group"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${t.header.switchLanguageAria}: ${currentOption.name}`}
      >
        <Globe className="w-3.5 h-3.5 text-sky-700 group-hover:text-sky-900 transition-colors" />
        <span className="text-xs leading-none">{currentOption.flag}</span>
        <span className="text-[11.5px] uppercase font-bold text-slate-800 tracking-wide">
          {currentOption.short}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:text-slate-600 ${
            isOpen ? "rotate-180 text-sky-700" : ""
          }`}
        />
      </button>

      {/* Menu suspenso de seleção de idiomas */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_18px_42px_rgba(15,23,42,0.14)] border border-slate-200/90 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-2.5 py-1.5 border-b border-slate-100 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400 font-body">
              Selecione o Idioma / Language
            </span>
          </div>

          <div className="space-y-1">
            {supportedLanguages.map((option) => {
              const isSelected = option.code === language;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => handleSelectLanguage(option.code)}
                  role="menuitem"
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left font-body transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-sky-50 text-sky-950 font-semibold shadow-2xs"
                      : "text-slate-700 hover:bg-slate-100/70 hover:text-slate-950"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{option.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-[12.5px] leading-tight text-slate-900 font-medium">
                        {option.name}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-tight">
                        {option.country}
                      </span>
                    </div>
                  </div>

                  {isSelected ? (
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-sky-800 stroke-[2.5]" />
                    </div>
                  ) : (
                    <span className="text-[10px] font-mono font-medium text-slate-400 uppercase bg-slate-100 px-1.5 py-0.5 rounded">
                      {option.short}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
