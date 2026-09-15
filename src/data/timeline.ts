export type TimelineCategory = "academico" | "pesquisa" | "profissional" | "formacao";

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  categories: TimelineCategory[];
  description: string;
  badge?: string;
  isComplementary?: boolean;
}

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "1995 – 2000",
    title: "Engenharia Química",
    institution: "Universidade Católica de Pernambuco (UNICAP)",
    categories: ["formacao"],
    description: "Graduação com imersão em termodinâmica, operações unitárias, processos químicos e modelagem físico-química.",
  },
  {
    year: "1997 – 2000",
    title: "Primeiras experiências em indústria, laboratório e pesquisa",
    institution: "Laboratórios e Ambientes Industriais",
    categories: ["profissional", "pesquisa"],
    description: "Iniciação científica e estágios técnicos, acompanhando rotinas de análise laboratorial e operação de plantas.",
  },
  {
    year: "2001 – 2003",
    title: "Engenharia e pesquisa aplicada",
    institution: "Projetos de Engenharia",
    categories: ["profissional", "pesquisa"],
    description: "Desenvolvimento de rotinas de cálculo, modelagem de processos e resolução de problemas operacionais.",
  },
  {
    year: "2003 – 2005",
    title: "Mestrado em Engenharia Nuclear",
    institution: "Instituto Militar de Engenharia (IME)",
    categories: ["formacao", "pesquisa"],
    badge: "Rigor IME",
    description: "Modelagem computacional, física de reatores, análise de radionuclídeos e monitoramento ambiental em sistemas críticos.",
  },
  {
    year: "2005 – 2009",
    title: "Doutorado em Tecnologias Energéticas e Nucleares",
    institution: "Universidade Federal de Pernambuco (UFPE)",
    categories: ["formacao", "pesquisa"],
    badge: "Pioneirismo em IA",
    description: "Tese com ênfase em Lógica Fuzzy, Redes Neurais Artificiais e modelos Neuro-Fuzzy aplicados à tomada de decisão ambiental.",
  },
  {
    year: "2009+",
    title: "Docência no Ensino Superior",
    institution: "Universidades e Faculdades de Engenharia",
    categories: ["academico"],
    description: "Atuação continuada lecionando Modelagem, Simulação, Fenômenos de Transporte, Pesquisa Operacional e Segurança de Processos.",
  },
  {
    year: "2011 – 2015",
    title: "Pós-Doutorado",
    institution: "Universidade Federal de Pernambuco (UFPE)",
    categories: ["pesquisa", "formacao"],
    description: "Aprofundamento científico em sistemas computacionais avançados e modelos matemáticos de dispersão ambiental.",
  },
  {
    year: "2011 – 2017",
    title: "Gestão acadêmica e coordenação de cursos",
    institution: "Instituições de Ensino Superior",
    categories: ["academico"],
    description: "Coordenação de Engenharia Química, Licenciatura em Química e especialização em Engenharia de Petróleo e Gás.",
  },
  {
    year: "2014+",
    title: "Atuação técnica e projetos industriais",
    institution: "Plantas Industriais e Setor Produtivo",
    categories: ["profissional"],
    description: "Laudos técnicos, auditorias de segurança de processos, conformidade com NR-13 para vasos de pressão e caldeiras.",
  },
  {
    year: "2017",
    title: "Black Belt Lean Six Sigma",
    institution: "Certificação de Especialista",
    categories: ["formacao", "profissional"],
    badge: "Melhoria Contínua",
    description: "Capacitação avançada em controle estatístico multivariado de processos e metodologia DMAIC para otimização de sistemas complexos.",
  },
  {
    year: "2017+",
    title: "Consultoria ambiental e industrial",
    institution: "Atuação Técnica Independente",
    categories: ["profissional"],
    description: "Diagnósticos de emissões atmosféricas, estudos regulatórios de qualidade do ar com AERMOD e mitigação de riscos operacionais.",
  },
  {
    year: "2023+",
    title: "Professor na área de Ciências Médicas / AFYA",
    institution: "AFYA Educacional",
    categories: ["academico"],
    description: "Docência universitária integrando métodos quantitativos e rigor acadêmico, conforme registro oficial no currículo Lattes.",
  },
  {
    year: "2025",
    title: "Data Science & Big Data: Making Data-Driven Decisions",
    institution: "Massachusetts Institute of Technology (MIT)",
    categories: ["formacao"],
    badge: "MIT Executivo (45h)",
    isComplementary: true,
    description: "Formação complementar executiva de 45 horas com foco em análise preditiva, aprendizado de máquina e tomada de decisão estratégica.",
  },
  {
    year: "2026",
    title: "Pós-Doutorado em Engenharia",
    institution: "Instituto Militar de Engenharia (IME)",
    categories: ["pesquisa", "formacao"],
    badge: "Pesquisa de Ponta",
    description: "Nova etapa de investigação pós-doutoral no IME em modelagem computacional avançada e aplicações de engenharia.",
  },
];
