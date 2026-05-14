import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import delle immagini specifiche per PC e Mobile
import imgPC from "../assets/4.jpeg";
import imgMobile from "../assets/7.jpeg";
// Import del Logo
import logoSacra from "../assets/SanMichele.png";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    },
  };

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden"
      id="top"
    >
      {/* SFONDO PER PC (Visibile da tablet in su) */}
      <div 
        className="absolute inset-0 z-0 hidden md:block bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${imgPC})` }}
      />

      {/* SFONDO PER MOBILE (Visibile solo su smartphone) */}
      <div 
        className="absolute inset-0 z-0 block md:hidden bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${imgMobile})` }}
      />

      {/* Overlay gradiente - leggermente più scuro per leggere meglio su foto diverse */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* Contenuto */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto mt-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* LOGO INGRANDITO SU MOBILE */}
        <motion.img
          src={logoSacra}
          alt="Logo Pellegrinaggio San Michele"
          variants={fadeIn}
          className="w-48 sm:w-56 md:w-72 h-auto mx-auto mb-2 drop-shadow-2xl object-contain"
        />

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl leading-tight text-sacra-accent"
          variants={fadeIn}
        >
          Pellegrinaggio <br className="md:hidden" /> di San Michele
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 font-light leading-relaxed px-2"
          variants={fadeIn}
        >
          Il pellegrinaggio dei giovani da Avigliana alla maestosa <strong className="font-semibold text-white">Sacra di San Michele</strong>.
        </motion.p>

        <motion.div variants={fadeIn} className="mt-8 flex flex-col items-center gap-2">
          <span className="px-5 py-1.5 bg-sacra-primary/80 backdrop-blur-md rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-sacra-accent border border-sacra-accent/30">
            14 KM • 620m Dislivello
          </span>
        </motion.div>

        <motion.p
          className="mt-6 text-base sm:text-lg text-gray-300 italic font-medium max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Unisciti al cammino che congiunge la Valle di Susa al sacro allineamento micaelico.
        </motion.p>

        {/* Bottone con Link React Router */}
        <motion.div 
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block"
        >
          <Link
            to="/iscrizione"
            className="inline-block px-8 sm:px-10 py-4 bg-sacra-primary text-white font-bold text-base sm:text-lg uppercase tracking-wide rounded-full shadow-2xl hover:bg-sacra-hover transition-all duration-300 focus:ring-4 focus:ring-sacra-primary/50"
          >
            Scopri la data e iscriviti
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;