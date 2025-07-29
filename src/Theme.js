import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Eina01-Bold", sans-serif', 
    h1: {
      fontFamily: '"Eina01-Bold", sans-serif', 
    },
    h2: {
      fontFamily: '"Eina01-Bold", sans-serif', // Pour h2 aussi
    },
    h3: {
      fontFamily: '"Eina01-Bold", sans-serif', // Pour h3, etc.
    },
    h4: {
      fontFamily: '"Eina01-Bold", sans-serif',
    },
    h5: {
      fontFamily: '"Eina01-Bold", sans-serif',
    },
    h6: {
      fontFamily: '"Eina01-Bold", sans-serif',
    },
    body1: {
      fontFamily: '"Eina01-Bold", sans-serif', // Appliquer à body1
    },
    body2: {
      fontFamily: '"Eina01-Bold", sans-serif', // Appliquer à body2
    },
    button: {
      fontFamily: '"Eina01-Bold", sans-serif', // Appliquer aux boutons
    },
    caption: {
      fontFamily: '"Eina01-Bold", sans-serif', // Appliquer aux légendes
    },
    overline: {
      fontFamily: '"Eina01-Bold", sans-serif', // Appliquer aux surlignages
    },
  },
});

export default theme;
