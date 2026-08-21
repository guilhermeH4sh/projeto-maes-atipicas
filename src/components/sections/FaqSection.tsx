"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import Reveal from "@/components/ui/Reveal";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-4 bg-slate-50"
      aria-labelledby="faq-titulo"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center mb-12">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.18em]">
            FAQ
          </p>
          <h2
            id="faq-titulo"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Perguntas frequentes
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Respostas curtas para as dúvidas que mais aparecem no dia a dia.
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delayMs={index * 40}>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-resposta-${index}`}
                    className="w-full text-left py-4 px-5 min-h-14 flex items-center justify-between font-bold text-slate-900 gap-4"
                  >
                    <span className="text-base">{faq.question}</span>
                    <span
                      className={`text-xl shrink-0 text-slate-400 ${isOpen ? "text-brand-blue" : ""}`}
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-resposta-${index}`}
                      className="px-5 pb-5 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
