import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/SkipLink";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mães Atípicas | Portal de Acolhimento",
  description:
    "Espaço seguro de acolhimento e orientação para mães e cuidadores de crianças com TEA, TDAH, Síndrome de Down e outras neurodiversidades. Direitos, educação inclusiva e saúde mental em linguagem clara.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
