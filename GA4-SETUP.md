# Guia de Configuração do Google Analytics 4 (GA4)
**Plataforma Oficial Prof. Dr. Wagner Eustáquio de Vasconcelos**
*Fase 9 — Guia Oficial de Setup e Melhores Práticas*

---

## 1. Criação da Propriedade no GA4

1. Acesse o [Google Analytics](https://analytics.google.com/) com a conta oficial do projeto.
2. Em **Administrador > Criar > Propriedade**:
   - **Nome da Propriedade:** `Prof. Dr. Wagner Eustáquio de Vasconcelos`
   - **Fuso Horário dos Relatórios:** `Brasil (GMT-03:00) São Paulo / Recife`
   - **Moeda:** `Real brasileiro (R$ BRL)`
3. Em **Detalhes da Empresa**:
   - Categoria do setor: `Educação / Empregos` ou `Ciência / Engenharia`
   - Tamanho da empresa: `Pequena (1 a 10 funcionários)`
4. Em **Objetivos de Negócios**:
   - Selecione: *Gerar leads*, *Examinar o comportamento do usuário* e *Aumentar o conhecimento da marca*.

---

## 2. Criação do Fluxo de Dados Web

1. Em **Coleta e modificação de dados > Fluxos de dados**, clique em **Adicionar fluxo > Web**.
2. Preencha:
   - **URL do site:** `https://wagnervasconcelos.com.br` (ou o domínio de produção oficial).
   - **Nome do fluxo:** `Plataforma Web Wagner Vasconcelos`.
3. Copie o **ID da Métrica** (ex: `G-XXXXXXXXXX`).
   - Insira esse valor na variável de ambiente de produção:
     ```env
     NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
     ```

---

## 3. Revisão da Métrica Otimizada (Enhanced Measurement)

> [!WARNING]
> **Atenção contra Duplicidades de Page View e Scroll:**
> Como o site possui um componente customizado `PageViewTracker` (App Router) e `ArticleEngagementTracker` (scroll exato em 50% e 90%), revise a Métrica Otimizada no GA4:
> 1. Nas configurações do Fluxo Web, clique no ícone de **engrenagem** da *Métrica Otimizada*.
> 2. Se as visualizações de página forem gerenciadas via acionador de histórico do GTM, desmarque a opção *"Alterações de estado do histórico"*.
> 3. Se preferir a precisão do evento customizado `article_scroll_90`, mantenha o scroll padrão do GA4 desativado para não inflar relatórios com scrolls contínuos.

---

## 4. Marcação de Eventos Chave (Key Events / Conversões)

No menu **Administrador > Exibição de dados > Eventos**:
Aguarde os primeiros disparos de teste no GTM Preview / DebugView e marque como **Evento Principal (Key Event)** estritamente os eventos prioritários:

1. `generate_lead` *(Conversão Macro de Leads Gerais)*
2. `join_course_waitlist` *(Lista de Espera do Curso de IA)*
3. `join_waitlist` *(Lista de Espera Geral de Produtos)*
4. `request_speaking` *(Solicitação de Palestra/Keynote)*
5. `request_training` *(Solicitação de Treinamento Corporativo)*
6. `request_mentoring` *(Solicitação de Mentoria Individual)*
7. `request_project` *(Solicitação de Consultoria/Projeto NR-13/AERMOD)*
8. `begin_checkout` *(Futuro E-commerce)*
9. `purchase` *(Futuro E-commerce)*

*Nunca marque eventos de leitura, cliques em menus ou rolagens como evento principal.*

---

## 5. Configuração das Audiências Estratégicas

Em **Administrador > Exibição de dados > Públicos-alvo**, crie as seguintes audiências:

### Audiência 1: Interessados em Inteligência Artificial
- **Critério:** Usuários que dispararam `view_article` com `article_category = "Inteligência Artificial"` OU visitaram a especialidade `inteligencia-artificial-na-engenharia`, `logica-fuzzy` ou `redes-neurais` com tempo de engajamento > 30s.

### Audiência 2: Interessados em AERMOD & Modelagem Ambiental
- **Critério:** Usuários que visitaram `/especialidades/aermod`, `/especialidades/modelagem-de-dispersao` ou `/conhecimento/artigos/aermod-modelagem-dispersao-guia-pratico`.

### Audiência 3: Leads de Cursos (Alta Propensão de Compra)
- **Critério:** Usuários que dispararam o evento `join_course_waitlist` ou `join_waitlist`.

### Audiência 4: Engajados sem Conversão (Público de Nutrição)
- **Critério:** Usuários que alcançaram `article_scroll_90` em 2 ou mais artigos técnicos E NÃO dispararam o evento `generate_lead`.

### Audiência 5: Abandono de Checkout (Futuro E-commerce)
- **Critério:** Usuários que dispararam `begin_checkout` E NÃO dispararam `purchase` nos últimos 14 dias.

### Audiência 6: Alunos e Compradores Ativos
- **Critério:** Usuários que dispararam `purchase`.

---

## 6. Integração com o Google Search Console

1. No GA4, acesse **Administrador > Vinculações de produtos > Vinculações do Search Console**.
2. Clique em **Vincular**.
3. Selecione a propriedade verificada correspondente no Search Console.
4. Escolha o fluxo de dados Web criado no Passo 2.
5. Conclua a vinculação.
6. Em **Relatórios > Biblioteca**, publique a coleção de relatórios do *Search Console* para cruzar termos de busca com tempo de leitura e conversões de leads.

---

## 7. Como Validar via DebugView

1. Instale a extensão oficial **Google Analytics Debugger** no Chrome ou ative o **GTM Preview**.
2. No menu do GA4, vá em **Administrador > Exibição de dados > DebugView**.
3. Navegue no site:
   - Observe a chegada de `page_view`.
   - Acesse um artigo e verifique a chegada de `view_article`, `article_scroll_50` e `article_scroll_90`.
   - Envie um formulário de teste e confirme a chegada de `generate_lead` e do evento específico sem PII.
