"use client";

import React, { useState } from "react";
import Link from "next/link";
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
        interest: `Treinamento In-Company: ${chosenTheme} (Equipe: ${teamSize})`,
        message: details,
        source: "treinamentos_page",
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar a solicitação. Tente novamente ou entre em contato direto.");
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Treinamentos Corporativos" },
          ]}
        />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            SOLUÇÕES IN-COMPANY & PALESTRAS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Conhecimento técnico para equipes que precisam tomar melhores decisões.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Programas sob medida conduzidos pelo Prof. Dr. Wagner Eustáquio de Vasconcelos para capacitar quadros técnicos em indústrias de processos, energia, consultorias e órgãos de engenharia.
          </p>
        </div>

        {/* Matriz de Temas Corporativos */}
        <section className="py-10 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              MATRIZ TEMÁTICA
            </span>
            <h2 className="text-2xl font-bold text-slate-950">
              Temas de Treinamentos e Imersões
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, idx) => {
              const Icon = theme.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-sm transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {theme.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {theme.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setChosenTheme(theme.title);
                      const el = document.getElementById("proposal-form");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 cursor-pointer pt-2"
                  >
                    <span>Selecionar tema</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Formulário de Proposta Comercial */}
        <section id="proposal-form" className="my-10 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800">
          <div className="max-w-2xl space-y-3 mb-6">
            <span className="text-xs font-mono uppercase text-sky-400">PROPOSTA PERSONALIZADA</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Solicitar Proposta de Treinamento
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Descreva os objetivos da sua equipe e receba uma ementa técnica detalhada com metodologia, cronograma e formato (presencial ou online).
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-slate-900 border border-emerald-500/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Solicitação enviada com sucesso!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Agradecemos o contato. Nossa equipe entrará em contato com você em <strong>{email}</strong> para apresentar a proposta técnica sob medida.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && errorMessage && (
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Andrade"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nome da Empresa / Indústria *
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: Petroquímica S.A."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="carlos@empresa.com.br"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Telefone / WhatsApp para contato
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tema Principal Desejado
                  </label>
                  <select
                    value={chosenTheme}
                    onChange={(e) => setChosenTheme(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    {themes.map((t, idx) => (
                      <option key={idx} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tamanho Estimado da Equipe
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    <option value="até 10 pessoas">Até 10 profissionais</option>
                    <option value="10-30">10 a 30 profissionais</option>
                    <option value="30-50">30 a 50 profissionais</option>
                    <option value="mais de 50">Mais de 50 profissionais (Palestra Corporativa)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Breve descrição da necessidade ou gargalo técnico da planta
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Quais são os principais desafios da equipe e formato de preferência (presencial ou online)?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto min-h-[44px] px-8 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando solicitação...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar proposta de treinamento</span>
                    <Send className="w-4 h-4" />
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
