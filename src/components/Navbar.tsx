"use client";

import React, { useState, useEffect } from "react";
import Logo from "./icons/Logo";

export default function Navbar() {
  // Controle de tamanho de fonte de acessibilidade (valores em %)
  const [fontScale, setFontScale] = useState(100);
  // Estado para ativação do modo de Alto Contraste
  const [highContrast, setHighContrast] = useState(false);
  // Visibilidade do menu hamburguer em dispositivos móveis
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Seção da landing page atualmente visível na tela (para destacar o link ativo)
  const [activeSection, setActiveSection] = useState("inicio");

  /**
   * Sincroniza as preferências de acessibilidade do usuário (fonte e contraste)
   * que foram persistidas anteriormente no localStorage do navegador.
   */
  useEffect(() => {
    const savedScale = localStorage.getItem("maes-atipicas-font-scale");
    const savedContrast = localStorage.getItem("maes-atipicas-high-contrast") === "true";

    setTimeout(() => {
      if (savedScale) {
        const scale = parseInt(savedScale, 10);
        setFontScale(scale);
        document.documentElement.style.fontSize = `${scale}%`;
      }
      if (savedContrast) {
        setHighContrast(true);
        document.documentElement.classList.add("high-contrast");
      }
    }, 0);
  }, []);

  /**
   * Registra observers de interseção para monitorar a visibilidade das seções
   * e destacar o link ativo de navegação de forma eficiente e sem reflow.
   */
  useEffect(() => {
    const sections = ["inicio", "pilares", "conteudos", "mural", "faq", "contato"];
    const observers: { observer: IntersectionObserver; el: HTMLElement }[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { rootMargin: "-20% 0px -65% 0px" } // Gatilho para a parte central superior do viewport
        );
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  const changeFontScale = (increment: number) => {
    let newScale = fontScale + increment;
    if (newScale < 80) newScale = 80;
    if (newScale > 140) newScale = 140;

    setFontScale(newScale);
    localStorage.setItem("maes-atipicas-font-scale", newScale.toString());
    document.documentElement.style.fontSize = `${newScale}%`;
  };

  const toggleHighContrast = () => {
    const newVal = !highContrast;
    setHighContrast(newVal);
    localStorage.setItem("maes-atipicas-high-contrast", newVal.toString());
    if (newVal) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  const navLinks = [
    { name: "Início", hash: "#inicio", id: "inicio" },
    { name: "Pilares", hash: "#pilares", id: "pilares" },
    { name: "Guias", hash: "#conteudos", id: "conteudos" },
    { name: "Mural & TV", hash: "#mural", id: "mural" },
    { name: "FAQ", hash: "#faq", id: "faq" },
    { name: "Contato", hash: "#contato", id: "contato" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetEl = document.querySelector(hash);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      {/* 1. Barra de Acessibilidade Superior (Clean & Discreta) */}
      <div className="w-full bg-slate-900 text-slate-300 py-1.5 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-400">Acessibilidade:</span>
            <button 
              onClick={() => changeFontScale(10)}
              className="hover:text-white transition-colors cursor-pointer font-bold px-1"
              aria-label="Aumentar texto"
            >
              A+
            </button>
            <button 
              onClick={() => changeFontScale(-10)}
              className="hover:text-white transition-colors cursor-pointer font-bold px-1"
              aria-label="Diminuir texto"
            >
              A-
            </button>
            <button 
              onClick={toggleHighContrast}
              className="hover:text-white transition-colors cursor-pointer font-bold px-1 flex items-center gap-1"
              aria-label="Alternar alto contraste"
            >
              <span>◐</span> Contraste
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>Universidade do Cuidado</span>
            <span>•</span>
            <span>Apoio Inclusivo</span>
          </div>
        </div>
      </div>

      {/* 2. Menu Principal (Estilo Nuvemshop) */}
      <div className="w-full py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo e Nome da Marca */}
          <a 
            href="#inicio" 
            onClick={(e) => handleLinkClick(e, "#inicio")} 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <Logo size={42} className="transition-transform group-hover:scale-105 duration-300" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                Mães Atípicas
              </span>
              <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest mt-1">
                Portal de Acolhimento
              </span>
            </div>
          </a>

          {/* Links para Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className={`text-sm font-semibold tracking-wide transition-all py-1 border-b-2 ${
                  activeSection === link.id
                    ? "border-brand-blue text-brand-blue"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botão de Destaque CTA (Estilo Nuvemshop) */}
          <div className="hidden md:block">
            <a
              href="#contato"
              onClick={(e) => handleLinkClick(e, "#contato")}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm transition-all transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
            >
              Fale Conosco
            </a>
          </div>

          {/* Hamburguer Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-950 focus:outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-slate-100 py-4 px-6 flex flex-col gap-4 animate-fade-in shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className={`text-base font-bold py-2 border-l-4 pl-3 ${
                activeSection === link.id
                  ? "border-brand-blue text-brand-blue bg-slate-50"
                  : "border-transparent text-slate-700 hover:text-slate-900"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => handleLinkClick(e, "#contato")}
            className="w-full text-center py-3 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm transition-all cursor-pointer mt-2"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
}
