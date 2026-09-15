"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { submitLead } from "@/lib/leads";
import {
  Mail,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Loader2,
  MessageSquare,
  Briefcase,
  Mic,
  GraduationCap,
  Newspaper,
  Send,
  Building2,
  Users,
} from "lucide-react";

export default function ContatoHubPage() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadType, setLeadType] = useState<
    "palestra" | "treinamento" | "projeto" | "mentoria" | "imprensa" | "academico" | "geral"
  >("projeto");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-spam invisível
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@wagner-vasconcelos.eng.br";

  const contactOptions = [
    {
      title: "Palestras",
      desc: "Conferências, semanas acadêmicas e keynotes técnicas",
      href: "/contato/palestras",
      icon: Mic,
    },
    {
      title: "Treinamentos",
      desc: "Capacitação técnica in-company personalizada",
      href: "/contato/treinamentos",
      icon: Briefcase,
    },
    {
      title: "Projetos",
      desc: "AERMOD, conformidade NR-13, emissões e laudos",
      href: "/contato/projetos",
      icon: Building2,
    },
    {
      title: "Mentorias",
      desc: "Acompanhamento técnico individual e carreira",
      href: "/produtos/mentorias",
      icon: Users,
    },
    {
      title: "Acadêmico",
      desc: "Pesquisas conjuntas, artigos, bancas e publicações",
      href: "#formulario",
      icon: GraduationCap,
      action: () => setLeadType("academico"),
    },
    {
      title: "Imprensa",
      desc: "Entrevistas, pautas técnicas e media kit",
      href: "/contato/imprensa",
      icon: Newspaper,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha os campos obrigatórios marcados com asterisco (*).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: organization.trim(),
        leadType,
        interest: `${leadType.toUpperCase()} - ${subject || "Contato Geral"}`,
        message: message.trim(),
        honeypot,
        source: "contato_hub",
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar sua mensagem no momento. Tente novamente.");
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Canal de Contato" }]} />

        {/* CABEÇALHO */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            ATENDIMENTO PROFISSIONAL & INSTITUCIONAL
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Vamos conversar?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Entre em contato para palestras, treinamentos, mentorias, projetos, colaborações acadêmicas ou imprensa.
          </p>
        </div>

        {/* 6 OPÇÕES DE DIRECIONAMENTO RÁPIDO */}
        <section className="py-10 border-b border-slate-100 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              CANAIS DIRECIONADOS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              Selecione o objetivo do seu contato:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <Link
                  key={idx}
                  href={opt.href}
                  onClick={() => opt.action && opt.action()}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-sm transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-800 shadow-2xs group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950 group-hover:text-sky-900 transition-colors">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {opt.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FORMULÁRIO GERAL DE CONTATO */}
        <section id="formulario" className="py-10 space-y-6 scroll-mt-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              FORMULÁRIO DIRETO
            </span>
            <h2 className="text-2xl font-bold text-slate-950">
              Envie sua mensagem
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Preencha os dados abaixo. Sua mensagem será analisada com total confidencialidade e respondida no prazo adequado.
            </p>
          </div>

          {status === "success" ? (
            <div
              role="alert"
              aria-live="polite"
              className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-emerald-500/40 text-center space-y-3 shadow-xl max-w-2xl mx-auto"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Mensagem recebida com sucesso!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                Obrigado pelo contato. Suas informações foram registradas com segurança e retornaremos em breve para <strong>{email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl space-y-4">
              {/* Campo Honeypot invisível para bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp-field">Não preencha este campo:</label>
                <input
                  id="hp-field"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {status === "error" && errorMessage && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800"
                >
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    autoComplete="name"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  />
                </div>

                <div>
                  <label htmlFor="form-org" className="block text-xs font-semibold text-slate-700 mb-1">
                    Empresa ou Instituição
                  </label>
                  <input
                    id="form-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Ex: Universidade ou Indústria"
                    autoComplete="organization"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    E-mail Profissional *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@organizacao.com.br"
                    required
                    autoComplete="email"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefone / WhatsApp (Opcional)
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    autoComplete="tel"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-type" className="block text-xs font-semibold text-slate-700 mb-1">
                    Tipo de Contato *
                  </label>
                  <select
                    id="form-type"
                    value={leadType}
                    onChange={(e) => setLeadType(e.target.value as typeof leadType)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  >
                    <option value="palestra">Palestra / Evento</option>
                    <option value="treinamento">Treinamento In-Company</option>
                    <option value="projeto">Projeto Técnico / Consultoria</option>
                    <option value="mentoria">Mentoria Individual</option>
                    <option value="academico">Pesquisa / Acadêmico / Bancas</option>
                    <option value="imprensa">Imprensa / Entrevistas</option>
                    <option value="geral">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    Assunto Principal
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ex: Proposta para Semana de Engenharia"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-msg" className="block text-xs font-semibold text-slate-700 mb-1">
                  Mensagem *
                </label>
                <textarea
                  id="form-msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva detalhadamente sua demanda, datas previstas ou objetivos técnicos..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="text-[11px] text-slate-500">
                  Ao enviar, você concorda com nossa{" "}
                  <Link href="/privacidade" className="underline hover:text-sky-700">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando mensagem...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* CANAL DIRETO INSTITUCIONAL */}
        <section className="py-8 border-t border-slate-200">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="space-y-1">
              <span className="font-bold text-slate-900 block">Comunicação Institucional:</span>
              <p>
                E-mail direto: <strong className="text-slate-800">{contactEmail}</strong>
              </p>
            </div>

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Atendimento via WhatsApp</span>
              </a>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
