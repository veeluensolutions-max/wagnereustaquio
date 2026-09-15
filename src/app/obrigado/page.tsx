import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BookOpen, GraduationCap, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Agradecemos seu contato | Prof. Dr. Wagner Eustáquio",
  description: "Sua solicitação foi registrada com sucesso.",
  robots: {
    index: false,
    follow: false,
  },
};

function ObrigadoContent() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-9 h-9" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
          REGISTRO CONFIRMADO
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Agradecemos pelo seu interesse!
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
          Suas informações foram salvas com segurança. Você receberá um retorno ou notificação técnica em primeira mão assim que houver novidades sobre a turma ou material de seu interesse.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Enquanto aguarda nosso contato, explore a produção intelectual:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <Link
            href="/conhecimento/artigos"
            className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 flex items-center gap-3 transition-colors text-xs font-semibold text-slate-800"
          >
            <FileText className="w-4 h-4 text-sky-700 shrink-0" />
            <span>Artigos & Análises Técnicas</span>
          </Link>
          <Link
            href="/conhecimento/publicacoes-cientificas"
            className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 flex items-center gap-3 transition-colors text-xs font-semibold text-slate-800"
          >
            <GraduationCap className="w-4 h-4 text-sky-700 shrink-0" />
            <span>Publicações Científicas</span>
          </Link>
          <Link
            href="/conhecimento/livros"
            className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 flex items-center gap-3 transition-colors text-xs font-semibold text-slate-800"
          >
            <BookOpen className="w-4 h-4 text-sky-700 shrink-0" />
            <span>Livro: Lógica Fuzzy (2010)</span>
          </Link>
          <Link
            href="/sobre/biografia"
            className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 flex items-center gap-3 transition-colors text-xs font-semibold text-slate-800"
          >
            <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
            <span>Trajetória & Autoridade</span>
          </Link>
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
        >
          <span>Retornar à Página Inicial</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function ObrigadoPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center text-xs text-slate-400">Carregando...</div>}>
          <ObrigadoContent />
        </Suspense>
      </div>
    </div>
  );
}
