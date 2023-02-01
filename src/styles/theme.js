import { createTheme } from "@mui/material/styles";

const primaryColor = "#0C9748"; // fairwayGreen
const primaryDarkColor = "#006848"; //fairwayDarkGreen
const secondaryColor = "#EFEDE8"; // white
const tertiaryColor = "#82C341"; // fairway light green
const brown = "#757575";
const transparent = "transparent";
const white = "#fff";

const theme = createTheme({
  typography: {
    fontFamily: ["Wigrum", "Arial", "-apple-system", "BlinkMacSystemFont"].join(
      ","
    ),
  },
  palette: {
    primary: { main: primaryColor },
    darkPrimary: { main: primaryDarkColor },
    secondary: { main: secondaryColor },
    darkSecondary: { main: "#E2D5C1" },
    tertiary: { main: tertiaryColor },
    lightPrimary: { main: "#F0FFFB" },
    quaternary: { main: "#5CCAAB" },
    transparent: { main: transparent },

    grey10: { main: "#F6F6F6" },
    grey15: { main: "#E6E6E6" },
    grey20: { main: "#CFCFCF" },
    grey30: { main: "#B7B7B7" },
    grey40: { main: "#BEBEBE" },
    grey60: { main: "#9D9D9D" },
    grey80: { main: "#787878" },
    grey100: { main: "#3F4444" },
    green: { main: tertiaryColor },
    blue: { main: primaryColor },
    darkBlue: { main: primaryDarkColor },
    brown: { main: brown },
    yellow: { main: "#E4BD6E" },
    beige: { main: secondaryColor },
    red: { main: "#E4B9A9" },
    error: { main: "#f44336" },
    lightBlue: { main: "#F9FBFF" },
    mustard: { main: "#E9F0AD" },
    pink: { main: "#E87FA4" },
    white: { main: white },
    black: { main: "#000" },
  },
  components: {
    MuiCssBaseline: {
      fontFamily: "Wigrum !important",
    },
    MuiInputBase: {
      fontFamily: "Wigrum !important",
      color: brown,
      input: {
        padding: "1rem 0.85rem 1rem 0.85rem",
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "1.15rem",
          color: brown,
          backgroundColor: white,
          border: "1px solid #CFCFCF",
          "&&:hover": {
            borderColor: brown,
          },
          padding: ".5rem",
        },
        underline: {
          "&:before": {
            borderBottomColor: transparent,
          },
          "&&:hover::before": {
            borderColor: transparent,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: brown,
          fontSize: "1.125rem",
          marginBottom: "0.5rem",
        },
      },
    },
    // Name of the component
    MuiAccordion: {
      styleOverrides: {
        root: {
          minHeight: "56px",
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // boxShadow: "none",
        },
        contained: {
          fontWeight: "bold",
        },
        containedSizeSmall: {
          fontSize: "16px",
          fontWeight: "500",
          padding: "13.5px 53px 13.5px 53px",
          fontFamily: "PT Sans, sans-serif",
        },
        containedSizeLarge: {
          fontSize: "25px",
          borderRadius: "20px",
          padding: "20px 40px",
          color: "green",
          backgroundColor: "white",
        },
      },
    },
  },
});

export default theme;
