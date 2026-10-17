import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Sinhala, Geist_Mono, Inter, Roboto, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import GoldenBackground from "@/components/layout/GoldenBackground";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], display: "swap" });
const kalam = Kalam({ variable: "--font-kalam", subsets: ["latin"], weight: "400", display: "swap" });

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sans-sinhala",
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "SkillBridge SL — Your future. Your path.", template: "%s | SkillBridge SL" },
  description: "Explore careers, compare Sri Lankan universities, and build your own education roadmap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${kalam.variable} ${notoSans.variable} ${notoSansSinhala.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body><div className="app-shell"><GoldenBackground /><Navbar /><main id="main-content">{children}</main></div></body>
    </html>
  );
}
