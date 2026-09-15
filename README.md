# Plataforma Digital de Autoridade: Prof. Dr. Wagner Eustáquio de Vasconcelos

Plataforma institucional, biográfica, editorial e comercial de alta autoridade técnica e científica para o **Prof. Dr. Wagner Eustáquio de Vasconcelos**.

Posicionamento: *"Da ciência à aplicação: Engenharia, Inteligência Artificial e Sustentabilidade aplicadas a problemas reais."*

---

## 1. Stack Tecnológica
- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Ícones:** Lucide React
- **SEO & Dados Estruturados:** JSON-LD Schema.org (`WebSite`, `WebPage`, `Person`, `ProfilePage`, `Article`, `Book`, `BreadcrumbList`)
- **Analytics & LGPD:** Google Tag Manager (GTM), Google Analytics 4 (GA4) com suporte nativo ao **Google Consent Mode v2**.
- **Segurança:** Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options, Permissions-Policy.
- **Acessibilidade:** WCAG 2.2 AA (skip link, anéis de foco, tap targets 44px, safe area insets para iPhone).

---

## 2. Instalação e Execução

### Pré-requisitos
- Node.js 18+ (recomendado Node 20 ou superior)
- npm 9+

### Passo a passo
```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Executar o servidor de desenvolvimento local
npm run dev

# Acesse http://localhost:3000 no navegador.
```

### Compilação para Produção (Build)
```bash
# Compilar e gerar as 101 rotas estáticas pré-renderizadas (SSG)
npm run build

# Iniciar o servidor de produção
npm run start
```

---

## 3. Variáveis de Ambiente (.env)

Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`:

```env
# URL canônica da plataforma (sem barra no final)
NEXT_PUBLIC_SITE_URL=https://wagnereustaquio.com.br

# Google Tag Manager (GTM)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4 (quando disparado via GTM ou diretamente)
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Webhooks opcionais para automação de e-mail e CRM
# NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://api.seuservico.com/webhook/contato
# NEXT_PUBLIC_WHATSAPP_NUMBER=5581999999999
# NEXT_PUBLIC_CONTACT_EMAIL=contato@wagner-vasconcelos.eng.br
```

---

## 4. Como Alterar e Expandir Conteúdos

Todo o conteúdo editorial, biográfico e técnico está desacoplado dos componentes na pasta `src/data/`:

### 4.1 Adicionar ou Modificar Artigos Técnicos
Edite o arquivo `src/data/articles.ts`:
- Cada artigo possui `slug`, `title`, `subtitle`, `category`, `excerpt`, `readTime`, `publishedAt`, `updatedAt`, `sections` e `references`.
- As novas rotas `/conhecimento/artigos/[slug]` e o `sitemap.xml` serão gerados automaticamente na próxima compilação.

### 4.2 Adicionar ou Modificar Publicações Científicas
Edite o arquivo `src/data/publications.ts` ou a página `src/app/conhecimento/publicacoes-cientificas/page.tsx` para incluir novos periódicos, anais de congressos ou laudos técnicos.

### 4.3 Cadastrar Novo Curso ou Produto
Edite o arquivo `src/data/products.ts`:
- Para ativar uma página de vendas ou checkout externo (Hotmart, Kiwify, Stripe), preencha o campo `checkoutUrl: "https://suaplataforma.com/checkout/..."`.
- Se o campo `checkoutUrl` permanecer vazio (`""`), o botão exibirá automaticamente o status *"Em breve / Entrar na lista de interesse"*, preservando a estética institucional.

### 4.4 Substituir Imagens
- A fotografia oficial do perfil está localizada em `public/images/wagner-vasconcelos.jpg`.
- As insígnias institucionais oficiais (USP, IME, UFPE, MIT) estão em `public/images/instituicoes/`.
- A capa oficial do livro pode ser adicionada em `public/images/livro-logica-fuzzy.jpg` e vinculada em `BookSection.tsx`.

---

## 5. Google Tag Manager, Analytics e Consent Mode v2

A plataforma possui uma camada centralizada em `src/lib/analytics.ts` que manipula o `window.dataLayer`.

Eventos mapeados e prontos para acionamento no GTM:
- `generate_lead`: Disparado no envio do formulário de contato.
- `sign_up`: Disparado na assinatura da newsletter "Engenharia & Inteligência".
- `download_lead_magnet`: Disparado na solicitação do guia de IA.
- `join_course_waitlist`: Disparado na entrada da lista de espera de cursos.
- `request_speaking`: Disparado no pedido de palestras corporativas.
- `request_mentoring`: Disparado na aplicação de mentorias técnicas.
- `click_lattes`: Disparado ao clicar em links externos do CNPq Lattes.

Documentações dedicadas:
- [`ANALYTICS-EVENTS.md`](file:///./ANALYTICS-EVENTS.md): Dicionário completo de 35 eventos e parâmetros.
- [`CONSENT-IMPLEMENTATION.md`](file:///./CONSENT-IMPLEMENTATION.md): Arquitetura de consentimento e LGPD.
- [`GA4-SETUP.md`](file:///./GA4-SETUP.md): Configuração de propriedades, fluxos de dados e públicos.
- [`GTM-SETUP.md`](file:///./GTM-SETUP.md): Guia de tags, acionadores e variáveis.
- [`GOOGLE-ADS-PREP.md`](file:///./GOOGLE-ADS-PREP.md): Conversões e remarketing para Google Ads.

---

## 6. Homologação de Produção & Lançamento

Consulte o documento completo:
👉 [`PRODUCTION-LAUNCH-CHECKLIST.md`](file:///./PRODUCTION-LAUNCH-CHECKLIST.md)

1. **Domínio:** Aponte os registros DNS (tipo `A` e `CNAME`) do seu provedor de domínio para a Vercel.
2. **Google Search Console:** Submeta o sitemap gerado em `https://wagnereustaquio.com.br/sitemap.xml`.
3. **Rollback:** Procedimento documentado de restauração com 1 clique no painel Vercel ou via Git.

---

## 7. Critérios Éticos Obrigatórios (Fonte de Verdade)

Para manter a credibilidade científica inquestionável da plataforma:
1. **MIT:** Manter sempre a denominação *"Formação complementar / Extensão executiva em Data Science e Big Data pelo MIT (45h)"*. Nunca utilizar títulos de graduação, pós-graduação ou mestrado pelo MIT.
2. **Volume de Projetos:** O dado de mais de 1.000 projetos liderados deve sempre vir acompanhado da sinalização: *"Informação declarada no Currículo Lattes do autor."*
3. **Sem Logos Fictícios:** Não exibir logotipos de empresas privadas sem autorização jurídica formal.
4. **Sem Prova Social Falsa:** Não criar depoimentos fictícios, contadores artificiais de alunos ou notas de avaliação não auditadas.
