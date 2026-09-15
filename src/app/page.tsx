import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CredentialsSection from "@/components/home/CredentialsSection";
import PositioningSection from "@/components/home/PositioningSection";
import StatsSection from "@/components/home/StatsSection";
import AuthorityAreasSection from "@/components/home/AuthorityAreasSection";
import TimelineSection from "@/components/home/TimelineSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import LeadMagnetSection from "@/components/home/LeadMagnetSection";
import ProductsSection from "@/components/home/ProductsSection";
import FeaturedCourseSection from "@/components/home/FeaturedCourseSection";
import PublicationsSection from "@/components/home/PublicationsSection";
import BookSection from "@/components/home/BookSection";
import TeachingSection from "@/components/home/TeachingSection";
import SpeakingSection from "@/components/home/SpeakingSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEÇÃO 1 — HERO */}
      <HeroSection />

      {/* SEÇÃO 2 — CREDENCIAIS */}
      <CredentialsSection />

      {/* SEÇÃO 3 — POSICIONAMENTO */}
      <PositioningSection />

      {/* SEÇÃO 4 — NÚMEROS */}
      <StatsSection />

      {/* SEÇÃO 5 — ÁREAS DE CONHECIMENTO */}
      <AuthorityAreasSection />

      {/* SEÇÃO 6 — TIMELINE */}
      <TimelineSection />

      {/* SEÇÃO 7 — EXPERIÊNCIA APLICADA */}
      <ExperienceSection />

      {/* SEÇÃO 8 — PROJETOS */}
      <ProjectsSection />

      {/* SEÇÃO 9 — CONHECIMENTO / ARTIGOS */}
      <ArticlesSection />

      {/* SEÇÃO 10 — LEAD MAGNET */}
      <LeadMagnetSection />

      {/* SEÇÃO 11 — PRODUTOS */}
      <ProductsSection />

      {/* SEÇÃO 12 — PRODUTO EM DESENVOLVIMENTO */}
      <FeaturedCourseSection />

      {/* SEÇÃO 13 — PRODUÇÃO CIENTÍFICA */}
      <PublicationsSection />

      {/* SEÇÃO 14 — LIVRO PUBLICADO */}
      <BookSection />

      {/* SEÇÃO 15 — DOCÊNCIA */}
      <TeachingSection />

      {/* SEÇÃO 16 — PALESTRAS */}
      <SpeakingSection />

      {/* SEÇÃO 17 — NEWSLETTER */}
      <NewsletterSection />

      {/* SEÇÃO 18 — CTA FINAL */}
      <FinalCtaSection />
    </div>
  );
}
