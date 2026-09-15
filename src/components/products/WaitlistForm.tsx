"use client";

import React, { useState } from "react";
import { submitLead, LeadData } from "@/lib/leads";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface WaitlistFormProps {
  productTitle: string;
  defaultInterest?: string;
  sourceContext?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function WaitlistForm({
  productTitle,
  defaultInterest = "IA",
  sourceContext = "product_waitlist",
  compact = false,
}: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [experienceLevel, setExperienceLevel] = useState<LeadData["experienceLevel"]>("professional");
  const [interest, setInterest] = useState(defaultInterest);
  const [lgpdConsent, setLgpdConsent] = useState(true);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    if (!lgpdConsent) {
      setStatus("error");
      setErrorMessage("É necessário concordar com a comunicação técnica para prosseguir.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: name.trim() || "Interessado",
        email: email.trim(),
        interest: `${productTitle} - ${interest} (${area || "Geral"})`,
        experienceLevel,
        source: sourceContext,
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível registrar seu interesse no momento. Tente novamente.");
    }
  };

  if (status === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-emerald-500/30 text-center space-y-3"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-white">
          Inscrição confirmada com sucesso!
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Obrigado pelo interesse em <strong>{productTitle}</strong>. Você receberá um e-mail em{" "}
          <strong>{email}</strong> assim que houver novidades sobre o lançamento da turma ou disponibilidade do material.
        </p>
        <p className="text-[11px] text-slate-400 pt-2">
          Nenhum spam será enviado. Suas informações são protegidas e utilizadas exclusivamente para comunicações técnicas.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl ${compact ? "p-4 sm:p-5 bg-slate-50 border border-slate-200" : "p-6 sm:p-8 bg-slate-900 text-white border border-slate-800"}`}>
      <div className="mb-5 space-y-1">
        <h3 className={`text-base sm:text-lg font-bold ${compact ? "text-slate-900" : "text-white"}`}>
          Entrar na Lista de Interesse Prioritária
        </h3>
        <p className={`text-xs ${compact ? "text-slate-600" : "text-slate-300"} leading-relaxed`}>
          Seja avisado em primeira mão quando as inscrições ou materiais de <strong>{productTitle}</strong> forem disponibilizados.
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300"
        >
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="waitlist-name" className={`block text-xs font-semibold mb-1 ${compact ? "text-slate-700" : "text-slate-300"}`}>
              Nome Completo
            </label>
            <input
              id="waitlist-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                compact
                  ? "bg-white border border-slate-300 text-slate-900 placeholder-slate-400"
                  : "bg-slate-950 border border-slate-700 text-white placeholder-slate-500"
              }`}
            />
          </div>

          <div>
            <label htmlFor="waitlist-email" className={`block text-xs font-semibold mb-1 ${compact ? "text-slate-700" : "text-slate-300"}`}>
              E-mail Profissional <span className="text-amber-500">*</span>
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@empresa.com.br"
              required
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                compact
                  ? "bg-white border border-slate-300 text-slate-900 placeholder-slate-400"
                  : "bg-slate-950 border border-slate-700 text-white placeholder-slate-500"
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label htmlFor="waitlist-area" className={`block text-xs font-semibold mb-1 ${compact ? "text-slate-700" : "text-slate-300"}`}>
              Área de Atuação
            </label>
            <input
              id="waitlist-area"
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Ex: Engenharia Química"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                compact
                  ? "bg-white border border-slate-300 text-slate-900 placeholder-slate-400"
                  : "bg-slate-950 border border-slate-700 text-white placeholder-slate-500"
              }`}
            />
          </div>

          <div>
            <label htmlFor="waitlist-level" className={`block text-xs font-semibold mb-1 ${compact ? "text-slate-700" : "text-slate-300"}`}>
              Nível de Experiência
            </label>
            <select
              id="waitlist-level"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value as LeadData["experienceLevel"])}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                compact
                  ? "bg-white border border-slate-300 text-slate-900"
                  : "bg-slate-950 border border-slate-700 text-white"
              }`}
            >
              <option value="student">Estudante (Graduação / Pós)</option>
              <option value="professional">Profissional Técnico / Engenheiro</option>
              <option value="manager">Gestor / Coordenador</option>
              <option value="researcher">Pesquisador / Docente</option>
              <option value="other">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="waitlist-interest" className={`block text-xs font-semibold mb-1 ${compact ? "text-slate-700" : "text-slate-300"}`}>
              Interesse Principal
            </label>
            <select
              id="waitlist-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                compact
                  ? "bg-white border border-slate-300 text-slate-900"
                  : "bg-slate-950 border border-slate-700 text-white"
              }`}
            >
              <option value="IA">Inteligência Artificial na Engenharia</option>
              <option value="Lógica Fuzzy">Lógica Fuzzy & Decisão</option>
              <option value="Redes Neurais">Redes Neurais & Predição</option>
              <option value="Python">Scripts & Aplicação em Python</option>
              <option value="Tomada de Decisão">Tomada de Decisão Multicritério</option>
              <option value="Modelagem">Modelagem & AERMOD</option>
              <option value="Segurança / NR-13">Segurança de Processos & NR-13</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        {/* Checkbox LGPD */}
        <div className="flex items-start gap-2 pt-1">
          <input
            id="waitlist-lgpd"
            type="checkbox"
            checked={lgpdConsent}
            onChange={(e) => setLgpdConsent(e.target.checked)}
            className="mt-0.5 rounded border-slate-600 text-sky-600 focus:ring-sky-500 w-4 h-4 cursor-pointer"
          />
          <label htmlFor="waitlist-lgpd" className={`text-[11px] leading-relaxed cursor-pointer ${compact ? "text-slate-600" : "text-slate-400"}`}>
            Concordo em receber comunicações técnicas e avisos sobre o lançamento deste produto conforme a{" "}
            <Link href="/privacidade" className="underline hover:text-sky-400">
              Política de Privacidade
            </Link>
            .
          </label>
        </div>

        {/* Botão de Envio (>= 44px de altura touch) */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full min-h-[44px] py-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Registrando seu interesse...</span>
            </>
          ) : (
            <>
              <span>Entrar na Lista de Interesse</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
