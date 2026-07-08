"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Verificar se o preloader já rodou nesta sessão para evitar irritação no F5
    const hasLoaded = sessionStorage.getItem("preloader-finished");
    if (hasLoaded === "true") {
      setIsVisible(false);
      return;
    }

    // Bloquear scroll do body durante a animação de entrada
    document.body.style.overflow = "hidden";

    const text = textRef.current;
    const container = containerRef.current;
    const border = borderRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        // Reativar a rolagem
        document.body.style.overflow = "";
        sessionStorage.setItem("preloader-finished", "true");
        setIsVisible(false);
      },
    });

    if (text && container && border) {
      // Split do título em letras manuais para efeito escalonado (stagger)
      const characters = text.textContent?.split("") || [];
      text.innerHTML = "";
      characters.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.className = "inline-block opacity-0 translate-y-8 transform font-extrabold";
        text.appendChild(span);
      });

      const spans = text.querySelectorAll("span");

      // Sequência de animação
      tl.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(border, {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.inOut",
      }, "-=0.3")
      .to(text, {
        y: -15,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
        delay: 0.4,
      })
      .to(container, {
        yPercent: -100,
        duration: 0.75,
        ease: "power4.inOut",
      }, "-=0.15");
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-[10000]"
    >
      <div className="flex flex-col items-center gap-3 max-w-md px-6 text-center select-none">
        <h1
          ref={textRef}
          className="text-white text-xl sm:text-2xl font-extrabold tracking-[0.25em] uppercase leading-none"
        >
          Portal Mães Atípicas
        </h1>
        {/* Linha de progresso minimalista */}
        <div
          ref={borderRef}
          className="h-[1px] w-36 bg-brand-blue scale-x-0 origin-center rounded-full"
        />
        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">
          Universidade do Cuidado
        </span>
      </div>
    </div>
  );
}
