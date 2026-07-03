"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SlideItem {
  id: number;
  category: string;
  title: string;
  description: string;
  link: string;
  image: string;
  color: string;
}

interface ServiceShortcut {
  icon: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

interface NewsItem {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: string;
}

export default function Home() {
  // Estado para o Carrossel
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideItem[] = [
    {
      id: 1,
      category: "Legislação & Direitos",
      title: "Laudo médico para autismo agora tem validade permanente no Brasil",
      description: "Nova regulamentação nacional elimina a necessidade de renovação periódica de laudos de TEA, aliviando a burocracia para milhares de famílias atípicas.",
      link: "/direitos",
      image: "/images/hero-mother-child.png",
      color: "bg-brand-blue"
    },
    {
      id: 2,
      category: "Escola & Educação",
      title: "Guia completo sobre Adaptação Escolar e PEI para alunos atípicos",
      description: "Saiba como requerer legalmente o Plano de Ensino Individualizado (PEI) e garantir o mediador escolar remunerado na rede pública e privada.",
      link: "/biblioteca",
      image: "/images/hero-mother-child.png",
      color: "bg-brand-green"
    },
    {
      id: 3,
      category: "Saúde Mental Materna",
      title: "Portal lança espaço dedicado para combate ao Burnout de Mães Cuidadoras",
      description: "Participe de nossos encontros mensais de apoio psicológico online e acesse materiais focados na saúde emocional e autocuidado de mães.",
      link: "/sobre",
      image: "/images/hero-mother-child.png",
      color: "bg-brand-red"
    }
  ];

  // Auto-slide para o carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Atalhos de serviços (Acesso Rápido - Estilo USP Digital)
  const services: ServiceShortcut[] = [
    {
      icon: "book",
      title: "Biblioteca Digital",
      description: "Manuais, vídeos explicativos e infográficos validados.",
      link: "/biblioteca",
      color: "border-slate-200 hover:border-brand-blue/50 text-brand-blue bg-white"
    },
    {
      icon: "bot",
      title: "Assistente IA",
      description: "Suporte 24h para dúvidas de comportamento infantil.",
      link: "/chatbot",
      color: "border-slate-200 hover:border-brand-green/50 text-brand-green bg-white"
    },
    {
      icon: "justice",
      title: "Guia de Direitos",
      description: "Passo a passo detalhado para o BPC e leis de inclusão.",
      link: "/direitos",
      color: "border-slate-200 hover:border-brand-yellow/50 text-yellow-600 bg-white"
    },
    {
      icon: "chat",
      title: "Ouvidoria / Canal",
      description: "Envie suas dúvidas e nos ajude a melhorar o portal.",
      link: "/contato",
      color: "border-slate-200 hover:border-brand-red/50 text-brand-red bg-white"
    }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "book":
        return (
          <span className="p-3 bg-blue-50 text-brand-blue rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </span>
        );
      case "bot":
        return (
          <span className="p-3 bg-green-50 text-brand-green rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        );
      case "justice":
        return (
          <span className="p-3 bg-yellow-50 text-yellow-600 rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </span>
        );
      case "chat":
        return (
          <span className="p-3 bg-red-50 text-brand-red rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </span>
        );
      default:
        return null;
    }
  };

  // Feed de Notícias Recentes
  const newsList: NewsItem[] = [
    {
      category: "Comportamento",
      title: "Como regular crises sensoriais em ambientes públicos de forma segura",
      excerpt: "Especialistas em terapia ocupacional dão dicas práticas sobre o uso de abafadores de ruído, brinquedos de transição e descompressão sensorial.",
      date: "16 de Junho de 2026",
      link: "/biblioteca",
      image: "/images/hero-mother-child.png"
    },
    {
      category: "Alimentação",
      title: "Estudo da USP revela os impactos da hipersensibilidade de texturas na recusa alimentar",
      excerpt: "Pesquisa científica aponta que a seletividade alimentar severa no TEA possui forte ligação sensorial, exigindo terapia comportamental integrativa.",
      date: "14 de Junho de 2026",
      link: "/biblioteca",
      image: "/images/hero-mother-child.png"
    },
    {
      category: "Comunicação",
      title: "Comunicação Alternativa (PECS) e o ganho na autonomia de crianças não-verbais",
      excerpt: "Artigo detalha o uso de cartões e tablets de comunicação para diminuir episódios de frustração infantil causados pela barreira de fala.",
      date: "10 de Junho de 2026",
      link: "/biblioteca",
      image: "/images/hero-mother-child.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* 1. SEÇÃO CARROSSEL DE NOTÍCIAS DE HIGHLIGHT (Estilo Portal USP) */}
        <section className="w-full bg-slate-900 text-white relative h-[420px] sm:h-[480px] overflow-hidden" aria-label="Notícias em destaque">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 flex items-center ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Imagem de Fundo Desfocada para Efeito Premium */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={idx === 0}
                  className="object-cover opacity-30 blur-sm scale-105"
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>

              {/* Conteúdo do Slide */}
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="flex flex-col gap-5 text-left max-w-xl">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider w-fit ${slide.color}`}>
                    {slide.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow hover:bg-slate-100 transition-colors w-fit focus:outline-none"
                  >
                    Leia a Matéria Completa
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Indicadores de Paginação do Carrossel */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-8 bg-brand-blue" : "w-2.5 bg-slate-500 hover:bg-slate-400"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </section>

        {/* 2. GRADE DE ACESSO RÁPIDO A SERVIÇOS (Estilo Hub USP Digital) */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center md:text-left">
              Serviços e Sistemas de Apoio
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.link}
                  className={`flex items-start gap-4 p-5 rounded-2xl border hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 group ${service.color}`}
                >
                  {getServiceIcon(service.icon)}
                  <div className="text-left">
                    <h3 className="font-extrabold text-slate-800 text-base group-hover:text-slate-950">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FEED DE NOTÍCIAS E PAINEL LATERAL (Estilo USP Notícias) */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              
              {/* Coluna Principal: Notícias Recentes (2/3 de largura) */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                  <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-5 w-1 bg-brand-blue rounded-full"></span>
                    Notícias e Artigos de Apoio
                  </h2>
                  <Link href="/biblioteca" className="text-xs font-bold text-brand-blue hover:underline">
                    Ver Todos os Artigos
                  </Link>
                </div>

                <div className="flex flex-col gap-6">
                  {newsList.map((news, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6"
                    >
                      {/* Simulação de Imagem */}
                      <div className="relative h-36 w-full sm:w-48 shrink-0 overflow-hidden rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center">
                        <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>

                      {/* Conteúdo */}
                      <div className="flex flex-col text-left justify-between py-1">
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                            <Link href={`/biblioteca?categoria=${news.category.toLowerCase()}`} className="hover:underline">{news.category}</Link>
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 hover:text-brand-blue transition-colors">
                            <Link href={news.link}>{news.title}</Link>
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {news.excerpt}
                          </p>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400 mt-4">
                          Publicado em {news.date}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Coluna Lateral: Avisos e Eventos (1/3 de largura) */}
              <div className="flex flex-col gap-8">
                
                {/* Bloco 1: Avisos Gerais */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col gap-6 border-b-4 border-brand-yellow">
                  <h3 className="font-bold text-base border-b border-slate-800 pb-2 tracking-tight flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    Mural de Avisos
                  </h3>
                  <ul className="space-y-4 text-xs text-slate-300 text-left">
                    <li className="flex gap-3 items-start border-b border-slate-800 pb-3">
                      <span className="text-brand-yellow text-xs mt-1">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Reunião Geral de Apoio Online</p>
                        <p className="text-[11px] text-slate-400 mt-1">Nesta Quinta às 19:30 via Google Meet. Link na Ouvidoria.</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start border-b border-slate-800 pb-3">
                      <span className="text-brand-green text-xs mt-1">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Campanha Nacional de Conscientização</p>
                        <p className="text-[11px] text-slate-400 mt-1">Distribuição de abafadores de ouvido em shoppings parceiros.</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-brand-red text-xs mt-1">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Pesquisa de Satisfação de Serviços</p>
                        <p className="text-[11px] text-slate-400 mt-1">Queremos te ouvir! Responda o formulário da Ouvidoria.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Bloco 2: Vídeos - TV Mães Atípicas */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
                  <h3 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2 tracking-tight flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    TV Mães Atípicas
                  </h3>
                  <div className="flex flex-col gap-4 text-left">
                    <Link href="/biblioteca?categoria=videos" className="group flex items-center gap-3">
                      <div className="h-14 w-20 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-xl shadow-sm relative overflow-hidden border border-slate-800">
                        <svg className="w-4 h-4 text-white fill-current z-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <div className="absolute inset-0 bg-brand-red opacity-10 group-hover:opacity-30 transition-opacity"></div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-blue group-hover:underline">
                          Fisioterapia Motora e Estimulação Precoce no Lar
                        </p>
                        <span className="text-[9px] text-slate-400 font-semibold uppercase mt-0.5 block">5 min · Fisioterapeuta Dr. André</span>
                      </div>
                    </Link>

                    <Link href="/biblioteca?categoria=videos" className="group flex items-center gap-3">
                      <div className="h-14 w-20 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-xl shadow-sm relative overflow-hidden border border-slate-800">
                        <svg className="w-4 h-4 text-white fill-current z-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <div className="absolute inset-0 bg-brand-blue opacity-10 group-hover:opacity-30 transition-opacity"></div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-blue group-hover:underline">
                          Técnicas de Introdução Alimentar Passo a Passo
                        </p>
                        <span className="text-[9px] text-slate-400 font-semibold uppercase mt-0.5 block">8 min · Nutricionista Juliana</span>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
