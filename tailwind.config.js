/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xlg: "1180px",
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "1xl": "1340px",

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "team-gradient":
          "linear-gradient(88deg, #4C6AAB -2.55%, #0E0B2B 107.7%)",
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#080D27",
        primary2: "#10193f",
        green: "#11CAD1",
        green2: "#B0E2EB",
        lightBlue: "#3C5186",
        lightBlue2: "#3B7AFD",
        textColor: "#C1D5F8",
        textBlack: "#171326",
        creamy: "#FEDFA2",
        pink: "#FEB2B2",
        purple: "#7547A6",
        borderColor: "#4C6AAB",
      },
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
