import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";


import "./index.css"; // Importa TailwindCSS
import ChiSiamo from "./pages/ChiSiamo";
import Iscrizione from "./pages/Iscrizione";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import Edizioni from "./pages/Edizioni";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* La tua pagina principale (tutto quello che hai fatto finora) */}
        <Route path="/" element={<App />} />
        
        <Route path="/Edizioni" element={<Edizioni/>} />
        <Route path="/Chi-siamo" element={<ChiSiamo />} />
        <Route path="/Iscrizione" element={<Iscrizione />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Cookie" element={<Cookie />} />
      </Routes>
    </Router>
  </React.StrictMode>
);