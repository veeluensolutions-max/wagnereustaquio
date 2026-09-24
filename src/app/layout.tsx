import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Manrope, DM_Sans, Newsreader, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/analytics/CookieConsentBanner";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { getHomepageSchema } from "@/lib/schema";
import { LanguageProvider } from "@/context/LanguageContext";
import GoogleTranslateScript from "@/components/layout/GoogleTranslateScript";
import UniversalTranslator from "@/components/layout/UniversalTranslator";

// Fontes oficiais do sistema tipográfico de alta sofisticação editorial
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["italic", "normal"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
  display: "swap",
});

import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Wagner Eustáquio de Vasconcelos | Engenharia, IA e Sustentabilidade",
    template: "%s | Prof. Dr. Wagner Eustáquio de Vasconcelos",
  },
  description: siteConfig.defaultDescription,
  authors: [{ name: siteConfig.authorName, url: siteConfig.siteUrl }],
  creator: siteConfig.authorName,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    title: "Wagner Eustáquio de Vasconcelos | Engenharia, IA e Sustentabilidade",
    description:
      "Conheça a trajetória do Prof. Dr. Wagner Eustáquio de Vasconcelos, engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Engenharia, Meio Ambiente e Segurança de Processos.",
    siteName: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
    images: [
      {
        url: "/images/wagner-vasconcelos.jpg",
        width: 1200,
        height: 630,
        alt: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagner Eustáquio de Vasconcelos | Engenharia, IA e Sustentabilidade",
    description:
      "Conheça a trajetória do Prof. Dr. Wagner Eustáquio de Vasconcelos, engenheiro, pesquisador e professor com atuação em Inteligência Artificial, Engenharia, Meio Ambiente e Segurança de Processos.",
    images: ["/images/wagner-vasconcelos.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const homepageSchema = getHomepageSchema();

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`h-full antialiased scroll-smooth ${manrope.variable} ${dmSans.variable} ${newsreader.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50/40 text-slate-900 selection:bg-sky-100 selection:text-sky-900 font-sans">
        <LanguageProvider>
          <GoogleTagManager />
          <Suspense fallback={null}>
            <PageViewTracker />
          </Suspense>
          {/* Acessibilidade: Skip link para navegação por teclado */}
          <a href="#main-content" className="skip-link">
            Pular para o conteúdo principal
          </a>

          <Header />

          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>

          <Footer />
          <CookieConsentBanner />
          <UniversalTranslator />
          <GoogleTranslateScript />
        </LanguageProvider>
      </body>
    </html>
  );
}

