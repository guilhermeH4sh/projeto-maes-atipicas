"use client";

import React, { useId } from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Coração em quebra-cabeça nas quatro cores da neurodiversidade.
 * SVG inline para não depender de arquivos de imagem ausentes.
 */
export default function Logo({ className = "", size = 48 }: LogoProps) {
  const clipId = `heart-${useId().replace(/:/g, "")}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`shrink-0 select-none ${className}`}
      role="img"
      aria-label="Logo Mães Atípicas"
    >
      <title>Mães Atípicas</title>
      <defs>
        <clipPath id={clipId}>
          <path d="M32 56C32 56 8 40.5 8 24.5C8 16.5 14 11 21.5 11C26.2 11 30 13.6 32 17.2C34 13.6 37.8 11 42.5 11C50 11 56 16.5 56 24.5C56 40.5 32 56 32 56Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect x="8" y="11" width="24" height="22.5" fill="#1E88E5" />
        <rect x="32" y="11" width="24" height="22.5" fill="#E53935" />
        <rect x="8" y="33.5" width="24" height="22.5" fill="#FDD835" />
        <rect x="32" y="33.5" width="24" height="22.5" fill="#43A047" />
      </g>
      {/* Encaixes de quebra-cabeça */}
      <circle cx="32" cy="22.5" r="4.2" fill="#E53935" />
      <circle cx="32" cy="22.5" r="2.4" fill="#1E88E5" />
      <circle cx="22" cy="33.5" r="4.2" fill="#FDD835" />
      <circle cx="22" cy="33.5" r="2.4" fill="#1E88E5" />
      <circle cx="42" cy="33.5" r="4.2" fill="#43A047" />
      <circle cx="42" cy="33.5" r="2.4" fill="#E53935" />
      <circle cx="32" cy="33.5" r="4.2" fill="#ffffff" />
      <circle cx="32" cy="33.5" r="2.2" fill="#43A047" />
    </svg>
  );
}
