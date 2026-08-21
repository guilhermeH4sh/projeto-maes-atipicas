# Diretrizes de Acessibilidade

O **Portal Mães Atípicas** prioriza cuidadores sob estresse, com conformidade a **e-MAG** e **WCAG 2.1 AA**.

## Recursos implementados

### 1. Dimensionamento dinâmico de texto
- Botões `A+` e `A-` na barra superior ajustam `html.style.fontSize` entre **80%** e **140%**.
- Preferência salva em `localStorage` (`maes-atipicas-font-scale`).

### 2. Modo de alto contraste
- Botão `Contraste` aplica a classe `.high-contrast` no `html`.
- Paleta preto / branco / amarelo `#FDD835` para leitura sob luz forte ou baixa distinção de tons.
- Preferência salva em `localStorage` (`maes-atipicas-high-contrast`).

### 3. Navegação e toque
- Alvos de toque com no mínimo **48px** de altura útil.
- Skip link “Pular para o conteúdo principal”.
- Menu mobile fecha com `Escape`.
- Linguagem direta nos guias, sem jargão clínico desnecessário.

### 4. Teclado e modais
- Contorno de foco visível (`:focus-visible`).
- Modais de guias e vídeos: `role="dialog"`, `aria-modal`, fecham com `Escape`, focam o botão Fechar ao abrir e devolvem o foco ao fechar.

### 5. Movimento reduzido
- `prefers-reduced-motion: reduce` desativa animações do hero e do `Reveal`.
- Rolagem por âncora usa comportamento `auto` quando o usuário pede menos movimento.

### 6. Semântica e estrutura
- Marca **Mães Atípicas** como `h1` no hero.
- Seções com `aria-labelledby` e formulário de contato com validação anunciada via `role="alert"`.
