"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Download, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const BENEFITS = [
  "Aplicações reais testadas no contexto técnico",
  "Exemplos práticos de controle e modelagem em Engenharia",
  "Critérios claros para tomada de decisão fundamentada",
  "Fundamentos aplicados de Lógica Fuzzy em cenários incertos",
  "Redes Neurais Artificiais para predição industrial",
  "Análise orientada por dados sem algoritmos caixa-preta",
];

export default function LeadMagnetSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("Por favor, preencha seu nome completo.");
      setStatus("error");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Por favor, informe um endereço de e-mail corporativo ou acadêmico válido.");
      setStatus("error");
      return;
    }

    if (!consent) {
      setErrorMessage("É necessário concordar com os termos de privacidade para receber o material.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulação de envio seguro desacoplado (pode ser conectado a webhook no futuro)
      await new Promise((resolve) => setTimeout(resolve, 600));

      trackEvent("download_lead_magnet", {
        lead_magnet_name: "7_aplicacoes_ia_engenharia",
        lead_magnet_topic: "IA Aplicada à Engenharia",
        source_page: "home_lead_magnet_section",
      });

      trackEvent("generate_lead", {
        lead_type: "lead_magnet",
        interest: "7 aplicações práticas de Inteligência Artificial",
        form_name: "lead_magnet_home",
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Ocorreu uma instabilidade momentânea. Por favor, tente novamente em instantes.");
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Luzes técnicas sutis */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Lado Esquerdo: Proposta de Valor e Benefícios */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/20 text-sky-400 border border-sky-400/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GUIA TÉCNICO EXCLUSIVO • DOWNLOAD GRATUITO</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Inteligência Artificial já faz parte da Engenharia. A questão é como utilizá-la corretamente.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Baixe gratuitamente o guia executivo e técnico:{" "}
                <strong className="text-white font-semibold">
                  “7 aplicações práticas de Inteligência Artificial que todo engenheiro deveria conhecer.”
                </strong>
              </p>

              {/* Lista de Benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito: Formulário de Alta Conversão */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg">
                {status === "success" ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Solicitação confirmada com sucesso!</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      O link seguro para download do guia técnico foi enviado para <strong>{email}</strong>. Verifique também sua caixa de entrada e spam.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setName("");
                        setEmail("");
                      }}
                      className="mt-4 text-xs text-sky-400 underline hover:text-sky-300"
                    >
                      Cadastrar outro e-mail
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Acesso Imediato ao Guia
                      </h3>
                      <p className="text-xs text-slate-400">
                        Preencha os dados abaixo para receber o material em PDF:
                      </p>
                    </div>

                    {status === "error" && errorMessage && (
                      <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-xs text-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-300 mb-1">
                        Seu nome completo *
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Eng. Marcelo Silva"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-sky-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-email" className="block text-xs font-semibold text-slate-300 mb-1">
                        Seu melhor e-mail *
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu.email@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-sky-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        id="lead-consent"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 rounded border-slate-700 text-sky-600 focus:ring-sky-500 bg-slate-950 cursor-pointer"
                        required
                      />
                      <label htmlFor="lead-consent" className="text-[11px] text-slate-400 leading-tight cursor-pointer">
                        Concordo em receber o guia técnico e comunicações científicas periódicas do Prof. Dr. Wagner Vasconcelos.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer shadow-md shadow-sky-500/20"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processando envio seguro...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Quero receber o guia gratuitamente</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate-500 text-center leading-tight">
                      Ao enviar seus dados, você declara ter lido nossa{" "}
                      <Link href="/privacidade" className="underline hover:text-slate-400">
                        Política de Privacidade
                      </Link>
                      . Seus dados nunca serão compartilhados.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
