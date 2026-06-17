# Exigências do Projeto — Plataforma para Mães Atípicas

Este documento reúne as diretrizes obrigatórias de design, UX/UI, paleta de cores e acessibilidade para o desenvolvimento da plataforma de apoio a mães atípicas. Estas exigências devem orientar todas as decisões de produto e engenharia.

---

## 🎨 Identidade Visual e Paleta de Cores

A identidade visual é baseada na simbologia da neurodiversidade e do autismo, utilizando um modelo cromático **policromático** (multicolorido) com cores vibrantes que transmitem acolhimento, força, clareza e esperança.

### Cores Oficiais (Derivadas do Símbolo das Mães Atípicas)

| Cor | Hexadecimal | Significado e Aplicação |
| :--- | :--- | :--- |
| **Azul** | `#1E88E5` | Conscientização, comunicação e acolhimento. |
| **Vermelho** | `#E53935` | Força, luta, mobilização e urgência controlada. |
| **Amarelo** | `#FDD835` | Esperança, desenvolvimento e luz. |
| **Verde** | `#43A047` | Inclusão, equilíbrio, crescimento e segurança. |

### Características Cromáticas
- **Modelo Cromático:** Policromático (multicolorido), representando a neurodiversidade.
- **Saturação:** Média a alta para destacar elementos e reter a atenção de forma amigável.
- **Contraste:** Moderado a elevado para otimizar a legibilidade, garantindo que o texto seja legível mesmo em telas de menor qualidade ou sob luz solar.

### Logotipo Oficial
- O logotipo oficial do projeto é o **Coração Pixel Art de Quebra-Cabeça** (conforme imagem de referência/snapshot), contendo as quatro cores dispostas de forma harmônica.

---

## 🧠 UX/UI Centrada no Usuário (Inclusão e Simplicidade)

O público-alvo principal é composto por mães e cuidadores sob alto nível de estresse físico e mental, frequentemente com pouca familiaridade com interfaces digitais complexas.

### Diretrizes de Acessibilidade e Clareza
1. **Linguagem Descomplicada:**
   - Evitar termos clínicos difíceis (ex.: em vez de "comportamento autolesivo", usar "filho batendo em si mesmo").
   - Mensagens claras, empáticas e diretas.
2. **Design Limpo e sem Ruído:**
   - Evitar layouts poluídos com banners piscantes, excesso de cards ou animações pesadas que possam causar sobrecarga cognitiva.
   - Espaçamento generoso entre botões e links para evitar toques acidentais (mínimo de 48px de área tocável).
3. **Legibilidade Aprimorada:**
   - Fontes grandes e limpas (sans-serif, ex: *Inter*, *Outfit* ou *Roboto*).
   - Contraste elevado de texto com o fundo (padrão WCAG 2.1 AA).
   - Uso de ícones intuitivos associados ao texto para facilitar a compreensão visual rápida.
4. **Foco Mobile-First:**
   - O celular é o dispositivo primário de acesso. O design deve carregar rápido e se ajustar perfeitamente a telas pequenas (largura mínima de 320px).

---

## 🛑 Restrições de Componentes e Estrutura

- **Estrutura Modular:** A estrutura do projeto deve ser limpa, modular e fácil de manter, reaproveitando componentes e organizando-os claramente.
