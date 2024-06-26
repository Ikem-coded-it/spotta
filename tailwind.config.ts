import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "whiteBg": "#FAFCFD",
        "blueBg": "#3366FF",
        "darkFont": "#101012",
        "lightFont": "#1E1E1E",
        "lightBlue": "#F3F7FE",
        "gray": "#D4DCF1"
      }
    },
  },
  plugins: [],
};
export default config;
