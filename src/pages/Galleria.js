import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// --- IMPORTA IL FOOTER COMUNE ---
// Aggiusta il percorso "../components/Footer" in base a dove hai salvato il file
import Footer from "../components/Footer"; 

// --- IMPORT DEI TUOI ASSETS LOCALI ---
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpeg";
import vid3 from "../assets/3.mp4";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";

const galleryMedia = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "video", src: vid3 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 }
];

const Galleria = () => {
  // Questo useEffect assicura che quando apri la pagina, parta dall'alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* HEADER SEMPLIFICATO (Solo per la pagina Galleria) */}
      <header className="bg-white/95 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Cliccando sul logo si torna alla home */}
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#800020]">
            Pellegrinaggio <span className="text-gray-900 font-light">San Michele</span>
          </Link>
          
          {/* Pulsante Torna alla Home */}
          <Link 
            to="/" 
            className="flex items-center text-gray-700 hover:text-[#800020] font-medium transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            <span className="hidden sm:inline">Torna alla Home</span>
          </Link>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={itemFadeIn}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#800020] mb-4">
            Galleria Fotografica
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            I momenti più belli, i paesaggi della Valle di Susa e le emozioni del cammino verso la Sacra di San Michele.
          </p>
        </motion.div>

        {/* GRIGLIA FOTO E VIDEO */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerFadeIn}
        >
          {galleryMedia.map((media, index) => (
            <motion.div 
              key={index} 
              className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 group aspect-square relative"
              variants={itemFadeIn}
            >
              {media.type === "video" ? (
                // Video player con controlli
                <video
                  src={media.src}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
              ) : (
                // Immagini con effetto zoom
                <img
                  src={media.src}
                  alt={`Momento del pellegrinaggio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* FOOTER CONDIVISO */}
      <Footer />
    </div>
  );
};

export default Galleria;