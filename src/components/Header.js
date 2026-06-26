// File: src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "../utils/scrollUtils";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Fede e Sentiero", link: "Storia" },
    { name: "Percorso & Logistica", link: "Percorso" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (window.location.pathname !== "/") {
      // Se siamo in un'altra pagina, naviga alla home e poi scrolla
      navigate(`/#${id}`);
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    } else {
      // Se siamo nella home, scrolla direttamente
      scrollToElement(id);
      
      // Attiva la tab percorso se siamo su Percorso & Logistica
      if (id === "Percorso" && window.changeActivityTab) {
        window.changeActivityTab('percorso');
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              navigate("/#top");
            } else {
              scrollToElement("top");
            }
          }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-sacra-primary hover:text-sacra-hover transition-colors"
        >
          Pellegrinaggio <span className="text-gray-900 font-light">San Michele</span>
        </a>

        {/* Navigazione Desktop */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.link}`}
              onClick={(e) => handleNavClick(e, item.link)}
              className="text-gray-700 hover:text-sacra-primary text-sm lg:text-base font-medium transition-colors duration-300 relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sacra-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <Link
            to="/galleria"
            className="text-gray-700 hover:text-sacra-primary text-sm lg:text-base font-medium transition-colors duration-300 relative group py-2"
          >
            Galleria
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sacra-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/chi-siamo"
            className="text-gray-700 hover:text-sacra-primary text-sm lg:text-base font-medium transition-colors duration-300 relative group py-2"
          >
            Chi Siamo
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sacra-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/iscrizione"
            className="px-5 lg:px-6 py-2.5 bg-sacra-accent text-gray-900 font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Iscriviti
          </Link>
        </nav>

        {/* Hamburger Mobile */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-sacra-primary hover:text-sacra-hover focus:outline-none transition-colors"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes className="text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars className="text-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Navigazione Mobile MODERNA */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sfondo con gradient e blur */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/98 to-white/95 backdrop-blur-xl" />
            
            {/* Elementi decorativi */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-sacra-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-sacra-primary/5 rounded-full blur-3xl" />

            {/* Contenuto */}
            <div className="relative z-10 flex flex-col items-center justify-start min-h-full px-6 pt-12 pb-8">
              
              {/* Menu Links */}
              <nav className="w-full max-w-sm space-y-2 mb-8">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.link}`}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-sacra-primary/5 border border-gray-100 hover:border-sacra-primary/20 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-sacra-primary transition-colors">
                      {item.name}
                    </span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-sacra-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}

                {/* Galleria Link */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/galleria"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-sacra-primary/5 border border-gray-100 hover:border-sacra-primary/20 transition-all duration-300 group"
                  >
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-sacra-primary transition-colors">
                      Galleria
                    </span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-sacra-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>

                {/* Chi Siamo Link */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/chi-siamo"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-sacra-primary/5 border border-gray-100 hover:border-sacra-primary/20 transition-all duration-300 group"
                  >
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-sacra-primary transition-colors">
                      Chi Siamo
                    </span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-sacra-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-sm mb-8"
              >
                <Link
                  to="/iscrizione"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-4 bg-gradient-to-r from-sacra-accent to-amber-500 text-gray-900 font-bold text-lg uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl text-center transition-all duration-300"
                >
                  Iscriviti al Pellegrinaggio
                </Link>
              </motion.div>

              {/* Divider */}
              <div className="w-full max-w-sm flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300" />
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Social</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300" />
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <a
                  href="https://www.instagram.com/pellegrinaggiosanmichele/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="mailto:pellegrinaggiosacrasanmichele@gmail.com"
                  className="w-12 h-12 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </motion.div>

              {/* Footer info */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-auto pt-8 text-xs text-gray-400 text-center"
              >
                © {new Date().getFullYear()} Pellegrinaggio San Michele
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;