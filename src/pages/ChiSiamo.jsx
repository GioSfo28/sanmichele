// File: src/pages/ChiSiamo.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCross, FaStar } from "react-icons/fa";
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

const founders = [
  {
    name: "Simone Morano Gabbiani",
    role: "Ideatore",
    img: Simone,
    desc: "Ha dato vita a questo progetto, coinvolgendo fin da subito i fratelli Giovanni e Ferdinando nell'organizzazione del pellegrinaggio.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Giovanni di Gropello",
    role: "Organizzatore",
    img: Giovanni,
    desc: "Si occupa in prima linea della logistica e della gestione pratica del cammino, coordinando i partecipanti.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Ferdinando di Gropello",
    role: "Organizzatore",
    img: Ferdinando,
    desc: "Insieme al fratello Giovanni, cura i dettagli organizzativi e la sicurezza dell'evento.",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "Giorgio Sforza",
    role: "Responsabile Web",
    img: Gio,
    desc: "Cura lo sviluppo della piattaforma digitale e la comunicazione online del pellegrinaggio.",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    name: "Claudio Maglione",
    role: "Responsabile Val d'Aosta",
    img: Claudio,
    desc: "Coordina i pellegrini e gestisce le attività logistiche sul territorio valdostano.",
    gradient: "from-red-500 to-pink-500"
  },
];

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

const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
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
        
        {/* Hero Section Chi Siamo */}
        <motion.div 
          className="text-center mb-20"
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
            <FaStar className="text-3xl text-white" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sacra-primary via-sacra-accent to-amber-500">
              Chi Siamo
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mt-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sacra-accent" />
            <FaStar className="text-sacra-accent text-xl animate-spin" style={{ animationDuration: '3s' }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sacra-accent" />
          </div>

          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Un gruppo di amici uniti dalla fede e dalla passione per la montagna. 
            Abbiamo creato questo cammino per condividere la bellezza della{" "}
            <strong className="font-semibold text-sacra-primary">Sacra di San Michele</strong>.
          </p>
        </motion.div>

        {/* IL TEAM */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
              Il nostro team
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Le persone che rendono possibile questo pellegrinaggio
            </p>
          </div>
          
          {/* Griglia responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((person, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Barra gradiente superiore */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${person.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                {/* Contenuto */}
                <div className="p-8 flex flex-col items-center text-center flex-grow">
                  {/* Immagine con effetto */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-sacra-accent/20 to-sacra-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={person.img}
                      alt={person.name}
                      className="relative z-10 w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Nome e ruolo */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-sacra-primary transition-colors duration-300 mb-2">
                    {person.name}
                  </h3>
                  <p className={`text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r ${person.gradient} bg-clip-text text-transparent`}>
                    {person.role}
                  </p>

                  {/* Descrizione */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {person.desc}
                  </p>
                </div>

                {/* Effetto bordo luminoso al hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-sacra-accent/20 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GUIDA SPIRITUALE */}
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
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-20 h-20 bg-gradient-to-br from-sacra-primary to-sacra-accent rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaCross className="text-4xl text-white" />
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
                      className="relative z-10 w-32 h-32 rounded-full object-cover border-4 border-sacra-primary/20 shadow-xl group-hover:border-sacra-accent transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sacra-primary transition-colors duration-300 mb-2">
                    {father.name}
                  </h3>
                  <p className="text-[#688e26] font-semibold text-sm uppercase tracking-wider mb-4">
                    {father.role}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-sacra-primary/5 to-sacra-accent/5 rounded-2xl p-6 text-center">
              <p className="text-gray-700 text-lg font-light italic max-w-2xl mx-auto leading-relaxed">
                Ad accompagnarci in questo viaggio di fede e riflessione, guidando la preghiera e celebrando la Santa Messa all'arrivo alla Sacra.
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