import React from "react";
import { FaMapMarkerAlt, FaHiking, FaSuitcase, FaTrain, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { scrollToElement } from "../utils/scrollUtils";

const Activities = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const cardFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const pathCoordinates = [
    [45.1106, 7.3419], // Avigliana
    [45.0976, 7.3428], // Sacra di San Michele
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Sezione Percorso */}
      <div id="Percorso" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-sacra-primary">
            Il percorso del pellegrinaggio
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mt-4 max-w-3xl mx-auto">
            Un cammino di <strong className="font-semibold text-gray-900">14 km</strong> da Avigliana alla Sacra di San Michele, con <strong className="font-semibold text-gray-900">600 metri di dislivello</strong>, immersi nella natura e nella spiritualità della Valle di Susa.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.div className="w-full lg:w-1/2" variants={cardFadeIn}>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <MapContainer
                center={[45.1041, 7.3423]}
                zoom={13}
                className="h-[400px] w-full"
                aria-label="Mappa del percorso da Avigliana alla Sacra di San Michele"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Polyline pathOptions={{ color: "#800020", weight: 4 }} positions={pathCoordinates} />
              </MapContainer>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/2" variants={cardFadeIn}>
            <h3 className="text-3xl font-bold mb-6 flex items-center text-sacra-primary border-b border-gray-200 pb-4">
              <FaMapMarkerAlt className="mr-3 text-sacra-accent" />
              Dettagli Tecnici
            </h3>
            <ul className="space-y-5 text-gray-700 text-lg">
              <li className="flex items-center">
                <FaHiking className="mr-4 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Distanza:</strong> 14 km (solo andata)</span>
              </li>
              <li className="flex items-center">
                <FaHiking className="mr-4 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Dislivello:</strong> 620 metri</span>
              </li>
              <li className="flex items-center">
                <FaCalendarAlt className="mr-4 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Durata:</strong> Circa 4-5 ore</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-4 mt-1 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Partenza:</strong> Santuario Madonna dei Laghi</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-4 mt-1 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Arrivo:</strong> Sacra di San Michele</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Sezione Logistica */}
      <div id="Logistica" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-sacra-primary">
            Logistica e Preparazione
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardFadeIn}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-sacra-primary/10 rounded-lg mr-4">
                <FaSuitcase className="text-2xl text-sacra-primary" />
              </div>
              <h3 className="text-2xl font-bold text-sacra-primary">Cosa Portare</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-lg">
              {["Scarpe da trekking comode e robuste", "Borraccia d’acqua (minimo 1 litro)", "Snack energetici (frutta secca, barrette)", "Giacca impermeabile o poncho", "Cappello o bandana per il sole", "Zaino leggero (15-20 litri)", "Rosario o oggetti devozionali (opzionale)"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-sacra-accent text-xl font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardFadeIn}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-sacra-primary/10 rounded-lg mr-4">
                <FaTrain className="text-2xl text-sacra-primary" />
              </div>
              <h3 className="text-2xl font-bold text-sacra-primary">Come Arrivare</h3>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p><strong className="text-gray-900">Treno:</strong> Da Torino Porta Nuova ad Avigliana (30 minuti). Ritrovo: Stazione di Avigliana, ore 8:00.</p>
              <p><strong className="text-gray-900">Auto:</strong> Parcheggio disponibile presso il centro di Avigliana. Navette gratuite per il ritorno dalla Sacra.</p>
              <div className="bg-yellow-50 border-l-4 border-sacra-accent p-4 mt-4 text-sm text-gray-800">
                <strong>Consiglio:</strong> Arriva con anticipo per il check-in e la distribuzione delle mappe del percorso.
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <a
            href="#Iscrizione"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("Iscrizione");
            }}
            className="inline-block px-10 py-4 bg-sacra-accent text-gray-900 font-bold text-lg uppercase tracking-wide rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-sacra-accent/50"
          >
            Iscriviti al Pellegrinaggio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;