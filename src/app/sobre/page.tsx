import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Sobre() {
  const comiteMedico = [
    { name: "Dra. Mariana Vasconcellos", role: "Neuropediatra (USP)", desc: "Especialista em Transtorno do Espectro Autista e neurodesenvolvimento na infância." },
    { name: "Dr. André Lourenço", role: "Terapeuta Ocupacional (Unifesp)", desc: "Focado em integração sensorial e regulação de comportamento infantil." },
    { name: "Dra. Juliana Siqueira", role: "Psicóloga Comportamental - ABA", desc: "Consultora editorial de manejo e intervenção comportamental no ambiente familiar." },
    { name: "Dra. Patrícia Mendes", role: "Fonoaudióloga Clínico-Escolar", desc: "Especialista em desenvolvimento de linguagem e comunicação alternativa." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb simples */}
          <nav className="flex text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6" aria-label="Caminho de navegação">
            <Link href="/" className="hover:text-brand-blue">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">Sobre o Portal</span>
          </nav>

          {/* Cabeçalho de Página */}
          <div className="border-b border-slate-200 pb-6 mb-10 text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sobre o Portal Mães Atípicas
            </h1>
            <p className="text-base sm:text-lg text-slate-650 mt-3 leading-relaxed">
              Uma iniciativa multidisciplinar focada em traduzir o conhecimento científico em acolhimento diário para famílias de crianças com desenvolvimento atípico.
            </p>
          </div>

          {/* Missão e Proposta */}
          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-left flex flex-col gap-6 mb-12">
            <h2 className="text-xl font-bold text-slate-800 border-l-4 border-brand-blue pl-3">
              Missão e Propósito
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                O <strong>Portal Mães Atípicas</strong> nasceu de uma constatação simples e preocupante: a dispersão de informações na internet, o excesso de termos técnicos complexos e a ausência de suporte rápido geram sobrecarga e isolamento emocional para as mães atípicas brasileiras.
              </p>
              <p>
                Inspirado em portais acadêmicos de serviços e comunicação de utilidade pública (como os modelos da Universidade de São Paulo), este portal centraliza orientações sobre **Comportamento, Comunicação, Alimentação, Direitos e Saúde Mental das Mães**.
              </p>
              <p>
                Nossa premissa fundamental é a **acessibilidade digital e de linguagem**, garantindo que qualquer cuidador, independente de escolaridade ou afinidade com a tecnologia, consiga encontrar o amparo prático e legal que precisa para o bem-estar de seu filho.
              </p>
            </div>
          </section>

          {/* Comitê Multidisciplinar */}
          <section id="comite" className="mb-12">
            <div className="text-left mb-6">
              <h2 className="text-xl font-bold text-slate-800 border-l-4 border-brand-green pl-3">
                Comitê Científico e Editorial
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Todo o conteúdo do portal é curado, revisado e aprovado por profissionais certificados.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {comiteMedico.map((medico, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-left flex flex-col gap-2 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-slate-900 text-base">{medico.name}</h3>
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wide bg-green-50 px-2.5 py-1 rounded-md w-fit">
                    {medico.role}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {medico.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Transparência e Financiamento */}
          <section id="transparencia" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-left flex flex-col gap-6">
            <h2 className="text-xl font-bold text-slate-800 border-l-4 border-brand-red pl-3">
              Portal da Transparência
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Nós mantemos um compromisso ético inegociável de independência editorial. O Portal Mães Atípicas não recebe patrocínio de indústrias farmacêuticas e não possui conflitos de interesse.
              </p>
              <p>
                Nossa viabilidade técnica é mantida por meio de parcerias institucionais voluntárias, convênios de extensão com faculdades de saúde e suporte financeiro de doadores via modelo associativo sem fins lucrativos.
              </p>
              <p>
                Para mais informações sobre auditorias anuais de dados ou para entrar em contato com a diretoria do portal, acesse a nossa aba de <Link href="/contato" className="text-brand-blue underline hover:text-brand-blue-hover">Ouvidoria</Link>.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
