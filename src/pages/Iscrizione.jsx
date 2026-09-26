import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaRoute, FaStopwatch, FaCheckCircle, FaInfoCircle, FaStar, FaMountain, FaShieldAlt, FaBus, FaArrowRight, FaHeart, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Iscrizione = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: FaRoute, value: "14", unit: "KM", label: "Distanza" },
    { icon: FaMountain, value: "620", unit: "M", label: "Dislivello" },
    { icon: FaStopwatch, value: "4-5", unit: "ORE", label: "Cammino" },
  ];

  const features = [
    { icon: FaShieldAlt, title: "Assicurazione", desc: "Copertura infortuni inclusa nella quota" },
    { icon: FaBus, title: "Rientro", desc: "Servizio pulmino dalla Sacra al Santuario" },
    { icon: FaHeart, title: "Comunità", desc: "Unisciti a giovani da tutta Italia" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">

      {/* HEADER */}
      <motion.header
        className="bg-white/95 backdrop-blur-md shadow-lg fixed top-0 w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
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

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* HERO SECTION */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-sacra-accent/10 to-amber-400/10 border border-sacra-accent/30 rounded-full mb-8"
          >
            <span className="flex items-center gap-2">
              <FaStar className="text-sacra-accent animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-bold text-sacra-primary uppercase tracking-widest">
                27 Settembre 2026
              </span>
            </span>
            <span className="hidden sm:block w-px h-6 bg-sacra-accent/30" />
            <span className="flex items-center gap-2 text-sm font-bold text-sacra-primary uppercase tracking-widest">
              <FaBus className="text-sacra-accent" />
              Rientro in bus incluso
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sacra-primary via-sacra-accent to-amber-500">
              Iscrizioni
            </span>
            <br />
            <span className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900">
              Chiuse
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            I posti sono terminati! Controlla la tua <strong className="text-sacra-primary">email</strong> per tutte le informazioni logistiche e organizzative.
          </p>

          {/* BOX AVVISO CHIUSURA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto mt-10 p-6 sm:p-8 bg-gradient-to-br from-sacra-primary to-sacra-secondary text-white rounded-3xl shadow-2xl border border-white/20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <FaLock className="text-2xl text-sacra-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-left">
                Iscrizioni Chiuse
              </h2>
            </div>
            <p className="text-white/90 leading-relaxed text-base sm:text-lg">
              Le iscrizioni al Pellegrinaggio sono ufficialmente <strong className="text-sacra-accent">chiuse</strong>. Se ti sei registrato, riceverai a breve (o hai già ricevuto) una <strong>email con tutti i dettagli</strong>: orari, punto di ritrovo, cosa portare e info sul rientro in bus.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <FaEnvelope className="text-xl text-sacra-accent shrink-0" />
              <p className="text-sm text-white/90">
                Controlla anche lo <strong>spam</strong> se non trovi la nostra mail!
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 sm:gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-2xl px-6 sm:px-8 py-4 shadow-xl border border-gray-100"
              >
                <stat.icon className="text-2xl text-sacra-accent mx-auto mb-2" />
                <div className="text-3xl sm:text-4xl font-black text-gray-900">
                  {stat.value}
                  <span className="text-lg text-sacra-accent ml-1">{stat.unit}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* GRID INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* COLONNA SINISTRA: INFO & FEATURES */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-sacra-primary via-sacra-secondary to-sacra-primary text-white p-8 sm:p-10 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sacra-accent/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
                  <FaCalendarAlt className="text-sacra-accent" />
                  Dettagli evento
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="p-3 bg-sacra-accent/20 rounded-xl shrink-0">
                      <FaCalendarAlt className="text-xl text-sacra-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sacra-accent text-sm uppercase tracking-wider mb-1">Data</h3>
                      <p className="text-white text-lg font-semibold">Domenica 27 Settembre 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="p-3 bg-sacra-accent/20 rounded-xl shrink-0">
                      <FaStopwatch className="text-xl text-sacra-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sacra-accent text-sm uppercase tracking-wider mb-1">Orari</h3>
                      <p className="text-white font-semibold">Ritrovo: ore 09:00</p>
                      <p className="text-white/80">S. Messa: ore 17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="p-3 bg-sacra-accent/20 rounded-xl shrink-0">
                      <FaMapMarkerAlt className="text-xl text-sacra-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sacra-accent text-sm uppercase tracking-wider mb-1">Luogo</h3>
                      <p className="text-white font-semibold">Santuario Madonna dei Laghi</p>
                      <p className="text-white/80">Avigliana (TO)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-400/20 rounded-2xl backdrop-blur-sm border border-amber-400/30">
                    <div className="p-3 bg-amber-400/30 rounded-xl shrink-0">
                      <FaBus className="text-xl text-amber-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-300 text-sm uppercase tracking-wider mb-1">Rientro</h3>
                      <p className="text-white font-semibold">Bus per tutti dalla Sacra</p>
                      <p className="text-white/80">Rientro ad Avigliana (non a piedi)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-sacra-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="text-xl text-sacra-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-sacra-accent/10 to-amber-400/10 border border-sacra-accent/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sacra-accent rounded-xl flex items-center justify-center">
                  <FaInfoCircle className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Quota: 10€</h4>
                  <p className="text-sm text-gray-500">Pagamento in contanti al ritrovo</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Include <strong>assicurazione infortuni</strong> e <strong>pulmino per il rientro</strong> dalla Sacra al Santuario.
              </p>
            </motion.div>
          </motion.div>

          {/* COLONNA DESTRA: INFO MAIL */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

              <div className="flex border-b border-gray-100">
                <div className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-sacra-primary bg-sacra-primary/5">
                  <FaLock className="text-lg" />
                  Iscrizioni Chiuse
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-gray-400 bg-gray-50">
                  <FaCheckCircle className="text-lg" />
                  Controlla la Mail
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-gradient-to-br from-sacra-primary to-sacra-secondary rounded-full flex items-center justify-center mb-8 shadow-2xl"
                  >
                    <FaEnvelope className="text-5xl text-sacra-accent" />
                  </motion.div>

                  <h3 className="text-4xl font-black text-gray-900 mb-4">
                    Ci vediamo domani! 🎉
                  </h3>
                  <p className="text-xl text-gray-600 mb-2">
                    Le iscrizioni sono <strong className="text-sacra-primary">chiuse</strong>.
                  </p>
                  <p className="text-gray-500 mb-8 max-w-md">
                    Se ti sei registrato, controlla la tua <strong>casella email</strong> (anche lo spam!) per ricevere tutte le informazioni logistiche e organizzative sul Pellegrinaggio.
                  </p>

                  {/* BOX INFO MAIL */}
                  <div className="w-full max-w-md p-5 bg-gradient-to-br from-sacra-accent/10 to-amber-400/10 border-2 border-sacra-accent/30 rounded-2xl mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <FaEnvelope className="text-2xl text-sacra-accent" />
                      <h4 className="font-black text-gray-900 text-lg uppercase tracking-wider">
                        Controlla la Mail
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Troverai tutte le info su <strong>orari, ritrovo, cosa portare</strong> e sul <strong>rientro in bus</strong>.
                    </p>
                  </div>

                  {/* CONTATTO */}
                  <div className="w-full max-w-md p-5 bg-gray-50 border border-gray-200 rounded-2xl mb-8">
                    <p className="text-sm text-gray-600 mb-3">
                      Non hai ricevuto la mail o hai domande?
                    </p>
                    <a
                      href="mailto:pellegrinaggiosacrasanmichele@gmail.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sacra-primary text-white font-bold rounded-full hover:bg-sacra-hover transition-all duration-300 text-sm"
                    >
                      <FaEnvelope />
                      Scrivici una mail
                    </a>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      to="/"
                      className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-all"
                    >
                      Torna alla Home
                    </Link>
                    <Link
                      to="/#Logistica"
                      className="px-8 py-3 bg-sacra-primary text-white font-bold rounded-full hover:bg-sacra-hover transition-all flex items-center gap-2"
                    >
                      Info Logistica <FaArrowRight />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Iscrizione;