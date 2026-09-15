# Guia de Configuração do Google Tag Manager (GTM)
**Plataforma Oficial Prof. Dr. Wagner Eustáquio de Vasconcelos**
*Fase 9 — Container, Tags, Acionadores e Governança de Consentimento*

---

## 1. Criação da Conta e Container GTM

1. Acesse o [Google Tag Manager](https://tagmanager.google.com/).
2. Em **Criar Conta**:
   - **Nome da Conta:** `Prof. Dr. Wagner Eustáquio de Vasconcelos`
   - **País:** `Brasil`
   - **Nome do Contêiner:** `wagnervasconcelos.com.br - Web`
   - **Plataforma de destino:** `Web`
3. Copie o ID do contêiner (ex: `GTM-XXXXXXX`).
4. Configure na variável de ambiente do projeto:
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

---

## 2. Configuração da Google Tag (GA4 Base)

1. Em **Tags > Nova**:
   - **Tipo de Tag:** `Google Tag` (ou *Google Analytics: configuração do GA4*).
   - **ID da Tag:** Insira o Measurement ID obtido no GA4 (ex: `G-XXXXXXXXXX`) ou utilize uma variável de constante `{{Const - GA4 Measurement ID}}`.
   - **Parâmetros de Configuração:**
     - `send_page_view`: `false` *(deixe falso se for utilizar a tag de page_view customizada via evento virtual do App Router, ou mantenha `true` para a primeira carga)*.
2. Em **Acionamento**:
   - Escolha: `Initialization - All Pages` (ou `Consent Initialization - All Pages`).
3. Em **Configurações Avançadas > Configurações de Consentimento**:
   - Verifique se o consentimento integrado para `analytics_storage` está ativado.

---

## 3. Criação dos Acionadores de Eventos Personalizados (Custom Triggers)

Crie os acionadores em **Acionadores > Novo > Evento Personalizado**:

| Nome do Acionador no GTM | Nome do Evento no DataLayer | Tipo de Acionamento |
| :--- | :--- | :--- |
| `Event - Page View` | `page_view` | Todos os eventos personalizados |
| `Event - View Article` | `view_article` | Todos os eventos personalizados |
| `Event - Scroll 50` | `article_scroll_50` | Todos os eventos personalizados |
| `Event - Scroll 90` | `article_scroll_90` | Todos os eventos personalizados |
| `Event - View Specialty` | `view_specialty` | Todos os eventos personalizados |
| `Event - View Item` | `view_item` | Todos os eventos personalizados |
| `Event - Generate Lead` | `generate_lead` | Todos os eventos personalizados |
| `Event - Join Waitlist` | `join_course_waitlist` | Todos os eventos personalizados |
| `Event - Request Speaking` | `request_speaking` | Todos os eventos personalizados |
| `Event - Request Training` | `request_training` | Todos os eventos personalizados |
| `Event - Request Project` | `request_project` | Todos os eventos personalizados |
| `Event - Request Mentoring` | `request_mentoring` | Todos os eventos personalizados |
| `Event - Download Lead Magnet`| `download_lead_magnet` | Todos os eventos personalizados |
| `Event - Sign Up Newsletter` | `sign_up` | Todos os eventos personalizados |

---

## 4. Variáveis de Camada de Dados (DataLayer Variables)

Em **Variáveis > Variáveis definidas pelo usuário > Nova > Variável da camada de dados**:
- `dlv - article_title`: Nome da variável `article_title`
- `dlv - article_category`: Nome da variável `article_category`
- `dlv - specialty`: Nome da variável `specialty`
- `dlv - product_name`: Nome da variável `product_name`
- `dlv - lead_type`: Nome da variável `lead_type`
- `dlv - interest`: Nome da variável `interest`
- `dlv - form_name`: Nome da variável `form_name`
- `dlv - utm_source`: Nome da variável `utm_source`
- `dlv - utm_medium`: Nome da variável `utm_medium`
- `dlv - utm_campaign`: Nome da variável `utm_campaign`

---

## 5. Criação das Tags de Evento GA4

Em **Tags > Nova > Google Analytics: evento do GA4**:
1. **Tag de Evento: Generate Lead**
   - **ID de Medição:** `{{Const - GA4 Measurement ID}}`
   - **Nome do Evento:** `generate_lead`
   - **Parâmetros do Evento:**
     - `lead_type`: `{{dlv - lead_type}}`
     - `interest`: `{{dlv - interest}}`
     - `form_name`: `{{dlv - form_name}}`
   - **Acionador:** `Event - Generate Lead`
   - **Requisito de Consentimento Adicional:** `analytics_storage`

2. **Tag de Evento: Article Engagement**
   - **Tag para `article_scroll_90`** disparada pelo acionador `Event - Scroll 90`.
   - Requisito de consentimento: `analytics_storage`.

---

## 6. Validação com GTM Preview & Tag Assistant

1. No canto superior direito do GTM, clique em **Visualizar** (Preview).
2. Insira a URL local ou de homologação (ex: `http://localhost:3000`).
3. O **Google Tag Assistant** abrirá em uma nova aba vinculada:
   - Verifique na árvore lateral esquerda se o evento `consent` default foi registrado com status `denied`.
   - Clique em *"Aceitar Todos"* no banner: observe a entrada do evento `consent_update` alterando o estado para `granted`.
   - Navegue em um artigo e verifique se `view_article` e `article_scroll_50/90` dispararam com os parâmetros corretos.
   - Envie um formulário de teste e confirme se `generate_lead` e a tag específica de lead foram acionadas exatamente **uma vez** (Tags Fired: 1).
   - Confirme na aba **Summary > Data Layer** que **nenhum dado pessoal (nome/e-mail/telefone)** está presente.

---

## 7. Publicação do Contêiner

1. Após validar todos os acionadores e ausência de erros no Tag Assistant:
2. Clique no botão azul **Enviar** (Submit).
3. Nome da versão: `Fase 9 - Implementação Oficial GA4, Consent Mode v2 e Leads`.
4. Descrição: `Tags de conversão de leads (palestras, treinamentos, projetos, waitlists), eventos editoriais e Consent Mode v2`.
5. Clique em **Publicar**.
