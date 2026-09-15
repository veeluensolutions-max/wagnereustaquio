"use client";

import React, { useState } from "react";
import { Sparkles, Info, RefreshCw, CheckCircle2 } from "lucide-react";

type FunctionType = "triangular" | "trapezoidal" | "gaussian";

export default function FuzzySimulator() {
  const [funcType, setFuncType] = useState<FunctionType>("triangular");
  const [inputVal, setInputVal] = useState<number>(55);
  
  // Parâmetros da função
  const [paramA, setParamA] = useState<number>(30);
  const [paramB, setParamB] = useState<number>(50);
  const [paramC, setParamC] = useState<number>(70);
  const [paramD, setParamD] = useState<number>(85);
  const [sigma, setSigma] = useState<number>(12);

  // Cálculo matemático da pertinência mu(x)
  const calculateMembership = (x: number): number => {
    if (funcType === "triangular") {
      if (x <= paramA || x >= paramC) return 0;
      if (x === paramB) return 1;
      if (x > paramA && x < paramB) return (x - paramA) / (paramB - paramA);
      if (x > paramB && x < paramC) return (paramC - x) / (paramC - paramB);
      return 0;
    }

    if (funcType === "trapezoidal") {
      if (x <= paramA || x >= paramD) return 0;
      if (x >= paramB && x <= paramC) return 1;
      if (x > paramA && x < paramB) return (x - paramA) / (paramB - paramA);
      if (x > paramC && x < paramD) return (paramD - x) / (paramD - paramC);
      return 0;
    }

    if (funcType === "gaussian") {
      const s = Math.max(1, sigma);
      const diff = x - paramB;
      return Math.exp(-0.5 * Math.pow(diff / s, 2));
    }

    return 0;
  };

  const membership = Number(calculateMembership(inputVal).toFixed(3));

  // Geração de pontos do SVG
  const svgWidth = 500;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;
  const graphWidth = svgWidth - paddingX * 2;
  const graphHeight = svgHeight - paddingY * 2;

  const mapX = (x: number) => paddingX + (x / 100) * graphWidth;
  const mapY = (y: number) => paddingY + (1 - y) * graphHeight;

  // Gerar caminho da curva
  const points: string[] = [];
  for (let x = 0; x <= 100; x += 1) {
    const y = calculateMembership(x);
    points.push(`${mapX(x).toFixed(1)},${mapY(y).toFixed(1)}`);
  }
  const pathD = `M ${points.join(" L ")}`;
  const areaD = `${pathD} L ${mapX(100)},${mapY(0)} L ${mapX(0)},${mapY(0)} Z`;

  // Ponto da entrada x
  const currentXPos = mapX(inputVal);
  const currentYPos = mapY(membership);

  // Interpretação qualitativa do resultado
  const getInterpretation = (mu: number) => {
    if (mu === 0) return { text: "Sem pertinência (0% pertencente ao conjunto)", color: "text-slate-400" };
    if (mu < 0.3) return { text: "Pertinência incipiente / fraca", color: "text-amber-400" };
    if (mu < 0.7) return { text: "Pertinência moderada / transitória", color: "text-sky-400" };
    if (mu < 1) return { text: "Pertinência alta / preponderante", color: "text-blue-300" };
    return { text: "Pertinência máxima (100% representativo)", color: "text-emerald-400" };
  };

  const interpretation = getInterpretation(membership);

  return (
    <div className="my-8 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-950/80 border border-sky-800/80 text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Laboratório Computacional Interativo</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Simulador de Funções de Pertinência Fuzzy
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore como variáveis nítidas da engenharia (temperatura, pressão ou vazão) são convertidas em graus contínuos μ(x) ∈ [0, 1].
          </p>
        </div>

        {/* Seleção do tipo de função */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs font-semibold">
          <button
            onClick={() => setFuncType("triangular")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              funcType === "triangular"
                ? "bg-sky-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Triangular
          </button>
          <button
            onClick={() => setFuncType("trapezoidal")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              funcType === "trapezoidal"
                ? "bg-sky-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Trapezoidal
          </button>
          <button
            onClick={() => setFuncType("gaussian")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              funcType === "gaussian"
                ? "bg-sky-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Gaussiana
          </button>
        </div>
      </div>

      {/* Área do Gráfico SVG */}
      <div className="py-6">
        <div className="relative w-full overflow-hidden rounded-2xl bg-slate-950/90 border border-slate-800/80 p-4">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-48 sm:h-64 select-none"
          >
            <defs>
              <linearGradient id="area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Linhas de Grade e Eixos */}
            <line
              x1={paddingX}
              y1={mapY(0)}
              x2={paddingX + graphWidth}
              y2={mapY(0)}
              stroke="#334155"
              strokeWidth="1.5"
            />
            <line
              x1={paddingX}
              y1={mapY(1)}
              x2={paddingX + graphWidth}
              y2={mapY(1)}
              stroke="#334155"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <line
              x1={paddingX}
              y1={mapY(0.5)}
              x2={paddingX + graphWidth}
              y2={mapY(0.5)}
              stroke="#1e293b"
              strokeDasharray="2 4"
              strokeWidth="1"
            />

            {/* Rótulos dos Eixos */}
            <text x={paddingX - 10} y={mapY(1) + 4} textAnchor="end" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              1.0
            </text>
            <text x={paddingX - 10} y={mapY(0.5) + 4} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="sans-serif">
              0.5
            </text>
            <text x={paddingX - 10} y={mapY(0) + 4} textAnchor="end" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              0.0
            </text>

            <text x={mapX(0)} y={mapY(0) + 16} textAnchor="middle" fill="#64748b" fontSize="9">
              0
            </text>
            <text x={mapX(50)} y={mapY(0) + 16} textAnchor="middle" fill="#64748b" fontSize="9">
              50
            </text>
            <text x={mapX(100)} y={mapY(0) + 16} textAnchor="middle" fill="#64748b" fontSize="9">
              100
            </text>

            {/* Preenchimento de Área sob a curva */}
            <path d={areaD} fill="url(#area-grad)" />

            {/* Curva de Pertinência Principal */}
            <path
              d={pathD}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Indicador de Linha Vertical da Entrada x */}
            <line
              x1={currentXPos}
              y1={mapY(0)}
              x2={currentXPos}
              y2={currentYPos}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Indicador de Linha Horizontal para mu(x) */}
            <line
              x1={paddingX}
              y1={currentYPos}
              x2={currentXPos}
              y2={currentYPos}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Ponto Interativo da Pertinência */}
            <circle
              cx={currentXPos}
              cy={currentYPos}
              r="6"
              fill="#fbbf24"
              stroke="#0f172a"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Controles de Parâmetros e Slider */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Controle da Variável de Entrada x */}
        <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Variável de Entrada Nítida (x):
            </label>
            <span className="font-mono text-base font-bold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800/60">
              x = {inputVal}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={inputVal}
            onChange={(e) => setInputVal(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
          />

          <div className="flex justify-between text-[11px] text-slate-400">
            <span>Mínimo (0)</span>
            <span>Centro (50)</span>
            <span>Máximo (100)</span>
          </div>
        </div>

        {/* Painel do Resultado Matemático */}
        <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Grau de Pertinência Calculado:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-3xl font-extrabold text-sky-400">
                μ(x) = {membership.toFixed(3)}
              </span>
              <span className="text-xs text-slate-400">
                ({(membership * 100).toFixed(1)}%)
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className={`font-semibold ${interpretation.color}`}>
              {interpretation.text}
            </span>
          </div>
        </div>
      </div>

      {/* Ajuste Fino dos Parâmetros da Função */}
      <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-sky-400" />
          <span>
            {funcType === "triangular" && "Função Triangular com suporte [30, 70] e vértice em 50."}
            {funcType === "trapezoidal" && "Função Trapezoidal com patamar unitário [50, 70] e suporte [30, 85]."}
            {funcType === "gaussian" && "Função Gaussiana suave centrada em 50 com dispersão σ = 12."}
          </span>
        </div>

        <button
          onClick={() => {
            setInputVal(55);
            setParamA(30);
            setParamB(50);
            setParamC(70);
            setParamD(85);
            setSigma(12);
          }}
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Restaurar parâmetros padrão</span>
        </button>
      </div>
    </div>
  );
}
