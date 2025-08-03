import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // Vous pouvez aussi personnaliser chaque variant
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      textTransform: 'none', // Empêche la transformation en majuscules
    },
  },
});

export default theme;
