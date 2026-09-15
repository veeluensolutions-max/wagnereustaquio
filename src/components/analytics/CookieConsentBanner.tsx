"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Shield, Settings, Check, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  hasResponded: boolean;
}

const STORAGE_KEY = "wev_cookie_preferences_v1";

/**
 * Atualiza o Google Consent Mode v2 e envia evento para o dataLayer
 */
const applyConsentToGtm = (prefs: CookiePreferences) => {
  if (typeof window === "undefined") return;

  const analyticsState = prefs.analytics ? "granted" : "denied";
  const marketingState = prefs.marketing ? "granted" : "denied";

  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: analyticsState,
      ad_storage: marketingState,
      ad_user_data: marketingState,
      ad_personalization: marketingState,
    });
  }

  trackEvent("consent_update", {
    analytics_storage: analyticsState,
    ad_storage: marketingState,
    ad_user_data: marketingState,
    ad_personalization: marketingState,
  });
};

export default function CookieConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    hasResponded: false,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // 1. Carregar preferências salvas em localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CookiePreferences = JSON.parse(saved);
        queueMicrotask(() => {
          setPreferences(parsed);
          applyConsentToGtm(parsed);
        });
      } else {
        // Exibir banner apenas se o usuário ainda não tiver respondido
        queueMicrotask(() => {
          setIsOpen(true);
        });
      }
    } catch {
      queueMicrotask(() => {
        setIsOpen(true);
      });
    }

    // 2. Ouvir evento disparado pelo rodapé ou página de cookies para reabrir
    const handleOpenModal = () => {
      setShowSettings(true);
      setIsOpen(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenModal);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenModal);
  }, []);

  // 3. Gerenciamento de acessibilidade: tecla ESC e Focus Trap ao abrir a modal
  useEffect(() => {
    if (!showSettings) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSettings(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSettings]);

  const handleAcceptAll = () => {
    const updated: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      hasResponded: true,
    };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Storage fallback
    }
    applyConsentToGtm(updated);
    setIsOpen(false);
    setShowSettings(false);
  };

  const handleRejectNonEssential = () => {
    const updated: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      hasResponded: true,
    };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Storage fallback
    }
    applyConsentToGtm(updated);
    setIsOpen(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const updated: CookiePreferences = {
      ...preferences,
      necessary: true,
      hasResponded: true,
    };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Storage fallback
    }
    applyConsentToGtm(updated);
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      role={showSettings ? "dialog" : "region"}
      aria-modal={showSettings ? "true" : undefined}
      aria-label="Gerenciamento de Privacidade e Cookies"
      aria-labelledby="cookie-banner-title"
      ref={modalRef}
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 pb-[max(1rem,env(safe-area-inset-bottom))] bg-slate-900/95 text-slate-100 backdrop-blur-md border-t border-slate-800 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sky-400 shrink-0" />
                <h3 id="cookie-banner-title" className="font-semibold text-base text-white">
                  Privacidade e Proteção de Dados (LGPD)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Utilizamos cookies estritamente necessários para o funcionamento e, com seu consentimento prévio, cookies de métricas e analytics para aprimorar conteúdos e pesquisas técnicas. Você tem controle total sobre suas preferências. Conheça nossa{" "}
                <Link
                  href="/privacidade"
                  className="text-sky-400 underline hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setShowSettings(true)}
                className="min-h-[44px] px-3.5 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Abrir configurações detalhadas de cookies"
              >
                <Settings className="w-4 h-4" />
                <span>Configurar</span>
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="min-h-[44px] px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 rounded-xl transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Recusar cookies opcionais"
              >
                Recusar Opcionais
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="min-h-[44px] px-5 py-2.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-xl transition-colors shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Aceitar todos os cookies"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-sky-400 shrink-0" />
                <h3 id="cookie-banner-title" className="font-semibold text-base text-white">
                  Central de Preferências de Consentimento
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 flex items-center justify-center cursor-pointer"
                aria-label="Fechar painel de preferências"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Categoria 1: Necessários */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-sm">Cookies Necessários</span>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/50">
                      Sempre Ativo
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Essenciais para a segurança, acessibilidade, balanceamento de rede e funcionamento básico da plataforma.
                  </p>
                </div>
              </div>

              {/* Categoria 2: Analytics & Métricas */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-sm">Analytics & Métricas</span>
                    <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-end">
                      <span className="sr-only">Ativar cookies de analytics</span>
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[11px] after:right-[22px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
                    </label>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Permitem compreender quais artigos científicos e tópicos técnicos são mais relevantes, por meio de dados estatísticos agregados.
                  </p>
                </div>
              </div>

              {/* Categoria 3: Comunicação & Marketing */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-sm">Comunicação & Cursos</span>
                    <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-end">
                      <span className="sr-only">Ativar cookies de marketing</span>
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[11px] after:right-[22px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
                    </label>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Possibilitam avisar você sobre novidades de novas turmas de cursos e materiais especializados (remarketing consentido).
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="min-h-[44px] px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Rejeitar Opcionais
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="min-h-[44px] px-5 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Check className="w-4 h-4" />
                <span>Salvar Minhas Preferências</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
