"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { submitLead, LeadData, captureUtmParameters } from "@/lib/leads";
import { CheckCircle2, Loader2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

function getInitialInterest(param: string) {
  if (param.includes("aermod")) return "Modelagem";
  if (param.includes("nr13") || param.includes("seguranca")) return "Segurança / NR-13";
  if (param.includes("mentoria")) return "Mentoria";
  return "IA";
}

function ListaInteresseForm() {
  const searchParams = useSearchParams();
  const produtoParam = searchParams.get("produto") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [experienceLevel, setExperienceLevel] = useState<LeadData["experienceLevel"]>("professional");
  const [interest, setInterest] = useState(() => getInitialInterest(produtoParam));
  const [prevProdutoParam, setPrevProdutoParam] = useState(produtoParam);
  const [lgpdConsent, setLgpdConsent] = useState(true);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (produtoParam !== prevProdutoParam) {
    setPrevProdutoParam(produtoParam);
    setInterest(getInitialInterest(produtoParam));
  }

  useEffect(() => {
    captureUtmParameters();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Por favor, insira um e-mail válido.");
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
        interest: `${produtoParam || "Geral"} - ${interest} (${area || "Geral"})`,
        experienceLevel,
        source: `lista_de_interesse_page_${produtoParam || "geral"}`,
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
        className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-emerald-500/30 text-center space-y-4 max-w-xl mx-auto shadow-xl"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Inscrição confirmada na Lista de Interesse!
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Obrigado pelo interesse. Você receberá atualizações em primeira mão em <strong>{email}</strong> assim que as turmas ou materiais forem disponibilizados.
        </p>
        <div className="pt-4">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
          >
            <span>Voltar ao Catálogo de Produtos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
      <div className="space-y-2 border-b border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VAGAS & LANÇAMENTOS PRIORITÁRIOS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Lista de Interesse
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Cadastre-se para receber avisos prioritários sobre a abertura de turmas de cursos técnicos, e-books e novas ferramentas.
          {produtoParam && (
            <span className="block mt-1 text-sky-400 font-semibold">
              Produto selecionado: {produtoParam}
            </span>
          )}
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              E-mail Profissional *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@empresa.com.br"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Área de Atuação
            </label>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Ex: Eng. Química"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nível de Experiência
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value as LeadData["experienceLevel"])}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500"
            >
              <option value="student">Estudante</option>
              <option value="professional">Profissional Técnico</option>
              <option value="manager">Gestor / Coordenador</option>
              <option value="researcher">Pesquisador</option>
              <option value="other">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Interesse Principal
            </label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500"
            >
              <option value="IA">IA na Engenharia</option>
              <option value="Lógica Fuzzy">Lógica Fuzzy</option>
              <option value="Redes Neurais">Redes Neurais</option>
              <option value="Python">Python na Prática</option>
              <option value="Tomada de Decisão">Tomada de Decisão</option>
              <option value="Modelagem">Modelagem & AERMOD</option>
              <option value="Segurança / NR-13">Segurança / NR-13</option>
              <option value="Mentoria">Mentoria Individual</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            id="global-lgpd"
            type="checkbox"
            checked={lgpdConsent}
            onChange={(e) => setLgpdConsent(e.target.checked)}
            className="mt-0.5 rounded border-slate-600 text-sky-600 focus:ring-sky-500 w-4 h-4 cursor-pointer"
          />
          <label htmlFor="global-lgpd" className="text-[11px] text-slate-400 leading-relaxed cursor-pointer">
            Concordo com o tratamento dos dados informados para recebimento de comunicações técnicas conforme a{" "}
            <Link href="/privacidade" className="underline hover:text-sky-400">
              Política de Privacidade
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full min-h-[44px] py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Registrando inscrição...</span>
            </>
          ) : (
            <>
              <span>Confirmar Interesse</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function ListaInteressePage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Lista de Interesse" },
          ]}
        />

        <div className="py-8">
          <Suspense
            fallback={
              <div className="py-16 text-center text-xs text-slate-500">
                Carregando formulário...
              </div>
            }
          >
            <ListaInteresseForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
