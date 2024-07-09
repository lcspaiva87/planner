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
        fontFamily:{
          sans : "Inter",
        },
        lime: {
          300: "#BEF264",
          950: "#1A2E05",
       
        },
        grayscale: {
          'white': "#FFFFFF",
          'zinc-50':'#FAFAFA',
          'zinc-100':'#F4F4F5',
          'zinc-200':'#E4E4E7',
          'zinc-300':'#D4D4D8',
          'zinc-400':'#A1A1AA',
          'zinc-500':'#71717A',
          'zinc-700':'#27272A',
          'zinc-800':'#27272A',
          'zinc-900':'#18181B',
          
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        shape:
          "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      },
      
    },
  },
  plugins: [],
};
export default config;
