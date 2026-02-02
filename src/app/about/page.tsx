import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section kicker="About" title="Leadership">
          <GlassCard className="p-6 space-y-2">
            {siteConfig.team.map((t) => (
              <p key={t.name} className="text-white/75">
                <span className="font-semibold">{t.name}</span> — {t.title}
              </p>
            ))}
          </GlassCard>
        </Section>
      </main>
      <Footer />
    </>
  );
}
