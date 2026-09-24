"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_NAVIGATION } from "@/data/navigation";
import { ExternalLink, ShieldCheck, Award } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  onOpenCookiePreferences?: () => void;
}

export default function Footer({ onOpenCookiePreferences }: FooterProps) {
  const { t, language } = useLanguage();

  const FOOTER_LABEL_TRANSLATIONS: Record<string, { en: string; es: string }> = {
    "Sobre o Autor": { en: "About the Author", es: "Sobre el Autor" },
    "Biografia": { en: "Biography", es: "Biografía" },
    "Trajetória": { en: "Career Timeline", es: "Trayectoria" },
    "Formação Acadêmica": { en: "Academic Background", es: "Formación Académica" },
    "Currículo Lattes (CNPq)": { en: "Lattes Curriculum (CNPq)", es: "Currículum Lattes (CNPq)" },
    "Artigos Técnicos": { en: "Technical Articles", es: "Artículos Técnicos" },
    "Publicações Científicas": { en: "Scientific Publications", es: "Publicaciones Científicas" },
    "Linhas de Pesquisa": { en: "Research Tracks", es: "Líneas de Investigación" },
    "Livro Publicado": { en: "Published Book", es: "Libro Publicado" },
    "Palestras e Conferências": { en: "Keynotes & Conferences", es: "Conferencias y Charlas" },
    "Cursos de Extensão": { en: "Extension Courses", es: "Cursos de Extensión" },
    "E-books Técnicos": { en: "Technical E-books", es: "E-books Técnicos" },
    "Ferramentas e Planilhas": { en: "Tools & Spreadsheets", es: "Herramientas y Plantillas" },
    "Mentorias Especializadas": { en: "Specialized Mentoring", es: "Mentorías Especializadas" },
    "Treinamentos In-Company": { en: "In-Company Training", es: "Capacitaciones In-Company" },
    "Lista de Interesse": { en: "Waitlist", es: "Lista de Espera" },
    "Solicitar Palestra": { en: "Request Keynote", es: "Solicitar Conferencia" },
    "Projetos e Consultoria": { en: "Projects & Consulting", es: "Proyectos y Consultoría" },
    "Assessoria de Imprensa": { en: "Press & Media Relations", es: "Prensa y Medios" },
    "Canal de Contato": { en: "Contact Channel", es: "Canal de Contacto" },
  };

  const getLabel = (label: string): string => {
    if (language === "pt-BR") return label;
    const trans = FOOTER_LABEL_TRANSLATIONS[label];
    if (trans && trans[language]) return trans[language];
    return label;
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {t.footer.heading}
      </h2>

      {/* Faixa superior de síntese e autoridade */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-body text-xs uppercase tracking-[0.1em] text-sky-400 font-semibold">
                {t.footer.tagline}
              </span>
              <span className="font-heading text-xl font-[650] text-white tracking-[-0.02em] mt-1">
                {t.footer.title}
              </span>
            </div>

            <p className="font-body text-sm text-slate-400 leading-[1.65] max-w-md font-normal">
              {t.footer.summary}
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
                <span>{t.footer.lattesBadge}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <div className="font-body inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.footer.verifiedData}</span>
              </div>
            </div>
          </div>

          {/* Colunas do Menu de Rodapé */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Coluna 1: Wagner Vasconcelos */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                {t.footer.colAuthor}
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.autor.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {getLabel(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2: Conhecimento */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                {t.footer.colKnowledge}
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.conhecimento.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {getLabel(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Produtos */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                {t.footer.colProducts}
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.produtos.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {getLabel(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Profissional */}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 mb-4">
                {t.footer.colProfessional}
              </p>
              <ul className="space-y-2.5 text-sm font-body">
                {FOOTER_NAVIGATION.profissional.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {getLabel(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Faixa Inferior Legal & Regulatória */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-body">
          <p>© 2026 Wagner Eustáquio de Vasconcelos. {t.footer.rightsReserved}</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacidade" className="hover:text-slate-300 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/termos" className="hover:text-slate-300 transition-colors">
              {t.footer.terms}
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              {t.footer.cookies}
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
