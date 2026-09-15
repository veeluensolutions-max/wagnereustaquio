"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { submitLead } from "@/lib/leads";
import { Building2, CheckCircle2, ArrowRight, Loader2, Send, ShieldCheck } from "lucide-react";

export default function ContatoProjetosPage() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("Modelagem e Dispersão (AERMOD)");
  const [description, setDescription] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !company.trim() || !email.trim() || !description.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha seu nome, empresa, e-mail e a descrição da necessidade.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: company.trim(),
        leadType: "projeto",
        interest: `Projeto / Consultoria: ${area}`,
        message: description.trim(),
        honeypot,
        source: "contato_projetos",
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
            <h2 className="text-xl font-bold text-white">Solicitação de projeto enviada com sucesso!</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              Recebemos os detalhes técnicos da demanda de <strong>{company}</strong>. Nossa equipe técnica analisará os requisitos com sigilo absoluto e retornará em <strong>{email}</strong>.
            </p>
            <div className="pt-3">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Voltar para Catálogo de Projetos</span>
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
            { label: "Solicitar Avaliação de Projeto" },
          ]}
        />

        <div className="py-8 border-b border-slate-200 space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            CONSULTORIA & ENGENHARIA APLICADA
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Solicitar Avaliação Técnica de Projeto
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Diagnósticos, laudos periciais, modelagem de dispersão atmosférica e estudos de integridade NR-13 para operações industriais complexas.
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
                Empresa ou Instituição *
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ex: Indústria Química / Consultoria"
                required
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Eng. Rodrigo Alves"
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
                placeholder="rodrigo@empresa.com.br"
                required
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Telefone / WhatsApp
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

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Área Temática Principal da Demanda *
            </label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
            >
              <option value="Modelagem e Dispersão (AERMOD)">Modelagem de Dispersão Atmosférica (AERMOD)</option>
              <option value="Segurança de Processos e NR-13">Segurança de Processos e Conformidade NR-13</option>
              <option value="Inteligência Artificial e Lógica Fuzzy">Inteligência Artificial e Lógica Fuzzy Aplicada</option>
              <option value="Emissões e Amostragem Isocinética">Emissões Atmosféricas e Amostragem Isocinética</option>
              <option value="Recursos Hídricos e Efluentes">Recursos Hídricos, Efluentes e Sustentabilidade</option>
              <option value="Perícia Judicial e Assistência Técnica">Perícia Judicial e Assistência Técnica de Engenharia</option>
              <option value="Outra Demanda Industrial">Outra Demanda de Engenharia</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Descrição da Necessidade ou Desafio Técnico *
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva o escopo, localização da planta, prazo pretendido ou condicionantes regulatórias..."
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Todas as informações são tratadas sob estrito dever de sigilo profissional e proteção industrial.
            </span>
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
                  <span>Enviar Solicitação de Projeto</span>
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
