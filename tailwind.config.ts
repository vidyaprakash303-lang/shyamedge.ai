import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg0: "#0A0B10",
        bg1: "#0E1018",
        glass: "rgba(255,255,255,0.06)",
        glass2: "rgba(255,255,255,0.09)",
        borderSoft: "rgba(255,255,255,0.10)",
        violet: "#8B5CF6",
        cyan: "#22D3EE",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        glass: "14px",
      },
    },
  },
  plugins: [],
} satisfies Config;
