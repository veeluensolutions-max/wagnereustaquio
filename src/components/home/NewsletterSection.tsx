"use client";

import React, { useState } from "react";
import { Mail, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Por favor, informe um e-mail válido.");
      setStatus("error");
      return;
    }

    if (!consent) {
      setErrorMessage("Por favor, marque o consentimento para recebimento de comunicações.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Dispara sign_up e generate_lead em estrita conformidade com LGPD (Zero PII)
      trackEvent("sign_up", {
        form_name: "newsletter_home",
        newsletter_name: "Engenharia & Inteligência",
      });

      trackEvent("generate_lead", {
        lead_type: "newsletter",
        interest: "Engenharia & Inteligência",
        form_name: "newsletter_home",
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível realizar o cadastro no momento. Tente novamente.");
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-sky-700" />
              <span>NEWSLETTER “ENGENHARIA & INTELIGÊNCIA”</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Conhecimento técnico para acompanhar uma Engenharia em transformação.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Conteúdos sobre Engenharia, Inteligência Artificial, Meio Ambiente, Processos e Desenvolvimento Profissional enviados diretamente para sua caixa de entrada.
            </p>

            <div className="pt-4 max-w-md mx-auto">
              {status === "success" ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1">
                  <div className="flex items-center justify-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Inscrição confirmada com sucesso!</span>
                  </div>
                  <p className="text-emerald-800">
                    Obrigado por acompanhar o trabalho editorial do Prof. Dr. Wagner Vasconcelos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  {status === "error" && errorMessage && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@corporativo.com"
                      className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:border-sky-600 focus:outline-none shadow-sm"
                      required
                    />

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-sky-950 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm shrink-0"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Cadastrando...</span>
                        </>
                      ) : (
                        <>
                          <span>Quero receber</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      id="newsletter-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                      required
                    />
                    <label htmlFor="newsletter-consent" className="text-[11px] text-slate-500 leading-tight cursor-pointer">
                      Concordo com a Política de Privacidade e em receber comunicações técnicas (cancelamento gratuito a qualquer momento).
                    </label>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
