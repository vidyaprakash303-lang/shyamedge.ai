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
        <Section kicker="Services" title="AI Modules">
          <GlassCard className="p-6">
            <p className="text-white/70">Services will be editable via Admin in the next step.</p>
          </GlassCard>
        </Section>
      </main>
      <Footer />
    </>
  );
}
