import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaArrowLeft, FaImages, FaStar, FaPlay, FaTimes, FaExpand,
  FaCalendarAlt, FaCamera, FaVideo, FaHourglassHalf, FaExternalLinkAlt
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

// ============ ASSETS EDIZIONE 2025 ============
import img2025_1 from "../assets/2025/1.jpg";
import img2025_2 from "../assets/2025/2.jpeg";
import vid2025_3 from "../assets/2025/3.mp4";
import img2025_4 from "../assets/2025/4.jpeg";
import img2025_5 from "../assets/2025/5.jpeg";
import img2025_6 from "../assets/2025/6.jpeg";
import img2025_7 from "../assets/2025/7.jpeg";

// ============ ASSETS EDIZIONE 2026 ============
// Foto
import img2026_1  from "../assets/2026/1.jpg";
import img2026_4  from "../assets/2026/4.jpg";
import img2026_5  from "../assets/2026/5.jpg";
import img2026_6  from "../assets/2026/6.jpg";
import img2026_7  from "../assets/2026/7.jpg";
import img2026_8  from "../assets/2026/8.jpg";
import img2026_9  from "../assets/2026/9.jpg";
import img2026_10 from "../assets/2026/10.jpg";
import img2026_12 from "../assets/2026/12.jpg";
import img2026_13 from "../assets/2026/13.jpg";
import img2026_14 from "../assets/2026/14.jpeg";
import img2026_15 from "../assets/2026/15.jpg";
import img2026_16 from "../assets/2026/16.jpg";
import img2026_17 from "../assets/2026/17.jpg";
import img2026_18 from "../assets/2026/18.jpg";
import img2026_19 from "../assets/2026/19.jpg";
import img2026_20 from "../assets/2026/20.jpg";
import img2026_21 from "../assets/2026/21.jpg";
import img2026_22 from "../assets/2026/22.jpg";
import img2026_23 from "../assets/2026/23.jpg";
import img2026_24 from "../assets/2026/24.jpeg";
import img2026_25 from "../assets/2026/25.jpeg";
import img2026_26 from "../assets/2026/26.jpeg";
import img2026_27 from "../assets/2026/27.jpeg";
import img2026_28 from "../assets/2026/28.jpeg";
import img2026_29 from "../assets/2026/29.jpeg";
import img2026_30 from "../assets/2026/30.jpeg";
import img2026_31 from "../assets/2026/31.jpeg";
import img2026_33 from "../assets/2026/33.jpeg";
import img2026_35 from "../assets/2026/35.jpeg";
import img2026_36 from "../assets/2026/36.jpeg";
import img2026_37 from "../assets/2026/37.jpeg";
import img2026_38 from "../assets/2026/38.jpeg";
import img2026_39 from "../assets/2026/39.jpeg";

// Video
import vid2026_2  from "../assets/2026/2.mp4";
import vid2026_3  from "../assets/2026/3.mp4";
import vid2026_11 from "../assets/2026/11.mp4";
import vid2026_32 from "../assets/2026/32.mp4";
import vid2026_34 from "../assets/2026/34.mp4";
import vid2026_40 from "../assets/2026/40.mp4";

// 📌 Link Drive (solo per il 2026)
const DRIVE_2026 = "https://drive.google.com/drive/folders/1XOFJjV8DuDegGTdAttglUCm5or5i7KgT?usp=drive_link";

// 📸 Struttura dati edizioni (ordine cronologico)
const edizioni = [
  {
    anno: "2025",
    titolo: "Edizione 2025",
    sottotitolo: "28 Settembre 2025 · Pellegrinaggio Sacra di San Michele",
    copertina: img2025_1,
    // ❌ Nessun driveUrl: le foto del 2025 sono solo quelle locali
    media: [
      { type: "image", src: img2025_1 },
      { type: "image", src: img2025_2 },
      { type: "video", src: vid2025_3 },
      { type: "image", src: img2025_4 },
      { type: "image", src: img2025_5 },
      { type: "image", src: img2025_6 },
      { type: "image", src: img2025_7 },
    ],
  },
  {
    anno: "2026",
    titolo: "Edizione 2026",
    sottotitolo: "27 Settembre 2026 · Pellegrinaggio Sacra di San Michele",
    copertina: img2026_1,
    driveUrl: DRIVE_2026, // ✅ Solo il 2026 ha il link Drive
    media: [
      { type: "image", src: img2026_1 },
      { type: "video", src: vid2026_2 },
      { type: "video", src: vid2026_3 },
      { type: "image", src: img2026_4 },
      { type: "image", src: img2026_5 },
      { type: "image", src: img2026_6 },
      { type: "image", src: img2026_7 },
      { type: "image", src: img2026_8 },
      { type: "image", src: img2026_9 },
      { type: "image", src: img2026_10 },
      { type: "video", src: vid2026_11 },
      { type: "image", src: img2026_12 },
      { type: "image", src: img2026_13 },
      { type: "image", src: img2026_14 },
      { type: "image", src: img2026_15 },
      { type: "image", src: img2026_16 },
      { type: "image", src: img2026_17 },
      { type: "image", src: img2026_18 },
      { type: "image", src: img2026_19 },
      { type: "image", src: img2026_20 },
      { type: "image", src: img2026_21 },
      { type: "image", src: img2026_22 },
      { type: "image", src: img2026_23 },
      { type: "image", src: img2026_24 },
      { type: "image", src: img2026_25 },
      { type: "image", src: img2026_26 },
      { type: "image", src: img2026_27 },
      { type: "image", src: img2026_28 },
      { type: "image", src: img2026_29 },
      { type: "image", src: img2026_30 },
      { type: "image", src: img2026_31 },
      { type: "video", src: vid2026_32 },
      { type: "image", src: img2026_33 },
      { type: "video", src: vid2026_34 },
      { type: "image", src: img2026_35 },
      { type: "image", src: img2026_36 },
      { type: "image", src: img2026_37 },
      { type: "image", src: img2026_38 },
      { type: "image", src: img2026_39 },
      { type: "video", src: vid2026_40 },
    ],
  },
  {
    anno: "2027",
    titolo: "Edizione 2027",
    sottotitolo: "25/26 Settembre 2027 · In preparazione",
    copertina: null,
    media: [],
    comingSoon: true,
  },
];

const Edizioni = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [searchParams] = useSearchParams();

  // Anno di default: 2026 (quello con le novità)
  const [activeYear, setActiveYear] = useState("2026");
  const [filter, setFilter] = useState("all"); // "all", "images", "videos"

  // Legge ?anno=YYYY dall'URL se presente
  useEffect(() => {
    const annoParam = searchParams.get("anno");
    if (annoParam && edizioni.some((e) => e.anno === annoParam)) {
      setActiveYear(annoParam);
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Edizione attiva
  const currentEdition = edizioni.find((e) => e.anno === activeYear);

  // Filtra i media in base alla selezione
  const filteredMedia =
    filter === "all"
      ? currentEdition.media
      : currentEdition.media.filter(
          (m) => m.type === (filter === "images" ? "image" : "video")
        );

  // Conta foto e video per i filtri
  const countImages = currentEdition.media.filter((m) => m.type === "image").length;
  const countVideos = currentEdition.media.filter((m) => m.type === "video").length;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const filterButtons = [
    { id: "all", label: "Tutti", icon: FaImages, count: currentEdition.media.length },
    { id: "images", label: "Foto", icon: FaCamera, count: countImages },
    { id: "videos", label: "Video", icon: FaVideo, count: countVideos },
  ];

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
          className="text-center mb-12"
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
              Edizioni
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sacra-accent" />
            <FaStar className="text-sacra-accent text-xl animate-spin" style={{ animationDuration: "3s" }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sacra-accent" />
          </div>

          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Rivivi i momenti più belli di ogni edizione del Pellegrinaggio verso la{" "}
            <strong className="font-semibold text-sacra-primary">Sacra di San Michele</strong>.
            Foto e video raccolti anno per anno.
          </p>
        </motion.div>

        {/* TAB EDIZIONI */}
        <motion.div
          className="flex justify-center gap-3 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {edizioni.map((ed) => {
            const isActive = activeYear === ed.anno;
            const isComingSoon = ed.comingSoon;
            return (
              <button
                key={ed.anno}
                onClick={() => {
                  setActiveYear(ed.anno);
                  setFilter("all");
                }}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-sacra-primary text-white shadow-lg shadow-sacra-primary/20 scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg"
                }`}
              >
                {isComingSoon ? (
                  <FaHourglassHalf className="text-sm" />
                ) : (
                  <FaCalendarAlt className="text-sm" />
                )}
                <span>{ed.anno}</span>
                {isComingSoon && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-sacra-accent text-gray-900 text-[10px] font-black rounded-full">
                    2027
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* HEADER EDIZIONE ATTIVA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
              {currentEdition.titolo}
            </h2>
            <p className="text-gray-500 text-lg">{currentEdition.sottotitolo}</p>

            {/* 📌 Link al Drive (mostrato solo se l'edizione lo ha) */}
            {currentEdition.driveUrl && (
              <a
                href={currentEdition.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-white border-2 border-sacra-primary/20 text-sacra-primary font-bold text-sm rounded-full hover:bg-sacra-primary/5 hover:border-sacra-primary/40 transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-xs" />
                Apri cartella completa su Google Drive
              </a>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Se l'edizione è comingSoon o vuota */}
        {currentEdition.comingSoon ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-16 px-8 bg-gradient-to-br from-sacra-primary/5 to-sacra-accent/5 border-2 border-dashed border-sacra-accent/40 rounded-3xl"
          >
            <div className="w-20 h-20 bg-sacra-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaHourglassHalf className="text-4xl text-sacra-accent" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Edizione in preparazione
            </h3>
            <p className="text-gray-600 mb-6">
              Stiamo lavorando all'edizione 2027! Le foto e i video saranno
              disponibili dopo l'evento del <strong>25/26 settembre 2027</strong>.
            </p>
            <Link
              to="/iscrizione"
              className="inline-flex items-center gap-2 px-8 py-3 bg-sacra-primary text-white font-bold rounded-full hover:bg-sacra-hover transition-all"
            >
              Rimani aggiornato
            </Link>
          </motion.div>
        ) : currentEdition.media.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-16 px-8 bg-white border-2 border-dashed border-gray-200 rounded-3xl"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCamera className="text-4xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Foto in arrivo
            </h3>
            <p className="text-gray-600">
              I contenuti di questa edizione saranno caricati a breve. Torna a
              trovarci!
            </p>
          </motion.div>
        ) : (
          <>
            {/* Filtri */}
            <motion.div
              className="flex justify-center gap-3 mb-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {filterButtons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  disabled={btn.count === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    filter === btn.id
                      ? "bg-sacra-accent text-gray-900 shadow-lg shadow-sacra-accent/20"
                      : btn.count === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                  }`}
                >
                  <btn.icon className="text-sm" />
                  {btn.label}
                  <span
                    className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                      filter === btn.id
                        ? "bg-gray-900/10 text-gray-900"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {btn.count}
                  </span>
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
              <AnimatePresence mode="popLayout">
                {filteredMedia.map((media, index) => (
                  <motion.div
                    key={`${activeYear}-${index}`}
                    variants={cardVariant}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
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

                      {/* Badge anno */}
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-black text-sacra-primary shadow-md">
                        {activeYear}
                      </div>

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
                          alt={`Momento del pellegrinaggio ${activeYear} - ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Messaggio se non ci sono risultati per il filtro */}
            {filteredMedia.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-400 text-xl">
                  Nessun contenuto trovato per questo filtro.
                </p>
              </motion.div>
            )}
          </>
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
            {currentEdition.comingSoon ? "Rimani aggiornato" : "Partecipa anche tu"}
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

            {/* Badge anno nel lightbox */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-bold z-10">
              Edizione {activeYear}
            </div>

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

export default Edizioni;