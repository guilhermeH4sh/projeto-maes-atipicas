import React from "react";
import Link from "next/link";
import Logo from "./icons/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-350 border-t-4 border-brand-blue pt-16 pb-12 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid Superior */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 border-b border-slate-800 pb-12">
          
          {/* Identidade */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo size={40} className="bg-white p-1 rounded-lg shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">Portal Mães Atípicas</span>
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest -mt-0.5">Universidade do Cuidado</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              O Portal Oficial de Informação, Acolhimento e Orientação para famílias que vivenciam a neurodiversidade e o desenvolvimento infantil atípico.
            </p>
          </div>

          {/* Coluna 1: Institucional */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-brand-blue pl-2">
              Institucional
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/sobre" className="hover:text-white hover:underline transition-all">
                  Quem Somos e Missão
                </Link>
              </li>
              <li>
                <Link href="/sobre#comite" className="hover:text-white hover:underline transition-all">
                  Comitê Multidisciplinar
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white hover:underline transition-all">
                  Carta de Serviços à Comunidade
                </Link>
              </li>
              <li>
                <Link href="/sobre#transparencia" className="hover:text-white hover:underline transition-all">
                  Portal de Transparência
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Canais Digitais */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-brand-green pl-2">
              Serviços e Conteúdos
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/biblioteca" className="hover:text-white hover:underline transition-all">
                  Biblioteca Digital de Materiais
                </Link>
              </li>
              <li>
                <Link href="/direitos" className="hover:text-white hover:underline transition-all">
                  Legislação, Direitos e BPC
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="hover:text-white hover:underline transition-all">
                  Assistente de Apoio IA
                </Link>
              </li>
              <li>
                <Link href="/biblioteca?categoria=videos" className="hover:text-white hover:underline transition-all">
                  TV Mães Atípicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Transparência e Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-brand-red pl-2">
              Segurança e Fale Conosco
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/contato#ouvidoria" className="hover:text-white hover:underline transition-all font-semibold text-brand-red">
                  Ouvidoria do Portal
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white hover:underline transition-all">
                  Fale com o Portal
                </Link>
              </li>
              <li>
                <Link href="/direitos#privacidade" className="hover:text-white hover:underline transition-all">
                  Encarregado de Dados (DPO)
                </Link>
              </li>
              <li>
                <Link href="/direitos#termos" className="hover:text-white hover:underline transition-all">
                  Termos e Políticas de Uso
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Informações de Compliance e LGPD */}
          <div className="flex flex-col gap-1 text-left max-w-xl">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              O Portal Mães Atípicas segue as diretrizes da Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018. Todos os dados coletados para as simulações de suporte da assistente virtual e biblioteca são anonimizados e tratados sob sigilo de segurança.
            </p>
            <p className="text-[11px] text-slate-500">
              Certificações de Acessibilidade: Em conformidade com o e-MAG (Modelo de Acessibilidade em Governo Eletrônico).
            </p>
          </div>

          {/* Selos de Acessibilidade e Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-500">
            <div className="flex gap-3 text-slate-400 font-bold">
              <span className="border border-slate-700 rounded px-1.5 py-0.5 select-none bg-slate-800 text-[10px]">WCAG 2.1 AA</span>
              <span className="border border-slate-700 rounded px-1.5 py-0.5 select-none bg-slate-800 text-[10px]">e-MAG</span>
            </div>
            <p className="mt-1 text-center md:text-right">
              © {new Date().getFullYear()} Portal Mães Atípicas · Desenvolvido com amor para famílias neurodiversas.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
