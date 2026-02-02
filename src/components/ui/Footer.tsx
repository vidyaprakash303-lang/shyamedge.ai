import React from "react";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-white/60">
          <p className="text-white/80 font-semibold">{siteConfig.name}</p>
          <p>WhatsApp: {siteConfig.contact.whatsapp}</p>
          <p>Email: {siteConfig.contact.email}</p>
          <p className="text-xs text-white/40 mt-4">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
