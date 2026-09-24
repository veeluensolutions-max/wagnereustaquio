"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { DICTIONARY_MAP, VOCABULARY_REPLACEMENTS } from "@/lib/domTranslator";

// Extensão de tipo para armazenar texto original no nó DOM
interface ExtendedTextNode extends Text {
  __originalText?: string;
  __translatedLang?: string;
}

// Mapa normalizado de frases para match rápido
const NORMALIZED_DICTIONARY: Record<string, { en: string; es: string }> = {};
for (const [key, value] of Object.entries(DICTIONARY_MAP)) {
  const normKey = key.replace(/\s+/g, " ").trim();
  NORMALIZED_DICTIONARY[normKey] = value;
}

export default function UniversalTranslator() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const isTranslatingRef = useRef(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const translateNode = (textNode: ExtendedTextNode, targetLang: "en" | "es") => {
      // Salva o texto original na primeira vez
      if (textNode.__originalText === undefined) {
        textNode.__originalText = textNode.textContent || "";
      }

      const original = textNode.__originalText;
      if (!original || !original.trim()) return;

      const trimmedOriginal = original.trim();
      const normalizedOriginal = original.replace(/\s+/g, " ").trim();

      // 1. Verificação direta no dicionário de sentenças completas
      if (NORMALIZED_DICTIONARY[normalizedOriginal]) {
        const translated = NORMALIZED_DICTIONARY[normalizedOriginal][targetLang];
        if (translated) {
          textNode.textContent = original.replace(trimmedOriginal, translated);
          textNode.__translatedLang = targetLang;
          return;
        }
      }

      if (DICTIONARY_MAP[trimmedOriginal]) {
        const translated = DICTIONARY_MAP[trimmedOriginal][targetLang];
        if (translated) {
          textNode.textContent = original.replace(trimmedOriginal, translated);
          textNode.__translatedLang = targetLang;
          return;
        }
      }

      // 2. Substituição de partes e frases contidas dentro do nó
      let modified = original;
      let hasChanges = false;

      // Percorre frases chaves com comprimento relevante
      for (const [ptPhrase, trans] of Object.entries(DICTIONARY_MAP)) {
        if (ptPhrase.length > 2 && modified.includes(ptPhrase)) {
          const replacement = trans[targetLang];
          if (replacement && replacement !== ptPhrase) {
            modified = modified.split(ptPhrase).join(replacement);
            hasChanges = true;
          }
        }
      }

      // Percorre vocabulário individual apenas se necessário
      for (const [ptWord, trans] of Object.entries(VOCABULARY_REPLACEMENTS)) {
        const regex = new RegExp(`\\b${ptWord}\\b`, "g");
        if (regex.test(modified)) {
          const replacement = trans[targetLang];
          if (replacement) {
            modified = modified.replace(regex, replacement);
            hasChanges = true;
          }
        }
      }

      if (hasChanges) {
        textNode.textContent = modified;
        textNode.__translatedLang = targetLang;
      }
    };

    const restoreNode = (textNode: ExtendedTextNode) => {
      if (textNode.__originalText !== undefined) {
        textNode.textContent = textNode.__originalText;
        textNode.__translatedLang = undefined;
      }
    };

    const processDOM = () => {
      if (isTranslatingRef.current) return;
      isTranslatingRef.current = true;

      try {
        const root = document.body;
        if (!root) return;

        const walker = document.createTreeWalker(
          root,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: (node) => {
              const parent = node.parentElement;
              if (!parent) return NodeFilter.FILTER_REJECT;

              const tag = parent.tagName.toLowerCase();
              if (
                tag === "script" ||
                tag === "style" ||
                tag === "noscript" ||
                tag === "code" ||
                tag === "pre" ||
                parent.classList.contains("notranslate")
              ) {
                return NodeFilter.FILTER_REJECT;
              }

              return NodeFilter.FILTER_ACCEPT;
            },
          }
        );

        let currentNode = walker.nextNode() as ExtendedTextNode | null;

        while (currentNode) {
          if (language === "pt-BR") {
            restoreNode(currentNode);
          } else {
            translateNode(currentNode, language);
          }
          currentNode = walker.nextNode() as ExtendedTextNode | null;
        }
      } finally {
        isTranslatingRef.current = false;
      }
    };

    // Executa imediatamente e após renderização completa do componente
    processDOM();
    const timer = setTimeout(processDOM, 80);

    // Observa mudanças dinâmicas no DOM em todo o document.body
    const targetElement = document.body;
    let observer: MutationObserver | null = null;

    if (targetElement && typeof window !== "undefined" && window.MutationObserver) {
      observer = new MutationObserver(() => {
        if (!isTranslatingRef.current) {
          processDOM();
        }
      });

      observer.observe(targetElement, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [language, pathname]);

  return null;
}
