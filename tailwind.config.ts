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
  			'primary': '#3A5F73',
        secondary: "#F0F0F0",
        text: "#4A4A4A",
      },
    },
  },
  plugins: [],
};
export default config;
