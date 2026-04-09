import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "../utils/scrollUtils"; // Utility esterna
import { Link } from "react-router-dom"; // <-- IMPORTANTE: Importiamo Link dal router

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "La Sacra & Storia", link: "Storia" },
    { name: "Il Percorso", link: "Percorso" },
    { name: "Logistica Pratica", link: "Logistica" },
  ];

  // Blocca lo scroll quando il menu mobile è aperto
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToElement(id);
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="bg-white/95 backdrop-blur-md shadow-md fixed top-0 w-full z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "top")}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-sacra-primary"
        >
          Pellegrinaggio <span className="text-gray-900 font-light">San Michele</span>
        </a>

        {/* Navigazione Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.link}`}
              onClick={(e) => handleNavClick(e, item.link)}
              className="text-gray-700 hover:text-sacra-primary text-lg font-medium transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sacra-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* --- NUOVO LINK ALLA GALLERIA (DESKTOP) --- */}
          <Link
            to="/galleria"
            className="text-gray-700 hover:text-sacra-primary text-lg font-medium transition-colors duration-300 relative group"
          >
            Galleria
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sacra-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <a
            href="#Iscrizione"
            onClick={(e) => handleNavClick(e, "Iscrizione")}
            className="px-6 py-2 bg-sacra-accent text-gray-900 font-bold text-sm uppercase tracking-wider rounded-full shadow hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Iscriviti
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sacra-primary focus:outline-none p-2"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Navigazione Mobile con AnimatePresence per uscite fluide */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white flex flex-col items-center justify-start pt-12 space-y-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.link}`}
                onClick={(e) => handleNavClick(e, item.link)}
                className="text-gray-900 text-2xl font-medium hover:text-sacra-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}

            {/* --- NUOVO LINK ALLA GALLERIA (MOBILE) --- */}
            <Link
              to="/galleria"
              onClick={() => setMenuOpen(false)} // Chiude il menu dopo il click
              className="text-gray-900 text-2xl font-medium hover:text-sacra-primary transition-colors duration-300"
            >
              Galleria
            </Link>

            <a
              href="#Iscrizione"
              onClick={(e) => handleNavClick(e, "Iscrizione")}
              className="px-8 py-4 mt-4 bg-sacra-accent text-gray-900 font-bold text-lg uppercase rounded-full shadow-md"
            >
              Iscriviti
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;