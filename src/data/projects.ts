export type ProjectTheme =
  | "Inteligência Artificial"
  | "Engenharia"
  | "Segurança de Processos"
  | "Meio Ambiente"
  | "Emissões Atmosféricas"
  | "Modelagem"
  | "Pesquisa"
  | "Sustentabilidade";

export interface DetailedProject {
  id: string;
  slug: string;
  title: string;
  theme: ProjectTheme;
  year: string;
  type: "Consultoria Industrial" | "Pesquisa Aplicada" | "Perícia Técnica" | "P&D Institucional";
  summary: string;
  context: string;
  objective: string;
  challenge: string;
  approach: string[];
  results?: string[];
  sector: string;
  relatedSpecialties: string[];
  relatedPublications?: string[];
}

export const PROJECT_THEMES: ProjectTheme[] = [
  "Inteligência Artificial",
  "Engenharia",
  "Segurança de Processos",
  "Meio Ambiente",
  "Emissões Atmosféricas",
  "Modelagem",
  "Pesquisa",
  "Sustentabilidade",
];

export const INDUSTRY_SECTORS = [
  { name: "Alimentos & Bebidas", desc: "Controle de emissões, caldeiras e conformidade ambiental" },
  { name: "Química & Petroquímica", desc: "Segurança de processos, HAZOP e inventários atmosféricos" },
  { name: "Papel & Celulose", desc: "Amostragem em chaminés e modelagem de dispersão" },
  { name: "Mineração", desc: "Material particulado e gestão de poeiras fugitivas" },
  { name: "Energia & Termelétricas", desc: "Dispersão de gases de combustão e sistemas neuro-fuzzy" },
  { name: "Construção & Minerais", desc: "Qualidade do ar e integridade estrutural mecânica" },
  { name: "Saúde & Farmacêutica", desc: "Proteção radiológica e modelagem de efluentes" },
  { name: "Saneamento & Água", desc: "Modelagem matemática de bacias e eficiência de ETEs" },
  { name: "Infraestrutura Industrial", desc: "Auditorias NR-13 e perícias judiciais de engenharia" },
];

export const DETAILED_PROJECTS: DetailedProject[] = [
  {
    id: "aermod-complexo-industrial",
    slug: "modelagem-dispersao-aermod-complexo-industrial",
    title: "Modelagem de Dispersão Atmosférica com AERMOD em Polo Industrial",
    theme: "Emissões Atmosféricas",
    year: "2021 - 2023",
    type: "Consultoria Industrial",
    summary:
      "Avaliação de impacto de emissões gasosas e material particulado através da modelagem AERMOD com integração de dados meteorológicos de superfície e altitude para renovação de licença ambiental.",
    context:
      "Complexo industrial de grande porte com múltiplas fontes pontuais (chaminés) e de área, demandando diagnóstico preciso para atender às exigências da Resolução CONAMA 491.",
    objective:
      "Determinar o campo de concentrações máximas no solo para SO₂, NOx e PTS, identificando receptores críticos e o efeito de esteira provocado pelos edifícios da planta (algoritmo PRIME).",
    challenge:
      "Topografia complexa e regime micrometeorológico costeiro com variações abruptas de camada limite e brisa marítima.",
    approach: [
      "Pré-processamento meteorológico via AERMET com estações de superfície e dados de sondagem de altitude",
      "Processamento de dados topográficos de alta resolução via AERMAP",
      "Simulação de esteira predial utilizando o pré-processador BPIP-PRIME",
      "Calibração de pluma e geração de isolinhas de concentração para médias horárias, diárias e anuais",
    ],
    results: [
      "Comprovação de conformidade dos níveis de qualidade do ar nos limites do empreendimento",
      "Identificação das três chaminés com maior contribuição de pico, viabilizando ajustes operacionais seletivos",
      "Aprovação do Estudo de Dispersão Atmosférica pelo órgão ambiental competente sem ressalvas",
    ],
    sector: "Química & Petroquímica",
    relatedSpecialties: ["aermod", "modelagem-dispersao", "emissoes-atmosfericas"],
    relatedPublications: ["aplicacao-sistemas-neuro-fuzzy-dispersao-contaminantes"],
  },
  {
    id: "ia-fuzzy-priorizacao-riscos",
    slug: "sistema-fuzzy-tomada-decisao-manutencao-industrial",
    title: "Sistema Baseado em Lógica Fuzzy para Tomada de Decisão em Manutenção Crítica",
    theme: "Inteligência Artificial",
    year: "2018 - 2021",
    type: "Pesquisa Aplicada",
    summary:
      "Desenvolvimento de modelo de inferência nebulosa multicritério para ranqueamento de intervenções preventivas em equipamentos sob dados ruidosos e incerteza de inspeção.",
    context:
      "Plantas operando em regime contínuo onde paradas não programadas geram perdas financeiras severas e riscos de segurança de processos.",
    objective:
      "Construir um motor de inferência difusa capaz de converter avaliações qualitativas de campo e medições instrumentais em um índice quantitativo de criticidade mecânica.",
    challenge:
      "Heterogeneidade dos dados de histórico de falhas e discordâncias na ponderação subjetiva entre equipes de operação e manutenção.",
    approach: [
      "Mapeamento de variáveis de entrada: taxa de corrosão, tempo de operação, temperatura e histórico de vibração",
      "Modelagem de funções de pertinência triangulares e trapezoidais com base em heurística de especialistas",
      "Construção de base com mais de 60 regras de inferência Mamdani",
      "Desfuzzificação pelo método do centroide (COA) com análise de sensibilidade paramétrica",
    ],
    results: [
      "Redução estimada de 35% na incerteza de priorização de intervenções mecânicas",
      "Eliminação de divergências entre equipes operacionais através de critérios matemáticos transparentes",
      "Publicação de trabalhos técnicos correlatos em congressos nacionais de engenharia",
    ],
    sector: "Energia & Termelétricas",
    relatedSpecialties: ["logica-fuzzy", "ia-engenharia", "tomada-decisao"],
    relatedPublications: ["avaliacao-computacional-dose-logica-fuzzy"],
  },
  {
    id: "inspecao-nr13-vasos-caldeiras",
    slug: "auditoria-e-integridade-estrutural-nr-13",
    title: "Auditoria de Conformidade e Gestão de Integridade Mecânica NR-13",
    theme: "Segurança de Processos",
    year: "2019 - 2024",
    type: "Consultoria Industrial",
    summary:
      "Inspeção periódica de segurança, reconstituição de prontuários técnicos, cálculo de Pressão Máxima de Trabalho Admissível (PMTA) e testes não destrutivos em vasos de pressão e caldeiras.",
    context:
      "Parque industrial com caldeiras de biomassa e gás e mais de 80 vasos de pressão necessitando de recertificação para atendimento à NR-13 do Ministério do Trabalho.",
    objective:
      "Garantir a integridade física dos equipamentos, prevenir sinistros com fluidos perigosos e emitir laudos técnicos de inspeção com ART.",
    challenge:
      "Equipamentos antigos sem documentação original do fabricante (prontuário inexistente) e histórico incompleto de intervenções de soldagem.",
    approach: [
      "Inspeção visual interna e externa detalhada com medição de espessura por ultrassom",
      "Reconstituição de prontuário baseada no código ASME Seção VIII Divisão 1",
      "Cálculo de taxa de corrosão histórica e estimativa de vida útil residual",
      "Calibração e teste de abertura de válvulas de segurança (PSV) em bancada certificada",
    ],
    results: [
      "Emissão de mais de 80 relatórios conclusivos com recomendações de reparo executadas com sucesso",
      "Regularização total do parque industrial perante fiscalização e auditorias de seguradoras",
      "Zero acidentes com vasos de pressão durante o ciclo de inspeção",
    ],
    sector: "Alimentos & Bebidas",
    relatedSpecialties: ["nr-13", "seguranca-processos"],
  },
  {
    id: "amostragem-isocinetica-chamines",
    slug: "campanhas-amostragem-isocinetica-qualidade-ar",
    title: "Campanhas de Amostragem Isocinética de Poluentes em Fontes Estacionárias",
    theme: "Meio Ambiente",
    year: "2016 - 2022",
    type: "Consultoria Industrial",
    summary:
      "Determinação experimental de vazão, umidade dos gases, concentração e taxa de emissão de material particulado e gases em dutos de exaustão e chaminés fabris.",
    context:
      "Exigência de monitoramento periódico de condicionantes ambientais para verificação de limites de emissão estipulados em licença de operação (LO).",
    objective:
      "Realizar coletas de amostras representativas dos efluentes gasosos assegurando a condição isocinética rigorosa (90% a 110%).",
    challenge:
      "Dutos em altura elevada com escoamento turbulento e presença de curvas a montante dos pontos de amostragem.",
    approach: [
      "Determinação do número e localização dos pontos de amostragem conforme ABNT NBR 10701",
      "Levantamento de perfil de velocidade e pressão dinâmica com tubo de Pitot tipo S calibrado",
      "Coleta isocinética com trem amostrador calibrado e sonda aquecida",
      "Determinação gravimétrica da massa de material particulado em laboratório com balança analítica",
    ],
    results: [
      "Garantia de índices isocinéticos estritamente dentro da faixa regulamentar em 100% das baterias de ensaios",
      "Relatórios técnicos de balanço de massa aceitos pelos órgãos estaduais de controle ambiental",
      "Diagnóstico que subsidiou o redimensionamento de filtros de manga e lavadores de gases",
    ],
    sector: "Papel & Celulose",
    relatedSpecialties: ["amostragem-isocinetica", "emissoes-atmosfericas"],
  },
  {
    id: "modelagem-bacia-hidrica",
    slug: "modelagem-matematica-qualidade-agua-bacia-hidrografica",
    title: "Modelagem Matemática da Qualidade de Água e Capacidade de Autodepuração",
    theme: "Modelagem",
    year: "2012 - 2016",
    type: "Pesquisa Aplicada",
    summary:
      "Aplicação de equações diferenciais de transporte e modelo Streeter-Phelps para simulação de oxigênio dissolvido (OD) e demanda bioquímica de oxigênio (DBO) em corpo hídrico receptor.",
    context:
      "Bacia hidrográfica sob pressão antrópica e despejo de efluentes industriais e urbanos.",
    objective:
      "Modelar a capacidade de autodepuração do rio e estabelecer limites máximos de carga poluidora admissível.",
    challenge:
      "Sazonalidade extrema da vazão hidrológica e escassez de dados históricos de monitoramento contínuo.",
    approach: [
      "Calibração de coeficientes de desoxigenação (K1) e reaeração superficial (K2)",
      "Segmentação do curso d'água em trechos hidraulicamente homogêneos",
      "Simulação numérica de perfis de concentração de OD em cenários de estiagem crítica",
    ],
    results: [
      "Determinação do ponto crítico da curva de decaimento de oxigênio dissolvido",
      "Subsídio técnico para definição de metas de outorga de lançamento de efluentes",
      "Publicação de artigo científico em periódico especializado da área",
    ],
    sector: "Saneamento & Água",
    relatedSpecialties: ["recursos-hidricos", "modelagem-matematica"],
    relatedPublications: ["modelagem-matematica-recursos-hidricos-bacia"],
  },
  {
    id: "pesquisa-nuclear-dispersao",
    slug: "pesquisa-logica-fuzzy-dispersao-nuclear",
    title: "Pesquisa em Lógica Fuzzy e Redes Neurais na Área Nuclear (CRCN/CNEN & UFPE)",
    theme: "Pesquisa",
    year: "2006 - 2011",
    type: "P&D Institucional",
    summary:
      "Desenvolvimento de ferramentas computacionais baseadas em sistemas inteligentes para modelagem de dispersão de contaminantes e avaliação de dose ambiental.",
    context:
      "Tese de doutorado no Centro Regional de Ciências Nucleares do Nordeste (CRCN/CNEN) e Universidade Federal de Pernambuco (UFPE).",
    objective:
      "Investigar o emprego de lógica nebulosa e algoritmos neuro-fuzzy no tratamento de incertezas intrínsecas a parâmetros ambientais e nucleares.",
    challenge:
      "Modelos convencionais estocásticos apresentavam alto custo computacional e dificuldade em incorporar conhecimento heurístico de radioproteção.",
    approach: [
      "Formulação de arquiteturas neuro-fuzzy ANFIS para predição de transporte de radionuclídeos",
      "Validação com dados experimentais de monitoramento radiológico ambiental",
      "Publicação de livro técnico de 163 páginas com sistematização dos resultados",
    ],
    results: [
      "Obtenção do título de Doutor em Tecnologias Energéticas e Nucleares com distinção",
      "Publicação do livro de referência em 2010 e artigos em periódicos internacionais",
      "Base metodológica que até hoje fundamenta os cursos e consultorias do autor",
    ],
    sector: "Saúde & Farmacêutica",
    relatedSpecialties: ["logica-fuzzy", "redes-neurais", "ia-engenharia"],
    relatedPublications: [
      "aplicacao-sistemas-neuro-fuzzy-dispersao-contaminantes",
      "avaliacao-computacional-dose-logica-fuzzy",
    ],
  },
  {
    id: "eficiencia-torres-resfriamento",
    slug: "otimizacao-termica-torres-resfriamento-industrial",
    title: "Otimização Térmica e Redução de Consumo em Torres de Resfriamento",
    theme: "Sustentabilidade",
    year: "2015 - 2018",
    type: "Consultoria Industrial",
    summary:
      "Estudo termo-hidráulico para melhoria de aproximação térmica, redução de arraste de água e recuperação de energia em circuitos de utilidades industriais.",
    context:
      "Complexos industriais com alto consumo de água de reposição e energia elétrica em ventiladores de circulação forçada.",
    objective:
      "Reduzir o gradiente de temperatura na aproximação da torre e minimizar as perdas por arraste e purga.",
    challenge:
      "Incrustações biológicas e degradação de enchimento de contato operando sob clima tropical úmido.",
    approach: [
      "Balanço rigoroso de massa e calor em regime estacionário",
      "Análise psicrométrica da atmosfera local para determinação da temperatura de bulbo úmido de projeto",
      "Recomendação de novos perfis de eliminadores de gotas e automação de controle de velocidade",
    ],
    results: [
      "Redução estimada de 8% no consumo de energia elétrica de acionamento",
      "Economia significativa no volume de água de reposição tratada",
      "Aumento da confiabilidade operacional nos trocadores de calor do processo principal",
    ],
    sector: "Química & Petroquímica",
    relatedSpecialties: ["sustentabilidade-industrial", "seguranca-processos"],
  },
  {
    id: "hazop-analise-risco-quimica",
    slug: "estudo-hazop-analise-preliminar-perigos",
    title: "Facilitação de Estudos de HAZOP e Análise Preliminar de Perigos (APP)",
    theme: "Engenharia",
    year: "2017 - 2023",
    type: "Consultoria Industrial",
    summary:
      "Liderança metodológica de sessões multidisciplinares de HAZOP para identificação de nós críticos, causas de desvios operacionais e salvaguardas em plantas de processos.",
    context:
      "Projetos de ampliação de planta química e adequação de sistemas de alívio e segurança para prevenção de acidentes maiores (PSM).",
    objective:
      "Mapear cenários de sobrepressão, fuga térmica e perda de contenção, propondo camadas de proteção adequadas (SIL / LOPA).",
    challenge:
      "Complexidade de intertravamentos lógicos e necessidade de engajamento rigoroso entre equipes multidisciplinares.",
    approach: [
      "Definição de nós de estudo e seleção sistemática de palavras-guia normativas",
      "Facilitação de sessões técnicas multidisciplinares documentadas em planilhas padronizadas",
      "Matriz de risco corporativa e priorização de ações de mitigação",
    ],
    results: [
      "Mapeamento de mais de 120 desvios de processo com recomendação de 18 melhorias imediatas de instrumentação",
      "Redução drástica da probabilidade de sobrepressão em reatores batelada",
      "Relatório final homologado para atendimento a exigências de auditoria de seguradoras",
    ],
    sector: "Química & Petroquímica",
    relatedSpecialties: ["hazop-analise-risco", "seguranca-processos"],
  },
];

export function getProjectBySlug(slug: string): DetailedProject | undefined {
  return DETAILED_PROJECTS.find((p) => p.slug === slug);
}

// Compatibilidade retroativa com código existente
export const TECHNICAL_PROJECTS = DETAILED_PROJECTS.map((p) => ({
  id: p.id,
  title: p.title,
  category: p.theme,
  summary: p.summary,
  scope: p.approach.slice(0, 3),
  href: `/projetos/${p.slug}`,
}));
