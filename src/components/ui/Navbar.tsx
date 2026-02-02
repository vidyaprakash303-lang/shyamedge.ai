"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";

export function Navbar() {
  const [mode, setMode] = useState<"Default" | "Violet" | "Cyan">("Default");

  return (
    <div className="sticky top-0 z-40 border-b border-white/8 bg-black/10 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide">
            ShyamEdge <span className="text-white/70">AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/work" className="hover:text-white">Work</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/lab" className="hover:text-white">Lab</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/admin" className="hover:text-white/90">Admin</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button className="hover:shadow-[0_0_28px_rgba(139,92,246,0.20)]">
                Get a Quote
              </Button>
            </Link>
            <Link href="/lab" className="hidden sm:block">
              <Button variant="ghost">View Lab</Button>
            </Link>

            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as any)}
              className="hidden sm:block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 outline-none"
              aria-label="Mode"
            >
              <option>Default</option>
              <option>Violet</option>
              <option>Cyan</option>
            </select>
          </div>
        </div>

        <p className="pb-2 text-[11px] text-white/40">Mode (MVP): {mode}</p>
      </div>
    </div>
  );
}
