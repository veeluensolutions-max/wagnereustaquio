export interface StatItem {
  id: string;
  number: string;
  label: string;
  sublabel: string;
  legalNote?: string;
}

export const STATS_DATA: StatItem[] = [
  {
    id: "tempo-carreira",
    number: "+25 anos",
    label: "Trajetória contínua",
    sublabel: "de experiência profissional, científica e acadêmica",
  },
  {
    id: "projetos-tecnicos",
    number: "+1.000",
    label: "Projetos técnicos",
    sublabel: "liderados e executados ao longo da carreira",
    legalNote: "Informação declarada no Currículo Lattes do autor.",
  },
  {
    id: "docencia-superior",
    number: "Docência",
    label: "Ensino e formação",
    sublabel: "em diferentes áreas e níveis da Engenharia",
  },
  {
    id: "producao-cientifica",
    number: "Internacional",
    label: "Produção científica",
    sublabel: "artigos, pesquisas e obra publicada em lógica fuzzy e processos",
  },
];
