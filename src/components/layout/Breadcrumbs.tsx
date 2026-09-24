"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbsSchema } from "@/lib/schema";
import { useLanguage } from "@/context/LanguageContext";
import { DICTIONARY_MAP } from "@/lib/domTranslator";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { language } = useLanguage();
  const schema = getBreadcrumbsSchema(items);

  const translateLabel = (label: string): string => {
    if (language === "pt-BR") return label;
    const directMatch = DICTIONARY_MAP[label];
    if (directMatch && directMatch[language]) {
      return directMatch[language];
    }
    return label;
  };

  const homeLabel = language === "en" ? "Home" : language === "es" ? "Inicio" : "Início";

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-500">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">{homeLabel}</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const displayLabel = translateLabel(item.label);

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-slate-900 transition-colors"
                >
                  {displayLabel}
                </Link>
              ) : (
                <span className="font-semibold text-slate-800" aria-current="page">
                  {displayLabel}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

