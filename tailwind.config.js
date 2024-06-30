// import "./src/assets/volume-high-outline.svg";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        // background: "url('./volume-high-outline.svg')",
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        volume: {
          "67%, 100%": {
            background: "url('./assets/volume-high-outline.svg')",
          },

          "0%, 33%": {
            background: "url('./assets/volume-low-outline.svg')",
          },

          "34%, 66%": {
            background: "url('./assets/volume-medium-outline.svg')",
          },
        },
      },
      animation: {
        volumeActive: "volume 2.5s infinite",
        volumeBlur: "none",
      },
    },
    // colors: {
    //   // shanbeigreen: "#209e85",
    // },
  },
  plugins: [],
};
