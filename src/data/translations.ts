export type Language = "pt-BR" | "en" | "es";

export interface LanguageOption {
  code: Language;
  name: string;
  country: string;
  flag: string;
  short: string;
  locale: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: "pt-BR",
    name: "Português",
    country: "Brasil",
    flag: "🇧🇷",
    short: "PT",
    locale: "pt-BR",
  },
  {
    code: "en",
    name: "English",
    country: "United States",
    flag: "🇺🇸",
    short: "EN",
    locale: "en-US",
  },
  {
    code: "es",
    name: "Español",
    country: "Hispanoamérica",
    flag: "🇪🇸",
    short: "ES",
    locale: "es-ES",
  },
];

export interface NavTranslationItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface NavTranslationSection {
  title: string;
  href: string;
  items?: NavTranslationItem[];
}

export interface TranslationDictionary {
  header: {
    tagline: string;
    professorTitle: string;
    searchAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    lattesBadge: string;
    coursesCta: string;
    mobileNavTitle: string;
    mobileCoursesCta: string;
    mobileLattesCta: string;
    switchLanguageAria: string;
    activeLanguage: string;
  };
  navigation: NavTranslationSection[];
  hero: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    h1Line3: string;
    name: string;
    description: string;
    phdTitle: string;
    mscTitle: string;
    specTitle: string;
    mitTitle: string;
    ctaTrajectory: string;
    ctaCourses: string;
    lattesCnpq: string;
    statYears: string;
    statYearsSub: string;
    statResearch: string;
    statResearchSub: string;
    statFormation: string;
    statFormationSub: string;
    statSolutions: string;
    statSolutionsSub: string;
    script1: string;
    script2: string;
    script3: string;
    scientificBadge: string;
    cnpqLattesOfficial: string;
  };
  positioning: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    cta: string;
    steps: Array<{
      step: string;
      label: string;
      tagline: string;
      detail: string;
    }>;
  };
  stats: {
    badge: string;
    title: string;
    items: Array<{
      number: string;
      label: string;
      sublabel: string;
      legalNote?: string;
    }>;
  };
  authority: {
    badge: string;
    title: string;
    description: string;
    pilarBadge: string;
    areas: Array<{
      id: string;
      title: string;
      description: string;
      highlights: string[];
      href: string;
    }>;
  };
  sections: {
    featuredCourseBadge: string;
    featuredCourseTitle: string;
    featuredCourseDesc: string;
    articlesBadge: string;
    articlesTitle: string;
    articlesCta: string;
    bookBadge: string;
    bookTitle: string;
    bookCta: string;
    finalCtaBadge: string;
    finalCtaTitle: string;
    finalCtaDesc: string;
    finalCtaButton: string;
    finalCtaSecondary: string;
  };
  footer: {
    heading: string;
    tagline: string;
    title: string;
    summary: string;
    lattesBadge: string;
    verifiedData: string;
    colAuthor: string;
    colKnowledge: string;
    colProducts: string;
    colProfessional: string;
    rightsReserved: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
  common: {
    backToTop: string;
    loading: string;
    readMore: string;
    viewAll: string;
    contactMe: string;
    skipToContent: string;
    languageChangedNotification: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  "pt-BR": {
    header: {
      tagline: "ENGENHARIA • IA • SUSTENTABILIDADE",
      professorTitle: "Prof. Dr. Wagner Vasconcelos",
      searchAria: "Abrir busca rápida (Cmd+K / Ctrl+K)",
      openMenuAria: "Abrir menu principal",
      closeMenuAria: "Fechar menu principal",
      lattesBadge: "Lattes CNPq",
      coursesCta: "Cursos",
      mobileNavTitle: "Navegação Oficial",
      mobileCoursesCta: "Explorar Cursos & Formações",
      mobileLattesCta: "Currículo Lattes Homologado (CNPq)",
      switchLanguageAria: "Alternar idioma do site",
      activeLanguage: "Português (Brasil)",
    },
    navigation: [
      {
        title: "Sobre",
        href: "/sobre",
        items: [
          {
            title: "Biografia",
            href: "/sobre/biografia",
            description: "Visão executiva e narrativa da carreira acadêmica e industrial",
          },
          {
            title: "Trajetória",
            href: "/sobre/trajetoria",
            description: "Marcos cronológicos e evolução contínua de 1995 a 2026",
          },
          {
            title: "Formação",
            href: "/sobre/formacao",
            description: "Graduação, Mestrado IME, Doutorado UFPE, Pós-Doc e formações complementares",
          },
          {
            title: "Currículo Lattes",
            href: "/curriculo-lattes",
            description: "Consulta direta à produção na base oficial CNPq",
          },
        ],
      },
      {
        title: "Áreas",
        href: "/areas-de-conhecimento",
        items: [
          {
            title: "Inteligência Artificial & Dados",
            href: "/areas-de-conhecimento/inteligencia-artificial",
            description: "Lógica fuzzy, redes neurais, machine learning e modelagem computacional",
          },
          {
            title: "Engenharia & Segurança de Processos",
            href: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
            description: "HAZOP, NR-13, análise de riscos industriais e integridade estrutural",
          },
          {
            title: "Meio Ambiente & Sustentabilidade",
            href: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
            description: "Emissões atmosféricas, modelagem AERMOD, amostragem isocinética e qualidade do ar",
          },
          {
            title: "Educação & Desenvolvimento",
            href: "/areas-de-conhecimento/educacao-e-desenvolvimento",
            description: "Docência superior, pesquisa aplicada, gestão acadêmica e formação profissional",
          },
        ],
      },
      {
        title: "Conhecimento",
        href: "/conhecimento",
        items: [
          {
            title: "Artigos Técnicos",
            href: "/conhecimento/artigos",
            description: "Artigos aplicados sobre Engenharia, IA, modelagem e riscos industriais",
          },
          {
            title: "Publicações Científicas",
            href: "/conhecimento/publicacoes-cientificas",
            description: "Artigos em periódicos e congressos nacionais e internacionais",
          },
          {
            title: "Pesquisas",
            href: "/conhecimento/pesquisas",
            description: "Linhas de pesquisa e projetos de inovação tecnológica",
          },
          {
            title: "Livros",
            href: "/conhecimento/livros",
            description: "Obras publicadas e capítulos técnicos",
          },
          {
            title: "Palestras",
            href: "/conhecimento/palestras",
            description: "Conferências, seminários técnicos e apresentações",
          },
        ],
      },
      {
        title: "Produtos",
        href: "/produtos",
        items: [
          {
            title: "Cursos",
            href: "/produtos/cursos",
            description: "Formações técnicas estruturadas em Engenharia e Inteligência Artificial",
          },
          {
            title: "E-books",
            href: "/produtos/ebooks",
            description: "Guias práticos e referências metodológicas aplicadas",
          },
          {
            title: "Ferramentas",
            href: "/produtos/ferramentas",
            description: "Planilhas, checklists, scripts e modelos de cálculo",
          },
          {
            title: "Mentorias",
            href: "/produtos/mentorias",
            description: "Orientação técnica e estratégica para engenheiros e líderes",
          },
          {
            title: "Treinamentos",
            href: "/produtos/treinamentos",
            description: "Capacitação técnica in-company para equipes industriais",
          },
          {
            title: "Lista de Interesse",
            href: "/lista-de-interesse",
            description: "Inscrições prioritárias para próximas turmas e materiais",
          },
        ],
      },
      {
        title: "Palestras",
        href: "/palestras",
      },
      {
        title: "Contato",
        href: "/contato",
      },
    ],
    hero: {
      badge: "ENGENHARIA • PESQUISA • TECNOLOGIA",
      h1Line1: "Ciência, Engenharia e",
      h1Line2: "Inteligência aplicadas",
      h1Line3: "a desafios reais.",
      name: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      description: "Engenheiro, pesquisador e professor com trajetória acadêmica e industrial em Inteligência Artificial, Segurança de Processos, Engenharia Ambiental, Modelagem e Soluções Industriais.",
      phdTitle: "Doutorado em Tecnologias Energéticas e Nucleares",
      mscTitle: "Mestrado em Engenharia Nuclear",
      specTitle: "Engenharia de Segurança do Trabalho",
      mitTitle: "Data Science & Big Data",
      ctaTrajectory: "Conheça minha trajetória",
      ctaCourses: "Explore cursos e conteúdos",
      lattesCnpq: "Consulta de produção acadêmica e técnica na Plataforma Lattes do CNPq →",
      statYears: "+20 anos",
      statYearsSub: "de experiência",
      statResearch: "Pesquisa",
      statResearchSub: "com impacto real",
      statFormation: "Formação",
      statFormationSub: "de profissionais",
      statSolutions: "Soluções",
      statSolutionsSub: "para um futuro sustentável",
      script1: "Conhecimento",
      script2: "que transforma",
      script3: "realidades",
      scientificBadge: "Atuação Científica e Industrial",
      cnpqLattesOfficial: "CNPq / Lattes Oficial",
    },
    positioning: {
      badge: "CONCEITO INTELECTUAL",
      title: "Da pesquisa à aplicação.",
      p1: "Ao longo de sua trajetória, Wagner Eustáquio de Vasconcelos construiu uma atuação que conecta pesquisa científica, ensino superior, engenharia aplicada e solução de problemas reais da indústria.",
      p2: "Seu trabalho transita entre Inteligência Artificial, modelagem matemática, segurança de processos, emissões atmosféricas, monitoramento ambiental e tomada de decisão.",
      cta: "Conheça a trajetória completa",
      steps: [
        {
          step: "01",
          label: "Pesquisa",
          tagline: "Rigor científico e métodos quantitativos",
          detail: "Investigação acadêmica profunda em modelos matemáticos, lógica fuzzy, redes neurais e leis físicas de processos.",
        },
        {
          step: "02",
          label: "Conhecimento",
          tagline: "Sistematização e validação contínua",
          detail: "Transformação de dados brutos e pesquisas em metodologias estruturadas, publicações científicas e material didático.",
        },
        {
          step: "03",
          label: "Aplicação",
          tagline: "Execução em ambiente industrial real",
          detail: "Implementação direta em plantas químicas, estudos de dispersão com AERMOD, auditorias NR-13 e análise de perigos HAZOP.",
        },
        {
          step: "04",
          label: "Resultado",
          tagline: "Segurança, conformidade e eficiência",
          detail: "Decisões operacionais precisas, mitigação de riscos catastróficos, cumprimento regulatório e ganhos de sustentabilidade.",
        },
      ],
    },
    stats: {
      badge: "EXPERIÊNCIA E ESCALA",
      title: "Uma trajetória construída entre ciência, ensino e indústria.",
      items: [
        {
          number: "+20 anos",
          label: "Experiência Profissional",
          sublabel: "Atuação contínua e documentada no setor acadêmico e na indústria de grande porte.",
        },
        {
          number: "50+",
          label: "Produções Científicas e Técnicas",
          sublabel: "Artigos em periódicos nacionais e internacionais, capítulos de livros e congressos.",
        },
        {
          number: "1.000+",
          label: "Profissionais Capacitados",
          sublabel: "Engenheiros, técnicos e gestores formados em cursos de extensão e disciplinas acadêmicas.",
        },
        {
          number: "100+",
          label: "Projetos e Laudos Industriais",
          sublabel: "Modelagens de dispersão AERMOD, análises HAZOP e auditorias de integridade NR-13.",
        },
      ],
    },
    authority: {
      badge: "PILARES DE ATUAÇÃO",
      title: "Conhecimento multidisciplinar para problemas complexos.",
      description: "Quatro áreas que conectam trajetória acadêmica, experiência industrial e produção de conhecimento.",
      pilarBadge: "Pilar de Especialidade",
      areas: [
        {
          id: "inteligencia-artificial",
          title: "Inteligência Artificial & Dados",
          description: "Aplicações práticas de lógica fuzzy, redes neurais e algoritmos preditivos na engenharia industrial e mitigação de incertezas.",
          highlights: ["Lógica Fuzzy Aplicada", "Redes Neurais Artificiais", "Modelagem Preditiva", "Apoio à Decisão"],
          href: "/areas-de-conhecimento/inteligencia-artificial",
        },
        {
          id: "engenharia-e-seguranca",
          title: "Engenharia & Segurança de Processos",
          description: "Prevenção de perdas e acidentes industriais maiores com metodologias quantitativas e normas regulatórias rigorosas.",
          highlights: ["Estudos de HAZOP", "Conformidade NR-13", "Análise Quantitativa de Riscos", "Integridade Estrutural"],
          href: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
        },
        {
          id: "meio-ambiente",
          title: "Meio Ambiente & Sustentabilidade",
          description: "Diagnóstico e prognóstico de impacto com simulações computacionais de qualidade do ar e amostragem em chaminés.",
          highlights: ["Modelagem AERMOD / US-EPA", "Amostragem Isocinética", "Inventário de Emissões", "Licenciamento Ambiental"],
          href: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
        },
        {
          id: "educacao",
          title: "Educação & Desenvolvimento",
          description: "Formação técnica de excelência em nível superior, cursos de extensão e capacitação corporativa in-company.",
          highlights: ["Docência Universitária", "Capacitação In-Company", "Pesquisa Aplicada", "Orientação Técnica"],
          href: "/areas-de-conhecimento/educacao-e-desenvolvimento",
        },
      ],
    },
    sections: {
      featuredCourseBadge: "FORMAÇÃO TÉCNICA EM DESTAQUE",
      featuredCourseTitle: "IA Aplicada à Engenharia e Tomada de Decisão",
      featuredCourseDesc: "Um programa completo que capacita engenheiros a modelar processos reais com Lógica Fuzzy e Redes Neurais.",
      articlesBadge: "CONHECIMENTO APLICADO",
      articlesTitle: "Artigos Técnicos e Análises",
      articlesCta: "Acessar todos os artigos",
      bookBadge: "PUBLICAÇÃO OFICIAL",
      bookTitle: "Livro Técnico em Lógica Fuzzy",
      bookCta: "Conhecer a obra e capítulos",
      finalCtaBadge: "CONTATO TÉCNICO E CONSULTORIA",
      finalCtaTitle: "Vamos construir soluções inteligentes para a sua organização?",
      finalCtaDesc: "Atuação em consultoria técnica, modelagens avançadas, treinamentos corporativos in-company e conferências acadêmicas.",
      finalCtaButton: "Iniciar Conversa Técnica",
      finalCtaSecondary: "Ver Áreas de Atuação",
    },
    footer: {
      heading: "Rodapé institucional",
      tagline: "Plataforma de Autoridade Técnica & Científica",
      title: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      summary: "Engenharia, Inteligência Artificial e Sustentabilidade aplicadas a problemas reais da indústria e da pesquisa científica.",
      lattesBadge: "Base Lattes CNPq",
      verifiedData: "Dados Factuais Verificados",
      colAuthor: "Wagner Vasconcelos",
      colKnowledge: "Conhecimento",
      colProducts: "Produtos",
      colProfessional: "Profissional",
      rightsReserved: "Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      cookies: "Política de Cookies",
    },
    common: {
      backToTop: "Voltar ao topo",
      loading: "Carregando...",
      readMore: "Ler mais",
      viewAll: "Ver todos",
      contactMe: "Entre em contato",
      skipToContent: "Pular para o conteúdo principal",
      languageChangedNotification: "Idioma alterado para Português (Brasil)",
    },
  },
  "en": {
    header: {
      tagline: "ENGINEERING • AI • SUSTAINABILITY",
      professorTitle: "Prof. Dr. Wagner Vasconcelos",
      searchAria: "Open quick search (Cmd+K / Ctrl+K)",
      openMenuAria: "Open main navigation",
      closeMenuAria: "Close main navigation",
      lattesBadge: "Lattes CV",
      coursesCta: "Courses",
      mobileNavTitle: "Official Navigation",
      mobileCoursesCta: "Explore Courses & Training",
      mobileLattesCta: "Official Lattes CV (CNPq)",
      switchLanguageAria: "Switch website language",
      activeLanguage: "English (US)",
    },
    navigation: [
      {
        title: "About",
        href: "/sobre",
        items: [
          {
            title: "Biography",
            href: "/sobre/biografia",
            description: "Executive vision and comprehensive narrative of academic & industrial career",
          },
          {
            title: "Timeline",
            href: "/sobre/trajetoria",
            description: "Chronological milestones and continuous evolution from 1995 to 2026",
          },
          {
            title: "Education",
            href: "/sobre/formacao",
            description: "Undergraduate, IME Master's, UFPE Doctorate, Post-Doc & certificates",
          },
          {
            title: "Lattes Curriculum",
            href: "/curriculo-lattes",
            description: "Direct lookup on the Brazilian National Research Council (CNPq)",
          },
        ],
      },
      {
        title: "Areas",
        href: "/areas-de-conhecimento",
        items: [
          {
            title: "Artificial Intelligence & Data",
            href: "/areas-de-conhecimento/inteligencia-artificial",
            description: "Fuzzy logic, neural networks, machine learning & computational modeling",
          },
          {
            title: "Engineering & Process Safety",
            href: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
            description: "HAZOP, industrial risk analysis, regulatory safety & structural integrity",
          },
          {
            title: "Environment & Sustainability",
            href: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
            description: "Atmospheric emissions, AERMOD modeling, isokinetic sampling & air quality",
          },
          {
            title: "Education & Development",
            href: "/areas-de-conhecimento/educacao-e-desenvolvimento",
            description: "Higher education teaching, applied research, academic governance & mentoring",
          },
        ],
      },
      {
        title: "Knowledge",
        href: "/conhecimento",
        items: [
          {
            title: "Technical Articles",
            href: "/conhecimento/artigos",
            description: "Applied articles on Engineering, AI, modeling and industrial hazards",
          },
          {
            title: "Scientific Publications",
            href: "/conhecimento/publicacoes-cientificas",
            description: "Peer-reviewed journal papers and international conference proceedings",
          },
          {
            title: "Research Lines",
            href: "/conhecimento/pesquisas",
            description: "Active research tracks and technological innovation projects",
          },
          {
            title: "Books",
            href: "/conhecimento/livros",
            description: "Authored books, monographs and specialized technical chapters",
          },
          {
            title: "Keynotes & Talks",
            href: "/conhecimento/palestras",
            description: "Conferences, technical keynotes and industrial seminars",
          },
        ],
      },
      {
        title: "Products",
        href: "/produtos",
        items: [
          {
            title: "Courses",
            href: "/produtos/cursos",
            description: "Structured technical programs in Engineering and Artificial Intelligence",
          },
          {
            title: "E-books",
            href: "/produtos/ebooks",
            description: "Practical guides and applied methodological reference manuals",
          },
          {
            title: "Tools & Spreadsheets",
            href: "/produtos/ferramentas",
            description: "Engineering spreadsheets, checklists, calculation templates & scripts",
          },
          {
            title: "Mentorship",
            href: "/produtos/mentorias",
            description: "High-level strategic and technical guidance for engineers and leaders",
          },
          {
            title: "Corporate Training",
            href: "/produtos/treinamentos",
            description: "In-company specialized technical training for industrial engineering teams",
          },
          {
            title: "Waitlist",
            href: "/lista-de-interesse",
            description: "Priority enrollment for upcoming cohorts and exclusive technical releases",
          },
        ],
      },
      {
        title: "Keynotes",
        href: "/palestras",
      },
      {
        title: "Contact",
        href: "/contato",
      },
    ],
    hero: {
      badge: "ENGINEERING • RESEARCH • TECHNOLOGY",
      h1Line1: "Science, Engineering and",
      h1Line2: "Intelligence applied",
      h1Line3: "to real-world challenges.",
      name: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      description: "Engineer, researcher and professor with extensive academic and industrial leadership in Artificial Intelligence, Process Safety, Environmental Engineering, Modeling, and Industrial Solutions.",
      phdTitle: "PhD in Energy and Nuclear Technologies",
      mscTitle: "Master of Science in Nuclear Engineering",
      specTitle: "Occupational Safety Engineering",
      mitTitle: "Data Science & Big Data",
      ctaTrajectory: "Explore my background",
      ctaCourses: "Explore courses & knowledge",
      lattesCnpq: "Review academic & technical credentials on CNPq Lattes Platform →",
      statYears: "+20 years",
      statYearsSub: "of experience",
      statResearch: "Research",
      statResearchSub: "with tangible impact",
      statFormation: "Training",
      statFormationSub: "for professionals",
      statSolutions: "Solutions",
      statSolutionsSub: "for a sustainable future",
      script1: "Knowledge",
      script2: "that transforms",
      script3: "realities",
      scientificBadge: "Scientific & Industrial Practice",
      cnpqLattesOfficial: "Official CNPq / Lattes",
    },
    positioning: {
      badge: "CORE PHILOSOPHY",
      title: "From academic research to real application.",
      p1: "Throughout his career, Dr. Wagner Eustáquio de Vasconcelos has bridged top-tier scientific research, higher education teaching, applied engineering, and high-stakes industrial problem solving.",
      p2: "His work spans Artificial Intelligence, mathematical modeling, chemical process safety, atmospheric dispersion, environmental compliance, and multi-criteria decision making.",
      cta: "Explore complete background",
      steps: [
        {
          step: "01",
          label: "Research",
          tagline: "Scientific rigor and quantitative methods",
          detail: "Deep academic investigation into mathematical modeling, fuzzy logic, neural networks, and chemical/physical process laws.",
        },
        {
          step: "02",
          label: "Knowledge",
          tagline: "Systematization and peer validation",
          detail: "Transforming raw data and laboratory research into structured methodologies, peer-reviewed publications, and technical literature.",
        },
        {
          step: "03",
          label: "Application",
          tagline: "Real-world industrial deployment",
          detail: "Direct field implementation in chemical plants, EPA AERMOD dispersion studies, NR-13 audits, and HAZOP risk analyses.",
        },
        {
          step: "04",
          label: "Outcomes",
          tagline: "Safety, compliance, and efficiency",
          detail: "Precise operational decisions, catastrophic risk mitigation, stringent environmental compliance, and measurable sustainability gains.",
        },
      ],
    },
    stats: {
      badge: "EXPERIENCE & SCALE",
      title: "A journey built across science, teaching, and industry.",
      items: [
        {
          number: "+20 yrs",
          label: "Professional Experience",
          sublabel: "Continuous and documented track record across academia and major industrial corporations.",
        },
        {
          number: "50+",
          label: "Scientific & Technical Works",
          sublabel: "Peer-reviewed international journal papers, books, book chapters, and congress proceedings.",
        },
        {
          number: "1,000+",
          label: "Professionals Trained",
          sublabel: "Engineers, scientists, and executives trained in specialized programs and university degrees.",
        },
        {
          number: "100+",
          label: "Industrial Projects & Reports",
          sublabel: "AERMOD atmospheric dispersion models, HAZOP workshops, and NR-13 structural integrity audits.",
        },
      ],
    },
    authority: {
      badge: "CORE PILLARS",
      title: "Multidisciplinary expertise for complex challenges.",
      description: "Four integrated domains connecting academic rigor, industrial know-how, and knowledge production.",
      pilarBadge: "Core Specialty Pillar",
      areas: [
        {
          id: "inteligencia-artificial",
          title: "Artificial Intelligence & Data",
          description: "Practical applications of fuzzy logic, neural networks, and predictive machine learning models to industrial engineering and uncertainty mitigation.",
          highlights: ["Applied Fuzzy Logic", "Artificial Neural Networks", "Predictive Modeling", "Decision Support Systems"],
          href: "/areas-de-conhecimento/inteligencia-artificial",
        },
        {
          id: "engenharia-e-seguranca",
          title: "Engineering & Process Safety",
          description: "Major hazard prevention and plant safety governance using quantitative risk methodologies and strict regulatory standards.",
          highlights: ["HAZOP Methodologies", "NR-13 Regulatory Audits", "Quantitative Risk Assessment", "Structural Integrity"],
          href: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
        },
        {
          id: "meio-ambiente",
          title: "Environment & Sustainability",
          description: "Air quality diagnosis and dispersion forecasting using computer simulations and advanced stack isokinetic sampling.",
          highlights: ["US-EPA AERMOD Modeling", "Isokinetic Stack Sampling", "Air Emissions Inventories", "Environmental Permitting"],
          href: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
        },
        {
          id: "educacao",
          title: "Education & Development",
          description: "High-level higher education teaching, professional development courses, and custom in-company technical training programs.",
          highlights: ["University Teaching", "In-Company Training", "Applied Research", "Technical Advisory"],
          href: "/areas-de-conhecimento/educacao-e-desenvolvimento",
        },
      ],
    },
    sections: {
      featuredCourseBadge: "FEATURED TECHNICAL TRAINING",
      featuredCourseTitle: "AI Applied to Engineering and Decision Making",
      featuredCourseDesc: "A complete curriculum enabling engineers to model real-world processes with Fuzzy Logic and Artificial Neural Networks.",
      articlesBadge: "APPLIED INSIGHTS",
      articlesTitle: "Technical Articles & Analysis",
      articlesCta: "View all articles",
      bookBadge: "OFFICIAL MONOGRAPH",
      bookTitle: "Technical Book on Fuzzy Logic",
      bookCta: "Explore book and chapters",
      finalCtaBadge: "CONSULTING & TECHNICAL ADVISORY",
      finalCtaTitle: "Ready to build intelligent solutions for your organization?",
      finalCtaDesc: "Available for engineering consulting, advanced mathematical modeling, corporate in-company training, and scientific keynotes.",
      finalCtaButton: "Start Technical Inquiry",
      finalCtaSecondary: "Explore Core Specialties",
    },
    footer: {
      heading: "Institutional footer",
      tagline: "Technical & Scientific Authority Platform",
      title: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      summary: "Engineering, Artificial Intelligence, and Sustainability applied to real-world industrial and scientific research challenges.",
      lattesBadge: "CNPq Lattes Database",
      verifiedData: "Fact-Checked & Verified Data",
      colAuthor: "Wagner Vasconcelos",
      colKnowledge: "Knowledge Base",
      colProducts: "Products & Courses",
      colProfessional: "Professional",
      rightsReserved: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      cookies: "Cookie Policy",
    },
    common: {
      backToTop: "Back to top",
      loading: "Loading...",
      readMore: "Read more",
      viewAll: "View all",
      contactMe: "Get in touch",
      skipToContent: "Skip to main content",
      languageChangedNotification: "Language switched to English",
    },
  },
  "es": {
    header: {
      tagline: "INGENIERÍA • IA • SOSTENIBILIDAD",
      professorTitle: "Prof. Dr. Wagner Vasconcelos",
      searchAria: "Abrir búsqueda rápida (Cmd+K / Ctrl+K)",
      openMenuAria: "Abrir navegación principal",
      closeMenuAria: "Cerrar navegación principal",
      lattesBadge: "CV Lattes",
      coursesCta: "Cursos",
      mobileNavTitle: "Navegación Oficial",
      mobileCoursesCta: "Explorar Cursos y Capacitaciones",
      mobileLattesCta: "Currículum Lattes Homologado (CNPq)",
      switchLanguageAria: "Cambiar idioma del sitio",
      activeLanguage: "Español",
    },
    navigation: [
      {
        title: "Sobre mí",
        href: "/sobre",
        items: [
          {
            title: "Biografía",
            href: "/sobre/biografia",
            description: "Visión ejecutiva y trayectoria académica e industrial",
          },
          {
            title: "Trayectoria",
            href: "/sobre/trajetoria",
            description: "Hitos cronológicos y evolución continua de 1995 a 2026",
          },
          {
            title: "Formación",
            href: "/sobre/formacao",
            description: "Grado, Maestría IME, Doctorado UFPE, Postdoctorado y certificaciones",
          },
          {
            title: "Currículum Lattes",
            href: "/curriculo-lattes",
            description: "Consulta directa en la base oficial del CNPq Brasil",
          },
        ],
      },
      {
        title: "Áreas",
        href: "/areas-de-conhecimento",
        items: [
          {
            title: "Inteligencia Artificial y Datos",
            href: "/areas-de-conhecimento/inteligencia-artificial",
            description: "Lógica difusa, redes neuronales, machine learning y modelado computacional",
          },
          {
            title: "Ingeniería y Seguridad de Procesos",
            href: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
            description: "HAZOP, análisis de riesgos industriales e integridad estructural",
          },
          {
            title: "Medio Ambiente y Sostenibilidad",
            href: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
            description: "Emisiones atmosféricas, modelado AERMOD, muestreo isocinético y calidad del aire",
          },
          {
            title: "Educación y Desarrollo",
            href: "/areas-de-conhecimento/educacao-e-desenvolvimento",
            description: "Docencia universitaria, investigación aplicada, gestión académica y mentoría",
          },
        ],
      },
      {
        title: "Conocimiento",
        href: "/conhecimento",
        items: [
          {
            title: "Artículos Técnicos",
            href: "/conhecimento/artigos",
            description: "Artículos aplicados sobre Ingeniería, IA, modelado y riesgos industriales",
          },
          {
            title: "Publicaciones Científicas",
            href: "/conhecimento/publicacoes-cientificas",
            description: "Artículos en revistas indexadas y congresos internacionales",
          },
          {
            title: "Investigaciones",
            href: "/conhecimento/pesquisas",
            description: "Líneas de investigación y proyectos de innovación tecnológica",
          },
          {
            title: "Libros",
            href: "/conhecimento/livros",
            description: "Obras publicadas y capítulos técnicos especializados",
          },
          {
            title: "Conferencias",
            href: "/conhecimento/palestras",
            description: "Ponencias magistrales, seminarios técnicos y simposios",
          },
        ],
      },
      {
        title: "Productos",
        href: "/produtos",
        items: [
          {
            title: "Cursos",
            href: "/produtos/cursos",
            description: "Capacitaciones técnicas estructuradas en Ingeniería e Inteligencia Artificial",
          },
          {
            title: "E-books",
            href: "/produtos/ebooks",
            description: "Guías prácticas y manuales metodológicos aplicados",
          },
          {
            title: "Herramientas",
            href: "/produtos/ferramentas",
            description: "Hojas de cálculo, checklists, modelos y algoritmos técnicos",
          },
          {
            title: "Mentorías",
            href: "/produtos/mentorias",
            description: "Orientación técnica y estratégica para ingenieros y directivos",
          },
          {
            title: "Entrenamiento In-Company",
            href: "/produtos/treinamentos",
            description: "Capacitación corporativa técnica a medida para plantas industriales",
          },
          {
            title: "Lista de Espera",
            href: "/lista-de-interesse",
            description: "Inscripciones preferenciales para nuevas promociones y recursos",
          },
        ],
      },
      {
        title: "Conferencias",
        href: "/palestras",
      },
      {
        title: "Contacto",
        href: "/contato",
      },
    ],
    hero: {
      badge: "INGENIERÍA • INVESTIGACIÓN • TECNOLOGÍA",
      h1Line1: "Ciencia, Ingeniería e",
      h1Line2: "Inteligencia aplicadas",
      h1Line3: "a desafíos reales.",
      name: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      description: "Ingeniero, investigador y docente con destacada trayectoria académica e industrial en Inteligencia Artificial, Seguridad de Procesos, Ingeniería Ambiental, Modelado y Soluciones Industriales.",
      phdTitle: "Doctorado en Tecnologías Energéticas y Nucleares",
      mscTitle: "Maestría en Ingeniería Nuclear",
      specTitle: "Ingeniería de Seguridad en el Trabajo",
      mitTitle: "Ciencia de Datos y Big Data",
      ctaTrajectory: "Conozca mi trayectoria",
      ctaCourses: "Explorar cursos y contenidos",
      lattesCnpq: "Consulta de producción académica en la Plataforma Lattes del CNPq →",
      statYears: "+20 años",
      statYearsSub: "de experiencia",
      statResearch: "Investigación",
      statResearchSub: "con impacto real",
      statFormation: "Formación",
      statFormationSub: "de profesionales",
      statSolutions: "Soluciones",
      statSolutionsSub: "para un futuro sostenible",
      script1: "Conocimiento",
      script2: "que transforma",
      script3: "realidades",
      scientificBadge: "Práctica Científica e Industrial",
      cnpqLattesOfficial: "CNPq / Lattes Oficial",
    },
    positioning: {
      badge: "CONCEPTO INTELECTUAL",
      title: "De la investigación a la aplicación.",
      p1: "A lo largo de su carrera, el Dr. Wagner Eustáquio de Vasconcelos ha construido un perfil que conecta investigación científica, docencia universitaria, ingeniería aplicada y resolución de problemas industriales complejos.",
      p2: "Su especialidad abarca Inteligencia Artificial, modelado matemático, seguridad en procesos químicos, emisiones a la atmósfera, monitoreo ambiental y toma de decisiones estratégicas.",
      cta: "Conozca la trayectoria completa",
      steps: [
        {
          step: "01",
          label: "Investigación",
          tagline: "Rigor científico y métodos cuantitativos",
          detail: "Investigación profunda en modelos matemáticos, lógica difusa, redes neuronales y fundamentos físicos de procesos.",
        },
        {
          step: "02",
          label: "Conocimiento",
          tagline: "Sistematización y validación continua",
          detail: "Transformación de datos brutos e investigaciones en metodologías estructuradas, publicaciones científicas y literatura técnica.",
        },
        {
          step: "03",
          label: "Aplicación",
          tagline: "Ejecución en plantas industriales reales",
          detail: "Implementación directa en plantas químicas, estudios de dispersión con AERMOD, auditorías NR-13 y talleres HAZOP.",
        },
        {
          step: "04",
          label: "Resultados",
          tagline: "Seguridad, cumplimiento y eficiencia",
          detail: "Decisiones operativas certeras, mitigación de riesgos catastróficos, cumplimiento normativo y sostenibilidad medible.",
        },
      ],
    },
    stats: {
      badge: "EXPERIENCIA Y ESCALA",
      title: "Una trayectoria forjada entre ciencia, docencia e industria.",
      items: [
        {
          number: "+20 años",
          label: "Experiencia Profesional",
          sublabel: "Trayectoria continua y documentada en el ámbito académico e industrial de gran escala.",
        },
        {
          number: "50+",
          label: "Publicaciones Científicas",
          sublabel: "Artículos en revistas internacionales indexadas, libros especializados y congresos globales.",
        },
        {
          number: "1.000+",
          label: "Profesionales Formados",
          sublabel: "Ingenieros, científicos y directivos capacitados en programas de posgrado y formación corporativa.",
        },
        {
          number: "100+",
          label: "Proyectos y Dictámenes Técnicos",
          sublabel: "Modelados de dispersión AERMOD, análisis de riesgo HAZOP y auditorías de integridad NR-13.",
        },
      ],
    },
    authority: {
      badge: "PILARES DE ESPECIALIDAD",
      title: "Conocimiento multidisciplinario para problemas complejos.",
      description: "Cuatro ejes integrados que unen rigor académico, experiencia industrial y generación de conocimiento.",
      pilarBadge: "Pilar de Especialidad",
      areas: [
        {
          id: "inteligencia-artificial",
          title: "Inteligencia Artificial y Datos",
          description: "Aplicación práctica de lógica difusa, redes neuronales y modelado predictivo para resolver problemas de ingeniería y mitigar la incertidumbre.",
          highlights: ["Lógica Difusa Aplicada", "Redes Neuronales Artificiales", "Modelado Predictivo", "Sistemas de Apoyo a Decisiones"],
          href: "/areas-de-conhecimento/inteligencia-artificial",
        },
        {
          id: "engenharia-e-seguranca",
          title: "Ingeniería y Seguridad de Procesos",
          description: "Prevención de riesgos mayores y accidentes industriales mediante metodologías cuantitativas y rigurosas normas internacionales.",
          highlights: ["Estudios HAZOP", "Conformidad NR-13", "Análisis Cuantitativo de Riesgos", "Integridad Estructural"],
          href: "/areas-de-conhecimento/engenharia-e-seguranca-de-processos",
        },
        {
          id: "meio-ambiente",
          title: "Medio Ambiente y Sostenibilidad",
          description: "Diagnóstico y predicción del impacto atmosférico mediante simulaciones computacionales avanzadas y muestreo isocinético.",
          highlights: ["Modelado AERMOD / US-EPA", "Muestreo Isocinético", "Inventario de Emisiones", "Licenciamiento Ambiental"],
          href: "/areas-de-conhecimento/meio-ambiente-e-sustentabilidade",
        },
        {
          id: "educacao",
          title: "Educación y Desarrollo",
          description: "Formación técnica de excelencia universitaria, cursos de extensión especializados y capacitación corporativa in-company.",
          highlights: ["Docencia Universitaria", "Capacitación In-Company", "Investigación Aplicada", "Mentoría Técnica"],
          href: "/areas-de-conhecimento/educacao-e-desenvolvimento",
        },
      ],
    },
    sections: {
      featuredCourseBadge: "CAPACITACIÓN TÉCNICA DESTACADA",
      featuredCourseTitle: "IA Aplicada a la Ingeniería y Toma de Decisiones",
      featuredCourseDesc: "Un programa completo que capacita a ingenieros para modelar procesos industriales con Lógica Difusa y Redes Neuronales.",
      articlesBadge: "CONOCIMIENTO APLICADO",
      articlesTitle: "Artículos Técnicos y Análisis",
      articlesCta: "Ver todos los artículos",
      bookBadge: "OBRA MONOGRÁFICA",
      bookTitle: "Libro Técnico en Lógica Difusa",
      bookCta: "Conocer el libro y sus capítulos",
      finalCtaBadge: "CONSULTORÍA Y CONTACTO TÉCNICO",
      finalCtaTitle: "¿Construimos soluciones inteligentes para su organización?",
      finalCtaDesc: "Consultoría especializada, modelados avanzados, programas in-company para plantas y conferencias magistrales.",
      finalCtaButton: "Iniciar Contacto Técnico",
      finalCtaSecondary: "Ver Áreas de Especialidad",
    },
    footer: {
      heading: "Pie de página institucional",
      tagline: "Plataforma de Autoridad Técnica y Científica",
      title: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      summary: "Ingeniería, Inteligencia Artificial y Sostenibilidad aplicadas a desafíos industriales y científicos de alta complejidad.",
      lattesBadge: "Base Lattes CNPq",
      verifiedData: "Datos Verificados y Factuales",
      colAuthor: "Wagner Vasconcelos",
      colKnowledge: "Conocimiento",
      colProducts: "Productos y Cursos",
      colProfessional: "Profesional",
      rightsReserved: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Uso",
      cookies: "Política de Cookies",
    },
    common: {
      backToTop: "Volver arriba",
      loading: "Cargando...",
      readMore: "Leer más",
      viewAll: "Ver todos",
      contactMe: "Contactar",
      skipToContent: "Saltar al contenido principal",
      languageChangedNotification: "Idioma cambiado a Español",
    },
  },
};
