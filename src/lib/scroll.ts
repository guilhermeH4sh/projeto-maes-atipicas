/**
 * Rolagem suave até um seletor (âncora). Respeita prefers-reduced-motion.
 */
export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}
