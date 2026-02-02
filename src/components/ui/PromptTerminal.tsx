"use client";

import React from "react";
import { GlassCard } from "./GlassCard";

export function PromptTerminal() {
  return (
    <GlassCard className="p-4">
      <div className="flex items-center gap-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <p className="ml-2 text-xs text-white/60">Prompt Terminal</p>
      </div>

      <div className="space-y-3 font-mono text-[12px] leading-relaxed text-white/80">
        <p>
          <span className="text-cyan/80">$</span> generate premium AI Studio site
          with glass UI
        </p>
        <p className="text-white/60">
          → building layout… optimizing images… enabling reduced-motion…
        </p>
        <p>
          <span className="text-violet/80">✓</span> hero carousel + CTA glow on hover
        </p>
        <p>
          <span className="text-violet/80">✓</span> admin panel ready (next step)
        </p>
        <p className="text-white/55">
          Output:{" "}
          <span className="text-white/80">/home /services /pricing /lab</span>
        </p>
      </div>
    </GlassCard>
  );
}
