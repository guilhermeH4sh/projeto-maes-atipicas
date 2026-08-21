import type { ReactNode } from "react";

export interface GuideItem {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  accent: "blue" | "green" | "red" | "yellow";
  content: ReactNode;
}

const accentClasses = {
  blue: "border-brand-blue text-brand-blue bg-blue-50/60",
  green: "border-brand-green text-brand-green bg-green-50/60",
  red: "border-brand-red text-brand-red bg-red-50/60",
  yellow: "border-brand-yellow text-amber-800 bg-yellow-50/60",
} as const;

export function guideAccentClass(accent: GuideItem["accent"]) {
  return accentClasses[accent];
}

export const guides: GuideItem[] = [
  {
    id: "bpc",
    tag: "Direitos & BPC",
    title: "Como funciona o BPC/LOAS para crianças atípicas",
    excerpt:
      "Critérios de renda, laudos e o passo a passo para solicitar o benefício de um salário mínimo.",
    accent: "blue",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-base">
        <p className="font-semibold text-slate-900 text-lg">O que é o BPC/LOAS?</p>
        <p>
          O Benefício de Prestação Continuada (BPC) garante{" "}
          <strong>1 salário mínimo mensal</strong> para pessoas com deficiência —
          incluindo crianças neurodivergentes — sob critérios específicos da LOAS.
        </p>
        <p className="font-semibold text-slate-900 text-lg">Critérios básicos</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Impedimento de longo prazo:</strong> efeitos por pelo menos 2
            anos, comprovados por laudo.
          </li>
          <li>
            <strong>Renda familiar:</strong> até{" "}
            <strong>1/4 do salário mínimo</strong> por pessoa. Gastos com
            terapias e remédios podem ser considerados no cálculo.
          </li>
        </ul>
        <p className="font-semibold text-slate-900 text-lg">Documentos</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>CadÚnico atualizado no CRAS</li>
          <li>Laudo médico com CID (TEA com validade permanente)</li>
          <li>Relatórios de terapeutas</li>
          <li>Comprovantes de gastos com saúde</li>
        </ol>
        <p className="font-semibold text-slate-900 text-lg">Como pedir</p>
        <p>
          Pelo app ou site <strong>Meu INSS</strong>: busque “Benefício Assistencial
          à Pessoa com Deficiência”, anexe os PDFs e agende a perícia.
        </p>
      </div>
    ),
  },
  {
    id: "pei",
    tag: "Educação & Inclusão",
    title: "PEI e adaptação escolar: guia de direitos",
    excerpt:
      "Como exigir o Plano de Ensino Individualizado e o mediador sem taxa extra.",
    accent: "green",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-base">
        <p className="font-semibold text-slate-900 text-lg">O que é o PEI?</p>
        <p>
          Documento pedagógico com adaptações, metas e formas de avaliação para o
          aluno atípico. A escola deve elaborá-lo com a família e os terapeutas.
        </p>
        <p className="font-semibold text-slate-900 text-lg">Direito ao mediador</p>
        <p>
          Pela Lei Berenice Piana e pela LBI, o aluno que precisa de apoio para
          comunicação, alimentação, higiene ou comportamento tem direito a{" "}
          <strong>profissional de apoio</strong> em sala.
        </p>
        <p className="border-l-4 border-amber-500 bg-amber-50 p-3 text-slate-800 font-medium text-sm">
          A escola — pública ou particular — não pode repassar o custo do
          mediador para a família. Isso é discriminação.
        </p>
        <p className="font-semibold text-slate-900 text-lg">Como solicitar</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Pedido por escrito à coordenação ou direção</li>
          <li>Anexe laudo pedindo mediador e adaptações</li>
          <li>Protocolo com cópia datada; prazo de 10 a 15 dias úteis</li>
        </ol>
      </div>
    ),
  },
  {
    id: "saude",
    tag: "Saúde & Terapias",
    title: "Direitos a tratamentos no plano e no SUS",
    excerpt:
      "Cobertura ilimitada de terapias pela ANS e caminhos no SUS quando a fila atrasa.",
    accent: "red",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-base">
        <p className="font-semibold text-slate-900 text-lg">Cobertura ilimitada</p>
        <p>
          Desde 2022, a <strong>ANS</strong> obriga planos a cobrir de forma{" "}
          <strong>ilimitada</strong> psicologia, T.O., fono, fisioterapia e
          psicopedagogia para transtornos do desenvolvimento e neurodiversidades.
        </p>
        <p className="font-semibold text-slate-900 text-lg">ABA e terapias especializadas</p>
        <p>
          Se o médico indicar, o plano não pode limitar ou trocar a abordagem
          prescrita (ABA, integração sensorial, comunicação alternativa etc.).
        </p>
        <p className="font-semibold text-slate-900 text-lg">Se o plano recusar</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Peça a negativa por escrito</li>
          <li>Reclame na ANS</li>
          <li>Em urgência, busque liminar na Justiça</li>
        </ol>
        <p className="font-semibold text-slate-900 text-lg">No SUS</p>
        <p>
          Atendimento em CAPSi ou CER. Com fila longa que atrase o
          desenvolvimento, a Defensoria pode pedir custeio na rede privada.
        </p>
      </div>
    ),
  },
  {
    id: "autocuidado",
    tag: "Saúde Mental Materna",
    title: "Saúde mental: burnout de mães cuidadoras",
    excerpt:
      "Sinais de alerta, micropausas e a importância de uma rede de apoio real.",
    accent: "yellow",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-base">
        <p className="font-semibold text-slate-900 text-lg">Burnout materno</p>
        <p>
          Terapias, escola, crises sensoriais e sono curto elevam o risco de
          esgotamento físico e emocional em quem cuida.
        </p>
        <p className="font-semibold text-slate-900 text-lg">Sinais de alerta</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cansaço que não melhora com o sono</li>
          <li>Irritabilidade, ansiedade ou desesperança</li>
          <li>Dores, imunidade baixa, dificuldade de concentração</li>
        </ul>
        <p className="font-semibold text-slate-900 text-lg">Práticas simples</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Micropausas de 5 minutos sem celular</li>
          <li>Diminuir a autocobrança do “dar conta de tudo”</li>
          <li>Delegar e aceitar ajuda da rede de confiança</li>
          <li>Grupos com outras mães atípicas</li>
        </ul>
        <p className="italic text-brand-blue font-medium">
          “Para cuidar bem de outra pessoa, você precisa cuidar de si.”
        </p>
      </div>
    ),
  },
];
