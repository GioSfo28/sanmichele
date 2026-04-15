import React from "react";
import { FaMapMarkerAlt, FaHiking, FaSuitcase, FaTrain, FaCalendarAlt, FaExternalLinkAlt, FaImages, FaUtensils, FaChurch, FaHeartbeat, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import routeData from "../data/routeCoordinates.json";
import { Link } from "react-router-dom";

// --- IMPORT SWIPER PER LA GALLERIA ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// --- IMPORT DEI TUOI ASSETS LOCALI ---
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpeg";
import vid3 from "../assets/3.mp4";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";

// --- IMPORT PDF AUTOBUS ---
import autobusPdf from "../assets/Autobus.pdf";

// --- CREAZIONE ICONE PERSONALIZZATE ---
const startIcon = new L.divIcon({
  className: "bg-transparent border-none",
  html: `<div style="background-color: #688e26; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; justify-content: center; align-items: center; font-weight: bold; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); font-size: 14px;">A</div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

const endIcon = new L.divIcon({
  className: "bg-transparent border-none",
  html: `<div style="background-color: #800020; color: white; border-radius: 50%; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 18px; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">🏁</div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18]
});

// --- STRUTTURA DELLA GALLERIA ---
const galleryMedia = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "video", src: vid3 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 }
];

const Activities = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const cardFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

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
            Un cammino di <strong className="font-semibold text-gray-900">14 km</strong> da Avigliana alla Sacra di San Michele, con <strong className="font-semibold text-gray-900">620 metri di dislivello</strong>, immersi nella natura e nella spiritualità della Valle di Susa.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.div className="w-full lg:w-1/2 flex flex-col gap-4" variants={cardFadeIn}>
            {/* Contenitore Mappa */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white relative z-0">
              <MapContainer
                center={[45.1041, 7.3423]}
                zoom={13}
                className="h-[400px] w-full"
                aria-label="Mappa del percorso da Avigliana alla Sacra di San Michele"
              >
                <TileLayer
                  url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
                />
                <GeoJSON
                  data={routeData}
                  style={{ color: "#800020", weight: 5, lineCap: "round" }}
                />
                <Marker position={[45.069498, 7.392144]} icon={startIcon}>
                  <Popup>
                    <strong className="text-[#688e26]">Partenza</strong><br />
                    Santuario Madonna dei Laghi
                  </Popup>
                </Marker>
                <Marker position={[45.0976, 7.3428]} icon={endIcon}>
                  <Popup>
                    <strong className="text-[#800020]">Arrivo</strong><br />
                    Sacra di San Michele
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Bottone KOMOOT */}
            <div className="flex justify-end">
              <a
                href="https://www.komoot.com/tour/2584007841?ref=aso&share_token=aTVPA7OgSZKhuFeq8UoBfDW3ihSHB4dIpGVL5CRVdypKTAUYMG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9fb53a] text-white font-bold rounded-xl shadow-md hover:bg-[#8da32f] transition-colors duration-300"
              >
                <FaMapMarkerAlt /> Guarda su Komoot <FaExternalLinkAlt className="text-sm ml-1" />
              </a>
            </div>
          </motion.div>

          {/* Dettagli Tecnici */}
          <motion.div className="w-full lg:w-1/2" variants={cardFadeIn}>
            <h3 className="text-3xl font-bold mb-6 flex items-center text-sacra-primary border-b border-gray-200 pb-4">
              <FaMapMarkerAlt className="mr-3 text-sacra-accent" />
              Dettagli tecnici
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
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
                <span><strong className="text-gray-900">Durata:</strong> 4-5 ore di camminata (in base al passo)</span>
              </li>
              <li className="flex items-start">
                <FaUtensils className="mr-4 mt-1 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Pausa:</strong> Prevista pausa con pranzo al sacco.</span>
              </li>
              <li className="flex items-start border-t border-gray-100 pt-4 mt-2">
                <FaMapMarkerAlt className="mr-4 mt-1 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Partenza:</strong> Santuario Madonna dei Laghi ore 10:00</span>
              </li>
              <li className="flex items-start">
                <FaChurch className="mr-4 mt-1 text-2xl text-sacra-secondary shrink-0" />
                <span><strong className="text-gray-900">Arrivo:</strong> Sacra di San Michele. Previsto per la S. Messa delle ore 16:00/17:00.</span>
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
            Logistica e preparazione
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box Cosa Portare */}
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
                <h3 className="text-2xl font-bold text-sacra-primary">Cosa portare</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-lg">
                {["Scarpe da trekking comode e robuste", "Pranzo al sacco e borraccia (minimo 1 litro)", "Snack energetici (frutta secca, barrette)", "Giacca impermeabile o poncho", "Cappello o bandana per il sole", "Zaino leggero (15-20 litri)", "Rosario o oggetti devozionali (opzionale)"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 text-sacra-accent text-xl font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box Come Arrivare */}
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
                <h3 className="text-2xl font-bold text-sacra-primary">Come arrivare</h3>
              </div>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-gray-900">Treno:</strong> da Torino Porta Nuova ad Avigliana (30 minuti).
                  <br /> Ritrovo: Santuario Madonna dei Laghi ore 10:00
                </p>
                <p>
                  <strong className="text-gray-900">Autobus per il Santuario:</strong> se arrivi in treno, dalla stazione di Avigliana è possibile prendere il pullman alle ore 9:00 che porta direttamente al Santuario di partenza.
                </p>
                
                {/* BOTTONE PDF AUTOBUS */}
                <a 
                  href={autobusPdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-5 py-2 bg-gray-100 text-[#800020] font-semibold rounded-lg hover:bg-gray-200 transition-colors border border-gray-200 text-sm"
                >
                  <FaFilePdf className="text-red-600" />
                  Scarica Orari Autobus (PDF)
                </a>

                <p className="mt-4"><strong className="text-gray-900">Auto:</strong> parcheggio disponibile presso il Santuario.</p>
                <div className="bg-yellow-50 border-l-4 border-sacra-accent p-4 mt-4 text-sm text-gray-800 rounded-lg">
                  <strong>Consiglio:</strong> arriva con anticipo per il check-in e la distribuzione delle mappe del percorso.
                </div>
              </div>
            </motion.div>
          </div>

          {/* BLOCCO Preparazione Fisica */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardFadeIn}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-sacra-primary/10 rounded-lg mr-4">
                <FaHeartbeat className="text-2xl text-sacra-primary" />
              </div>
              <h3 className="text-2xl font-bold text-sacra-primary">Preparazione fisica</h3>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Il cammino è aperto a tutti, ma <strong className="text-gray-900">14 km e oltre 600 metri di dislivello richiedono un po' di allenamento base</strong> per chi non fa attività sportiva. Arrivare preparati vi farà godere appieno l'esperienza spirituale senza soffrire troppo la fatica!
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Nelle 2 settimane precedenti ti consigliamo di:</h4>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="mr-3 text-sacra-secondary text-xl font-bold">1.</span> 
                  <span><strong>Fare 4 uscite a passo svelto:</strong> non serve correre, bastano un paio di camminate a settimana da circa 5-6 km per abituare le gambe.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-sacra-secondary text-xl font-bold">2.</span> 
                  <span><strong>Cercare un po' di salita:</strong> durante le tue camminate, fai qualche rampa di scale o un percorso in leggera pendenza per simulare il dislivello della montagna.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-sacra-secondary text-xl font-bold">3.</span> 
                  <span><strong>Usare le scarpe del pellegrinaggio:</strong> sfrutta queste uscite di prova per "rodare" le scarpe da trekking ed evitare la comparsa di fastidiose vesciche il giorno del cammino.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* --- SEZIONE GALLERIA PREVIEW --- */}
        <motion.div
          className="mt-24 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold flex items-center justify-center text-sacra-primary mb-4">
              <FaImages className="mr-3 text-sacra-accent" />
              I momenti del pellegrinaggio
            </h3>
            <p className="text-gray-600 text-lg">
              Scorri per un'anteprima delle edizioni passate!
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12 px-4"
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 15 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {galleryMedia.map((media, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 border border-gray-100 group bg-black">
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={`Momento del pellegrinaggio ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link
              to="/galleria"
              className="inline-block px-8 py-3 border-2 border-sacra-primary text-sacra-primary font-bold text-lg uppercase tracking-wide rounded-full shadow hover:bg-sacra-primary hover:text-white transition-all duration-300"
            >
              Guarda la galleria completa
            </Link>
          </div>
        </motion.div>

        {/* CTA Iscrizione Finale (AGGIORNATA CON REACT ROUTER) */}
        <motion.div
          className="text-center mt-20 pt-10 border-t border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Link
            to="/iscrizione"
            className="inline-block px-10 py-4 bg-sacra-accent text-gray-900 font-bold text-lg uppercase tracking-wide rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-sacra-accent/50"
          >
            Iscriviti al Pellegrinaggio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;