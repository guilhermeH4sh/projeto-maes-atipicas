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

interface NewsItem {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: string;
}

export default function Home() {
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-brand-blue/30 selection:text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION ULTRA-DISRUPTIVA (MESH GRADIENT E LEITURA 3D) */}
        <section 
          data-animate="hero-showcase" 
          className="w-full relative min-h-[90vh] sm:min-h-screen mesh-gradient-bg flex items-center justify-center overflow-hidden py-16 px-4"
        >
          {/* Luzes decorativas de fundo (Glassmorphism avançado) */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
            {/* Texto Hero */}
            <div className="lg:col-span-7 flex flex-col text-left justify-center lg:pr-6">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4 block">
                Universidade do Cuidado
              </span>
              
              {/* Manchete Rotativa (Carrossel integrado) */}
              <div className="relative h-[240px] sm:h-[180px] md:h-[220px] lg:h-[240px] w-full overflow-hidden mb-6">
                {slides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 flex flex-col justify-start transition-all duration-700 ease-in-out ${
                      idx === currentSlide 
                        ? "opacity-100 transform translate-y-0 pointer-events-auto" 
                        : "opacity-0 transform -translate-y-8 pointer-events-none"
                    }`}
                  >
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider w-fit mb-3 ${slide.color}`}>
                      {slide.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                      {slide.title}
                    </h1>
                  </div>
                ))}
              </div>

              {/* Descrição e CTAs */}
              <div className="flex flex-col gap-6">
                {slides.map((slide, idx) => (
                  <p
                    key={slide.id}
                    className={`text-slate-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed transition-all duration-700 delay-100 ${
                      idx === currentSlide 
                        ? "opacity-100 translate-y-0 h-auto" 
                        : "opacity-0 -translate-y-4 h-0 overflow-hidden pointer-events-none"
                    }`}
                  >
                    {slide.description}
                  </p>
                ))}

                {/* CTAs Magnéticos */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {slides.map((slide, idx) => (
                    <Link
                      key={slide.id}
                      href={slide.link}
                      data-animate="magnet"
                      className={`rounded-2xl px-8 py-4 text-xs font-bold text-white shadow-lg hover:shadow-brand-blue/30 transition-all cursor-pointer flex items-center justify-center ${
                        idx === currentSlide 
                          ? "opacity-100 scale-100 pointer-events-auto block" 
                          : "opacity-0 scale-90 pointer-events-none hidden"
                      } ${slide.color}`}
                    >
                      Acessar Conteúdo Completo
                    </Link>
                  ))}
                  
                  <Link
                    href="/chatbot"
                    data-animate="magnet"
                    className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-slate-800 px-8 py-4 text-xs font-bold shadow-md transition-all cursor-pointer hover:bg-slate-50 flex items-center justify-center"
                  >
                    💬 Falar com IA
                  </Link>
                </div>
              </div>
            </div>

            {/* Imagem Disruptiva Parallax / Glassmorphic */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div 
                data-animate="hero-media" 
                className="w-[280px] h-[360px] sm:w-[350px] sm:h-[450px] rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-white bg-slate-200 rotate-2 hover:rotate-0 transition-transform duration-500"
              >
                <Image
                  src="/images/hero-mother-child.png"
                  alt="Mãe e filho se abraçando com carinho"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Elementos flutuantes interativos (Cards 3D) */}
              <div 
                data-animate="magnet" 
                className="absolute -top-6 -right-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3 text-left max-w-[200px]"
              >
                <span className="p-2.5 bg-blue-50 text-brand-blue rounded-xl text-lg">💡</span>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900 leading-tight">Dica de Apoio</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Espaço da mente: autocuidado materno diário.</p>
                </div>
              </div>

              <div 
                data-animate="magnet" 
                className="absolute -bottom-6 -left-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3 text-left max-w-[210px]"
              >
                <span className="p-2.5 bg-green-50 text-brand-green rounded-xl text-lg">✨</span>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900 leading-tight">Inclusão Ativa</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Seu filho PcD tem direito a mediador escolar gratuito.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. GRADE DE SERVIÇOS EM PINNING SCROLL HORIZONTAL (100VH) */}
        <section 
          data-animate="horizontal-container" 
          className="horizontal-scroll-container bg-slate-900 text-white"
        >
          <div data-animate="horizontal-scroll" className="horizontal-scroll-wrapper">
            
            {/* Painel Introdução */}
            <div className="horizontal-panel bg-slate-950 flex flex-col justify-center px-12 md:px-24">
              <div className="max-w-2xl text-left flex flex-col gap-5">
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.25em]">Experiência de Cuidado</span>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  Serviços e Sistemas de Apoio
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  Criamos um ecossistema digital inteligente de aprendizagem e orientação contínua. Deslize a página para descobrir as nossas quatro divisões de atuação.
                </p>
                <div className="flex items-center gap-2 text-brand-blue text-xs font-bold mt-4 animate-pulse">
                  <span>Role para continuar</span>
                  <svg className="w-4 h-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Painel 1: Biblioteca */}
            <div className="horizontal-panel bg-brand-blue/90 flex items-center px-12 md:px-24 text-left">
              <div className="max-w-xl flex flex-col gap-4">
                <span className="p-4 bg-white/10 rounded-2xl w-fit text-3xl">📚</span>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Biblioteca Digital</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Uma central curada de e-books, vídeos de especialistas e infográficos estruturados sobre rotina, regulação emocional e seletividade alimentar.
                </p>
                <Link 
                  href="/biblioteca" 
                  className="mt-4 px-6 py-3.5 bg-white text-brand-blue font-bold rounded-xl text-xs w-fit shadow-lg hover:bg-slate-50 transition-all"
                >
                  Entrar no Acervo
                </Link>
              </div>
            </div>

            {/* Painel 2: Assistente IA */}
            <div className="horizontal-panel bg-brand-green/90 flex items-center px-12 md:px-24 text-left">
              <div className="max-w-xl flex flex-col gap-4">
                <span className="p-4 bg-white/10 rounded-2xl w-fit text-3xl">🤖</span>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Assistente Virtual IA</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Suporte 24 horas por dia para sanar dúvidas instantâneas sobre comportamento infantil, direitos e leis, alimentado por inteligência avançada.
                </p>
                <Link 
                  href="/chatbot" 
                  className="mt-4 px-6 py-3.5 bg-white text-brand-green font-bold rounded-xl text-xs w-fit shadow-lg hover:bg-slate-50 transition-all"
                >
                  Iniciar Chat Grátis
                </Link>
              </div>
            </div>

            {/* Painel 3: Direitos */}
            <div className="horizontal-panel bg-yellow-600/90 flex items-center px-12 md:px-24 text-left">
              <div className="max-w-xl flex flex-col gap-4">
                <span className="p-4 bg-white/10 rounded-2xl w-fit text-3xl">⚖️</span>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Guia de Direitos & Leis</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Passo a passo simplificado para solicitação do benefício federal BPC, regras de inclusão escolar e operadoras de saúde de terapias ilimitadas.
                </p>
                <Link 
                  href="/direitos" 
                  className="mt-4 px-6 py-3.5 bg-white text-yellow-700 font-bold rounded-xl text-xs w-fit shadow-lg hover:bg-slate-50 transition-all"
                >
                  Conhecer as Leis
                </Link>
              </div>
            </div>

            {/* Painel 4: Ouvidoria */}
            <div className="horizontal-panel bg-brand-red/90 flex items-center px-12 md:px-24 text-left">
              <div className="max-w-xl flex flex-col gap-4">
                <span className="p-4 bg-white/10 rounded-2xl w-fit text-3xl">✉️</span>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ouvidoria Geral</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Envie sugestões de novos artigos para a nossa biblioteca ou acione a Ouvidoria de forma anônima e segura sob a LGPD.
                </p>
                <Link 
                  href="/contato" 
                  className="mt-4 px-6 py-3.5 bg-white text-brand-red font-bold rounded-xl text-xs w-fit shadow-lg hover:bg-slate-50 transition-all"
                >
                  Falar Conosco
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 3. FEED DE NOTÍCIAS COM CARDS TILT 3D E PAINEL LATERAL */}
        <section className="py-24 px-4 bg-slate-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              
              {/* Coluna Principal: Notícias Recentes (8/12) */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                <div data-animate="fade-up" className="pb-4 border-b border-slate-200 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">Informativos</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Notícias e Artigos Curados
                    </h2>
                  </div>
                  <Link href="/biblioteca" className="text-xs font-bold text-brand-blue hover:underline">
                    Ver Todos
                  </Link>
                </div>

                <div data-animate="stagger-cards" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {newsList.map((news, idx) => (
                    <article
                      key={idx}
                      data-animate="tilt"
                      className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-between hover-lift gap-6 text-left"
                    >
                      <div>
                        {/* Simulação de Imagem */}
                        <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-150 flex items-center justify-center mb-4">
                          <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">
                            {news.category}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 leading-snug hover:text-brand-blue transition-colors">
                            <Link href={news.link}>{news.title}</Link>
                          </h3>
                          <p className="text-xs text-slate-550 leading-relaxed line-clamp-3">
                            {news.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
                        <span className="text-[9px] font-semibold text-slate-400">
                          {news.date}
                        </span>
                        <Link 
                          href={news.link}
                          className="text-[10px] font-bold text-brand-blue hover:text-brand-blue-hover flex items-center gap-1"
                        >
                          <span>Ler Artigo</span>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Coluna Lateral: Mural e TV (4/12) */}
              <div className="lg:col-span-4 flex flex-col gap-10">
                
                {/* Bloco 1: Avisos */}
                <div data-animate="fade-up" className="bg-slate-900 text-white rounded-[32px] p-6 flex flex-col gap-5 border-b-4 border-brand-yellow shadow-xl text-left">
                  <h3 className="font-extrabold text-base border-b border-slate-800 pb-2.5 tracking-tight flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    Mural de Avisos
                  </h3>
                  <ul className="space-y-4 text-xs text-slate-350">
                    <li className="flex gap-3 items-start border-b border-slate-800 pb-3">
                      <span className="text-brand-yellow text-xs mt-1">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Reunião Geral de Apoio Online</p>
                        <p className="text-[10px] text-slate-400 mt-1">Nesta Quinta às 19:30 via Google Meet. Link na Ouvidoria.</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start border-b border-slate-800 pb-3">
                      <span className="text-brand-green text-xs mt-1">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Campanha Nacional de Conscientização</p>
                        <p className="text-[10px] text-slate-400 mt-1">Distribuição de abafadores de ouvido em shoppings parceiros.</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-brand-red text-xs mt-1">●</span>
                      <div>
                        <p className="font-bold text-slate-200">Pesquisa de Satisfação de Serviços</p>
                        <p className="text-[10px] text-slate-400 mt-1">Queremos te ouvir! Responda o formulário da Ouvidoria.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Bloco 2: TV Mães Atípicas */}
                <div data-animate="fade-up" className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-lg flex flex-col gap-5 text-left">
                  <h3 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2.5 tracking-tight flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    TV Mães Atípicas
                  </h3>
                  <div className="flex flex-col gap-4">
                    <Link href="/biblioteca?categoria=videos" className="group flex items-center gap-3">
                      <div className="h-14 w-20 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 text-xl shadow relative overflow-hidden border border-slate-800">
                        <svg className="w-4 h-4 text-white fill-current z-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <div className="absolute inset-0 bg-brand-red opacity-10 group-hover:opacity-30 transition-opacity"></div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-blue group-hover:underline">
                          Fisioterapia Motora e Estimulação Precoce no Lar
                        </p>
                        <span className="text-[9px] text-slate-400 font-semibold uppercase mt-0.5 block">5 min · Dr. André</span>
                      </div>
                    </Link>

                    <Link href="/biblioteca?categoria=videos" className="group flex items-center gap-3">
                      <div className="h-14 w-20 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 text-xl shadow relative overflow-hidden border border-slate-800">
                        <svg className="w-4 h-4 text-white fill-current z-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <div className="absolute inset-0 bg-brand-blue opacity-10 group-hover:opacity-30 transition-opacity"></div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-blue group-hover:underline">
                          Técnicas de Introdução Alimentar Passo a Passo
                        </p>
                        <span className="text-[9px] text-slate-400 font-semibold uppercase mt-0.5 block">8 min · Juliana</span>
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
