export interface FAQItem {
  question: string;
  answer: string;
}

export interface FutureProduct {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface Specialty {
  slug: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  pillarSlug: string;
  pillarTitle: string;
  lead: string;
  summary: string;
  description: string;
  technicalConcept: string;
  diagramType: "ia" | "dispersao" | "seguranca" | "fuzzy" | "decisao" | "isocinetica";
  wagnerConnection: string;
  fundamentals: string[];
  industrialApplications: string[];
  clusterRelatedSlugs: string[];
  relatedArticleSlugs: string[];
  faqItems?: FAQItem[];
  futureProduct?: FutureProduct;
  hasBook?: boolean;
  disclaimer?: string;
  ctaText: string;
}

export const SPECIALTIES_DATA: Record<string, Specialty> = {
  "inteligencia-artificial-na-engenharia": {
    slug: "inteligencia-artificial-na-engenharia",
    title: "Inteligência Artificial Aplicada à Engenharia",
    h1: "Inteligência Artificial aplicada à Engenharia",
    seoTitle: "Inteligência Artificial Aplicada à Engenharia | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Como sistemas inteligentes, modelos computacionais e análise de dados apoiam decisões e resolvem problemas reais de Engenharia e processos industriais.",
    pillarSlug: "inteligencia-artificial",
    pillarTitle: "Inteligência Artificial & Dados",
    lead: "Como sistemas inteligentes, modelos computacionais e análise de dados podem apoiar decisões e resolver problemas reais de Engenharia.",
    summary: "Convergência de métodos computacionais avançados, machine learning e física de processos para solucionar gargalos industriais reais.",
    description: "A Inteligência Artificial aplicada à Engenharia transcende o uso genérico de algoritmos estatísticos. Trata-se da integração rigorosa entre os princípios fundamentais das ciências exatas — balanços de massa e energia, termodinâmica, mecânica dos fluidos e cinética química — e técnicas avançadas de aprendizado de máquina, redes neurais e sistemas de inferência. Essa simbiose permite construir modelos preditivos e sistemas de controle que respeitam as leis físicas do processo, garantindo previsibilidade, rastreabilidade e segurança operacional em ambientes industriais de alta complexidade.",
    technicalConcept: "Diferente de aplicações corporativas convencionais onde correlações estatísticas superficiais podem ser aceitas, na Engenharia cada predição computacional acarreta implicações diretas na integridade de equipamentos, na segurança de pessoas e no impacto ambiental. Os modelos de IA na Engenharia operam como 'Physics-Informed Systems', nos quais restrições termodinâmicas e limites operacionais funcionam como fronteiras intransponíveis para a convergência dos algoritmos.",
    diagramType: "ia",
    wagnerConnection: "A relação de Wagner Eustáquio de Vasconcelos com a Inteligência Artificial iniciou-se em seu Doutorado em Engenharia Química na Universidade Federal de Pernambuco (concluído em 2006), onde desenvolveu modelos híbridos neuro-fuzzy para sistemas complexos. Essa base científica foi expandida ao longo de mais de 15 anos de docência universitária e atualizada no programa executivo 'Designing and Building AI Products and Services' pelo MIT Professional Education (2024), consolidando uma visão que une rigor acadêmico a aplicações industriais práticas.",
    fundamentals: [
      "Physics-Informed Neural Networks (PINNs) e modelos híbridos",
      "Modelagem orientada por dados com Python, Scikit-learn e bibliotecas científicas",
      "Validação cruzada, interpretabilidade algorítmica e auditorias técnicas",
      "Pipelines de dados industriais em tempo real integrados a SCADA e PIMS",
    ],
    industrialApplications: [
      "Modelagem preditiva de variáveis de processo de difícil medição contínua (Soft Sensors)",
      "Otimização energética de utilidades, caldeiras e redes de vapor industriais",
      "Automação e priorização de matrizes de risco operacional e manutenção",
      "Simulação acelerada de escoamentos e dispersão atmosférica de poluentes",
    ],
    clusterRelatedSlugs: [
      "logica-fuzzy",
      "redes-neurais",
      "tomada-de-decisao",
    ],
    relatedArticleSlugs: [
      "7-aplicacoes-praticas-de-inteligencia-artificial-na-engenharia",
      "o-que-e-logica-fuzzy-e-como-funciona-na-engenharia",
    ],
    faqItems: [
      {
        question: "Como a IA se diferencia dos métodos estatísticos tradicionais na Engenharia?",
        answer: "Enquanto métodos estatísticos lineares exigem simplificações severas sobre o comportamento dos sistemas industriais, algoritmos de IA são capazes de capturar não linearidades severas, acoplamentos multidimensionais e variações dinâmicas sem perder a robustez preditiva.",
      },
      {
        question: "É possível aplicar IA em indústrias sem sensores modernos?",
        answer: "A IA pode ser aplicada a partir de dados históricos de processos existentes, inclusive para atuar como sensor virtual (soft sensor), estimando variáveis críticas antes inexistentes a partir de medições básicas como temperatura e pressão.",
      },
    ],
    futureProduct: {
      title: "IA Aplicada à Engenharia",
      subtitle: "Formação Avançada para Engenheiros e Gestores Técnicos",
      description: "Programa prático focado na aplicação de modelos inteligentes, redes neurais e lógica fuzzy para solução de gargalos reais em processos industriais e tomada de decisão.",
      tag: "Em desenvolvimento",
    },
    ctaText: "Explorar IA na Engenharia",
  },

  "logica-fuzzy": {
    slug: "logica-fuzzy",
    title: "Lógica Fuzzy (Conjuntos Nebulosos)",
    h1: "Lógica Fuzzy aplicada à Engenharia",
    seoTitle: "Lógica Fuzzy Aplicada à Engenharia | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Uma abordagem matemática para modelar incertezas, apoiar decisões e representar sistemas complexos na Engenharia e no Meio Ambiente.",
    pillarSlug: "inteligencia-artificial",
    pillarTitle: "Inteligência Artificial & Dados",
    lead: "Uma abordagem para modelar incertezas, apoiar decisões e representar sistemas complexos.",
    summary: "Modelagem matemática de incertezas, raciocínio aproximado e sistemas de inferência fuzzy para problemas onde os dados são imprecisos ou qualitativos.",
    description: "A Lógica Fuzzy (ou Lógica Nebulosa), fundamentada por Lotfi Zadeh em 1965, estende a lógica clássica booleana ao introduzir graus de pertinência contínuos no intervalo [0, 1]. Na Engenharia, problemas práticos frequentemente lidam com grandezas que não admitem fronteiras abruptas: variáveis como 'temperatura elevada', 'pressão moderada' ou 'dispersão atmosférica instável' dependem de contextos operacionais complexos. A formulação fuzzy permite transformar o conhecimento de especialistas em regras matemáticas executáveis computacionalmente.",
    technicalConcept: "Em contraste com a lógica tradicional onde uma afirmação é exclusivamente verdadeira (1) ou falsa (0), a lógica nebulosa permite quantificar nuances. O ciclo operacional de um controlador ou modelo fuzzy estrutura-se em: Fuzzificação (conversão de entradas numéricas em graus de pertinência), Mecanismo de Inferência (aplicação das regras SE-ENTÃO via operadores de Mandani ou Sugeno) e Desfuzzificação (cálculo da saída nítida via métodos como o Centro de Gravidade).",
    diagramType: "fuzzy",
    wagnerConnection: "Wagner Eustáquio dedicou anos de pesquisa acadêmica à formalização matemática e aplicação da Lógica Fuzzy. Sua tese de Doutorado na UFPE utilizou inferência nebulosa e redes neuro-fuzzy para modelar a dispersão ambiental e a tomada de decisão sob alta incerteza. Essa produção culminou na publicação do livro técnico 'Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental' (2010), tornando-se referência na interseção entre conjuntos nebulosos e engenharia ambiental.",
    fundamentals: [
      "Funções de pertinência (triangulares, trapezoidais e gaussianas)",
      "Sistemas de inferência nebulosa (Mamdani e Takagi-Sugeno)",
      "Métodos de desfuzzificação (Centro de Gravidade / Centroid e Bisector)",
      "Arquiteturas Neuro-Fuzzy adaptativas (ANFIS)",
    ],
    industrialApplications: [
      "Controle avançado de processos em reatores químicos e colunas de destilação",
      "Avaliação e classificação de risco sob dados parciais ou qualitativos",
      "Modelagem de dispersão de poluentes atmosféricos e radiação ambiental",
      "Sistemas de suporte à decisão para manutenção preditiva de equipamentos sob pressão",
    ],
    clusterRelatedSlugs: [
      "inteligencia-artificial-na-engenharia",
      "redes-neurais",
      "tomada-de-decisao",
    ],
    relatedArticleSlugs: [
      "o-que-e-logica-fuzzy-e-como-funciona-na-engenharia",
      "7-aplicacoes-praticas-de-inteligencia-artificial-na-engenharia",
    ],
    hasBook: true,
    faqItems: [
      {
        question: "Qual a diferença fundamental entre probabilidade e lógica fuzzy?",
        answer: "A probabilidade lida com a incerteza da ocorrência de um evento bem definido (ex: cara ou coroa). A lógica fuzzy lida com a ambiguidade da definição conceitual do próprio evento (ex: o quão 'quente' está um fluido em um trocador de calor).",
      },
      {
        question: "A lógica fuzzy pode ser combinada com redes neurais?",
        answer: "Sim. Os sistemas Neuro-Fuzzy (como o ANFIS) combinam o raciocínio transparente baseado em regras da lógica fuzzy com a capacidade autônoma de aprendizado a partir de dados históricos das redes neurais.",
      },
    ],
    futureProduct: {
      title: "Masterclass: Lógica Fuzzy na Prática Industrial",
      subtitle: "Modelagem de Incertezas e Controle Inteligente",
      description: "Treinamento especializado abordando formulação de funções de pertinência, programação de inferência em Python/MATLAB e estudos de caso em processos industriais.",
      tag: "Em desenvolvimento",
    },
    ctaText: "Explorar Lógica Fuzzy",
  },

  "redes-neurais": {
    slug: "redes-neurais",
    title: "Redes Neurais Artificiais",
    h1: "Redes Neurais aplicadas à Engenharia",
    seoTitle: "Redes Neurais Aplicadas à Engenharia | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Modelagem, previsão e reconhecimento de padrões em processos industriais e sistemas dinâmicos complexos através de redes neurais artificiais.",
    pillarSlug: "inteligencia-artificial",
    pillarTitle: "Inteligência Artificial & Dados",
    lead: "Modelagem computacional, previsão de comportamentos complexos e reconhecimento de padrões em sistemas não lineares de Engenharia.",
    summary: "Arquiteturas computacionais para reconhecimento de padrões não lineares, aproximação universal de funções e manutenção preditiva em engenharia.",
    description: "As Redes Neurais Artificiais (RNA) são modelos computacionais inspirados no processamento biológico de informação, constituídas por neurônios interconectados organizados em camadas. Na Engenharia de Processos e em sistemas dinâmicos, sua principal virtude é o teorema da aproximação universal: qualquer função contínua não linear pode ser aproximada com precisão arbitrária, viabilizando previsões de variáveis de processo que desafiam formulações analíticas clássicas.",
    technicalConcept: "A calibração dos pesos e bias ocorre através do algoritmo de retropropagação do erro (Backpropagation) combinado com otimizadores estocásticos. No contexto industrial, a arquitetura deve ser rigorosamente balanceada para evitar o sobreajuste (overfitting) em ruídos de amostragem, aplicando técnicas de regularização L2 (Ridge), Dropout e validação cruzada orientada a blocos temporais.",
    diagramType: "ia",
    wagnerConnection: "Wagner trabalhou extensivamente com redes neurais artificiais em suas pesquisas de pós-graduação e publicações científicas na UFPE, empregando arquiteturas MLP e híbridas para estimativa de variáveis ambientais e predição de comportamento de fluxos complexos em reatores industriais.",
    fundamentals: [
      "Perceptrons Multicamadas (MLP) e funções de ativação (ReLU, Sigmoide, Tanh)",
      "Algoritmo Backpropagation e otimização por gradiente descendente (Adam, RMSProp)",
      "Redes Neurais Recorrentes (LSTM/GRU) para séries temporais industriais",
      "Integração neuro-fuzzy adaptativa para garantia de interpretabilidade",
    ],
    industrialApplications: [
      "Soft sensors para monitoramento contínuo de emissões e efluentes",
      "Diagnóstico precoce de falhas mecânicas em compressores, bombas e motores",
      "Previsão de curvas de consumo energético em plantas industriais contínuas",
      "Modelagem preditiva de concentração de gases em atmosferas confinadas",
    ],
    clusterRelatedSlugs: [
      "inteligencia-artificial-na-engenharia",
      "logica-fuzzy",
      "tomada-de-decisao",
    ],
    relatedArticleSlugs: [
      "7-aplicacoes-praticas-de-inteligencia-artificial-na-engenharia",
    ],
    ctaText: "Explorar Redes Neurais",
  },

  "tomada-de-decisao": {
    slug: "tomada-de-decisao",
    title: "Tomada de Decisão em Sistemas Complexos",
    h1: "Tomada de decisão em sistemas complexos",
    seoTitle: "Tomada de Decisão em Sistemas Complexos | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Modelos quantitativos, métodos multicritério e lógica fuzzy para apoiar decisões técnicas em ambientes de alta incerteza e criticidade.",
    pillarSlug: "inteligencia-artificial",
    pillarTitle: "Inteligência Artificial & Dados",
    lead: "Modelos, dados e métodos para apoiar decisões técnicas em ambientes de incerteza e múltiplos critérios conflitantes.",
    summary: "Métodos quantitativos multicritério e lógica nebulosa para direcionar investimentos e manutenções com alto risco.",
    description: "Em instalações industriais e operações de grande porte, as decisões raramente envolvem apenas uma variável. Engenheiros e gestores precisam equilibrar segurança operacional, confiabilidade mecânica, custos de parada, exigências normativas e sustentabilidade ecológica. A tomada de decisão baseada em métodos estruturados (MCDA/MCDM) substitui o empirismo por modelos matemáticos reprodutíveis e auditáveis.",
    technicalConcept: "O processo analítico hierárquico (AHP), acoplado a formulações fuzzy (Fuzzy-AHP e Fuzzy-TOPSIS), permite ordenar alternativas mesmo quando as preferências dos decisores são expressas de forma linguística ou qualitativa. O modelo calcula vetores de prioridade e matrizes de consistência matemática, garantindo que o resultado final reflita a ponderação equilibrada de riscos técnicos e financeiros.",
    diagramType: "decisao",
    wagnerConnection: "Wagner integrou métodos de tomada de decisão com ferramentas computacionais ao longo de seu pós-doutorado e projetos industriais, desenvolvendo matrizes multicritério para classificação de criticidade de equipamentos sob a NR-13 e planos de mitigação de emissões ambientais.",
    fundamentals: [
      "Métodos de apoio multicritério à decisão (AHP, ANP, TOPSIS, PROMETHEE)",
      "Modelagem de preferências sob incerteza com números fuzzy triangulares",
      "Análise de sensibilidade e matrizes de consistência geométrica",
      "Matrizes de Risco e Confiabilidade Centrada em Manutenção (RCM)",
    ],
    industrialApplications: [
      "Priorização de investimentos em substituição de ativos de alto risco",
      "Escolha entre rotas de tratamento de efluentes industriais e controle de emissões",
      "Classificação de criticidade de vasos de pressão e caldeiras industriais",
      "Tomada de decisão em planos de contingência de emergência ambiental",
    ],
    clusterRelatedSlugs: [
      "inteligencia-artificial-na-engenharia",
      "logica-fuzzy",
      "seguranca-de-processos",
    ],
    relatedArticleSlugs: [
      "7-aplicacoes-praticas-de-inteligencia-artificial-na-engenharia",
    ],
    ctaText: "Explorar Tomada de Decisão",
  },

  "seguranca-de-processos": {
    slug: "seguranca-de-processos",
    title: "Segurança de Processos Industriais",
    h1: "Segurança de Processos Industriais",
    seoTitle: "Segurança de Processos Industriais | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Identificação de perigos, análise de riscos, integridade mecânica de instalações e prevenção de acidentes maiores em indústrias químicas e de manufatura.",
    pillarSlug: "engenharia-e-seguranca-de-processos",
    pillarTitle: "Engenharia & Segurança de Processos",
    lead: "Segurança, confiabilidade e integridade aplicadas à prevenção de incidentes maiores em processos e equipamentos industriais.",
    summary: "Segurança, confiabilidade, inspeções, processos industriais, NR-13, integridade de equipamentos e análise de riscos.",
    description: "A Segurança de Processos (Process Safety) difere da segurança ocupacional tradicional: seu foco central está na contenção de substâncias perigosas, toxicidade, inflamabilidade e energia contida em tubulações e vasos sob pressão. Prevenir vazamentos catastróficos, explosões e incêndios requer uma abordagem sistêmica de engenharia, integrando camadas independentes de proteção (LOPA), manutenção da integridade mecânica e conformidade regulatória contínua.",
    technicalConcept: "O gerenciamento de segurança de processos (PSM) estrutura-se na identificação precoce de perigos operacionais, avaliação quantitativa de consequências, definição de barreiras preventivas e mitigadoras, e gestão rigorosa de modificações (MOC). A integridade do ativo é monitorada através de ciclos de inspeção baseada em risco (RBI) e aderência estrita às normas técnicas da ABNT, ASME e normas regulamentadoras vigentes.",
    diagramType: "seguranca",
    wagnerConnection: "Com formação em Engenharia Química, especialização em Engenharia de Segurança do Trabalho pela UFPE e atuação como Perito e Profissional Habilitado (PH), Wagner une a fundamentação termodinâmica dos processos à prática de inspeções de campo e prevenção de riscos industriais severos.",
    fundamentals: [
      "Metodologias de identificação de perigos: HAZOP, What-If, FMEA e APR",
      "Análise de Camadas de Proteção (LOPA) e determinação de SIL (Safety Integrity Level)",
      "Gestão de Mudanças (MOC) e integridade mecânica de ativos críticos",
      "Investigação de incidentes industriais e análise de causa raiz (RCA)",
    ],
    industrialApplications: [
      "Facilitação de estudos de HAZOP em plantas químicas, petroquímicas e sucroalcooleiras",
      "Auditorias técnicas de conformidade com o sistema de gestão de segurança de processos",
      "Planos de inspeção de integridade física para atendimento à NR-13 e NR-20",
      "Elaboração de relatórios periciais de conformidade e análise de falhas mecânicas",
    ],
    clusterRelatedSlugs: [
      "nr-13",
      "tomada-de-decisao",
      "emissoes-atmosfericas",
    ],
    relatedArticleSlugs: [],
    futureProduct: {
      title: "Manual Prático de Segurança de Processos",
      subtitle: "Da Identificação de Perigos à Integridade Mecânica",
      description: "Guia técnico com métodos aplicados de HAZOP, LOPA e protocolos de verificação em campo para engenheiros de segurança e produção.",
      tag: "Em desenvolvimento",
    },
    ctaText: "Explorar Segurança de Processos",
  },

  "nr-13": {
    slug: "nr-13",
    title: "NR-13: Caldeiras, Vasos de Pressão e Tubulações",
    h1: "NR-13: Segurança em Caldeiras, Vasos de Pressão e Equipamentos",
    seoTitle: "NR-13 Caldeiras e Vasos de Pressão | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Engenharia de integridade mecânica, ensaios não destrutivos e inspeção de conformidade técnica e legal para caldeiras, vasos e tubulações.",
    pillarSlug: "engenharia-e-seguranca-de-processos",
    pillarTitle: "Engenharia & Segurança de Processos",
    lead: "Engenharia de integridade mecânica, ensaios não destrutivos e inspeções compulsórias em conformidade técnica com a NR-13.",
    summary: "Engenharia de integridade mecânica, ensaios não destrutivos e inspeção de conformidade técnica e legal.",
    description: "A Norma Regulamentadora NR-13 estabelece requisitos legais e técnicos mínimos para o projeto, instalação, operação, inspeção e manutenção de caldeiras a vapor, vasos de pressão, tubulações industriais e tanques metálicos de armazenamento. A integridade desses equipamentos é vital para impedir explosões destrutivas e vazamentos de gases tóxicos ou inflamáveis em plantas produtivas.",
    technicalConcept: "O trabalho técnico sob a NR-13 requer a atuação formal de um Profissional Habilitado (PH) registrado no CREA. Envolve a realização de exames visuais internos e externos, ensaios não destrutivos (como medição de espessura por ultrassom e partículas magnéticas), cálculo da Pressão Máxima de Trabalho Permitida (PMTP), calibração de dispositivos de alívio de pressão (PSVs) e a reconstituição formal do Prontuário do Equipamento.",
    diagramType: "seguranca",
    wagnerConnection: "Wagner Eustáquio atua como Profissional Habilitado (PH) pela NR-13, com ampla vivência em plantas industriais, emissão de Anotações de Responsabilidade Técnica (ART), elaboração de planos de inspeção e consultorias periciais para assegurar a conformidade legal e a integridade de equipamentos sob pressão.",
    fundamentals: [
      "Classificação de vasos de pressão por classe de fluido e potencial de risco (PV)",
      "Cálculo de taxa de corrosão, espessura mínima de projeto (ASME Seção VIII) e vida residual",
      "Inspeções periódicas de segurança (inicial, periódica e extraordinária)",
      "Elaboração de Prontuários, Registros de Segurança e Projetos de Alteração ou Reparo (PAR)",
    ],
    industrialApplications: [
      "Inspeção de conformidade com teste hidrostático ou ensaios não destrutivos equivalentes",
      "Auditorias preventivas em linhas de vapor, trocadores de calor e compressores",
      "Aferição e emissão de certificados de calibração para válvulas de alívio de segurança",
      "Reconstituição de documentação técnica para equipamentos importados ou sem histórico",
    ],
    clusterRelatedSlugs: [
      "seguranca-de-processos",
      "tomada-de-decisao",
    ],
    relatedArticleSlugs: [],
    disclaimer: "Conteúdo informativo. A aplicação da NR-13 deve considerar rigorosamente a versão vigente da norma, as características específicas de projeto de cada equipamento e a responsabilidade técnica formal do Profissional Habilitado (PH) com ART registrada no CREA.",
    futureProduct: {
      title: "Guia Prático de Gestão da NR-13",
      subtitle: "Checklists, Modelos de Relatório e Procedimentos de Campo",
      description: "Conjunto completo de templates operacionais, planilhas de cálculo de taxa de corrosão e fluxogramas de conformidade para profissionais habilitados e técnicos de manutenção.",
      tag: "Em desenvolvimento",
    },
    ctaText: "Explorar NR-13",
  },

  "emissoes-atmosfericas": {
    slug: "emissoes-atmosfericas",
    title: "Emissões Atmosféricas Industriais",
    h1: "Emissões Atmosféricas Industriais",
    seoTitle: "Emissões Atmosféricas Industriais | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Identificação, monitoramento, inventários e estratégias de controle para fontes industriais gasosas e material particulado.",
    pillarSlug: "meio-ambiente-e-sustentabilidade",
    pillarTitle: "Meio Ambiente & Sustentabilidade",
    lead: "Quantificação, monitoramento em duto e estratégias de abatimento de gases e material particulado em fontes estacionárias industriais.",
    summary: "Monitoramento ambiental, emissões atmosféricas, qualidade do ar, modelagem, recursos naturais, resíduos e sustentabilidade.",
    description: "As emissões atmosféricas industriais representam o descarte de compostos gasosos, vapores e material particulado resultantes de processos térmicos de combustão, reações químicas ou manuseio mecânico de matérias-primas. O controle rigoroso dessas fontes em chaminés e dutos é obrigatório para assegurar o cumprimento de padrões regulatórios fixados pelo CONAMA e órgãos ambientais estaduais.",
    technicalConcept: "O gerenciamento de emissões requer a caracterização física e química detalhada da corrente efluente: vazão volumétrica, temperatura dos gases, umidade, velocidade média no duto e concentrações de poluentes críticos (SOx, NOx, CO, COV, dioxinas e particulado total). A escolha do sistema de controle ambiental (filtros de manga, precipitadores eletrostáticos, lavadores venturi ou ciclones) decorre diretamente desses parâmetros operacionais.",
    diagramType: "dispersao",
    wagnerConnection: "Wagner possui histórico documentado em monitoramento ambiental e controle de emissões em plantas industriais, combinando experiência em amostragem em chaminés e inventários técnicos de fontes poluidoras à modelagem computacional da pluma de dispersão.",
    fundamentals: [
      "Inventários de emissões atmosféricas e balanços de massa de combustão",
      "Padrões de emissão federais (Resoluções CONAMA 382/2006 e 436/2011) e normas ABNT",
      "Tecnologias de controle ambiental: filtração, absorção química e queima térmica",
      "Sistemas de monitoramento contínuo em chaminé (CEMS)",
    ],
    industrialApplications: [
      "Elaboração de inventários de emissões para relatórios de sustentabilidade e licenciamento",
      "Diagnóstico e especificação de equipamentos de abatimento de poluentes",
      "Otimização de queima em fornos e caldeiras visando redução de emissão de particulados",
      "Auditorias de conformidade com condicionantes de licenças de operação",
    ],
    clusterRelatedSlugs: [
      "amostragem-isocinetica",
      "modelagem-de-dispersao-atmosferica",
      "qualidade-do-ar",
      "aermod",
    ],
    relatedArticleSlugs: [
      "como-funciona-modelagem-de-dispersao-atmosferica",
    ],
    ctaText: "Explorar Emissões Atmosféricas",
  },

  "amostragem-isocinetica": {
    slug: "amostragem-isocinetica",
    title: "Amostragem Isocinética de Chaminés",
    h1: "Amostragem Isocinética de Emissões Atmosféricas",
    seoTitle: "Amostragem Isocinética de Emissões Atmosféricas | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Fundamentos, exigências normativas e princípios físicos da amostragem em dutos e chaminés para determinação precisa de material particulado.",
    pillarSlug: "meio-ambiente-e-sustentabilidade",
    pillarTitle: "Meio Ambiente & Sustentabilidade",
    lead: "Princípios físicos, métodos normativos e rigor metrológico na coleta representativa de material particulado em chaminés industriais.",
    summary: "Medição em campo de material particulado e gases em dutos industriais atendendo normas ABNT e EPA com rigor metrológico.",
    description: "A amostragem isocinética é o procedimento metrológico mandatório para a coleta precisa de material particulado em fluxos gasosos de chaminés industriais. Devido à inércia das partículas sólidas em suspensão, qualquer desvio na velocidade de sucção da sonda em relação à velocidade real do gás provoca segregação aerodinâmica, gerando erros severos de subestimação ou superestimação da concentração emitida.",
    technicalConcept: "A condição isocinética é atingida quando a velocidade do gás que entra no bocal da sonda coletora é rigorosamente idêntica à velocidade do fluxo gasoso no duto no mesmo ponto de medição (razão isocinética entre 90% e 110%). O teste exige medições precisas de pressão dinâmica com tubo de Pitot tipo S, medição contínua de temperatura, determinação da umidade e análise da massa retida no filtro gravimétrico segundo os métodos EPA 5 e ABNT NBR 12019/12021.",
    diagramType: "isocinetica",
    wagnerConnection: "A trajetória prática de Wagner inclui campanhas de campo para caracterização de emissões em diversas tipologias industriais, assegurando que os dados coletados nas chaminés tenham validade legal, técnica e sirvam de entrada confiável para estudos de dispersão atmosférica.",
    fundamentals: [
      "Princípio físico da isocinetismo e conservação da quantidade de movimento aerodinâmico",
      "Método EPA 5 e normas ABNT NBR 12019 e NBR 12021",
      "Determinação de pontos de amostragem em malha de dutos circulares e retangulares",
      "Cálculo de vazão gasosa corrigida para condições normais de temperatura e pressão (CNTP)",
    ],
    industrialApplications: [
      "Determinação oficial da taxa de emissão mássica (kg/h) de material particulado total",
      "Comprovação de eficiência de filtros de manga e lavadores de gases industriais",
      "Subsídio metrológico direto para modelagem de dispersão com o software AERMOD",
      "Atendimento a condicionantes periódicas de órgãos ambientais (CPRH, CETESB, INEA)",
    ],
    clusterRelatedSlugs: [
      "emissoes-atmosfericas",
      "modelagem-de-dispersao-atmosferica",
      "qualidade-do-ar",
    ],
    relatedArticleSlugs: [
      "como-funciona-modelagem-de-dispersao-atmosferica",
    ],
    ctaText: "Explorar Amostragem Isocinética",
  },

  "modelagem-de-dispersao-atmosferica": {
    slug: "modelagem-de-dispersao-atmosferica",
    title: "Modelagem de Dispersão Atmosférica",
    h1: "Modelagem de Dispersão Atmosférica",
    seoTitle: "Modelagem de Dispersão Atmosférica | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Como modelos matemáticos e meteorológicos ajudam a compreender o transporte e a dispersão de poluentes na atmosfera e prever impactos ambientais.",
    pillarSlug: "meio-ambiente-e-sustentabilidade",
    pillarTitle: "Meio Ambiente & Sustentabilidade",
    lead: "Como modelos matemáticos ajudam a compreender o transporte e a dispersão de poluentes na atmosfera.",
    summary: "Simulação numérica e física do transporte, diluição e deposição de poluentes gasosos e particulados no ar ambiente.",
    description: "A modelagem de dispersão atmosférica é a disciplina científica e regulatória que utiliza equações físicas e formulações matemáticas para simular o trajeto percorrido pelos poluentes emitidos por chaminés industriais, veículos ou queimadas. Ao calcular a concentração resultante ao nível do solo em receptores humanos ou ecossistemas sensíveis, a modelagem permite avaliar antecipadamente se um empreendimento causará violação dos padrões de qualidade do ar.",
    technicalConcept: "Modelos de pluma gaussiana e modelos de dispersão avançados calculam o transporte advectivo pelo vento e a diluição turbulenta gerada por convecção térmica e atrito com a superfície. A simulação integra dados horários da micrometeorologia local (camada limite, estabilidade de Monin-Obukhov), modelo digital de elevação do terreno (SRTM) e efeitos aerodinâmicos provocados por edifícios vizinhos (Building Downwash).",
    diagramType: "dispersao",
    wagnerConnection: "Wagner Eustáquio desenvolveu pesquisas pioneiras conectando modelos matemáticos de dispersão com ferramentas de inteligência artificial e lógica fuzzy na UFPE, atuando também como consultor em estudos de impacto ambiental e simulações com o sistema regulatório AERMOD.",
    fundamentals: [
      "Equações gaussianas de dispersão contínua e modelos de dispersão de estado estacionário",
      "Estrutura da camada limite planetária, perfil vertical de vento e turbulência mecânica",
      "Algoritmos de Building Downwash (PRIME) e efeitos de recirculação de esteira",
      "Comparação dos resultados simulados com os padrões da Resolução CONAMA 491/2018",
    ],
    industrialApplications: [
      "Estudos de Impacto Ambiental (EIA/RIMA) para licenciamento prévio e de instalação",
      "Cálculo da altura ideal de chaminés industriais (Good Engineering Practice - GEP)",
      "Identificação de bairros e receptores com maior vulnerabilidade à poluição",
      "Planos de ação emergencial para episódios críticos de inversão térmica",
    ],
    clusterRelatedSlugs: [
      "aermod",
      "emissoes-atmosfericas",
      "qualidade-do-ar",
      "amostragem-isocinetica",
    ],
    relatedArticleSlugs: [
      "como-funciona-modelagem-de-dispersao-atmosferica",
      "7-aplicacoes-praticas-de-inteligencia-artificial-na-engenharia",
    ],
    faqItems: [
      {
        question: "A modelagem de dispersão substitui o monitoramento de qualidade do ar?",
        answer: "Não. A modelagem e o monitoramento são complementares: o monitoramento registra as concentrações em pontos fixos específicos, enquanto a modelagem mapeia toda a mancha de dispersão espacial sobre centenas de quilômetros quadrados.",
      },
      {
        question: "Quais dados são necessários para rodar um estudo de dispersão?",
        answer: "São necessários três blocos essenciais: dados da fonte (altura, diâmetro, vazão, temperatura e emissão mássica), dados meteorológicos horários completos (vento, temperatura, radiação) e topografia do terreno.",
      },
    ],
    futureProduct: {
      title: "Manual de Modelagem de Dispersão Atmosférica",
      subtitle: "Da Teoria Gaussiana à Aplicação Regulatória",
      description: "Conteúdo focado na interpretação física de parâmetros micrometeorológicos, preparação de inventários de fontes e análise crítica de relatórios de impacto.",
      tag: "Em desenvolvimento",
    },
    ctaText: "Explorar Modelagem de Dispersão",
  },

  "aermod": {
    slug: "aermod",
    title: "AERMOD e Modelagem Atmosférica",
    h1: "AERMOD e Modelagem de Dispersão Atmosférica",
    seoTitle: "AERMOD e Modelagem de Dispersão Atmosférica | Prof. Dr. Wagner Eustáquio",
    metaDescription: "O sistema de modelagem atmosférica padrão US-EPA para fontes industriais complexas, processamento AERMET, AERMAP e análise de impacto ambiental.",
    pillarSlug: "meio-ambiente-e-sustentabilidade",
    pillarTitle: "Meio Ambiente & Sustentabilidade",
    lead: "AERMOD é um sistema amplamente utilizado em estudos de dispersão de poluentes atmosféricos, permitindo avaliar como emissões podem se distribuir em diferentes condições ambientais.",
    summary: "O sistema de modelagem atmosférica padrão da EPA americana e dos órgãos ambientais brasileiros para fontes industriais complexas.",
    description: "O AERMOD (AMS/EPA Regulatory Model) é o sistema computacional de dispersão atmosférica de referência mundial adotado pela United States Environmental Protection Agency (US-EPA) e amplamente exigido pelos órgãos ambientais brasileiros no licenciamento industrial. Diferente dos modelos gaussianos simples do passado, o AERMOD baseia-se na física da camada limite planetária para modelar dispersão tanto em condições estáveis quanto convectivas.",
    technicalConcept: "O ecossistema do AERMOD é composto por três módulos integrados: o processador meteorológico AERMET (que calcula parâmetros micrometeorológicos como velocidade de atrito, comprimento de Monin-Obukhov e fluxo de calor à superfície), o pré-processador de terreno AERMAP (que extrai cotas e alturas de escala do relevo a partir de dados digitais de satélite SRTM) e o modelo de dispersão AERMOD, que executa o cálculo de concentrações em malhas de receptores cartesianos ou polares.",
    diagramType: "dispersao",
    wagnerConnection: "Wagner Eustáquio atua como instrutor e consultor em estudos avançados com o AERMOD, orientando a parametrização micrometeorológica, o tratamento de efeitos de interferência predial (PRIME) e a interpretação crítica de isoconcentrações para processos de licenciamento e auditorias de conformidade.",
    fundamentals: [
      "Pré-processamento meteorológico com AERMET (dados de superfície e sondagens de altitude)",
      "Modelagem de terreno complexo com AERMAP (resoluções SRTM de 1 e 3 segundos de arco)",
      "Algoritmo PRIME de cavidade aerodinâmica para edifícios e galpões adjacentes",
      "Processamento estatístico de percentis máximos (1º máximo, 2º máximo e médias anuais)",
    ],
    industrialApplications: [
      "Licenciamento ambiental de refinarias, polos petroquímicos, cimenteiras e usinas térmicas",
      "Dimensionamento e justificativa técnica para alteração de altura de chaminés",
      "Avaliação de conformidade com os padrões de qualidade do ar da Resolução CONAMA 491/2018",
      "Comprovação pericial de não afetação de áreas residenciais vizinhas a polos industriais",
    ],
    clusterRelatedSlugs: [
      "modelagem-de-dispersao-atmosferica",
      "emissoes-atmosfericas",
      "qualidade-do-ar",
    ],
    relatedArticleSlugs: [
      "como-funciona-modelagem-de-dispersao-atmosferica",
    ],
    faqItems: [
      {
        question: "O que é o sistema AERMOD?",
        answer: "É um modelo de dispersão atmosférica de pluma que simula o transporte e dispersão de poluentes gasosos e particulados a distâncias de até 50 km a partir de fontes estacionárias industriais.",
      },
      {
        question: "Para que serve um estudo de dispersão atmosférica com o AERMOD?",
        answer: "Serve para comprovar formalmente perante os órgãos de licenciamento que as emissões industriais planejadas ou existentes não violam os padrões de qualidade do ar onde as pessoas residem ou trabalham.",
      },
      {
        question: "O AERMOD substitui o monitoramento de campo?",
        answer: "Não substitui. O AERMOD prevê o comportamento espacial sob milhares de cenários meteorológicos do ano, indicando exatamente onde devem ser instaladas as estações físicas de monitoramento no solo.",
      },
    ],
    futureProduct: {
      title: "Curso de Introdução ao AERMOD",
      subtitle: "Da Parametrização Meteorológica à Interpretação de Isoconcentrações",
      description: "Treinamento hands-on cobrindo AERMET, AERMAP, modelagem de fontes em relevo acidentado e redação de pareceres técnicos para licenciamento ambiental.",
      tag: "Em desenvolvimento",
    },
    ctaText: "Explorar AERMOD",
  },

  "qualidade-do-ar": {
    slug: "qualidade-do-ar",
    title: "Monitoramento e Qualidade do Ar",
    h1: "Monitoramento e Qualidade do Ar",
    seoTitle: "Monitoramento e Qualidade do Ar | Prof. Dr. Wagner Eustáquio",
    metaDescription: "Avaliação contínua da qualidade do ar ambiente, análise de material particulado (PTS, PM10, PM2.5), gases poluentes e critérios da Resolução CONAMA 491.",
    pillarSlug: "meio-ambiente-e-sustentabilidade",
    pillarTitle: "Meio Ambiente & Sustentabilidade",
    lead: "Avaliação metrológica contínua, análise de particulados e gases poluentes em conformidade com padrões de saúde e diretrizes regulatórias.",
    summary: "Monitoramento contínuo, interpretação de padrões de qualidade do ar e estratégias preventivas para proteção à saúde coletiva.",
    description: "A qualidade do ar reflete o nível de pureza da atmosfera que respiramos e é o parâmetro final que as políticas de controle ambiental visam proteger. Poluentes como material particulado inalável (PM10), partículas finas (PM2.5), dióxido de enxofre (SO2), óxidos de nitrogênio (NOx), monóxido de carbono (CO) e ozônio troposférico (O3) possuem limites legais rígidos fixados pela Resolução CONAMA 491/2018 para mitigar riscos à saúde pública e ao meio biótico.",
    technicalConcept: "O monitoramento baseia-se em redes de estações contínuas automáticas ou amostradores de grandes volumes (Hi-Vol). Os dados horários geram o Índice de Qualidade do Ar (IQAr), classificando o ambiente em categorias (Boa, Moderada, Ruim, Muito Ruim e Péssima). A análise técnica exige correlação estatística com dados da direção e velocidade do vento para traçar a 'rosa dos ventos' e a 'rosa de poluição', identificando os quadrantes responsáveis pelas maiores contribuições.",
    diagramType: "dispersao",
    wagnerConnection: "Wagner Eustáquio atua na análise integrada de qualidade do ar, correlacionando os dados medidos nas redes de monitoramento com as estimativas teóricas de inventários de emissões e modelos de dispersão matemática.",
    fundamentals: [
      "Padrões de qualidade do ar intermediários e finais (Resolução CONAMA 491/2018 e OMS)",
      "Metodologia para cálculo do Índice de Qualidade do Ar (IQAr)",
      "Técnicas de amostragem de PM10 e PM2.5 por atenuação beta e microbalança oscilante (TEOM)",
      "Análise de correlação meteorológica entre rosa dos ventos e picos de poluição",
    ],
    industrialApplications: [
      "Instalação e gestão de redes de monitoramento da qualidade do ar no entorno de plantas industriais",
      "Auditorias periciais para apuração de queixas de incômodo por odores e poeira em comunidades",
      "Elaboração de Planos de Emergência e Alerta para episódios críticos de poluição atmosférica",
      "Validação em campo de modelos de dispersão atmosférica gerados por AERMOD",
    ],
    clusterRelatedSlugs: [
      "emissoes-atmosfericas",
      "modelagem-de-dispersao-atmosferica",
      "aermod",
      "amostragem-isocinetica",
    ],
    relatedArticleSlugs: [
      "como-funciona-modelagem-de-dispersao-atmosferica",
    ],
    ctaText: "Explorar Qualidade do Ar",
  },
};
