import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaHiking,
  FaSuitcase,
  FaTrain,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMountain,
  FaImages,
  FaUtensils,
  FaChurch,
  FaHeartbeat,
  FaFilePdf,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import routeData from "../data/routeCoordinates.json";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpeg";
import vid3 from "../assets/3.mp4";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import autobusPdf from "../assets/Autobus.pdf";

// Componente per forzare il resize della mappa
const MapResizer = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    const handleResize = () => {
      map.invalidateSize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [map]);

  return null;
};

const startIcon = new L.divIcon({
  className: "bg-transparent border-none",
  html: `<div style="background: linear-gradient(135deg, #688e26, #4a6e1a); color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; font-weight: bold; border: 3px solid white; box-shadow: 0 8px 16px rgba(0,0,0,0.3); font-size: 16px; animation: pulse 2s infinite;">A</div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

const endIcon = new L.divIcon({
  className: "bg-transparent border-none",
  html: `<div style="background: linear-gradient(135deg, #800020, #600018); color: white; border-radius: 50%; width: 44px; height: 44px; display: flex; justify-content: center; align-items: center; font-size: 20px; border: 3px solid white; box-shadow: 0 8px 16px rgba(0,0,0,0.3); animation: pulse 2s infinite;">🏁</div>`,
  iconSize: [44, 44],
  iconAnchor: [22, 22],
  popupAnchor: [0, -22],
});

const galleryMedia = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "video", src: vid3 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
];

const Activities = () => {
  useEffect(() => {
    // Rimuoviamo il riferimento globale se ancora presente
    if (window.changeActivityTab) {
      delete window.changeActivityTab;
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white" id="Percorso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ========== PERCORSO ========== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-sacra-primary">
              Il percorso del pellegrinaggio
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mt-4 max-w-3xl mx-auto">
              Un cammino di{" "}
              <strong className="font-semibold text-gray-900">14 km</strong> da
              Avigliana alla Sacra di San Michele, con{" "}
              <strong className="font-semibold text-gray-900">
                620 metri di dislivello
              </strong>
              .
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Mappa */}
            <div className="flex flex-col">
              <div
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white map-wrapper"
                style={{
                  height: "500px",
                  width: "100%",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <MapContainer
                  center={[45.085, 7.367]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={true}
                  zoomControl={true}
                >
                  <MapResizer />
                  <TileLayer
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
                  />
                  <GeoJSON
                    data={routeData}
                    style={{
                      color: "#800020",
                      weight: 6,
                      lineCap: "round",
                      opacity: 0.9,
                      dashArray: "10, 10",
                    }}
                  />
                  <Marker position={[45.069498, 7.392144]} icon={startIcon}>
                    <Popup>
                      <div className="text-center">
                        <strong className="text-[#688e26] text-lg">
                          ✦ Partenza
                        </strong>
                        <br />
                        Santuario Madonna dei Laghi
                        <br />
                        <span className="text-sm text-gray-500">Ore 9:30</span>
                      </div>
                    </Popup>
                  </Marker>
                  <Marker position={[45.0976, 7.3428]} icon={endIcon}>
                    <Popup>
                      <div className="text-center">
                        <strong className="text-[#800020] text-lg">
                          ✦ Arrivo
                        </strong>
                        <br />
                        Sacra di San Michele
                        <br />
                        <span className="text-sm text-gray-500">
                          S. Messa ore 17:00
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              <div className="flex justify-end mt-3">
                <a
                  href="https://www.komoot.com/tour/2584007841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9fb53a] text-white font-bold rounded-xl shadow-md hover:bg-[#8da32f] transition-colors duration-300"
                >
                  <FaMapMarkerAlt /> Guarda su Komoot{" "}
                  <FaExternalLinkAlt className="text-sm ml-1" />
                </a>
              </div>
            </div>

            {/* Dettagli Tecnici */}
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-sacra-primary mb-8">
                Dettagli Tecnici
              </h3>

              {[
                {
                  icon: FaMapMarkerAlt,
                  title: "Ritrovo",
                  value: "Santuario Madonna dei Laghi ore 9:00",
                },
                {
                  icon: FaHiking,
                  title: "Partenza pellegrinaggio",
                  value: "Ore 9:30",
                },
                {
                  icon: FaHiking,
                  title: "Distanza",
                  value: "14 km (solo andata)",
                },
                {
                  icon: FaMountain,
                  title: "Dislivello",
                  value: "620 metri",
                },
                {
                  icon: FaCalendarAlt,
                  title: "Durata",
                  value: "4-5 ore di camminata",
                },
                {
                  icon: FaUtensils,
                  title: "Pausa",
                  value: "Pranzo al sacco",
                },
                {
                  icon: FaChurch,
                  title: "Arrivo",
                  value: "Sacra di San Michele - S. Messa ore 17:00",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-sacra-primary/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-sacra-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="text-2xl text-sacra-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="text-lg font-bold text-gray-900">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ========== LOGISTICA ========== */}
        <motion.div
          id="Logistica"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-sacra-primary">
              Logistica e preparazione
            </h2>
            <p className="text-lg text-gray-600 font-light mt-4">
              Tutto ciò che devi sapere per affrontare il cammino preparato
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Card Cosa Portare */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-2xl flex items-center justify-center">
                  <FaSuitcase className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sacra-primary">
                  Cosa Portare
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Scarpe da trekking comode e robuste",
                  "Zaino leggero (15-20 litri)",
                  "Pranzo al sacco e borraccia (minimo 1 litro)",
                  "Snack energetici (frutta secca, barrette)",
                  "Telo leggero per la pausa pranzo sull'erba",
                  "Crema solare e cappello/bandana",
                  "Giacca impermeabile o poncho (anche se il cielo è serbo)",
                  "Rosario o oggetti devozionali (opzionale)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lg text-gray-700"
                  >
                    <span className="text-sacra-accent font-bold mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card Come Arrivare */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sacra-accent to-amber-500 rounded-2xl flex items-center justify-center">
                  <FaTrain className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sacra-primary">
                  Come Arrivare
                </h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong className="text-sacra-primary">Treno:</strong> da
                  Torino Porta Nuova ad Avigliana (30 min)
                </p>
                <p>
                  <strong className="text-sacra-primary">Autobus:</strong>{" "}
                  dalla stazione al Santuario
                </p>
                <a
                  href={autobusPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
                >
                  <FaFilePdf /> Scarica Orari
                </a>
                <p className="mt-4">
                  <strong className="text-sacra-primary">Auto:</strong> parcheggio disponibile presso il Santuario.
                </p>
                <div className="bg-yellow-50 border-l-4 border-sacra-accent p-4 text-sm text-gray-800 rounded-lg">
                  <strong>Consiglio:</strong> arriva con anticipo per il check-in e la distribuzione delle mappe del percorso.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Preparazione Fisica */}
          <motion.div
            className="bg-gradient-to-r from-sacra-primary/5 to-sacra-accent/5 rounded-3xl p-8 shadow-xl border border-sacra-accent/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <FaHeartbeat className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-sacra-primary">
                Preparazione Fisica
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Il cammino è aperto a tutti, ma <strong className="text-gray-900">14 km e oltre 600 metri di dislivello</strong> richiedono un po' di allenamento base per godersi appieno l'esperienza senza troppa fatica. Ecco come prepararti al meglio:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  step: "1",
                  text: "Nelle due settimane prima del pellegrinaggio, fai 4 uscite a passo svelto di 5-6 km per abituare le gambe.",
                },
                {
                  step: "2",
                  text: "Inserisci salite e scale nei tuoi percorsi: simulare il dislivello aiuta molto più della sola distanza piana.",
                },
                {
                  step: "3",
                  text: "Utilizza le stesse scarpe da trekking che userai il giorno del cammino per ammorbidirle e prevenire vesciche.",
                },
              ].map((tip, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                  <span className="text-4xl font-black text-sacra-accent/30">
                    {tip.step}
                  </span>
                  <p className="text-gray-700 mt-2">{tip.text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Ricorda di idratarti bene anche durante gli allenamenti e ascolta il tuo corpo: il pellegrinaggio è una sfida, ma anche una gioia!
            </p>
          </motion.div>
        </motion.div>

        {/* ========== GALLERIA PREVIEW ========== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold flex items-center justify-center text-sacra-primary mb-4">
              <FaImages className="mr-3 text-sacra-accent" />I momenti del
              pellegrinaggio
            </h3>
            <p className="text-gray-600 text-lg">
              Scorri per un'anteprima delle edizioni passate!
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, EffectCards]}
            effect="cards"
            grabCursor={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="max-w-2xl mx-auto"
          >
            {galleryMedia.map((media, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      className="w-full h-96 object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={`Momento del pellegrinaggio ${index + 1}`}
                      className="w-full h-96 object-cover"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link
              to="/galleria"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sacra-primary to-sacra-accent text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              <FaImages /> Galleria Completa
            </Link>
          </div>
        </motion.div>

        {/* ========== CTA FINALE ========== */}
        <motion.div
          className="text-center pt-10 border-t border-gray-200"
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