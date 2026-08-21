"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Reveal from "@/components/ui/Reveal";

type FormState = {
  name: string;
  email: string;
  type: string;
  message: string;
  anonymous: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  type: "sugestao",
  message: "",
  anonymous: false,
};

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState<FormState>(initialForm);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, anonymous: e.target.checked }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.message.trim()) {
      setFormError("Escreva a sua mensagem ou relato para enviar.");
      return;
    }

    if (!formData.anonymous && !formData.email.trim()) {
      setFormError("Informe um e-mail para resposta ou marque o envio anônimo.");
      return;
    }

    window.setTimeout(() => {
      setFormSubmitted(true);
      setFormData(initialForm);
    }, 300);
  };

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 px-4 bg-white"
      aria-labelledby="contato-titulo"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center mb-12">
          <p className="text-xs font-bold text-brand-red uppercase tracking-[0.18em]">
            Ouvidoria & contato
          </p>
          <h2
            id="contato-titulo"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Fale conosco
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Dúvidas, sugestões ou relatos. Tudo tratado com sigilo.
          </p>
        </Reveal>

        {formSubmitted ? (
          <div className="border border-green-200 bg-green-50 rounded-2xl p-8 text-center max-w-lg mx-auto">
            <h3 className="text-xl font-extrabold text-green-950 mb-2">
              Mensagem registrada
            </h3>
            <p className="text-sm text-green-800 leading-relaxed mb-6">
              Obrigada por contribuir. Vamos ler com atenção.
            </p>
            <button
              type="button"
              onClick={() => setFormSubmitted(false)}
              className="px-6 min-h-12 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl text-sm"
            >
              Enviar nova mensagem
            </button>
          </div>
        ) : (
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 bg-slate-50/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-800">
                    Seu nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    disabled={formData.anonymous}
                    placeholder={
                      formData.anonymous ? "Identidade oculta" : "Nome completo"
                    }
                    value={formData.anonymous ? "" : formData.name}
                    onChange={handleChange}
                    className="w-full min-h-12 rounded-xl border border-slate-300 bg-white py-3 px-4 text-base text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 disabled:bg-slate-100 disabled:text-slate-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-800">
                    Seu e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    disabled={formData.anonymous}
                    placeholder={
                      formData.anonymous ? "Identidade oculta" : "E-mail de contato"
                    }
                    value={formData.anonymous ? "" : formData.email}
                    onChange={handleChange}
                    className="w-full min-h-12 rounded-xl border border-slate-300 bg-white py-3 px-4 text-base text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 disabled:bg-slate-100 disabled:text-slate-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 w-fit min-h-12">
                <input
                  id="anonymous"
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleCheckbox}
                  className="w-5 h-5 text-brand-blue border-slate-300 rounded focus:ring-brand-blue/20"
                />
                <label
                  htmlFor="anonymous"
                  className="text-sm font-bold text-slate-800 cursor-pointer select-none"
                >
                  Enviar de forma anônima
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-sm font-bold text-slate-800">
                  Assunto
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full min-h-12 rounded-xl border border-slate-300 bg-white py-3 px-4 text-base text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  <option value="sugestao">Sugestão de artigo / tema</option>
                  <option value="duvida">Dúvida sobre leis / direitos</option>
                  <option value="ouvidoria">Ouvidoria</option>
                  <option value="outro">Outros assuntos</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-800">
                  Mensagem ou relato
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  aria-invalid={formError ? true : undefined}
                  aria-describedby={formError ? "form-error" : undefined}
                  placeholder="Escreva sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-base text-slate-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>

              {formError && (
                <p id="form-error" role="alert" className="text-sm font-semibold text-brand-red">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="w-full min-h-12 rounded-xl text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-hover"
              >
                Enviar com segurança
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
