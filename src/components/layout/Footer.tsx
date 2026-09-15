"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_NAVIGATION } from "@/data/navigation";
import { ExternalLink, ShieldCheck, Award } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface FooterProps {
  onOpenCookiePreferences?: () => void;
}

export default function Footer({ onOpenCookiePreferences }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé institucional
      </h2>

      {/* Faixa superior de síntese e autoridade */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-body text-xs uppercase tracking-[0.1em] text-sky-400 font-semibold">
                Plataforma de Autoridade Técnica & Científica
              </span>
              <span className="font-heading text-xl font-[650] text-white tracking-[-0.02em] mt-1">
                Prof. Dr. Wagner Eustáquio de Vasconcelos
              </span>
            </div>

            <p className="font-body text-sm text-slate-400 leading-[1.65] max-w-md font-normal">
              Engenharia, Inteligência Artificial e Sustentabilidade aplicadas a problemas reais da indústria e da pesquisa científica.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="http://lattes.cnpq.br/7844785807954101"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_lattes", { location: "footer_badge" })}
                className="font-body inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-700/80 text-xs text-sky-300 hover:text-white hover:border-sky-500 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>Base Lattes CNPq</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <div className="font-body inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dados Factuais Verificados</span>
              </div>
            </div>
          </div>

          {/* Colunas do Menu de Rodapé */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Coluna 1: Wagner Vasconcelos */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                Wagner Vasconcelos
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.autor.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2: Conhecimento */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                Conhecimento
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.conhecimento.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Produtos */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                Produtos
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.produtos.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Profissional */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                Profissional
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.profissional.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Faixa Inferior Legal & Regulatória */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-body">
          <p>© 2026 Wagner Eustáquio de Vasconcelos. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacidade" className="hover:text-slate-300 transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-slate-300 transition-colors">
              Termos de Uso
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookies
            </Link>
            {onOpenCookiePreferences ? (
              <button
                type="button"
                onClick={onOpenCookiePreferences}
                className="hover:text-sky-400 underline underline-offset-4 transition-colors cursor-pointer"
              >
                Preferências de cookies
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
                }}
                className="hover:text-sky-400 underline underline-offset-4 transition-colors cursor-pointer"
              >
                Preferências de cookies
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
