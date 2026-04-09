import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaChurch } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollToElement } from "../utils/scrollUtils";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer
      id="Contatti"
      className="w-full bg-gray-900 text-white pt-16 pb-8 border-t-4 border-sacra-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Sezione CTA (Box Evidenziato) */}
        <motion.div
          className="text-center bg-gray-800 rounded-3xl p-8 sm:p-12 mb-16 border border-gray-700 shadow-2xl relative overflow-hidden"
          variants={itemFadeIn}
        >
          {/* Elemento decorativo */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sacra-primary via-sacra-accent to-sacra-primary"></div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Unisciti al Pellegrinaggio
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Contattaci per ricevere informazioni sulla prossima partenza verso la Sacra di San Michele o per partecipare come volontario.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="mailto:info@pellegrinaggiosacra.it?subject=Informazioni Pellegrinaggio"
              className="inline-flex justify-center items-center px-8 py-3 bg-transparent border-2 border-white text-white font-bold text-base uppercase tracking-wide rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              variants={itemFadeIn}
            >
              <FaEnvelope className="mr-2" />
              Inviaci un'email
            </motion.a>
            <motion.a
              href="#Iscrizione"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("Iscrizione");
              }}
              className="inline-flex justify-center items-center px-8 py-3 bg-sacra-accent text-gray-900 font-bold text-base uppercase tracking-wide rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              variants={itemFadeIn}
            >
              Iscriviti Ora
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Bottom: Links e Contatti */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left border-t border-gray-800 pt-10"
          variants={fadeIn}
        >
          {/* Colonna 1: Logo/Nome */}
          <motion.div variants={itemFadeIn}>
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start text-sacra-accent">
              <FaChurch className="mr-3" />
              Pellegrinaggio Sacra San Michele
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Il cammino storico dalla città di Avigliana all'Abbazia millenaria della Valle di Susa. Un'esperienza di fede e natura.
            </p>
          </motion.div>

          {/* Colonna 2: Social */}
          <motion.div variants={itemFadeIn} className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider text-sm">Resta Connesso</h4>
            <div className="space-y-3">
              <a href="https://www.instagram.com/pellegrinaggiosanmichele/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-sacra-accent transition-colors duration-300">
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-500 pb-4">
          © {new Date().getFullYear()} Pellegrinaggio Sacra di San Michele. Tutti i diritti riservati.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;