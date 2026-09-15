"use client";

import { useEffect } from "react";
import { trackEvent, AnalyticsEventName } from "@/lib/analytics";

interface ContentEngagementTrackerProps {
  eventName: AnalyticsEventName;
  params: Record<string, unknown>;
}

/**
 * Componente cliente universal para disparo de eventos de visualização de conteúdo estruturado
 * (Especialidades, Áreas de Conhecimento, Publicações Científicas, Livros e Projetos).
 */
export default function ContentEngagementTracker({
  eventName,
  params,
}: ContentEngagementTrackerProps) {
  useEffect(() => {
    trackEvent(eventName, params);
  }, [eventName, params]);

  return null;
}
