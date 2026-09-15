import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições gerais de uso, direitos de propriedade intelectual e responsabilidade técnica dos conteúdos disponibilizados na plataforma.",
  alternates: {
    canonical: "/termos",
  },
};

export default function TermosPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Termos de Uso" }]} />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            CONDIÇÕES GERAIS DE NAVEGAÇÃO
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Termos de Uso da Plataforma
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: Março de 2026
          </p>
        </div>

        {/* Conteúdo dos Termos */}
        <div className="py-10 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">1. Aceitação dos Termos</h2>
            <p>
              Ao navegar nesta plataforma digital, você concorda com as disposições estabelecidas nestes Termos de Uso e em nossa Política de Privacidade. Caso não concorde com algum dos termos, recomendamos a não utilização dos serviços oferecidos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">2. Propriedade Intelectual e Direitos Autorais</h2>
            <p>
              Todo o conteúdo disponibilizado neste site — incluindo artigos técnicos, resumos de pesquisas, matrizes de cálculo, formulações, diagramas, fotografias oficiais e códigos-fonte — é de titularidade exclusiva do <strong>Prof. Dr. Wagner Eustáquio de Vasconcelos</strong> ou de seus respectivos licenciantes, estando protegido pela Lei de Direitos Autorais (Lei nº 9.610/1998).
            </p>
            <p>
              A citação de trechos para fins acadêmicos e educacionais é autorizada mediante indicação expressa e legível da autoria e do link original da publicação. É vedada a reprodução integral, comercialização ou distribuição não autorizada sem prévio consentimento formal por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">3. Natureza do Conteúdo e Isenção de Responsabilidade</h2>
            <p>
              Os artigos e materiais educativos refletem o conhecimento científico e as boas práticas de engenharia aplicadas. No entanto, a aplicação prática em unidades industriais reais requer análise pericial in loco, levantamento específico de parâmetros de processo e emissão de Anotação de Responsabilidade Técnica (ART) por profissional habilitado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">4. Produtos Digitais, Cursos e Inscrições Futuras</h2>
            <p>
              O ingresso em listas de interesse para cursos (ex: IA Aplicada à Engenharia, AERMOD e mentorias) não gera obrigação financeira imediata para nenhuma das partes. Condições comerciais, formas de pagamento, cancelamento e direito de arrependimento (Art. 49 do CDC) serão apresentados expressamente no momento da abertura formal das matrículas ou checkout oficial.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">5. Links Externos</h2>
            <p>
              A plataforma pode conter links para sites de terceiros (como a Plataforma Lattes do CNPq, EPA e órgãos ambientais). Não exercemos controle sobre o conteúdo ou as práticas de privacidade de sites externos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">6. Foro e Legislação Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Para dirimir eventuais controvérsias decorrentes de sua interpretação ou aplicação, elege-se a Comarca de [Recife - PE / Foro da Sede da Operadora a definir], com renúncia expressa a qualquer outro foro, por mais privilegiado que seja.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
