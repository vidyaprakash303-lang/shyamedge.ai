import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section kicker="Pricing" title="Starter / Growth / Premium">
          <div className="grid gap-4 md:grid-cols-3">
            {["Starter", "Growth", "Premium"].map((name) => (
              <GlassCard key={name} className="p-6">
                <p className="text-sm font-semibold">{name}</p>
                <p className="mt-2 text-sm text-white/65">
                  Editable later via Admin.
                </p>
                <p className="mt-5 text-2xl font-semibold">₹ —</p>
                <p className="mt-2 text-xs text-white/45">MVP</p>
              </GlassCard>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
