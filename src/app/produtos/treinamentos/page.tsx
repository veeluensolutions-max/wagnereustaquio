"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductInstructor from "@/components/products/ProductInstructor";
import { submitLead } from "@/lib/leads";
import {
  Briefcase,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Wind,
  Leaf,
  Layers,
  Lightbulb,
  ArrowRight,
  Loader2,
  Send,
} from "lucide-react";

export default function TreinamentosPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamSize, setTeamSize] = useState("10-30");
  const [chosenTheme, setChosenTheme] = useState("IA aplicada à Engenharia");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const themes = [
    {
      title: "IA aplicada à Engenharia",
      desc: "Modelagem matemática, redes neurais e lógica fuzzy para controle e otimização industrial.",
      icon: Cpu,
    },
    {
      title: "Segurança de Processos (PSM & NR-13)",
      desc: "Gestão de riscos industriais, integridade mecânica de vasos e caldeiras e metodologia HAZOP.",
      icon: ShieldCheck,
    },
    {
      title: "Emissões Atmosféricas & AERMOD",
      desc: "Inventários de fontes de poluição, dispersão atmosférica e conformidade com normas CONAMA.",
      icon: Wind,
    },
    {
      title: "Sustentabilidade & Ecoeficiência",
      desc: "Indicadores ambientais quantitativos, transição energética e mitigação de impactos.",
      icon: Leaf,
    },
    {
      title: "Tomada de Decisão Multicritério",
      desc: "Métodos analíticos sob incerteza para priorização de investimentos e confiabilidade operacional.",
      icon: Layers,
    },
    {
      title: "Engenharia e Inovação Tecnológica",
      desc: "Transformação de dados industriais em vantagem competitiva e soluções de alto valor.",
      icon: Lightbulb,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !company.trim() || !email.trim() || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Por favor, preencha os campos obrigatórios com informações válidas.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: `${name} (${company})`,
        email,
        phone,
        leadType: "treinamento",
        interest: `Treinamento In-Company: ${chosenTheme} (Equipe: ${teamSize})`,
        message: details || "Não informados",
        source: "produtos_treinamentos_page",
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar a solicitação. Tente novamente ou entre em contato direto.");
    }
  };

  return (
    <div className="py-12 bg-gradient-to-b from-white via-slate-50/40 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Treinamentos Corporativos" },
          ]}
        />

        {/* Cabeçalho */}
        <div className="py-8 sm:py-10 border-b border-slate-200/80 space-y-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800 shadow-2xs mb-2">
              <Briefcase className="w-3.5 h-3.5 text-sky-600" />
              <span>SOLUÇÕES IN-COMPANY & PALESTRAS TÉCNICAS</span>
            </div>
          </div>
          <h1 className="hero-h1-token text-slate-950 max-w-4xl">
            Conhecimento técnico para equipes que precisam tomar melhores decisões.
          </h1>
          <p className="body-text-token text-slate-600 leading-relaxed max-w-3xl">
            Programas sob medida conduzidos pelo Prof. Dr. Wagner Eustáquio de Vasconcelos para capacitar quadros técnicos em indústrias de processos, energia, consultorias e órgãos de engenharia.
          </p>
        </div>

        {/* Matriz de Temas Corporativos */}
        <section className="py-12 space-y-8">
          <div className="space-y-2">
            <span className="eyebrow-token text-sky-700 text-xs block">
              MATRIZ TEMÁTICA
            </span>
            <h2 className="section-h2-token text-2xl sm:text-3xl text-slate-950">
              Temas de Treinamentos e Imersões Industriais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {themes.map((theme, idx) => {
              const Icon = theme.icon;
              return (
                <div
                  key={idx}
                  className="card-elevation-hover relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300/80 shadow-[0_4px_24px_rgba(15,23,42,0.03)] flex flex-col justify-between group"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-50 to-slate-100/80 border border-slate-200/90 flex items-center justify-center text-sky-800 shadow-2xs group-hover:from-sky-600 group-hover:to-slate-950 group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="card-title-token text-base sm:text-lg text-slate-950 group-hover:text-sky-950 transition-colors">
                      {theme.title}
                    </h3>
                    <p className="font-body text-xs text-slate-600 leading-relaxed">
                      {theme.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setChosenTheme(theme.title);
                      const el = document.getElementById("proposal-form");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="pt-4 border-t border-slate-100 text-xs font-heading font-semibold text-sky-700 group-hover:text-sky-900 inline-flex items-center gap-1.5 cursor-pointer mt-4 transition-colors"
                  >
                    <span>Selecionar este tema</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Formulário de Proposta Comercial */}
        <section id="proposal-form" className="my-10 sm:my-14 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#061224] via-[#091830] to-[#040c1a] text-white border border-sky-500/25 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

          <div className="max-w-2xl space-y-3 mb-8 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">PROPOSTA PERSONALIZADA</span>
            <h2 className="font-heading font-[650] text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Solicitar Proposta de Treinamento
            </h2>
            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
              Descreva os objetivos da sua equipe e receba uma ementa técnica detalhada com metodologia, cronograma e formato (presencial ou online).
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white">Solicitação enviada com sucesso!</h3>
              <p className="font-body text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Agradecemos o contato. Nossa equipe entrará em contato com você em <strong>{email}</strong> para apresentar a proposta técnica sob medida.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {status === "error" && errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-xs text-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Andrade"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                    Nome da Empresa / Indústria *
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: Petroquímica S.A."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="carlos@empresa.com.br"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                    Telefone / WhatsApp para contato
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                    Tema Principal Desejado
                  </label>
                  <select
                    value={chosenTheme}
                    onChange={(e) => setChosenTheme(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all"
                  >
                    {themes.map((t, idx) => (
                      <option key={idx} value={t.title} className="bg-slate-900 text-white">
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                    Tamanho Estimado da Equipe
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all"
                  >
                    <option value="até 10 pessoas" className="bg-slate-900 text-white">Até 10 profissionais</option>
                    <option value="10-30" className="bg-slate-900 text-white">10 a 30 profissionais</option>
                    <option value="30-50" className="bg-slate-900 text-white">30 a 50 profissionais</option>
                    <option value="mais de 50" className="bg-slate-900 text-white">Mais de 50 profissionais (Palestra Corporativa)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                  Breve descrição da necessidade ou gargalo técnico da planta
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Quais são os principais desafios da equipe e formato de preferência (presencial ou online)?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-sky-500/20 disabled:opacity-70 group"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando solicitação...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar proposta técnica de treinamento</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* Instrutor */}
        <section className="my-10">
          <ProductInstructor />
        </section>

      </div>
    </div>
  );
}
