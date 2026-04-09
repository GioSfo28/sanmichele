import React from "react";
import { motion } from "framer-motion";
import PellegrinaggioLogo from "../assets/Sacra.jpg";
import { scrollToElement } from "../utils/scrollUtils";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
  };

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden"
      id="top"
    >
      {/* Sfondo ottimizzato */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${PellegrinaggioLogo})` }}
      />
      {/* Overlay gradiente per far risaltare meglio i testi (tipico dei siti istituzionali) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Contenuto */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto mt-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-tight text-sacra-accent"
          variants={fadeIn}
        >
          Sulle orme dell'Arcangelo
        </motion.h1>

        <motion.p
          className="mt-6 text-xl sm:text-2xl text-gray-200 font-light leading-relaxed"
          variants={fadeIn}
        >
          Il tuo pellegrinaggio da Avigliana alla maestosa <strong className="font-semibold text-white">Sacra di San Michele</strong>.
        </motion.p>

        <motion.div variants={fadeIn} className="mt-8 flex flex-col items-center gap-2">
          <span className="px-4 py-1 bg-sacra-primary/80 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-widest text-sacra-accent border border-sacra-accent/30">
            14 KM • 620m Dislivello
          </span>
        </motion.div>

        <motion.p
          className="mt-6 text-lg text-gray-300 italic font-medium max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Unisciti al cammino che congiunge la Valle di Susa al sacro allineamento micaelico.
        </motion.p>

        <motion.a
          href="#Iscrizione"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("Iscrizione");
          }}
          className="mt-10 inline-block px-10 py-4 bg-sacra-primary text-white font-bold text-lg uppercase tracking-wide rounded-full shadow-2xl hover:bg-sacra-hover transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-sacra-primary/50"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Scopri le Prossime Partenze
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;