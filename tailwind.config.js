export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { publicSans: ["Public Sans", "sans-serif"] },
      colors:{
        darkBlue: "#2d314d",
        limeGreen: "#31d35c",
        brightCyan: "#2bb7da",
        grayishBlue: "#9698a6",
        lightGrayishBlue: "#f3f4f6",
        veryLightGray: "#fafafa",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1132px",
        "2xl": "1132px",
      },
    },
  },
  plugins: [],
};
