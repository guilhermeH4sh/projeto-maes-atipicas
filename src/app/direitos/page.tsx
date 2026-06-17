import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Direitos() {
  const stepsBpc = [
    { num: "1", title: "Inscrição no CadÚnico", text: "Vá ao CRAS (Centro de Referência de Assistência Social) do seu município e inscreva a família no Cadastro Único para Programas Sociais. Mantenha os dados atualizados." },
    { num: "2", title: "Laudo Médico Detalhado", text: "Solicite ao neuropediatra ou psiquiatra infantil do seu filho um laudo com o diagnóstico legível, o código CID correspondente e detalhando os limites de independência da criança." },
    { num: "3", title: "Solicitação no INSS", text: "Abra o aplicativo ou site 'Meu INSS', faça login com a conta Gov.br, selecione 'Novo Pedido', pesquise por 'Benefício Assistencial' e anexe a documentação." },
    { num: "4", title: "Perícia Médica e Social", text: "Acompanhe o agendamento da perícia médica e social do INSS. Compareça com a criança e leve todos os laudos, relatórios escolares e comprovantes de gastos." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Breadcrumb */}
          <nav className="flex text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6" aria-label="Caminho de navegação">
            <Link href="/" className="hover:text-brand-blue">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">Direitos & Leis</span>
          </nav>

          {/* Cabeçalho */}
          <div className="border-b border-slate-200 pb-6 mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Legislação e Direitos das Famílias Atípicas
            </h1>
            <p className="text-base text-slate-650 mt-3 leading-relaxed">
              O amparo jurídico traduzido em etapas simples. Conheça as leis federais que garantem assistência financeira, saúde e inclusão educacional para o seu filho.
            </p>
          </div>

          {/* 1. BPC / LOAS */}
          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12 flex flex-col gap-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="inline-flex items-center rounded-full bg-brand-yellow/20 px-3 py-1 text-xs font-bold text-yellow-700">Benefício Federal</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">BPC — Benefício de Prestação Continuada (LOAS)</h2>
              <p className="text-xs text-slate-500 mt-1">
                Garante o pagamento mensal de um salário mínimo para pessoas com deficiência sob critérios de renda familiar.
              </p>
            </div>

            <div className="text-sm text-slate-600 space-y-4">
              <p>
                O BPC é um benefício da assistência social pago pelo Governo Federal. Crianças com Autismo, Síndrome de Down, paralisia cerebral e outras deficiências intelectuais/motoras têm direito, desde que a renda mensal por pessoa da família seja inferior a 1/4 do salário mínimo (cerca de R$ 353 por pessoa em 2026).
              </p>
              <p className="font-semibold text-slate-800">
                Como solicitar em 4 passos práticos:
              </p>
            </div>

            {/* Linha do tempo simples */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-2">
              {stepsBpc.map((step) => (
                <div key={step.num} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-150">
                  <span className="h-8 w-8 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-yellow-700 shrink-0 select-none">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm leading-none">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Direitos de Saúde e Terapias */}
          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12 flex flex-col gap-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="inline-flex items-center rounded-full bg-brand-green/15 px-3 py-1 text-xs font-bold text-brand-green">Saúde</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">Terapias Multidisciplinares pelo SUS e Convênios</h2>
              <p className="text-xs text-slate-500 mt-1">
                Sua operadora de saúde e o Estado são obrigados a fornecer tratamento médico e terapêutico ilimitado.
              </p>
            </div>

            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              <p>
                De acordo com as resoluções vigentes da Agência Nacional de Saúde Suplementar (ANS), as operadoras de planos de saúde são **obrigadas** a dar cobertura ilimitada para sessões de fonoaudiologia, terapia ocupacional (com integração sensorial), psicologia e fisioterapia para pacientes com transtornos do desenvolvimento global.
              </p>
              <p>
                O método terapêutico prescrito pelo médico (como a Análise do Comportamento Aplicada - ABA) deve ser respeitado pelo plano. Caso não haja profissional credenciado na sua cidade, o convênio é obrigado a reembolsar as despesas particulares de forma integral ou disponibilizar transporte para outra localidade.
              </p>
            </div>
          </section>

          {/* 3. Lei Berenice Piana e Inclusão Escolar */}
          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12 flex flex-col gap-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="inline-flex items-center rounded-full bg-brand-blue/15 px-3 py-1 text-xs font-bold text-brand-blue">Educação</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">Lei Berenice Piana e o Mediador Escolar</h2>
              <p className="text-xs text-slate-500 mt-1">
                A Lei nº 12.764/12 garante que a pessoa autista é considerada PcD para todos os fins de direito escolar.
              </p>
            </div>

            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              <p>
                A legislação brasileira proíbe qualquer escola de cobrar taxa extra de matrícula ou mensalidade para alunos atípicos. O estabelecimento de ensino é obrigado a:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>Fornecer **profissional de apoio escolar (mediador)** em sala de aula se comprovada a necessidade (sem ônus à família).</li>
                <li>Montar o **Plano de Desenvolvimento Individual (PEI)**, ajustando a didática e os critérios de avaliações às capacidades do aluno.</li>
                <li>Garantir a inclusão e combater ativamente o bullying no ambiente educacional.</li>
              </ul>
            </div>
          </section>

          {/* 4. Política de Privacidade e LGPD */}
          <section id="privacidade" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col gap-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="inline-flex items-center rounded-full bg-brand-red/15 px-3 py-1 text-xs font-bold text-brand-red">Segurança de Dados</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">Política de Privacidade & Conformidade com a LGPD</h2>
              <p className="text-xs text-slate-500 mt-1">
                Transparência absoluta no tratamento de informações de saúde de famílias e menores.
              </p>
            </div>

            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              <p>
                Para nós, a sua segurança é prioritária. O Portal Mães Atípicas trata dados sensíveis pessoais e de saúde infantil com criptografia rigorosa, alinhado à Lei Geral de Proteção de Dados (Lei Federal nº 13.709/18).
              </p>
              <p>
                <strong>Minimização de Dados:</strong> Solicitamos apenas as informações estritamente necessárias para prestar orientações no chatbot e na biblioteca. Você possui o direito de consultar seus dados armazenados e requisitar a exclusão definitiva a qualquer momento através da nossa Ouvidoria.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
