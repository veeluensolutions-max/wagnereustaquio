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
const GOOG_COOKIE_NAME = "googtrans";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper para gerenciar o cookie de tradução do Google (modo silencioso)
function setGoogleTranslateCookie(lang: Language) {
  if (typeof document === "undefined") return;

  const domain = window.location.hostname;
  const isLocalhost = domain === "localhost" || domain === "127.0.0.1";
  const domainPart = isLocalhost ? "" : `; domain=.${domain}`;

  if (lang === "pt-BR") {
    // Remover cookie do Google Translate para voltar ao original
    document.cookie = `${GOOG_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainPart};`;
    document.cookie = `${GOOG_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  } else {
    const targetCode = lang === "en" ? "en" : "es";
    const cookieValue = `/pt/${targetCode}`;
    document.cookie = `${GOOG_COOKIE_NAME}=${cookieValue}; path=/${domainPart}; max-age=31536000; SameSite=Lax`;
    document.cookie = `${GOOG_COOKIE_NAME}=${cookieValue}; path=/; max-age=31536000; SameSite=Lax`;
  }
}

// Disparar atualização do Google Translate se disponível no DOM
function triggerGoogleTranslateElement(lang: Language) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const targetCode = lang === "pt-BR" ? "pt" : lang === "en" ? "en" : "es";

  // Buscar combo padrão do Google Translate caso exista no DOM
  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (combo) {
    combo.value = targetCode;
    combo.dispatchEvent(new Event("change"));
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt-BR");
  const [isChanging, setIsChanging] = useState(false);

  // Inicialização no lado do cliente
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang && (savedLang === "pt-BR" || savedLang === "en" || savedLang === "es")) {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang === "pt-BR" ? "pt-BR" : savedLang === "en" ? "en" : "es";
        setGoogleTranslateCookie(savedLang);
      } else {
        // Detecção opcional via navegador
        const browserLang = navigator.language?.toLowerCase() || "";
        if (browserLang.startsWith("en")) {
          // Mantemos pt-BR como padrão corporativo conforme regra de negócio, mas permitimos troca instantânea
        }
      }
    } catch {
      // Ignorar erros de armazenamento
    }
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    if (newLang === language) return;

    setIsChanging(true);
    setLanguageState(newLang);

    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang === "pt-BR" ? "pt-BR" : newLang === "en" ? "en" : "es";
      setGoogleTranslateCookie(newLang);
      triggerGoogleTranslateElement(newLang);

      // Tracking analítico da ação do usuário
      trackEvent("change_language", {
        language: newLang,
        source: "language_switcher",
      });
    } catch {
      // Fallback gracioso
    }

    const timer = setTimeout(() => {
      setIsChanging(false);
    }, 350);

    return () => clearTimeout(timer);
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
