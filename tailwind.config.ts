import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "718px",
        mobile: { max: "717px" },
      },
      fontFamily: {
        montreal: ["PP Neue Montreal", ...fontFamily.sans],
      },
      colors: {
        gray: "#E1E1E1",
        black: "#121212",
        while: "#F3F3F3",
        violet: "#8977F3",
        "light-gray": "#F0F0F0",
        "dark-gray": "#CCCCCC",
      },
    },
  },
  plugins: [],
} satisfies Config;
