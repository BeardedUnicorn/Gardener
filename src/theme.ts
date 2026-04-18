import { alpha, createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#305f4d",
      dark: "#1f4536",
      light: "#4c816c",
      contrastText: "#f7f2e8",
    },
    secondary: {
      main: "#c56e3f",
      dark: "#9d522d",
      light: "#df9166",
    },
    background: {
      default: "#f2ece1",
      paper: "#f7f2e8",
    },
    text: {
      primary: "#1f2a22",
      secondary: "#5c675e",
    },
    divider: alpha("#305f4d", 0.16),
    success: {
      main: "#4b7f4d",
    },
    warning: {
      main: "#b1781d",
    },
    error: {
      main: "#b14c3a",
    },
  },
  shape: {
    borderRadius: 22,
  },
  typography: {
    fontFamily: '"Work Sans Variable", "Work Sans", sans-serif',
    h1: {
      fontFamily: '"Fraunces Variable", "Fraunces", serif',
      fontSize: "3rem",
      fontWeight: 650,
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: '"Fraunces Variable", "Fraunces", serif',
      fontSize: "1.8rem",
      fontWeight: 620,
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Fraunces Variable", "Fraunces", serif',
      fontSize: "1.35rem",
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--soil-base": "#f2ece1",
          "--soil-warm": "#e6d5be",
          "--leaf-deep": "#264638",
          "--leaf-soft": "#a8c6aa",
          "--accent-clay": "#c56e3f",
        },
        "html, body, #root": {
          minHeight: "100%",
        },
        body: {
          margin: 0,
          backgroundColor: "var(--soil-base)",
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(211, 145, 95, 0.26), transparent 28%),
            radial-gradient(circle at 85% 15%, rgba(68, 108, 84, 0.20), transparent 32%),
            linear-gradient(145deg, rgba(255,255,255,0.68), rgba(255,255,255,0)),
            linear-gradient(180deg, #f5efe6 0%, #efe7db 100%)
          `,
          color: "#1f2a22",
        },
        "*": {
          boxSizing: "border-box",
        },
        "*::-webkit-scrollbar": {
          width: 10,
          height: 10,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: alpha("#305f4d", 0.28),
          borderRadius: 999,
        },
        "::selection": {
          backgroundColor: alpha("#c56e3f", 0.28),
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 16,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha("#ffffff", 0.58),
        },
      },
    },
  },
});
