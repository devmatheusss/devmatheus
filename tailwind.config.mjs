import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...fontFamily.sans],
        mono: ["JetBrains Mono Variable", ...fontFamily.mono],
        heading: ["Poppins", ...fontFamily.sans],
      },
      animation: {
        fadeIn: "fadeIn 1s forwards cubic-bezier(.83,-0.13,.42,.9)"
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0
          }
        }
      }
    },
  },
  plugins: [],
};
