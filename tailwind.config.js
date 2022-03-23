module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "background-blue": "#F5F7FA",
      "dark-blue": "#5578F0",
      "btn-light": "#E4EAF8",
    },
    extend: {
      animation: {
        slideInleft: "slideInLeft 2s ease-in 0s 1",
        loadingLine: "loadingLine 4s linear 1 normal forwards",
        logoNameSlideBottom: "logoNameSlideBottom 2s ease-in 4s 1 forwards",
        logoSlideUp: "logoSlideUp 2s ease-in 4s 1 forwards",
        taglineSlideUp: "taglineSlideUp 2s ease-in 4s 1 forwards",
      },
    },
  },
  plugins: [],
};
