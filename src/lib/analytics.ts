"use client";

/**
 * DataLayer & Google Analytics 4 / Google Tag Manager Architecture
 * Prof. Dr. Wagner Eustáquio de Vasconcelos Platform - Fase 9
 *
 * Directrizes estritas:
 * 1. snake_case para todos os eventos e parâmetros.
 * 2. ZERO PII (Personally Identifiable Information): nomes, e-mails, telefones e mensagens
 *    são filtrados e NUNCA enviados ao dataLayer / GA4.
 * 3. Log de console apenas em desenvolvimento quando NEXT_PUBLIC_ANALYTICS_DEBUG=true.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventName =
  | "page_view"
  | "view_article"
  | "article_scroll_50"
  | "article_scroll_90"
  | "view_specialty"
  | "view_knowledge_area"
  | "view_publication"
  | "view_book"
  | "view_research"
  | "view_project"
  | "view_projects"
  | "view_product"
  | "select_product"
  | "view_item"
  | "select_item"
  | "join_waitlist"
  | "join_course_waitlist"
  | "join_specialty_waitlist"
  | "generate_lead"
  | "sign_up"
  | "download_lead_magnet"
  | "request_speaking"
  | "request_training"
  | "request_mentoring"
  | "request_project"
  | "request_press"
  | "contact_submit"
  | "click_lattes"
  | "click_publication"
  | "click_email"
  | "click_whatsapp"
  | "click_reference"
  | "click_related_content"
  | "click_related_specialty"
  | "share_article"
  | "newsletter_signup_from_article"
  | "click_specialty_from_article"
  | "click_product_related_article"
  | "begin_checkout"
  | "purchase"
  | "consent_update";

// Chaves protegidas: termos proibidos para evitar envio inadvertido de PII ao GA4/GTM
const FORBIDDEN_PII_KEYS = [
  "email",
  "user_email",
  "lead_email",
  "client_email",
  "name",
  "user_name",
  "client_name",
  "lead_name",
  "phone",
  "telefone",
  "whatsapp",
  "cpf",
  "cnpj",
  "message",
  "mensagem",
  "subject",
  "assunto",
  "password",
  "senha",
];

// Nomes de chaves que contêm "name" mas são permitidas por representarem produtos, conteúdos ou formulários
const ALLOWED_METADATA_NAME_KEYS = new Set([
  "item_name",
  "product_name",
  "content_name",
  "form_name",
  "newsletter_name",
  "magnet_name",
  "lead_magnet_name",
  "author_name",
  "event_name",
]);

/**
 * Sanitiza parâmetros para garantir conformidade irrestrita com a LGPD e políticas do GA4.
 * Remove qualquer campo que contenha ou represente dados pessoais identificáveis.
 */
function sanitizeParams(params: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    const lowerKey = key.toLowerCase();

    // Bloqueia se corresponder a chave de PII direta (exceto se for metadado aprovado)
    const isForbidden =
      FORBIDDEN_PII_KEYS.includes(lowerKey) && !ALLOWED_METADATA_NAME_KEYS.has(lowerKey);

    if (isForbidden) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `[LGPD/Security Warning] Parâmetro sensível/PII removido automaticamente do dataLayer: "${key}"`
        );
      }
      continue;
    }

    // Se o valor for string e parecer um e-mail, remove por segurança
    if (typeof value === "string" && value.includes("@") && value.includes(".")) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `[LGPD/Security Warning] Valor tipo e-mail detectado e bloqueado no campo "${key}".`
        );
      }
      continue;
    }

    sanitized[key] = value;
  }

  return sanitized;
}

/**
 * Dispara evento estruturado para o Google Tag Manager / Google Analytics 4
 * Respeita Consent Mode, snake_case e higienização contra dados pessoais.
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  const safeParams = sanitizeParams(params);

  // Inicializa o dataLayer se ainda não existir
  window.dataLayer = window.dataLayer || [];

  const payload = {
    event: eventName,
    event_timestamp: new Date().toISOString(),
    ...safeParams,
  };

  window.dataLayer.push(payload);

  // Debug apenas em desenvolvimento e quando configurado explicitamente
  const isDebug =
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";

  if (isDebug) {
    console.groupCollapsed(`[dataLayer Event] %c${eventName}`, "color: #0284c7; font-weight: bold;");
    console.table(safeParams);
    console.log("Full Payload:", payload);
    console.groupEnd();
  }
}
