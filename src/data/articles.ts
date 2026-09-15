export type ArticleCategory =
  | "ia"
  | "engenharia"
  | "seguranca"
  | "meio-ambiente"
  | "emissoes"
  | "modelagem"
  | "sustentabilidade"
  | "educacao"
  | "decisao";

export type ContentStatus = "draft" | "review" | "published" | "archived";

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  h1: string;
  subtitle: string;
  category: ArticleCategory;
  categoryLabel: string;
  tags: string[];
  status: ContentStatus;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  sections: ArticleSection[];
  references: string[];
  relatedSpecialties: string[];
  relatedArticles: string[];
  hasLeadMagnet?: boolean;
  disclaimer?: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
}

const DEFAULT_AUTHOR = {
  name: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
  role: "Doutor em Engenharia Química (UFPE) | Especialista em Segurança do Trabalho",
  bio: "Engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Segurança de Processos, Engenharia Ambiental, Modelagem e soluções aplicadas à indústria.",
};

export const ARTICLES_DATA: Article[] = [
  {
    slug: "o-que-e-logica-fuzzy-e-como-funciona-na-engenharia",
    title: "O que é lógica fuzzy e como ela funciona na Engenharia?",
    h1: "O que é lógica fuzzy e como ela funciona na Engenharia?",
    subtitle: "Compreendendo conjuntos nebulosos e sua capacidade de modelar incertezas operacionais sem perder o rigor quantitativo.",
    category: "ia",
    categoryLabel: "Inteligência Artificial",
    tags: ["Lógica Fuzzy", "Conjuntos Nebulosos", "Modelagem", "Controle de Processos"],
    status: "draft",
    readTime: "8 min de leitura",
    publishedAt: "2025-08-10",
    updatedAt: "2026-02-12",
    excerpt: "Compreenda os fundamentos matemáticos dos conjuntos nebulosos e como a lógica fuzzy resolve problemas de controle e decisão onde os dados são incertos ou qualitativos.",
    hasLeadMagnet: true,
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "limites-da-logica-classica",
        title: "1. Os limites da lógica booleana tradicional",
        content: "A lógica clássica repousa sobre o princípio aristotélico do terceiro excluído: uma afirmação é estritamente verdadeira (1) ou falsa (0). No entanto, quando um engenheiro avalia se a temperatura de um reator está 'alta', ou quando um perito classifica o vento como 'moderado', a fronteira entre os estados não é abrupta. Forçar grandezas contínuas a categorias binárias rígidas introduz descontinuidades artificiais nos sistemas de controle e tomada de decisão.",
      },
      {
        id: "conjuntos-nebulosos",
        title: "2. Teoria dos conjuntos nebulosos (Fuzzy Sets)",
        content: "Introduzida por Lotfi Zadeh em 1965, a teoria dos conjuntos nebulosos permite que um elemento pertença a um conjunto com um grau de pertinência que varia continuamente no intervalo [0, 1]. Dessa forma, uma temperatura de 85°C pode ter pertinência 0.8 no conjunto 'Quente' e pertinência 0.2 no conjunto 'Muito Quente', refletindo a imprecisão inerente dos sensores e a transição física real das variáveis.",
      },
      {
        id: "mecanismo-de-inferencia",
        title: "3. As etapas de um sistema de inferência fuzzy",
        content: "Um controlador ou modelo fuzzy estrutura-se em três etapas essenciais: a Fuzzificação (conversão de medições numéricas em graus de pertinência linguística), o Mecanismo de Inferência (aplicação das regras SE-ENTÃO via operadores como Mandani ou Sugeno) e a Desfuzzificação (cálculo de uma saída nítida pelo método do Centro de Gravidade).",
      },
      {
        id: "aplicacoes-praticas",
        title: "4. Aplicações práticas em processos industriais",
        content: "Na prática industrial, a formulação fuzzy é indispensável para estabilizar colunas de destilação com tempos mortos severos, prever dispersão de poluentes atmosféricos sob ventos instáveis e priorizar manutenções preventivas em equipamentos críticos sob dados parciais.",
      },
    ],
    references: [
      "ZADEH, L. A. Fuzzy sets. Information and Control, v. 8, n. 3, p. 338-353, 1965.",
      "VASCONCELOS, W. E. Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental. Novas Edições Acadêmicas, 2010. 163 p.",
      "MAMDANI, E. H.; ASSILIAN, S. An experiment in linguistic synthesis with a fuzzy logic controller. International Journal of Man-Machine Studies, v. 7, n. 1, p. 1-13, 1975.",
    ],
    relatedSpecialties: ["logica-fuzzy", "inteligencia-artificial-na-engenharia", "tomada-de-decisao"],
    relatedArticles: ["inteligencia-artificial-na-engenharia-conceitos-e-aplicacoes", "tomada-de-decisao-em-sistemas-complexos"],
  },

  {
    slug: "inteligencia-artificial-na-engenharia-conceitos-e-aplicacoes",
    title: "Inteligência Artificial aplicada à Engenharia: conceitos e aplicações",
    h1: "Inteligência Artificial aplicada à Engenharia: conceitos e aplicações",
    subtitle: "Como sistemas inteligentes, modelos computacionais e análise de dados apoiam decisões e resolvem problemas reais de Engenharia.",
    category: "ia",
    categoryLabel: "Inteligência Artificial",
    tags: ["IA na Engenharia", "Machine Learning", "Physics-Informed", "Data Science"],
    status: "draft",
    readTime: "9 min de leitura",
    publishedAt: "2025-09-15",
    updatedAt: "2026-01-20",
    excerpt: "Explore como a IA se integra aos princípios fundamentais da física de processos, criando modelos Physics-Informed e soft sensors para a indústria moderna.",
    hasLeadMagnet: true,
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "ia-alem-da-caixa-preta",
        title: "1. A IA além do conceito de caixa-preta",
        content: "Diferente de aplicações corporativas puramente estatísticas, na Engenharia os algoritmos de aprendizado de máquina não podem violar leis termodinâmicas ou balanços de massa e energia. A tendência dominante é a adoção de Physics-Informed Neural Networks (PINNs), onde as equações diferenciais que regem o processo são incorporadas como penalidades na função de perda do algoritmo.",
      },
      {
        id: "soft-sensors",
        title: "2. Soft Sensors: medição virtual de variáveis críticas",
        content: "Em muitas plantas químicas e petroquímicas, variáveis como concentração de um produto nobre ou viscosidade exigem análises laboratoriais demoradas. A IA permite construir 'sensores virtuais' que estimam essas propriedades em tempo real a partir de medições contínuas de pressão, temperatura e vazão.",
      },
      {
        id: "otimizacao-energetica",
        title: "3. Otimização energética e manutenção preditiva",
        content: "Algoritmos de aprendizado profundo identificam microvibrações anômalas em mancais de compressores e bombas com semanas de antecedência em relação a falhas catastróficas, reduzindo paradas não programadas e consumo excessivo de energia em redes de vapor industriais.",
      },
    ],
    references: [
      "RAISSI, M.; PERDIKARIS, P.; KARNIADAKIS, G. E. Physics-informed neural networks. Journal of Computational Physics, v. 378, p. 686-707, 2019.",
      "VASCONCELOS, W. E. Modelagem Híbrida Neuro-Fuzzy Aplicada a Processos de Engenharia. Tese (Doutorado) – Universidade Federal de Pernambuco, 2006.",
    ],
    relatedSpecialties: ["inteligencia-artificial-na-engenharia", "redes-neurais", "logica-fuzzy"],
    relatedArticles: ["o-que-e-logica-fuzzy-e-como-funciona-na-engenharia", "redes-neurais-aplicadas-a-engenharia"],
  },

  {
    slug: "como-funciona-modelagem-de-dispersao-atmosferica",
    title: "Como funciona a modelagem de dispersão atmosférica?",
    h1: "Como funciona a modelagem de dispersão atmosférica?",
    subtitle: "Como modelos matemáticos ajudam a compreender o transporte e a dispersão de poluentes na atmosfera.",
    category: "modelagem",
    categoryLabel: "Modelagem Atmosférica",
    tags: ["Dispersão Atmosférica", "AERMOD", "Qualidade do Ar", "CONAMA 491"],
    status: "draft",
    readTime: "10 min de leitura",
    publishedAt: "2025-10-05",
    updatedAt: "2026-02-01",
    excerpt: "Uma análise detalhada sobre a teoria da pluma gaussiana, micrometeorologia da camada limite planetária e simulação de concentrações de poluentes ao nível do solo.",
    disclaimer: "Este conteúdo possui caráter informativo e educativo. Projetos de licenciamento ambiental e estudos de impacto devem ser submetidos à aprovação formal dos órgãos ambientais competentes acompanhados de ART.",
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "fundamentos-da-dispersao",
        title: "1. O que é dispersão de poluentes e por que modelar?",
        content: "Ao deixar uma chaminé industrial, os gases e o material particulado são transportados pelo vento horizontal (advecção) e diluídos pela turbulência mecânica e térmica do ar (difusão turbulenta). Modelar esse fenômeno matematicamente permite saber com precisão antecipada se a instalação violará os limites de qualidade do ar estabelecidos pela Resolução CONAMA 491/2018.",
      },
      {
        id: "camada-limite-e-meteorologia",
        title: "2. A influência da micrometeorologia",
        content: "A atmosfera inferior (camada limite planetária) varia drasticamente entre o dia e a noite. Durante o dia com sol forte, a convecção térmica favorece a diluição rápida da pluma; à noite, sob condições de estabilidade atmosférica e inversão térmica, a pluma pode atingir receptores no solo com concentrações elevadas a quilômetros de distância.",
      },
      {
        id: "topografia-e-edificios",
        title: "3. Topografia e o efeito de esteira predial (Building Downwash)",
        content: "Construções e galpões vizinhos à chaminé alteram as linhas de corrente do vento, criando zonas de baixa pressão e cavidades de recirculação que puxam a pluma para o solo prematuramente. Modelos avançados calculam esses efeitos através de algoritmos como o PRIME.",
      },
    ],
    references: [
      "US-EPA. AERMOD Model Formulation and Evaluation. EPA-454/B-19-014, 2019.",
      "CONAMA. Resolução nº 491, de 19 de novembro de 2018. Estabelece padrões de qualidade do ar. Diário Oficial da União, 2018.",
      "SEINFELD, J. H.; PANDIS, S. N. Atmospheric Chemistry and Physics: From Air Pollution to Climate Change. John Wiley & Sons, 2016.",
    ],
    relatedSpecialties: ["modelagem-de-dispersao-atmosferica", "aermod", "emissoes-atmosfericas", "qualidade-do-ar"],
    relatedArticles: ["aermod-fundamentos-da-modelagem-de-dispersao-atmosferica", "qualidade-do-ar-e-material-particulado-pts-e-pm10"],
  },

  {
    slug: "o-que-e-amostragem-isocinetica",
    title: "O que é amostragem isocinética?",
    h1: "O que é amostragem isocinética?",
    subtitle: "Fundamentos metrológicos e exigências normativas para a determinação representativa de material particulado em chaminés industriais.",
    category: "emissoes",
    categoryLabel: "Emissões Atmosféricas",
    tags: ["Amostragem Isocinética", "Chaminés", "Material Particulado", "ABNT NBR 12019"],
    status: "draft",
    readTime: "7 min de leitura",
    publishedAt: "2025-10-22",
    updatedAt: "2026-01-25",
    excerpt: "Entenda por que a igualdade de velocidades entre o fluxo gasoso e a sonda de coleta é essencial para evitar distorções graves na medição de emissões industriais.",
    disclaimer: "Este conteúdo possui caráter informativo. Procedimentos operacionais de medição em chaminés devem seguir rigorosamente as normas ABNT e diretrizes do órgão ambiental responsável.",
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "principio-da-isocinetica",
        title: "1. O princípio físico do isocinetismo",
        content: "Partículas sólidas em suspensão possuem inércia muito maior que as moléculas gasosas. Se a sonda coletora sugar o gás com velocidade inferior à velocidade da chaminé (subisocinética), as partículas pesadas vencem o desvio das linhas de fluxo e penetram no bocal, superestimando a concentração real. Se sugar rápido demais (superisocinética), as partículas se desviam e a concentração é subestimada.",
      },
      {
        id: "equipamentos-de-campo",
        title: "2. O trem de amostragem em campo",
        content: "A medição exige um trem amostrador calibrado composto por tubo de Pitot tipo S acoplado a manômetro diferencial, sonda de vidro aquecida com bocal calibrado, suporte com filtro gravimétrico de microfibra de quartzo mantido acima do ponto de orvalho e impingers em banho de gelo para condensação da umidade.",
      },
      {
        id: "razao-isocinetica",
        title: "3. O critério normativo da razão isocinética (I%)",
        content: "Segundo a norma ABNT NBR 12019 e o Método EPA 5, o teste só possui validade legal se a razão isocinética final do ensaio estiver estritamente compreendida entre 90% e 110%.",
      },
    ],
    references: [
      "ABNT. NBR 12019: Efluentes gasosos estacionários – Determinação do material particulado. Rio de Janeiro, 1990.",
      "US-EPA. Method 5 – Determination of Particulate Matter Emissions from Stationary Sources. 40 CFR Part 60, App. A-3, 2020.",
    ],
    relatedSpecialties: ["amostragem-isocinetica", "emissoes-atmosfericas", "modelagem-de-dispersao-atmosferica"],
    relatedArticles: ["como-funciona-modelagem-de-dispersao-atmosferica", "qualidade-do-ar-e-material-particulado-pts-e-pm10"],
  },

  {
    slug: "aermod-fundamentos-da-modelagem-de-dispersao-atmosferica",
    title: "AERMOD: fundamentos da modelagem de dispersão atmosférica",
    h1: "AERMOD: fundamentos da modelagem de dispersão atmosférica",
    subtitle: "O sistema de modelagem atmosférica padrão US-EPA para fontes industriais complexas, processamento AERMET, AERMAP e análise de impacto ambiental.",
    category: "modelagem",
    categoryLabel: "Modelagem Atmosférica",
    tags: ["AERMOD", "AERMET", "AERMAP", "Licenciamento Ambiental"],
    status: "draft",
    readTime: "9 min de leitura",
    publishedAt: "2025-11-12",
    updatedAt: "2026-02-05",
    excerpt: "Compreenda como o AERMOD superou os antigos modelos gaussianos através da incorporação da física da camada limite planetária e do módulo PRIME para downwash.",
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "evolucao-do-aermod",
        title: "1. A evolução sobre os modelos tradicionais ISC3",
        content: "Durante décadas, o modelo ISCST3 foi o padrão regulatório, mas baseava-se em simplificações grosseiras de dispersão homogênea. O AERMOD foi desenvolvido pelo comitê científico AERMIC (AMS/EPA) para substituir o ISC, tratando os perfis verticais contínuos de turbulência mecânica e térmica da atmosfera.",
      },
      {
        id: "aermet-e-aermap",
        title: "2. A arquitetura de processamento: AERMET e AERMAP",
        content: "O AERMOD não funciona isoladamente: o AERMET processa dados de superfície e radiossondagens de altitude para calcular parâmetros como a velocidade de atrito (u*) e o comprimento de Monin-Obukhov (L). Já o AERMAP extrai as elevações do relevo a partir de dados de satélite SRTM, calculando a altura de escala que governa a deflexão das plumas contra encostas.",
      },
      {
        id: "interpretacao-de-isoconcentracoes",
        title: "3. Como interpretar as manchas de isoconcentração",
        content: "Os relatórios geram superfícies de isoconcentração que indicam os percentis horários máximos e as médias anuais, permitindo confrontar os pontos de maior impacto com limites da OMS e da Resolução CONAMA 491.",
      },
    ],
    references: [
      "CIMORELLI, A. J. et al. AERMOD: A dispersion model for industrial source applications. Part I: General model formulation. Journal of Applied Meteorology, v. 44, n. 5, p. 682-693, 2005.",
      "PERRY, S. G. et al. AERMOD: A dispersion model for industrial source applications. Part II: Model performance against databases. Journal of Applied Meteorology, v. 44, n. 5, p. 694-708, 2005.",
    ],
    relatedSpecialties: ["aermod", "modelagem-de-dispersao-atmosferica", "emissoes-atmosfericas"],
    relatedArticles: ["como-funciona-modelagem-de-dispersao-atmosferica", "qualidade-do-ar-e-material-particulado-pts-e-pm10"],
  },

  {
    slug: "seguranca-de-processos-conceitos-fundamentais",
    title: "Segurança de Processos: conceitos fundamentais",
    h1: "Segurança de Processos: conceitos fundamentais",
    subtitle: "A distinção entre segurança ocupacional e segurança de processos, integridade mecânica de ativos e prevenção de acidentes maiores.",
    category: "seguranca",
    categoryLabel: "Segurança de Processos",
    tags: ["Segurança de Processos", "HAZOP", "Integridade Mecânica", "LOPA"],
    status: "draft",
    readTime: "8 min de leitura",
    publishedAt: "2025-11-28",
    updatedAt: "2026-01-30",
    excerpt: "Entenda por que baixas taxas de acidentes de trabalho com afastamento não garantem a imunidade de uma planta química contra explosões ou vazamentos catastróficos.",
    disclaimer: "Este conteúdo possui caráter informativo. A aplicação de programas de segurança de processos exige a condução de estudos técnicos e planos de integridade homologados por profissionais legalmente habilitados com emissão de ART.",
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "ocupacional-vs-processo",
        title: "1. Segurança Ocupacional vs. Segurança de Processos",
        content: "A segurança ocupacional tradicional foca em escorregões, quedas e ergonomia individual. A Segurança de Processos (Process Safety) trata de prevenir a liberação descontrolada de substâncias perigosas e energia contida em tubulações, reatores e tanques de armazenamento. Uma refinaria pode ter zero acidentes pessoais durante anos e, subitamente, sofrer uma explosão catastrófica se a integridade de seus vasos de pressão for negligenciada.",
      },
      {
        id: "camadas-de-protecao",
        title: "2. O conceito de Camadas Independentes de Proteção (IPL)",
        content: "A filosofia de barreiras (modelo do Queijo Suíço de James Reason) assegura que múltiplos mecanismos atuem sequencialmente para conter um evento iniciador: controle básico de processo (BPCS), alarmes com intervenção do operador, sistemas instrumentados de segurança (SIS) e alívio físico final através de válvulas de segurança (PSVs).",
      },
      {
        id: "gestao-de-mudancas",
        title: "3. Gestão de Mudanças (MOC) e inspeção baseada em risco",
        content: "A grande maioria dos desastres industriais ocorre após modificações sutis de tubulações, substituição de materiais sem compatibilidade química ou alteração de setpoints sem análise prévia de riscos por metodologias como HAZOP.",
      },
    ],
    references: [
      "CCPS - CENTER FOR CHEMICAL PROCESS SAFETY. Guidelines for Risk Based Process Safety. John Wiley & Sons, 2011.",
      "REASON, J. Managing the Risks of Organizational Accidents. Ashgate Publishing, 1997.",
    ],
    relatedSpecialties: ["seguranca-de-processos", "nr-13", "tomada-de-decisao"],
    relatedArticles: ["nr-13-o-que-engenheiros-precisam-entender", "tomada-de-decisao-em-sistemas-complexos"],
  },

  {
    slug: "nr-13-o-que-engenheiros-precisam-entender",
    title: "NR-13: o que engenheiros precisam entender",
    h1: "NR-13: o que engenheiros precisam entender",
    subtitle: "Diretrizes essenciais de integridade mecânica, responsabilidade técnica e inspeção compulsória em caldeiras, vasos de pressão e tubulações.",
    category: "engenharia",
    categoryLabel: "Engenharia de Processos",
    tags: ["NR-13", "Caldeiras", "Vasos de Pressão", "Profissional Habilitado"],
    status: "draft",
    readTime: "9 min de leitura",
    publishedAt: "2025-12-10",
    updatedAt: "2026-02-10",
    excerpt: "Um guia técnico sobre a atuação do Profissional Habilitado (PH), elaboração de prontuários, cálculo de vida remanescente e ensaios não destrutivos exigidos pela NR-13.",
    disclaimer: "Conteúdo informativo. A aplicação da NR-13 deve considerar rigorosamente a versão vigente da norma, as características específicas de projeto de cada equipamento e a responsabilidade técnica formal do Profissional Habilitado (PH) com ART registrada no CREA.",
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "escopo-da-nr13",
        title: "1. O escopo compulsório da NR-13",
        content: "A Norma Regulamentadora NR-13 abrange caldeiras a vapor, vasos de pressão com produto P.V superior a critérios normativos, tubulações industriais conectadas e tanques metálicos de armazenamento de fluidos de classes A e B. A conformidade não é facultativa: é uma exigência legal fiscalizada pelo Ministério do Trabalho e auditada por seguradoras.",
      },
      {
        id: "papel-do-ph",
        title: "2. As atribuições e a responsabilidade do Profissional Habilitado",
        content: "A norma exige que as inspeções de segurança inicial, periódica e extraordinária sejam conduzidas sob a responsabilidade técnica formal de um Profissional Habilitado (PH), com formação em Engenharia Mecânica ou Química e atribuições reconhecidas pelo Conselho de Classe (CREA), formalizada por Anotação de Responsabilidade Técnica (ART).",
      },
      {
        id: "documentacao-minima",
        title: "3. Prontuário, Registro de Segurança e Cálculos de PMTP",
        content: "Todo vaso ou caldeira em operação deve possuir seu Prontuário Técnico original ou reconstituído, memória de cálculo da Pressão Máxima de Trabalho Permitida (PMTP) segundo normas de projeto como o Código ASME Seção VIII Divisão 1, e registro de calibração das válvulas de alívio.",
      },
    ],
    references: [
      "BRASIL. Ministério do Trabalho e Previdência. Norma Regulamentadora nº 13 – Caldeiras, vasos de pressão, tubulações e tanques metálicos de armazenamento. Portaria MTP nº 1.846, 2022.",
      "ASME. Boiler and Pressure Vessel Code, Section VIII, Division 1: Rules for Construction of Pressure Vessels. American Society of Mechanical Engineers, 2021.",
    ],
    relatedSpecialties: ["nr-13", "seguranca-de-processos"],
    relatedArticles: ["seguranca-de-processos-conceitos-fundamentais"],
  },

  {
    slug: "qualidade-do-ar-e-material-particulado-pts-e-pm10",
    title: "Qualidade do ar e material particulado: PTS e PM10",
    h1: "Qualidade do ar e material particulado: PTS e PM10",
    subtitle: "Diferenças aerodinâmicas, impactos toxicológicos e limites regulatórios para Partículas Totais em Suspensão e fração inalável.",
    category: "meio-ambiente",
    categoryLabel: "Meio Ambiente",
    tags: ["Qualidade do Ar", "Material Particulado", "PM10", "CONAMA 491"],
    status: "draft",
    readTime: "7 min de leitura",
    publishedAt: "2026-01-08",
    updatedAt: "2026-02-14",
    excerpt: "Entenda a distinção física entre poeiras grosseiras (PTS) e frações finas inaláveis (PM10 e PM2.5), bem como seus métodos de medição e implicações para a saúde pública.",
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "classificacao-granulometrica",
        title: "1. Diâmetro aerodinâmico e classificação",
        content: "O material particulado é classificado pelo seu diâmetro aerodinâmico equivalente: Partículas Totais em Suspensão (PTS) englobam poeiras de até 50 micrômetros, retidas principalmente nas vias aéreas superiores; PM10 corresponde a partículas menores que 10 micrômetros (fração inalável que atinge a traqueia e brônquios); e PM2.5 refere-se a partículas respiráveis que penetram nos alvéolos pulmonares.",
      },
      {
        id: "padroes-conama-491",
        title: "2. Os padrões estabelecidos pela Resolução CONAMA 491/2018",
        content: "A legislação brasileira adotou metas intermediárias progressivas (PI-1, PI-2, PI-3) rumo ao padrão final recomendado pela Organização Mundial da Saúde (OMS), reduzindo drasticamente os limites diários de concentração média no ar ambiente.",
      },
      {
        id: "tecnologias-de-controle",
        title: "3. Abatimento na fonte emissora",
        content: "Para conter frações inaláveis, indústrias substituem ciclones e lavadores simples por filtros de manga de tecido agulhado e precipitadores eletrostáticos, alcançando eficiências de coleta superiores a 99,5%.",
      },
    ],
    references: [
      "CONAMA. Resolução nº 491, de 19 de novembro de 2018. Estabelece padrões de qualidade do ar. Brasília, 2018.",
      "WHO - WORLD HEALTH ORGANIZATION. WHO Global Air Quality Guidelines. Genebra, 2021.",
    ],
    relatedSpecialties: ["qualidade-do-ar", "emissoes-atmosfericas", "modelagem-de-dispersao-atmosferica"],
    relatedArticles: ["como-funciona-modelagem-de-dispersao-atmosferica", "o-que-e-amostragem-isocinetica"],
  },

  {
    slug: "tomada-de-decisao-em-sistemas-complexos",
    title: "Tomada de decisão em sistemas complexos",
    h1: "Tomada de decisão em sistemas complexos",
    subtitle: "Modelos quantitativos multicritério, teoria da utilidade e lógica fuzzy para apoiar escolhas técnicas em cenários de incerteza e múltiplos objetivos conflitantes.",
    category: "decisao",
    categoryLabel: "Tomada de Decisão",
    tags: ["Tomada de Decisão", "AHP", "Fuzzy", "Gestão de Ativos"],
    status: "draft",
    readTime: "8 min de leitura",
    publishedAt: "2026-01-18",
    updatedAt: "2026-02-15",
    excerpt: "Como estruturar matrizes de priorização técnica que equilibram confiabilidade mecânica, custo financeiro e conformidade ambiental com consistência matemática.",
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "falencia-da-intuicao",
        title: "1. Por que o julgamento intuitivo falha em decisões complexas",
        content: "Quando um comitê de engenharia precisa decidir entre substituir uma caldeira obsoleta, reformar o sistema de queima ou modernizar a estação de tratamento de efluentes com orçamento limitado, as opiniões dos gestores costumam divergir. O cérebro humano tem dificuldade em ponderar simultaneamente mais de cinco variáveis quantitativas e qualitativas sem recorrer a simplificações perigosas.",
      },
      {
        id: "metodos-multicriterio",
        title: "2. O Processo Analítico Hierárquico (AHP) e extensões Fuzzy",
        content: "Métodos como o AHP decompõem o problema em uma hierarquia de critérios e subcritérios, permitindo comparações paritárias. Ao integrar números triangulares nebulosos (Fuzzy-AHP), o método acolhe a ambiguidade natural dos julgamentos de especialistas (como 'moderadamente preferível'), calculando taxas de consistência matemática rigorosas.",
      },
      {
        id: "aplicacao-em-ativos",
        title: "3. Aplicação na Gestão de Riscos e Ativos Críticos",
        content: "O modelo resultante gera um ranqueamento auditável que justifica perante diretorias executivas e conselhos regulatórios a priorização de investimentos e intervenções de parada de manutenção.",
      },
    ],
    references: [
      "SAATY, T. L. The Analytic Hierarchy Process. McGraw-Hill, 1980.",
      "VASCONCELOS, W. E. Modelos Multicritério e Sistemas Inteligentes de Tomada de Decisão na Gestão de Riscos. Revista de Engenharia e Tecnologia, 2012.",
    ],
    relatedSpecialties: ["tomada-de-decisao", "logica-fuzzy", "seguranca-de-processos"],
    relatedArticles: ["o-que-e-logica-fuzzy-e-como-funciona-na-engenharia", "seguranca-de-processos-conceitos-fundamentais"],
  },

  {
    slug: "redes-neurais-aplicadas-a-engenharia",
    title: "Redes neurais aplicadas à Engenharia",
    h1: "Redes neurais aplicadas à Engenharia",
    subtitle: "Aproximação universal de funções, previsão de séries temporais e diagnóstico preditivo em instalações industriais contínuas.",
    category: "ia",
    categoryLabel: "Inteligência Artificial",
    tags: ["Redes Neurais", "Deep Learning", "Manutenção Preditiva", "Engenharia Química"],
    status: "draft",
    readTime: "9 min de leitura",
    publishedAt: "2026-02-02",
    updatedAt: "2026-02-16",
    excerpt: "Uma visão prática sobre o treinamento de redes neurais com dados de processos reais, abordando desde perceptrons multicamadas até arquiteturas LSTM para dados dinâmicos.",
    hasLeadMagnet: true,
    author: DEFAULT_AUTHOR,
    sections: [
      {
        id: "aproximacao-universal",
        title: "1. O Teorema da Aproximação Universal na Engenharia",
        content: "Formulado por Cybenko e Hornik, o teorema estabelece que uma rede feedforward com apenas uma camada oculta é capaz de aproximar qualquer função contínua não linear. Em sistemas de engenharia química e termodinâmica onde as equações analíticas são impraticáveis, redes neurais tornam-se ferramentas ideais para modelar o comportamento de processos complexos.",
      },
      {
        id: "series-temporais",
        title: "2. Séries temporais e redes recorrentes (LSTM)",
        content: "Plantas industriais operam em regimes dinâmicos dependentes do histórico operacional recente. Redes neurais recorrentes (especialmente LSTM - Long Short-Term Memory) aprendem dependências de longo prazo, permitindo prever a temperatura de saída de um forno minutos à frente, antecipando correções na queima antes da ocorrência de desvios térmicos.",
      },
      {
        id: "desafios-de-overfitting",
        title: "3. Prevenção de sobreajuste em dados ruidosos de sensores",
        content: "A presença de ruído elétrico e oscilações instrumentais em sensores de campo exige o uso rigoroso de técnicas de regularização (L2 Ridge, Dropout e parada antecipada) para assegurar que a rede generalize o comportamento físico do fluido e não decore ruídos aleatórios de amostragem.",
      },
    ],
    references: [
      "HORNIK, K.; STINCHCOMBE, M.; WHITE, H. Multilayer feedforward networks are universal approximators. Neural Networks, v. 2, n. 5, p. 359-366, 1989.",
      "HOCHREITER, S.; SCHMIDHUBER, J. Long short-term memory. Neural Computation, v. 9, n. 8, p. 1735-1780, 1997.",
    ],
    relatedSpecialties: ["redes-neurais", "inteligencia-artificial-na-engenharia", "logica-fuzzy"],
    relatedArticles: ["inteligencia-artificial-na-engenharia-conceitos-e-aplicacoes", "o-que-e-logica-fuzzy-e-como-funciona-na-engenharia"],
  },
];
