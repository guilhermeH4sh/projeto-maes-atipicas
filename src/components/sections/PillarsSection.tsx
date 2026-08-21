import { pillars } from "@/data/pillars";
import Reveal from "@/components/ui/Reveal";

export default function PillarsSection() {
  return (
    <section
      id="pilares"
      className="py-20 sm:py-28 px-4 border-y border-slate-100 bg-white"
      aria-labelledby="pilares-titulo"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.18em]">
            Como ajudamos
          </p>
          <h2
            id="pilares-titulo"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Quatro pilares para aliviar a sobrecarga
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Informação útil, direitos na prática e acolhimento — sem jargão e sem
            pressa.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 list-none p-0 m-0">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.id} as="li" delayMs={index * 60}>
              <div className="flex gap-4">
                <span
                  className={`mt-1.5 h-3 w-3 rounded-full shrink-0 ${pillar.accent}`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className={`text-xl font-bold ${pillar.color}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
