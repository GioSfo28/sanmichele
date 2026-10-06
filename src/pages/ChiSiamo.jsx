// File: src/pages/ChiSiamo.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCross,
  FaStar,
  FaCrown,
  FaUserTie,
  FaMapMarkedAlt,
  FaLaptopCode,
  FaRoute,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// Import immagini
import Gio from "../assets/Gio.jpg";
import Ferdinando from "../assets/Ferdinando.jpeg";
import Simone from "../assets/Simone.jpeg";
import PadreMarco from "../assets/PadreMarco.jpeg";
import Giovanni from "../assets/Giovanni.jpeg";
import DonLodovico from "../assets/DonLodovico.jpeg";
import Claudio from "../assets/Claudio.jpeg";
import Sara from "../assets/Sara.jpeg";
import Samuele from "../assets/Samuele.jpeg";

// ============================================================
// ORGANIGRAMMA STRUTTURATO
// ============================================================
const organizationChart = {
  direzione: [
    {
      name: "Simone Morano Gabbiani",
      role: "Ideatore e Coordinatore Generale",
      img: Simone,
      desc: "Ha dato vita a questo progetto, coinvolgendo fin da subito i fratelli Giovanni e Ferdinando nell'organizzazione del pellegrinaggio.",
      gradient: "from-blue-500 to-cyan-500",
      icon: FaCrown,
    },
  ],
  organizzatori: [
    {
      name: "Giovanni di Gropello",
      role: "Organizzatore",
      img: Giovanni,
      desc: "Si occupa in prima linea della logistica e della gestione pratica del cammino, coordinando i partecipanti.",
      gradient: "from-green-500 to-emerald-500",
      icon: FaUserTie,
    },
    {
      name: "Ferdinando di Gropello",
      role: "Organizzatore",
      img: Ferdinando,
      desc: "Insieme al fratello Giovanni, cura i dettagli organizzativi e la sicurezza dell'evento.",
      gradient: "from-purple-500 to-violet-500",
      icon: FaUserTie,
    },
  ],
  responsabili: [
    {
      name: "Claudio Maglione",
      role: "Responsabile Val d'Aosta",
      img: Claudio,
      desc: "Coordina i pellegrini e gestisce le attività logistiche sul territorio valdostano.",
      gradient: "from-red-500 to-pink-500",
      icon: FaMapMarkedAlt,
    },
    {
      name: "Sara Morano Gabbiani",
      role: "Responsabile Piemonte",
      img: Sara,
      desc: "Coordina i pellegrini e gestisce le attività logistiche sul territorio piemontese.",
      gradient: "from-indigo-500 to-purple-500",
      icon: FaMapMarkedAlt,
    },
    {
      name: "Samuele Rossi",
      role: "Responsabile del Coordinamento del Percorso",
      img: Samuele,
      desc: "Si occupa del coordinamento operativo del percorso durante il pellegrinaggio, monitorandone lo svolgimento e assicurandosi che la marcia proceda regolarmente.",
      gradient: "from-teal-500 to-cyan-500",
      icon: FaRoute,
    },
    {
      name: "Giorgio Sforza",
      role: "Responsabile Web",
      img: Gio,
      desc: "Cura lo sviluppo della piattaforma digitale e la comunicazione online del pellegrinaggio.",
      gradient: "from-orange-500 to-amber-500",
      icon: FaLaptopCode,
    },
  ],
};

const spiritualFathers = [
  {
    name: "Padre Marco Moioli",
    role: "Padre Spirituale",
    img: PadreMarco,
  },
  {
    name: "Don Lodovico De Bernardi",
    role: "Padre Spirituale",
    img: DonLodovico,
  },
];

// ============================================================
// COMPONENTI RIUTILIZZABILI
// ============================================================

/**
 * Card dell'organigramma con supporto a 3 dimensioni
 */
const OrgCard = ({ person, size = "md" }) => {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full ${
        isLarge ? "w-full max-w-md" : isSmall ? "w-full max-w-xs" : "w-full max-w-sm"
      }`}
    >
      {/* Barra gradiente superiore */}
      <div
        className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${person.gradient}`}
      />

      <div
        className={`flex flex-col items-center text-center flex-grow ${
          isLarge ? "p-8" : isSmall ? "p-5" : "p-6"
        }`}
      >
        {/* Immagine con badge */}
        <div className="relative mb-4">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${person.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          />
          <img
            src={person.img}
            alt={person.name}
            className={`relative z-10 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500 ${
              isLarge ? "w-36 h-36" : isSmall ? "w-20 h-20" : "w-24 h-24"
            }`}
          />
          {person.icon && (
            <div
              className={`absolute -bottom-1 -right-1 rounded-full bg-gradient-to-br ${
                person.gradient
              } flex items-center justify-center shadow-lg z-20 ${
                isLarge ? "w-12 h-12" : isSmall ? "w-8 h-8" : "w-10 h-10"
              }`}
            >
              <person.icon
                className={`text-white ${isLarge ? "text-lg" : "text-sm"}`}
              />
            </div>
          )}
        </div>

        {/* Nome e ruolo */}
        <h3
          className={`font-bold text-gray-900 group-hover:text-sacra-primary transition-colors duration-300 mb-1 ${
            isLarge ? "text-2xl" : isSmall ? "text-base" : "text-lg"
          }`}
        >
          {person.name}
        </h3>
        <p
          className={`font-semibold uppercase tracking-wider mb-3 bg-gradient-to-r ${
            person.gradient
          } bg-clip-text text-transparent ${isLarge ? "text-sm" : "text-xs"}`}
        >
          {person.role}
        </p>

        {/* Descrizione */}
        {person.desc && (
          <p
            className={`text-gray-600 leading-relaxed flex-grow ${
              isLarge ? "text-sm" : "text-xs"
            }`}
          >
            {person.desc}
          </p>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Connettore verticale tra i livelli
 */
const Connector = ({ height = "h-12" }) => (
  <div className={`flex justify-center ${height}`}>
    <div className="w-px bg-gradient-to-b from-sacra-accent/60 via-sacra-accent/40 to-sacra-accent/60" />
  </div>
);

/**
 * Linea orizzontale con diramazioni verticali
 */
const HorizontalBranch = ({ columns = 2, maxWidth = "max-w-2xl" }) => (
  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full ${maxWidth}`}>
    <div className="flex justify-between px-8">
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          className="w-px h-8 bg-gradient-to-b from-sacra-accent/60 to-transparent"
        />
      ))}
    </div>
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sacra-accent/60 to-transparent" />
  </div>
);

// ============================================================
// PAGINA CHI SIAMO
// ============================================================
const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* ============================================================ */}
      {/* HEADER */}
      {/* ============================================================ */}
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
            Pellegrinaggio{" "}
            <span className="text-gray-900 font-light">San Michele</span>
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

      {/* ============================================================ */}
      {/* CONTENUTO PRINCIPALE */}
      {/* ============================================================ */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* ------------------------------------------------------------ */}
        {/* HERO SECTION */}
        {/* ------------------------------------------------------------ */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-3xl shadow-2xl mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-3xl blur-xl opacity-50" />
            <FaStar className="text-4xl text-white relative z-10" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sacra-primary via-sacra-accent to-amber-500">
              Chi Siamo
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-sacra-accent" />
            <FaStar
              className="text-sacra-accent text-xl animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-sacra-accent" />
          </div>

          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Un gruppo di amici uniti dalla fede e dalla passione per la montagna.
            Abbiamo creato questo cammino per condividere la bellezza della{" "}
            <strong className="font-semibold text-sacra-primary">
              Sacra di San Michele
            </strong>
            .
          </p>
        </motion.div>

        {/* ------------------------------------------------------------ */}
        {/* ORGANIGRAMMA */}
        {/* ------------------------------------------------------------ */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeIn}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
              Organigramma
            </h2>
            <p className="text-gray-500 text-lg font-light">
              La struttura organizzativa del pellegrinaggio
            </p>
          </div>

          {/* -------- LIVELLO 1: DIREZIONE -------- */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
              <OrgCard person={organizationChart.direzione[0]} size="lg" />
            </div>
          </div>

          {/* Connettore verticale */}
          <Connector height="h-16" />

          {/* -------- LIVELLO 2: ORGANIZZATORI -------- */}
          <div className="relative">
            <HorizontalBranch columns={2} maxWidth="max-w-2xl" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto pt-8">
              {organizationChart.organizzatori.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex justify-center"
                >
                  <OrgCard person={person} size="md" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connettore verticale */}
          <Connector height="h-16" />

          {/* -------- LIVELLO 3: RESPONSABILI -------- */}
          <div className="relative">
            <HorizontalBranch columns={4} maxWidth="max-w-5xl" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pt-8">
              {organizationChart.responsabili.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex justify-center"
                >
                  <OrgCard person={person} size="sm" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------ */}
        {/* GUIDA SPIRITUALE */}
        {/* ------------------------------------------------------------ */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          {/* Decorazione superiore */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sacra-primary via-sacra-accent to-sacra-primary" />

          <div className="p-10 sm:p-14">
            {/* Icona */}
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-20 h-20 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-2xl flex items-center justify-center shadow-lg relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-2xl blur-lg opacity-50" />
                <FaCross className="text-4xl text-white relative z-10" />
              </motion.div>
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
              Guida Spirituale
            </h2>

            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-sacra-accent/50" />
              <FaStar className="text-sacra-accent text-sm animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-sacra-accent/50" />
            </div>

            {/* Padri Spirituali */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20 mb-10">
              {spiritualFathers.map((father, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center group"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-sacra-primary/30 to-sacra-accent/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={father.img}
                      alt={father.name}
                      className="relative z-10 w-32 h-32 rounded-full object-cover border-4 border-sacra-primary/20 shadow-xl group-hover:border-sacra-accent transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sacra-primary transition-colors duration-300 mb-2">
                    {father.name}
                  </h3>
                  <p className="text-[#688e26] font-semibold text-sm uppercase tracking-wider">
                    {father.role}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-sacra-primary/5 to-sacra-accent/5 rounded-2xl p-6 text-center border border-sacra-primary/10">
              <p className="text-gray-700 text-lg font-light italic max-w-2xl mx-auto leading-relaxed">
                Ad accompagnarci in questo viaggio di fede e riflessione, guidando
                la preghiera e celebrando la Santa Messa all'arrivo alla Sacra.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ChiSiamo;