import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaImages, FaStar, FaPlay, FaTimes, FaExpand } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

// Import degli assets
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
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState("all"); // "all", "images", "videos"

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtra i media in base alla selezione
  const filteredMedia = filter === "all" 
    ? galleryMedia 
    : galleryMedia.filter(m => m.type === (filter === "images" ? "image" : "video"));

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      
      {/* HEADER MODERNO */}
      <motion.header 
        className="bg-white/95 backdrop-blur-md shadow-md fixed top-0 w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-sacra-primary hover:text-sacra-hover transition-colors"
          >
            Pellegrinaggio <span className="text-gray-900 font-light">San Michele</span>
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-sacra-primary hover:bg-sacra-primary/5 rounded-full font-medium transition-all duration-300 group"
          >
            <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Torna alla Home</span>
          </Link>
        </div>
      </motion.header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-2xl shadow-2xl mb-8"
          >
            <FaImages className="text-4xl text-white" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sacra-primary via-sacra-accent to-amber-500">
              Galleria
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mt-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sacra-accent" />
            <FaStar className="text-sacra-accent text-xl animate-spin" style={{ animationDuration: '3s' }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sacra-accent" />
          </div>

          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            I momenti più belli, i paesaggi della Valle di Susa e le emozioni del cammino verso la{" "}
            <strong className="font-semibold text-sacra-primary">Sacra di San Michele</strong>.
          </p>
        </motion.div>

        {/* Filtri */}
        <motion.div 
          className="flex justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { id: "all", label: "Tutti", icon: FaImages },
            { id: "images", label: "Foto", icon: FaImages },
            { id: "videos", label: "Video", icon: FaPlay }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                filter === btn.id
                  ? "bg-sacra-primary text-white shadow-lg shadow-sacra-primary/20"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              <btn.icon className="text-sm" />
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* GRIGLIA FOTO E VIDEO */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredMedia.map((media, index) => (
            <motion.div 
              key={index} 
              variants={cardVariant}
              layout
              className="group cursor-pointer"
              onClick={() => setSelectedMedia(media)}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 aspect-square">
                
                {/* Overlay al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end justify-between p-6">
                  <div>
                    {media.type === "video" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-sacra-accent text-gray-900 text-xs font-bold rounded-full">
                        <FaPlay className="text-xs" /> Video
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FaExpand className="text-gray-700 text-sm" />
                  </motion.button>
                </div>

                {/* Barra gradiente superiore */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sacra-primary to-sacra-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20" />

                {/* Media */}
                {media.type === "video" ? (
                  <video
                    src={media.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={`Momento del pellegrinaggio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Messaggio se non ci sono risultati */}
        {filteredMedia.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">Nessun contenuto trovato per questo filtro.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-20 pt-10 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/iscrizione"
            className="inline-flex items-center gap-2 px-10 py-4 bg-sacra-accent text-gray-900 font-bold text-lg uppercase tracking-wide rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            Partecipa anche tu
          </Link>
        </motion.div>
      </main>

      {/* MODAL/LIGHTBOX */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setSelectedMedia(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="text-xl" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  className="w-full h-full max-h-[90vh] object-contain rounded-2xl"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt="Anteprima"
                  className="w-full h-full max-h-[90vh] object-contain rounded-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Galleria;