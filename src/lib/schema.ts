import { siteConfig, getCanonicalUrl } from "./seo";

export const BASE_URL = siteConfig.siteUrl;
export const PERSON_SCHEMA_ID = siteConfig.personId;

/**
 * Objeto Person centralizado e unificado para toda a plataforma.
 * Conecta todas as páginas a uma única entidade digital sem duplicação de instâncias.
 */
export function getPersonSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_SCHEMA_ID,
    name: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
    alternateName: [
      "Wagner Eustáquio de Vasconcelos",
      "Wagner Eustaquio de Vasconcelos",
      "Prof. Wagner Vasconcelos",
      "Dr. Wagner Vasconcelos",
    ],
    jobTitle: "Engenheiro Químico, Pesquisador e Professor Doutor",
    description:
      "Engenheiro químico, pesquisador e professor com doutorado em Tecnologias Energéticas e Nucleares (UFPE) e atuação em Inteligência Artificial, Lógica Fuzzy, Segurança de Processos, Engenharia Ambiental e Modelagem de Dispersão Atmosférica.",
    url: BASE_URL,
    image: `${BASE_URL}/images/wagner-vasconcelos.jpg`,
    sameAs: [
      siteConfig.lattesUrl,
    ],
    knowsAbout: [
      "Inteligência Artificial aplicada à Engenharia",
      "Lógica Fuzzy e Sistemas Nebulosos",
      "Redes Neurais Artificiais",
      "Modelagem Matemática de Processos",
      "Segurança de Processos Industriais (PSM)",
      "Norma Regulamentadora NR-13 (Caldeiras e Vasos de Pressão)",
      "Estudos de Identificação de Perigos (HAZOP)",
      "Engenharia Ambiental e Qualidade do Ar",
      "Emissões Atmosféricas e Amostragem Isocinética",
      "Modelagem de Dispersão Atmosférica (AERMOD)",
      "Tomada de Decisão Multicritério sob Incerteza",
      "Sustentabilidade e Recursos Hídricos",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Universidade Federal de Pernambuco",
        alternateName: "UFPE",
        description: "Doutorado e Pós-Doutorado em Tecnologias Energéticas e Nucleares",
      },
      {
        "@type": "EducationalOrganization",
        name: "Universidade Católica de Pernambuco",
        alternateName: "UNICAP",
        description: "Graduação em Engenharia Química",
      },
      {
        "@type": "EducationalOrganization",
        name: "Instituto Militar de Engenharia",
        alternateName: "IME",
        description: "Mestrado em Engenharia de Produção",
      },
      {
        "@type": "EducationalOrganization",
        name: "Universidade de São Paulo",
        alternateName: "USP",
        description: "Especialização em Engenharia de Segurança do Trabalho",
      },
      {
        "@type": "EducationalOrganization",
        name: "Massachusetts Institute of Technology (Formação Complementar / Extensão)",
        alternateName: "MIT",
        description: "Formação Executiva / Aperfeiçoamento Técnico",
      },
    ],
  };
}

/**
 * Schema oficial da Homepage integrando WebSite, WebPage e Person
 */
export function getHomepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: siteConfig.siteName,
        description: siteConfig.defaultDescription,
        publisher: {
          "@id": PERSON_SCHEMA_ID,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        url: `${BASE_URL}/`,
        name: siteConfig.defaultTitle,
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": PERSON_SCHEMA_ID,
        },
        description: siteConfig.defaultDescription,
        inLanguage: "pt-BR",
      },
      getPersonSchema(),
    ],
  };
}

/**
 * Schema ProfilePage específico para /sobre/biografia
 */
export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${BASE_URL}/sobre/biografia/#profile`,
        url: `${BASE_URL}/sobre/biografia`,
        name: "Biografia de Wagner Eustáquio de Vasconcelos",
        description:
          "Biografia acadêmica, trajetória profissional e produções científicas do Prof. Dr. Wagner Eustáquio de Vasconcelos.",
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        mainEntity: {
          "@id": PERSON_SCHEMA_ID,
        },
        inLanguage: "pt-BR",
      },
      getPersonSchema(),
    ],
  };
}

/**
 * Schema para Artigos Editoriais
 */
export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getCanonicalUrl(`/conhecimento/artigos/${article.slug}`),
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@id": PERSON_SCHEMA_ID,
    },
    publisher: {
      "@type": "Person",
      "@id": PERSON_SCHEMA_ID,
      name: siteConfig.authorName,
    },
    keywords: article.tags?.join(", "),
    inLanguage: "pt-BR",
  };
}

/**
 * Schema para Publicações Científicas Formais (ScholarlyArticle)
 */
export function getScholarlyArticleSchema(pub: {
  title: string;
  abstract: string;
  slug: string;
  year: number | string;
  journal?: string;
  doi?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    description: pub.abstract,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getCanonicalUrl(`/conhecimento/publicacoes-cientificas/${pub.slug}`),
    },
    datePublished: String(pub.year),
    author: {
      "@id": PERSON_SCHEMA_ID,
    },
    isPartOf: pub.journal
      ? {
          "@type": "Periodical",
          name: pub.journal,
        }
      : undefined,
    sameAs: pub.doi ? `https://doi.org/${pub.doi}` : undefined,
    inLanguage: "pt-BR",
  };
}

/**
 * Schema para Livro Técnico Publicado (Book)
 */
export function getBookSchema(book: {
  title: string;
  subtitle?: string;
  slug: string;
  year: number | string;
  pages: number;
  publisher?: string;
  isbn?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    headline: book.subtitle,
    datePublished: String(book.year),
    numberOfPages: book.pages,
    url: getCanonicalUrl(`/conhecimento/livros/${book.slug}`),
    author: {
      "@id": PERSON_SCHEMA_ID,
    },
    publisher: book.publisher
      ? {
          "@type": "Organization",
          name: book.publisher,
        }
      : undefined,
    isbn: book.isbn,
    inLanguage: "pt-BR",
  };
}

/**
 * Schema BreadcrumbList para trilhas de navegação
 */
export function getBreadcrumbsSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: getCanonicalUrl("/"),
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? getCanonicalUrl(item.href) : undefined,
      })),
    ],
  };
}
