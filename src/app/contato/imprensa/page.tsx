"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { submitLead } from "@/lib/leads";
import { Newspaper, CheckCircle2, ArrowRight, Loader2, Send } from "lucide-react";

export default function ContatoImprensaPage() {
  const [outlet, setOutlet] = useState("");
  const [journalist, setJournalist] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!outlet.trim() || !journalist.trim() || !email.trim() || !topic.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha o veículo, jornalista, e-mail e a pauta da reportagem.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: journalist.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: outlet.trim(),
        leadType: "imprensa",
        interest: `Pauta de Imprensa: ${topic} (Veículo: ${outlet}, Prazo: ${deadline || "Não informado"})`,
        message: message.trim(),
        honeypot,
        source: "contato_imprensa",
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar a solicitação. Tente novamente.");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-emerald-500/40 text-center space-y-3 max-w-xl mx-auto shadow-xl">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h2 className="text-xl font-bold text-white">Solicitação de imprensa recebida!</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              Nossa assessoria técnica recebeu a pauta do veículo <strong>{outlet}</strong> e priorizará o retorno para o e-mail <strong>{email}</strong> dentro do seu prazo.
            </p>
            <div className="pt-3">
              <Link
                href="/imprensa"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Voltar para Sala de Imprensa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Contato", href: "/contato" },
            { label: "Assessoria de Imprensa" },
          ]}
        />

        <div className="py-8 border-b border-slate-200 space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            SALA DE IMPRENSA
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Atendimento para Jornalistas e Mídia
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Canal prioritário para solicitação de entrevistas, declarações técnicas sobre IA na engenharia, acidentes industriais, emissões e fornecimento de Media Kit.
          </p>
        </div>

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
                Veículo de Comunicação / Mídia *
              </label>
              <input
                type="text"
                value={outlet}
                onChange={(e) => setOutlet(e.target.value)}
                placeholder="Ex: Portal de Notícias / Jornal / Podcast"
                required
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nome do Jornalista / Produtor *
              </label>
              <input
                type="text"
                value={journalist}
                onChange={(e) => setJournalist(e.target.value)}
                placeholder="Seu nome completo"
                required
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                E-mail de Contato *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jornalista@veiculo.com.br"
                required
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Telefone / WhatsApp (Com DDD)
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pauta da Matéria *
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Impacto da IA na Engenharia / Resolução CONAMA 491"
                required
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Prazo de Fechamento / Deadline
              </label>
              <input
                type="text"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="Ex: Hoje até 18h / Próxima sexta-feira"
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Perguntas ou Mensagem para o Entrevistado
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva o ângulo da pauta, dúvidas principais ou solicitação de material do Media Kit..."
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
                  <span>Enviando pauta...</span>
                </>
              ) : (
                <>
                  <span>Enviar Solicitação de Imprensa</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
