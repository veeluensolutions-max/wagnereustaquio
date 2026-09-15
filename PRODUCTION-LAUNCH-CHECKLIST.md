# Checklist Oficial de Lançamento & Operação em Produção
Plataforma Oficial do Prof. Dr. Wagner Eustáquio de Vasconcelos

Este documento consolida as diretrizes finais de auditoria, governança, segurança, infraestrutura e monitoramento contínuo para o lançamento da plataforma e posterior apontamento de domínio oficial.

---

## 1. Matriz de Homologação Pré-Lançamento (22 Itens Obrigatórios)

| Item | Área | Descrição e Critério de Aceite | Status |
| :--- | :--- | :--- | :---: |
| **01** | **Domínio Oficial** | Configurar domínio raiz e `www` (ex: `wagnereustaquio.com.br` / `www.wagnereustaquio.com.br`) nos servidores DNS. | `[ ]` |
| **02** | **DNS & Propagação** | Configurar registros `A` e `CNAME` apontando para a infraestrutura Vercel (`76.76.21.21` e `cname.vercel-dns.com`). | `[ ]` |
| **03** | **HTTPS & SSL** | Certificado TLS emitido automaticamente com renovação gerenciada; HSTS ativo (`Strict-Transport-Security: max-age=63072000`). | `[x]` |
| **04** | **Redirecionamentos** | Redirecionamento permanente 301 de HTTP para HTTPS e unificação de subdomínio (`www` para non-www ou vice-versa). | `[x]` |
| **05** | **Sitemap XML** | `sitemap.xml` dinâmico gerando 101 rotas estáticas canônicas com `lastModified` e prioridades por hierarquia editorial. | `[x]` |
| **06** | **Robots.txt** | `robots.txt` configurado apontando para o sitemap canônico e isolando áreas de sistema (`/api/`, `/obrigado`). | `[x]` |
| **07** | **Google Search Console** | Propriedade verificada via DNS TXT ou tag HTML (`GOOGLE_SITE_VERIFICATION`) com submissão do sitemap. | `[ ]` |
| **08** | **Google Analytics 4** | GA4 Measurement ID (`G-XXXXXXXXXX`) integrado via dataLayer e GTM com Zero PII (sem envio de dados pessoais). | `[x]` |
| **09** | **Google Tag Manager** | Contêiner GTM (`GTM-XXXXXXX`) carregado assincronamente com fallback `<noscript>` no `layout.tsx`. | `[x]` |
| **10** | **Consent Mode v2** | Estados default (`denied`) aplicados antes do GTM e atualizados dinamicamente pós-interação do usuário. | `[x]` |
| **11** | **LGPD & Privacidade** | Banner de consentimento granula com "Aceitar Todos", "Recusar Opcionais" e painel de preferências configuráveis. | `[x]` |
| **12** | **Schema JSON-LD** | Dados estruturados validados: `Person`, `ProfilePage`, `Article`, `ScholarlyArticle`, `Book` e `BreadcrumbList`. | `[x]` |
| **13** | **Páginas de Erro 404 e 500** | Rota 404 estilizada com links úteis de retorno e Error Boundary 500 (`error.tsx`) sem exposição de stack traces. | `[x]` |
| **14** | **Formulários & Validação** | Formulários de contato, palestras, treinamentos e waitlist validados no cliente e servidor, com proteção double-submit. | `[x]` |
| **15** | **Anti-Spam & Webhook/CRM** | Honeypot invisível em todos os formulários e preparação de payload para webhook de CRM via `NEXT_PUBLIC_CONTACT_WEBHOOK_URL`. | `[x]` |
| **16** | **Mobile Responsiveness** | Layout 100% responsivo testado em larguras de 360px a 1920px sem scroll horizontal indesejado. | `[x]` |
| **17** | **iPhone & Safari iOS** | Tamanho de fonte `>= 16px` para inputs (sem auto-zoom), suporte a `env(safe-area-inset-bottom)` e bloqueio de scroll no menu. | `[x]` |
| **18** | **Core Web Vitals** | LCP otimizado com imagens prioritárias, zero CLS via dimensões explícitas e `next/font`, e interações leves (INP). | `[x]` |
| **19** | **Acessibilidade WCAG 2.2** | Link de salto de conteúdo (`.skip-link`), anéis de foco destacados, contraste cromático e navegação completa por teclado. | `[x]` |
| **20** | **Security Headers** | `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff` e `Permissions-Policy` ativos. | `[x]` |
| **21** | **Backup & Versionamento** | Código 100% commitado e sincronizado no repositório GitHub com branch `main` limpa e tag `v1.0.0-rc1`. | `[x]` |
| **22** | **Procedimento de Rollback** | Procedimento de restauração de versão instantânea via painel Vercel ou Git documentado e testado. | `[x]` |

---

## 2. Cronograma de Monitoramento Pós-Lançamento

### Primeiras 24 Horas (Estabilidade Imediata)
* [ ] Verificar resolução global de DNS em diferentes provedores e dispositivos.
* [ ] Testar certificado SSL e redirecionamento automático de HTTP para HTTPS.
* [ ] Disparar envios de teste em todos os formulários (`/contato`, `/palestras`, `/produtos/cursos/ia-aplicada-a-engenharia`).
* [ ] Conferir disparos de eventos em tempo real no **GA4 DebugView** e **GTM Tag Assistant**.
* [ ] Validar comportamento do banner LGPD e gravação de preferências no `localStorage`.
* [ ] Verificar ausência de erros 404 ou 500 nos logs de runtime da Vercel.

### Primeiras 72 Horas (Indexação e Rastreamento)
* [ ] Monitorar no **Google Search Console** o processamento inicial do `sitemap.xml`.
* [ ] Verificar relatórios de cobertura do índice e confirmação de páginas canônicas.
* [ ] Avaliar métricas reais de **Core Web Vitals** no painel da Vercel (Speed Insights).
* [ ] Confirmar recepção de leads em e-mail ou webhook de integração CRM configurado.

### 7 Dias (Ajustes Finos e Aquisição)
* [ ] Analisar consultas iniciais e impressões orgânicas no Google Search Console.
* [ ] Avaliar taxa de conversão do funil de cursos, materiais ricos e palestras.
* [ ] Auditar taxa de rejeição e páginas com maior tempo de permanência no GA4.
* [ ] Checar relatórios de acessibilidade e logs de erro do navegador.

### 30 Dias (Consolidação Estratégica)
* [ ] Elaborar relatório de audiência, canais de aquisição e termos de busca mais frequentes.
* [ ] Revisar palavras-chave ranqueadas para as 4 áreas de autoridade e especialidades técnicas.
* [ ] Avaliar o volume da lista de interesse para planejamento de novas turmas de cursos e mentorias.
* [ ] Planejar novos artigos e publicações técnicas com base no interesse real demonstrado pelos visitantes.

---

## 3. Procedimento de Rollback Instantâneo

Caso seja identificada qualquer anomalia crítica após um deploy em produção:

1. **Rollback com 1 Clique (Vercel):**
   - Acesse o painel do projeto em [vercel.com](https://vercel.com).
   - Vá para a aba **Deployments**.
   - Localize o deployment anterior estável (ex: tag `v1.0.0-rc1`).
   - Clique nos três pontos `...` e selecione **Promote to Production**. O tráfego será redirecionado imediatamente em segundos.

2. **Rollback via Git:**
   ```bash
   git checkout main
   git revert HEAD
   git push origin main
   ```
