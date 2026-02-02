import "@/styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import { ParticlesCanvas } from "@/components/ui/ParticlesCanvas";

export const metadata: Metadata = {
  title: "ShyamEdge AI — AI Studio",
  description: "Design-led Web. AI-powered Growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <ParticlesCanvas />
        {children}
      </body>
    </html>
  );
}
