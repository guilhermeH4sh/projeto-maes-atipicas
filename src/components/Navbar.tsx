"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./icons/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redireciona para a biblioteca com o termo de busca
      router.push(`/biblioteca?busca=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Links do Menu Horizontal Principal
  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre o Portal", path: "/sobre" },
    { name: "Biblioteca Digital", path: "/biblioteca" },
    { name: "Direitos & Leis", path: "/direitos" },
    { name: "Assistente IA", path: "/chatbot" },
    { name: "Ouvidoria / Contato", path: "/contato" }
  ];

  return (
    <header className="w-full flex flex-col z-50 shadow-md">
      {/* 1. BARRA SUPERIOR DE UTILITÁRIOS E ACESSIBILIDADE (Estilo Portal USP) */}
      <div className="w-full bg-slate-900 text-slate-300 py-2 border-b border-slate-800 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2 sm:flex-row items-center justify-between">
          {/* Acessibilidade */}
          <div className="flex items-center gap-4">
            <span className="font-semibold uppercase tracking-wider text-slate-400">Acessibilidade:</span>
            <button 
              onClick={() => alert("Função de aumentar fonte ativada (Simulado)")}
              className="hover:text-white transition-colors focus:outline-none"
              aria-label="Aumentar tamanho do texto"
            >
              A+
            </button>
            <button 
              onClick={() => alert("Função de diminuir fonte ativada (Simulado)")}
              className="hover:text-white transition-colors focus:outline-none"
              aria-label="Diminuir tamanho do texto"
            >
              A-
            </button>
            <button 
              onClick={() => alert("Alto Contraste ativado (Simulado)")}
              className="hover:text-white transition-colors focus:outline-none"
              aria-label="Ativar alto contraste"
            >
              ◐ Alto Contraste
            </button>
          </div>

          {/* Links Rápidos Institucionais */}
          <div className="flex items-center gap-4">
            <Link href="/sobre" className="hover:text-white transition-colors">Transparência</Link>
            <span>•</span>
            <Link href="/contato" className="hover:text-white transition-colors">Carta de Serviços</Link>
            <span>•</span>
            <Link href="/direitos" className="hover:text-white transition-colors">LGPD</Link>
            <span>•</span>
            <span className="text-slate-500">Idioma: 🇧🇷 PT-BR</span>
          </div>
        </div>
      </div>

      {/* 2. ÁREA PRINCIPAL DO HEADER (Logo, Título e Busca - Estilo USP) */}
      <div className="w-full bg-white py-5 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          {/* Logo e Identidade */}
          <Link href="/" className="flex items-center gap-4 focus:outline-2 focus:outline-brand-blue rounded-lg p-1 transition-all">
            <Logo size={100} className="shrink-0" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-slate-850 leading-tight">
                PORTAL MÃES ATÍPICAS
              </span>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mt-0.5">
                Universidade do Cuidado · Apoio & Orientação
              </span>
            </div>
          </Link>

          {/* Barra de Busca Integrada (Estilo USP) */}
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md shrink-0">
            <label htmlFor="navbar-search" className="sr-only">Buscar no portal</label>
            <div className="relative">
              <input
                id="navbar-search"
                type="text"
                placeholder="O que você procura? (ex: BPC, autoagressão)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-3 pl-4 pr-12 text-sm text-slate-800 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-brand-blue"
                aria-label="Executar busca"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* 3. MENU DE ABAS HORIZONTAL PRINCIPAL (Abas Azuis - Estilo USP) */}
      <div className="w-full bg-slate-100 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap -mb-px" aria-label="Abas de Navegação">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`border-b-4 px-6 py-4 text-sm font-bold transition-all ${
                    isActive
                      ? "border-brand-blue bg-white text-brand-blue shadow-sm"
                      : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
