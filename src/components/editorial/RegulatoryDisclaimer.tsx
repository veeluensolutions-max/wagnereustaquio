import React from "react";
import { AlertCircle } from "lucide-react";

interface RegulatoryDisclaimerProps {
  customText?: string;
}

export default function RegulatoryDisclaimer({ customText }: RegulatoryDisclaimerProps) {
  const defaultText =
    "Este conteúdo possui caráter informativo. Normas, regulamentos e requisitos técnicos devem ser consultados em suas versões vigentes e avaliados conforme o contexto específico e a responsabilidade técnica aplicável.";

  return (
    <div className="my-8 p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 shadow-2xs">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-amber-950 block">
            Importante
          </span>
          <p className="font-body text-xs leading-relaxed text-amber-900">
            {customText || defaultText}
          </p>
        </div>
      </div>
    </div>
  );
}
