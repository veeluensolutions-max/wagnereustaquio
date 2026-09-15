"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, Quote, Send } from "lucide-react";

interface ArticleActionsProps {
  title: string;
  url: string;
  authorName: string;
  publishedYear: string;
}

export default function ArticleActions({
  title,
  url,
  authorName,
  publishedYear,
}: ArticleActionsProps) {
  const [copiedType, setCopiedType] = useState<"link" | "abnt" | "bibtex" | null>(null);
  const [showCitationModal, setShowCitationModal] = useState(false);

  // Formato ABNT oficial
  const abntCitation = `VASCONCELOS, Wagner Eustáquio de. ${title}. Plataforma Oficial do Prof. Dr. Wagner Eustáquio de Vasconcelos, ${publishedYear}. Disponível em: <${url}>. Acesso em: ${new Date().toLocaleDateString("pt-BR")}.`;

  // Formato BibTeX oficial
  const bibtexCitation = `@misc{vasconcelos${publishedYear},
  author = {Vasconcelos, Wagner Eust\\'aqui de},
  title = {${title}},
  year = {${publishedYear}},
  url = {${url}},
  note = {Acesso em: ${new Date().toLocaleDateString("pt-BR")}}
}`;

  const copyToClipboard = (text: string, type: "link" | "abnt" | "bibtex") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnWhatsApp = () => {
    const text = `${title}\n\nLeia este artigo técnico do Prof. Dr. Wagner Eustáquio de Vasconcelos:\n${url}`;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 text-xs">
      {/* Botão de Citação Acadêmica */}
      <div className="relative">
        <button
          onClick={() => setShowCitationModal(!showCitationModal)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors border border-slate-200"
        >
          <Quote className="w-3.5 h-3.5 text-sky-700" />
          <span>Como Citar (ABNT / BibTeX)</span>
        </button>

        {showCitationModal && (
          <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl z-30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Citação do Trabalho
              </span>
              <button
                onClick={() => setShowCitationModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* ABNT */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-700">Formato ABNT</span>
                <button
                  onClick={() => copyToClipboard(abntCitation, "abnt")}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 hover:text-sky-900"
                >
                  {copiedType === "abnt" ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-600 font-mono bg-slate-50 p-2 rounded-lg border border-slate-200 leading-relaxed break-words">
                {abntCitation}
              </p>
            </div>

            {/* BibTeX */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-700">Formato BibTeX</span>
                <button
                  onClick={() => copyToClipboard(bibtexCitation, "bibtex")}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 hover:text-sky-900"
                >
                  {copiedType === "bibtex" ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-[10px] text-slate-600 font-mono bg-slate-50 p-2 rounded-lg border border-slate-200 overflow-x-auto leading-tight">
                {bibtexCitation}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Botões de Compartilhamento Social */}
      <div className="flex items-center gap-1.5">
        <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">Compartilhar:</span>
        <button
          onClick={shareOnLinkedIn}
          className="p-1.5 rounded-lg text-slate-600 hover:text-sky-700 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
          title="Compartilhar no LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </button>
        <button
          onClick={shareOnWhatsApp}
          className="p-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
          title="Compartilhar no WhatsApp"
        >
          <Send className="w-4 h-4" />
        </button>
        <button
          onClick={() => copyToClipboard(url, "link")}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
          title="Copiar link permanente"
        >
          {copiedType === "link" ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-semibold">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
