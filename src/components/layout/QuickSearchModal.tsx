"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, CornerDownLeft } from "lucide-react";
import { ARTICLES_DATA } from "@/data/articles";
import { SPECIALTIES_DATA } from "@/data/specialties";
import { AUTHORITY_AREAS } from "@/data/authorityAreas";

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  type: "article" | "specialty" | "area" | "page";
}

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickSearchModal({ isOpen, onClose }: QuickSearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setQuery("");
    }
  }

  // Foco no input ao abrir
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Tecla Escape para fechar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Catálogo unificado de busca
  const allSearchableItems: SearchResultItem[] = [
    // Páginas Chave
    {
      id: "sobre-bio",
      title: "Biografia Oficial",
      category: "Institucional",
      description: "Trajetória acadêmica, histórico de pesquisa e perfil de autoridade.",
      href: "/sobre/biografia",
      type: "page",
    },
    {
      id: "sobre-traj",
      title: "Linha do Tempo e Marcos",
      category: "Histórico",
      description: "Evolução cronológica de 1995 a 2026: UNICAP, IME, UFPE e MIT.",
      href: "/sobre/trajetoria",
      type: "page",
    },
    {
      id: "sobre-form",
      title: "Formação Acadêmica",
      category: "Titulações",
      description: "Graduação, mestrado, doutorado, pós-doutorados e formação complementar no MIT.",
      href: "/sobre/formacao",
      type: "page",
    },
    {
      id: "lattes-cnpq",
      title: "Currículo Lattes (CNPq)",
      category: "Produção Oficial",
      description: "Consulta à base oficial de produção científica homologada.",
      href: "/curriculo-lattes",
      type: "page",
    },
    {
      id: "produtos-cursos",
      title: "Cursos Técnicos de Extensão",
      category: "Formações",
      description: "Formação em IA Aplicada à Engenharia e cursos práticos.",
      href: "/produtos/cursos",
      type: "page",
    },
    {
      id: "palestras-inst",
      title: "Palestras e Treinamentos Corporativos",
      category: "Serviços",
      description: "Conferências para empresas, indústrias e eventos acadêmicos.",
      href: "/palestras",
      type: "page",
    },
    {
      id: "contato-inst",
      title: "Canal de Contato",
      category: "Atendimento",
      description: "Solicitações técnicas, consultoria, imprensa e parcerias.",
      href: "/contato",
      type: "page",
    },

    // Áreas de Conhecimento
    ...AUTHORITY_AREAS.map((area) => ({
      id: `area-${area.id}`,
      title: area.title,
      category: "Pilar de Conhecimento",
      description: area.description,
      href: area.ctaHref,
      type: "area" as const,
    })),

    // Especialidades Técnicas
    ...Object.values(SPECIALTIES_DATA).map((spec) => ({
      id: `spec-${spec.slug}`,
      title: spec.title,
      category: `Especialidade • ${spec.pillarTitle}`,
      description: spec.summary,
      href: `/especialidades/${spec.slug}`,
      type: "specialty" as const,
    })),

    // Artigos Técnicos
    ...ARTICLES_DATA.map((art) => ({
      id: `art-${art.slug}`,
      title: art.title,
      category: `Artigo • ${art.categoryLabel}`,
      description: art.excerpt,
      href: `/conhecimento/artigos/${art.slug}`,
      type: "article" as const,
    })),
  ];

  const filteredResults = query.trim()
    ? allSearchableItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : allSearchableItems.slice(0, 6);

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 sm:pt-20 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Busca Rápida na Plataforma"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de Pesquisa */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar por artigos, especialidades, AERMOD, NR-13, IA, Lattes..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono bg-slate-200 hover:bg-slate-300 text-slate-600 px-2 py-1 rounded-md transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Lista de Resultados */}
        <div className="overflow-y-auto p-3 sm:p-4 space-y-1 divide-y divide-slate-100">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
            {query.trim() ? "Resultados da Pesquisa" : "Acessos Rápidos Recomendados"}
          </p>

          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.href)}
                className="p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-colors flex items-start justify-between gap-3 group"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-950 group-hover:text-sky-800 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <div className="text-slate-300 group-hover:text-sky-700 transition-colors pt-2 shrink-0">
                  <CornerDownLeft className="w-4 h-4" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500 text-xs">
              Nenhum conteúdo encontrado para &quot;{query}&quot;. Tente buscar por termos como &quot;fuzzy&quot;, &quot;AERMOD&quot;, &quot;caldeiras&quot; ou &quot;MIT&quot;.
            </div>
          )}
        </div>

        {/* Rodapé do Modal com Atalhos */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <span>Navegue com facilidade</span>
            <span>•</span>
            <span className="font-mono">Pressione ESC para sair</span>
          </div>
          <span className="font-bold text-slate-800">Plataforma Prof. Dr. Wagner Vasconcelos</span>
        </div>
      </div>
    </div>
  );
}
