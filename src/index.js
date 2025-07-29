import ReactDOM from "react-dom/client";
import "./index.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Home from "./Views/Home";
import AboutUs from "./Views/AboutUs";
import Contact from "./Views/Contact";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme";
import "./i18n"; // Import de la configuration i18n

// Composant de chargement pendant l'initialisation des traductions
const Loading = () => <div>Loading...</div>;

// Définir le composant App AVANT de l'utiliser
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();