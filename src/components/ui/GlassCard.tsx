import React from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl bg-glass backdrop-blur-glass border border-borderSoft shadow-soft",
        "transition-transform duration-300",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
