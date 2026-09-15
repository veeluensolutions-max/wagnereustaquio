# Checklist Técnico de Lançamento e Google Search Console
## Plataforma Oficial Prof. Dr. Wagner Eustáquio de Vasconcelos

Este documento estabelece o protocolo operacional de validação, indexação e auditoria de SEO Técnico para o lançamento oficial da plataforma.

---

### 1. Verificação de Propriedade no Google Search Console
- [ ] Adicionar as duas variantes de propriedade no Search Console: **Domínio** (`wagnervasconcelos.com.br`) via Registro DNS TXT e **Prefixo do URL** (`https://wagnervasconcelos.com.br/`).
- [ ] Configurar a variável de ambiente `GOOGLE_SITE_VERIFICATION` no provedor de hospedagem (ex.: Vercel, Cloudflare Pages) para injeção automática na meta tag `<meta name="google-site-verification" content="..." />`.
- [ ] Validar a confirmação de propriedade com sucesso no painel do Search Console.

---

### 2. Envio e Validação do Sitemap XML
- [ ] Acessar **Indexação > Sitemaps** no Google Search Console.
- [ ] Submeter o caminho oficial: `https://wagnervasconcelos.com.br/sitemap.xml`.
- [ ] Confirmar status **"Sucesso"** e validar o número total de URLs descobertas (~60 URLs canônicas).
- [ ] Verificar se URLs com `noindex` (ex.: `/obrigado`) foram devidamente omitidas do sitemap.

---

### 3. Inspeção Manual de URLs Estratégicas
Utilizar a ferramenta de Inspeção de URLs no Search Console para solicitar indexação prioritária das seguintes páginas pilares:
- [ ] `https://wagnervasconcelos.com.br/` (Página Inicial / Knowledge Graph)
- [ ] `https://wagnervasconcelos.com.br/sobre/biografia` (Âncora Biográfica / ProfilePage)
- [ ] `https://wagnervasconcelos.com.br/areas-de-conhecimento` (Hub Temático Principal)
- [ ] `https://wagnervasconcelos.com.br/especialidades/inteligencia-artificial-na-engenharia` (Especialidade Chave)
- [ ] `https://wagnervasconcelos.com.br/especialidades/logica-fuzzy` (Especialidade Chave)
- [ ] `https://wagnervasconcelos.com.br/especialidades/modelagem-de-dispersao-atmosferica` (Especialidade Chave)
- [ ] `https://wagnervasconcelos.com.br/conhecimento/artigos/inteligencia-artificial-engenharia-aplicada` (Artigo Editorial)
- [ ] `https://wagnervasconcelos.com.br/conhecimento/livros/logica-fuzzy-radioatividade-ambiental` (Livro / Ficha Monográfica)
- [ ] `https://wagnervasconcelos.com.br/produtos/cursos/ia-aplicada-a-engenharia` (Produto Chave)

---

### 4. Teste de Resultados Prontos (Rich Results Test)
Submeter as páginas ao [Google Rich Results Test](https://search.google.com/test/rich-results):
- [ ] Validar elegibilidade de `ProfilePage` e `Person` em `/sobre/biografia`.
- [ ] Validar `Article` em `/conhecimento/artigos/[slug]`.
- [ ] Validar `ScholarlyArticle` em `/conhecimento/publicacoes-cientificas/[slug]`.
- [ ] Validar `Book` em `/conhecimento/livros/[slug]`.
- [ ] Validar `BreadcrumbList` nas páginas internas.
- [ ] Confirmar ausência de erros estruturais (0 erros de parsing).

---

### 5. Monitoramento de Erros de Rastreamento (Crawl Errors)
- [ ] Acessar **Indexação > Páginas** no Search Console.
- [ ] Monitorar a aba "Por que as páginas não estão sendo indexadas".
- [ ] Assegurar que nenhuma página canônica pública caia em "Rastreada, mas não indexada" ou "Detectada, mas não indexada".

---

### 6. Monitoramento de Páginas 404 e Soft 404
- [ ] Auditar relatórios de URLs com resposta HTTP 404.
- [ ] Garantir que rotas inexistentes retornem o cabeçalho 404 real e página customizada clara com links de retorno à Home e Busca.
- [ ] Prevenir ocorrência de Soft 404 (páginas vazias com status 200).

---

### 7. Conferência Rigorosa de URLs Canônicas
- [ ] Testar se o redirecionamento `http://` -> `https://` está ativo e com código HTTP 301.
- [ ] Testar redirecionamento `www.` -> versão canônica única (ou vice-versa).
- [ ] Verificar no HTML renderizado a tag `<link rel="canonical" href="https://wagnervasconcelos.com.br/..." />` em todas as rotas.
- [ ] Garantir ausência de trailing slash inconsistente (`/sobre` vs `/sobre/`).

---

### 8. Conferência de `noindex` em Páginas Privadas
- [ ] Inspecionar `/obrigado` e validar a presença de `<meta name="robots" content="noindex, nofollow" />`.
- [ ] Confirmar que parâmetros de UTM ou campanhas não geram URLs duplicadas indexáveis.
- [ ] Checar se `/api/` está bloqueado no robots.txt e não é indexado.

---

### 9. Conferência de Títulos e Meta Descriptions no Relatório de Desempenho
- [ ] Auditar tamanho dos títulos (máximo de 60 caracteres ou corte visual em ~580px).
- [ ] Conferir se as descrições têm entre 120 e 160 caracteres, com proposta de valor clara e sem keyword stuffing.
- [ ] Verificar CTR (taxa de cliques) inicial no Google Search Console após 14 dias de indexação.

---

### 10. Conferência de Links Internos e Prevenção de Links Quebrados
- [ ] Rodar crawler local para validar que todos os links internos possuem status HTTP 200.
- [ ] Validar que nenhum link interno aponta para redirecionamentos 301 intermediários ou URLs antigas.
- [ ] Confirmar que todas as âncoras de texto possuem contexto semântico descritivo.

---

### 11. Conferência de Indexação de Imagens
- [ ] Verificar se as imagens principais contêm texto alternativo (`alt`) descritivo e contextualizado.
- [ ] Confirmar que imagens biográficas possuem metadados de autoridade (`alt="Prof. Dr. Wagner Eustáquio de Vasconcelos"`).
- [ ] Confirmar que os formatos modernos (WebP/AVIF) são entregues com dimensões explícitas para evitar CLS (Cumulative Layout Shift).

---

### 12. Conferência de Tempo de Resposta e Core Web Vitals
- [ ] Testar no Google PageSpeed Insights:
  - **LCP (Largest Contentful Paint)**: < 2.5s
  - **INP (Interaction to Next Paint)**: < 200ms
  - **CLS (Cumulative Layout Shift)**: < 0.1
- [ ] Validar compressão Brotli/Gzip e cabeçalhos de cache para assets estáticos (`/_next/static/`).

---

### 13. Monitoramento de Consultas de Marca (SEO Nominal)
- [ ] Configurar alertas no Search Console para os seguintes termos nominais:
  - `"Wagner Eustáquio de Vasconcelos"`
  - `"Wagner Vasconcelos"`
  - `"Prof. Wagner Eustáquio"`
  - `"Dr. Wagner Vasconcelos"`
- [ ] Avaliar a conquista do Knowledge Panel no Google e a consolidação da entidade digital.

---

### 14. Monitoramento de Consultas Temáticas de Autoridade
Acompanhar posicionamento orgânico e impressões para:
- [ ] `"Inteligência Artificial na Engenharia"`
- [ ] `"Lógica Fuzzy engenharia ambiental"`
- [ ] `"Modelagem de dispersão atmosférica AERMOD"`
- [ ] `"Segurança de processos NR-13 HAZOP"`
- [ ] `"Amostragem isocinética emissões atmosféricas"`

---

### 15. Verificação de Snippet do Site no Google
- [ ] Executar consulta `site:wagnervasconcelos.com.br` no Google após 7 dias do envio do sitemap.
- [ ] Conferir exibição correta dos favicons, nome do site (`siteName`), títulos limpos e sitelinks.

---

### 16. Teste de `robots.txt` no Search Console
- [ ] Acessar o Testador de robots.txt no Search Console.
- [ ] Simular acesso do Googlebot em:
  - `/` -> **Permitido**
  - `/sobre/biografia` -> **Permitido**
  - `/api/leads` -> **Bloqueado**
  - `/busca` -> **Bloqueado**
  - `/obrigado` -> **Bloqueado**

---

### 17. Teste de Renderização Mobile (Mobile-First Indexing)
- [ ] Confirmar aprovação no teste de compatibilidade com dispositivos móveis.
- [ ] Assegurar ausência de elementos clicáveis muito próximos (< 44x44px).
- [ ] Validar que todo o conteúdo textual e esquemas JSON-LD estão idênticos na versão mobile e desktop.

---

### 18. Validação de Dados Estruturados com o Schema Markup Validator
- [ ] Submeter as páginas ao [Schema Markup Validator](https://validator.schema.org/).
- [ ] Confirmar aninhamento correto do `@graph` com `@id: https://wagnervasconcelos.com.br/#wagner-eustaquio-de-vasconcelos`.
- [ ] Confirmar que o MIT está representado exclusivamente como aperfeiçoamento executivo complementar, sem distorções factuais.
