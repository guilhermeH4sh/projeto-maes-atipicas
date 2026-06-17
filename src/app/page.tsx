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
      icon: "📚",
      title: "Biblioteca Digital",
      description: "Manuais, vídeos explicativos e infográficos validados.",
      link: "/biblioteca",
      color: "border-brand-blue text-brand-blue bg-blue-50/50"
    },
    {
      icon: "🤖",
      title: "Assistente IA",
      description: "Suporte 24h para dúvidas de comportamento infantil.",
      link: "/chatbot",
      color: "border-brand-green text-brand-green bg-green-50/50"
    },
    {
      icon: "⚖️",
      title: "Guia de Direitos",
      description: "Passo a passo detalhado para o BPC e leis de inclusão.",
      link: "/direitos",
      color: "border-brand-yellow text-yellow-700 bg-yellow-50/50"
    },
    {
      icon: "🗣️",
      title: "Ouvidoria / Canal",
      description: "Envie suas dúvidas e nos ajude a melhorar o portal.",
      link: "/contato",
      color: "border-brand-red text-brand-red bg-red-50/50"
    }
  ];

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
              <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm scale-105" style={{ backgroundImage: `url(${slide.image})` }}></div>
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
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 group ${service.color}`}
                >
                  <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{service.icon}</span>
                  <div className="text-left">
                    <h3 className="font-extrabold text-slate-800 text-base group-hover:underline">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-650 leading-relaxed mt-1">
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
                      <div className="relative h-36 w-full sm:w-48 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-150">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-3xl font-bold text-slate-400 select-none">
                          📰
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="flex flex-col text-left justify-between py-1">
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                            {news.category}
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
                    📢 Mural de Avisos
                  </h3>
                  <ul className="space-y-4 text-xs text-slate-300 text-left">
                    <li className="flex gap-3 items-start border-b border-slate-800 pb-3">
                      <span className="text-brand-yellow text-sm">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Reunião Geral de Apoio Online</p>
                        <p className="text-[11px] text-slate-400 mt-1">Nesta Quinta às 19:30 via Google Meet. Link na Ouvidoria.</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start border-b border-slate-800 pb-3">
                      <span className="text-brand-green text-sm">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Campanha Nacional de Conscientização</p>
                        <p className="text-[11px] text-slate-400 mt-1">Distribuição de abafadores de ouvido em shoppings parceiros.</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-brand-red text-sm">●</span>
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
                    🎥 TV Mães Atípicas
                  </h3>
                  <div className="flex flex-col gap-4 text-left">
                    <Link href="/biblioteca" className="group flex items-center gap-3">
                      <div className="h-14 w-20 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-xl shadow-sm relative overflow-hidden border border-slate-800">
                        <span className="z-10">▶️</span>
                        <div className="absolute inset-0 bg-brand-red opacity-10 group-hover:opacity-30 transition-opacity"></div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-blue group-hover:underline">
                          Fisioterapia Motora e Estimulação Precoce no Lar
                        </p>
                        <span className="text-[9px] text-slate-400 font-semibold uppercase mt-0.5 block">5 min · Fisioterapeuta Dr. André</span>
                      </div>
                    </Link>

                    <Link href="/biblioteca" className="group flex items-center gap-3">
                      <div className="h-14 w-20 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-xl shadow-sm relative overflow-hidden border border-slate-800">
                        <span className="z-10">▶️</span>
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
