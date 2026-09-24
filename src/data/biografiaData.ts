import { Language } from "./translations";

export interface BiografiaFactItem {
  label: string;
  value: string;
}

export interface BiografiaChapter {
  id: string;
  number: string;
  title: string;
  period: string;
  heading: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  callout?: {
    quote: string;
    sub: string;
  };
  quoteBlock?: string;
  paragraphs: string[];
  disciplines?: string[];
  bulletPoints?: { bold: string; text: string }[];
  crossLinks?: { label: string; href: string }[];
}

export interface BiografiaContentData {
  officialBadge: string;
  title: string;
  subtitle: string;
  chaptersNavLabel: string;
  indexMobileBtn: string;
  readingSummary: string;
  factualSheetTitle: string;
  factualFacts: BiografiaFactItem[];
  lattesValidationText: string;
  chapters: BiografiaChapter[];
  closingCard: {
    title: string;
    p: string;
    timelineLink: string;
    educationLink: string;
  };
}

export const BIOGRAFIA_TRANSLATIONS: Record<Language, BiografiaContentData> = {
  "pt-BR": {
    officialBadge: "DOCUMENTAÇÃO BIOGRÁFICA OFICIAL",
    title: "Biografia",
    subtitle: "Da Engenharia Química à Inteligência Artificial aplicada: uma trajetória marcada pela integração entre pesquisa, ensino e prática profissional.",
    chaptersNavLabel: "Capítulos:",
    indexMobileBtn: "Índice",
    readingSummary: "Sumário de Leitura",
    factualSheetTitle: "Ficha de Referência Factual",
    factualFacts: [
      { label: "Formação de Base:", value: "Engenharia Química — UNICAP (1995–2000)" },
      { label: "Mestrado:", value: "Engenharia Nuclear — IME (2003–2005)" },
      { label: "Doutorado:", value: "Tecnologias Energéticas e Nucleares — UFPE (2005–2009)" },
      { label: "Pós-Doutorados:", value: "UFPE (2011–2015) e IME (2026)" },
      { label: "Especialização:", value: "Engenharia de Segurança do Trabalho — USP (634h)" },
      { label: "Formação Complementar:", value: "Data Science & Big Data — MIT (Extensão Executiva 45h, 2025)" },
    ],
    lattesValidationText: "Validado pelo CNPq (Plataforma Lattes Oficial)",
    chapters: [
      {
        id: "capitulo-1",
        number: "01",
        title: "O início na Engenharia",
        period: "1995 – 2000",
        heading: "O início na Engenharia",
        badge: "CAPÍTULO 1",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-800",
        paragraphs: [
          "A trajetória de Wagner Eustáquio de Vasconcelos tem como alicerce a graduação em Engenharia Química pela Universidade Católica de Pernambuco (UNICAP), concluída no ano 2000. Durante o período formativo, Wagner dedicou-se ao domínio de fenômenos de transporte, termodinâmica aplicada, operações unitárias e cinética química.",
          "Ainda durante a graduação, as primeiras experiências em ambientes de laboratório e contato com rotinas industriais despertaram o interesse pela modelagem matemática de processos contínuos e pelo rigor analítico necessário para antecipar desvios operacionais. Esse período consolidou a convicção de que a ciência exata ganha sentido quando traduzida em segurança e eficiência para sistemas produtivos."
        ]
      },
      {
        id: "capitulo-2",
        number: "02",
        title: "Pesquisa e Engenharia Nuclear",
        period: "2003 – 2005",
        heading: "Pesquisa e Engenharia Nuclear",
        badge: "CAPÍTULO 2",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-800",
        paragraphs: [
          "A busca por modelos computacionais e físicos de altíssima exigência técnica conduziu Wagner ao Instituto Militar de Engenharia (IME), no Rio de Janeiro, onde cursou o Mestrado em Engenharia Nuclear entre 2003 e 2005.",
          "No IME, suas pesquisas concentraram-se na modelagem física, análise de radionuclídeos e monitoração ambiental. A Engenharia Nuclear exigiu uma imersão profunda em equações diferenciais complexas, simulação computacional de dispersão e análise de confiabilidade de sistemas críticos, estabelecendo as bases metodológicas que acompanhariam toda a sua carreira posterior."
        ]
      },
      {
        id: "capitulo-3",
        number: "03",
        title: "Inteligência Artificial antes do boom",
        period: "2005 – 2009",
        heading: "Inteligência Artificial antes do boom da IA",
        badge: "CAPÍTULO 3",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-900",
        callout: {
          quote: "“A Inteligência Artificial entrou na trajetória de Wagner muito antes de se tornar um fenômeno de mercado.”",
          sub: "Pilar pioneiro desenvolvido no Doutorado em Tecnologias Energéticas e Nucleares (UFPE, 2005–2009)."
        },
        quoteBlock: "“Aplicação de Técnicas de Inteligência Artificial na Avaliação da Exposição de Populações de Regiões de Alto Background Natural.”",
        paragraphs: [
          "No doutorado pela Universidade Federal de Pernambuco (UFPE), Wagner desenvolveu a tese intitulada:",
          "A pesquisa combinou Lógica Fuzzy, Redes Neurais Artificiais e modelos híbridos Neuro-Fuzzy aplicados à avaliação de risco ambiental e auxílio à tomada de decisão. O trabalho demonstrou como algoritmos inteligentes podiam processar incertezas operacionais e dados ambientais complexos com fidelidade superior aos métodos determinísticos convencionais."
        ],
        crossLinks: [
          { label: "Inteligência Artificial na Engenharia", href: "/especialidades/inteligencia-artificial" }
        ]
      },
      {
        id: "capitulo-4",
        number: "04",
        title: "Docência e formação de engenheiros",
        period: "2009 em diante",
        heading: "Docência e formação de engenheiros",
        badge: "CAPÍTULO 4",
        badgeBg: "bg-emerald-100",
        badgeText: "text-emerald-800",
        paragraphs: [
          "Paralelamente à pesquisa, a atuação docente tornou-se um pilar contínuo. Como professor do ensino superior, Wagner lecionou em cursos de graduação e pós-graduação em Engenharia Química, Engenharia Ambiental e Engenharia de Produção.",
          "Entre as principais disciplinas ministradas ao longo dos anos, destacam-se:",
          "Essa experiência pedagógica contínua gerou a formação de centenas de engenheiros hoje atuantes no mercado nacional e em centros de pesquisa."
        ],
        disciplines: [
          "Modelagem e Simulação de Processos",
          "Segurança e Confiabilidade Industrial",
          "Métodos Computacionais Aplicados",
          "Instrumentação e Controle",
          "Pesquisa Operacional e Otimização",
          "Vasos de Pressão e Caldeiras (NR-13)"
        ]
      },
      {
        id: "capitulo-5",
        number: "05",
        title: "Gestão acadêmica",
        period: "Gestão e Liderança",
        heading: "Gestão acadêmica",
        badge: "CAPÍTULO 5",
        badgeBg: "bg-amber-100",
        badgeText: "text-amber-800",
        paragraphs: [
          "A liderança de Wagner refletiu-se também na gestão educacional. Ocupou a coordenação do curso de Engenharia Química, a coordenação do curso de Licenciatura em Química e liderou o programa de pós-graduação lato sensu em Engenharia de Petróleo e Gás.",
          "Sua atuação incluiu a reestruturação de projetos pedagógicos de cursos (PPC), modernização de matrizes curriculares, implantação de laboratórios práticos e participação ativa em colegiados acadêmicos e comissões avaliativas institucionais."
        ]
      },
      {
        id: "capitulo-6",
        number: "06",
        title: "Da universidade à indústria",
        period: "Engenharia Aplicada",
        heading: "Da universidade à indústria",
        badge: "CAPÍTULO 6",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-800",
        paragraphs: [
          "A ponte entre o rigor da academia e a realidade das plantas produtivas consolidou a atuação de Wagner em consultoria técnica especializada e engenharia aplicada. Sua intervenção técnica abrange áreas críticas:"
        ],
        bulletPoints: [
          { bold: "Segurança de Processos e NR-13:", text: "Auditorias de conformidade, cálculo de vida útil remanescente e estudos de perigo (HAZOP) para vasos de pressão e caldeiras." },
          { bold: "Engenharia Ambiental e Emissões:", text: "Diagnósticos de fontes fixas, amostragem isocinética e modelagem matemática de dispersão atmosférica via software regulatório AERMOD." },
          { bold: "Sistemas Industriais e Perícias:", text: "Soluções para mitigação de risco catastrófico e melhoria da eficiência energética." }
        ],
        crossLinks: [
          { label: "Segurança de Processos", href: "/especialidades/seguranca-de-processos" },
          { label: "Engenharia Ambiental", href: "/especialidades/engenharia-ambiental" }
        ]
      },
      {
        id: "capitulo-7",
        number: "07",
        title: "Dados, inovação e atualização permanente",
        period: "Fronteira Tecnológica",
        heading: "Dados, inovação e atualização permanente",
        badge: "CAPÍTULO 7",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-900",
        paragraphs: [
          "O compromisso com a excelência técnica exige renovação constante de métodos. Wagner obteve as certificações Green Belt (2016) e Black Belt Lean Six Sigma (2017), incorporando o controle estatístico avançado de processos à resolução de problemas complexos.",
          "Em 2025, concluiu a formação executiva complementar em Data Science and Big Data: Making Data-Driven Decisions pelo prestigiado Massachusetts Institute of Technology (MIT), aprofundando o domínio sobre pipelines modernos de dados em larga escala e machine learning aplicado à tomada de decisão executiva.",
          "Em 2026, amplia suas fronteiras científicas com novo Pós-Doutorado no Instituto Militar de Engenharia (IME)."
        ]
      }
    ],
    closingCard: {
      title: "A convergência que define o profissional",
      p: "Ao unir Engenharia, Inteligência Artificial, Meio Ambiente, Segurança de Processos e Educação, o Prof. Dr. Wagner Eustáquio de Vasconcelos materializa uma visão única: a de que dados, fórmulas e modelos matemáticos só alcançam seu potencial máximo quando salvaguardam vidas, otimizam recursos e constroem um futuro mais sustentável.",
      timelineLink: "Ver linha do tempo completa →",
      educationLink: "Ver titulações acadêmicas →"
    }
  },

  "en": {
    officialBadge: "OFFICIAL BIOGRAPHICAL DOSSIER",
    title: "Biography",
    subtitle: "From Chemical Engineering to Applied Artificial Intelligence: a trajectory marked by the integration of research, higher education, and professional engineering practice.",
    chaptersNavLabel: "Chapters:",
    indexMobileBtn: "Index",
    readingSummary: "Table of Contents",
    factualSheetTitle: "Factual Reference Sheet",
    factualFacts: [
      { label: "Undergraduate Degree:", value: "Chemical Engineering — UNICAP (1995–2000)" },
      { label: "Master of Science:", value: "Nuclear Engineering — IME (2003–2005)" },
      { label: "Doctorate (PhD):", value: "Energy and Nuclear Technologies — UFPE (2005–2009)" },
      { label: "Post-Doctorates:", value: "UFPE (2011–2015) and IME (2026)" },
      { label: "Specialization:", value: "Occupational Health & Process Safety Engineering — USP (634h)" },
      { label: "Complementary Training:", value: "Data Science & Big Data — MIT (Executive Education 45h, 2025)" },
    ],
    lattesValidationText: "Validated by CNPq (Official Lattes Platform)",
    chapters: [
      {
        id: "capitulo-1",
        number: "01",
        title: "The Beginnings in Engineering",
        period: "1995 – 2000",
        heading: "The Beginnings in Engineering",
        badge: "CHAPTER 1",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-800",
        paragraphs: [
          "The academic journey of Wagner Eustáquio de Vasconcelos is rooted in his Bachelor's degree in Chemical Engineering from the Catholic University of Pernambuco (UNICAP), completed in 2000. Throughout his university years, Wagner immersed himself in transport phenomena, applied thermodynamics, unit operations, and chemical kinetics.",
          "Early laboratory research and exposure to industrial chemical routines sparked his deep interest in mathematical modeling of continuous processes and the analytical rigor needed to anticipate operational failures. This period solidified his conviction that exact science achieves true purpose when transformed into process safety and productive efficiency for industrial systems."
        ]
      },
      {
        id: "capitulo-2",
        number: "02",
        title: "Research and Nuclear Engineering",
        period: "2003 – 2005",
        heading: "Research and Nuclear Engineering",
        badge: "CHAPTER 2",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-800",
        paragraphs: [
          "The pursuit of rigorous computational and physical modeling led Wagner to the Military Institute of Engineering (IME) in Rio de Janeiro, where he completed his Master of Science in Nuclear Engineering between 2003 and 2005.",
          "At IME, his research focused on physical modeling, radionuclide analysis, and environmental radiation monitoring. Nuclear Engineering demanded deep proficiency in high-order differential equations, computational atmospheric dispersion simulations, and critical system reliability analysis—laying the methodological foundation for his entire subsequent career."
        ]
      },
      {
        id: "capitulo-3",
        number: "03",
        title: "Artificial Intelligence Before the Boom",
        period: "2005 – 2009",
        heading: "Artificial Intelligence Before the AI Boom",
        badge: "CHAPTER 3",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-900",
        callout: {
          quote: "“Artificial Intelligence entered Wagner's trajectory years before becoming a mainstream global buzzword.”",
          sub: "Pioneering pillar developed during his Doctorate in Energy & Nuclear Technologies (UFPE, 2005–2009)."
        },
        quoteBlock: "“Application of Artificial Intelligence Techniques to Population Exposure Assessment in High Natural Background Radiation Regions.”",
        paragraphs: [
          "During his doctoral program at the Federal University of Pernambuco (UFPE), Wagner authored and defended his doctoral dissertation entitled:",
          "The research combined Fuzzy Logic, Artificial Neural Networks, and hybrid Neuro-Fuzzy computational models applied to environmental risk evaluation and decision support systems. The breakthrough demonstrated how intelligent algorithms could model operational uncertainty and complex environmental data with fidelity far superior to traditional deterministic techniques."
        ],
        crossLinks: [
          { label: "Artificial Intelligence in Engineering", href: "/especialidades/inteligencia-artificial" }
        ]
      },
      {
        id: "capitulo-4",
        number: "04",
        title: "Teaching and Engineering Mentorship",
        period: "2009 onwards",
        heading: "Teaching and Engineering Mentorship",
        badge: "CHAPTER 4",
        badgeBg: "bg-emerald-100",
        badgeText: "text-emerald-800",
        paragraphs: [
          "Alongside scientific research, teaching became a central pillar of Wagner's career. As a university professor, Wagner taught undergraduate and graduate programs across Chemical Engineering, Environmental Engineering, and Production Engineering.",
          "Core academic disciplines taught across his tenure include:",
          "This continuous academic commitment contributed to training hundreds of engineers who now excel across the national industry and renowned scientific research centers."
        ],
        disciplines: [
          "Process Modeling & Simulation",
          "Industrial Process Safety & Reliability",
          "Applied Computational Methods",
          "Instrumentation & Process Control",
          "Operations Research & Optimization",
          "Pressure Vessels & Boilers (NR-13)"
        ]
      },
      {
        id: "capitulo-5",
        number: "05",
        title: "Academic Governance and Leadership",
        period: "Management & Leadership",
        heading: "Academic Governance and Leadership",
        badge: "CHAPTER 5",
        badgeBg: "bg-amber-100",
        badgeText: "text-amber-800",
        paragraphs: [
          "Wagner's technical leadership naturally extended to higher education management. He served as Head of the Chemical Engineering Department, Head of the Degree in Chemistry, and Coordinator of the Post-Graduate Specialization in Oil and Gas Engineering.",
          "His governance encompassed re-engineering pedagogical curricula (PPC), modernizing laboratory infrastructure, implementing hands-on pilot plants, and actively presiding over institutional evaluation committees and academic boards."
        ]
      },
      {
        id: "capitulo-6",
        number: "06",
        title: "From Academia to Industry",
        period: "Applied Engineering",
        heading: "From Academia to Real-World Industry",
        badge: "CHAPTER 6",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-800",
        paragraphs: [
          "Bridging academic rigor with high-stakes plant operations solidified Wagner's profile in specialized engineering consulting and forensic safety analysis. His industrial engagements focus on critical domains:"
        ],
        bulletPoints: [
          { bold: "Process Safety & NR-13:", text: "Regulatory compliance audits, remaining life calculation, and HAZOP hazard evaluations for boilers and pressure vessels." },
          { bold: "Environmental Engineering & Emissions:", text: "Stationary source diagnostics, isokinetic stack sampling, and atmospheric dispersion modeling via regulatory AERMOD software." },
          { bold: "Industrial Forensic Analysis:", text: "High-level risk mitigation engineering and thermodynamic energy efficiency solutions." }
        ],
        crossLinks: [
          { label: "Process Safety Engineering", href: "/especialidades/seguranca-de-processos" },
          { label: "Environmental Engineering", href: "/especialidades/engenharia-ambiental" }
        ]
      },
      {
        id: "capitulo-7",
        number: "07",
        title: "Data, Innovation and Lifelong Learning",
        period: "Technological Frontier",
        heading: "Data, Innovation and Lifelong Learning",
        badge: "CHAPTER 7",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-900",
        paragraphs: [
          "Uncompromising technical rigor demands continual evolution. Wagner achieved Green Belt (2016) and Black Belt Lean Six Sigma (2017) certifications, infusing advanced statistical process control into complex problem-solving.",
          "In 2025, he completed executive complementary specialization in Data Science and Big Data: Making Data-Driven Decisions at the prestigious Massachusetts Institute of Technology (MIT), enhancing his capabilities in enterprise data pipelines and machine learning applied to strategic engineering decisions.",
          "In 2026, he expands his scientific frontier with a new Post-Doctorate at the Military Institute of Engineering (IME)."
        ]
      }
    ],
    closingCard: {
      title: "The Convergence Defining the Professional",
      p: "By integrating Engineering, Artificial Intelligence, Environmental Science, Process Safety, and Higher Education, Prof. Dr. Wagner Eustáquio de Vasconcelos delivers a unique vision: mathematical models and engineering data fulfill their highest potential only when they preserve human lives, optimize vital resources, and foster a truly sustainable world.",
      timelineLink: "View full chronological timeline →",
      educationLink: "View academic degrees & titles →"
    }
  },

  "es": {
    officialBadge: "DOCUMENTACIÓN BIOGRÁFICA OFICIAL",
    title: "Biografía",
    subtitle: "De la Ingeniería Química a la Inteligencia Artificial aplicada: una trayectoria marcada por la integración entre investigación, docencia y práctica profesional.",
    chaptersNavLabel: "Capítulos:",
    indexMobileBtn: "Índice",
    readingSummary: "Sumario de Lectura",
    factualSheetTitle: "Ficha de Referencia Factual",
    factualFacts: [
      { label: "Formación de Grado:", value: "Ingeniería Química — UNICAP (1995–2000)" },
      { label: "Maestría:", value: "Ingeniería Nuclear — IME (2003–2005)" },
      { label: "Doctorado:", value: "Tecnologías Energéticas y Nucleares — UFPE (2005–2009)" },
      { label: "Postdoctorados:", value: "UFPE (2011–2015) e IME (2026)" },
      { label: "Especialización:", value: "Ingeniería de Seguridad en el Trabajo — USP (634h)" },
      { label: "Formación Complementaria:", value: "Data Science & Big Data — MIT (Extensión Ejecutiva 45h, 2025)" },
    ],
    lattesValidationText: "Validado por el CNPq (Plataforma Lattes Oficial)",
    chapters: [
      {
        id: "capitulo-1",
        number: "01",
        title: "Los inicios en la Ingeniería",
        period: "1995 – 2000",
        heading: "Los inicios en la Ingeniería",
        badge: "CAPÍTULO 1",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-800",
        paragraphs: [
          "La trayectoria de Wagner Eustáquio de Vasconcelos tiene como cimiento la licenciatura en Ingeniería Química por la Universidad Católica de Pernambuco (UNICAP), graduado en el año 2000. Durante su formación universitaria, Wagner se dedicó con maestría a los fenómenos de transporte, termodinámica aplicada, operaciones unitarias y cinética química.",
          "Sus primeras experiencias en laboratorios y rutinas industriales despertaron su pasión por el modelado matemático de procesos continuos y el rigor analítico indispensable para predecir desviaciones operativas. Este período consolidó la convicción de que las ciencias exactas cobran su verdadero sentido cuando se traducen en seguridad y eficiencia técnica para sistemas productivos."
        ]
      },
      {
        id: "capitulo-2",
        number: "02",
        title: "Investigación e Ingeniería Nuclear",
        period: "2003 – 2005",
        heading: "Investigación e Ingeniería Nuclear",
        badge: "CAPÍTULO 2",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-800",
        paragraphs: [
          "La búsqueda de modelos computacionales y físicos de máxima exigencia técnica condujo a Wagner al prestigioso Instituto Militar de Ingeniería (IME), en Río de Janeiro, donde cursó la Maestría en Ingeniería Nuclear entre 2003 y 2005.",
          "En el IME, sus investigaciones se concentraron en el modelado físico, análisis de radionucleidos y monitoreo ambiental. La Ingeniería Nuclear exigió una inmersión profunda en ecuaciones diferenciales avanzadas, simulación computacional de dispersión atmosférica y análisis de confiabilidad en sistemas críticos, sentando las bases metodológicas de toda su trayectoria posterior."
        ]
      },
      {
        id: "capitulo-3",
        number: "03",
        title: "Inteligencia Artificial antes del auge",
        period: "2005 – 2009",
        heading: "Inteligencia Artificial antes del auge comercial",
        badge: "CAPÍTULO 3",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-900",
        callout: {
          quote: "“La Inteligencia Artificial se integró a la trayectoria de Wagner mucho antes de convertirse en un fenómeno de mercado masivo.”",
          sub: "Pilar pionero desarrollado en el Doctorado en Tecnologías Energéticas y Nucleares (UFPE, 2005–2009)."
        },
        quoteBlock: "“Aplicación de Técnicas de Inteligencia Artificial en la Evaluación de la Exposición de Poblaciones en Regiones de Alto Background Natural.”",
        paragraphs: [
          "En su doctorado por la Universidad Federal de Pernambuco (UFPE), Wagner desarrolló y defendió la tesis titulada:",
          "La investigación combinó Lógica Difusa (Fuzzy Logic), Redes Neuronales Artificiales y modelos híbridos Neuro-Fuzzy aplicados a la evaluación de riesgos ambientales y toma de decisiones estratégicas. El trabajo demostró cómo los algoritmos inteligentes procesan incertidumbres operativas y datos complejos con fidelidad superior a los métodos deterministas tradicionales."
        ],
        crossLinks: [
          { label: "Inteligencia Artificial en Ingeniería", href: "/especialidades/inteligencia-artificial" }
        ]
      },
      {
        id: "capitulo-4",
        number: "04",
        title: "Docencia y formación de ingenieros",
        period: "2009 en adelante",
        heading: "Docencia y formación de ingenieros",
        badge: "CAPÍTULO 4",
        badgeBg: "bg-emerald-100",
        badgeText: "text-emerald-800",
        paragraphs: [
          "En paralelo a la investigación científica, la labor docente se consolidó como pilar fundamental. Como profesor universitario, Wagner impartió cátedra en programas de grado y posgrado en Ingeniería Química, Ingeniería Ambiental e Ingeniería de Producción.",
          "Entre las principales asignaturas impartidas destacan:",
          "Esta experiencia pedagógica continua forjó la formación de cientos de ingenieros que hoy lideran proyectos en la industria y en prestigiosos centros científicos."
        ],
        disciplines: [
          "Modelado y Simulación de Procesos",
          "Seguridad y Confiabilidad Industrial",
          "Métodos Computacionales Aplicados",
          "Instrumentación y Control de Procesos",
          "Investigación Operativa y Optimización",
          "Recipientes a Presión y Calderas (NR-13)"
        ]
      },
      {
        id: "capitulo-5",
        number: "05",
        title: "Gestión académica y liderazgo",
        period: "Gestión y Liderazgo",
        heading: "Gestión académica y liderazgo",
        badge: "CAPÍTULO 5",
        badgeBg: "bg-amber-100",
        badgeText: "text-amber-800",
        paragraphs: [
          "El liderazgo de Wagner se extendió con éxito a la gestión universitaria. Ejerció la coordinación del programa de Ingeniería Química, la dirección de la Licenciatura en Química y lideró el posgrado en Ingeniería de Petróleo y Gas.",
          "Su gestión incluyó la modernización curricular, la implementación de plantas piloto de laboratorio y la participación activa en consejos colegiados académicos y comisiones de acreditación institucional."
        ]
      },
      {
        id: "capitulo-6",
        number: "06",
        title: "De la universidad a la industria",
        period: "Ingeniería Aplicada",
        heading: "De la universidad a la industria real",
        badge: "CAPÍTULO 6",
        badgeBg: "bg-sky-100",
        badgeText: "text-sky-800",
        paragraphs: [
          "El puente entre el rigor de la academia y las exigencias de las plantas industriales consolidó a Wagner en consultoría técnica especializada e ingeniería forense. Su intervención abarca sectores críticos:"
        ],
        bulletPoints: [
          { bold: "Seguridad de Procesos y NR-13:", text: "Auditorías de conformidad, cálculo de vida útil residual y análisis de riesgos HAZOP en calderas y recipientes sometidos a presión." },
          { bold: "Ingeniería Ambiental y Emisiones:", text: "Diagnóstico de chimeneas, muestreo isocinético y modelado matemático de dispersión atmosférica con software reglamentario AERMOD." },
          { bold: "Sistemas Industriales y Peritajes:", text: "Soluciones de mitigación de riesgo catastrófico y optimización de eficiencia energética." }
        ],
        crossLinks: [
          { label: "Seguridad de Procesos", href: "/especialidades/seguranca-de-processos" },
          { label: "Ingeniería Ambiental", href: "/especialidades/engenharia-ambiental" }
        ]
      },
      {
        id: "capitulo-7",
        number: "07",
        title: "Datos, innovación y actualización continua",
        period: "Frontera Tecnológica",
        heading: "Datos, innovación y actualización continua",
        badge: "CAPÍTULO 7",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-900",
        paragraphs: [
          "El compromiso con la excelencia exige una continua actualización de metodologías. Wagner obtuvo las certificaciones Green Belt (2016) y Black Belt Lean Six Sigma (2017), incorporando el control estadístico de procesos a la resolución de problemas complejos.",
          "En 2025, completó la formación ejecutiva en Data Science and Big Data: Making Data-Driven Decisions en el prestigioso Massachusetts Institute of Technology (MIT), dominando pipelines modernos de big data y machine learning aplicados a decisiones ejecutivas.",
          "En 2026, expande sus horizontes científicos con su nuevo Postdoctorado en el Instituto Militar de Ingeniería (IME)."
        ]
      }
    ],
    closingCard: {
      title: "La convergencia que define al profesional",
      p: "Al integrar Ingeniería, Inteligência Artificial, Medio Ambiente, Seguridad de Procesos y Educación, el Prof. Dr. Wagner Eustáquio de Vasconcelos materializa una visión única: los datos, fórmulas y modelos matemáticos alcanzan su máxima dimensión sólo cuando protegen vidas humanas, optimizan recursos y construyen un futuro sostenible.",
      timelineLink: "Ver cronología completa →",
      educationLink: "Ver titulaciones académicas →"
    }
  }
};
