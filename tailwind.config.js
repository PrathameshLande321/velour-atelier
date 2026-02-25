export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        luxury: ['Playfair Display', 'serif'],
        serifSoft: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        gold: "#C6A86E",
        softGold: "#B89B5E",
        deepBlack: "#0F0F0F",
        charcoal: "#1C1C1C",
        luxuryWhite: "#F5F1EA",
      },
    },
  },
}