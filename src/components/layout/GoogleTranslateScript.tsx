"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            multilanguagePage?: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
    __switchGoogleLanguage?: (lang: string) => boolean;
  }
}

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Função disparadora que o LanguageContext chama ao clicar no botão de idioma
    window.__switchGoogleLanguage = (lang: string) => {
      const targetLang = lang === "pt-BR" || lang === "pt" ? "" : lang === "en" ? "en" : "es";
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");

      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        return true;
      }
      return false;
    };

    // Callback oficial exigido pela API do Google Translate
    window.googleTranslateElementInit = () => {
      try {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "pt",
              includedLanguages: "pt,en,es",
              autoDisplay: false,
              multilanguagePage: true,
            },
            "google_translate_element"
          );

          // Verifica se havia um idioma previamente salvo diferente de português
          const saved = localStorage.getItem("preferred_language");
          if (saved && saved !== "pt-BR") {
            const target = saved === "en" ? "en" : "es";
            const checkInterval = setInterval(() => {
              const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
              if (combo) {
                combo.value = target;
                combo.dispatchEvent(new Event("change", { bubbles: true }));
                clearInterval(checkInterval);
              }
            }, 250);

            setTimeout(() => clearInterval(checkInterval), 10000);
          }
        }
      } catch (err) {
        console.warn("Google Translate Element Init:", err);
      }
    };

    // Injeção dinâmica do script do Google Translate
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "-9999px",
        left: "-9999px",
        width: "1px",
        height: "1px",
        opacity: 0.01,
        pointerEvents: "none",
        zIndex: -9999,
      }}
    />
  );
}
