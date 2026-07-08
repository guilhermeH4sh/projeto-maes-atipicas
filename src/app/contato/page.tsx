"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contato() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tipo: "duvida",
    mensagem: "",
    lgpd: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim() || !formData.lgpd) {
      setValidationError("Por favor, preencha todos os campos obrigatórios e aceite a autorização de uso de dados.");
      return;
    }

    setIsSubmitting(true);

    // Simula o envio com delay de rede
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Breadcrumb */}
          <nav className="flex text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6" aria-label="Caminho de navegação">
            <Link href="/" className="hover:text-brand-blue">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">Contato & Ouvidoria</span>
          </nav>

          {/* Cabeçalho */}
          <div className="border-b border-slate-200 pb-6 mb-10">
            <h1 data-animate="text-reveal" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fale com o Portal Mães Atípicas
            </h1>
            <p data-animate="fade-in" className="text-base text-slate-650 mt-3 leading-relaxed">
              Use este espaço para tirar dúvidas institucionais, enviar sugestões de novos temas para a biblioteca ou acionar a nossa Ouvidoria Geral.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
            {/* Esquerda: Formulário (7/12 largura) */}
            <div data-animate="fade-up" className="md:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
                    Enviar Mensagem
                  </h2>

                  {/* Mensagem de Erro de Validação */}
                  {validationError && (
                    <div className="bg-red-50 text-brand-red text-xs font-semibold p-4 rounded-xl border border-red-100 flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {validationError}
                    </div>
                  )}

                  {/* Nome */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-nome" className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="form-nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Maria da Silva"
                      className="rounded-xl border border-slate-300 bg-slate-50/50 py-3 px-4 text-xs text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>

                  {/* E-mail */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                      Seu endereço de e-mail *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: maria@email.com"
                      className="rounded-xl border border-slate-300 bg-slate-50/50 py-3 px-4 text-xs text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>

                  {/* Tipo de Assunto */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-tipo" className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                      Qual é o motivo do contato? *
                    </label>
                    <select
                      id="form-tipo"
                      value={formData.tipo}
                      onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                      className="rounded-xl border border-slate-300 bg-slate-50/50 py-3 px-4 text-xs text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    >
                      <option value="duvida">Dúvida sobre conteúdos</option>
                      <option value="sugestao">Sugestão de material / artigo</option>
                      <option value="ouvidoria">Ouvidoria (crítica ou reclamação)</option>
                      <option value="dpo">Solicitar exclusão de dados (LGPD)</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-msg" className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                      Escreva sua mensagem aqui *
                    </label>
                    <textarea
                      id="form-msg"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva sua dúvida ou sugestão de forma simples..."
                      className="rounded-xl border border-slate-300 bg-slate-50/50 py-3 px-4 text-xs text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 resize-none"
                    ></textarea>
                  </div>

                  {/* LGPD Checkbox */}
                  <div className="flex items-start gap-3 mt-2 text-left">
                    <input
                      id="form-lgpd"
                      type="checkbox"
                      required
                      checked={formData.lgpd}
                      onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue/20"
                    />
                    <label htmlFor="form-lgpd" className="text-[11px] text-slate-500 leading-normal">
                      Autorizo o Portal Mães Atípicas a utilizar os dados fornecidos neste formulário exclusivamente para responder à minha solicitação, em total conformidade com a LGPD. *
                    </label>
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 w-full sm:w-auto rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 px-6 text-xs font-bold shadow transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                         Enviando...
                      </>
                    ) : (
                      "Enviar Mensagem"
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center flex flex-col gap-4">
                  <span className="text-5xl">✅</span>
                  <h2 className="text-xl font-bold text-slate-850">Sua mensagem foi enviada!</h2>
                  <p className="text-xs text-slate-550 max-w-sm mx-auto leading-relaxed">
                    Agradecemos o seu contato. A nossa Ouvidoria analisará sua mensagem e responderá no seu e-mail cadastrado em até 3 dias úteis.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ nome: "", email: "", tipo: "duvida", mensagem: "", lgpd: false });
                    }}
                    className="mt-4 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-750 font-bold rounded-xl text-xs transition-all w-fit mx-auto"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              )}
            </div>

            {/* Direita: Informações Gerais (5/12 largura) */}
            <div data-animate="fade-up" className="md:col-span-5 flex flex-col gap-6">
              {/* Canais Diretos */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
                <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2">
                  Atendimento Direto
                </h3>
                <div className="text-xs text-slate-600 space-y-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">E-mail Institucional:</span>
                    <span className="text-slate-800">contato@maesatipicasportal.com.br</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">E-mail Encarregado de Dados (DPO):</span>
                    <span className="text-slate-800">dpo@maesatipicasportal.com.br</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Horário de Resposta:</span>
                    <span className="text-slate-850 font-semibold">Segunda a Sexta, das 9h às 18h</span>
                  </div>
                </div>
              </div>

              {/* Ouvidoria Geral */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border-b-4 border-brand-red flex flex-col gap-3">
                <h3 id="ouvidoria" className="font-bold text-sm flex items-center gap-2">
                  <span>⚖️</span> Ouvidoria do Portal
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A Ouvidoria é a última instância de contato para reclamações sobre atendimento, direitos violados descritos no portal ou denúncias de vazamento de dados. O prazo máximo de resolução é de 10 dias úteis.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
