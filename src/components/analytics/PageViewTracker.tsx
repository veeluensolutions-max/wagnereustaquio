"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

/**
 * Componente de monitoramento de Page View para Next.js App Router.
 *
 * Características:
 * 1. Dispara evento `page_view` a cada transição de rota no cliente.
 * 2. Previne disparos duplicados utilizando referência de URL (`lastTrackedUrlRef`).
 * 3. Envia metadados canônicos: `page_location`, `page_path`, `page_title`.
 * 4. Respeita o Consent Mode v2 (se analytics_storage for denied, o GA4 coleta pings anônimos ou respeita a configuração do GTM).
 */
export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrlRef = useRef<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const queryString = searchParams?.toString();
    const currentUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Evita duplicidade em StrictMode ou re-renderizações idênticas
    if (lastTrackedUrlRef.current === currentUrl) {
      return;
    }

    lastTrackedUrlRef.current = currentUrl;

    // Aguarda microtask para garantir que document.title esteja atualizado
    const timeoutId = setTimeout(() => {
      trackEvent("page_view", {
        page_location: window.location.href,
        page_path: pathname,
        page_title: document.title || "Wagner Eustáquio de Vasconcelos",
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
}
