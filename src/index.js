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
import Tours from "./Views/Tours";
import Destinations from "./Views/Destinations";
import Services from "./Views/Services";
import Layout from "./Components/Layout";
// Composant de chargement pendant l'initialisation des traductions
const Loading = () => <div>Loading...</div>;

// Définir le composant App AVANT de l'utiliser
function App() {
  return (
    <Router>
      <Layout>
      <Routes>
         <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>Page non trouvée</div>} />
      </Routes>
      </Layout>
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