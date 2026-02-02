import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { KeywordCarousel } from "@/components/ui/KeywordCarousel";
import { PromptTerminal } from "@/components/ui/PromptTerminal";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                AI Studio Portfolio
              </p>

              <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-[1.05]">
                We build{" "}
                <span className="text-white">
                  <KeywordCarousel />
                </span>
              </h1>

              <p className="mt-4 text-white/70 max-w-xl">
                Design-led Web. AI-powered Growth.
              </p>

              <div className="mt-7 flex items-center gap-3 flex-wrap">
                <Link href="/contact">
                  <MagneticButton>Get a Quote</MagneticButton>
                </Link>
                <Link href="/lab" className="text-sm text-white/70 hover:text-white">
                  View Lab →
                </Link>
              </div>

              <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                {[
                  ["Fast", "Optimized by default"],
                  ["Premium UI", "Glass + subtle grain"],
                  ["Admin", "CMS ready (next step)"],
                ].map(([a, b]) => (
                  <GlassCard key={a} className="p-4">
                    <p className="text-sm font-semibold">{a}</p>
                    <p className="mt-1 text-xs text-white/60">{b}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <PromptTerminal />
              <div className="mt-4 text-xs text-white/50">
                * Demo terminal preview (real AI later)
              </div>
            </div>
          </div>
        </Section>

        <Section kicker="AI Modules" title="Services that feel like product blocks">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Design System", desc: "Glass UI, typography, spacing tokens.", stat: "+Clarity" },
              { title: "Web Build", desc: "Next.js performance-first delivery.", stat: "+Speed" },
              { title: "Growth Layer", desc: "SEO + conversion-ready sections.", stat: "+Leads" },
              { title: "Admin CMS", desc: "Editable content (next step).", stat: "+Control" },
              { title: "Lab Demo", desc: "Live build preview UI scaffold.", stat: "+Trust" },
              { title: "Support", desc: "Maintain, iterate, ship fast.", stat: "+Momentum" },
            ].map((m) => (
              <GlassCard
                key={m.title}
                className="p-5 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)] hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">{m.title}</p>
                    <p className="mt-2 text-sm text-white/65">{m.desc}</p>
                  </div>
                  <span className="text-xs rounded-full border border-white/12 bg-white/5 px-3 py-1 text-white/70">
                    {m.stat}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section kicker="Signature" title="Live Build Preview (Demo)">
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <p className="text-lg font-semibold">Demo UI now. Real AI later.</p>
                <p className="mt-2 text-white/65 leading-relaxed">
                  This section increases trust. Later we’ll connect real AI generation.
                </p>
                <div className="mt-4 text-sm text-white/75 leading-7">
                  1) Select module<br/>
                  2) Choose style<br/>
                  3) Generate preview
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Preview Pane</p>
                <div className="mt-3 h-36 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3" />
                <p className="mt-3 text-[11px] text-white/45">Placeholder preview UI</p>
              </div>
            </div>
          </GlassCard>
        </Section>

        <Section>
          <GlassCard className="p-8 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to ship?</p>
            <h3 className="mt-3 text-2xl font-semibold">Let’s build something exceptional.</h3>
            <p className="mt-2 text-white/65">
              Premium UI + performance-first build + conversion-ready structure.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/contact">
                <MagneticButton>Start a Project</MagneticButton>
              </Link>
            </div>
          </GlassCard>
        </Section>
      </main>

      <Footer />
    </>
  );
}
