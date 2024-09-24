import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["selector", "class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      listStyleType: {
        hyphen: "―  ",
        circle: "circle",
      },
      spacing: {
        "96": "384px",
        "128": "512px",
        "160": "640px",
        "192": "768px",
        "224": "896px",
        "256": "1024px",
        "288": "1152px",
        "320": "1280px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
    fontSize: {
      xs: ["14px", "20px"],
      sm: ["16px", "24px"],
      base: ["18px", "28px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["30px", "36px"],
      "3xl": ["36px", "40px"],
      "4xl": ["48px", "1"],
      "5xl": ["60px", "1"],
      "6xl": ["72px", "1"],
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
