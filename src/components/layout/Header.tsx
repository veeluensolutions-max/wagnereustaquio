"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { ChevronDown, Menu, X, GraduationCap, ExternalLink, Search } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import QuickSearchModal from "./QuickSearchModal";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Atalho global Cmd+K / Ctrl+K para abrir busca
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menus ao mudar de rota
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Bloquear rolagem do body e suporte à tecla Escape quando menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_12px_36px_rgba(15,23,42,0.08)] border border-white/80"
            : "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.05)] border border-white/90"
        } px-4 sm:px-6 py-2.5 sm:py-3`}
        ref={navRef}
      >
        <div className="flex items-center justify-between">
          {/* Marca / Identidade */}
          <Link
            href="/"
            className="flex flex-col group focus:outline-none justify-center pr-2"
            aria-label="Prof. Dr. Wagner Eustáquio de Vasconcelos - Página Inicial"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.1em] font-semibold text-sky-700 leading-tight">
              {t.header.tagline}
            </span>
            <span className="font-heading text-sm sm:text-base font-[650] tracking-[-0.025em] text-slate-950 group-hover:text-sky-800 transition-colors leading-snug">
              Prof. Dr. Wagner Vasconcelos
            </span>
          </Link>

          {/* Navegação Desktop Central: DM Sans 500, sem bold excessivo, espaçamento arejado */}
          <nav
            className="hidden lg:flex items-center space-x-1.5"
            aria-label="Navegação principal"
          >
            {t.navigation.map((section) => {
              const hasDropdown = Boolean(section.items && section.items.length > 0);
              const isOpen = openDropdown === section.title;

              if (!hasDropdown) {
                return (
                  <Link
                    key={section.title}
                    href={section.href}
                    className={`px-3.5 py-1.5 rounded-full font-body text-[13.5px] font-medium tracking-normal transition-all duration-150 ${
                      pathname === section.href
                        ? "text-sky-900 bg-sky-50"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/60"
                    }`}
                  >
                    {section.title}
                  </Link>
                );
              }

              return (
                <div key={section.title} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(isOpen ? null : section.title)}
                    onMouseEnter={() => setOpenDropdown(section.title)}
                    className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full font-body text-[13.5px] font-medium tracking-normal transition-all duration-150 cursor-pointer ${
                      isOpen
                        ? "text-sky-950 bg-sky-50"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/60"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{section.title}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 text-slate-400 ${
                        isOpen ? "rotate-180 text-sky-700" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu / Dropdown Panel */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 sm:w-92 rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_16px_40px_rgba(15,23,42,0.12)] border border-slate-200/90 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      role="menu"
                    >
                      <div className="space-y-1">
                        {section.items?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            onClick={() => {
                              setOpenDropdown(null);
                              if (item.href === "/curriculo-lattes") {
                                trackEvent("click_lattes", { location: "header_dropdown" });
                              }
                            }}
                            className="block p-2.5 rounded-2xl hover:bg-sky-50/70 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-heading font-semibold text-[13px] text-slate-950 group-hover:text-sky-900 tracking-[-0.015em]">
                                {item.title}
                              </span>
                              {item.href === "/curriculo-lattes" && (
                                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-700" />
                              )}
                            </div>
                            {item.description && (
                              <p className="font-body font-normal text-[12px] text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Ícone de Busca circular integrado no menu */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-8 h-8 rounded-full bg-slate-100/70 hover:bg-slate-200/70 flex items-center justify-center text-slate-600 hover:text-slate-950 transition-colors ml-1 cursor-pointer"
              aria-label="Abrir busca rápida"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Ações Desktop: DM Sans 600, sem bold excessivo + Seletor de Idioma */}
          <div className="hidden lg:flex items-center space-x-2">
            <LanguageSwitcher variant="desktop" />

            <Link
              href="/curriculo-lattes"
              onClick={() => trackEvent("click_lattes", { location: "header_badge" })}
              className="font-body font-semibold text-xs text-slate-700 hover:text-sky-900 bg-white hover:bg-slate-50 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 border border-slate-200/90 shadow-2xs tracking-[-0.005em]"
            >
              <span>{t.header.lattesBadge}</span>
            </Link>

            <Link
              href="/produtos/cursos"
              onClick={() => trackEvent("select_item", { item_name: "Cursos Header CTA" })}
              className="font-body font-semibold text-xs inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-white bg-[#0b192c] hover:bg-sky-950 transition-all shadow-xs hover:shadow-md tracking-[-0.005em]"
            >
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.header.coursesCta}</span>
              <ChevronDown className="w-3 h-3 -rotate-90 text-slate-400" />
            </Link>
          </div>

          {/* Botões Mobile (Lado direito) */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <LanguageSwitcher variant="mobile" />

            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 active:bg-slate-200 transition-colors"
              aria-label={t.header.searchAria}
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.header.closeMenuAria : t.header.openMenuAria}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Busca Global */}
      <QuickSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Otimizado para iPhone / iOS */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/50 backdrop-blur-md animate-in fade-in duration-200 flex flex-col justify-end">
          <div
            className="w-full bg-white rounded-t-3xl shadow-2xl flex flex-col max-h-[88vh] border-t border-slate-200 animate-in slide-in-from-bottom duration-300"
            style={{
              paddingBottom: "max(1.75rem, env(safe-area-inset-bottom))",
            }}
          >
            {/* Barra superior do drawer */}
            <div className="p-4 px-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-slate-900">
                  {t.header.mobileNavTitle}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 active:bg-slate-200"
                aria-label={t.header.closeMenuAria}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lista com scroll tátil suave */}
            <div className="overflow-y-auto px-6 py-4 space-y-4">
              {/* Seletor de Idioma no topo do Drawer */}
              <LanguageSwitcher variant="drawer" className="pb-3 border-b border-slate-100" />

              {t.navigation.map((section) => (
                <div key={section.title} className="pb-3 border-b border-slate-100 last:border-0">
                  <span className="block font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 mb-2">
                    {section.title}
                  </span>
                  {section.items ? (
                    <div className="space-y-1 pl-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            if (item.href === "/curriculo-lattes") {
                              trackEvent("click_lattes", { location: "mobile_menu" });
                            }
                          }}
                          className="flex items-center justify-between py-2.5 px-3 rounded-xl font-body text-base font-medium text-slate-800 hover:text-sky-900 hover:bg-sky-50/60 active:bg-sky-100/60 min-h-[44px]"
                        >
                          <span>{item.title}</span>
                          {item.href === "/curriculo-lattes" ? (
                            <ExternalLink className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-300" />
                          )}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={section.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl font-body text-base font-medium text-slate-900 hover:text-sky-900 hover:bg-sky-50/60 min-h-[44px]"
                    >
                      <span>{section.title}</span>
                      <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-300" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Ações inferiores para alcance confortável do polegar com Safe Area iOS */}
            <div className="px-6 pt-3 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] border-t border-slate-100 space-y-2.5">
              <Link
                href="/produtos/cursos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-body text-sm font-semibold text-white bg-slate-950 hover:bg-sky-950 active:bg-sky-900 transition-colors shadow-md min-h-[48px]"
              >
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>{t.header.mobileCoursesCta}</span>
              </Link>
              <Link
                href="/curriculo-lattes"
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackEvent("click_lattes", { location: "mobile_menu_button" });
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-body text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-200 transition-colors border border-slate-200/80 min-h-[44px]"
              >
                <span>{t.header.mobileLattesCta}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
