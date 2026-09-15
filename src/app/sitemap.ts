import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { ARTICLES_DATA } from "@/data/articles";
import { SPECIALTIES_DATA } from "@/data/specialties";
import { SCIENTIFIC_PUBLICATIONS } from "@/data/publications";
import { RESEARCH_PROJECTS } from "@/data/researchProjects";
import { PUBLISHED_BOOK } from "@/data/book";
import { DETAILED_PROJECTS } from "@/data/projects";

// Funções utilitárias seguras para datas do sitemap
function parseYearToDate(yearVal: string | number, fallbackYear = 2024): Date {
  if (typeof yearVal === "number" && !isNaN(yearVal)) {
    return new Date(Date.UTC(yearVal, 11, 31));
  }
  const matches = String(yearVal).match(/\d{4}/g);
  if (matches && matches.length > 0) {
    const latestYear = parseInt(matches[matches.length - 1], 10);
    return new Date(Date.UTC(latestYear, 11, 31));
  }
  return new Date(Date.UTC(fallbackYear, 11, 31));
}

function parseDate(dateStr?: string, fallback = "2026-03-01T12:00:00.000Z"): Date {
  if (!dateStr) return new Date(fallback);
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(fallback) : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = siteConfig.siteUrl;

  // Páginas institucionais e pilares com datas reais de consolidação
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-03-14T12:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sobre/biografia`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/sobre/trajetoria`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/sobre/formacao`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/curriculo-lattes`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas-de-conhecimento`,
      lastModified: new Date("2026-03-05T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/areas-de-conhecimento/inteligencia-artificial`,
      lastModified: new Date("2026-03-05T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/areas-de-conhecimento/engenharia-e-seguranca-de-processos`,
      lastModified: new Date("2026-03-05T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/areas-de-conhecimento/meio-ambiente-e-sustentabilidade`,
      lastModified: new Date("2026-03-05T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/areas-de-conhecimento/educacao-e-desenvolvimento`,
      lastModified: new Date("2026-03-05T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/especialidades`,
      lastModified: new Date("2026-03-05T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/conhecimento`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/conhecimento/artigos`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/conhecimento/publicacoes-cientificas`,
      lastModified: new Date("2026-03-01T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/conhecimento/livros`,
      lastModified: new Date("2026-03-01T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/conhecimento/pesquisas`,
      lastModified: new Date("2026-03-01T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/conhecimento/palestras`,
      lastModified: new Date("2026-03-01T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/produtos/cursos`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/produtos/cursos/ia-aplicada-a-engenharia`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/produtos/cursos/introducao-aermod`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ebooks`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ebooks/introducao-ia-engenharia`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ebooks/fundamentos-logica-fuzzy`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ebooks/introducao-modelagem-dispersao-aermod`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ebooks/guia-emissoes-atmosfericas`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ferramentas`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ferramentas/kit-pratico-nr-13`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ferramentas/planilha-apoio-modelagem`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ferramentas/checklist-emissoes-atmosfericas`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/ferramentas/script-decisao-multicriterio-fuzzy`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/mentorias`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/mentorias/mentoria-tecnica`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/mentorias/mentoria-profissional`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/produtos/treinamentos`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/lista-de-interesse`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/materiais/7-aplicacoes-ia-engenharia`,
      lastModified: new Date("2026-03-10T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projetos`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/palestras`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/treinamentos`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/imprensa`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contato/palestras`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contato/treinamentos`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contato/imprensa`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contato/projetos`,
      lastModified: new Date("2026-03-12T12:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: new Date("2026-02-01T12:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified: new Date("2026-02-01T12:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date("2026-02-01T12:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Especialidades
  const specialtyEntries: MetadataRoute.Sitemap = Object.keys(SPECIALTIES_DATA).map(
    (slug) => ({
      url: `${BASE_URL}/especialidades/${slug}`,
      lastModified: new Date("2026-03-05T12:00:00.000Z"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })
  );

  // Artigos: Apenas com status published e com lastModified real de edição
  const articleEntries: MetadataRoute.Sitemap = ARTICLES_DATA
    .filter((article) => article.status === "published")
    .map((article) => ({
      url: `${BASE_URL}/conhecimento/artigos/${article.slug}`,
      lastModified: parseDate(article.updatedAt || article.publishedAt, "2026-03-01T12:00:00.000Z"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }));

  // Publicações científicas com lastModified baseado no ano de publicação
  const publicationEntries: MetadataRoute.Sitemap = SCIENTIFIC_PUBLICATIONS.map(
    (pub) => ({
      url: `${BASE_URL}/conhecimento/publicacoes-cientificas/${pub.slug}`,
      lastModified: parseYearToDate(pub.year, 2020),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })
  );

  // Linhas de pesquisa
  const researchEntries: MetadataRoute.Sitemap = RESEARCH_PROJECTS.map((proj) => ({
    url: `${BASE_URL}/conhecimento/pesquisas/${proj.slug}`,
    lastModified: new Date("2024-12-31T00:00:00.000Z"),
    changeFrequency: "yearly" as const,
    priority: 0.75,
  }));

  // Obra monográfica / livro
  const bookEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/conhecimento/livros/${PUBLISHED_BOOK.slug}`,
      lastModified: parseYearToDate(PUBLISHED_BOOK.year, 2010),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  // Projetos técnicos selecionados
  const projectEntries: MetadataRoute.Sitemap = DETAILED_PROJECTS.map((p) => ({
    url: `${BASE_URL}/projetos/${p.slug}`,
    lastModified: parseYearToDate(p.year, 2022),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...specialtyEntries,
    ...articleEntries,
    ...publicationEntries,
    ...researchEntries,
    ...bookEntries,
    ...projectEntries,
  ];
}
