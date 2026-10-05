"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Award, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Efeito de Parallax suave nas imagens de fundo do Hero
      if (imageDesktopRef.current) {
        gsap.to(imageDesktopRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imageMobileRef.current) {
        gsap.to(imageMobileRef.current, {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Animação de entrada dos textos e botões
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 overflow-hidden"
    >
      {/* Imagem de Fundo Desktop (Landscape / >= lg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden lg:block absolute inset-0 -top-10 -bottom-10 will-change-transform">
          <Image
            src="/header_desktop.jpg"
            alt="Odair Siqueira Advocacia - Colombo e Curitiba PR"
            fill
            priority
            quality={92}
            className="object-cover object-[center_28%] brightness-[0.82] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile & Tablet Portrait (< lg) */}
        <div ref={imageMobileRef} className="block lg:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpg"
            alt="Odair Siqueira Advocacia - Atendimento Presencial e Online"
            fill
            priority
            quality={92}
            className="object-cover object-[center_25%] sm:object-[center_30%] brightness-[0.82] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays mesclando Grafite Preto Profundo #171717, Grafite #252525 e Dourado Champagne #C9A24A */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/85 to-[#252525]/40 lg:from-[#171717]/92 lg:via-[#171717]/65 lg:via-55% lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/95 via-transparent to-[#171717]/60 lg:from-[#171717]/65 lg:via-transparent lg:to-transparent" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center lg:justify-between will-change-transform py-4 sm:py-6 lg:py-0"
      >
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-2 sm:pt-4 lg:pt-2 max-w-3xl animate-fade-in-down mb-6 sm:mb-8 lg:mb-0">
          {/* Badge de Autoridade Dourado Champagne */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A24A]/40 bg-[#171717]/85 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#E2E2E2] mb-3 sm:mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#C9A24A]" />
            <span>Odair Siqueira Advocacia • OAB/PR 91.151</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.12] sm:leading-[1.1] tracking-tight text-[#E2E2E2] font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
            Soluções jurídicas estratégicas,{" "}
            <span className="text-[#C9A24A] relative font-extrabold">
              preventivas e resolutivas
            </span>{" "}
            com excelência e segurança.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo Conciso + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-1 sm:pb-2 max-w-3xl lg:mt-auto animate-fade-in-up">
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-4 sm:mb-5 font-normal drop-shadow-sm">
            Atuação especializada em Direito do Trabalho, Direito de Família e Consultoria Jurídica. Sede física no Atuba em Colombo/PR e atendimento online seguro para todo o Paraná.
          </p>

          {/* CTAs com contraste perfeito e linguagem profissional genérica (Regras 4, 9-B e 9-D) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#C9A24A] hover:bg-[#B88E36] hover:scale-[1.02] text-[#171717] border-2 border-[#C9A24A] gap-2.5 py-2.5 sm:py-3.5 px-5 sm:px-7 text-xs sm:text-sm font-bold tracking-normal shadow-[0_6px_24px_rgba(201,162,74,0.35)] group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#171717] group-hover:scale-110 transition-transform" />
              <span>Consultar Advogado</span>
            </a>

            <Link
              href="#atuacao"
              className="btn-pill bg-[#171717]/85 backdrop-blur-md text-[#E2E2E2] border border-[#C9A24A]/40 hover:bg-[#252525] hover:text-white hover:border-[#C9A24A] hover:scale-[1.02] shadow-md gap-2 py-2.5 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <span className="font-semibold">Conhecer Áreas de Atuação</span>
              <ChevronRight className="w-4 h-4 text-[#C9A24A] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-2.5 xl:py-3 border-t border-white/20 mt-4 xl:mt-6 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/90 font-bold">
                Atuba • Colombo / PR • Presencial e Online
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C9A24A]" />
                Pós-Graduado UNINTER
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A24A]" />
                OAB/PR 91.151
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}