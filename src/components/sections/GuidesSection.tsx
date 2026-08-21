"use client";

import { useState } from "react";
import { guides, guideAccentClass, type GuideItem } from "@/data/guides";
import Reveal from "@/components/ui/Reveal";
import ContentModal from "@/components/ui/ContentModal";

export default function GuidesSection() {
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);

  return (
    <section
      id="conteudos"
      className="py-20 sm:py-28 px-4 bg-slate-50"
      aria-labelledby="conteudos-titulo"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.18em]">
            Guias práticos
          </p>
          <h2
            id="conteudos-titulo"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Manuais para usar quando precisar
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Abra o guia completo com um toque. Linguagem direta, passos e o que
            levar na mão.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guides.map((guide, index) => (
            <Reveal key={guide.id} delayMs={index * 50}>
              <button
                type="button"
                onClick={() => setActiveGuide(guide)}
                className="w-full text-left bg-white border border-slate-200 hover:border-slate-300 p-6 sm:p-7 rounded-2xl min-h-12 transition-colors"
              >
                <span
                  className={`inline-block px-2.5 py-1 rounded-md text-xs font-extrabold tracking-wider uppercase border mb-3 ${guideAccentClass(guide.accent)}`}
                >
                  {guide.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-950 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {guide.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue mt-5">
                  Ler guia completo
                  <span aria-hidden="true">→</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeGuide && (
        <ContentModal
          title={activeGuide.title}
          labelledById="guia-titulo"
          onClose={() => setActiveGuide(null)}
          eyebrow={
            <span
              className={`inline-block px-2 py-1 rounded-md text-xs font-extrabold tracking-wider uppercase border ${guideAccentClass(activeGuide.accent)}`}
            >
              {activeGuide.tag}
            </span>
          }
        >
          {activeGuide.content}
        </ContentModal>
      )}
    </section>
  );
}
