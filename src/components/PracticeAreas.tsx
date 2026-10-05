"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, ArrowUpRight, Scale, Briefcase, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function getAreaIcon(iconName: string) {
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className="w-5 h-5" />;
    case "HeartHandshake":
      return <HeartHandshake className="w-5 h-5" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5" />;
    case "Award":
      return <Award className="w-5 h-5" />;
    case "Scale":
    default:
      return <Scale className="w-5 h-5" />;
  }
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Animação do cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação em cascata dos cards no desktop
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".practice-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "top 82%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="areas" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                02 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Áreas de Atuação
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atuação técnica e estratégica em Direito do Trabalho, Direito de Família e Consultoria Jurídica Preventiva. Atendimento presencial no Atuba em Colombo e online em todo o Paraná.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): GRID 3 COLUNAS COM DESIGN EDITORIAL PREMIUM         */}
        {/* ========================================================================= */}
        <div
          ref={cardsContainerRef}
          className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {PRACTICE_AREAS.map((area, idx) => (
            <div
              key={area.id}
              className="practice-card h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 hover:border-[#C9A24A]/60 shadow-md flex flex-col justify-between group transition-all duration-300 hover-lift will-change-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-2xl font-bold text-[var(--accent)]">
                    0{idx + 1}.
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[#C9A24A] group-hover:text-[#171717] transition-colors duration-300 shadow-2xs">
                    {getAreaIcon(area.iconName)}
                  </div>
                </div>

                <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                  {area.highlightText}
                </span>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                  {area.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {area.shortDesc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]/20">
                  {area.coverageList.slice(0, 5).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                <a
                  href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Gostaria de consultar um advogado sobre ${area.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[var(--accent)] hover:text-[var(--text-main)] transition-colors group/link cursor-pointer"
                >
                  <span>Consultar sobre este tema</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE: FILTRO INTERATIVO COM ABAS E SLIDE                         */}
        {/* ========================================================================= */}
        <MobilePracticeAreas />
      </div>
    </section>
  );
}

function MobilePracticeAreas() {
  const [activeTab, setActiveTab] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const filterTabs = [
    { num: "01", label: "Trabalhista" },
    { num: "02", label: "Família" },
    { num: "03", label: "Consultoria" },
  ];

  const currentArea = PRACTICE_AREAS[activeTab] || PRACTICE_AREAS[0];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        setActiveTab((prev) => (prev + 1) % PRACTICE_AREAS.length);
      } else {
        setActiveTab((prev) => (prev - 1 + PRACTICE_AREAS.length) % PRACTICE_AREAS.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="md:hidden">
      {/* Barra de Filtros Interativos (3 abas no mobile) */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-6">
        {filterTabs.map((tab, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`p-2.5 rounded-xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-center border ${
                isActive
                  ? "bg-[#C9A24A] text-[#171717] border-[#C9A24A] shadow-xs font-bold"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)]/40 hover:border-[#C9A24A]/40"
              }`}
            >
              <span
                className={`text-[0.5625rem] font-heading uppercase tracking-wider font-bold block mb-0.5 ${
                  isActive ? "text-[#171717]/80" : "text-[var(--accent)]"
                }`}
              >
                {tab.num}. Área
              </span>
              <span className="font-heading text-xs font-bold truncate">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Conteúdo Editorial Aberto */}
      <div
        className="relative select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={activeTab}
          className="flex flex-col items-start py-2 px-1 animate-fade-in-down will-change-transform"
        >
          {/* Topo com Ícone e Título */}
          <div className="flex items-center gap-2.5 mb-2 text-[var(--accent)]">
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] shadow-2xs">
              {getAreaIcon(currentArea.iconName)}
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-[var(--text-main)]">
              {currentArea.title}
            </span>
          </div>

          {/* Subtítulo */}
          <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5 leading-snug">
            {currentArea.subtitle}
          </h3>

          {/* Descrição */}
          <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-4">
            {currentArea.description}
          </p>

          {/* Pontos de Atuação */}
          <div className="w-full space-y-2 py-3 border-y border-[var(--border-subtle)]/25 mb-4">
            <span className="font-heading text-[0.6875rem] uppercase tracking-wider text-[var(--accent)] font-bold block mb-1">
              Como atuamos na sua causa:
            </span>
            {currentArea.coverageList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Botão de Contato Direto no WhatsApp */}
          <div className="w-full pt-1">
            <a
              href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Olá! Gostaria de consultar um advogado sobre ${currentArea.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill w-full bg-[#C9A24A] hover:bg-[#B88E36] text-[#171717] font-bold text-xs py-3 gap-2 shadow-xs flex items-center justify-center cursor-pointer transition-transform hover-lift"
            >
              <span>Consultar sobre este tema</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Indicadores de Paginação / Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {PRACTICE_AREAS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActiveTab(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeTab
                  ? "bg-[#C9A24A] scale-125"
                  : "bg-[var(--border-subtle)] opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}