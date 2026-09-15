"use client";

import React from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Cookie, Settings } from "lucide-react";

export default function CookiesPage() {
  const handleOpenPreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Política de Cookies" }]} />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Cookie className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA E CONSENTIMENTO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Política de Cookies
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: Março de 2026
          </p>
        </div>

        {/* Conteúdo Explicativo */}
        <div className="py-10 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita nossa plataforma. Eles desempenham funções fundamentais para o correto funcionamento técnico do site, lembrança de preferências de navegação e análise anônima de audiência.
            </p>
          </section>

          {/* Painel de Ação Rápida */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <Settings className="w-4 h-4 text-sky-700" />
                <span>Gerenciar suas Preferências de Cookies</span>
              </h3>
              <p className="text-xs text-slate-600">
                Você pode revisar, aceitar ou revogar cookies opcionais a qualquer momento.
              </p>
            </div>

            <button
              type="button"
              onClick={handleOpenPreferences}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-950 text-white font-bold text-xs shrink-0 cursor-pointer transition-colors shadow-sm"
            >
              Configurar Cookies
            </button>
          </div>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-950">2. Categorias de Cookies que Utilizamos</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-slate-950 text-sm mb-1 flex items-center justify-between">
                  <span>Cookies Estritamente Necessários</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Sempre Ativos</span>
                </h4>
                <p className="text-xs text-slate-600">
                  Fundamentais para garantir a segurança da navegação, balanceamento de carga, acessibilidade e prevenção contra requisições maliciosas. Não armazenam informações pessoalmente identificáveis.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-slate-950 text-sm mb-1 flex items-center justify-between">
                  <span>Cookies de Analytics & Desempenho (Google Analytics / GTM)</span>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">Opcional</span>
                </h4>
                <p className="text-xs text-slate-600">
                  Coletam métricas anônimas e agregadas de navegação (páginas mais lidas, tempo médio de leitura e taxa de rejeição) para nos orientar sobre quais temas técnicos de engenharia demandam novos artigos. Respeitam integralmente o Google Consent Mode v2.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-slate-950 text-sm mb-1 flex items-center justify-between">
                  <span>Cookies de Comunicação e Marketing</span>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">Opcional</span>
                </h4>
                <p className="text-xs text-slate-600">
                  Permitem notificar profissionais cadastrados em listas de interesse sobre o lançamento de novas turmas de cursos e e-books especializados.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">3. Como Desativar Cookies no Navegador</h2>
            <p>
              Além de nosso painel de preferências, você pode configurar diretamente seu navegador (Chrome, Firefox, Safari ou Edge) para recusar o armazenamento de cookies ou alertá-lo quando um cookie estiver sendo enviado.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
