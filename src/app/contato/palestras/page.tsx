"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { submitLead } from "@/lib/leads";
import { CheckCircle2, ArrowRight, Loader2, Send } from "lucide-react";

function ContatoPalestrasForm() {
  const searchParams = useSearchParams();
  const temaParam = searchParams.get("tema") || "";

  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("");
  const [city, setCity] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [estimatedAudience, setEstimatedAudience] = useState("");
  const [theme, setTheme] = useState(temaParam || "IA Aplicada à Engenharia");
  const [prevTemaParam, setPrevTemaParam] = useState(temaParam);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (temaParam !== prevTemaParam) {
    setPrevTemaParam(temaParam);
    setTheme(temaParam || "IA Aplicada à Engenharia");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !eventName.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha seu nome, e-mail e o nome do evento.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: name.trim(),
        email: email.trim(),
        organization: institution.trim(),
        leadType: "palestra",
        interest: `Palestra: ${theme} (Evento: ${eventName}, Cidade: ${city || "N/I"}, Data: ${expectedDate || "N/I"}, Público: ${estimatedAudience || "N/I"})`,
        message: message.trim(),
        honeypot,
        source: "contato_palestras",
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar a solicitação. Tente novamente.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-emerald-500/40 text-center space-y-3 max-w-xl mx-auto shadow-xl">
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
        <h2 className="text-xl font-bold text-white">Solicitação de palestra enviada!</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Agradecemos pelo convite. Avaliaremos a disponibilidade de agenda do Prof. Wagner para o evento <strong>{eventName}</strong> e retornaremos em <strong>{email}</strong>.
        </p>
        <div className="pt-3">
          <Link
            href="/palestras"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
          >
            <span>Voltar para a página de Palestras</span>
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
            Seu Nome Completo *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Profa. Mariana Silva"
            required
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Instituição / Organização
          </label>
          <input
            type="text"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            placeholder="Ex: Universidade / Associação"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            E-mail para Contato *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mariana@universidade.edu.br"
            required
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Nome do Evento *
          </label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Ex: XXI Semana de Engenharia Química"
            required
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Cidade / Estado
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ex: Recife - PE ou Online"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Data Prevista
          </label>
          <input
            type="text"
            value={expectedDate}
            onChange={(e) => setExpectedDate(e.target.value)}
            placeholder="Ex: Novembro / 2026"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Público Estimado
          </label>
          <input
            type="text"
            value={estimatedAudience}
            onChange={(e) => setEstimatedAudience(e.target.value)}
            placeholder="Ex: ~150 pessoas"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Tema de Interesse
        </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
        >
          <option value="IA Aplicada à Engenharia">IA Aplicada à Engenharia</option>
          <option value="Engenharia e Tomada de Decisão">Engenharia e Tomada de Decisão sob Incerteza</option>
          <option value="Segurança de Processos">Segurança de Processos e Integridade Operacional</option>
          <option value="Emissões Atmosféricas">Emissões Atmosféricas e Qualidade do Ar</option>
          <option value="Sustentabilidade Industrial">Sustentabilidade Industrial e Ecoeficiência</option>
          <option value="Modelagem e Dados">Modelagem Matemática e Ciência de Dados</option>
          <option value="Inovação em Engenharia">Inovação em Engenharia: Da Ciência à Aplicação</option>
          <option value="Educação e Futuro das Engenharias">Educação e o Futuro das Engenharias</option>
          <option value="Tema Personalizado">Tema Personalizado para o Evento</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Mensagem e Detalhes Adicionais
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Formato do evento, horário pretendido ou informações complementares..."
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
              <span>Enviando convite...</span>
            </>
          ) : (
            <>
              <span>Enviar Solicitação de Palestra</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContatoPalestrasPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Contato", href: "/contato" },
            { label: "Solicitar Palestra" },
          ]}
        />

        <div className="py-8 border-b border-slate-200 space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            DISPONIBILIDADE DE AGENDA
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Solicitar Palestra ou Keynote
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Preencha os detalhes do seu evento acadêmico ou corporativo para verificarmos datas e alinharmos o formato da apresentação.
          </p>
        </div>

        <Suspense fallback={<div className="py-12 text-center text-xs text-slate-400">Carregando formulário...</div>}>
          <ContatoPalestrasForm />
        </Suspense>
      </div>
    </div>
  );
}
