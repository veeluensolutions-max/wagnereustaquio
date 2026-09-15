export interface CredentialItem {
  id: string;
  degree: string;
  institution: string;
  institutionShort: string;
  period?: string;
  type: "graduation" | "master" | "doctorate" | "postdoc" | "specialization" | "extension";
  description?: string;
  highlightNote?: string;
  isComplementary?: boolean;
}

export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    id: "eng-quimica",
    degree: "Engenharia Química",
    institution: "Universidade Católica de Pernambuco",
    institutionShort: "UNICAP",
    period: "1995 – 2000",
    type: "graduation",
    description: "Formação de base em processos químicos, termodinâmica, operações unitárias e fenômenos de transporte.",
  },
  {
    id: "mestrado-ime",
    degree: "Mestrado em Engenharia Nuclear",
    institution: "Instituto Militar de Engenharia",
    institutionShort: "IME",
    period: "2003 – 2005",
    type: "master",
    description: "Pesquisa aplicada voltada a modelagem computacional e física de reatores e dispersão.",
  },
  {
    id: "doutorado-ufpe",
    degree: "Doutorado em Tecnologias Energéticas e Nucleares",
    institution: "Universidade Federal de Pernambuco",
    institutionShort: "UFPE",
    period: "2005 – 2009",
    type: "doctorate",
    description: "Ênfase em Inteligência Artificial, modelagem matemática, lógica fuzzy e redes neuro-fuzzy aplicadas à tomada de decisão.",
  },
  {
    id: "posdoc-ufpe-ime",
    degree: "Pós-Doutorado",
    institution: "Universidade Federal de Pernambuco e Instituto Militar de Engenharia",
    institutionShort: "UFPE / IME",
    period: "2011 – 2015 / 2026",
    type: "postdoc",
    description: "Aprofundamento de pesquisas em sistemas computacionais avançados e dispersão ambiental.",
  },
  {
    id: "eng-seguranca-usp",
    degree: "Engenharia de Segurança do Trabalho",
    institution: "Universidade de São Paulo",
    institutionShort: "USP",
    type: "specialization",
    description: "Especialização com foco em prevenção de perdas industriais, normas regulamentadoras e gestão de riscos.",
  },
  {
    id: "mit-extension",
    degree: "Formação Complementar em Data Science & Big Data",
    institution: "Massachusetts Institute of Technology",
    institutionShort: "MIT",
    period: "2025",
    type: "extension",
    description: "Programa executivo: Making Data-Driven Decisions (45h de carga horária registrada pelo MIT).",
    highlightNote: "Formação complementar / Extensão executiva",
    isComplementary: true,
  },
];
