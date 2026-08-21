import Logo from "@/components/icons/Logo";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-end overflow-hidden"
      aria-labelledby="hero-brand"
    >
      {/* Plano visual full-bleed */}
      <div className="absolute inset-0 hero-atmosphere" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-90"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(30,136,229,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 70%, rgba(67,160,71,0.14), transparent 50%), radial-gradient(ellipse 40% 35% at 85% 85%, rgba(229,57,53,0.10), transparent 45%), radial-gradient(ellipse 35% 30% at 20% 20%, rgba(253,216,53,0.16), transparent 40%)",
        }}
      />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <Logo size={72} className="hero-logo-enter" />
            <p
              id="hero-brand"
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] hero-copy-enter"
            >
              Mães Atípicas
            </p>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-snug mb-5 hero-copy-enter hero-copy-delay-1">
            Você não está sozinha na jornada atípica.
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 hero-copy-enter hero-copy-delay-2">
            Orientação clara sobre direitos, escola inclusiva e saúde mental —
            feita para quem cuida sob pressão.
          </p>

          <div className="flex flex-wrap gap-3 hero-copy-enter hero-copy-delay-3">
            <a
              href="#conteudos"
              className="inline-flex items-center justify-center rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white px-7 min-h-12 text-base font-bold"
            >
              Conhecer seus direitos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl bg-white/90 border border-slate-200 hover:border-slate-300 text-slate-800 px-7 min-h-12 text-base font-bold"
            >
              Falar conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
