# Dicionário de Eventos e Arquitetura de Mensuração (DataLayer)
**Plataforma Oficial Prof. Dr. Wagner Eustáquio de Vasconcelos**
*Fase 9 — Google Tag Manager, Google Analytics 4, Consent Mode v2, Conversões e Funil*

---

## 1. Visão Geral da Arquitetura

O sistema de mensuração opera sob o princípio da **minimização de dados (Privacy by Design)**:
- **SITE** dispara eventos estruturados via helper centralizado `trackEvent()`.
- **DATA LAYER** recebe objetos canônicos no padrão `snake_case`, passando por sanitização prévia contra PII (Personally Identifiable Information).
- **GOOGLE CONSENT MODE v2** atua como camada de controle prévia (`analytics_storage`, `ad_storage`, etc.).
- **GOOGLE TAG MANAGER (GTM)** distribui os eventos para GA4 e Google Ads, eliminando scripts duplicados.

---

## 2. Matriz Canônica de Eventos

| Evento | Descrição | Trigger (Disparo) | Parâmetros Canônicos | Mapeamento GA4 | Preparado para Google Ads? | Conversão / Key Event? |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| `page_view` | Visualização de página em transição client-side do App Router | Ao carregar a página ou navegar via SPA (sem duplicar) | `page_location`, `page_path`, `page_title` | `page_view` (GA4 Core) | Não | Não |
| `view_article` | Visualização de artigo técnico | Ao carregar a página individual do artigo | `article_title`, `article_category`, `article_slug`, `content_type` | Custom Event | Sim (Audiências) | Não |
| `article_scroll_50` | Leitura de 50% da profundidade do artigo | Rolagem do documento atinge 50% (máx. 1x por visita) | `article_title`, `article_category`, `article_slug` | Custom Event | Sim (Engajamento) | Não |
| `article_scroll_90` | Leitura completa de 90% do artigo | Rolagem do documento atinge 90% (máx. 1x por visita) | `article_title`, `article_category`, `article_slug` | Custom Event | Sim (Alta intenção) | Não |
| `share_article` | Compartilhamento do artigo | Clique em botões de compartilhamento (WhatsApp, LinkedIn, E-mail, Copiar) | `content_title`, `method` | Custom Event | Não | Não |
| `click_reference` | Consulta a referência bibliográfica | Clique em referência ABNT no artigo | `reference_preview` | Custom Event | Não | Não |
| `view_specialty` | Visualização de especialidade técnica | Ao carregar a página da especialidade | `specialty`, `knowledge_area`, `content_slug`, `content_type` | Custom Event | Sim (Audiências IA/AERMOD) | Não |
| `view_knowledge_area` | Visualização de pilar de conhecimento | Ao carregar a página da grande área | `knowledge_area`, `content_slug`, `content_type` | Custom Event | Sim (Audiências) | Não |
| `view_publication` | Visualização de artigo científico publicado | Ao carregar página de publicação científica | `content_title`, `content_slug`, `publication_year`, `content_type` | Custom Event | Não | Não |
| `view_book` | Visualização da obra autoral (Livro) | Ao carregar página de detalhe do livro | `content_title`, `content_slug`, `content_type` | Custom Event | Não | Não |
| `view_project` | Visualização de projeto técnico de consultoria | Ao carregar detalhe de projeto | `content_title`, `project_theme`, `content_slug` | Custom Event | Sim (Corporativo) | Não |
| `view_projects` | Filtragem ou navegação na lista de projetos | Seleção de filtro de tema de projetos | `filter_theme` | Custom Event | Não | Não |
| `view_item` | Visualização de produto/curso (E-commerce GA4) | Ao carregar página do curso/produto | `items` ([`item_id`, `item_name`, `item_category`, `item_status`]) | `view_item` (GA4 E-commerce) | Sim | Não |
| `select_item` | Interação ou clique em card/link de produto | Clique em links de navegação para cursos | `item_name`, `location` | `select_item` (GA4 E-commerce) | Não | Não |
| `join_course_waitlist` | Inscrição confirmada na waitlist de curso | Confirmação de submissão do formulário de waitlist | `product_name`, `product_category`, `product_status`, `utm_*` | Custom Event | **Sim** | **SIM (Key Event)** |
| `join_waitlist` | Inscrição confirmada em waitlist de produto/ferramenta | Confirmação de submissão de lista de espera geral | `product_name`, `product_category`, `product_status`, `utm_*` | Custom Event | **Sim** | **SIM (Key Event)** |
| `join_specialty_waitlist` | Inscrição em produto futuro via card de especialidade | Confirmação no card de produto futuro | `product_name`, `specialty`, `product_category`, `product_status` | Custom Event | **Sim** | **SIM (Key Event)** |
| `generate_lead` | **Geração de lead confirmada (Evento Canônico GA4)** | Disparado centralmente em qualquer formulário com sucesso | `lead_type`, `interest`, `form_name`, `source_context`, `utm_*` | `generate_lead` (GA4 Recom.) | **Sim (Principal)** | **SIM (Key Event)** |
| `sign_up` | Cadastro em newsletter editorial | Confirmação de inscrição na newsletter | `form_name`, `newsletter_name` | `sign_up` (GA4 Recom.) | **Sim** | **SIM (Key Event)** |
| `download_lead_magnet` | Solicitação confirmada de material técnico rico (PDF) | Confirmação de envio do formulário do guia | `lead_magnet_name`, `lead_magnet_topic`, `source_page` | Custom Event | **Sim** | **SIM (Key Event)** |
| `request_speaking` | Solicitação de proposta de palestra / keynote | Confirmação do formulário de palestras | `lead_type`, `interest`, `organization`, `source_context`, `utm_*` | Custom Event | **Sim (B2B)** | **SIM (Key Event)** |
| `request_training` | Solicitação de capacitação in-company | Confirmação do formulário de treinamentos | `lead_type`, `interest`, `organization`, `source_context`, `utm_*` | Custom Event | **Sim (B2B)** | **SIM (Key Event)** |
| `request_mentoring` | Solicitação de mentoria individual | Confirmação do formulário de mentorias | `lead_type`, `interest`, `source_context`, `utm_*` | Custom Event | **Sim (High Ticket)** | **SIM (Key Event)** |
| `request_project` | Solicitação de consultoria / projeto técnico | Confirmação do formulário de projetos | `lead_type`, `interest`, `organization`, `source_context`, `utm_*` | Custom Event | **Sim (B2B)** | **SIM (Key Event)** |
| `request_press` | Solicitação de contato de imprensa | Confirmação do formulário de imprensa | `lead_type`, `interest`, `organization`, `source_context`, `utm_*` | Custom Event | Não | **SIM (Key Event)** |
| `contact_submit` | Envio de mensagem geral pelo hub de contato | Confirmação do formulário geral de contato | `lead_type`, `interest`, `source_context`, `utm_*` | Custom Event | Sim | **SIM (Key Event)** |
| `click_lattes` | Acesso ao Currículo Lattes oficial CNPq | Clique em qualquer link/botão para a base Lattes | `location` (`header`, `footer`, `bio`, `author_box`) | Custom Event | Não | Não |
| `click_publication` | Clique para acessar publicação externa (DOI/Periódico) | Clique no link externo do artigo científico | `publication_title`, `doi`, `url` | Custom Event | Não | Não |
| `click_whatsapp` | Início de conversa via WhatsApp institucional | Clique no botão de WhatsApp | `location` | Custom Event | Sim (Contato direto) | Não |
| `click_email` | Clique em link mailto institucional | Clique no e-mail de contato | `location` | Custom Event | Não | Não |
| `click_related_specialty` | Navegação para especialidade relacionada | Clique em cards de especialidades interligadas | `specialty_source`, `specialty_target` | Custom Event | Não | Não |
| `click_related_content` | Navegação para artigo relacionado | Clique em cards de artigos recomendados | `article_source`, `article_target` | Custom Event | Não | Não |
| `begin_checkout` | Início de fluxo de pagamento (E-commerce Futuro) | Usuário avança para tela de checkout | `items`, `currency`, `value` | `begin_checkout` (GA4 E-com) | **Sim** | **SIM (Key Event)** |
| `purchase` | Compra concluída com sucesso (E-commerce Futuro) | Confirmação de transação aprovada | `transaction_id`, `value`, `currency`, `items` | `purchase` (GA4 E-com) | **Sim** | **SIM (Key Event)** |
| `consent_update` | Decisão ou alteração de consentimento de cookies | Usuário aceita, recusa ou salva preferências | `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization` | Consent Mode v2 Update | Não | Não |

---

## 3. Política de Proteção a Dados Pessoais (Zero PII)

Fica terminantemente vedada a inclusão dos seguintes campos no DataLayer ou GA4:
- Nome civil ou social do lead (`name`, `user_name`, `client_name`).
- Endereço de e-mail (`email`, `user_email`, `lead_email`).
- Telefone, celular ou WhatsApp pessoal.
- Número de documento (CPF, CNPJ, RG, CREA pessoal).
- Conteúdo livre da mensagem ou dados confidenciais de clientes.

Todos os parâmetros são auditados pela função `sanitizeParams()` no helper `trackEvent()` antes de ingressar no `window.dataLayer`.
