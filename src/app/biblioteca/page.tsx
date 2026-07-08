"use client";

import React, { useState, Suspense } from "react";
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
  const categoriaUrl = searchParams.get("categoria") || "todas";

  // Estados
  const [searchTerm, setSearchTerm] = useState(buscaUrl);
  const [selectedCategory, setSelectedCategory] = useState(categoriaUrl);
  const [prevBuscaUrl, setPrevBuscaUrl] = useState(buscaUrl);
  const [prevCategoriaUrl, setPrevCategoriaUrl] = useState(categoriaUrl);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Atualiza estados caso a URL mude (padrão síncrono do React 19)
  if (buscaUrl !== prevBuscaUrl) {
    setPrevBuscaUrl(buscaUrl);
    setSearchTerm(buscaUrl);
  }
  if (categoriaUrl !== prevCategoriaUrl) {
    setPrevCategoriaUrl(categoriaUrl);
    setSelectedCategory(categoriaUrl);
  }

  const handleDownload = (title: string, type: string) => {
    const action = type === "Vídeo" ? "Acessando" : "Baixando";
    setToastMessage(`${action} material: "${title}"...`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case "Vídeo":
        return (
          <span className="p-2 bg-blue-50 text-brand-blue rounded-lg shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </span>
        );
      case "Artigo":
        return (
          <span className="p-2 bg-red-50 text-brand-red rounded-lg shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 00-2-2m2 2a2 2 0 00-2 2m2 5a2 2 0 01-2 2m0-3h.01M17 17h.01M12 8H7m5 4H7m3 4H7" />
            </svg>
          </span>
        );
      case "PDF":
        return (
          <span className="p-2 bg-yellow-50 text-yellow-600 rounded-lg shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </span>
        );
      case "Guia":
        return (
          <span className="p-2 bg-green-50 text-brand-green rounded-lg shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </span>
        );
      default:
        return null;
    }
  };

  // Lista de Categorias
  const categories = [
    { name: "Todas as Categorias", slug: "todas" },
    { name: "Vídeos (TV)", slug: "videos" },
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
    const matchesCategory =
      selectedCategory === "todas" ||
      item.categorySlug === selectedCategory ||
      (selectedCategory === "videos" && item.type === "Vídeo");
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
          <h1 data-animate="text-reveal" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Biblioteca Digital de Apoio
          </h1>
          <p data-animate="fade-in" className="text-sm sm:text-base text-slate-600 mt-2">
            Acesse materiais educativos validados por médicos e terapeutas em linguagem simples.
          </p>
        </div>

        {/* Input de Busca na Biblioteca */}
        <div data-animate="fade-in" className="w-full max-w-xs shrink-0">
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
        <div data-animate="stagger-cards" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover-lift text-left"
            >
              <div className="flex flex-col gap-4">
                {/* Cabeçalho do Card */}
                <div className="flex justify-between items-center">
                  {getItemIcon(item.type)}
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide bg-slate-100 text-slate-600">
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
                  <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Botão de Ação Simulado */}
              <button
                onClick={() => handleDownload(item.title, item.type)}
                className="mt-6 w-full py-2.5 rounded-xl border border-slate-200 hover:border-brand-blue hover:text-brand-blue bg-slate-50/50 hover:bg-blue-50/20 text-xs font-bold text-slate-700 transition-all focus:outline-none cursor-pointer"
              >
                {item.type === "Vídeo" ? "▶ Assista ao Vídeo" : "⬇ Baixar Material (Grátis)"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-sm text-center mb-16 flex flex-col items-center gap-4">
          <svg className="w-12 h-12 text-slate-350" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="text-lg font-bold text-slate-800 mt-2">Nenhum material encontrado</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Não encontramos resultados para &quot;{searchTerm}&quot;. Experimente buscar por outros termos como &quot;BPC&quot;, &quot;sono&quot; ou &quot;crises&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("todas");
            }}
            className="mt-2 px-4 py-2 bg-brand-blue text-white rounded-xl text-xs font-bold hover:bg-brand-blue-hover transition-colors cursor-pointer"
          >
            Limpar Filtros e Busca
          </button>
        </div>
      )}

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold py-3.5 px-5 rounded-xl shadow-lg border border-slate-800 animate-fade-in flex items-center gap-3">
          <svg className="w-4 h-4 text-brand-green animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {toastMessage}
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
