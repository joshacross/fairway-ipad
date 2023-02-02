/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#0C9748",
      darkPrimary: "#006848",
      lightPrimary: "#82C341",
      secondary: "#3F4444",
      tertiary: "#0096d0",
      white: "#fff",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "home-page":
          "url('https://img1.wsimg.com/isteam/ip/257ce0ed-a129-4f8b-8459-b36d55e562e4/Jackson%20Townhomes%20Painting%20-%20Light%20-%20R2-0002.jpg')",
        "blend-modal":
          "url('https://www.canva.com/design/DAFZdevRFXc/Vg24-OvG6rXgkJ_iCY1Ocw/view?utm_content=DAFZdevRFXc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink')",
      },
    },
  },
  plugins: [],
};
