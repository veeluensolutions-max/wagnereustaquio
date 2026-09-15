export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  href: string;
  items?: NavItem[];
}

export const MAIN_NAVIGATION: NavSection[] = [
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
];

export const FOOTER_NAVIGATION = {
  autor: [
    { label: "Sobre o Autor", href: "/sobre" },
    { label: "Biografia", href: "/sobre/biografia" },
    { label: "Trajetória", href: "/sobre/trajetoria" },
    { label: "Formação Acadêmica", href: "/sobre/formacao" },
    { label: "Currículo Lattes (CNPq)", href: "/curriculo-lattes" },
  ],
  conhecimento: [
    { label: "Artigos Técnicos", href: "/conhecimento/artigos" },
    { label: "Publicações Científicas", href: "/conhecimento/publicacoes-cientificas" },
    { label: "Linhas de Pesquisa", href: "/conhecimento/pesquisas" },
    { label: "Livro Publicado", href: "/conhecimento/livros" },
    { label: "Palestras e Conferências", href: "/conhecimento/palestras" },
  ],
  produtos: [
    { label: "Cursos de Extensão", href: "/produtos/cursos" },
    { label: "E-books Técnicos", href: "/produtos/ebooks" },
    { label: "Ferramentas e Planilhas", href: "/produtos/ferramentas" },
    { label: "Mentorias Especializadas", href: "/produtos/mentorias" },
    { label: "Treinamentos In-Company", href: "/produtos/treinamentos" },
    { label: "Lista de Interesse", href: "/lista-de-interesse" },
  ],
  profissional: [
    { label: "Solicitar Palestra", href: "/palestras" },
    { label: "Projetos e Consultoria", href: "/projetos" },
    { label: "Assessoria de Imprensa", href: "/imprensa" },
    { label: "Canal de Contato", href: "/contato" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Cookies", href: "/cookies" },
  ],
};
