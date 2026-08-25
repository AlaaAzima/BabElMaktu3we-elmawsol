import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: "#FDFBF7",
          cream: "#F4EFE6",
          darkGreen: "#1A362B",
          sageGreen: "#4A675B",
          gold: "#D4AF37",
          lightGold: "#EADD9B",
          brown: "#4A3B2C",
        }
      },
      fontFamily: {
        amiri: ["var(--font-amiri)", "serif"],
        naskh: ["var(--font-noto-naskh)", "serif"],
      }
    },
  },
  plugins: [],
};
export default config;
