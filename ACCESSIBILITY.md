# Diretrizes de Acessibilidade ♿

O **Portal Mães Atípicas** foi estruturado com foco primordial em acessibilidade, atendendo às necessidades de cuidadores sob estresse mental e visual, e em conformidade com as diretrizes do **e-MAG** (Modelo de Acessibilidade em Governo Eletrônico) e **WCAG 2.1 AA** (Web Content Accessibility Guidelines).

---

## 🛠️ Recursos Implementados

### 1. Dimensionamento Dinâmico de Texto
- **Objetivo:** Permitir que usuários com baixa acuidade visual ou telas menores aumentem a fonte para uma leitura confortável.
- **Funcionamento:** Botões `A+` (Aumentar) e `A-` (Diminuir) na barra de utilitários superior ajustam o tamanho da fonte base (`html.style.fontSize`) dinamicamente entre **80%** e **140%**.
- **Persistência:** A preferência do usuário é gravada no `localStorage` para manter o tamanho de texto configurado em acessos futuros.

### 2. Modo de Alto Contraste
- **Objetivo:** Otimizar a leitura sob luz solar forte ou para pessoas com daltonismo e outras dificuldades de distinção de tons.
- **Funcionamento:** Ao acionar o botão `Contraste`, uma classe `.high-contrast` é injetada no elemento raiz. Toda a folha de estilos do projeto se adapta usando cores puras em preto (`#000000`), branco (`#FFFFFF`) e acentos de destaque em amarelo (`#FDD835`).
- **Persistência:** A preferência de contraste também é persistida no `localStorage`.

### 3. Navegação Acessível e Mobile-First
- **Tamanho dos Alvos de Toque:** Todos os botões, links de ancoragem e elementos de formulário possuem dimensões generosas (mínimo de **48px** de área de clique ativa) para evitar toques involuntários.
- **Linguagem Simplificada:** Textos descritivos nos guias utilizam termos cotidianos e explicativos em vez de jargões clínicos de difícil compreensão.
- **Foco de Teclado:** Elementos focáveis recebem contornos claros ao navegar por tabulação, permitindo navegação sem mouse.
