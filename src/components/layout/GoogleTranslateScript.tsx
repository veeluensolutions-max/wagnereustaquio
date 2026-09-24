"use client";

import React, { useEffect } from "react";

// Declaração de tipos para a janela com Google Translate
declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Configura o callback global do Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "pt",
            includedLanguages: "pt,en,es",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Injeta o script do Google Translate de forma assíncrona apenas uma vez
    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="hidden sr-only"
      aria-hidden="true"
      style={{ display: "none" }}
    />
  );
}
