import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding:{
        "mobile":'16px'
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1900px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'mainBg-color':"#F4F2EF",
        'forbgwhite-color':'#242E52'
      },
    },
  },
  plugins: [],
};
export default config;
