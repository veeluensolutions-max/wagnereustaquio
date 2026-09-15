"use client";

import Script from "next/script";

/**
 * Componente de inicialização do Google Tag Manager, Google Analytics 4 e Google Consent Mode v2.
 *
 * Arquitetura da Fase 9:
 * 1. Inicializa o Google Consent Mode v2 com estados padrão ('denied') ANTES de qualquer tag carregar.
 * 2. Se o usuário já tiver respondido ao banner (armazenado localmente), recupera o estado síncrono.
 * 3. Se GTM estiver ativo (NEXT_PUBLIC_GTM_ID), carrega o GTM e evita carregar GA4 diretamente para
 *    eliminar duplicidade de tags.
 * 4. Se GTM não estiver configurado mas NEXT_PUBLIC_GA4_ID estiver presente, carrega GA4 diretamente via gtag.js.
 * 5. Se nenhuma variável estiver definida, não quebra a aplicação e não insere nenhum script.
 */
export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  // Se nenhum identificador estiver configurado, desativa sem impacto
  if (!gtmId && !ga4Id) {
    return null;
  }

  return (
    <>
      {/* 1. Consent Mode v2 Default: executa de forma síncrona antes de qualquer medição */}
      <script
        id="google-consent-mode-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            // Define o estado padrão do Consent Mode v2 como negado (denied)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });

            // Se o usuário já expressou consentimento prévio, atualiza imediatamente
            try {
              var savedPrefs = localStorage.getItem('wev_cookie_preferences_v1');
              if (savedPrefs) {
                var p = JSON.parse(savedPrefs);
                gtag('consent', 'update', {
                  'analytics_storage': p.analytics ? 'granted' : 'denied',
                  'ad_storage': p.marketing ? 'granted' : 'denied',
                  'ad_user_data': p.marketing ? 'granted' : 'denied',
                  'ad_personalization': p.marketing ? 'granted' : 'denied'
                });
                dataLayer.push({
                  event: 'consent_restored',
                  analytics_storage: p.analytics ? 'granted' : 'denied',
                  ad_storage: p.marketing ? 'granted' : 'denied'
                });
              }
            } catch(e) {}
          `,
        }}
      />

      {/* 2. Google Tag Manager (Prioritário) */}
      {gtmId ? (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager Noscript Fallback"
            />
          </noscript>
        </>
      ) : ga4Id ? (
        /* 3. Fallback Direto GA4 (apenas se GTM não existir, evitando qualquer duplicidade) */
        <>
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
          />
          <Script
            id="ga4-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                gtag('js', new Date());
                // Desativa envio automático de page_view para controle via App Router PageViewTracker
                gtag('config', '${ga4Id}', { send_page_view: false });
              `,
            }}
          />
        </>
      ) : null}
    </>
  );
}
