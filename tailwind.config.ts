import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center : true,
        padding : "16px"
      },  
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "oklch(0.606 0.25 292.717)"
      },      
      screens : {
        "2xl" : "1320px"
      },
      animation: {
        "loop-scroll": "loop-scroll 70s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{ transform:"translateX(0)"},
          to:{ transform:"translateX(-100%)"},
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
