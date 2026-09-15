"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/specialties";

interface SpecialtyFAQProps {
  items: FAQItem[];
  specialtyTitle: string;
}

export default function SpecialtyFAQ({ items, specialtyTitle }: SpecialtyFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Schema JSON-LD FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="my-10 pt-8 border-t border-slate-200/80">
      {/* Injeção de Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-body font-semibold uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5 text-sky-700" />
          <span>ESCLARECIMENTOS TÉCNICOS</span>
        </div>
        <h3 className="font-heading font-[650] text-xl sm:text-2xl text-slate-950 tracking-[-0.025em]">
          Perguntas Frequentes sobre {specialtyTitle}
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-2xs hover:border-slate-300"
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
              >
                <span className="font-heading font-semibold text-sm sm:text-base text-slate-900 tracking-[-0.01em]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-sky-700" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-body text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
