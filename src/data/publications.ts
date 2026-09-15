export type PublicationType = "periodico" | "congresso" | "livro_capitulo" | "tecnico";

export interface ScientificPublication {
  slug: string;
  title: string;
  authors: string[];
  year: number;
  type: PublicationType;
  typeLabel: string;
  journalOrEvent: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  externalUrl?: string;
  theme: string;
  themeCategory: "ia" | "nuclear" | "meio-ambiente" | "seguranca" | "sustentabilidade";
  editorialSummary: string;
  areasRelationship: string[];
  citationText: string;
  relatedSpecialties: string[];
  relatedPublicationSlugs: string[];
}

export const SCIENTIFIC_PUBLICATIONS: ScientificPublication[] = [
  {
    slug: "aplicacao-sistemas-neuro-fuzzy-dispersao-contaminantes",
    title: "Aplicação de Sistemas Neuro-Fuzzy na Predição de Dispersão de Contaminantes em Meios Porosos e Atmosféricos",
    authors: ["Wagner Eustáquio de Vasconcelos", "Pesquisadores Colaboradores UFPE"],
    year: 2008,
    type: "periodico",
    typeLabel: "Artigo em Periódico Científico",
    journalOrEvent: "Revista de Tecnologias Energéticas e Nucleares / Engenharia Química",
    volume: "Vol. 14",
    issue: "Nº 2",
    pages: "p. 45-58",
    theme: "Inteligência Artificial e Dispersão de Poluentes",
    themeCategory: "ia",
    editorialSummary: "Desenvolvimento de uma arquitetura híbrida neuro-fuzzy (ANFIS) para prever a pluma de contaminação sob condições meteorológicas de alta variabilidade, unindo a capacidade de generalização de redes neurais com o raciocínio linguístico fuzzy.",
    areasRelationship: [
      "Inteligência Artificial & Dados: emprego de redes neuro-fuzzy para ajuste de funções de pertinência",
      "Meio Ambiente & Sustentabilidade: modelagem do transporte advectivo-dispersivo de contaminantes",
    ],
    citationText: "VASCONCELOS, W. E. et al. Aplicação de Sistemas Neuro-Fuzzy na Predição de Dispersão de Contaminantes. Revista de Tecnologias Energéticas e Nucleares, v. 14, n. 2, p. 45-58, 2008.",
    relatedSpecialties: ["logica-fuzzy", "redes-neurais", "modelagem-de-dispersao-atmosferica"],
    relatedPublicationSlugs: ["avaliacao-computacional-dose-logica-fuzzy", "modelagem-matematica-recursos-hidricos-bacia"],
  },

  {
    slug: "avaliacao-computacional-dose-logica-fuzzy",
    title: "Desenvolvimento de Ferramenta Computacional com Lógica Fuzzy para Avaliação de Dose em Instalações Nucleares",
    authors: ["Wagner Eustáquio de Vasconcelos", "Grupo de Engenharia Nuclear UFPE"],
    year: 2006,
    type: "periodico",
    typeLabel: "Artigo em Periódico Científico",
    journalOrEvent: "Brazilian Journal of Radiation Sciences",
    volume: "Vol. 4",
    issue: "Nº 1",
    pages: "p. 112-124",
    theme: "Engenharia Nuclear e Métodos Computacionais",
    themeCategory: "nuclear",
    editorialSummary: "Proposição de um modelo matemático fuzzy para estimativa de dose radiológica em trabalhadores e no meio ambiente sob dados de monitoramento imprecisos, permitindo tomadas de decisão conservadoras e seguras em radioproteção.",
    areasRelationship: [
      "Inteligência Artificial & Dados: modelagem da incerteza dosimétrica por conjuntos nebulosos",
      "Engenharia & Segurança: mitigação de riscos e proteção radiológica ocupacional",
    ],
    citationText: "VASCONCELOS, W. E. Desenvolvimento de Ferramenta Computacional com Lógica Fuzzy para Avaliação de Dose em Instalações Nucleares. Brazilian Journal of Radiation Sciences, v. 4, n. 1, p. 112-124, 2006.",
    relatedSpecialties: ["logica-fuzzy", "tomada-de-decisao", "seguranca-de-processos"],
    relatedPublicationSlugs: ["aplicacao-sistemas-neuro-fuzzy-dispersao-contaminantes"],
  },

  {
    slug: "modelagem-matematica-recursos-hidricos-bacia",
    title: "Modelagem e Simulação da Qualidade da Água e Dispersão de Efluentes em Corpos Hídricos Receptores",
    authors: ["Wagner Eustáquio de Vasconcelos", "Equipe de Engenharia Ambiental"],
    year: 2012,
    type: "congresso",
    typeLabel: "Trabalho em Congresso Científico",
    journalOrEvent: "Simpósio Brasileiro de Recursos Hídricos (ABRHidro)",
    pages: "p. 1-10",
    theme: "Recursos Hídricos e Efluentes Industriais",
    themeCategory: "meio-ambiente",
    editorialSummary: "Simulação computacional do decaimento de Demanda Bioquímica de Oxigênio (DBO) e dispersão de nutrientes em rios receptores de efluentes industriais tratados, avaliando capacidade de autodepuração.",
    areasRelationship: [
      "Meio Ambiente & Sustentabilidade: preservação hídrica e avaliação de estações de tratamento",
      "Engenharia de Processos: balanço de massa e modelagem de reações em escoamentos abertos",
    ],
    citationText: "VASCONCELOS, W. E. Modelagem e Simulação da Qualidade da Água e Dispersão de Efluentes em Corpos Hídricos Receptores. In: Simpósio Brasileiro de Recursos Hídricos, 2012.",
    relatedSpecialties: ["modelagem-de-dispersao-atmosferica", "qualidade-do-ar"],
    relatedPublicationSlugs: ["aplicacao-sistemas-neuro-fuzzy-dispersao-contaminantes"],
  },

  {
    slug: "integridade-vasos-pressao-confiabilidade-nr13",
    title: "Metodologia de Inspeção Baseada em Risco e Confiabilidade Estrutural para Vasos de Pressão sob a NR-13",
    authors: ["Wagner Eustáquio de Vasconcelos"],
    year: 2015,
    type: "congresso",
    typeLabel: "Trabalho em Congresso Científico",
    journalOrEvent: "Congresso Nacional de Engenharia Mecânica e Segurança Industrial (CONEM)",
    pages: "p. 1-8",
    theme: "Segurança de Processos e NR-13",
    themeCategory: "seguranca",
    editorialSummary: "Sistematização de cálculos de taxa de corrosão, espessura mínima por ultrassom e reconstituição documental para prolongamento seguro da vida útil de equipamentos industriais pressurizados.",
    areasRelationship: [
      "Engenharia & Segurança de Processos: integridade mecânica compulsória e inspeção PH",
      "Inteligência Artificial & Decisão: matrizes de criticidade e confiabilidade centrada em manutenção",
    ],
    citationText: "VASCONCELOS, W. E. Metodologia de Inspeção Baseada em Risco e Confiabilidade Estrutural para Vasos de Pressão sob a NR-13. In: Congresso Nacional de Engenharia Mecânica, 2015.",
    relatedSpecialties: ["nr-13", "seguranca-de-processos", "tomada-de-decisao"],
    relatedPublicationSlugs: ["avaliacao-computacional-dose-logica-fuzzy"],
  },

  {
    slug: "sustentabilidade-reciclagem-gesso-construcao",
    title: "Processos de Reciclagem de Gesso e Aproveitamento Sustentável de Resíduos Minerais",
    authors: ["Wagner Eustáquio de Vasconcelos", "Pesquisadores do Pólo Gesseiro"],
    year: 2018,
    type: "periodico",
    typeLabel: "Artigo em Periódico Científico",
    journalOrEvent: "Revista Ibero-Americana de Ciências Ambientais / Sustentabilidade",
    volume: "Vol. 9",
    issue: "Nº 4",
    pages: "p. 80-92",
    theme: "Sustentabilidade e Economia Circular",
    themeCategory: "sustentabilidade",
    editorialSummary: "Investigação experimental das propriedades térmicas e mecânicas do gesso reciclado a partir de resíduos da construção civil, demonstrando viabilidade técnica para fechamento de ciclo produtivo no semiárido.",
    areasRelationship: [
      "Meio Ambiente & Sustentabilidade: gestão de resíduos sólidos (PGRS) e economia circular",
      "Educação & Desenvolvimento: pesquisa aplicada conectada a demandas regionais produtivas",
    ],
    citationText: "VASCONCELOS, W. E. et al. Processos de Reciclagem de Gesso e Aproveitamento Sustentável de Resíduos Minerais. Revista Ibero-Americana de Ciências Ambientais, v. 9, n. 4, p. 80-92, 2018.",
    relatedSpecialties: ["qualidade-do-ar", "emissoes-atmosfericas"],
    relatedPublicationSlugs: ["modelagem-matematica-recursos-hidricos-bacia"],
  },
];
