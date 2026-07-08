"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "@/components/icons/Logo";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Olá, mamãe! Sou a sua Assistente Virtual de Apoio. Estou aqui para te ouvir e orientar sobre comportamentos, comunicação, alimentação e direitos. Como você e seu filho estão hoje? Se quiser, pode selecionar uma das perguntas comuns no painel lateral."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Perguntas rápidas
  const quickQuestions = [
    {
      q: "Meu filho se bate (autoagressão) quando fica com raiva. O que eu faço?",
      a: "Em crises de autoagressão, a segurança é prioridade. 1) Coloque algo macio (almofada) sob a cabeça dele para evitar ferimentos. 2) Evite gritar ou contê-lo com força bruta (isso pode aumentar a crise). 3) Fale baixo, com voz firme e calma: 'Você está seguro'. 4) Diminua o barulho e a luz do ambiente. Assim que passar, encaminhe-o a uma atividade de interesse. Temos um [Guia Prático de Comportamento](/biblioteca) com mais detalhes."
    },
    {
      q: "Como incentivar a fala de uma criança autista não-verbal?",
      a: "Para crianças não-verbais, a Comunicação Alternativa (como cartões PECS ou aplicativos de comunicação por voz) é essencial. Comece associando o cartão à imagem do que ela quer (ex: cartão com foto de água = dar um copo d'água). Brinque de frente para ela, na altura dos seus olhos, usando frases curtas e apontando para os objetos. Visite nossa seção de [Comunicação](/biblioteca) para baixar os cartões para imprimir."
    },
    {
      q: "Quais os requisitos e documentos para pedir o BPC/LOAS?",
      a: "Os requisitos são: 1) Inscrição atualizada no CadÚnico da sua família. 2) Renda da família menor que 1/4 do salário mínimo por pessoa. 3) Comprovante de deficiência (laudo médico detalhado com CID). Para dar entrada, acesse o aplicativo 'Meu INSS' ou ligue no número 135. Veja nosso passo a passo completo na aba de [Direitos e Leis](/direitos)."
    },
    {
      q: "O que fazer diante da recusa alimentar crônica?",
      a: "A recusa de alimentos no autismo geralmente é sensorial (aversão a texturas pastosas, crocantes, cheiros ou cores). Nunca force a criança a comer, para não gerar traumas. Coloque o alimento novo no prato dela apenas para que ela veja e acostume, depois incentive a tocar, cheirar e por último provar, de forma bem gradual. Veja as receitas adaptadas na nossa [Biblioteca](/biblioteca)."
    }
  ];

  // Auto-scroll para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Função para enviar mensagem manual do input
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputValue
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Resposta padrão caso não case com nada específico
    setTimeout(() => {
      const responseText = "Entendi o seu relato. Como assistente virtual do portal, recomendo ler nossos manuais específicos na aba de Biblioteca Digital para obter orientações detalhadas de saúde e comportamento, ou consultar a nossa equipe multidisciplinar. Lembre-se: em caso de crise grave ou risco à saúde, procure uma Unidade de Pronto Atendimento (UPA) ou o especialista do seu filho.";
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: responseText }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  // Função para clique em perguntas rápidas
  const handleQuickQuestionClick = (q: string, a: string) => {
    if (isTyping) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: q }
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: a }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const renderMessageText = (text: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        parts.push(text.substring(lastIndex, matchIndex));
      }
      const linkText = match[1];
      const linkUrl = match[2];
      parts.push(
        <Link 
          key={matchIndex} 
          href={linkUrl} 
          className="underline font-bold hover:text-brand-blue-hover text-brand-blue cursor-pointer"
        >
          {linkText}
        </Link>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6" aria-label="Caminho de navegação">
            <Link href="/" className="hover:text-brand-blue">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">Assistente IA de Apoio</span>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* Esquerda: Painel de Perguntas Rápidas (4/12 largura) */}
            <div data-animate="fade-up" className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Perguntas Rápidas
                </h2>
                <p className="text-xs text-slate-550 mt-2 leading-relaxed">
                  Clique em qualquer um dos tópicos abaixo para simular a resposta imediata da nossa assistente virtual de apoio:
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  {quickQuestions.map((item, idx) => (
                    <button
                      key={idx}
                      disabled={isTyping}
                      onClick={() => handleQuickQuestionClick(item.q, item.a)}
                      className="text-left text-xs bg-slate-50 hover:bg-brand-blue/5 border border-slate-200 hover:border-brand-blue/30 text-slate-750 hover:text-brand-blue py-3 px-4 rounded-xl transition-all font-semibold leading-relaxed disabled:opacity-55 cursor-pointer hover-lift"
                    >
                      {item.q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Disclaimer de Segurança */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border-b-4 border-brand-red flex flex-col gap-3 shadow-sm">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Aviso Importante
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Esta inteligência artificial serve como apoio educativo e curadoria dos materiais do portal. Ela não substitui tratamentos, intervenções terapêuticas ou consultas médicas individuais de neuropediatras e psicólogos.
                </p>
              </div>
            </div>

            {/* Direita: Chat em tela cheia (8/12 largura) */}
            <div data-animate="fade-up" className="lg:col-span-8 flex flex-col">
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col h-[580px] overflow-hidden">
                
                {/* Header do Chat */}
                <div className="bg-slate-900 text-white p-5 flex items-center gap-3 border-b border-slate-800">
                  <Logo size={32} className="bg-white p-1 rounded-lg shrink-0" />
                  <div className="text-left">
                    <h3 className="font-bold text-sm sm:text-base leading-tight">Assistente Virtual Mães Atípicas</h3>
                    <p className="text-xs text-brand-green font-semibold flex items-center gap-1.5 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-brand-green animate-ping"></span>
                      Online · Responde em segundos
                    </p>
                  </div>
                </div>

                {/* Área de Mensagens */}
                <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] text-left rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                          msg.sender === "user"
                            ? "bg-brand-blue text-white rounded-br-none"
                            : "bg-white text-slate-800 border border-slate-150 rounded-bl-none"
                        }`}
                      >
                        <div className="whitespace-pre-line">{renderMessageText(msg.text)}</div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-150 text-slate-450 rounded-2xl rounded-bl-none p-4 text-sm flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input de Envio de Mensagem */}
                <form onSubmit={handleSend} className="p-4 border-t border-slate-200 bg-white flex gap-3">
                  <label htmlFor="chat-message-input" className="sr-only">Digite sua dúvida</label>
                  <input
                    id="chat-message-input"
                    type="text"
                    placeholder="Digite sua dúvida aqui..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isTyping}
                    className="flex-grow rounded-xl border border-slate-300 bg-slate-50/50 py-3 px-4 text-sm text-slate-800 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="inline-flex items-center justify-center rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 text-sm font-bold shadow transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                    aria-label="Enviar mensagem"
                  >
                    Enviar
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
