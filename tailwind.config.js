module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FB4051",
          secondary: "#151515",
          neutral: "#fff",
          "base-100": "#222831",
          info: "#A6ADBA",
          success: "#ffffff",
          warning: "#DF7E07",
          error: "#FA5C5C",
          violet:"#9999FF"
        },
        dark: {
          primary: "#C74B50",
          secondary: "#fff",
          "base-100": "#222831",
          neutral: "#ECF0F3",
          info: "#A6ADBA",
          success: "#ffffff",
          warning: "#DF7E07",
          error: "#FA5C5C",
          violet:"#9999FF"
        }
      },
    ],
  },
  plugins: [require("daisyui")],
};

