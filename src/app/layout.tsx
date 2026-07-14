import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { FloatingCTA } from "@/components/FloatingCTA";
import { AIAssistantOrb } from "@/components/AIAssistantOrb";
import { BackgroundEcosystem } from "@/components/BackgroundEcosystem";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TRONX AI | Premium AI Consultancy",
  description: "AI-Powered Consultancy • Smart Technology • Digital Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen bg-background text-foreground antialiased relative selection:bg-primary/30 selection:text-white`}>
        <Navigation />
        <CustomCursor />
        <FloatingCTA />
        <AIAssistantOrb />
        <BackgroundEcosystem />
        {/* Background Noise Texture */}
        <div className="pointer-events-none fixed inset-0 z-[-1] h-full w-full opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
