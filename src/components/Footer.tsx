"use client";

import React from "react";
import Logo from "./icons/Logo";
import BrandRibbon from "./BrandRibbon";
import { scrollToHash } from "@/lib/scroll";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    scrollToHash(hash);
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pb-12 text-sm">
      <BrandRibbon />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Grid Superior */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 border-b border-slate-800 pb-12">
          
          {/* Identidade */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo size={40} className="bg-white p-1 rounded-lg shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">Mães Atípicas</span>
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest -mt-0.5">Portal de Acolhimento</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              O Portal Oficial de Informação, Acolhimento e Orientação para famílias que vivenciam a neurodiversidade e o desenvolvimento infantil atípico.
            </p>
          </div>

          {/* Coluna 1: Mapa do Site */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-brand-blue pl-2">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" onClick={(e) => handleLinkClick(e, "#inicio")} className="hover:text-white hover:underline transition-all">
                  Início
                </a>
              </li>
              <li>
                <a href="#pilares" onClick={(e) => handleLinkClick(e, "#pilares")} className="hover:text-white hover:underline transition-all">
                  Pilares de Apoio
                </a>
              </li>
              <li>
                <a href="#conteudos" onClick={(e) => handleLinkClick(e, "#conteudos")} className="hover:text-white hover:underline transition-all">
                  Guias e Conteúdos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Recursos */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-brand-green pl-2">
              Comunidade
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#mural" onClick={(e) => handleLinkClick(e, "#mural")} className="hover:text-white hover:underline transition-all">
                  Mural de Avisos & TV
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, "#faq")} className="hover:text-white hover:underline transition-all">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Ouvidoria e Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-brand-red pl-2">
              Suporte & Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#contato" onClick={(e) => handleLinkClick(e, "#contato")} className="hover:text-white hover:underline transition-all font-semibold text-brand-blue">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#ajuda" onClick={(e) => handleLinkClick(e, "#ajuda")} className="hover:text-white hover:underline transition-all">
                  Ajuda urgente (188 / 100 / 192)
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleLinkClick(e, "#contato")} className="hover:text-white hover:underline transition-all">
                  Ouvidoria (Sugestões)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Informações de Compliance e LGPD */}
          <div className="flex flex-col gap-1 text-left max-w-xl">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              O Portal Mães Atípicas segue as diretrizes da Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018. Todos os dados enviados pelo formulário de contato são tratados sob sigilo de segurança e privacidade.
            </p>
            <p className="text-[11px] text-slate-500">
              Certificações de Acessibilidade: Em conformidade com o e-MAG (Modelo de Acessibilidade em Governo Eletrônico) e WCAG 2.1 AA.
            </p>
          </div>

          {/* Selos de Acessibilidade e Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-500">
            <div className="flex gap-3 text-slate-400 font-bold">
              <span className="border border-slate-700 rounded px-1.5 py-0.5 select-none bg-slate-800 text-[10px]">WCAG 2.1 AA</span>
              <span className="border border-slate-700 rounded px-1.5 py-0.5 select-none bg-slate-800 text-[10px]">e-MAG</span>
            </div>
            <p className="mt-1 text-center md:text-right">
              © {new Date().getFullYear()} Mães Atípicas · Desenvolvido com carinho para apoiar quem cuida.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
