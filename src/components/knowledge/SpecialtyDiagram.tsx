import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

interface SpecialtyDiagramProps {
  type: "ia" | "dispersao" | "seguranca" | "fuzzy" | "decisao" | "isocinetica";
}

interface Step {
  num: string;
  label: string;
  detail: string;
}

const DIAGRAM_DEFINITIONS: Record<
  SpecialtyDiagramProps["type"],
  {
    title: string;
    subtitle: string;
    steps: Step[];
  }
> = {
  ia: {
    title: "Ciclo de Inteligência Artificial & Dados na Engenharia",
    subtitle: "Convergência entre dados físicos, algoritmos preditivos e ação operacional",
    steps: [
      { num: "01", label: "DADOS", detail: "Medições de sensores, histórico e variáveis físicas" },
      { num: "02", label: "MODELO", detail: "Redes neurais e regras com restrições termodinâmicas" },
      { num: "03", label: "DECISÃO", detail: "Inferência analítica e estimativa de confiança" },
      { num: "04", label: "APLICAÇÃO", detail: "Controle em tempo real e prevenção de falhas" },
    ],
  },
  dispersao: {
    title: "Dinâmica de Transporte e Dispersão Atmosférica",
    subtitle: "Da taxa de emissão na fonte receptora à concentração em nível de solo",
    steps: [
      { num: "01", label: "EMISSÃO", detail: "Vazão, temperatura e velocidade dos gases na chaminé" },
      { num: "02", label: "ATMOSFERA", detail: "Camada limite, estabilidade e perfil vertical de vento" },
      { num: "03", label: "TRANSPORTE", detail: "Advecção pela pluma e esteira aerodinâmica de edifícios" },
      { num: "04", label: "DISPERSÃO", detail: "Diluição turbulenta térmica e atrito mecânico do relevo" },
      { num: "05", label: "CONCENTRAÇÃO", detail: "Isoconcentrações no solo confrontadas com o CONAMA 491" },
    ],
  },
  seguranca: {
    title: "Cadeia da Segurança de Processos & Integridade",
    subtitle: "Abordagem sistemática para mitigação de acidentes maiores e falhas catastróficas",
    steps: [
      { num: "01", label: "PERIGO", detail: "Substâncias inflamáveis, tóxicas ou fluidos pressurizados" },
      { num: "02", label: "RISCO", detail: "Probabilidade de falha e severidade potencial de perdas" },
      { num: "03", label: "CONTROLE", detail: "Barreiras físicas (PSVs), instrumentação e inspeção PH" },
      { num: "04", label: "PREVENÇÃO", detail: "Integridade mecânica garantida e conformidade legal" },
    ],
  },
  fuzzy: {
    title: "Mecanismo de Inferência e Lógica Fuzzy",
    subtitle: "Estrutura de tratamento matemático para dados imprecisos ou qualitativos",
    steps: [
      { num: "01", label: "ENTRADAS", detail: "Variáveis nítidas de processo (temperatura, vazão, pressão)" },
      { num: "02", label: "PERTINÊNCIA", detail: "Fuzzificação através de funções triangulares ou gaussianas" },
      { num: "03", label: "INFERÊNCIA", detail: "Aplicação das regras SE-ENTÃO com operadores Mandani/Sugeno" },
      { num: "04", label: "DESFUZZIFICAÇÃO", detail: "Cálculo do centro de gravidade (Centroid) da saída" },
      { num: "05", label: "SAÍDA", detail: "Ação de controle contínua ou escore de risco numérico" },
    ],
  },
  decisao: {
    title: "Fluxo Estruturado de Tomada de Decisão Multicritério",
    subtitle: "Racionalização de escolhas técnicas sob múltiplos objetivos conflitantes",
    steps: [
      { num: "01", label: "PROBLEMA", detail: "Definição do escopo, alternativas operacionais e incertezas" },
      { num: "02", label: "CRITÉRIOS", detail: "Segurança, custo de parada, impacto ambiental e norma" },
      { num: "03", label: "DADOS", detail: "Pesos relativos e matriz de julgamentos paritários (AHP)" },
      { num: "04", label: "MODELO", detail: "Agregação multicritério e matriz de consistência geométrica" },
      { num: "05", label: "DECISÃO", detail: "Ranqueamento justificado e auditável para alocação de recursos" },
    ],
  },
  isocinetica: {
    title: "Princípio Físico da Amostragem Isocinética",
    subtitle: "Garantia de representatividade na coleta de material particulado em chaminés",
    steps: [
      { num: "01", label: "CHAMINÉ", detail: "Medição de velocidade com tubo Pitot e perfil térmico" },
      { num: "02", label: "ALINHAMENTO", detail: "Posicionamento do bocal da sonda paralelo às linhas de fluxo" },
      { num: "03", label: "ISOCINETISMO", detail: "Igualdade exata entre a velocidade do duto e a sucção (90-110%)" },
      { num: "04", label: "COLETA", detail: "Retenção física do particulado no filtro gravimétrico EPA 5" },
      { num: "05", label: "RESULTADO", detail: "Taxa de emissão mássica real (kg/h) e validação da conformidade" },
    ],
  },
};

export default function SpecialtyDiagram({ type }: SpecialtyDiagramProps) {
  const config = DIAGRAM_DEFINITIONS[type];
  if (!config) return null;

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl overflow-hidden relative">
      {/* Detalhe de fundo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mb-6">
        <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-sky-400 block mb-1">
          FLUXO CONCEITUAL & MÉTODO
        </span>
        <h3 className="font-heading font-semibold text-lg sm:text-xl text-white tracking-[-0.02em]">
          {config.title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          {config.subtitle}
        </p>
      </div>

      {/* Grid de Passos: Desktop em linha horizontal / Mobile em coluna com conectores */}
      <div className="relative z-10 grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-3 sm:gap-2">
        {config.steps.map((step, idx) => {
          const isLast = idx === config.steps.length - 1;

          return (
            <div key={idx} className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
              <div className="flex-1 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-sky-400/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-semibold text-sky-400">
                    {step.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                </div>
                <h4 className="font-heading font-bold text-xs sm:text-sm tracking-wide text-white mb-1 uppercase">
                  {step.label}
                </h4>
                <p className="font-body text-[11.5px] sm:text-xs text-slate-400 leading-snug">
                  {step.detail}
                </p>
              </div>

              {!isLast && (
                <div className="hidden md:flex items-center justify-center px-1 text-slate-500">
                  <ArrowRight className="w-4 h-4 text-sky-400/70" />
                </div>
              )}
              {!isLast && (
                <div className="flex md:hidden items-center justify-center py-1 text-slate-600">
                  <ArrowDown className="w-3.5 h-3.5 text-sky-400/60" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
