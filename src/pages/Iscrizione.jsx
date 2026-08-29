import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaRoute, FaStopwatch, FaCheckCircle, FaInfoCircle, FaStar, FaUserFriends, FaMountain, FaShieldAlt, FaBus, FaArrowRight, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

// Firebase
import { db } from "../firebase/config.js";
import { ref, push, set, serverTimestamp } from "firebase/database";

const Iscrizione = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const iscrizioniRef = ref(db, 'iscrizioni');
      const nuovaIscrizioneRef = push(iscrizioniRef);

      const dataAttuale = new Date();
      const dataLeggibile = dataAttuale.toLocaleString('it-IT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).replace(',', '');

      await set(nuovaIscrizioneRef, {
        nome: formData.nome,
        cognome: formData.cognome,
        email: formData.email,
        telefono: formData.telefono,
        privacyAccettata: formData.privacy,
        dataIscrizione: dataLeggibile,
        timestamp: serverTimestamp()
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Errore di scrittura su Firebase: ", error);
      setErrorMessage("Si è verificato un errore durante l'invio. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const steps = [
    { label: "Dati Personali", icon: FaUserFriends },
    { label: "Conferma", icon: FaCheckCircle },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">

      {/* HEADER SUPER MODERNO */}
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
          {/* Badge aggiornato: data + rientro in bus */}
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

          {/* Titolo */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sacra-primary via-sacra-accent to-amber-500">
              Unisciti
            </span>
            <br />
            <span className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900">
              al Cammino
            </span>
          </h1>

          {/* Sottotitolo */}
          <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Preparati a vivere un'esperienza unica di fede, natura e amicizia.
            I posti sono limitati, non restare fuori!
          </p>

          {/* Stats animate */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-8 mt-10"
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

          {/* 🆕 DUE CARD EVIDENTI: DATA e RIENTRO */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Card Data */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="flex-1 bg-gradient-to-br from-sacra-primary to-sacra-secondary text-white p-6 rounded-3xl shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <FaCalendarAlt className="text-3xl text-sacra-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-widest font-bold text-sacra-accent/80">Data</p>
                  <p className="text-3xl font-black">27 Settembre 2026</p>
                  <p className="text-sm opacity-80">Domenica · ritrovo ore 9:00</p>
                </div>
              </div>
            </motion.div>

            {/* Card Rientro in Bus */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="flex-1 bg-gradient-to-br from-amber-500 to-yellow-400 text-gray-900 p-6 rounded-3xl shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center shrink-0">
                  <FaBus className="text-3xl text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-widest font-bold text-gray-800/70">Rientro</p>
                  <p className="text-2xl font-black">Bus per tutti!</p>
                  <p className="text-sm font-medium">Dalla Sacra ad Avigliana (non a piedi)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* GRID PRINCIPALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* COLONNA SINISTRA: INFO & FEATURES */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Card Evento */}
            <div className="relative bg-gradient-to-br from-sacra-primary via-sacra-secondary to-sacra-primary text-white p-8 sm:p-10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Pattern decorativo */}
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

                  {/* 🆕 RIENTRO IN BUS nei dettagli */}
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

            {/* Features */}
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

            {/* Quota info */}
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

          {/* COLONNA DESTRA: FORM */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

              {/* Steps indicator */}
              <div className="flex border-b border-gray-100">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-sacra-primary bg-sacra-primary/5"
                  >
                    <step.icon className="text-lg" />
                    {step.label}
                  </div>
                ))}
              </div>

              <div className="p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl"
                      >
                        <FaCheckCircle className="text-5xl text-white" />
                      </motion.div>

                      <h3 className="text-4xl font-black text-gray-900 mb-4">
                        Sei dei Nostri! 🎉
                      </h3>
                      <p className="text-xl text-gray-600 mb-2">
                        Grazie <strong className="text-sacra-primary">{formData.nome}</strong>!
                      </p>
                      <p className="text-gray-500 mb-8 max-w-md">
                        Abbiamo registrato la tua iscrizione. Ci vediamo il <strong>27 Settembre</strong> al Santuario!
                      </p>

                      <div className="flex gap-4">
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
                          Preparati <FaArrowRight />
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Error Message */}
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3"
                        >
                          <FaInfoCircle className="shrink-0" />
                          {errorMessage}
                        </motion.div>
                      )}

                      {/* Form fields */}
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Nome <span className="text-sacra-accent">*</span>
                            </label>
                            <input
                              type="text"
                              name="nome"
                              required
                              value={formData.nome}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-sacra-primary focus:ring-4 focus:ring-sacra-primary/10 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50 text-lg"
                              placeholder="Il tuo nome"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Cognome <span className="text-sacra-accent">*</span>
                            </label>
                            <input
                              type="text"
                              name="cognome"
                              required
                              value={formData.cognome}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-sacra-primary focus:ring-4 focus:ring-sacra-primary/10 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50 text-lg"
                              placeholder="Il tuo cognome"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Email <span className="text-sacra-accent">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-sacra-primary focus:ring-4 focus:ring-sacra-primary/10 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50 text-lg"
                            placeholder="mario@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Telefono <span className="text-sacra-accent">*</span>
                          </label>
                          <input
                            type="tel"
                            name="telefono"
                            required
                            value={formData.telefono}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-sacra-primary focus:ring-4 focus:ring-sacra-primary/10 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50 text-lg"
                            placeholder="+39 333 1234567"
                          />
                        </div>
                      </div>

                      {/* Privacy */}
                      <div className="pt-4 border-t-2 border-gray-100">
                        <label className="flex items-start cursor-pointer group">
                          <input
                            type="checkbox"
                            name="privacy"
                            required
                            checked={formData.privacy}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-5 h-5 mt-1 text-sacra-primary rounded-lg focus:ring-sacra-primary/20"
                          />
                          <span className="ml-3 text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                            Accetto il trattamento dei miei dati personali per la gestione dell'evento, in conformità con la normativa sulla privacy.{" "}
                            <span className="text-sacra-accent">*</span>
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-gradient-to-r from-sacra-accent to-amber-500 text-gray-900 font-black text-lg uppercase tracking-wider rounded-2xl shadow-xl hover:shadow-2xl hover:from-amber-400 hover:to-sacra-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
                            />
                            Invio in corso...
                          </>
                        ) : (
                          <>
                            <FaCheckCircle className="text-xl" />
                            Conferma Iscrizione
                            <FaArrowRight className="ml-2" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-gray-400 mt-4">
                        * Campi obbligatori. I tuoi dati saranno trattati nel rispetto della privacy.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
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