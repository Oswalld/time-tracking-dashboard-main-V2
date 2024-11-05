/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/index.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      White: "#ffffff",
      Blue: "hsl(246, 80%, 60%)",
      // prettier-ignore
      "work": "hsl(15, 100%, 70%)",
      // prettier-ignore
      "play": "hsl(195, 74%, 62%)",
      // prettier-ignore
      "study": "hsl(348, 100%, 68%)",
      // prettier-ignore
      "exercise": "hsl(145, 58%, 55%)",
      // prettier-ignore
      "social": "hsl(264, 64%, 52%)",
      // prettier-ignore
      "selfcare": "hsl(43, 84%, 65%)",
      // prettier-ignore
      "Very-dark-blue": "hsl(226, 43%, 10%)",
      // prettier-ignore
      "Dark-blue": "hsl(235, 46%, 20%)",
      // prettier-ignore
      "Desaturated-blue": "hsl(235, 45%, 61%)",
      // prettier-ignore
      "Pale-Blue": "hsl(236, 100%, 87%)",
    },
    extend: {},
  },
  plugins: [],
};
