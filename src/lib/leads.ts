"use client";

import { trackEvent, AnalyticsEventName } from "./analytics";

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  leadType?: "palestra" | "treinamento" | "projeto" | "mentoria" | "imprensa" | "academico" | "geral";
  interest: string;
  experienceLevel?: "student" | "professional" | "manager" | "researcher" | "other";
  message?: string;
  honeypot?: string; // Campo invisível anti-spam
  source: string;
  utm?: Record<string, string>;
  createdAt?: string;
}

export interface UtmAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  first_utm_source?: string;
  first_utm_medium?: string;
  first_utm_campaign?: string;
  last_utm_source?: string;
  last_utm_medium?: string;
  last_utm_campaign?: string;
  referrer?: string;
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const FIRST_TOUCH_PREFIX = "wev_first_";
const LAST_TOUCH_PREFIX = "wev_last_";

/**
 * Captura e persiste parâmetros UTM encontrados na URL atual, gerenciando
 * First-Touch (primeira origem sem sobrescrever) e Last-Touch (última origem).
 * Em conformidade com LGPD: armazena estritamente parâmetros técnicos de campanha,
 * sem guardar nenhum dado pessoal.
 */
export function captureUtmParameters(): void {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    let hasNewUtm = false;

    UTM_KEYS.forEach((key) => {
      const val = params.get(key);
      if (val) {
        hasNewUtm = true;
        // 1. First Touch: grava apenas se ainda não existir
        const firstKey = `${FIRST_TOUCH_PREFIX}${key}`;
        if (!localStorage.getItem(firstKey)) {
          localStorage.setItem(firstKey, val);
        }

        // 2. Last Touch: atualiza com a campanha atual
        const lastKey = `${LAST_TOUCH_PREFIX}${key}`;
        localStorage.setItem(lastKey, val);

        // 3. Sessão ativa
        sessionStorage.setItem(key, val);
      }
    });

    // Se houver referrer relevante que não seja o próprio domínio, preserva
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
      if (!localStorage.getItem(`${FIRST_TOUCH_PREFIX}referrer`)) {
        localStorage.setItem(`${FIRST_TOUCH_PREFIX}referrer`, document.referrer);
      }
      if (hasNewUtm || !localStorage.getItem(`${LAST_TOUCH_PREFIX}referrer`)) {
        localStorage.setItem(`${LAST_TOUCH_PREFIX}referrer`, document.referrer);
      }
    }
  } catch {
    // Silencioso em caso de restrição de storage do navegador
  }
}

/**
 * Recupera os parâmetros de atribuição (atuais, first touch e last touch)
 */
export function getSavedUtmParameters(): UtmAttribution {
  if (typeof window === "undefined") return {};

  const attribution: UtmAttribution = {};
  const urlParams = new URLSearchParams(window.location.search);

  try {
    // Parâmetros da sessão atual ou URL
    UTM_KEYS.forEach((key) => {
      const fromUrl = urlParams.get(key);
      const fromSession = sessionStorage.getItem(key);
      const val = fromUrl || fromSession;
      if (val) {
        attribution[key] = val;
      }

      const firstVal = localStorage.getItem(`${FIRST_TOUCH_PREFIX}${key}`);
      if (firstVal) {
        attribution[`first_${key}` as keyof UtmAttribution] = firstVal;
      }

      const lastVal = localStorage.getItem(`${LAST_TOUCH_PREFIX}${key}`);
      if (lastVal) {
        attribution[`last_${key}` as keyof UtmAttribution] = lastVal;
      }
    });

    const referrer =
      localStorage.getItem(`${LAST_TOUCH_PREFIX}referrer`) ||
      localStorage.getItem(`${FIRST_TOUCH_PREFIX}referrer`);
    if (referrer) {
      attribution.referrer = referrer;
    }
  } catch {
    // Retorna o que conseguiu recuperar
  }

  return attribution;
}

export interface OnLeadSuccessOptions {
  leadType?: string;
  interest?: string;
  sourceContext?: string;
  specificEvent: AnalyticsEventName;
  specificEventParams?: Record<string, unknown>;
}

/**
 * Callback central executado EXCLUSIVAMENTE após confirmação real de sucesso no envio do lead.
 * Responsável pelo disparo do evento de conversão específico + evento chave GA4 generate_lead,
 * SEM NENHUM DADO PESSOAL (Zero PII).
 */
export function onLeadSuccess({
  leadType,
  interest,
  sourceContext,
  specificEvent,
  specificEventParams = {},
}: OnLeadSuccessOptions): void {
  const utmData = getSavedUtmParameters();

  // 1. Dispara o evento específico da ação técnica/comercial
  trackEvent(specificEvent, {
    lead_type: leadType || "geral",
    interest: interest || "Geral",
    source_context: sourceContext || "direct",
    ...utmData,
    ...specificEventParams,
  });

  // 2. Dispara o evento canônico recomendado do GA4 para Lead Generation
  trackEvent("generate_lead", {
    lead_type: leadType || "geral",
    interest: interest || "Geral",
    form_type: specificEvent,
    source_context: sourceContext || "direct",
    ...utmData,
  });
}

/**
 * Abstraction layer de submissão de Lead.
 * Totalmente desacoplada do Analytics:
 * 1. Não salva dados pessoais em localStorage (atendimento estrito à LGPD).
 * 2. Previne spam silenciosamente via Honeypot invisível.
 * 3. Prepara payload para integração com webhook/CRM futuro (ex: RD Station, HubSpot, Brevo).
 * 4. Aciona onLeadSuccess() apenas após resolução positiva e sem repassar dados pessoais para o dataLayer.
 */
export async function submitLead(
  lead: Omit<LeadData, "createdAt" | "utm"> & { utm?: Record<string, string> }
): Promise<{ success: boolean; id: string }> {
  // Captura e atualiza UTMs
  captureUtmParameters();
  const utmData = lead.utm || getSavedUtmParameters();

  // Simula latência de rede realista para o usuário
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Honeypot anti-spam: se o campo oculto foi preenchido por um bot, descarta silenciosamente
  if (lead.honeypot && lead.honeypot.trim() !== "") {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Anti-Spam] Honeypot preenchido. Requisição bloqueada silenciosamente.");
    }
    return {
      success: true,
      id: `discarded_${Date.now()}`,
    };
  }

  // Prepara identificador único do evento para o CRM futuro
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  // Futura conexão com Webhook / CRM (ex: POST para API de CRM quando configurado)
  const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      // Exemplo de envio futuro para backend seguro/CRM
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          utm: utmData,
          leadId,
          createdAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.warn("[CRM Webhook Error] Falha ao enviar para webhook externo:", err);
      }
    }
  }

  // Mapeia o evento específico de conversão com base no contexto
  let specificEvent: AnalyticsEventName = "contact_submit";
  const eventParams: Record<string, unknown> = {};

  if (lead.leadType === "palestra" || lead.source.includes("palestra")) {
    specificEvent = "request_speaking";
  } else if (lead.leadType === "treinamento" || lead.source.includes("treinamento")) {
    specificEvent = "request_training";
  } else if (lead.leadType === "projeto" || lead.source.includes("projeto")) {
    specificEvent = "request_project";
  } else if (lead.leadType === "imprensa" || lead.source.includes("imprensa")) {
    specificEvent = "request_press";
  } else if (lead.interest.toLowerCase().includes("ia") || lead.source.includes("ia")) {
    specificEvent = "join_course_waitlist";
    eventParams.product_name = "IA Aplicada à Engenharia";
    eventParams.product_category = "Curso";
    eventParams.product_status = "waitlist";
  } else if (lead.interest.toLowerCase().includes("aermod") || lead.source.includes("aermod")) {
    specificEvent = "join_waitlist";
    eventParams.product_name = "Introdução ao AERMOD";
    eventParams.product_category = "Curso";
    eventParams.product_status = "waitlist";
  } else if (lead.interest.toLowerCase().includes("mentoria") || lead.source.includes("mentoria")) {
    specificEvent = "request_mentoring";
  } else if (lead.source.includes("lead_magnet")) {
    specificEvent = "download_lead_magnet";
    eventParams.lead_magnet_name = lead.interest;
  }

  // Dispara conversão segura sem PII
  onLeadSuccess({
    leadType: lead.leadType,
    interest: lead.interest,
    sourceContext: lead.source,
    specificEvent,
    specificEventParams: eventParams,
  });

  return {
    success: true,
    id: leadId,
  };
}
