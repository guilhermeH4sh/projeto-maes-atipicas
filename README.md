# Portal Mães Atípicas

Plataforma institucional de acolhimento e orientação para mães e cuidadores de crianças e adolescentes neurodivergentes (TEA, TDAH, Síndrome de Down e outras necessidades).

Landing page única, mobile-first, com linguagem clara e acessibilidade (WCAG 2.1 AA / e-MAG).

## Stack

- Next.js (App Router), React, TypeScript
- Tailwind CSS v4
- Fonte Outfit

## Estrutura

```
src/
  app/page.tsx              # Compõe as seções
  components/sections/      # Hero, Pilares, Guias, Mural, FAQ, Contato
  components/ui/            # Reveal, ContentModal
  data/                     # Conteúdo (guias, FAQ, avisos, pilares)
```

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Diretrizes de produto: `exigencias.md`. Acessibilidade: `ACCESSIBILITY.md`.
