export interface AuthorityArea {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  topics: string[];
  ctaText: string;
  ctaHref: string;
  iconName: string;
}

export const AUTHORITY_AREAS: AuthorityArea[] = [
  {
    id: "ia-dados",
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial & Dados",
    shortTitle: "IA & Dados",
    tagline: "Métodos computacionais e sistemas inteligentes para engenharia",
    description: "Lógica fuzzy, redes neurais, Data Science, Big Data, métodos computacionais e inteligência aplicada à tomada de decisão técnica e operacional.",
    topics: [
      "Lógica Fuzzy",
      "Redes Neurais Artificiais",
      "Data Science & Big Data",
      "Python & MATLAB",
      "Modelagem Computacional",
      "Sistemas de Suporte à Decisão",
    ],
    ctaText: "Explorar Inteligência Artificial",
    ctaHref: "/areas-de-conhecimento/inteligencia-artificial",
    iconName: "Cpu",
  },
  {
    id: "eng-seguranca",
    slug: "engenharia-e-seguranca-de-processos",
    title: "Engenharia & Segurança de Processos",
    shortTitle: "Segurança de Processos",
    tagline: "Integridade de ativos, análise de riscos e conformidade industrial",
    description: "Segurança industrial, confiabilidade operacional, HAZOP, NR-13, inspeções técnicas, caldeiras, vasos de pressão e gestão avançada de riscos de processo.",
    topics: [
      "HAZOP & Análise de Riscos",
      "NR-13 (Caldeiras e Vasos de Pressão)",
      "Segurança de Processos Industriais",
      "Confiabilidade & Integridade Estrutural",
      "Inspeções Técnicas de Equipamentos",
      "Prevenção de Falhas Críticas",
    ],
    ctaText: "Explorar Segurança de Processos",
    ctaHref: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
    iconName: "ShieldAlert",
  },
  {
    id: "meio-ambiente",
    slug: "meio-ambiente-e-sustentabilidade",
    title: "Meio Ambiente & Sustentabilidade",
    shortTitle: "Meio Ambiente",
    tagline: "Diagnóstico ambiental, modelagem de dispersão e controle de emissões",
    description: "Emissões atmosféricas, amostragem isocinética, qualidade do ar, modelagem matemática com AERMOD, gestão de recursos hídricos, efluentes e sustentabilidade industrial.",
    topics: [
      "Emissões Atmosféricas",
      "Amostragem Isocinética (Chaminés)",
      "Modelagem de Dispersão AERMOD",
      "Qualidade do Ar & Material Particulado",
      "Recursos Hídricos & ETE",
      "ESG & Conformidade Ambiental",
    ],
    ctaText: "Explorar Meio Ambiente",
    ctaHref: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
    iconName: "Leaf",
  },
  {
    id: "educacao-desenvolvimento",
    slug: "educacao-e-desenvolvimento",
    title: "Educação & Desenvolvimento Profissional",
    shortTitle: "Educação & Docência",
    tagline: "Formação técnica de excelência e transferência contínua de conhecimento",
    description: "Ensino superior, pesquisa científica aplicada, gestão acadêmica, metodologias Lean Six Sigma e formação contínua de profissionais e líderes de Engenharia.",
    topics: [
      "Docência no Ensino Superior",
      "Pesquisa Científica Aplicada",
      "Gestão Acadêmica & Coordenação",
      "Lean Six Sigma",
      "Ensino de Engenharia",
      "Mentoria Técnica de Carreira",
    ],
    ctaText: "Explorar Educação",
    ctaHref: "/areas-de-conhecimento/educacao-e-desenvolvimento",
    iconName: "GraduationCap",
  },
];
