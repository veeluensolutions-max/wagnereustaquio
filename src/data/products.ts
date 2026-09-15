export type ProductType = "course" | "ebook" | "tool" | "mentoring" | "training" | "lead_magnet";
export type ProductStatus = "available" | "coming_soon" | "waitlist" | "planned" | "unavailable";
export type ProductTier = "free" | "entry" | "formation" | "premium";

export interface CourseModule {
  number: number;
  title: string;
  description: string;
  topics: string[];
}

export interface Product {
  id: string;
  slug: string;
  type: ProductType;
  title: string;
  headline?: string;
  categoryLabel: string;
  description: string;
  fullDescription?: string;
  tier: ProductTier;
  status: ProductStatus;
  badge?: string;
  highlights: string[];
  ctaText: string;
  checkoutUrl?: string;
  isDevelopment?: boolean;
  price?: string; // Somente quando real (nunca fictício)
  currency?: string;
  modules?: CourseModule[];
  audience?: string[];
  benefits?: string[];
  disclaimer?: string;
  relatedSpecialties?: string[];
  relatedArticles?: string[];
  faq?: { question: string; answer: string }[];
}

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: "cursos",
    slug: "cursos",
    type: "course",
    title: "Cursos Técnicos de Extensão",
    categoryLabel: "Formação Continuada",
    tier: "formation",
    status: "waitlist",
    description: "Formações estruturadas em Engenharia, Inteligência Artificial, Modelagem Matemática e Gestão de Riscos Industriais.",
    highlights: [
      "Metodologia da ciência à aplicação prática",
      "Fundamentação teórica sólida e estudos de caso",
      "Rigor acadêmico e experiência industrial de 20+ anos",
    ],
    ctaText: "Conhecer Cursos",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "ebooks",
    slug: "ebooks",
    type: "ebook",
    title: "E-books e Manuais Técnicos",
    categoryLabel: "Material Didático",
    tier: "entry",
    status: "coming_soon",
    description: "Guias técnicos aprofundados para consulta ágil no dia a dia da engenharia e desenvolvimento de projetos complexos.",
    highlights: [
      "Procedimentos passo a passo de cálculo",
      "Normas técnicas aplicadas e comentadas",
      "Diretrizes para modelagem e conformidade",
    ],
    ctaText: "Ver E-books",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "ferramentas",
    slug: "ferramentas",
    type: "tool",
    title: "Ferramentas & Recursos de Cálculo",
    categoryLabel: "Recursos Práticos",
    tier: "entry",
    status: "coming_soon",
    description: "Planilhas de engenharia, modelos de simulação, checklists de auditoria e scripts analíticos para acelerar sua entrega técnica.",
    highlights: [
      "Templates padronizados e validados",
      "Roteiros práticos de conformidade normativa",
      "Códigos em Python e simuladores interativos",
    ],
    ctaText: "Acessar Ferramentas",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "mentorias",
    slug: "mentorias",
    type: "mentoring",
    title: "Mentorias Técnicas e Profissionais",
    categoryLabel: "Acompanhamento Individual",
    tier: "premium",
    status: "waitlist",
    description: "Acompanhamento direcionado e estratégico para profissionais, consultores e líderes técnicos que enfrentam desafios complexos.",
    highlights: [
      "Discussão direta de casos reais de engenharia",
      "Direcionamento em modelagem, IA e dados",
      "Apoio para estruturação de projetos, perícias e laudos",
    ],
    ctaText: "Manifestar Interesse",
    checkoutUrl: "",
  },
  {
    id: "treinamentos",
    slug: "treinamentos",
    type: "training",
    title: "Treinamentos Corporativos & Palestras",
    categoryLabel: "Soluções In-Company",
    tier: "premium",
    status: "available",
    description: "Programas sob medida para capacitação de equipes de engenharia, segurança de processos e sustentabilidade industrial.",
    highlights: [
      "Treinamentos fechados focados na realidade da planta",
      "Alinhamento com diretrizes de PSM, IA e meio ambiente",
      "Palestra executiva para tomada de decisão técnica",
    ],
    ctaText: "Solicitar Proposta",
    checkoutUrl: "",
  },
];

export const DETAILED_COURSES: Product[] = [
  {
    id: "ia-aplicada-a-engenharia",
    slug: "ia-aplicada-a-engenharia",
    type: "course",
    title: "IA Aplicada à Engenharia",
    headline: "Inteligência Artificial para quem resolve problemas reais.",
    categoryLabel: "Formação Avançada",
    tier: "formation",
    status: "waitlist",
    badge: "EM DESENVOLVIMENTO",
    description:
      "Uma formação para engenheiros e profissionais técnicos que desejam compreender e aplicar IA, lógica fuzzy, redes neurais e análise de dados em situações reais de Engenharia.",
    fullDescription:
      "O avanço da Inteligência Artificial impõe uma exigência urgente ao setor de engenharia: transcender o uso de ferramentas genéricas e construir soluções fundamentadas em modelos matemáticos confiáveis. Conduzido pelo Prof. Dr. Wagner Eustáquio de Vasconcelos — Doutor em Engenharia Nuclear com mais de 20 anos de pesquisa e consultoria industrial —, este programa constrói a ponte definitiva entre a teoria avançada e a resolução de problemas complexos de confiabilidade, processos e meio ambiente.",
    audience: [
      "Engenheiros de processos, produção, química, mecânica, ambiental e computação",
      "Estudantes de pós-graduação e pesquisadores de áreas exatas",
      "Líderes técnicos, gestores operacionais e consultores de engenharia",
      "Profissionais que buscam aplicar análise preditiva sem depender de caixas-pretas obscuras",
    ],
    benefits: [
      "Compreensão profunda dos fundamentos matemáticos da IA sem superficialidades de marketing",
      "Domínio prático de Lógica Fuzzy para sistemas com incerteza e regras especializadas",
      "Implementação de Redes Neurais e modelos preditivos em dados industriais ruidosos",
      "Capacidade de justificar tecnicamente escolhas algorítmicas perante diretorias e órgãos reguladores",
      "Raciocínio estruturado para tomada de decisão multicritério em engenharia",
    ],
    highlights: [
      "Da teoria matemática dos conjuntos fuzzy aos algoritmos preditivos modernos",
      "Modelagem de dados industriais reais sem caixas-pretas ininteligíveis",
      "Estudos de caso em confiabilidade de processos, controle e impacto ambiental",
      "Foco absoluto na resolução de problemas reais de engenharia",
    ],
    ctaText: "Entrar na lista de interesse",
    checkoutUrl: "",
    isDevelopment: true,
    modules: [
      {
        number: 1,
        title: "Fundamentos de Inteligência Artificial",
        description: "Histórico, paradigmas simbólico vs. conexionista, limites éticos e técnicos na engenharia moderna.",
        topics: ["Evolução dos paradigmas de IA", "Machine learning supervisionado e não supervisionado", "Premissas de dados e validação científica"],
      },
      {
        number: 2,
        title: "IA Aplicada à Engenharia",
        description: "Mapeamento de desafios reais na indústria de processos, manufatura e infraestrutura.",
        topics: ["Problemas inversos e modelagem híbrida", "Integração de leis da física com aprendizado de máquina", "Interpretabilidade e auditoria algorítmica"],
      },
      {
        number: 3,
        title: "Lógica Fuzzy e Conjuntos Nebulosos",
        description: "Matemática da incerteza, funções de pertinência, operadores e sistemas de inferência.",
        topics: ["Conjuntos clássicos vs. nebulosos", "Inferência Mamdani e Takagi-Sugeno", "Aplicações em controle e classificação"],
      },
      {
        number: 4,
        title: "Redes Neurais Artificiais",
        description: "Perceptron, redes multicamadas, retropropagação e aproximação universal de funções.",
        topics: ["Arquiteturas feedforward", "Funções de ativação e regularização", "Treinamento com dados reais ruidosos"],
      },
      {
        number: 5,
        title: "Tomada de Decisão sob Incerteza",
        description: "Métodos multicritério, matrizes de decisão fuzzy e priorização de ações de risco.",
        topics: ["Modelos multicritério (AHP e variações fuzzy)", "Ponderação de especialistas", "Análise de sensibilidade"],
      },
      {
        number: 6,
        title: "Aplicações em Processos e Meio Ambiente",
        description: "Estudos de caso em dispersão atmosférica, integridade de equipamentos e monitoramento contínuo.",
        topics: ["Estimativa de emissões atmosféricas por proxy neural", "Diagnóstico precoce de falhas de equipamentos", "Aplicações em dados geoespaciais"],
      },
      {
        number: 7,
        title: "Análise e Tratamento de Dados Industriais",
        description: "Limpeza de ruído em sensores, tratamento de dados faltantes e seleção de variáveis.",
        topics: ["Tratamento de outliers em telemetria industrial", "Engenharia de features com física incorporada", "Validação cruzada temporal"],
      },
      {
        number: 8,
        title: "Projeto Aplicado Integrador",
        description: "Desenvolvimento de um pipeline completo de ponta a ponta focado em um problema real.",
        topics: ["Definição do escopo do problema", "Implementação de modelo e validação", "Documentação técnica executiva"],
      },
    ],
    faq: [
      {
        question: "Para quem é esta formação?",
        answer:
          "Para engenheiros graduados, estudantes em fases finais, consultores e gestores técnicos que precisam aplicar inteligência analítica e modelos computacionais sólidos no ambiente profissional.",
      },
      {
        question: "Preciso ser um programador avançado para acompanhar?",
        answer:
          "Não. O curso abordará a estruturação conceitual, matemática e algorítmica, fornecendo rotinas guiadas em Python e ferramentas acessíveis com foco no raciocínio de engenharia e não na codificação pura.",
      },
      {
        question: "É necessário conhecimento prévio específico em Inteligência Artificial?",
        answer:
          "Não. O módulo introdutório constrói as bases fundamentais desde o zero, partindo da modelagem quantitativa comum à formação de engenharia.",
      },
      {
        question: "O curso já está disponível para acesso imediato?",
        answer:
          "Ainda não. O programa está em fase de estruturação e gravação dos estudos de caso pelo Prof. Wagner. Ao se inscrever na lista de interesse, você receberá atualizações sobre a turma piloto e condições exclusivas de lançamento.",
      },
      {
        question: "O conteúdo dos módulos pode sofrer alterações?",
        answer:
          "Sim. Como o programa está em desenvolvimento ativo, os tópicos podem ser calibrados e expandidos para incorporar os mais recentes avanços e casos industriais práticos antes da estreia.",
      },
    ],
    relatedSpecialties: ["ia-engenharia", "logica-fuzzy", "modelagem-dispersao"],
    relatedArticles: ["inteligencia-artificial-na-engenharia-conceitos-e-aplicacoes", "logica-fuzzy-e-tomada-de-decisao-sob-incerteza-na-industria"],
  },
  {
    id: "introducao-aermod",
    slug: "introducao-aermod",
    type: "course",
    title: "Introdução ao AERMOD",
    headline: "Fundamentos de Modelagem de Dispersão Atmosférica com AERMOD.",
    categoryLabel: "Modelagem Ambiental",
    tier: "formation",
    status: "waitlist",
    badge: "EM DESENVOLVIMENTO",
    description:
      "Capacitação técnica para compreensão dos modelos de dispersão gaussiana regulamentados pela EPA/ABNT, preparação de dados meteorológicos e interpretação de relatórios de impacto da qualidade do ar.",
    fullDescription:
      "A modelagem de dispersão atmosférica com o software AERMOD é a referência internacional exigida por agências ambientais para o licenciamento de complexos industriais, termoelétricas e refinarias. Este curso aborda desde a teoria da camada limite atmosférica até a parametrização do AERMET, AERMAP e análise dos padrões CONAMA 491.",
    audience: [
      "Engenheiros ambientais, químicos e sanitaristas",
      "Consultores de licenciamento e analistas ambientais de indústrias",
      "Peritos judiciais e assistentes técnicos em causas de poluição do ar",
    ],
    benefits: [
      "Domínio dos princípios físicos que regem a dispersão atmosférica de poluentes",
      "Compreensão do fluxo de trabalho AERMET (meteorologia) e AERMAP (topografia)",
      "Interpretação precisa de isolinhas de concentração e conformidade regulatória",
      "Segurança técnica para responder a exigências de órgãos ambientais",
    ],
    highlights: [
      "Alinhamento com diretrizes da US-EPA e Resoluções CONAMA",
      "Tratamento de esteira de edifícios (downwash PRIME)",
      "Análise de fontes pontuais, de área e em linha",
      "Interpretação ética de resultados e limites de incerteza",
    ],
    ctaText: "Entrar na lista de interesse",
    checkoutUrl: "",
    isDevelopment: true,
    modules: [
      {
        number: 1,
        title: "Fundamentos de Dispersão Atmosférica",
        description: "Estrutura da camada limite, turbulência, estabilidade atmosférica e equação gaussiana.",
        topics: ["Meteorologia de dispersão", "Parâmetros micrometeorológicos", "Equação básica de pluma"],
      },
      {
        number: 2,
        title: "Arquitetura do Sistema AERMOD",
        description: "Módulos integrados: AERMOD, AERMET, AERMAP e BPIP.",
        topics: ["Fluxo de arquivos de entrada e saída", "Sistemas de coordenadas e dados de terreno", "Efeito de esteira predial (PRIME)"],
      },
      {
        number: 3,
        title: "Fontes de Emissão e Inventário",
        description: "Parametrização de chaminés, tanques, vias de tráfego e pilhas de estocagem.",
        topics: ["Fontes pontuais, de área e em volume", "Vazão, velocidade de saída e temperatura", "Estimativa de fatores de emissão AP-42"],
      },
      {
        number: 4,
        title: "Avaliação Regulatória e Relatórios",
        description: "Análise de padrões de qualidade do ar conforme CONAMA 491 e geração de laudos técnicos.",
        topics: ["Médias horárias, 24h e anuais", "Determinação de receptores críticos", "Elaboração do relatório técnico de modelagem"],
      },
    ],
    faq: [
      {
        question: "O curso exige licença paga de algum software comercial?",
        answer:
          "Não. O motor de cálculo do AERMOD é de domínio público mantido pela US-EPA. O curso aborda tanto as versões nativas e interfaces gratuitas quanto conceitos aplicáveis a interfaces comerciais como AERMOD View.",
      },
      {
        question: "Quando o curso será disponibilizado?",
        answer:
          "O programa encontra-se em fase de planejamento didático. Cadastre-se na lista de interesse para ser notificado da abertura das inscrições.",
      },
    ],
    relatedSpecialties: ["aermod", "modelagem-dispersao", "emissoes-atmosfericas"],
    relatedArticles: ["aermod-fundamentos-e-boas-praticas-na-modelagem-de-dispersao-atmosferica", "inventario-de-emissoes-atmosfericas-industriais-metodologia-e-conformidade"],
  },
];

export const DETAILED_EBOOKS: Product[] = [
  {
    id: "introducao-ia-engenharia",
    slug: "introducao-ia-engenharia",
    type: "ebook",
    title: "Introdução à IA Aplicada à Engenharia",
    categoryLabel: "Inteligência Artificial",
    tier: "entry",
    status: "coming_soon",
    badge: "EM PRODUÇÃO",
    description: "Um manual conciso com conceitos, algoritmos essenciais e roteiro de implementação prática de inteligência de dados na engenharia.",
    highlights: ["Conceitos matemáticos desmistificados", "Guia de bibliotecas e ferramentas", "Estudos de caso reais de aplicação"],
    ctaText: "Receber aviso de lançamento",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "fundamentos-logica-fuzzy",
    slug: "fundamentos-logica-fuzzy",
    type: "ebook",
    title: "Fundamentos da Lógica Fuzzy na Tomada de Decisão",
    categoryLabel: "Sistemas Nebulosos",
    tier: "entry",
    status: "coming_soon",
    badge: "EM PRODUÇÃO",
    description: "Guia prático sobre teoria de conjuntos nebulosos, modelagem de incertezas e construção de controladores fuzzy industriais.",
    highlights: ["Funções de pertinência passo a passo", "Exemplos comentados em Python", "Aplicações em confiabilidade e meio ambiente"],
    ctaText: "Receber aviso de lançamento",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "introducao-modelagem-dispersao-aermod",
    slug: "introducao-modelagem-dispersao-aermod",
    type: "ebook",
    title: "Introdução à Modelagem de Dispersão com AERMOD",
    categoryLabel: "Engenharia Ambiental",
    tier: "entry",
    status: "planned",
    badge: "PLANEJADO",
    description: "Manual de consulta rápida para engenheiros ambientais sobre preparação de arquivos meteorológicos, topografia e execução do AERMOD.",
    highlights: ["Roteiro de conformidade CONAMA 491", "Checklist de dados meteorológicos", "Interpretação de isolinhas de concentração"],
    ctaText: "Manifestar interesse",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "guia-emissoes-atmosfericas",
    slug: "guia-emissoes-atmosfericas",
    type: "ebook",
    title: "Guia de Emissões Atmosféricas e Amostragem Isocinética",
    categoryLabel: "Qualidade do Ar",
    tier: "entry",
    status: "planned",
    badge: "PLANEJADO",
    description: "Procedimentos de medição, equações de balanço de massa, requisitos de dutos e boas práticas para campanhas de monitoramento em chaminés.",
    highlights: ["Critério de variação isocinética", "Cálculo de vazão e massa emitida", "Modelos de laudos conforme ABNT NBR 10701"],
    ctaText: "Manifestar interesse",
    checkoutUrl: "",
    isDevelopment: true,
  },
];

export const DETAILED_TOOLS: Product[] = [
  {
    id: "kit-pratico-nr-13",
    slug: "kit-pratico-nr-13",
    type: "tool",
    title: "Kit Prático NR-13",
    categoryLabel: "Segurança de Processos",
    tier: "entry",
    status: "planned",
    badge: "PLANEJADO",
    description: "Conjunto de checklists padronizados, modelos de prontuários e roteiros para inspeção de caldeiras, vasos de pressão e tubulações.",
    disclaimer: "Materiais auxiliares não substituem análise técnica, responsabilidade profissional habilitada ou consulta minuciosa à norma regulamentadora vigente.",
    highlights: [
      "Checklists operacionais de campo",
      "Modelos de registro de integridade mecânica",
      "Diretrizes para cálculo de espessura mínima e PMTA",
    ],
    ctaText: "Manifestar interesse",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "planilha-apoio-modelagem",
    slug: "planilha-apoio-modelagem",
    type: "tool",
    title: "Planilha de Apoio à Modelagem e Conversão de Emissões",
    categoryLabel: "Engenharia Ambiental",
    tier: "entry",
    status: "planned",
    badge: "PLANEJADO",
    description: "Planilha automatizada para conversão de unidades (g/s, mg/Nm³, kg/h), correção por oxigênio de referência e cálculo de vazão normalizada.",
    highlights: ["Fórmulas automáticas e travadas para segurança", "Tabelas de fatores de conversão regulatórios", "Validação de limites CONAMA"],
    ctaText: "Manifestar interesse",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "checklist-emissoes-atmosfericas",
    slug: "checklist-emissoes-atmosfericas",
    type: "tool",
    title: "Checklist de Auditoria de Emissões Atmosféricas",
    categoryLabel: "Gestão Ambiental",
    tier: "entry",
    status: "planned",
    badge: "PLANEJADO",
    description: "Roteiro de verificação para auditorias internas de conformidade legal de fontes de poluição do ar e sistemas de despoeiramento.",
    highlights: ["Verificação de licenças e condicionantes", "Roteiro de inspeção de lavadores e filtros de manga", "Plano de ação corretiva"],
    ctaText: "Manifestar interesse",
    checkoutUrl: "",
    isDevelopment: true,
  },
  {
    id: "script-decisao-multicriterio-fuzzy",
    slug: "script-decisao-multicriterio-fuzzy",
    type: "tool",
    title: "Script em Python para Decisão Multicritério Fuzzy",
    categoryLabel: "Inteligência Artificial",
    tier: "entry",
    status: "coming_soon",
    badge: "EM VALIDAÇÃO",
    description: "Código documentado em Python / Jupyter Notebook para priorização de intervenções e ranking técnico de risco sob dados imprecisos.",
    highlights: ["Compatível com Google Colab", "Funções de pertinência configuráveis", "Relatório de sensibilidade exportável"],
    ctaText: "Receber aviso de lançamento",
    checkoutUrl: "",
    isDevelopment: true,
  },
];

export const DETAILED_MENTORINGS: Product[] = [
  {
    id: "mentoria-tecnica",
    slug: "mentoria-tecnica",
    type: "mentoring",
    title: "Mentoria Técnica",
    categoryLabel: "Acompanhamento Especializado",
    tier: "premium",
    status: "waitlist",
    badge: "VAGAS LIMITADAS",
    description: "Acompanhamento individual direto com o Prof. Dr. Wagner Eustáquio para desenvolvimento e resolução de problemas técnicos complexos.",
    fullDescription:
      "A Mentoria Técnica destina-se a engenheiros seniores, consultores e líderes de projetos que precisam de suporte aprofundado na modelagem matemática de processos industriais, aplicação de algoritmos de inteligência artificial, dispersão de poluentes com AERMOD ou implantação de programas de segurança de processos e integridade física de plantas.",
    audience: [
      "Engenheiros e consultores técnicos responsáveis por laudos ou projetos críticos",
      "Pesquisadores desenvolvendo dissertações ou teses com aplicação industrial",
      "Líderes de inovação técnica buscando validação de métodos quantitativos",
    ],
    benefits: [
      "Sessões individuais focadas exclusivamente no seu projeto real",
      "Revisão técnica de cálculos, premissas de modelagem e códigos",
      "Rigor científico garantido com respaldo de 20+ anos de experiência acadêmica",
      "Canal de suporte direto durante o período da mentoria",
    ],
    highlights: [
      "Foco em IA aplicada, Lógica Fuzzy e Redes Neurais",
      "Parametrização avançada de modelos de dispersão e inventários de emissões",
      "Segurança de Processos e conformidade com NR-13",
      "Tomada de decisão sob incerteza e métodos multicritério",
    ],
    ctaText: "Manifestar interesse",
    checkoutUrl: "",
  },
  {
    id: "mentoria-profissional",
    slug: "mentoria-profissional",
    type: "mentoring",
    title: "Mentoria Profissional",
    categoryLabel: "Desenvolvimento de Carreira Técnica",
    tier: "premium",
    status: "waitlist",
    badge: "VAGAS LIMITADAS",
    description: "Orientação estratégica para transição de carreira, posicionamento no mercado de consultoria e estruturação de autoridade técnica.",
    fullDescription:
      "A Mentoria Profissional é indicada para engenheiros e especialistas que desejam acelerar sua transição para o mercado de consultoria de alto valor, atuar como peritos judiciais ou estabelecer um posicionamento profissional reconhecido pela excelência técnica e ética.",
    audience: [
      "Engenheiros buscando transição do regime corporativo para consultoria autônoma",
      "Profissionais interessados em atuar como peritos e assistentes técnicos judiciais",
      "Docentes e pesquisadores estruturando parcerias com o setor industrial",
    ],
    benefits: [
      "Mapeamento do seu portfólio de competências e nichos de mercado",
      "Diretrizes para precificação, propostas técnicas e contratos periciais",
      "Construção de autoridade técnica e reputação ética sustentável",
      "Visão pragmática do mercado de consultoria em engenharia no Brasil",
    ],
    highlights: [
      "Carreira e posicionamento profissional",
      "Transição para consultoria e perícias judiciais",
      "Estruturação de propostas e abordagem de clientes industriais",
      "Alinhamento entre pesquisa acadêmica e valor corporativo",
    ],
    ctaText: "Manifestar interesse",
    checkoutUrl: "",
  },
];

export const DETAILED_TRAININGS: Product[] = [
  {
    id: "treinamentos-corporativos",
    slug: "treinamentos-corporativos",
    type: "training",
    title: "Treinamentos Corporativos In-Company",
    headline: "Conhecimento técnico para equipes que precisam tomar melhores decisões.",
    categoryLabel: "Capacitação Empresarial",
    tier: "premium",
    status: "available",
    description: "Programas personalizados para capacitar equipes industriais em tomada de decisão técnica, inteligência artificial, dispersão atmosférica e segurança de processos.",
    fullDescription:
      "Empresas líderes demandam equipes técnicas capazes de fundamentar suas decisões em dados sólidos e métodos científicos testados. O Prof. Dr. Wagner Eustáquio conduz treinamentos fechados e imersões presenciais ou remotas, customizados conforme os gargalos operacionais e metas estratégicas da organização.",
    audience: [
      "Equipes de engenharia de processos, automação e manutenção industrial",
      "Departamentos de meio ambiente, sustentabilidade e EHS",
      "Gerências industriais e comitês de confiabilidade e segurança de processos",
    ],
    benefits: [
      "Capacitação técnica alinhada com as normas nacionais e internacionais vigentes",
      "Estudos de caso desenvolvidos a partir dos próprios dados e processos da empresa",
      "Exercícios práticos de resolução de problemas com acompanhamento do instrutor",
      "Elevação da maturidade técnica e capacidade de defesa regulatória da equipe",
    ],
    highlights: [
      "Inteligência Artificial e análise de dados aplicadas à engenharia",
      "Segurança de Processos e Gestão de Riscos (PSM / NR-13)",
      "Emissões Atmosféricas, Amostragem e Modelagem de Dispersão",
      "Sustentabilidade e Tomada de Decisão Multicritério",
    ],
    ctaText: "Solicitar proposta de treinamento",
    checkoutUrl: "",
  },
];

export const LEAD_MAGNET_7_APLICACOES: Product = {
  id: "7-aplicacoes-ia-engenharia",
  slug: "7-aplicacoes-ia-engenharia",
  type: "lead_magnet",
  title: "7 Aplicações Práticas de IA na Engenharia",
  headline: "7 aplicações práticas de Inteligência Artificial que todo engenheiro deveria conhecer.",
  categoryLabel: "Guia Técnico Gratuito",
  tier: "free",
  status: "coming_soon",
  badge: "EM DESENVOLVIMENTO",
  description:
    "Um compêndio prático que demonstra onde e como a Inteligência Artificial, Lógica Fuzzy e Redes Neurais geram ganhos reais de confiabilidade, segurança e eficiência no setor industrial.",
  fullDescription:
    "Muito se fala sobre Inteligência Artificial, mas poucos materiais explicam sua utilidade concreta na rotina de engenharia sem abstrações superficiais. Este guia sintetiza 7 cenários reais de aplicação técnica na indústria de processos, inspeção mecânica e gestão de impacto ambiental.",
  highlights: [
    "Detecção precoce de falhas em equipamentos dinâmicos",
    "Modelagem preditiva de emissões atmosféricas por redes neurais",
    "Sistemas de inferência fuzzy para controle de plantas químicas",
    "Priorização multicritério de intervenções de manutenção",
    "Redução de falsos alarmes em salas de controle",
    "Otimização de eficiência energética com regressão não-linear",
    "Reconstituição de variáveis de processo perdidas por falha de sensores",
  ],
  ctaText: "Garantir meu exemplar no lançamento",
  checkoutUrl: "",
  isDevelopment: true,
};

export const FEATURED_COURSE_IN_DEVELOPMENT: Product = DETAILED_COURSES[0];

export function getProductBySlug(slug: string): Product | undefined {
  const all = [
    ...DETAILED_COURSES,
    ...DETAILED_EBOOKS,
    ...DETAILED_TOOLS,
    ...DETAILED_MENTORINGS,
    ...DETAILED_TRAININGS,
    LEAD_MAGNET_7_APLICACOES,
  ];
  return all.find((p) => p.slug === slug);
}
