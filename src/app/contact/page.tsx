"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(res.ok ? "✅ Sent! (Demo)" : "❌ Failed. Try again.");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <>
      <Navbar />
      <main>
        <Section kicker="Contact" title="Let’s talk">
          <div className="grid gap-4 lg:grid-cols-2">
            <GlassCard className="p-6">
              <p className="text-sm font-semibold">Contact Info</p>
              <p className="mt-3 text-white/70">
                WhatsApp: {siteConfig.contact.whatsapp}
              </p>
              <p className="mt-1 text-white/70">
                Email: {siteConfig.contact.email}
              </p>
              <a
                className="mt-4 inline-block text-sm text-cyan hover:text-white"
                href="https://wa.me/918708808087"
                target="_blank"
                rel="noreferrer"
              >
                Open WhatsApp →
              </a>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm font-semibold">Send a message</p>
              <form onSubmit={onSubmit} className="mt-4 space-y-3">
                <input
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                  required
                />
                <input
                  name="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="h-28 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                  required
                />
                <Button type="submit">Submit</Button>
                {status && <p className="text-xs text-white/60">{status}</p>}
              </form>
            </GlassCard>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
