import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Section kicker="Lab" title="Live Build Preview (Demo)">
          <GlassCard className="p-6">
            <p className="text-white/70">Demo UI now. Real AI later.</p>
          </GlassCard>
        </Section>
      </main>
      <Footer />
    </>
  );
}
