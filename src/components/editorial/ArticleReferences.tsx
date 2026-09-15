"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ArticleReferencesProps {
  references: string[];
}

export default function ArticleReferences({ references }: ArticleReferencesProps) {
  if (!references || references.length === 0) return null;

  const handleClickReference = (ref: string) => {
    trackEvent("click_reference", {
      reference_preview: ref.substring(0, 80),
    });
  };

  return (
    <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200/60">
        <BookOpen className="w-4 h-4 text-sky-800" />
        <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
          Referências Bibliográficas & Normativas (ABNT)
        </h3>
      </div>

      <ul className="space-y-3">
        {references.map((ref, idx) => (
          <li
            key={idx}
            onClick={() => handleClickReference(ref)}
            className="font-body text-xs text-slate-600 leading-relaxed pl-4 border-l-2 border-sky-400/60 hover:text-slate-900 transition-colors cursor-pointer"
          >
            {ref}
          </li>
        ))}
      </ul>
    </section>
  );
}
