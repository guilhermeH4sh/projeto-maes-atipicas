const HELPLINES = [
  {
    name: "CVV",
    number: "188",
    href: "tel:188",
    detail: "Apoio emocional 24 horas, sigiloso e gratuito",
    color: "border-brand-blue bg-blue-50",
  },
  {
    name: "Disque 100",
    number: "100",
    href: "tel:100",
    detail: "Denúncias de violação de direitos humanos",
    color: "border-brand-red bg-red-50",
  },
  {
    name: "SAMU",
    number: "192",
    href: "tel:192",
    detail: "Emergência médica",
    color: "border-brand-green bg-green-50",
  },
];

export default function EmergencyHelp() {
  return (
    <section
      id="ajuda"
      className="py-16 sm:py-20 px-4 bg-slate-900 text-white"
      aria-labelledby="ajuda-titulo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold text-brand-yellow uppercase tracking-[0.18em]">
            Precisa de ajuda agora
          </p>
          <h2
            id="ajuda-titulo"
            className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight"
          >
            Você não precisa esperar. Ligue.
          </h2>
          <p className="text-slate-300 mt-4 text-base leading-relaxed">
            Canais oficiais que funcionam agora. Não substituem atendimento
            médico, mas são um primeiro passo seguro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {HELPLINES.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className={`rounded-2xl border-2 p-5 min-h-24 flex flex-col justify-between text-slate-900 ${item.color}`}
            >
              <span className="text-sm font-bold uppercase tracking-wide">
                {item.name}
              </span>
              <span className="text-4xl font-black tracking-tight mt-2">
                {item.number}
              </span>
              <span className="text-sm text-slate-700 mt-3 leading-relaxed">
                {item.detail}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
