"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initAnimations } from "@/lib/animations";

// Registrar ScrollTrigger no GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Verificar preferência do sistema operacional para redução de movimento
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Se preferir redução de movimento, inicializa as animações de forma simples, sem smooth scroll
      const animCtx = initAnimations(true);
      return () => {
        animCtx?.revert();
      };
    }

    // 2. Inicializar Lenis (Smooth Scroll)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de easing suave
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sincronizar o ScrollTrigger do GSAP com as atualizações do Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Integrar a animação do Lenis ao Ticker do GSAP
    const updatePhysics = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updatePhysics);
    gsap.ticker.lagSmoothing(0);

    // 3. Inicializar as animações GSAP no contexto da rota atual
    const animCtx = initAnimations(false);

    // Ao mudar de página, rola para o topo imediatamente
    lenis.scrollTo(0, { immediate: true });

    // Limpeza ao desmontar
    return () => {
      gsap.ticker.remove(updatePhysics);
      lenis.destroy();
      lenisRef.current = null;
      animCtx?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}
