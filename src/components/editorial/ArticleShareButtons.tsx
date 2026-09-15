"use client";

import React, { useState } from "react";
import { Share2, Link2, MessageCircle, Mail, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ArticleShareButtonsProps {
  title: string;
  url: string;
}

export default function ArticleShareButtons({ title, url }: ArticleShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== "undefined" ? window.location.href : url;

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title,
          text: `Leia este artigo técnico: ${title}`,
          url: fullUrl,
        });
        trackEvent("share_article", { method: "native", content_title: title });
      } catch {
        // Ignorar se o usuário cancelou
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    trackEvent("share_article", { method: "copy_link", content_title: title });
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
    trackEvent("share_article", { method: "linkedin", content_title: title });
  };

  const shareWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${fullUrl}`)}`,
      "_blank",
      "noopener,noreferrer"
    );
    trackEvent("share_article", { method: "whatsapp", content_title: title });
  };

  const shareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Recomendo a leitura deste artigo técnico:\n\n${title}\n${fullUrl}`)}`;
    trackEvent("share_article", { method: "email", content_title: title });
  };

  return (
    <div className="py-6 border-y border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
      <span className="font-body text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Compartilhar este conteúdo:
      </span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={copyLink}
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-body font-medium cursor-pointer min-h-[44px]"
          title="Copiar Link"
          aria-label="Copiar Link"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Link2 className="w-4 h-4" />}
          <span className="hidden sm:inline">{copied ? "Copiado!" : "Copiar"}</span>
        </button>

        <button
          type="button"
          onClick={shareLinkedIn}
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
          title="Compartilhar no LinkedIn"
          aria-label="Compartilhar no LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={shareWhatsApp}
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 transition-colors cursor-pointer min-h-[44px]"
          title="Compartilhar no WhatsApp"
          aria-label="Compartilhar no WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={shareEmail}
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer min-h-[44px]"
          title="Compartilhar por E-mail"
          aria-label="Compartilhar por E-mail"
        >
          <Mail className="w-4 h-4" />
        </button>

        {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="p-2.5 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100 transition-colors flex items-center gap-1 text-xs font-body font-semibold cursor-pointer min-h-[44px]"
            title="Compartilhar no dispositivo"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>
        )}
      </div>
    </div>
  );
}
