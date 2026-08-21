"use client";

import React, { useState, useEffect } from "react";
import Logo from "./icons/Logo";
import BrandRibbon from "./BrandRibbon";

export default function Navbar() {
  const [fontScale, setFontScale] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const savedScale = localStorage.getItem("maes-atipicas-font-scale");
    const savedContrast = localStorage.getItem("maes-atipicas-high-contrast") === "true";

    if (savedScale) {
      const scale = parseInt(savedScale, 10);
      if (!Number.isNaN(scale)) {
        queueMicrotask(() => {
          setFontScale(scale);
          document.documentElement.style.fontSize = `${scale}%`;
        });
      }
    }
    if (savedContrast) {
      queueMicrotask(() => {
        setHighContrast(true);
        document.documentElement.classList.add("high-contrast");
      });
    }
  }, []);

  useEffect(() => {
    const sections = ["inicio", "pilares", "conteudos", "mural", "faq", "ajuda", "contato"];
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
          { rootMargin: "-20% 0px -65% 0px" }
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
    { name: "Mural", hash: "#mural", id: "mural" },
    { name: "FAQ", hash: "#faq", id: "faq" },
    { name: "Ajuda", hash: "#ajuda", id: "ajuda" },
    { name: "Contato", hash: "#contato", id: "contato" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetEl = document.querySelector(hash);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const a11yBtn =
    "inline-flex items-center justify-center min-h-12 min-w-12 px-3 rounded-lg hover:bg-white/10 hover:text-white transition-colors font-bold";

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <BrandRibbon />

      <div className="w-full bg-slate-900 text-slate-200 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-12">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-slate-400 mr-2 hidden sm:inline">
              Acessibilidade
            </span>
            <button
              type="button"
              onClick={() => changeFontScale(10)}
              className={a11yBtn}
              aria-label="Aumentar texto"
            >
              A+
            </button>
            <button
              type="button"
              onClick={() => changeFontScale(-10)}
              className={a11yBtn}
              aria-label="Diminuir texto"
            >
              A-
            </button>
            <button
              type="button"
              onClick={toggleHighContrast}
              className={a11yBtn}
              aria-pressed={highContrast}
              aria-label="Alternar alto contraste"
            >
              Contraste
            </button>
          </div>
          <p className="hidden sm:block text-slate-400 text-sm">
            Universidade do Cuidado · Apoio inclusivo
          </p>
        </div>
      </div>

      <div className="w-full py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex items-center gap-3 group rounded-xl"
          >
            <Logo size={44} className="transition-transform group-hover:scale-105 duration-300" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
                Mães Atípicas
              </span>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-1">
                Portal de Acolhimento
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5" aria-label="Seções da página">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className={`text-sm font-semibold tracking-wide py-3 border-b-2 ${
                  activeSection === link.id
                    ? "border-brand-blue text-brand-blue"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contato"
              onClick={(e) => handleLinkClick(e, "#contato")}
              className="inline-flex items-center justify-center min-h-12 px-6 rounded-full text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm"
            >
              Fale Conosco
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center min-h-12 min-w-12 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-mobile"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="menu-mobile"
          className="lg:hidden w-full bg-white border-t border-slate-100 py-4 px-6 flex flex-col gap-2 shadow-inner"
        >
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className={`text-base font-bold min-h-12 flex items-center border-l-4 pl-3 rounded-r-lg ${
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
            className="w-full text-center min-h-12 flex items-center justify-center rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover mt-2"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
}
