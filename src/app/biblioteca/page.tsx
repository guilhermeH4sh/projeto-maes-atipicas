"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LibraryItem {
  id: number;
  category: string;
  categorySlug: string;
  type: "Vídeo" | "Artigo" | "PDF" | "Guia";
  title: string;
  description: string;
  badgeColor: string;
  icon: string;
}

function BibliotecaContent() {
  const searchParams = useSearchParams();
  const buscaUrl = searchParams.get("busca") || "";

  // Estados
  const [searchTerm, setSearchTerm] = useState(buscaUrl);
  const [selectedCategory, setSelectedCategory] = useState("todas");

  // Atualiza busca se a URL mudar
  useEffect(() => {
    setSearchTerm(buscaUrl);
  }, [buscaUrl]);

  // Lista de Categorias
  const categories = [
    { name: "Todas as Categorias", slug: "todas" },
    { name: "Comportamento", slug: "comportamento" },
    { name: "Fala & Comunicação", slug: "comunicacao" },
    { name: "Seletividade Alimentar", slug: "alimentacao" },
    { name: "Rotina de Sono", slug: "sono" },
    { name: "Escola e Inclusão", slug: "escola" },
    { name: "Cuidado com a Mãe", slug: "cuidado-mae" }
  ];

  // Acervo da Biblioteca Digital
  const libraryItems: LibraryItem[] = [
    {
      id: 1,
      category: "Comportamento",
      categorySlug: "comportamento",
      type: "PDF",
      title: "Guia prático de resposta imediata para crises de autoagressão",
      description: "Instruções visuais e passo a passo sobre como proteger a integridade física da criança e restabelecer a calma com segurança em momentos de crise comportamental intensa.",
      badgeColor: "bg-brand-blue/15 text-brand-blue",
      icon: "🧩"
    },
    {
      id: 2,
      category: "Comportamento",
      categorySlug: "comportamento",
      type: "Vídeo",
      title: "Técnicas de regulação sensorial no ambiente familiar no dia a dia",
      description: "Vídeo demonstrativo de 6 minutos com o Dr. André sobre como montar um cantinho da calma e usar recursos de pressão profunda para diminuir a sobrecarga sensorial.",
      badgeColor: "bg-brand-blue/15 text-brand-blue",
      icon: "🎥"
    },
    {
      id: 3,
      category: "Fala & Comunicação",
      categorySlug: "comunicacao",
      type: "Guia",
      title: "Introdução ao PECS: Como começar a usar cartões de comunicação",
      description: "Aprenda a criar e implementar um sistema básico de troca de figuras para incentivar a comunicação espontânea de crianças não-verbais ou com fala atrasada.",
      badgeColor: "bg-brand-red/15 text-brand-red",
      icon: "🗣️"
    },
    {
      id: 4,
      category: "Fala & Comunicação",
      categorySlug: "comunicacao",
      type: "Artigo",
      title: "Exercícios lúdicos diários para estímulo de linguagem expressiva",
      description: "Brincadeiras simples e rotinas comunicativas para pais aplicarem em casa durante o banho, refeições e troca de roupa para incentivar novos sons e palavras.",
      badgeColor: "bg-brand-red/15 text-brand-red",
      icon: "📰"
    },
    {
      id: 5,
      category: "Seletividade Alimentar",
      categorySlug: "alimentacao",
      type: "Vídeo",
      title: "Seletividade alimentar no autismo: A importância da dessensibilização",
      description: "Nutricionista comportamental explica como reduzir a aversão de novos alimentos usando técnicas graduais e sem pressões psicológicas durante as refeições.",
      badgeColor: "bg-brand-yellow/20 text-yellow-700",
      icon: "🎥"
    },
    {
      id: 6,
      category: "Seletividade Alimentar",
      categorySlug: "alimentacao",
      type: "PDF",
      title: "Receitas e texturas adaptadas para hipersensibilidade gustativa",
      description: "E-book gratuito com receitas nutritivas camufladas e técnicas de transição de textura para crianças com extrema recusa alimentar sensorial.",
      badgeColor: "bg-brand-yellow/20 text-yellow-700",
      icon: "🍎"
    },
    {
      id: 7,
      category: "Rotina de Sono",
      categorySlug: "sono",
      type: "Artigo",
      title: "Higiene do sono para crianças com neurodesenvolvimento atípico",
      description: "Artigo médico sobre como o cérebro atípico lida com a melatonina e estratégias ambientais e alimentares para combater a insônia crônica infantil.",
      badgeColor: "bg-brand-green/15 text-brand-green",
      icon: "😴"
    },
    {
      id: 8,
      category: "Rotina de Sono",
      categorySlug: "sono",
      type: "Guia",
      title: "Criando uma rotina noturna visual passo a passo",
      description: "Modelo para imprimir de rotina visual noturna (guardar brinquedos, escovar dentes, colocar pijama, deitar) que ajuda a criança a prever e aceitar o momento do sono.",
      badgeColor: "bg-brand-green/15 text-brand-green",
      icon: "😴"
    },
    {
      id: 9,
      category: "Escola e Inclusão",
      categorySlug: "escola",
      type: "PDF",
      title: "Checklist de adaptação escolar e deveres legais da instituição",
      description: "Documento com a lista de obrigações da escola (como adaptação de provas e fornecimento de apoio especializado) e modelos de cartas formais para requisição.",
      badgeColor: "bg-brand-blue/15 text-brand-blue",
      icon: "🏫"
    },
    {
      id: 10,
      category: "Escola e Inclusão",
      categorySlug: "escola",
      type: "Vídeo",
      title: "Como preencher e acompanhar o PEI do seu filho na escola",
      description: "Aprenda o que deve constar no Plano de Desenvolvimento Individualizado (PEI/PDI) e como realizar reuniões periódicas com a coordenação pedagógica.",
      badgeColor: "bg-brand-blue/15 text-brand-blue",
      icon: "🎥"
    },
    {
      id: 11,
      category: "Cuidado com a Mãe",
      categorySlug: "cuidado-mae",
      type: "Artigo",
      title: "Acolhimento para o luto do diagnóstico: Você não está sozinha",
      description: "Um texto acolhedor sobre aceitação, ressignificação de expectativas e o acolhimento à mãe que cuida de uma vida atípica.",
      badgeColor: "bg-brand-red/15 text-brand-red",
      icon: "🧠"
    },
    {
      id: 12,
      category: "Cuidado com a Mãe",
      categorySlug: "cuidado-mae",
      type: "PDF",
      title: "Guia prático de saúde mental e redução de sobrecarga para mães",
      description: "Cartilha com exercícios rápidos de atenção plena, organização de tarefas de cuidado e atalhos para rede de apoio gratuito local.",
      badgeColor: "bg-brand-red/15 text-brand-red",
      icon: "🧠"
    }
  ];

  // Lógica de Filtro e Busca
  const filteredItems = libraryItems.filter((item) => {
    const matchesCategory = selectedCategory === "todas" || item.categorySlug === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <nav className="flex text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6" aria-label="Caminho de navegação">
        <Link href="/" className="hover:text-brand-blue">Início</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">Biblioteca Digital</span>
      </nav>

      {/* Header */}
      <div className="border-b border-slate-200 pb-6 mb-10 text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Biblioteca Digital de Apoio
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Acesse materiais educativos validados por médicos e terapeutas em linguagem simples.
          </p>
        </div>

        {/* Input de Busca na Biblioteca */}
        <div className="w-full max-w-xs shrink-0">
          <label htmlFor="library-search" className="sr-only">Filtrar por palavra</label>
          <input
            id="library-search"
            type="text"
            placeholder="Pesquisar na biblioteca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-350 bg-white py-2.5 px-4 text-xs text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 shadow-sm"
          />
        </div>
      </div>

      {/* Abas de Categoria (Estilo Abas USP) */}
      <div className="border-b border-slate-200 mb-8 overflow-x-auto">
        <nav className="flex space-x-2 pb-px shrink-0" aria-label="Categorias da Biblioteca">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`border-b-2 px-4 py-3 text-xs font-bold whitespace-nowrap transition-all focus:outline-none ${
                selectedCategory === cat.slug
                  ? "border-brand-blue text-brand-blue bg-blue-50/20"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Lista de Itens Filtrados */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all text-left"
            >
              <div className="flex flex-col gap-4">
                {/* Cabeçalho do Card */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl select-none" role="img" aria-hidden="true">{item.icon}</span>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide bg-slate-100 text-slate-600`}>
                      {item.type}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${item.badgeColor}`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Título e Texto */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-550 leading-relaxed mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Botão de Ação Simulado */}
              <button
                onClick={() => alert(`Iniciando simulação de download/leitura para: "${item.title}"`)}
                className="mt-6 w-full py-2.5 rounded-xl border border-slate-200 hover:border-brand-blue hover:text-brand-blue bg-slate-50/50 hover:bg-blue-50/20 text-xs font-bold text-slate-700 transition-all focus:outline-none"
              >
                {item.type === "Vídeo" ? "▶ Assista ao Vídeo" : "⬇ Baixar Material (Grátis)"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-sm text-center mb-16">
          <span className="text-4xl" role="img" aria-hidden="true">🔍</span>
          <h3 className="text-lg font-bold text-slate-800 mt-4">Nenhum material encontrado</h3>
          <p className="text-xs text-slate-550 mt-2 max-w-sm mx-auto">
            Não encontramos resultados para "{searchTerm}". Experimente buscar por outros termos como "BPC", "sono" ou "crises".
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("todas");
            }}
            className="mt-4 px-4 py-2 bg-brand-blue text-white rounded-xl text-xs font-bold hover:bg-brand-blue-hover transition-colors"
          >
            Limpar Filtros e Busca
          </button>
        </div>
      )}
    </div>
  );
}

export default function Biblioteca() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow py-12">
        <Suspense fallback={
          <div className="text-center py-20">
            <p className="text-sm text-slate-500 font-bold animate-pulse">Carregando acervo da biblioteca...</p>
          </div>
        }>
          <BibliotecaContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
