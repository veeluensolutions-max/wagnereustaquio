"use client";

import React, { useState } from "react";
import { FEATURED_COURSE_IN_DEVELOPMENT } from "@/data/products";
import { Sparkles, Check, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
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
    <section className="py-20 lg:py-24 bg-[#050c18] text-white relative overflow-hidden">
      {/* Iluminação ambiente e efeito aurora */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative border border-sky-500/25 rounded-3xl bg-gradient-to-br from-[#061224] via-[#091830] to-[#040c1a] p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
          {/* Brilho superior de contorno */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Informações do Curso */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-heading font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5" />
                <span>{FEATURED_COURSE_IN_DEVELOPMENT.badge}</span>
              </div>

              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 mb-2">
                  {FEATURED_COURSE_IN_DEVELOPMENT.title}
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-[650] text-white tracking-tight leading-tight">
                  Inteligência Artificial para quem resolve problemas reais.
                </h2>
              </div>

              <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {FEATURED_COURSE_IN_DEVELOPMENT.description}
              </p>

              <div className="space-y-3 pt-2">
                {FEATURED_COURSE_IN_DEVELOPMENT.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 mt-0.5 text-sky-300">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Caixa de Lista de Espera */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-sky-400/20 shadow-2xl relative overflow-hidden">
                {/* Linha sutil de destaque no topo da caixa */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500" />

                {status === "success" ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-white">Você está na lista prioritária!</h3>
                    <p className="font-body text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                      Assim que as inscrições para a primeira turma forem abertas, você receberá a ementa completa e condições especiais no e-mail informado.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleJoinWaitlist} className="space-y-4">
                    <div>
                      <h3 className="font-heading font-semibold text-base text-white mb-1">
                        Lista de Espera da Primeira Turma
                      </h3>
                      <p className="font-body text-xs text-slate-400">
                        Receba a ementa detalhada e prioridade na abertura de vagas:
                      </p>
                    </div>

                    {status === "error" && errorMessage && (
                      <div className="p-3 rounded-xl bg-red-950/80 border border-red-800/80 text-xs text-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label htmlFor="course-name" className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                        Nome ou como prefere ser chamado (opcional)
                      </label>
                      <input
                        id="course-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="course-email" className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                        Seu e-mail corporativo ou acadêmico *
                      </label>
                      <input
                        id="course-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu.email@engenharia.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 focus:outline-none transition-all"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-sky-500/20 group"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Registrando interesse...</span>
                        </>
                      ) : (
                        <>
                          <span>Garantir prioridade na primeira turma</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[10.5px] font-body text-slate-400 text-center">
                      Não enviamos spam. Respeitamos integralmente a sua privacidade e a LGPD.
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
