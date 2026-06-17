import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Componente do Logotipo Oficial
 * Exibe a imagem oficial fornecida pelo usuário no lugar do antigo desenho pixelizado.
 */
export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Logo Mães Atípicas"
      width={size}
      height={size}
      className={`object-contain select-none shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
