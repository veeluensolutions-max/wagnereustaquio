"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import {
  Language,
  SUPPORTED_LANGUAGES,
  LanguageOption,
  TRANSLATIONS,
  TranslationDictionary,
} from "@/data/translations";
import { trackEvent } from "@/lib/analytics";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentOption: LanguageOption;
  t: TranslationDictionary;
  supportedLanguages: LanguageOption[];
  isChanging: boolean;
}

const STORAGE_KEY = "preferred_language";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define ou remove os cookies do Google Translate para tradução total do DOM
function applyGoogleTranslateCookies(lang: Language) {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const hostname = window.location.hostname;
  const isLocal = hostname === "localhost" || hostname === "127.0.0.1";
  const targetCode = lang === "en" ? "en" : lang === "es" ? "es" : "";

  if (!targetCode || lang === "pt-BR") {
    // Limpeza profunda de cookies para restaurar português original
    const cookiesToClear = ["googtrans"];
    cookiesToClear.forEach((name) => {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      document.cookie = `${name}=; path=/; domain=${hostname}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      if (!isLocal) {
        document.cookie = `${name}=; path=/; domain=.${hostname}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      }
    });
  } else {
    // Define os cookies de tradução para todos os escopos necessários
    const pairs = [`/pt/${targetCode}`, `/auto/${targetCode}`];
    pairs.forEach((val) => {
      document.cookie = `googtrans=${val}; path=/; max-age=31536000; SameSite=Lax;`;
      document.cookie = `googtrans=${val}; path=/; domain=${hostname}; max-age=31536000; SameSite=Lax;`;
      if (!isLocal) {
        document.cookie = `googtrans=${val}; path=/; domain=.${hostname}; max-age=31536000; SameSite=Lax;`;
      }
    });
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt-BR");
  const [isChanging, setIsChanging] = useState(false);

  // Inicialização no cliente
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang && (savedLang === "pt-BR" || savedLang === "en" || savedLang === "es")) {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang === "pt-BR" ? "pt-BR" : savedLang === "en" ? "en" : "es";
        applyGoogleTranslateCookies(savedLang);
      }
    } catch {
      // Ignorar erros locais
    }
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    if (newLang === language) return;

    setIsChanging(true);
    setLanguageState(newLang);

    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang === "pt-BR" ? "pt-BR" : newLang === "en" ? "en" : "es";
      applyGoogleTranslateCookies(newLang);

      // Tracking analítico da ação
      trackEvent("change_language", {
        language: newLang,
        source: "language_switcher",
      });

      // Tenta acionar diretamente se o widget já existir
      if (typeof window !== "undefined" && typeof window.__switchGoogleLanguage === "function") {
        window.__switchGoogleLanguage(newLang);
      }

      // Recarrega suavemente a página em 120ms para aplicar a tradução global no DOM inteiro
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.reload();
        }
      }, 120);
    } catch {
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }
  }, [language]);

  const currentOption = useMemo(() => {
    return (
      SUPPORTED_LANGUAGES.find((opt) => opt.code === language) ||
      SUPPORTED_LANGUAGES[0]
    );
  }, [language]);

  const t = useMemo(() => {
    return TRANSLATIONS[language] || TRANSLATIONS["pt-BR"];
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      currentOption,
      t,
      supportedLanguages: SUPPORTED_LANGUAGES,
      isChanging,
    }),
    [language, setLanguage, currentOption, t, isChanging]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser utilizado dentro de um LanguageProvider");
  }
  return context;
}
