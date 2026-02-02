import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export default function AdminPlaceholder() {
  return (
    <>
      <Navbar />
      <main>
        <Section kicker="Admin" title="Payload CMS (Next step)">
          <GlassCard className="p-6 space-y-3">
            <p className="text-white/70">
              Admin panel will be connected using Payload CMS + Postgres.
            </p>
            <p className="text-white/60 text-sm">
              Once your preview is working on Vercel, we’ll add Payload setup and database connection.
            </p>
          </GlassCard>
        </Section>
      </main>
      <Footer />
    </>
  );
}
