/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
      },
      fontFamily: { Poppins: ["Poppins", "sans serif"], inter:["Inter", " sans-serif"],DM:["DM Sans", "sans-serif"] },
      fontWeight: { Five: 500, four: 400 },
      boxShadow: {
        'custom': '1px 4px 10px rgba(0, 0, 0, 0.5)',
      },
      letterSpacing: {
        extratighter: '-0.05em', // Custom tighter spacing
      },
      lineHeight: {
        extraTight: '1.1', // Custom line-height
      },
      backgroundImage: {
        'hero-pattern': "url('/home1.jpg')",
        'footer-texture': "url('/home.webp')",
      },
      animation: {
        spin: "spin 1.5s linear infinite",
        move: "move 0.5s linear infinite alternate-reverse",
      },
      keyframes: {
        move: {
          "0%": { transform: "rotate(45deg)", borderColor: "white" },
          "100%": {
            transform: "translateY(20px) rotate(45deg)",
            borderTopColor: "#ff0000",
            borderLeftColor: "#000000",
            boxShadow: "0px 0px 20px 2px rgba(255, 255, 255, 0.6), 0px 0px 20px #ff0000",
          },
        },
      },
    },
  },

  plugins: [],
};
