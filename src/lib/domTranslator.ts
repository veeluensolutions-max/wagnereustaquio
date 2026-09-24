export interface TranslationMap {
  [pt: string]: {
    en: string;
    es: string;
  };
}

export const DICTIONARY_MAP: TranslationMap = {
  // Cabeçalhos e Nomes de Páginas
  "Biografia": { en: "Biography", es: "Biografía" },
  "Trajetória": { en: "Career Timeline", es: "Trayectoria" },
  "Formação": { en: "Education & Degrees", es: "Formación" },
  "Sobre o Autor": { en: "About the Author", es: "Sobre el Autor" },
  "DOCUMENTAÇÃO BIOGRÁFICA OFICIAL": { en: "OFFICIAL BIOGRAPHICAL DOSSIER", es: "DOCUMENTACIÓN BIOGRÁFICA OFICIAL" },
  "Da Engenharia Química à Inteligência Artificial aplicada: uma trajetória marcada pela integração entre pesquisa, ensino e prática profissional.": {
    en: "From Chemical Engineering to Applied Artificial Intelligence: a career defined by the synergy of research, higher education, and industrial engineering practice.",
    es: "De la Ingeniería Química a la Inteligencia Artificial aplicada: una trayectoria marcada por la integración entre investigación, docencia y práctica profesional."
  },
  
  // Ficha de Referência Factual
  "Ficha de Referência Factual": { en: "Factual Reference Sheet", es: "Ficha de Referencia Factual" },
  "FICHA DE REFERÊNCIA FACTUAL": { en: "FACTUAL REFERENCE SHEET", es: "FICHA DE REFERENCIA FACTUAL" },
  "Formação de Base:": { en: "Undergraduate Degree:", es: "Formación de Grado:" },
  "Formação de Base": { en: "Undergraduate Degree", es: "Formación de Grado" },
  "Engenharia Química — UNICAP (1995–2000)": { en: "Chemical Engineering — UNICAP (1995–2000)", es: "Ingeniería Química — UNICAP (1995–2000)" },
  "Mestrado:": { en: "Master of Science:", es: "Maestría:" },
  "Mestrado": { en: "Master of Science", es: "Maestría" },
  "Engenharia Nuclear — IME (2003–2005)": { en: "Nuclear Engineering — IME (2003–2005)", es: "Ingeniería Nuclear — IME (2003–2005)" },
  "Doutorado:": { en: "Doctorate (PhD):", es: "Doctorado:" },
  "Doutorado": { en: "Doctorate (PhD)", es: "Doctorado" },
  "Tecnologias Energéticas e Nucleares — UFPE (2005–2009)": { en: "Energy & Nuclear Technologies — UFPE (2005–2009)", es: "Tecnologías Energéticas y Nucleares — UFPE (2005–2009)" },
  "Pós-Doutorados:": { en: "Post-Doctorates:", es: "Postdoctorados:" },
  "Pós-Doutorados": { en: "Post-Doctorates", es: "Postdoctorados" },
  "Pós-Doutorado": { en: "Post-Doctorate", es: "Postdoctorado" },
  "UFPE (2011–2015) e IME (2026)": { en: "UFPE (2011–2015) and IME (2026)", es: "UFPE (2011–2015) e IME (2026)" },
  "Especialização:": { en: "Specialization:", es: "Especialización:" },
  "Especialização": { en: "Specialization", es: "Especialización" },
  "Engenharia de Segurança do Trabalho — USP (634h)": { en: "Occupational Safety Engineering — USP (634h)", es: "Ingeniería de Seguridad en el Trabajo — USP (634h)" },
  "Formação Complementar:": { en: "Complementary Training:", es: "Formación Complementaria:" },
  "Formação Complementar": { en: "Complementary Training", es: "Formación Complementaria" },
  "Data Science & Big Data — MIT (Extensão Executiva 45h, 2025)": { en: "Data Science & Big Data — MIT (Professional Education 45h, 2025)", es: "Data Science & Big Data — MIT (Extensión Ejecutiva 45h, 2025)" },
  "Validado pelo CNPq (Plataforma Lattes Oficial)": { en: "Validated by CNPq (Official Lattes Platform)", es: "Validado por el CNPq (Plataforma Lattes Oficial)" },
  
  // Capítulos de Biografia
  "CAPÍTULOS:": { en: "CHAPTERS:", es: "CAPÍTULOS:" },
  "Capítulos:": { en: "Chapters:", es: "Capítulos:" },
  "Capítulos": { en: "Chapters", es: "Capítulos" },
  "Capítulo": { en: "Chapter", es: "Capítulo" },
  "CAPÍTULO 1": { en: "CHAPTER 1", es: "CAPÍTULO 1" },
  "CAPÍTULO 2": { en: "CHAPTER 2", es: "CAPÍTULO 2" },
  "CAPÍTULO 3": { en: "CHAPTER 3", es: "CAPÍTULO 3" },
  "CAPÍTULO 4": { en: "CHAPTER 4", es: "CAPÍTULO 4" },
  "CAPÍTULO 5": { en: "CHAPTER 5", es: "CAPÍTULO 5" },
  "CAPÍTULO 6": { en: "CHAPTER 6", es: "CAPÍTULO 6" },
  "CAPÍTULO 7": { en: "CHAPTER 7", es: "CAPÍTULO 7" },
  "O início na Engenharia": { en: "The Beginnings in Engineering", es: "Los inicios en la Ingeniería" },
  "Pesquisa e Engenharia Nuclear": { en: "Research and Nuclear Engineering", es: "Investigación e Ingeniería Nuclear" },
  "Inteligência Artificial antes do boom": { en: "Artificial Intelligence Before the Boom", es: "Inteligencia Artificial antes del auge" },
  "Inteligência Artificial antes do boom da IA": { en: "Artificial Intelligence Before the AI Boom", es: "Inteligencia Artificial antes del auge comercial" },
  "Docência e formação de engenheiros": { en: "Teaching and Engineering Mentorship", es: "Docencia y formación de ingenieros" },
  "Gestão acadêmica": { en: "Academic Governance and Leadership", es: "Gestión académica" },
  "Da universidade à indústria": { en: "From Academia to Real-World Industry", es: "De la universidad a la industria" },
  "Dados, inovação e atualização permanente": { en: "Data, Innovation and Lifelong Learning", es: "Datos, innovación y actualización continua" },
  
  // Hub Sobre
  "SOBRE WAGNER": { en: "ABOUT WAGNER", es: "SOBRE WAGNER" },
  "Uma trajetória construída entre ciência, engenharia e aplicação.": {
    en: "A professional journey built between science, engineering, and practice.",
    es: "Una trayectoria construida entre ciencia, ingeniería y aplicación."
  },
  "Prof. Dr. Wagner Eustáquio de Vasconcelos é engenheiro, pesquisador e professor com uma trajetória que conecta formação científica, experiência acadêmica e atuação técnica em problemas reais da Engenharia e da indústria.": {
    en: "Prof. Dr. Wagner Eustáquio de Vasconcelos is an engineer, researcher, and professor connecting rigorous scientific background, academic mentorship, and industrial problem-solving.",
    es: "El Prof. Dr. Wagner Eustáquio de Vasconcelos es ingeniero, investigador y profesor con una trayectoria que conecta formación científica, experiencia académica y actuación técnica en la industria."
  },
  "Conheça a trajetória": { en: "Explore career timeline", es: "Conozca la trayectoria" },
  "Ver formação acadêmica": { en: "View academic degrees", es: "Ver formación académica" },
  "ENGENHEIRO": { en: "ENGINEER", es: "INGENIERO" },
  "PESQUISADOR": { en: "RESEARCHER", es: "INVESTIGADOR" },
  "PROFESSOR": { en: "PROFESSOR", es: "PROFESOR" },
  "ESPECIALISTA": { en: "SPECIALIST", es: "ESPECIALISTA" },
  "Pesquisa, processos, segurança, ambiente e sistemas industriais.": {
    en: "Research, continuous processes, safety, environment, and industrial systems.",
    es: "Investigación, procesos, seguridad, medio ambiente y sistemas industriales."
  },
  "Modelagem, Inteligência Artificial, lógica fuzzy, redes neurais e tomada de decisão.": {
    en: "Modeling, Artificial Intelligence, fuzzy logic, neural networks, and decision making.",
    es: "Modelado, Inteligencia Artificial, lógica difusa, redes neuronales y toma de decisiones."
  },
  "Ensino superior em diferentes áreas da Engenharia.": {
    en: "Higher education teaching across diverse engineering disciplines.",
    es: "Educación superior en diferentes áreas de la Ingeniería."
  },
  "Atuação técnica em segurança de processos, emissões atmosféricas, qualidade do ar e soluções industriais.": {
    en: "Specialized technical consulting in process safety, emissions, air quality, and industrial solutions.",
    es: "Actuación técnica en seguridad de procesos, emisiones atmosféricas, calidad del aire y soluciones industriales."
  },

  // Trajetória e Cronologia
  "CRONOLOGIA HISTÓRICA • 1995 A 2026": { en: "HISTORICAL CHRONOLOGY • 1995 TO 2026", es: "CRONOLOGÍA HISTÓRICA • 1995 A 2026" },
  "Evolução cronológica e marcos estratégicos integrando ciência, docência e indústria.": {
    en: "Chronological evolution and strategic milestones integrating science, teaching, and industry.",
    es: "Evolución cronológica e hitos estratégicos integrando ciencia, docencia e industria."
  },
  "Todos os Marcos": { en: "All Milestones", es: "Todos los Hitos" },
  "Acadêmico & Docência": { en: "Academic & Teaching", es: "Académico y Docencia" },
  "Pesquisa & Ciência": { en: "Research & Science", es: "Investigación y Ciencia" },
  "Profissional & Indústria": { en: "Professional & Industry", es: "Profesional e Industria" },
  "Formação & Graus": { en: "Education & Degrees", es: "Formación y Grados" },
  "marcos estratégicos registrados.": { en: "strategic milestones registered.", es: "hitos estratégicos registrados." },
  "Ver linha do tempo completa →": { en: "View full chronological timeline →", es: "Ver cronología completa →" },
  "Ver titulações acadêmicas →": { en: "View academic degrees & titles →", es: "Ver titulaciones académicas →" },

  // Navegação e Breadcrumb
  "Início": { en: "Home", es: "Inicio" },
  "Página Inicial": { en: "Home Page", es: "Página de Inicio" },
  "Áreas de Conhecimento": { en: "Knowledge Areas", es: "Áreas de Conocimiento" },
  "Inteligência Artificial & Dados": { en: "Artificial Intelligence & Data", es: "Inteligencia Artificial y Datos" },
  "Engenharia & Segurança de Processos": { en: "Engineering & Process Safety", es: "Ingeniería y Seguridad de Procesos" },
  "Meio Ambiente & Sustentabilidade": { en: "Environment & Sustainability", es: "Medio Ambiente y Sostenibilidad" },
  "Educação & Desenvolvimento": { en: "Education & Development", es: "Educación y Desarrollo" },
  "Conhecimento": { en: "Knowledge Base", es: "Conocimiento" },
  "Artigos Técnicos": { en: "Technical Articles", es: "Artículos Técnicos" },
  "Publicações Científicas": { en: "Scientific Publications", es: "Publicaciones Científicas" },
  "Linhas de Pesquisa": { en: "Research Tracks", es: "Líneas de Investigación" },
  "Pesquisas": { en: "Research", es: "Investigaciones" },
  "Livros": { en: "Books", es: "Libros" },
  "Palestras": { en: "Keynotes & Conferences", es: "Conferencias" },
  "Produtos": { en: "Products & Formations", es: "Productos" },
  "Cursos": { en: "Courses", es: "Cursos" },
  "E-books": { en: "E-books", es: "E-books" },
  "Ferramentas": { en: "Tools & Spreadsheets", es: "Herramientas" },
  "Mentorias": { en: "Mentorship", es: "Mentorías" },
  "Treinamentos": { en: "In-Company Training", es: "Capacitaciones" },
  "Lista de Interesse": { en: "Waitlist", es: "Lista de Espera" },
  "Contato": { en: "Contact", es: "Contacto" },
  "Imprensa": { en: "Press & Media", es: "Prensa" },
  "Projetos": { en: "Projects & Cases", es: "Proyectos" },
  "Currículo Lattes": { en: "Lattes Curriculum", es: "Currículum Lattes" },
  
  // Elementos Comuns e Botões
  "Ler mais": { en: "Read more", es: "Leer más" },
  "Ver todos": { en: "View all", es: "Ver todos" },
  "Ver todas": { en: "View all", es: "Ver todas" },
  "Ver acervo completo de artigos": { en: "Explore full article collection", es: "Explorar colección completa de artículos" },
  "Conheça minha trajetória": { en: "Explore my background", es: "Conozca mi trayectoria" },
  "Conheça a trajetória completa": { en: "Explore full journey", es: "Conozca la trayectoria completa" },
  "Explore cursos e conteúdos": { en: "Explore courses & knowledge", es: "Explorar cursos y contenidos" },
  "Entrar em contato": { en: "Get in touch", es: "Entrar en contacto" },
  "Enviar mensagem": { en: "Send message", es: "Enviar mensaje" },
  "Solicitar Proposta": { en: "Request Proposal", es: "Solicitar Propuesta" },
  "Inscreva-se": { en: "Sign up", es: "Inscribirse" },
  "Lista de Espera": { en: "Waitlist", es: "Lista de Espera" },
  "Tópicos Centrais:": { en: "Core Topics:", es: "Temas Principales:" },
  "Pilar de Especialidade": { en: "Specialty Pillar", es: "Pilar de Especialidad" },
  "Dados Factuais Verificados": { en: "Fact-Checked & Verified Data", es: "Datos Verificados y Factuales" },
  "Todos os direitos reservados.": { en: "All rights reserved.", es: "Todos los derechos reservados." },
  "Política de Privacidade": { en: "Privacy Policy", es: "Política de Privacidad" },
  "Termos de Uso": { en: "Terms of Use", es: "Términos de Uso" },
  "Política de Cookies": { en: "Cookie Policy", es: "Política de Cookies" },
  "Preferências de cookies": { en: "Cookie preferences", es: "Preferencias de cookies" },
  
  // Detalhes da Narrativa Biográfica
  "Graduação em Engenharia Química pela Universidade Católica de Pernambuco": {
    en: "Bachelor's degree in Chemical Engineering from the Catholic University of Pernambuco (UNICAP)",
    es: "Licenciatura en Ingeniería Química por la Universidad Católica de Pernambuco (UNICAP)"
  },
  "Instituto Militar de Engenharia (IME)": {
    en: "Military Institute of Engineering (IME, Rio de Janeiro)",
    es: "Instituto Militar de Ingeniería (IME, Río de Janeiro)"
  },
  "Engenharia de Segurança do Trabalho": {
    en: "Occupational Health & Process Safety Engineering",
    es: "Ingeniería de Seguridad en el Trabajo y Procesos"
  },
  "Inteligência Artificial": { en: "Artificial Intelligence", es: "Inteligencia Artificial" },
  "Lógica Fuzzy": { en: "Fuzzy Logic", es: "Lógica Difusa" },
  "Redes Neurais": { en: "Neural Networks", es: "Redes Neuronales" },
  "Segurança de Processos": { en: "Process Safety", es: "Seguridad de Procesos" },
  "Modelagem Matemática": { en: "Mathematical Modeling", es: "Modelado Matemático" },
  "Sustentabilidade": { en: "Sustainability", es: "Sostenibilidad" },
  "Emissões Atmosféricas": { en: "Atmospheric Emissions", es: "Emisiones Atmosféricas" },
  "Dispersão de Poluentes": { en: "Pollutant Dispersion", es: "Dispersión de Contaminantes" },
  "Auditoria NR-13": { en: "NR-13 Regulatory Audit", es: "Auditoría Normativa NR-13" },
  "Análise de Riscos HAZOP": { en: "HAZOP Hazard Analysis", es: "Análisis de Riesgos HAZOP" },
};

// Mapa de substituição de palavras e termos técnicos individuais
export const VOCABULARY_REPLACEMENTS: Record<string, { en: string; es: string }> = {
  "Engenharia": { en: "Engineering", es: "Ingeniería" },
  "Pesquisa": { en: "Research", es: "Investigación" },
  "Docência": { en: "Teaching", es: "Docencia" },
  "Ensino": { en: "Teaching", es: "Enseñanza" },
  "Indústria": { en: "Industry", es: "Industria" },
  "Conhecimento": { en: "Knowledge", es: "Conocimiento" },
  "Sustentabilidade": { en: "Sustainability", es: "Sostenibilidad" },
  "Segurança": { en: "Safety", es: "Seguridad" },
  "Inovação": { en: "Innovation", es: "Innovación" },
  "Capacitação": { en: "Training", es: "Capacitación" },
  "Formação": { en: "Education", es: "Formación" },
  "Experiência": { en: "Experience", es: "Experiencia" },
  "Artigos": { en: "Articles", es: "Artículos" },
  "Publicações": { en: "Publications", es: "Publicaciones" },
  "Livro": { en: "Book", es: "Libro" },
  "Projetos": { en: "Projects", es: "Proyectos" },
  "Contato": { en: "Contact", es: "Contacto" },
  "Biografia": { en: "Biography", es: "Biografía" },
  "Trajetória": { en: "Timeline", es: "Trayectoria" },
};
