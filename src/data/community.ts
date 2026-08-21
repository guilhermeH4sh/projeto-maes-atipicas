export type NoticeType = "urgente" | "informativo" | "evento";

export const notices = [
  {
    id: "n1",
    type: "evento" as NoticeType,
    title: "Roda de Conversa Online: Burnout Materno",
    description:
      "Encontro mensal virtual para troca de experiências entre mães. Link no mural do WhatsApp e no e-mail institucional.",
    date: "Quinta-feira, 20 de Agosto às 19:30",
    badgeClass: "bg-brand-blue",
  },
  {
    id: "n2",
    type: "informativo" as NoticeType,
    title: "Distribuição Gratuita de Abafadores de Ruído",
    description:
      "Campanha com shoppings locais: abafadores infantis e crachás de identificação para ambientes públicos.",
    date: "Campanha vigente em agosto",
    badgeClass: "bg-brand-green",
  },
  {
    id: "n3",
    type: "urgente" as NoticeType,
    title: "Alerta Legislativo: Novas Regras de Isenção de IPVA",
    description:
      "Mães PcD de São Paulo: prazo final para recadastramento de isenção de IPVA na Secretaria da Fazenda.",
    date: "Urgente · Prazo final",
    badgeClass: "bg-brand-red",
  },
] as const;

export const videos = [
  {
    id: "v1",
    title: "Técnicas de Regulação Sensorial e Crises Sensoriais",
    duration: "5 min",
    author: "Juliana Silva · T.O.",
    color: "bg-brand-blue",
    description:
      "Práticas de descompressão, uso de abafadores e brinquedos proprioceptivos para mediar crises em casa e em público.",
  },
  {
    id: "v2",
    title: "Como Solicitar o Mediador Escolar Passo a Passo",
    duration: "8 min",
    author: "Dr. André Santos · Advogado",
    color: "bg-brand-green",
    description:
      "Direitos da LBI sobre mediador na rede pública e particular, sem acréscimo na mensalidade.",
  },
] as const;

export type VideoItem = (typeof videos)[number];
