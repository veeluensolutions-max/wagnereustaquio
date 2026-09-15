"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { submitLead } from "@/lib/leads";
import { CheckCircle2, ArrowRight, Loader2, Send } from "lucide-react";

function ContatoTreinamentosForm() {
  const searchParams = useSearchParams();
  const temaParam = searchParams.get("tema") || "";

  const [company, setCompany] = useState("");
  const [responsible, setResponsible] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [participants, setParticipants] = useState("10 a 25 profissionais");
  const [theme, setTheme] = useState(temaParam || "IA aplicada à Engenharia");
  const [prevTemaParam, setPrevTemaParam] = useState(temaParam);
  const [objective, setObjective] = useState("");
  const [modality, setModality] = useState<"Presencial" | "Online" | "A definir">("Presencial");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (temaParam !== prevTemaParam) {
    setPrevTemaParam(temaParam);
    setTheme(temaParam || "IA aplicada à Engenharia");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!company.trim() || !responsible.trim() || !email.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, informe a empresa, o nome do responsável e o e-mail.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: responsible.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: company.trim(),
        leadType: "treinamento",
        interest: `Treinamento In-Company: ${theme} (Participantes: ${participants}, Modalidade: ${modality})`,
        message: objective.trim(),
        honeypot,
        source: "contato_treinamentos",
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar a proposta. Tente novamente.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-emerald-500/40 text-center space-y-3 max-w-xl mx-auto shadow-xl">
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
        <h2 className="text-xl font-bold text-white">Solicitação de treinamento enviada!</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Agradecemos pelo contato de <strong>{company}</strong>. Elaboraremos a ementa técnica e a proposta personalizada para retorno em <strong>{email}</strong>.
        </p>
        <div className="pt-3">
          <Link
            href="/treinamentos"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
          >
            <span>Voltar para Treinamentos Técnicos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Empresa ou Organização *
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Ex: Petroquímica / Mineração S.A."
            required
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Responsável pelo Contato *
          </label>
          <input
            type="text"
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
            placeholder="Ex: Eng. André Oliveira"
            required
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            E-mail Corporativo *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="andre.oliveira@empresa.com.br"
            required
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Telefone / WhatsApp para Alinhamento
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Número de Participantes
          </label>
          <select
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          >
            <option value="Até 10 profissionais">Até 10 profissionais</option>
            <option value="10 a 25 profissionais">10 a 25 profissionais</option>
            <option value="25 a 50 profissionais">25 a 50 profissionais</option>
            <option value="Mais de 50 profissionais">Mais de 50 profissionais</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Tema Principal
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          >
            <option value="IA aplicada à Engenharia">IA aplicada à Engenharia</option>
            <option value="Segurança de Processos">Segurança de Processos (PSM)</option>
            <option value="NR-13 e Integridade Mecânica">NR-13 e Integridade Mecânica</option>
            <option value="Emissões Atmosféricas">Emissões Atmosféricas</option>
            <option value="Modelagem de Dispersão">Modelagem de Dispersão</option>
            <option value="AERMOD na Prática">AERMOD na Prática</option>
            <option value="Sustentabilidade Industrial">Sustentabilidade Industrial</option>
            <option value="Tomada de Decisão Multicritério">Tomada de Decisão Multicritério</option>
            <option value="Programa Customizado">Programa Customizado Multidisciplinar</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Modalidade Pretendida
          </label>
          <select
            value={modality}
            onChange={(e) => setModality(e.target.value as typeof modality)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          >
            <option value="Presencial">Presencial (In-Company)</option>
            <option value="Online">Online ao Vivo (Remoto)</option>
            <option value="A definir">A definir / Modelo Híbrido</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Objetivo do Treinamento ou Desafio Operacional
        </label>
        <textarea
          rows={3}
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          placeholder="Quais são as principais carências ou metas técnicas que sua equipe busca atingir?"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Enviando solicitação...</span>
            </>
          ) : (
            <>
              <span>Solicitar Proposta de Treinamento</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContatoTreinamentosPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Contato", href: "/contato" },
            { label: "Solicitar Treinamento In-Company" },
          ]}
        />

        <div className="py-8 border-b border-slate-200 space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            CAPACITAÇÃO CORPORATIVA
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Proposta de Treinamento In-Company
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Estruture uma imersão técnica sob medida para a realidade dos processos e metas da sua indústria.
          </p>
        </div>

        <Suspense fallback={<div className="py-12 text-center text-xs text-slate-400">Carregando formulário...</div>}>
          <ContatoTreinamentosForm />
        </Suspense>
      </div>
    </div>
  );
}
