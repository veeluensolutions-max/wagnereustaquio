import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DETAILED_COURSES, getProductBySlug } from "@/data/products";
import WaitlistForm from "@/components/products/WaitlistForm";
import ProductInstructor from "@/components/products/ProductInstructor";
import MobileStickyCta from "@/components/products/MobileStickyCta";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductViewTracker from "@/components/analytics/ProductViewTracker";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Cpu,
  Layers,
  HelpCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DETAILED_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getProductBySlug(slug);

  if (!course) {
    return { title: "Curso não encontrado" };
  }

  return {
    title: `${course.title} | Formação Técnica | Prof. Dr. Wagner Eustáquio`,
    description: course.description,
    alternates: {
      canonical: `/produtos/cursos/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | Prof. Dr. Wagner Eustáquio`,
      description: course.headline || course.description,
      type: "article",
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getProductBySlug(slug);

  if (!course || course.type !== "course") {
    notFound();
  }

  // Schema.org Course (sem Offer fictício)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Person",
      name: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
      url: "https://wagnereustaquio.com.br/sobre/biografia",
    },
  };

  const otherCourses = DETAILED_COURSES.filter((c) => c.slug !== course.slug);

  return (
    <div className="py-12 bg-white">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <ProductViewTracker
        itemId={course.slug}
        itemName={course.title}
        itemCategory="Curso"
        itemStatus="waitlist"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Produtos", href: "/produtos" },
            { label: "Cursos Técnicos", href: "/produtos/cursos" },
            { label: course.title },
          ]}
        />

        {/* HERO DA FORMAÇÃO */}
        <div className="py-8 border-b border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              FORMAÇÃO TÉCNICA AVANÇADA
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{course.badge || "EM DESENVOLVIMENTO"}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {course.headline || course.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {course.description}
          </p>

          {/* CTA Hero */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#waitlist"
              className="min-h-[44px] px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center cursor-pointer"
            >
              <span>{course.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/conhecimento/artigos"
              className="min-h-[44px] px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center transition-colors text-center cursor-pointer"
            >
              Explorar conteúdos técnicos
            </Link>
          </div>
        </div>

        {/* VISÃO GERAL & PARA QUEM É */}
        <section className="py-10 border-b border-slate-100 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              CONTEXTO & OBJETIVO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1 mb-3">
              Da ciência matemática à prática na bancada
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {course.fullDescription || course.description}
            </p>
          </div>

          {course.audience && (
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-700" />
                <span>Para quem foi desenhado este programa:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.audience.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {course.benefits && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-950">
                O que você será capaz de resolver:
              </h3>
              <div className="space-y-2.5">
                {course.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* MÓDULOS ESTRUTURADOS */}
        {course.modules && course.modules.length > 0 && (
          <section className="py-10 border-b border-slate-100 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                GRADE DIDÁTICA PRELIMINAR
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Estrutura dos Módulos
              </h2>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs mt-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Conteúdo sujeito a atualização e aprimoramento antes do lançamento oficial da turma piloto.</span>
              </div>
            </div>

            <div className="space-y-3">
              {course.modules.map((m) => (
                <details
                  key={m.number}
                  className="group rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden transition-all [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0">
                        {m.number}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                          {m.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {m.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-sky-700 group-open:rotate-90 transition-transform">
                      →
                    </span>
                  </summary>

                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-200/60 space-y-2 text-xs text-slate-600">
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {m.description}
                    </p>
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Tópicos abordados:
                      </span>
                      {m.topics.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* INSTRUTOR */}
        <section className="py-10 border-b border-slate-100">
          <ProductInstructor />
        </section>

        {/* FAQ TRANSPARENTE */}
        {course.faq && course.faq.length > 0 && (
          <section className="py-10 border-b border-slate-100 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                ESCLARECIMENTOS & TRANSPARÊNCIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-3">
              {course.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FORMULÁRIO DE LISTA DE INTERESSE */}
        <section id="waitlist" className="py-12">
          <WaitlistForm
            productTitle={course.title}
            defaultInterest={course.slug.includes("aermod") ? "Modelagem" : "IA"}
            sourceContext={`course_page_${course.slug}`}
          />
        </section>

        {/* PRODUTOS COMPLEMENTARES */}
        <RelatedProducts products={otherCourses} title="Outras Formações Técnicas" />

      </div>

      {/* CTA Sticky Mobile no iPhone */}
      <MobileStickyCta
        buttonText="Lista de Espera"
        targetId="waitlist"
        badge={course.badge || "Em Breve"}
      />
    </div>
  );
}
