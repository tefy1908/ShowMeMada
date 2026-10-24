import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    // Vert de la marque : couleur par défaut des boutons, champs, curseurs...
    primary: {
      main: "#63AB45",
      dark: "#4a8533",
      contrastText: "#fff",
    },
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
    // Chaque variant hérite de la pile de polices ci-dessus (avec ses polices de secours)
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none', // Empêche la transformation en majuscules
    },
  },
});

export default theme;
