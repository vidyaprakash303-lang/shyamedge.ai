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
        <Section kicker="Work" title="Case Studies (Placeholder)">
          <GlassCard className="p-6">
            <p className="text-white/70">Add 3–6 case studies with outcomes like “+42% leads” and “2.1x conversions” later.</p>
          </GlassCard>
        </Section>
      </main>
      <Footer />
    </>
  );
}
