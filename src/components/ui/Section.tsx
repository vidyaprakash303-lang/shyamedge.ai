import React from "react";
import { Container } from "./Container";

export function Section({
  title,
  kicker,
  children,
}: {
  title?: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        {(kicker || title) && (
          <header className="mb-8">
            {kicker && (
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
