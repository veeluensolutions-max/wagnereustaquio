/**
 * Configuração centralizada de SEO e Identidade Digital da Plataforma.
 * Evita duplicações de strings e garante consistência de entidades e canonicals.
 */

export const siteConfig = {
  siteName: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://wagner-vasconcelos.eng.br",
  defaultTitle: "Wagner Eustáquio de Vasconcelos | Engenharia, IA e Sustentabilidade",
  defaultDescription:
    "Conheça a trajetória do Prof. Dr. Wagner Eustáquio de Vasconcelos, engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Engenharia, Meio Ambiente e Segurança de Processos.",
  defaultOgImage: "/images/og-default.jpg",
  locale: "pt_BR",
  canonicalHost: process.env.NEXT_PUBLIC_SITE_URL || "https://wagner-vasconcelos.eng.br",
  authorName: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
  lattesUrl: "http://lattes.cnpq.br/7844785807954101",
  personId: `${process.env.NEXT_PUBLIC_SITE_URL || "https://wagner-vasconcelos.eng.br"}/#wagner-eustaquio-de-vasconcelos`,
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
};

/**
 * Gera URL canônica absoluta sem trailing slash duplicado ou parâmetros desnecessários
 */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const base = siteConfig.siteUrl.endsWith("/")
    ? siteConfig.siteUrl.slice(0, -1)
    : siteConfig.siteUrl;

  if (cleanPath === "/" || cleanPath === "") {
    return `${base}/`;
  }

  // Remove trailing slash final para consistência canônica (exceto raiz)
  const normalizedPath = cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
  return `${base}${normalizedPath}`;
}
