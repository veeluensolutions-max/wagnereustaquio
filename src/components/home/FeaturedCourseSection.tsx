"use client";

import React, { useState } from "react";
import { FEATURED_COURSE_IN_DEVELOPMENT } from "@/data/products";
import { Sparkles, Check, Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function FeaturedCourseSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      trackEvent("join_course_waitlist", {
        course_name: FEATURED_COURSE_IN_DEVELOPMENT.title,
        user_name: name || "Anônimo",
        user_email: email,
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível registrar seu interesse no momento. Tente novamente.");
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Detalhes luminosos sutis */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="border border-sky-500/30 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Informações do Curso */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{FEATURED_COURSE_IN_DEVELOPMENT.badge}</span>
              </div>

              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 mb-1">
                  {FEATURED_COURSE_IN_DEVELOPMENT.title}
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Inteligência Artificial para quem resolve problemas reais.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {FEATURED_COURSE_IN_DEVELOPMENT.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {FEATURED_COURSE_IN_DEVELOPMENT.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Caixa de Lista de Espera */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl">
                {status === "success" ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white">Você está na lista prioritária!</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Assim que as inscrições para a primeira turma forem abertas, você receberá a ementa completa e condições especiais de lançamento no e-mail informado.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleJoinWaitlist} className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Lista de Espera da Primeira Turma
                      </h3>
                      <p className="text-xs text-slate-400">
                        Receba a ementa detalhada e prioridade na abertura de vagas:
                      </p>
                    </div>

                    {status === "error" && errorMessage && (
                      <div className="p-3 rounded-lg bg-red-950/70 border border-red-800 text-xs text-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label htmlFor="course-name" className="block text-xs font-semibold text-slate-300 mb-1">
                        Nome ou como prefere ser chamado (opcional)
                      </label>
                      <input
                        id="course-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-sky-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="course-email" className="block text-xs font-semibold text-slate-300 mb-1">
                        Seu e-mail corporativo ou acadêmico *
                      </label>
                      <input
                        id="course-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu.email@engenharia.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-sky-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer shadow-md shadow-sky-500/20"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Registrando interesse...</span>
                        </>
                      ) : (
                        <>
                          <span>Entrar na lista de interesse</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate-500 text-center">
                      Não enviamos spam. Respeitamos integralmente a LGPD.
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
