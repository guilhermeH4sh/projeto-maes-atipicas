import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function initAnimations(prefersReducedMotion: boolean): gsap.Context | null {
  if (typeof window === "undefined") return null;

  // 1. Limpar ScrollTriggers antigos para evitar duplicidade em SPA
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // 2. Criar contexto GSAP para desmontagem limpa
  const ctx = gsap.context(() => {
    if (prefersReducedMotion) {
      // Caso Reduced Motion esteja ativo, removemos qualquer transformação/ocultação do JS
      document.querySelectorAll('[data-animate]').forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0, visibility: "visible" });
      });
      return;
    }

    // --- 1. REVEAL DE TEXTO 3D (TÍTULOS MONUMENTAIS) ---
    const textRevealElements = document.querySelectorAll('[data-animate="text-reveal"]');
    textRevealElements.forEach((el) => {
      // SplitType para fatiar em linhas
      const split = new SplitType(el as HTMLElement, { types: "lines,words" });
      
      if (split.lines) {
        // Envolver cada linha em uma máscara com overflow-hidden e perspectiva
        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.className = "line-wrapper overflow-hidden block";
          wrapper.style.perspective = "800px"; // Perspectiva para rotação 3D
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        // Configuração inicial das linhas: inclinadas para trás e deslocadas para baixo
        gsap.set(split.lines, { 
          yPercent: 110, 
          rotateX: -45, 
          transformOrigin: "top center",
          opacity: 0 
        });

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            gsap.to(split.lines, {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              stagger: 0.12,
              duration: 1.1,
              ease: "power4.out",
            });
          },
          once: true,
        });
      }
    });

    // --- 2. ANIMAÇÃO DE ENTRADA DO HERO (Apenas na Home) ---
    const heroSection = document.querySelector('[data-animate="hero-showcase"]');
    if (heroSection) {
      setTimeout(() => {
        const title = heroSection.querySelector("h1");
        const subtitle = heroSection.querySelector("p");
        const ctas = heroSection.querySelectorAll('[data-animate="magnet"]');
        const media = heroSection.querySelector('[data-animate="hero-media"]');

        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.0 } });

        if (title) {
          const split = new SplitType(title, { types: "lines" });
          if (split.lines) {
            split.lines.forEach((line) => {
              const wrapper = document.createElement("div");
              wrapper.className = "line-wrapper overflow-hidden block";
              wrapper.style.perspective = "800px";
              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);
            });
            gsap.set(split.lines, { yPercent: 110, rotateX: -30, opacity: 0 });
            tl.to(split.lines, { yPercent: 0, rotateX: 0, opacity: 1, stagger: 0.15, duration: 1.2 }, 0.2);
          }
        }

        if (subtitle) {
          gsap.set(subtitle, { opacity: 0, y: 20 });
          tl.to(subtitle, { opacity: 1, y: 0, duration: 0.8 }, "-=0.8");
        }

        if (ctas.length > 0) {
          gsap.set(ctas, { opacity: 0, y: 20 });
          tl.to(ctas, { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 }, "-=0.6");
        }

        if (media) {
          gsap.set(media, { scale: 0.8, opacity: 0, rotate: -2 });
          tl.to(media, { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "power4.out" }, "-=1.0");
        }
      }, 300);
    }

    // --- 3. EFEITO DE SCROLL HORIZONTAL TRAVADO (PINNING SHOWCASE) ---
    const horizontalContainer = document.querySelector('[data-animate="horizontal-container"]');
    const horizontalScroll = document.querySelector('[data-animate="horizontal-scroll"]');
    
    if (horizontalContainer && horizontalScroll) {
      // Função para recalcular a largura de deslocamento
      const getScrollAmount = () => {
        return horizontalScroll.scrollWidth - window.innerWidth;
      };

      const horizontalTween = gsap.to(horizontalScroll, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalContainer,
          pin: true,
          scrub: 1, // scrub inercial suave
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true, // adapta-se ao redimensionamento
        },
      });

      // Animar os títulos internos da seção horizontal conforme entram no viewport horizontal
      const panels = horizontalScroll.querySelectorAll(".horizontal-panel");
      panels.forEach((panel) => {
        const title = panel.querySelector("h3");
        const text = panel.querySelector("p");
        const details = panel.querySelector(".panel-details");

        if (title || text || details) {
          gsap.set([title, text, details], { opacity: 0, y: 30 });
          
          ScrollTrigger.create({
            trigger: panel,
            containerAnimation: horizontalTween,
            start: "left 70%",
            onEnter: () => {
              gsap.to([title, text, details], {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          });
        }
      });
    }

    // --- 4. EFEITO MAGNÉTICO EM BOTÕES E CTAs ---
    const magnetElements = document.querySelectorAll('[data-animate="magnet"]');
    magnetElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        // Distância entre o cursor e o centro do elemento
        const x = (e as MouseEvent).clientX - rect.left - rect.width / 2;
        const y = (e as MouseEvent).clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * 0.35, // Força de atração horizontal
          y: y * 0.35, // Força de atração vertical
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      });

      el.addEventListener("mouseleave", () => {
        // Efeito elástico ao soltar o elemento
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.35)",
          overwrite: "auto"
        });
      });
    });

    // --- 5. EFEITO TILT 3D EM CARDS ---
    const tiltElements = document.querySelectorAll('[data-animate="tilt"]');
    tiltElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left;
        const y = (e as MouseEvent).clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = x - xc;
        const dy = y - yc;

        // Ângulo de rotação limitado a 8 graus
        const maxRotate = 8;
        const rx = -(dy / yc) * maxRotate;
        const ry = (dx / xc) * maxRotate;

        gsap.to(el, {
          rotateX: rx,
          rotateY: ry,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.3,
          overwrite: "auto"
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          ease: "power3.out",
          duration: 0.6,
          overwrite: "auto"
        });
      });
    });

    // --- 6. ANIMAÇÕES DE ENTRADA PADRÃO ---
    // Fade Up
    const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
    fadeUpElements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 35 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    // Stagger Cards
    const staggerContainers = document.querySelectorAll('[data-animate="stagger-cards"]');
    staggerContainers.forEach((container) => {
      const cards = Array.from(container.children);
      if (cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 25 });
        ScrollTrigger.create({
          trigger: container,
          start: "top 85%",
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.out",
            });
          },
          once: true,
        });
      }
    });

    // --- 7. PARALLAX DINÂMICO ---
    const parallaxElements = document.querySelectorAll('[data-animate="parallax"]');
    parallaxElements.forEach((el) => {
      const img = el.querySelector("img");
      if (img) {
        el.classList.add("overflow-hidden");
        gsap.set(img, { scale: 1.15 });
        gsap.to(img, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  });

  return ctx;
}
