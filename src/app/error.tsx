"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log interno em ambiente de desenvolvimento sem expor em produção
    if (process.env.NODE_ENV === "development") {
      console.error("[Runtime Error Boundary]", error);
    }
  }, [error]);

  return (
    <div className="py-24 px-4 bg-slate-50 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-sm border border-amber-100">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700">
            ESTABILIDADE & OPERAÇÃO
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Instabilidade temporária
          </h1>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Não foi possível carregar esta seção no momento. Nossos sistemas registraram o ocorrido para garantir a integridade contínua da plataforma.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-sky-950 active:bg-slate-800 transition-colors text-xs cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tentar novamente</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-100 active:bg-slate-200 border border-slate-200 transition-colors text-xs"
          >
            <Home className="w-4 h-4" />
            <span>Página Inicial</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
