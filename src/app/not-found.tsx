import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 bg-slate-50 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-800 flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
            ERRO 404 • PÁGINA NÃO ENCONTRADA
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Conteúdo não localizado
          </h1>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          O endereço solicitado não foi encontrado ou está em fase de estruturação editorial na plataforma do Prof. Dr. Wagner Vasconcelos.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-sky-950 transition-all text-xs"
          >
            <Home className="w-4 h-4" />
            <span>Retornar à Página Inicial</span>
          </Link>

          <Link
            href="/sobre/trajetoria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors text-xs"
          >
            <span>Conhecer Trajetória</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
