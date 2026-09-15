# Preparação Estratégica para Google Ads
**Plataforma Oficial Prof. Dr. Wagner Eustáquio de Vasconcelos**
*Fase 9 — Conversões, Audiências, Remarketing Consentido e Futuro Checkout*

---

## 1. Visão Geral e Diretrizes

A plataforma foi arquitetada tecnicamente para permitir a futura veiculação de campanhas no **Google Ads** com máxima eficiência algorítmica, sem que nenhuma campanha precise ser ativada antes da decisão executiva.

> [!IMPORTANT]
> **Consentimento Obrigatório (Google Consent Mode v2):**
> O Google Ads opera em conformidade estrita com os estados:
> - `ad_storage`: Armazenamento de cookies com finalidade de anúncios.
> - `ad_user_data`: Envio de dados do usuário para fins de publicidade online.
> - `ad_personalization`: Personalização de anúncios e listas de remarketing.
> 
> **Se o usuário recusar cookies de marketing, o Google Ads NÃO receberá autorização para associar o usuário a públicos de remarketing nem disparar cookies de rastreamento individual.**

---

## 2. Ações de Conversão Prioritárias

Quando a conta do Google Ads for conectada à propriedade do GA4 (ou receber as tags de conversão via GTM), as seguintes ações de conversão devem ser cadastradas:

| Ação de Conversão no Google Ads | Categoria da Meta | Evento Correspondente no GA4 / DataLayer | Valor Padrão | Contagem |
| :--- | :--- | :--- | :---: | :---: |
| **Lead - Curso de IA** | Inscrição / Envio de formulário de lead | `join_course_waitlist` | Valor dinâmico ou R$ 50 | Uma conversão por clique |
| **Lead - Curso AERMOD** | Inscrição / Envio de formulário de lead | `join_waitlist` (`product: AERMOD`) | R$ 50 | Uma conversão por clique |
| **Lead - Palestra / Keynote** | Envio de formulário de lead (B2B) | `request_speaking` | R$ 500 (Valor estimado) | Uma conversão por clique |
| **Lead - Treinamento In-Company** | Envio de formulário de lead (B2B) | `request_training` | R$ 1.000 (Valor estimado) | Uma conversão por clique |
| **Lead - Projeto NR-13 / Ambiental**| Envio de formulário de lead (B2B) | `request_project` | R$ 2.000 (Valor estimado) | Uma conversão por clique |
| **Lead - Mentoria Individual** | Envio de formulário de lead (High Ticket)| `request_mentoring` | R$ 250 | Uma conversão por clique |
| **Início de Checkout** | Início de finalização de compra | `begin_checkout` | Valor do carrinho | Todas as conversões |
| **Compra Concluída** | Compra (E-commerce) | `purchase` | Valor real da transação | Todas as conversões |

*Regra anti-duplicação:* Opte por importar as conversões diretamente do GA4 para o Google Ads, evitando duplicar a mesma contagem por meio de tags diretas do Google Ads sem deduplicação.

---

## 3. Segmentação de Audiências para Campanhas Futuras

As audiências estruturadas no GA4 estarão disponíveis no Gerenciador de Públicos-Alvo do Google Ads:

### A. Audiência de Inteligência Artificial
- **Critérios:** Visitou conteúdos como `/especialidades/inteligencia-artificial-na-engenharia`, `/especialidades/logica-fuzzy`, `/especialidades/redes-neurais`, `/especialidades/tomada-de-decisao` ou artigos sobre IA com leitura profunda (`article_scroll_90`).
- **Campanhas Indicadas:** Google Search e YouTube Ads para a abertura de turmas do curso *IA Aplicada à Engenharia*.

### B. Audiência de Modelagem Ambiental & AERMOD
- **Critérios:** Visitou `/especialidades/aermod`, `/especialidades/modelagem-de-dispersao` ou artigos de dispersão atmosférica.
- **Campanhas Indicadas:** Google Search em palavras-chave industriais e de consultoria de conformidade ambiental.

### C. Audiência de Tomadores de Decisão / B2B (Corporativo)
- **Critérios:** Visitou `/palestras`, `/treinamentos` ou `/projetos` por mais de 45 segundos.
- **Campanhas Indicadas:** Campanhas institucionais e Search B2B focadas em eventos de engenharia e capacitações de equipes de fábrica.

---

## 4. Rastreamento e Atribuição via UTMs

A plataforma possui suporte nativo para captura e persistência de parâmetros de campanha:
- `utm_source`: Origem do tráfego (ex: `google`)
- `utm_medium`: Mídia de aquisição (ex: `cpc`, `search`, `pmax`)
- `utm_campaign`: Nome da campanha (ex: `curso-ia-turma1`)
- `utm_content`: Variação de anúncio ou criativo
- `utm_term`: Palavra-chave disparadora

### Preservação First-Touch e Last-Touch:
- **First Touch (`first_utm_*`):** Registra a primeira campanha que trouxe o visitante e **nunca é sobrescrita**, garantindo visibilidade sobre qual canal foi responsável pela descoberta da plataforma de Wagner.
- **Last Touch (`last_utm_*`):** Registra a campanha imediatamente anterior à conversão final do lead, permitindo comparação de modelos de atribuição no CRM.

---

## 5. Diretrizes para Enhanced Conversions (Conversões Otimizadas)

> [!CAUTION]
> **Status nesta fase: AVALIAÇÃO PREPARATÓRIA (NÃO ATIVADO AUTOMATICAMENTE).**
> 
> As Conversões Otimizadas do Google Ads permitem o envio de dados criptografados (SHA-256) de e-mail e telefone para melhorar a mensuração de campanhas quando cookies de terceiros não estão disponíveis.
> 
> **Requisitos prévios para ativação futura:**
> 1. Validação prévia com assessoria jurídica em conformidade com o Art. 7º da LGPD.
> 2. Atualização expressa do termo na Política de Privacidade informando a utilização de identificadores pseudonimizados.
> 3. Habilitação técnica no GTM com tag específica do Google Ads apenas se `ad_user_data` for concedido pelo usuário.

---

## 6. Integração com Plataformas de Checkout Externas

Caso produtos ou cursos utilizem plataformas consolidadas de checkout (como **Hotmart**, **Kiwify**, **Eduzz** ou **Stripe**):

1. **Cross-Domain Tracking (Rastreamento entre Domínios):**
   - No fluxo de dados do GA4, adicione o domínio do checkout em *Configurar seus domínios* para manter o mesmo Client ID de sessão.
2. **Passagem de UTMs:**
   - Configure o redirecionamento dos botões de matrícula para repassar os parâmetros UTM ativos via query string para a URL do checkout.
3. **Confirmação Real de Compra:**
   - **NUNCA** dispare o evento `purchase` no clique do botão que leva ao checkout.
   - O evento `purchase` deve ser disparado estritamente após a confirmação real do pagamento, por meio de:
     - Webhook da plataforma de checkout para backend seguro;
     - Integração nativa da Hotmart/Kiwify com a propriedade do GA4;
     - Redirecionamento seguro para a página de confirmação `/obrigado?status=approved` validada.
