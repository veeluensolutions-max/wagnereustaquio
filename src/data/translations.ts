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
