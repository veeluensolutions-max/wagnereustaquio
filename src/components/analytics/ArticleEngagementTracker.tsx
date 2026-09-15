"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

interface ArticleEngagementTrackerProps {
  articleTitle: string;
  articleCategory: string;
  articleSlug: string;
}

/**
 * Componente cliente para rastreamento de engajamento e profundidade de leitura em artigos.
 *
 * Funcionalidades:
 * 1. Dispara `view_article` no carregamento do artigo com metadados estruturados.
 * 2. Monitora a rolagem da página com throttler via requestAnimationFrame.
 * 3. Dispara `article_scroll_50` EXATAMENTE UMA VEZ ao atingir 50% de profundidade.
 * 4. Dispara `article_scroll_90` EXATAMENTE UMA VEZ ao atingir 90% de leitura completa.
 */
export default function ArticleEngagementTracker({
  articleTitle,
  articleCategory,
  articleSlug,
}: ArticleEngagementTrackerProps) {
  const hasFired50Ref = useRef(false);
  const hasFired90Ref = useRef(false);

  useEffect(() => {
    // 1. Dispara visualização do artigo no carregamento
    trackEvent("view_article", {
      article_title: articleTitle,
      article_category: articleCategory,
      article_slug: articleSlug,
      content_type: "article",
    });

    // 2. Monitor de profundidade de rolagem (Scroll Depth 50% e 90%)
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollableHeight = docHeight - windowHeight;

        if (scrollableHeight <= 0) {
          ticking = false;
          return;
        }

        const scrollPercentage = (scrollTop / scrollableHeight) * 100;

        // Dispara scroll 50%
        if (scrollPercentage >= 50 && !hasFired50Ref.current) {
          hasFired50Ref.current = true;
          trackEvent("article_scroll_50", {
            article_title: articleTitle,
            article_category: articleCategory,
            article_slug: articleSlug,
          });
        }

        // Dispara scroll 90%
        if (scrollPercentage >= 90 && !hasFired90Ref.current) {
          hasFired90Ref.current = true;
          trackEvent("article_scroll_90", {
            article_title: articleTitle,
            article_category: articleCategory,
            article_slug: articleSlug,
          });
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Executa uma checagem inicial caso a tela seja grande o suficiente
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [articleTitle, articleCategory, articleSlug]);

  return null;
}
