# Implementação e Governança de Consentimento (LGPD & Consent Mode v2)
**Plataforma Oficial Prof. Dr. Wagner Eustáquio de Vasconcelos**
*Fase 9 — Google Tag Manager, Google Analytics 4, Consent Mode v2*

---

## 1. Categorias de Consentimento

A plataforma organiza os cookies e ferramentas de mensuração em três categorias estritas:

### A. Cookies Estritamente Necessários (`necessary`)
- **Status:** Sempre Ativos (não podem ser desativados).
- **Finalidade:** Segurança contra CSRF/XSS, balanceamento de requisições, navegação básica, persistência segura do próprio estado de consentimento e acessibilidade.
- **Armazenamento:** `wev_cookie_preferences_v1` em `localStorage`.
- **Dados Pessoais:** Nenhum dado identificável é armazenado.

### B. Analytics & Métricas (`analytics`)
- **Status:** Opcional (Desativado por padrão / `denied`).
- **Estados do Consent Mode v2:** `analytics_storage`.
- **Finalidade:** Permite mensurar de forma anônima e agregada quais artigos técnicos, livros e áreas científicas possuem maior relevância para o público profissional e acadêmico.
- **Comportamento se recusado:** O Google Tag Manager opera sob pings sem cookies ou bloqueia o disparo das tags de medição conforme a configuração no container.

### C. Comunicação & Cursos (`marketing`)
- **Status:** Opcional (Desativado por padrão / `denied`).
- **Estados do Consent Mode v2:** `ad_storage`, `ad_user_data`, `ad_personalization`.
- **Finalidade:** Habilita avisos de lançamento de turmas de cursos (ex: IA Aplicada à Engenharia), materiais especializados e remarketing consentido no Google Ads.
- **Comportamento se recusado:** Nenhuma tag de conversão do Google Ads ou lista de remarketing recebe autorização para correlacionar a sessão do visitante.

---

## 2. Arquitetura do Google Consent Mode v2

A implementação obedece à especificação oficial do Google para o Consent Mode v2:

```
[Carregamento HTML / <head>]
           │
           ▼
[Script Síncrono de Inicialização (beforeInteractive)]
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});
           │
           ├─► Usuário novo: Mantém "denied" até interação explícita.
           │
           └─► Usuário recorrente: Recupera escolha anterior e executa gtag('consent', 'update', ...)
```

---

## 3. Componentes do Sistema

1. **`GoogleTagManager.tsx` (`src/components/analytics/GoogleTagManager.tsx`)**:
   - Injeta o script de inicialização do Consent Mode com `strategy="beforeInteractive"`.
   - Lê previamente as preferências salvas no navegador para evitar falsos negativos em páginas subsequentes.
   - Carrega o container GTM de forma assíncrona com fallback `<noscript>`.

2. **`CookieConsentBanner.tsx` (`src/components/analytics/CookieConsentBanner.tsx`)**:
   - Apresenta o banner acessível (sem dark patterns) para novos visitantes.
   - Fornece três opções com pesos visuais equilibrados:
     - **Aceitar Todos**: concede `analytics_storage` e tags de marketing.
     - **Recusar Opcionais**: mantém apenas os cookies necessários.
     - **Configurar**: abre modal acessível com toggles independentes para Analytics e Marketing.
   - Suporta teclado (`Tab` focus trap), tecla `Escape` para fechar e safe-area para iPhone.

3. **Gatilho Global de Reabertura**:
   - A qualquer momento, o usuário pode reabrir a modal clicando em *"Preferências de cookies"* no rodapé ou na página `/cookies`.
   - O componente escuta o evento global `window.addEventListener("open-cookie-preferences", ...)`.

---

## 4. Como Testar no Navegador

### Teste 1: Estado Inicial Padrão (Navegação Anônima)
1. Abra uma janela anônima e acesse qualquer página do site.
2. Abra o DevTools (`F12`) e vá para a aba **Console**.
3. Digite:
   ```javascript
   window.dataLayer
   ```
4. Verifique o primeiro objeto de consentimento:
   ```json
   {
     "0": "consent",
     "1": "default",
     "2": {
       "analytics_storage": "denied",
       "ad_storage": "denied",
       "ad_user_data": "denied",
       "ad_personalization": "denied"
     }
   }
   ```
5. Confirme que o banner inferior é exibido sem bloquear o scroll do leitor.

### Teste 2: Aceite e Atualização Dinâmica
1. Clique em **"Aceitar Todos"**.
2. No Console, inspecione o último item do `window.dataLayer`:
   - Deve conter o evento `consent_update` com status `granted`.
3. Na aba **Application > Local Storage**, valide a chave `wev_cookie_preferences_v1`:
   ```json
   {"necessary":true,"analytics":true,"marketing":true,"hasResponded":true}
   ```

### Teste 3: Recusa de Marketing com Aceite de Analytics
1. Clique em *"Preferências de cookies"* no rodapé.
2. Desmarque **"Comunicação & Cursos"** e mantenha **"Analytics & Métricas"** ativado.
3. Clique em **"Salvar Minhas Preferências"**.
4. Inspecione o `dataLayer`:
   - `analytics_storage: "granted"`
   - `ad_storage: "denied"`
   - `ad_user_data: "denied"`
   - `ad_personalization: "denied"`

---

## 5. Como Resetar o Consentimento para Novos Testes

No console do navegador:
```javascript
localStorage.removeItem("wev_cookie_preferences_v1");
location.reload();
```
O banner reaparecerá imediatamente em seu estado padrão.
