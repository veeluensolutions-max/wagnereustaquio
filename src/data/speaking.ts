export interface SpeakingFormat {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  badge: string;
}

export interface DetailedSpeakingTheme {
  id: string;
  title: string;
  summary: string;
  targetAudience: string[];
  formats: string[];
  objectives: string[];
  topics: string[];
  durationNote: string;
}

export const SPEAKING_FORMATS: SpeakingFormat[] = [
  {
    id: "academicas",
    title: "Palestras Acadêmicas",
    badge: "Universidades & Centros de Pesquisa",
    description: "Apresentações com rigor metodológico para semanas de engenharia, congressos científicos, programas de pós-graduação e simpósios universitários.",
    targetAudience: "Docentes, pesquisadores, estudantes de graduação e pós-graduação em Engenharia e Ciências Exatas.",
  },
  {
    id: "corporativas",
    title: "Palestras Corporativas",
    badge: "Empresas & Indústrias",
    description: "Sessões executivas e imersões técnicas para equipes industriais, lideranças operacionais, comitês de confiabilidade e áreas de EHS.",
    targetAudience: "Engenheiros seniores, gestores industriais, diretores de operações e líderes técnicos.",
  },
  {
    id: "keynotes",
    title: "Keynotes Técnicas",
    badge: "Conferências & Fóruns Setoriais",
    description: "Palestras de abertura e encerramento em congressos nacionais e internacionais de engenharia, meio ambiente e tecnologia industrial.",
    targetAudience: "Comunidade técnica ampliada, tomadores de decisão governamentais e líderes setoriais.",
  },
  {
    id: "paineis",
    title: "Painéis e Mesas-Redondas",
    badge: "Debates & Moderação",
    description: "Participação especializada e mediação em debates sobre transição energética, aplicação de IA ética na indústria e regulamentações ambientais.",
    targetAudience: "Especialistas, reguladores, peritos judiciais e consultores de mercado.",
  },
];

export const DETAILED_SPEAKING_THEMES: DetailedSpeakingTheme[] = [
  {
    id: "ia-aplicada-a-engenharia",
    title: "IA Aplicada à Engenharia",
    summary:
      "Como integrar Inteligência Artificial, redes neurais e aprendizado de máquina em processos reais de engenharia sem recorrer a caixas-pretas ininteligíveis.",
    targetAudience: [
      "Engenheiros de processos, automação e computação",
      "Líderes de inovação técnica e transformação digital na indústria",
      "Estudantes e pesquisadores de pós-graduação",
    ],
    formats: ["Keynote Técnica", "Palestra Corporativa", "Palestra Acadêmica"],
    objectives: [
      "Desmistificar conceitos de IA para profissionais de engenharia clássica",
      "Demonstrar a integração de princípios físicos com algoritmos de machine learning",
      "Apresentar casos práticos de predição de falhas e controle de emissões",
    ],
    topics: [
      "Do cálculo analítico aos algoritmos preditivos",
      "Por que engenheiros precisam entender a matemática por trás dos dados",
      "Redes Neurais em telemetria industrial ruidosa",
      "Casos reais de implementação em processos contínuos",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
  {
    id: "engenharia-tomada-decisao",
    title: "Engenharia e Tomada de Decisão sob Incerteza",
    summary:
      "A Lógica Fuzzy como ferramenta matemática para transformar julgamentos de especialistas e dados imprecisos em decisões quantitativas transparentes.",
    targetAudience: [
      "Gestores industriais e gerentes de risco",
      "Membros de comitês de confiabilidade e manutenção preventiva",
      "Peritos e assistentes técnicos",
    ],
    formats: ["Palestra Corporativa", "Palestra Acadêmica", "Workshop"],
    objectives: [
      "Capacitar líderes a lidar matematicamente com a incerteza de medições",
      "Estruturar matrizes de priorização de investimentos e intervenções de risco",
      "Evitar paralisia decisória em ambientes com dados incompletos",
    ],
    topics: [
      "Limitações da lógica booleana na engenharia do mundo real",
      "Conjuntos nebulosos e funções de pertinência aplicadas",
      "Modelos multicritério para priorização de riscos operacionais",
      "Estudos de caso em alocação de recursos em plantas industriais",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
  {
    id: "seguranca-processos",
    title: "Segurança de Processos e Integridade Operacional",
    summary:
      "Prevenção de acidentes maiores, conformidade com a NR-13 e lições práticas da engenharia de segurança em plantas químicas e energéticas.",
    targetAudience: [
      "Engenheiros de segurança do trabalho e segurança de processos (PSM)",
      "Inspetores de caldeiras e vasos de pressão (PH)",
      "Supervisores de operação e manutenção de plantas químicas",
    ],
    formats: ["Palestra Corporativa", "Keynote Setorial"],
    objectives: [
      "Reforçar a cultura de segurança de processos frente à rotina de produção",
      "Apresentar a metodologia de auditoria de conformidade técnica NR-13",
      "Discutir as causas-raiz de sinistros industriais históricos e medidas preventivas",
    ],
    topics: [
      "Diferença fundamental entre segurança ocupacional e segurança de processos",
      "Gerenciamento de integridade mecânica de vasos e caldeiras",
      "HAZOP: como extrair valor real das análises de perigo",
      "Responsabilidade técnica e ética do engenheiro habilitado",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
  {
    id: "emissoes-atmosfericas",
    title: "Emissões Atmosféricas e Qualidade do Ar",
    summary:
      "O estado da arte na modelagem de dispersão com AERMOD, inventários de emissões e boas práticas em amostragem isocinética em chaminés.",
    targetAudience: [
      "Engenheiros ambientais, sanitaristas e químicos",
      "Consultores ambientais e órgãos de licenciamento",
      "Gerentes de EHS e conformidade legal de indústrias",
    ],
    formats: ["Palestra Técnica", "Palestra Acadêmica", "Painel"],
    objectives: [
      "Esclarecer os fundamentos da dispersão atmosférica e camada limite",
      "Demonstrar a parametrização do modelo AERMOD segundo normas US-EPA e CONAMA",
      "Apresentar a importância da amostragem isocinética representativa",
    ],
    topics: [
      "A evolução dos modelos gaussianos de dispersão atmosférica",
      "Fontes pontuais, de área e o efeito de esteira predial (PRIME)",
      "Interpretação técnica de relatórios perante a Resolução CONAMA 491",
      "Garantia de controle de qualidade (QA/QC) em medições de chaminé",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
  {
    id: "sustentabilidade-industrial",
    title: "Sustentabilidade Industrial e Ecoeficiência Quantitativa",
    summary:
      "A engenharia como motor de eficiência ecológica real através de balanços rigorosos de massa, energia e conservação de recursos hídricos.",
    targetAudience: [
      "Diretorias de sustentabilidade e ESG",
      "Engenheiros de desenvolvimento de processos e utilidades industriais",
      "Comunidade acadêmica de engenharia sustentável",
    ],
    formats: ["Keynote Técnica", "Palestra Corporativa"],
    objectives: [
      "Superar o discurso superficial de ESG com métricas quantitativas de engenharia",
      "Demonstrar o impacto econômico direto da redução de perdas térmicas e de água",
      "Apresentar metodologias de análise de ciclo de vida e inventários técnicos",
    ],
    topics: [
      "Métricas quantitativas vs. retórica de sustentabilidade",
      "Otimização termo-energética de circuitos industriais",
      "Reuso de água e tratamento avançado de efluentes",
      "Descarbonização prática através de eficiência de combustão",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
  {
    id: "modelagem-dados",
    title: "Modelagem Matemática e Ciência de Dados na Indústria",
    summary:
      "Como construir modelos matemáticos consistentes a partir de dados reais de sensores, telemetria e leis da termodinâmica.",
    targetAudience: [
      "Cientistas de dados que atuam no setor industrial",
      "Engenheiros de controle e automação",
      "Pesquisadores de modelagem numérica e simulação",
    ],
    formats: ["Palestra Acadêmica", "Palestra Corporativa"],
    objectives: [
      "Abordar a modelagem híbrida (leis físicas + aprendizado de máquina)",
      "Ensinar o tratamento de dados faltantes e ruidosos em telemetria industrial",
      "Apresentar técnicas de validação de modelos computacionais em engenharia",
    ],
    topics: [
      "Modelos de primeiros princípios vs. modelos empíricos",
      "Engenharia de features com física incorporada",
      "Tratamento de ruídos e calibração de sensores de campo",
      "Validação cruzada em séries temporais de processos contínuos",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
  {
    id: "inovacao-engenharia",
    title: "Inovação em Engenharia: Da Ciência à Aplicação Prática",
    summary:
      "A ponte estratégica e necessária entre a pesquisa científica de excelência e a resolução de gargalos concretos no setor produtivo.",
    targetAudience: [
      "Lideranças acadêmicas e coordenadores de pós-graduação",
      "Gestores de centros de P&D empresariais",
      "Empreendedores de base tecnológica (deep tech)",
    ],
    formats: ["Keynote Magna", "Painel de Discussão"],
    objectives: [
      "Inspirar profissionais e estudantes sobre o impacto real da pós-graduação",
      "Discutir os desafios de transferência de tecnologia no Brasil",
      "Apresentar lições de mais de duas décadas articulando academia e indústria",
    ],
    topics: [
      "O papel da pesquisa aplicada no desenvolvimento industrial brasileiro",
      "Como transformar uma tese de doutorado em soluções de mercado",
      "Parcerias universidade-empresa: barreiras éticas e oportunidades",
      "A mentalidade do engenheiro-pesquisador contemporâneo",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
  {
    id: "educacao-futuro-engenharias",
    title: "Educação e o Futuro das Engenharias",
    summary:
      "As novas competências exigidas do profissional técnico na era da Inteligência Artificial generativa, automação e desafios climáticos globais.",
    targetAudience: [
      "Docentes, coordenadores de cursos de engenharia e reitorias",
      "Estudantes de graduação em busca de direcionamento de carreira",
      "Departamentos de Recursos Humanos e capacitação técnica industrial",
    ],
    formats: ["Palestra Magna Acadêmica", "Mesa-Redonda"],
    objectives: [
      "Debater as mudanças curriculares necessárias para o ensino de engenharia",
      "Analisar o impacto das ferramentas de IA generativa na formação técnica",
      "Incentivar o pensamento crítico, a ética profissional e a multidisciplinaridade",
    ],
    topics: [
      "O que a IA não pode substituir na formação do engenheiro",
      "Metodologias ativas baseadas em problemas reais de campo",
      "A importância da fundamentação matemática rigorosa frente às ferramentas prontas",
      "Formação continuada como imperativo de sobrevivência profissional",
    ],
    durationNote: "Formato e duração definidos conforme o evento.",
  },
];

// Compatibilidade retroativa com código anterior
export const SPEAKING_DATA = {
  headline: "Conhecimento que também pode chegar à sua equipe.",
  description: "Palestras magnas, treinamentos técnicos in-company e workshops personalizados para empresas, indústrias, conselhos técnicos, instituições de ensino superior e conferências setoriais.",
  topics: DETAILED_SPEAKING_THEMES.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.summary,
  })),
  ctaText: "Solicitar palestra ou treinamento",
  ctaHref: "/contato/palestras",
};

export const SPEAKING_EVENTS = [
  {
    id: "seminario-ia-energia-2023",
    title: "Aplicações de Lógica Fuzzy na Tomada de Decisão em Sistemas Energéticos",
    theme: "Inteligência Artificial & Energia",
    event: "Seminário de Tecnologias Energéticas e Nucleares (UFPE)",
    year: "2023",
    type: "Conferência",
    description: "Palestra técnica detalhando como operadores nebulosos e redes neurais ANFIS auxiliam no monitoramento ambiental.",
  },
  {
    id: "forum-seguranca-processos-2022",
    title: "Integridade Mecânica e Desafios de Conformidade da NR-13 na Indústria Química",
    theme: "Segurança de Processos",
    event: "Fórum Regional de Segurança de Processos Industriais",
    year: "2022",
    type: "Palestra Magna",
    description: "Conferência direcionada a engenheiros de planta e responsáveis técnicos sobre reconstituição de prontuários.",
  },
  {
    id: "congresso-ambiental-aermod-2021",
    title: "Modelagem de Dispersão Atmosférica com AERMOD: Do Inventário de Emissões aos Relatórios de Licenciamento",
    theme: "Meio Ambiente & Modelagem",
    event: "Congresso de Engenharia Ambiental e Controle de Emissões",
    year: "2021",
    type: "Conferência",
    description: "Apresentação de metodologia prática de preparação de arquivos meteorológicos com AERMET e parametrização de fontes.",
  },
  {
    id: "workshop-fuzzy-decisao-2019",
    title: "Lógica Fuzzy Aplicada à Gestão de Riscos Operacionais em Ambientes Críticos",
    theme: "Lógica Fuzzy & Decisão",
    event: "Workshop de Métodos Quantitativos e Confiabilidade Industrial",
    year: "2019",
    type: "Treinamento Técnico",
    description: "Mini-curso aplicado com simulações computacionais em Python/MATLAB para profissionais de manutenção e engenharia.",
  },
];
