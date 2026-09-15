export type ResearchCategory =
  | "ia-modelagem"
  | "nuclear"
  | "meio-ambiente"
  | "processos"
  | "sustentabilidade"
  | "automacao";

export interface ResearchProject {
  slug: string;
  title: string;
  category: ResearchCategory;
  categoryLabel: string;
  period: string;
  status: "Concluído" | "Em andamento";
  institution: string;
  objective: string;
  context: string;
  methods: string[];
  practicalApplications: string[];
  participants: string[];
  relatedSpecialties: string[];
  relatedPublicationSlugs: string[];
}

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    slug: "logica-fuzzy-area-nuclear",
    title: "Lógica Fuzzy Aplicada a Problemas da Área Nuclear",
    category: "nuclear",
    categoryLabel: "Engenharia Nuclear",
    period: "2002 – 2006",
    status: "Concluído",
    institution: "Universidade Federal de Pernambuco (UFPE) / CRCN-NE",
    objective: "Desenvolver modelos matemáticos baseados em conjuntos nebulosos para quantificação de incertezas em monitoramento radiológico e proteção em instalações nucleares.",
    context: "Trabalho de pesquisa central vinculado ao Doutorado, pioneiro na aplicação de raciocínio aproximado em cenários de medições ambientais de radionuclídeos.",
    methods: [
      "Modelagem de funções de pertinência triangulares e gaussianas",
      "Sistemas de inferência nebulosa de Mandani e Takagi-Sugeno",
      "Comparação com modelos probabilísticos clássicos de Monte Carlo",
      "Validação com dados reais de monitoramento de campo",
    ],
    practicalApplications: [
      "Avaliação de risco radiológico sob dados ambientais com alta variabilidade",
      "Auxílio à tomada de decisão conservadora em planos de emergência nuclear",
      "Base teórica que originou o livro publicado em 2010",
    ],
    participants: ["Prof. Dr. Wagner Eustáquio de Vasconcelos (Pesquisador Responsável)", "Orientadores e Colaboradores UFPE"],
    relatedSpecialties: ["logica-fuzzy", "tomada-de-decisao"],
    relatedPublicationSlugs: ["avaliacao-computacional-dose-logica-fuzzy"],
  },

  {
    slug: "ferramenta-computacional-ia-avaliacao-dose",
    title: "Desenvolvimento de Ferramenta Computacional Baseada em IA para Avaliação de Dose",
    category: "ia-modelagem",
    categoryLabel: "IA & Modelagem",
    period: "2006 – 2008",
    status: "Concluído",
    institution: "Universidade Federal de Pernambuco (UFPE) / CNPq",
    objective: "Construção de um software acadêmico com algoritmos neuro-fuzzy para automação do cálculo de dose absorvida e dispersão de contaminantes.",
    context: "Projeto desenvolvido durante o período de pós-doutoramento, integrando redes neurais artificiais a interfaces computacionais amigáveis para pesquisadores e técnicos de segurança.",
    methods: [
      "Redes Neuro-Fuzzy adaptativas (ANFIS)",
      "Programação científica em MATLAB e C++",
      "Algoritmos de propagação de erro e ajuste de parâmetros em tempo real",
    ],
    practicalApplications: [
      "Cálculo automatizado de curvas isodósicas em áreas de proteção",
      "Treinamento de operadores em simulação de cenários de dispersão acidental",
    ],
    participants: ["Prof. Dr. Wagner Eustáquio de Vasconcelos (Pesquisador)", "Equipe do Departamento de Energia Nuclear"],
    relatedSpecialties: ["inteligencia-artificial-na-engenharia", "logica-fuzzy", "redes-neurais"],
    relatedPublicationSlugs: ["aplicacao-sistemas-neuro-fuzzy-dispersao-contaminantes", "avaliacao-computacional-dose-logica-fuzzy"],
  },

  {
    slug: "reducao-temperatura-torres-resfriamento",
    title: "Otimização Termodinâmica e Redução de Temperatura em Torres de Resfriamento",
    category: "processos",
    categoryLabel: "Processos Industriais",
    period: "2010 – 2013",
    status: "Concluído",
    institution: "UFPE / Faculdades Integradas",
    objective: "Investigar parâmetros operacionais e transferência simultânea de calor e massa visando maximizar a aproximação térmica (approach) em torres de resfriamento industriais.",
    context: "Projetos de utilidades industriais focados em elevar a eficiência térmica e reduzir o consumo de água de reposição em plantas químicas e sucroenergéticas.",
    methods: [
      "Balanço entálpico rigoroso segundo a teoria de Merkel",
      "Caracterização fluidodinâmica de enchimentos de contato (filme vs. respingo)",
      "Análise psicrométrica contínua da temperatura de bulbo úmido local",
    ],
    practicalApplications: [
      "Redução da temperatura de retorno de água de resfriamento em condensadores industriais",
      "Diminuição das perdas por arraste e evaporação excessiva de água tratada",
      "Aumento da eficiência em turbogeradores a vapor",
    ],
    participants: ["Prof. Dr. Wagner Eustáquio de Vasconcelos (Coordenador)", "Alunos de Graduação em Engenharia Química"],
    relatedSpecialties: ["seguranca-de-processos", "nr-13"],
    relatedPublicationSlugs: ["integridade-vasos-pressao-confiabilidade-nr13"],
  },

  {
    slug: "tecnologias-engenharia-solucoes-industriais-ambientais",
    title: "Tecnologias de Engenharia para Soluções Industriais e Ambientais",
    category: "meio-ambiente",
    categoryLabel: "Meio Ambiente",
    period: "2014 – 2018",
    status: "Concluído",
    institution: "Grupo de Pesquisa CNPq / UNINASSAU / UFPE",
    objective: "Desenvolver e validar diagnósticos práticos em emissões atmosféricas, tratamento de efluentes líquidos e controle de passivos industriais.",
    context: "Linha de pesquisa voltada para transferir o conhecimento gerado em laboratórios acadêmicos diretamente para o atendimento das condicionantes ambientais da indústria.",
    methods: [
      "Campanhas de monitoramento isocinético de chaminés em plantas operacionais",
      "Modelagem computacional de dispersão de poluentes com o software AERMOD",
      "Ensaios laboratoriais de coagulação, floculação e oxidação avançada de efluentes",
    ],
    practicalApplications: [
      "Adequação de indústrias aos limites das Resoluções CONAMA 382, 436 e 491",
      "Dimensionamento de filtros de manga e lavadores de gases de alta eficiência",
      "Estudos de dispersão atmosférica para emissão de Licença de Operação (LO)",
    ],
    participants: ["Prof. Dr. Wagner Eustáquio de Vasconcelos (Líder)", "Corpo Docente e Pesquisadores Parceiros"],
    relatedSpecialties: ["emissoes-atmosfericas", "aermod", "amostragem-isocinetica", "modelagem-de-dispersao-atmosferica"],
    relatedPublicationSlugs: ["modelagem-matematica-recursos-hidricos-bacia"],
  },

  {
    slug: "tecnicas-avancadas-automacao-controle",
    title: "Técnicas Avançadas de Automação e Controle de Processos",
    category: "automacao",
    categoryLabel: "Controle & Automação",
    period: "2016 – 2020",
    status: "Concluído",
    institution: "Laboratório de Engenharia e Controle",
    objective: "Estudo e implementação de controladores PID avançados, controle preditivo baseado em modelo (MPC) e algoritmos de inferência fuzzy para malhas com tempo morto.",
    context: "Investigação da transição entre a instrumentação clássica analógica e sistemas digitais inteligentes de controle contínuo.",
    methods: [
      "Sintonia de controladores preditivos em plantas pilotos",
      "Implementação de controladores lógicos programáveis (CLPs) com blocos fuzzy",
      "Análise de estabilidade pelo critério de Lyapunov e resposta em frequência",
    ],
    practicalApplications: [
      "Estabilização de níveis de caldeiras e controle de pressão em linhas de vapor",
      "Minimização de oscilações em reatores exotérmicos contínuos (CSTR)",
    ],
    participants: ["Prof. Dr. Wagner Eustáquio de Vasconcelos (Pesquisador)", "Alunos de Engenharia de Automação e Química"],
    relatedSpecialties: ["inteligencia-artificial-na-engenharia", "logica-fuzzy", "seguranca-de-processos"],
    relatedPublicationSlugs: ["aplicacao-sistemas-neuro-fuzzy-dispersao-contaminantes"],
  },

  {
    slug: "producao-gesso-reciclavel-sustentabilidade",
    title: "Produção de Gesso Reciclável e Aproveitamento de Resíduos Minerais",
    category: "sustentabilidade",
    categoryLabel: "Sustentabilidade",
    period: "2017 – 2021",
    status: "Concluído",
    institution: "Rede Cooperativa de Pesquisa do Pólo Gesseiro",
    objective: "Pesquisar rotas físico-químicas de calcinação para reincorporação de resíduos de gesso da construção civil em novos insumos comerciais.",
    context: "Solução para um dos principais gargalos de resíduos sólidos da cadeia de construção civil e mineração do semiárido pernambucano.",
    methods: [
      "Caracterização mineralógica por difração de raios-X (DRX) e fluorescência (FRX)",
      "Ensaios de tempo de pega, consistência normal e resistência mecânica à compressão",
      "Análise de ciclo de vida (ACV) e balanço energético da queima de reciclagem",
    ],
    practicalApplications: [
      "Fechamento de ciclo produtivo com redução de extração de gipsita virgem",
      "Elaboração de diretrizes técnicas para Planos de Gerenciamento de Resíduos da Construção Civil",
    ],
    participants: ["Prof. Dr. Wagner Eustáquio de Vasconcelos (Colaborador Técnico)", "Pesquisadores Convidados"],
    relatedSpecialties: ["qualidade-do-ar", "emissoes-atmosfericas"],
    relatedPublicationSlugs: ["sustentabilidade-reciclagem-gesso-construcao"],
  },

  {
    slug: "tomada-decisao-sustentabilidade-ativos",
    title: "Tomada de Decisão Multicritério Aplicada à Sustentabilidade e Gestão de Ativos",
    category: "ia-modelagem",
    categoryLabel: "IA & Modelagem",
    period: "2021 – 2024",
    status: "Concluído",
    institution: "Plataforma de Engenharia e Métodos Decisórios",
    objective: "Desenvolver matrizes integradas de decisão multicritério (Fuzzy-AHP e TOPSIS) para priorização de investimentos em integridade mecânica e compliance ambiental.",
    context: "Estruturação de um framework de tomada de decisão técnica para apoiar comitês industriais de investimento em paradas de fábrica.",
    methods: [
      "Método Analytic Hierarchy Process estendido com números triangulares difusos",
      "Modelagem de árvores de risco operacional e cálculo de taxas de consistência geométrica",
      "Algoritmos de ordenação por distância da solução ideal (TOPSIS)",
    ],
    practicalApplications: [
      "Priorização de intervenções em vasos sob pressão e caldeiras da NR-13",
      "Escolha multicritério entre tecnologias de abatimento de emissões atmosféricas",
      "Alocação racional de verbas de manutenção baseada em risco (RCM/RBI)",
    ],
    participants: ["Prof. Dr. Wagner Eustáquio de Vasconcelos (Coordenador)"],
    relatedSpecialties: ["tomada-de-decisao", "logica-fuzzy", "seguranca-de-processos"],
    relatedPublicationSlugs: ["integridade-vasos-pressao-confiabilidade-nr13"],
  },
];
