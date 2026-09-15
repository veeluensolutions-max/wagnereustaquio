import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade e Proteção de Dados (LGPD)",
  description:
    "Diretrizes transparentes de privacidade, tratamento de dados pessoais, consentimento, cookies e conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacidadePage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />

        {/* Cabeçalho */}
        <div className="py-8 border-b border-slate-200 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONFORMIDADE LEGAL • LEI Nº 13.709/2018 (LGPD)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Política de Privacidade e Proteção de Dados Pessoais
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: Março de 2026 • Versão 2.0 (Fase 9)
          </p>
        </div>

        {/* Alerta de Revisão Jurídica (Placeholders Legais) */}
        <div className="my-6 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Nota de Governança e Transparência Jurídica:</p>
            <p className="leading-relaxed">
              Os trechos demarcados entre colchetes como <strong>[A DEFINIR]</strong> representam definições corporativas e cadastrais que serão homologadas pela assessoria jurídica antes da publicação formal da pessoa jurídica operadora da plataforma.
            </p>
          </div>
        </div>

        {/* Conteúdo Legal Estruturado */}
        <div className="py-6 space-y-8 text-slate-700 leading-relaxed text-sm">
          
          {/* 1. Identificação do Controlador */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">1. Identificação do Controlador e Encarregado (DPO)</h2>
            <p>
              O tratamento dos dados coletados nesta plataforma é realizado sob a responsabilidade do controlador:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li><strong>Controlador:</strong> Prof. Dr. Wagner Eustáquio de Vasconcelos / [Razão Social da Operadora a definir]</li>
              <li><strong>CNPJ:</strong> [CNPJ a definir antes do lançamento comercial]</li>
              <li><strong>Endereço de Operação:</strong> [Endereço corporativo oficial a definir, Recife - PE]</li>
              <li><strong>Encarregado pelo Tratamento de Dados (DPO):</strong> [Nome do Encarregado a definir]</li>
              <li><strong>Canal Direto do DPO:</strong> [dpo@wagnervasconcelos.com.br a definir] ou através de nosso <Link href="/contato" className="text-sky-700 underline font-semibold">formulário de contato</Link>.</li>
            </ul>
          </section>

          {/* 2. Dados Fornecidos em Formulários */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">2. Dados Pessoais Fornecidos Diretamente pelo Usuário</h2>
            <p>
              Coletamos informações cadastrais exclusivamente quando fornecidas de forma voluntária, consciente e mediante seu consentimento expresso nos seguintes pontos de contato:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li><strong>Newsletter Técnica & Guias Educativos (Lead Magnets):</strong> Nome completo e endereço de e-mail profissional/acadêmico.</li>
              <li><strong>Listas de Interesse de Cursos e Treinamentos:</strong> Nome, e-mail profissional, área de formação, nível de experiência e tema específico de interesse.</li>
              <li><strong>Solicitações Institucionais (Palestras, Projetos, Mentorias e Imprensa):</strong> Nome, organização/empresa, e-mail corporativo, telefone/WhatsApp de contato institucional e escopo técnico da demanda.</li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Importante: Jamais solicitamos dados sensíveis (dados biométricos, políticos, religiosos ou de saúde) nem dados de crianças e adolescentes.
            </p>
          </section>

          {/* 3. Dados Técnicos e Telemetria (Zero PII no Analytics) */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">3. Dados Técnicos de Navegação e Telemetria</h2>
            <p>
              Durante sua navegação, são coletados dados técnicos estritamente agregados e anônimos (como tipo de dispositivo, resolução de tela, navegador, páginas visitadas e profundidade de leitura dos artigos).
            </p>
            <p>
              <strong>Garantia de Minimização (Privacy by Design):</strong> Nossa camada de dados (DataLayer) opera sob sanitização automática rigorosa. Nenhum dado pessoal identificável (PII) — como seu nome, e-mail, telefone ou mensagem de formulário — é encaminhado aos sistemas do Google Analytics ou de terceiros.
            </p>
          </section>

          {/* 4. Finalidades e Bases Legais (LGPD) */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">4. Finalidades do Tratamento e Bases Legais</h2>
            <p>
              O tratamento de seus dados apoia-se nas bases legais estabelecidas pelo Artigo 7º da Lei Federal nº 13.709/2018 (LGPD):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
              <li><strong>Envio de Materiais Educativos e Comunicados Científicos:</strong> Base legal no <em>Consentimento do Titular</em> (Art. 7º, I).</li>
              <li><strong>Resposta a Demandas Comerciais e Pré-Contratuais (Palestras e Projetos):</strong> Base legal na <em>Execução de Contrato ou Procedimentos Preliminares</em> (Art. 7º, V).</li>
              <li><strong>Aprimoramento Contínuo da Experiência Editorial:</strong> Base legal no <em>Legítimo Interesse do Controlador</em> (Art. 7º, IX), sempre respeitando suas liberdades individuais.</li>
            </ul>
          </section>

          {/* 5. Fornecedores e Operadores Terceiros */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">5. Compartilhamento com Fornecedores e Operadores</h2>
            <p>
              Não comercializamos, alugamos ou repassamos seus dados cadastrais para empresas terceiras. O compartilhamento ocorre exclusivamente com prestadores de serviços de infraestrutura tecnológica essenciais à operação:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li><strong>Infraestrutura e Hospedagem Cloud:</strong> Servidores seguros com certificação ISO 27001 e criptografia em trânsito (SSL/TLS).</li>
              <li><strong>Google Tag Manager e Google Analytics 4:</strong> Mensuração agregada de audiência técnica sob a governança do <em>Google Consent Mode v2</em>.</li>
              <li><strong>Plataformas de Disparo de E-mails / Futuro CRM:</strong> Ferramentas autorizadas para envio das newsletters solicitadas (com possibilidade imediata de cancelamento gratuito em 1 clique).</li>
            </ul>
          </section>

          {/* 6. Cookies e Google Consent Mode v2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">6. Governança de Cookies e Consent Mode v2</h2>
            <p>
              Nossa plataforma respeita a sua vontade soberana. Ao ingressar pela primeira vez no site, todas as tags analíticas e de comunicação iniciam com os estados padrão definidos como <strong>negados (denied)</strong>.
            </p>
            <p>
              Apenas cookies estritamente necessários para a navegação, acessibilidade e prevenção de ataques permanecem ativos. Você pode personalizar, aceitar ou revogar cookies opcionais de Analytics e Marketing a qualquer momento clicando no link <Link href="/cookies" className="text-sky-700 underline font-semibold">Política de Cookies</Link> ou no botão disponível no rodapé da plataforma.
            </p>
          </section>

          {/* 7. Publicidade Futura e Remarketing Consentido */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">7. Publicidade Futura e Remarketing Consentido</h2>
            <p>
              Eventuais campanhas de comunicação institucional ou divulgação de turmas de cursos no Google Ads dependem expressamente de sua autorização prévia para cookies da categoria <em>Comunicação & Cursos</em>. Caso você recuse essa categoria, nenhum cookie de remarketing ou identificador de público será ativado em seu navegador.
            </p>
          </section>

          {/* 8. Armazenamento, Segurança e Retenção */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">8. Retenção e Segurança dos Dados</h2>
            <p>
              Seus dados são armazenados em bancos de dados protegidos com criptografia de ponta a ponta e controle estrito de privilégios. Retemos suas informações cadastrais enquanto durar a relação de interesse com os conteúdos técnicos ou até que você solicite sua revogação/exclusão definitiva.
            </p>
          </section>

          {/* 9. Direitos do Titular (Artigo 18 da LGPD) */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">9. Seus Direitos como Titular de Dados</h2>
            <p>
              Conforme o Artigo 18 da LGPD, você possui os seguintes direitos garantidos, exercíveis a qualquer momento de forma simplificada e gratuita:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>Confirmação da existência de tratamento e acesso aos dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviços;</li>
              <li>Revogação imediata do consentimento concedido anteriormente;</li>
              <li>Exclusão definitiva de seu e-mail de nossas listas de comunicação e newsletters.</li>
            </ul>
          </section>

          {/* 10. Contato e Alterações */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">10. Como Exercer seus Direitos e Contato</h2>
            <p>
              Para exercer qualquer um de seus direitos ou esclarecer dúvidas sobre nossas práticas de proteção de dados, encaminhe sua solicitação pelo canal de <Link href="/contato" className="text-sky-700 underline font-semibold">Contato da Plataforma</Link> com o assunto &apos;Encarregado de Dados (LGPD)&apos;.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
