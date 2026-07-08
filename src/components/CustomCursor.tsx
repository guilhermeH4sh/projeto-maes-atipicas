"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Desativar cursor customizado em telas touch ou mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window;
    if (isMobile) return;

    setIsVisible(true);

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Configuração inicial do GSAP quickSetter para alto desempenho
    const xCursorSetter = gsap.quickSetter(cursor, "x", "px");
    const yCursorSetter = gsap.quickSetter(cursor, "y", "px");

    // Desativar o cursor padrão do sistema no elemento html
    document.documentElement.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      // Círculo interno segue diretamente o ponteiro
      xCursorSetter(e.clientX);
      yCursorSetter(e.clientY);

      // Círculo externo segue com inércia suave
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Efeitos de Hover
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, select, input, [data-cursor], .hover-lift");

      if (isInteractive) {
        gsap.to(follower, {
          scale: 1.8,
          backgroundColor: "rgba(30, 136, 229, 0.15)",
          borderColor: "rgba(30, 136, 229, 0.8)",
          duration: 0.2,
        });
        gsap.to(cursor, {
          scale: 0.5,
          backgroundColor: "#1E88E5",
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, select, input, [data-cursor], .hover-lift");

      if (isInteractive) {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(30, 136, 229, 0.4)",
          duration: 0.2,
        });
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#1E88E5",
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.documentElement.style.cursor = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Ponto Central */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-blue rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Anel Seguidor */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-brand-blue/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
}
