"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck } from "lucide-react";
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0A0A0A] text-[#F5F1E8] border-t border-[#C9A24A]/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="block focus:outline-none group cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <div className="relative h-20 sm:h-24 w-72 sm:w-80 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="320px"
                />
              </div>
            </Link>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Defesa técnica, estratégica e humanizada em Direito do Trabalho, Família e Consultoria Jurídica. Sede física no Atuba em Colombo/PR e atendimento online em todo o Paraná.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A24A]/30 bg-[#151515] text-xs font-heading text-[#F5F1E8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>{OFFICE_INFO.name} • OAB/PR 91.151</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#C9A24A] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300">
              <li>
                <Link href="#inicio" className="hover:text-[#C9A24A] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#C9A24A] transition-colors">O Advogado</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-[#C9A24A] transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-[#C9A24A] transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-[#C9A24A] transition-colors">Como Atuamos</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-[#C9A24A] transition-colors">Avaliações no Google</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-[#C9A24A] transition-colors">Conteúdo Educativo</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#C9A24A] transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#C9A24A] transition-colors">Contato &amp; Localização</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#C9A24A] hover:text-white hover:underline font-semibold">Central de Links (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#C9A24A] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading">Endereço:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Expediente:</strong> {OFFICE_INFO.schedule.weekdays}</p>
              <p><strong className="text-white font-heading">Sexta-feira:</strong> {OFFICE_INFO.schedule.friday}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#202020] hover:border hover:border-[#C9A24A]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#202020] hover:border hover:border-[#C9A24A]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="font-body text-center md:text-left">
            © {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="font-body text-center md:text-right text-[0.6875rem] text-gray-500">
            Conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e Código de Ética e Disciplina.
          </p>
        </div>

      </div>
    </footer>
  );
}