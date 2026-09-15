import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getProfilePageSchema } from "@/lib/schema";
import { 
  Bookmark, 
  ExternalLink 
} from "lucide-react";
import BiografiaChaptersNav from "@/components/about/BiografiaChaptersNav";

export const metadata: Metadata = {
  title: "Biografia de Wagner Eustáquio de Vasconcelos",
  description:
    "Conheça a trajetória acadêmica e profissional do Prof. Dr. Wagner Eustáquio de Vasconcelos, da Engenharia à Inteligência Artificial aplicada.",
  alternates: {
    canonical: "/sobre/biografia",
  },
};

export default function BiografiaPage() {
  const profilePageSchema = getProfilePageSchema();

  const chapters = [
    { id: "capitulo-1", number: "01", title: "O início na Engenharia" },
    { id: "capitulo-2", number: "02", title: "Pesquisa e Engenharia Nuclear" },
    { id: "capitulo-3", number: "03", title: "Inteligência Artificial antes do boom" },
    { id: "capitulo-4", number: "04", title: "Docência e formação de engenheiros" },
    { id: "capitulo-5", number: "05", title: "Gestão acadêmica" },
    { id: "capitulo-6", number: "06", title: "Da universidade à indústria" },
    { id: "capitulo-7", number: "07", title: "Dados, inovação e atualização permanente" },
  ];

  return (
    <article className="py-10 sm:py-14 bg-white min-h-screen text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Sobre o Autor", href: "/sobre" },
            { label: "Biografia" },
          ]}
        />

        {/* Cabeçalho Editorial */}
        <header className="py-8 sm:py-12 border-b border-slate-200/80 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-sky-800">
            <Bookmark className="w-3.5 h-3.5" />
            <span>DOCUMENTAÇÃO BIOGRÁFICA OFICIAL</span>
          </div>

          <h1 className="font-heading font-[650] text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-[-0.04em] leading-[1.08]">
            Biografia
          </h1>

          <p className="font-body font-normal text-lg sm:text-xl text-slate-600 leading-[1.6] tracking-[-0.01em] max-w-3xl">
            Da Engenharia Química à Inteligência Artificial aplicada: uma trajetória marcada pela integração entre pesquisa, ensino e prática profissional.
          </p>
        </header>

        {/* Painel de Navegação Rápida entre Capítulos (Desktop e Mobile) */}
        <BiografiaChaptersNav chapters={chapters} />

        {/* Retrato e Síntese de Fatos */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-200/80">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative aspect-[3.4/4] w-full max-w-[280px] rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-200">
              <Image
                src="/images/wagner-vasconcelos.jpg"
                alt="Prof. Dr. Wagner Eustáquio de Vasconcelos"
                fill
                sizes="280px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-800 block">
                Ficha de Referência Factual
              </span>
              <ul className="font-body text-sm text-slate-700 space-y-2 leading-relaxed">
                <li><strong className="font-semibold text-slate-950">Formação de Base:</strong> Engenharia Química — UNICAP (1995–2000)</li>
                <li><strong className="font-semibold text-slate-950">Mestrado:</strong> Engenharia Nuclear — IME (2003–2005)</li>
                <li><strong className="font-semibold text-slate-950">Doutorado:</strong> Tecnologias Energéticas e Nucleares — UFPE (2005–2009)</li>
                <li><strong className="font-semibold text-slate-950">Pós-Doutorados:</strong> UFPE (2011–2015) e IME (2026)</li>
                <li><strong className="font-semibold text-slate-950">Especialização:</strong> Engenharia de Segurança do Trabalho — USP (634h)</li>
                <li><strong className="font-semibold text-slate-950">Formação Complementar:</strong> Data Science & Big Data — MIT (Extensão Executiva 45h, 2025)</li>
              </ul>
              <div className="pt-2">
                <a
                  href="http://lattes.cnpq.br/7844785807954101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 transition-colors"
                >
                  <span>Validado pelo CNPq (Plataforma Lattes Oficial)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* NARRATIVA EM 7 CAPÍTULOS */}
        <div className="py-12 max-w-3xl mx-auto space-y-16">
          
          {/* CAPÍTULO 1 */}
          <section id="capitulo-1" className="scroll-mt-24 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800">
                CAPÍTULO 1
              </span>
              <span className="font-body text-xs text-slate-400 font-medium">1995 – 2000</span>
            </div>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              O início na Engenharia
            </h2>

            <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
              <p>
                A trajetória de Wagner Eustáquio de Vasconcelos tem como alicerce a graduação em <strong>Engenharia Química</strong> pela <em>Universidade Católica de Pernambuco (UNICAP)</em>, concluída no ano 2000. Durante o período formativo, Wagner dedicou-se ao domínio de fenômenos de transporte, termodinâmica aplicada, operações unitárias e cinética química.
              </p>
              <p>
                Ainda durante a graduação, as primeiras experiências em ambientes de laboratório e contato com rotinas industriais despertaram o interesse pela modelagem matemática de processos contínuos e pelo rigor analítico necessário para antecipar desvios operacionais. Esse período consolidou a convicção de que a ciência exata ganha sentido quando traduzida em segurança e eficiência para sistemas produtivos.
              </p>
            </div>
          </section>

          {/* CAPÍTULO 2 */}
          <section id="capitulo-2" className="scroll-mt-24 space-y-5 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800">
                CAPÍTULO 2
              </span>
              <span className="font-body text-xs text-slate-400 font-medium">2003 – 2005</span>
            </div>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Pesquisa e Engenharia Nuclear
            </h2>

            <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
              <p>
                A busca por modelos computacionais e físicos de altíssima exigência técnica conduziu Wagner ao <em>Instituto Militar de Engenharia (IME)</em>, no Rio de Janeiro, onde cursou o <strong>Mestrado em Engenharia Nuclear</strong> entre 2003 e 2005.
              </p>
              <p>
                No IME, suas pesquisas concentraram-se na modelagem física, análise de radionuclídeos e monitoração ambiental. A Engenharia Nuclear exigiu uma imersão profunda em equações diferenciais complexas, simulação computacional de dispersão e análise de confiabilidade de sistemas críticos, estabelecendo as bases metodológicas que acompanhariam toda a sua carreira posterior.
              </p>
            </div>
          </section>

          {/* CAPÍTULO 3 */}
          <section id="capitulo-3" className="scroll-mt-24 space-y-5 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-sky-100 text-sky-900">
                CAPÍTULO 3
              </span>
              <span className="font-body text-xs text-slate-400 font-medium">2005 – 2009</span>
            </div>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Inteligência Artificial antes do boom da IA
            </h2>

            {/* Destaque Editorial Central */}
            <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200/80 my-4">
              <p className="font-heading font-semibold text-lg text-sky-950 leading-snug">
                “A Inteligência Artificial entrou na trajetória de Wagner muito antes de se tornar um fenômeno de mercado.”
              </p>
              <p className="font-body text-xs text-sky-800 mt-2 font-medium">
                Pilar pioneiro desenvolvido no Doutorado em Tecnologias Energéticas e Nucleares (UFPE, 2005–2009).
              </p>
            </div>

            <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
              <p>
                No doutorado pela <em>Universidade Federal de Pernambuco (UFPE)</em>, Wagner desenvolveu a tese intitulada:
              </p>
              <blockquote className="pl-4 border-l-2 border-sky-500 font-heading text-slate-900 font-semibold text-base py-1">
                “Aplicação de Técnicas de Inteligência Artificial na Avaliação da Exposição de Populações de Regiões de Alto Background Natural.”
              </blockquote>
              <p>
                A pesquisa combinou <strong>Lógica Fuzzy</strong>, <strong>Redes Neurais Artificiais</strong> e modelos híbridos <strong>Neuro-Fuzzy</strong> aplicados à avaliação de risco ambiental e auxílio à tomada de decisão. O trabalho demonstrou como algoritmos inteligentes podiam processar incertezas operacionais e dados ambientais complexos com fidelidade superior aos métodos determinísticos convencionais.
              </p>
              <p>
                Explore detalhes técnicos em nosso módulo dedicado à{" "}
                <Link href="/especialidades/inteligencia-artificial" className="text-sky-800 font-semibold underline underline-offset-4 hover:text-sky-950">
                  Inteligência Artificial na Engenharia
                </Link>.
              </p>
            </div>
          </section>

          {/* CAPÍTULO 4 */}
          <section id="capitulo-4" className="scroll-mt-24 space-y-5 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                CAPÍTULO 4
              </span>
              <span className="font-body text-xs text-slate-400 font-medium">2009 em diante</span>
            </div>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Docência e formação de engenheiros
            </h2>

            <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
              <p>
                Paralelamente à pesquisa, a atuação docente tornou-se um pilar contínuo. Como professor do ensino superior, Wagner lecionou em cursos de graduação e pós-graduação em <em>Engenharia Química</em>, <em>Engenharia Ambiental</em> e <em>Engenharia de Produção</em>.
              </p>
              <p>
                Entre as principais disciplinas ministradas ao longo dos anos, destacam-se:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                {[
                  "Modelagem e Simulação de Processos",
                  "Segurança e Confiabilidade Industrial",
                  "Métodos Computacionais Aplicados",
                  "Instrumentação e Controle",
                  "Pesquisa Operacional e Otimização",
                  "Vasos de Pressão e Caldeiras (NR-13)",
                ].map((disc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{disc}</span>
                  </div>
                ))}
              </div>
              <p>
                Essa experiência pedagógica contínua gerou a formação de centenas de engenheiros hoje atuantes no mercado nacional e em centros de pesquisa.
              </p>
            </div>
          </section>

          {/* CAPÍTULO 5 */}
          <section id="capitulo-5" className="scroll-mt-24 space-y-5 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                CAPÍTULO 5
              </span>
              <span className="font-body text-xs text-slate-400 font-medium">Gestão e Liderança</span>
            </div>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Gestão acadêmica
            </h2>

            <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
              <p>
                A liderança de Wagner refletiu-se também na gestão educacional. Ocupou a <strong>coordenação do curso de Engenharia Química</strong>, a <strong>coordenação do curso de Licenciatura em Química</strong> e liderou o programa de pós-graduação lato sensu em <strong>Engenharia de Petróleo e Gás</strong>.
              </p>
              <p>
                Sua atuação incluiu a reestruturação de projetos pedagógicos de cursos (PPC), modernização de matrizes curriculares, implantação de laboratórios práticos e participação ativa em colegiados acadêmicos e comissões avaliativas institucionais.
              </p>
            </div>
          </section>

          {/* CAPÍTULO 6 */}
          <section id="capitulo-6" className="scroll-mt-24 space-y-5 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800">
                CAPÍTULO 6
              </span>
              <span className="font-body text-xs text-slate-400 font-medium">Engenharia Aplicada</span>
            </div>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Da universidade à indústria
            </h2>

            <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
              <p>
                A ponte entre o rigor da academia e a realidade das plantas produtivas consolidou a atuação de Wagner em consultoria técnica especializada e engenharia aplicada. Sua intervenção técnica abrange áreas críticas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Segurança de Processos e NR-13:</strong> Auditorias de conformidade, cálculo de vida útil remanescente e estudos de perigo (HAZOP) para vasos de pressão e caldeiras.</li>
                <li><strong>Engenharia Ambiental e Emissões:</strong> Diagnósticos de fontes fixas, amostragem isocinética e modelagem matemática de dispersão atmosférica via software regulatório <em>AERMOD</em>.</li>
                <li><strong>Sistemas Industriais e Perícias:</strong> Soluções para mitigação de risco catastrófico e melhoria da eficiência energética.</li>
              </ul>
              <p>
                Conheça os projetos e serviços industriais em nossas seções de{" "}
                <Link href="/especialidades/seguranca-de-processos" className="text-sky-800 font-semibold underline underline-offset-4 hover:text-sky-950">
                  Segurança de Processos
                </Link>{" "}
                e{" "}
                <Link href="/especialidades/engenharia-ambiental" className="text-sky-800 font-semibold underline underline-offset-4 hover:text-sky-950">
                  Engenharia Ambiental
                </Link>.
              </p>
            </div>
          </section>

          {/* CAPÍTULO 7 */}
          <section id="capitulo-7" className="scroll-mt-24 space-y-5 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-900">
                CAPÍTULO 7
              </span>
              <span className="font-body text-xs text-slate-400 font-medium">Fronteira Tecnológica</span>
            </div>

            <h2 className="font-heading font-[650] text-2xl sm:text-3xl text-slate-950 tracking-[-0.03em]">
              Dados, inovação e atualização permanente
            </h2>

            <div className="font-body text-base sm:text-lg text-slate-600 leading-[1.75] space-y-4 font-normal tracking-[-0.006em]">
              <p>
                O compromisso com a excelência técnica exige renovação constante de métodos. Wagner obteve as certificações <strong>Green Belt</strong> (2016) e <strong>Black Belt Lean Six Sigma</strong> (2017), incorporando o controle estatístico avançado de processos à resolução de problemas complexos.
              </p>
              <p>
                Em 2025, concluiu a formação executiva complementar em <em>Data Science and Big Data: Making Data-Driven Decisions</em> pelo prestigiado <strong>Massachusetts Institute of Technology (MIT)</strong>, aprofundando o domínio sobre pipelines modernos de dados em larga escala e machine learning aplicado à tomada de decisão executiva.
              </p>
              <p>
                Em 2026, amplia suas fronteiras científicas com novo <strong>Pós-Doutorado no Instituto Militar de Engenharia (IME)</strong>.
              </p>
            </div>

            {/* Fechamento Síntese da Biografia */}
            <div className="mt-8 p-7 rounded-3xl bg-slate-900 text-white space-y-3">
              <p className="font-heading font-semibold text-lg text-white">
                A convergência que define o profissional
              </p>
              <p className="font-body text-sm text-slate-300 leading-relaxed">
                Ao unir Engenharia, Inteligência Artificial, Meio Ambiente, Segurança de Processos e Educação, o Prof. Dr. Wagner Eustáquio de Vasconcelos materializa uma visão única: a de que dados, fórmulas e modelos matemáticos só alcançam seu potencial máximo quando salvaguardam vidas, otimizam recursos e constroem um futuro mais sustentável.
              </p>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-sky-300 font-medium">
                <Link href="/sobre/trajetoria" className="hover:text-white inline-flex items-center gap-1">
                  <span>Ver linha do tempo completa →</span>
                </Link>
                <Link href="/sobre/formacao" className="hover:text-white inline-flex items-center gap-1">
                  <span>Ver titulações acadêmicas →</span>
                </Link>
              </div>
            </div>
          </section>

        </div>

      </div>
    </article>
  );
}
