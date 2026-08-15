"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface GuideItem {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  icon: string;
  colorClass: string; // for border/badge
  bgClass: string;    // for hover background
  content: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface NoticeItem {
  id: string;
  type: "urgente" | "informativo" | "evento";
  title: string;
  description: string;
  date: string;
  badgeColor: string;
}

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  author: string;
  color: string;
  youtubeId?: string;
  description: string;
}

export default function Home() {
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  
  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", type: "sugestao", message: "", anonymous: false });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", type: "sugestao", message: "", anonymous: false });
    }, 600);
  };

  // Full detailed guide contents
  const guides: GuideItem[] = [
    {
      id: "bpc",
      tag: "Direitos & BPC",
      title: "Como Funciona o BPC/LOAS para Crianças Atípicas",
      excerpt: "Entenda os critérios de renda, laudos permanentes e o passo a passo para solicitar o benefício mensal de um salário mínimo sem burocracia.",
      icon: "⚖️",
      colorClass: "border-brand-blue text-brand-blue bg-blue-50/50",
      bgClass: "hover:bg-blue-50/20",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p className="font-semibold text-slate-900 text-lg">O que é o BPC/LOAS?</p>
          <p>
            O Benefício de Prestação Continuada (BPC) é um direito assegurado pela Lei Orgânica da Assistência Social (LOAS). Ele garante o pagamento de <strong>1 salário mínimo mensal</strong> para pessoas com deficiência (PcD), o que inclui crianças e adolescentes neurodivergentes (como autistas, pessoas com TDAH que apresentem limitação funcional de longo prazo, Síndrome de Down, entre outras) sob critérios específicos.
          </p>
          
          <p className="font-semibold text-slate-900 text-lg mt-4">Critérios Básicos de Direito:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Impedimento de Longo Prazo:</strong> Condição com efeitos que obstruam a participação plena na sociedade por pelo menos 2 anos (comprovado por laudo médico).</li>
            <li><strong>Renda Familiar:</strong> A renda mensal por pessoa da família deve ser igual ou inferior a <strong>1/4 do salário mínimo vigente</strong>. Porém, despesas médicas constantes, terapias e medicamentos não fornecidos pelo SUS podem ser deduzidos judicial ou administrativamente para ajustar esse limite.</li>
          </ul>

          <p className="font-semibold text-slate-900 text-lg mt-4">Documentos Cruciais para o Requerimento:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Inscrição no Cadastro Único (CadÚnico):</strong> Deve estar atualizado no CRAS antes de iniciar o processo.</li>
            <li><strong>Laudo Médico Completo:</strong> Com o código CID correspondente, detalhamento das limitações e, graças à nova legislação, o laudo para TEA agora tem validade permanente no Brasil.</li>
            <li><strong>Relatórios de Terapeutas:</strong> Documentos de psicólogos, terapeutas ocupacionais e fonoaudiólogos que evidenciam a necessidade de cuidados constantes.</li>
            <li><strong>Comprovantes de Gastos:</strong> Receitas, notas fiscais de remédios e recibos de terapias particulares.</li>
          </ol>

          <p className="font-semibold text-slate-900 text-lg mt-4">Passo a Passo da Solicitação:</p>
          <p>
            O pedido pode ser feito totalmente online pelo aplicativo ou site <strong>Meu INSS</strong>. Basta buscar pelo serviço &quot;Benefício Assistencial à Pessoa com Deficiência&quot;, preencher as informações solicitadas, anexar todos os documentos em PDF e agendar a perícia médica e social do INSS.
          </p>
        </div>
      )
    },
    {
      id: "pei",
      tag: "Educação & Inclusão",
      title: "PEI e Adaptação Escolar: Guia Legal de Direitos",
      excerpt: "Saiba como exigir por lei o Plano de Ensino Individualizado (PEI) e o mediador escolar especializado custeado integralmente pela instituição de ensino.",
      icon: "📚",
      colorClass: "border-brand-green text-brand-green bg-green-50/50",
      bgClass: "hover:bg-green-50/20",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p className="font-semibold text-slate-900 text-lg">O que é o PEI (Plano de Ensino Individualizado)?</p>
          <p>
            O PEI é um documento dinâmico e pedagógico estruturado para atender às necessidades de aprendizado específicas do aluno atípico. Ele detalha as adaptações curriculares, metas de desenvolvimento social, cognitivo e motor, bem como as metodologias de avaliação personalizadas. As escolas são legalmente obrigadas a elaborá-lo em conjunto com a família e os terapeutas da criança.
          </p>
          
          <p className="font-semibold text-slate-900 text-lg mt-4">O Direito ao Mediador Escolar:</p>
          <p>
            De acordo com a <strong>Lei Berenice Piana (Lei nº 12.764/12)</strong> e a <strong>Lei Brasileira de Inclusão (LBI - Lei nº 13.146/15)</strong>, o aluno com transtorno do espectro autista ou outra deficiência que apresente comprovada necessidade de apoio para comunicação, alimentação, higiene ou comportamento tem o direito a um <strong>profissional de apoio especializado (mediador)</strong> em sala de aula.
          </p>
          <p className="bg-amber-50 border-l-4 border-amber-500 p-3 text-slate-800 font-medium text-xs sm:text-sm my-2">
            ⚠️ Atenção: A escola (seja ela pública ou particular) NÃO pode repassar o custo deste mediador ou de quaisquer adaptações para as mensalidades da família. Fazer isso configura crime de discriminação.
          </p>

          <p className="font-semibold text-slate-900 text-lg mt-4">Como Solicitar na Prática:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Solicite por Escrito:</strong> Elabore um requerimento formal direcionado à coordenação ou direção da escola. Evite combinados puramente verbais.</li>
            <li><strong>Anexe Laudo e Relatório de Terapeutas:</strong> O médico ou terapeuta deve indicar explicitamente no laudo a necessidade do mediador e de adaptações curriculares.</li>
            <li><strong>Protocolo e Prazo:</strong> Entregue o documento na secretaria e exija uma cópia assinada com a data de recebimento. Dê à escola um prazo razoável (geralmente 10 a 15 dias úteis) para responder por escrito.</li>
          </ol>
        </div>
      )
    },
    {
      id: "saude",
      tag: "Saúde & Terapias",
      title: "Direitos a Tratamentos e Terapias no Plano e SUS",
      excerpt: "Conheça as decisões judiciais e regulamentações da ANS que garantem cobertura total e ilimitada para fonoaudiologia, T.O., psicologia e fisioterapia.",
      icon: "🩺",
      colorClass: "border-brand-red text-brand-red bg-red-50/50",
      bgClass: "hover:bg-red-50/20",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p className="font-semibold text-slate-900 text-lg">Direito a Cobertura Ilimitada de Terapias</p>
          <p>
            Desde a histórica decisão da <strong>ANS (Agência Nacional de Saúde Suplementar)</strong> em 2022, os planos de saúde são obrigados a cobrir de forma <strong>ilimitada e sem coparticipação abusiva</strong> as sessões com psicólogos, terapeutas ocupacionais, fonoaudiólogos, fisioterapeutas e psicopedagogos para pacientes com transtornos do desenvolvimento global, autismo e neurodiversidades similares.
          </p>
          
          <p className="font-semibold text-slate-900 text-lg mt-4">O Método ABA e Terapias Especializadas:</p>
          <p>
            Tratamentos baseados em evidências científicas, como a Análise do Comportamento Aplicada (ABA), Terapia de Integração Sensorial, e comunicação alternativa, devem ser cobertos se prescritos pelo médico assistente. O plano de saúde não pode impor limites ou substituir as abordagens terapêuticas recomendadas pelo especialista.
          </p>

          <p className="font-semibold text-slate-900 text-lg mt-4">O que Fazer se o Plano Recusar a Cobertura?</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Exija a Negativa por Escrito:</strong> O plano de saúde tem o dever de fundamentar a recusa formalmente por escrito, contendo o motivo exato.</li>
            <li><strong>Denuncie na ANS:</strong> Abra um protocolo de reclamação na ANS pelo telefone ou site. As operadoras costumam reverter negativas rapidamente sob risco de multas severas.</li>
            <li><strong>Ação com Liminar Judicial:</strong> Se a negativa persistir e houver urgência no início do tratamento para evitar retrocessos no desenvolvimento da criança, a família pode acionar o poder judiciário para obter uma liminar (decisão provisória rápida, geralmente em menos de 48 horas).</li>
          </ol>

          <p className="font-semibold text-slate-900 text-lg mt-4">Acesso às Terapias pelo SUS:</p>
          <p>
            Pelo SUS, o atendimento é oferecido principalmente nos Centros de Atenção Psicossocial Infantil (CAPSi) ou nos Centros Especializados em Reabilitação (CER). Havendo falta de vagas e longas filas que comprometam o desenvolvimento, a defensoria pública pode ser acionada judicialmente para que o Estado custeie as terapias na rede privada.
          </p>
        </div>
      )
    },
    {
      id: "autocuidado",
      tag: "Saúde Mental Materna",
      title: "Saúde Mental: Combate ao Burnout de Mães Cuidadoras",
      excerpt: "Estratégias práticas de descompressão, grupos de apoio acolhedores e a importância do autocuidado de quem carrega a rotina da família atípica.",
      icon: "💚",
      colorClass: "border-brand-yellow text-brand-yellow bg-yellow-50/50",
      bgClass: "hover:bg-yellow-50/20",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p className="font-semibold text-slate-900 text-lg">O Burnout Materno na Jornada Atípica</p>
          <p>
            Cuidar de uma criança com demandas atípicas envolve uma carga física, emocional e mental extremamente elevada. Lidar com terapias diárias, burocracias escolares, crises sensoriais frequentes e a falta de sono crônica coloca as mães e cuidadoras em risco iminente de <strong>Burnout Materno</strong> (síndrome do esgotamento físico e mental extremo).
          </p>
          
          <p className="font-semibold text-slate-900 text-lg mt-4">Identificando os Sinais de Alerta:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cansaço extremo que não melhora mesmo após dormir.</li>
            <li>Sensação de irritabilidade constante, ansiedade ou desesperança.</li>
            <li>Problemas físicos frequentes (dores musculares, dores de cabeça, imunidade baixa).</li>
            <li>Dificuldade de concentração e distanciamento emocional das pessoas queridas.</li>
          </ul>

          <p className="font-semibold text-slate-900 text-lg mt-4">Práticas Simples de Autocuidado para Incorporar na Rotina:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Micropausas de Descompressão:</strong> Dedique 5 minutos do seu dia para sentar em silêncio, respirar profundamente ou ouvir sua música favorita, sem celular.</li>
            <li><strong>Redefina Prioridades:</strong> Entenda que você não precisa dar conta de tudo perfeitamente. Diminua a autocobrança e priorize o que realmente importa.</li>
            <li><strong>Rede de Apoio Ativa:</strong> Delegue tarefas sempre que possível. Aceite ajuda de familiares, amigos ou vizinhos de confiança para ter momentos de descanso individual.</li>
            <li><strong>Grupos de Apoio Emocional:</strong> Conversar com outras mães atípicas traz alívio imediato, pois você fala com pessoas que de fato compreendem os desafios do seu cotidiano, sem julgamentos.</li>
          </ul>
          <p className="font-semibold text-slate-900 text-lg mt-4">Lembre-se Sempre:</p>
          <p className="italic text-brand-blue font-medium">
            &quot;Para cuidar bem de outra pessoa com excelência, você precisa primeiro cuidar da sua própria saúde mental e física.&quot;
          </p>
        </div>
      )
    }
  ];

  const notices: NoticeItem[] = [
    {
      id: "n1",
      type: "evento",
      title: "Roda de Conversa Online: Burnout Materno",
      description: "Encontro mensal virtual para troca de experiências e acolhimento mútuo entre mães. Link de acesso no mural do WhatsApp e e-mail institucional.",
      date: "Quinta-feira, 20 de Agosto às 19:30",
      badgeColor: "bg-blue-500"
    },
    {
      id: "n2",
      type: "informativo",
      title: "Distribuição Gratuita de Abafadores de Ruído",
      description: "Campanha em parceria com shoppings locais para distribuição de abafadores de ruído infantis e crachás de identificação para uso em ambientes públicos.",
      date: "Campanha Vigente em Agosto",
      badgeColor: "bg-green-500"
    },
    {
      id: "n3",
      type: "urgente",
      title: "Alerta Legislativo: Novas Regras de Isenção de IPVA",
      description: "Atenção mães PcD de São Paulo: prazo final para recadastramento de isenção de IPVA no sistema da Secretaria da Fazenda se encerra este mês.",
      date: "Urgente · Prazo Final",
      badgeColor: "bg-red-500"
    }
  ];

  const videos: VideoItem[] = [
    {
      id: "v1",
      title: "Técnicas de Regulação Sensorial e Crises Sensoriais",
      duration: "5 min",
      author: "Juliana Silva · T.O.",
      color: "bg-brand-blue",
      youtubeId: "dQw4w9WgXcQ", // Placeholder video logic
      description: "Vídeo educativo que demonstra práticas de descompressão, uso de abafadores e brinquedos proprioceptivos para mediar crises sensoriais em casa e em ambientes públicos."
    },
    {
      id: "v2",
      title: "Como Solicitar o Mediador Escolar Passo a Passo",
      duration: "8 min",
      author: "Dr. André Santos · Advogado",
      color: "bg-brand-green",
      youtubeId: "dQw4w9WgXcQ",
      description: "Explicação em vídeo dos seus direitos legais garantidos pela LBI sobre o mediador escolar na rede pública e particular sem acréscimo na mensalidade."
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Qual o primeiro passo ao suspeitar de desenvolvimento atípico do meu filho?",
      answer: "O primeiro passo é consultar um neuropediatra ou pediatra especialista em desenvolvimento. Anote comportamentos que chamam atenção e leve relatos da escola, se houver. O diagnóstico precoce é fundamental, mas o tratamento terapêutico pode e deve começar mesmo antes do laudo final estar pronto se houver atrasos evidentes."
    },
    {
      question: "A escola particular pode cobrar taxa extra para disponibilizar o mediador?",
      answer: "Absolutamente não. A Lei Brasileira de Inclusão (LBI) proíbe expressamente a cobrança de valores adicionais em mensalidades, matrículas ou taxas de qualquer natureza para o fornecimento de profissionais de apoio escolar ou adaptações de materiais pedagógicos."
    },
    {
      question: "O laudo médico que comprova autismo (TEA) expira no Brasil?",
      answer: "Não mais. Conforme a legislação federal atual (Lei nº 14.624/2023), o laudo que ateste o Transtorno do Espectro Autista (TEA) passou a ter validade indeterminada (permanente) em todo o território nacional, não sendo mais necessária a renovação anual para acesso a serviços públicos ou privados."
    },
    {
      question: "Quem tem direito ao BPC (LOAS) e qual o critério de renda?",
      answer: "Tem direito a pessoa com deficiência de qualquer idade que comprove impedimento de longo prazo (mínimo de 2 anos) e cuja família possua renda mensal por pessoa igual ou inferior a 1/4 do salário mínimo. Vale lembrar que gastos comprovados com remédios, fraldas e terapias de saúde podem ser deduzidos desse cálculo."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800 selection:bg-brand-blue/20">
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION (Estilo Nuvemshop - Clean, Acolhedor, Visual) */}
        <section 
          id="inicio"
          data-animate="hero-showcase" 
          className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50/40 via-white to-pink-50/20"
        >
          {/* Grafismos de Fundo Orgânicos */}
          <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
            {/* Texto Hero */}
            <div className="lg:col-span-7 flex flex-col text-left justify-center lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 w-fit mb-5">
                <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                  Comunidade de Acolhimento
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
                Você não está sozinha na jornada atípica.
              </h1>
              
              <p className="text-slate-650 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                Um espaço seguro criado para apoiar quem cuida. Tenha orientação descomplicada sobre leis, direitos, educação inclusiva e saúde mental materna.
              </p>

              {/* Botões de Ação Dinâmicos */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#conteudos"
                  data-animate="magnet"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("conteudos")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center"
                >
                  Conhecer Seus Direitos
                </a>
                
                <a
                  href="#contato"
                  data-animate="magnet"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full bg-white border border-slate-200 hover:border-slate-350 text-slate-800 px-8 py-4 text-sm font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center hover:bg-slate-50"
                >
                  Falar Conosco
                </a>
              </div>

              {/* Estatísticas Rápidas */}
              <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8 mt-12 max-w-lg">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">100%</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Gratuito e Inclusivo</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">4</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Guias Práticos Completos</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">24h</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Informações Disponíveis</p>
                </div>
              </div>
            </div>

            {/* Imagem Hero Frame Visual Premium */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div 
                data-animate="hero-media" 
                className="w-[300px] h-[380px] sm:w-[380px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-xl relative border-8 border-white bg-slate-100"
              >
                <Image
                  src="/images/hero-mother-child.png"
                  alt="Mãe e filho abraçados com carinho"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
              </div>

              {/* Elementos decorativos suspensos (cards) */}
              <div 
                data-animate="magnet" 
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-white/50 flex items-center gap-3 text-left max-w-[210px]"
              >
                <span className="text-2xl">⚖️</span>
                <div>
                  <h3 className="text-xs font-bold text-slate-950 leading-tight">Laudo Permanente</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">TEA agora tem validade indeterminada.</p>
                </div>
              </div>

              <div 
                data-animate="magnet" 
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-white/50 flex items-center gap-3 text-left max-w-[210px]"
              >
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="text-xs font-bold text-slate-950 leading-tight">Mediação Escolar</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Seu filho tem direito a mediador sem taxa extra.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PILARES DE APOIO SECTION */}
        <section 
          id="pilares" 
          className="py-24 px-4 bg-white border-y border-slate-100"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.25em]">Nossos Fundamentos</span>
              <h2 data-animate="text-reveal" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Como apoiamos famílias atípicas
              </h2>
              <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
                Acreditamos na união entre informação de qualidade, suporte jurídico simplificado e acolhimento empático para reduzir a sobrecarga de quem cuida.
              </p>
            </div>

            <div data-animate="stagger-cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left hover-lift flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100/50 flex items-center justify-center text-xl mb-6 text-brand-blue">
                    💙
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">Acolhimento</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Espaço dedicado à escuta e à saúde mental de mães e cuidadores, com rodas de conversa e suporte empático.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left hover-lift flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-100/50 flex items-center justify-center text-xl mb-6 text-brand-red">
                    ❤️
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">Cidadania</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conhecimento prático das leis (BPC, IPVA, LBI) para garantir que seus direitos e os do seu filho sejam respeitados.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left hover-lift flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100/50 flex items-center justify-center text-xl mb-6 text-brand-yellow-hover">
                    💛
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">Educação</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Orientação sobre adaptação curricular (PEI) e suporte técnico pedagógico para lidar com o ambiente escolar.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left hover-lift flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-green-100/50 flex items-center justify-center text-xl mb-6 text-brand-green">
                    💚
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">Saúde</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Informação científica qualificada sobre seletividade alimentar, regulação sensorial e terapias do desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. VITRINE DE CONTEÚDO SECTION (Estilo Nuvemshop Catalog) */}
        <section id="conteudos" className="py-24 px-4 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.25em]">Guias de Orientação</span>
              <h2 data-animate="text-reveal" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Nossos Manuais e Guias Práticos
              </h2>
              <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
                Explore cartilhas completas de informações para capacitar você na busca ativa pelos direitos e saúde da sua família. Clique para abrir os guias completos.
              </p>
            </div>

            {/* Vitrine Grid */}
            <div data-animate="stagger-cards" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide) => (
                <div
                  key={guide.id}
                  data-animate="tilt"
                  className={`bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm flex flex-col justify-between transition-all duration-300 ${guide.bgClass} hover:shadow-md cursor-pointer`}
                  onClick={() => setActiveGuide(guide)}
                >
                  <div className="flex items-start gap-4">
                    <span className="p-3.5 bg-slate-50 rounded-2xl text-3xl shadow-sm border border-slate-100 shrink-0">
                      {guide.icon}
                    </span>
                    <div className="text-left">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider uppercase border mb-3 ${guide.colorClass}`}>
                        {guide.tag}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950 mb-2 leading-tight group-hover:text-brand-blue">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-slate-550 leading-relaxed">
                        {guide.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-blue mt-6 pt-4 border-t border-slate-100/60 w-full text-left">
                    <span>Ler Guia Completo</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MURAL DE AVISOS & TV MÃES ATÍPICAS (Dashboard Community) */}
        <section id="mural" className="py-24 px-4 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              
              {/* Coluna 1: Mural de Avisos (8/12) */}
              <div className="lg:col-span-8 flex flex-col gap-8 text-left">
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">Mural</span>
                  <h2 data-animate="text-reveal" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Informativos da Comunidade
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {notices.map((notice) => (
                    <div 
                      key={notice.id}
                      data-animate="fade-up"
                      className="bg-slate-50 rounded-3xl p-6 border border-slate-150 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:bg-slate-100/60 transition-colors"
                    >
                      <span className={`px-3 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-wider ${notice.badgeColor} shrink-0`}>
                        {notice.type}
                      </span>
                      <div className="flex-grow">
                        <h4 className="font-extrabold text-slate-950 text-sm leading-snug">{notice.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{notice.description}</p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold italic shrink-0">
                        {notice.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna 2: TV Mães Atípicas (4/12) */}
              <div className="lg:col-span-4 flex flex-col gap-8 text-left">
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest block mb-1">Vídeos</span>
                  <h3 data-animate="text-reveal" className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    TV Mães Atípicas
                  </h3>
                </div>

                <div className="flex flex-col gap-6">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      data-animate="tilt"
                      className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md cursor-pointer flex flex-col gap-3 transition-all duration-300"
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="w-full h-36 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                        {/* Play button */}
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg group-hover:scale-115 transition-transform z-20">
                          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className={`absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold text-white rounded-full ${video.color} z-20`}>
                          Assista · {video.duration}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-950 text-sm leading-snug hover:text-brand-blue">
                          {video.title}
                        </h4>
                        <span className="text-[9px] text-slate-400 font-bold uppercase mt-1 block">
                          {video.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. DÚVIDAS FREQUENTES (FAQ) ACCORDION */}
        <section id="faq" className="py-24 px-4 bg-slate-50">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.25em]">FAQ</span>
              <h2 data-animate="text-reveal" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-slate-500 mt-4 text-sm sm:text-base">
                Esclareça rapidamente as principais dúvidas recorrentes na rotina de cuidados das famílias atípicas.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div
                    key={index}
                    data-animate="fade-up"
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left py-5 px-6 flex items-center justify-between font-bold text-slate-900 hover:text-brand-blue focus:outline-none transition-colors gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      <span className={`text-xl transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45 text-brand-blue" : "rotate-0 text-slate-400"}`}>
                        ＋
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 text-slate-650 text-xs sm:text-sm leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. OUVIDORIA / CONTATO FORM */}
        <section id="contato" className="py-24 px-4 bg-white">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-brand-red uppercase tracking-[0.25em]">Ouvidoria & Contato</span>
              <h2 data-animate="text-reveal" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Fale Conosco e Envie Sugestões
              </h2>
              <p className="text-slate-500 mt-4 text-sm sm:text-base">
                Use este formulário para enviar dúvidas, sugestões de pauta para a biblioteca ou reclamações para a ouvidoria. Nós garantimos o sigilo de todas as mensagens.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center animate-fade-in max-w-lg mx-auto">
                <span className="text-5xl block mb-4">💌</span>
                <h3 className="text-xl font-extrabold text-green-950 mb-2">Mensagem Enviada!</h3>
                <p className="text-sm text-green-800 leading-relaxed mb-6">
                  Sua sugestão ou contato foi registrado em nosso sistema. Agradecemos o carinho e a contribuição para tornar o Portal Mães Atípicas um local ainda mais útil.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-xs shadow-sm transition-all cursor-pointer"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleFormSubmit}
                data-animate="fade-up"
                className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-150 text-left shadow-sm flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Seu Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      disabled={formData.anonymous}
                      placeholder={formData.anonymous ? "Identidade oculta" : "Digite seu nome completo"}
                      value={formData.anonymous ? "" : formData.name}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-sm text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 disabled:bg-slate-100 disabled:text-slate-400"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Seu E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      disabled={formData.anonymous}
                      placeholder={formData.anonymous ? "Identidade oculta" : "Digite seu e-mail de contato"}
                      value={formData.anonymous ? "" : formData.email}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-sm text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 disabled:bg-slate-100 disabled:text-slate-400"
                    />
                  </div>
                </div>

                {/* Anonymous Checkbox */}
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 w-fit">
                  <input
                    id="anonymous"
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-brand-blue border-slate-300 rounded focus:ring-brand-blue/20 cursor-pointer"
                  />
                  <label htmlFor="anonymous" className="text-xs font-bold text-slate-800 cursor-pointer select-none">
                    Desejo enviar minha mensagem de forma anônima
                  </label>
                </div>

                {/* Request Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Assunto do Contato
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-sm text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 cursor-pointer"
                  >
                    <option value="sugestao">Sugestão de Artigo / Tema</option>
                    <option value="duvida">Dúvida sobre Leis / Direitos</option>
                    <option value="ouvidoria">Ouvidoria (Reclamação ou Denúncia)</option>
                    <option value="outro">Outros Assuntos</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Mensagem ou Relato
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Digite os detalhes da sua mensagem de apoio, dúvida ou denúncia da ouvidoria..."
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-sm text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  data-animate="magnet"
                  className="w-full text-center py-4 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm transition-all cursor-pointer mt-4"
                >
                  Enviar Mensagem com Segurança
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* --- MODAL DETALHE DOS GUIAS (100% VISUAL E ACESSÍVEL) --- */}
      {activeGuide && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col border border-white/40 shadow-2xl relative">
            
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3 text-left">
                <span className="text-2xl">{activeGuide.icon}</span>
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[8px] font-extrabold tracking-wider uppercase border ${activeGuide.colorClass}`}>
                    {activeGuide.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mt-1 leading-snug">
                    {activeGuide.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveGuide(null)}
                className="w-8 h-8 rounded-full bg-slate-200/50 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer shrink-0 ml-4 focus:outline-none"
                aria-label="Fechar Guia"
              >
                ✕
              </button>
            </div>

            {/* Content Modal */}
            <div className="p-6 sm:p-8 overflow-y-auto text-left flex-grow">
              {activeGuide.content}
            </div>

            {/* Footer Modal */}
            <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/50">
              <button
                onClick={() => setActiveGuide(null)}
                className="px-6 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer focus:outline-none"
              >
                Fechar Leitura
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL DA TV MÃES ATÍPICAS (VIDEO PLAYER SIMULATOR) --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-white/40 shadow-2xl relative">
            
            {/* Header Modal */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="text-left">
                <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest block mb-0.5">TV Mães Atípicas</span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-950 leading-snug">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-200/50 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer shrink-0 ml-4 focus:outline-none"
                aria-label="Fechar Vídeo"
              >
                ✕
              </button>
            </div>

            {/* Content Video Modal */}
            <div className="p-6 flex flex-col gap-4 text-left">
              {/* Simulator video wrapper */}
              <div className="w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden flex flex-col items-center justify-center relative shadow-inner">
                {/* Simulated playback interface */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60 text-white">
                  <span className="text-xs font-bold bg-brand-red px-2 py-0.5 rounded-full w-fit">
                    Modo de Aula
                  </span>
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 bg-white/20 hover:bg-white/35 backdrop-blur-md rounded-full flex items-center justify-center transition-all cursor-pointer">
                      ⏸
                    </button>
                    <div className="flex-grow bg-white/25 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-red h-full w-[45%]" />
                    </div>
                    <span className="text-xs font-semibold select-none">
                      {activeVideo.duration}
                    </span>
                  </div>
                </div>
                <span className="text-5xl animate-pulse">🎬</span>
                <p className="text-xs text-white/50 mt-4 select-none font-medium">Transmitindo conteúdo educativo oficial...</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">Autor: {activeVideo.author}</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeVideo.description}
                </p>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/50">
              <button
                onClick={() => setActiveVideo(null)}
                className="px-6 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer focus:outline-none"
              >
                Fechar Vídeo
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
