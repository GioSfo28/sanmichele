import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaPizzaSlice, FaHiking, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// --- IMPORT CORRETTI PER FIREBASE ---
// Importiamo SOLO il database (db) dal tuo file di configurazione
import { db } from "../firebase/config.js"; 
// Importiamo le funzioni del Realtime Database
import { ref, push, set, serverTimestamp } from "firebase/database";

const Iscrizione = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    pacchetto: "solo_pellegrinaggio",
    intolleranze: "",
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
      // 1. Crea un riferimento al "nodo" iscrizioni nel Realtime Database usando il nostro 'db' importato
      const iscrizioniRef = ref(db, 'Iscrizioni');
      
      // 2. Genera una chiave univoca per la nuova iscrizione
      const nuovaIscrizioneRef = push(iscrizioniRef);
      
      // 3. Salva i dati
      await set(nuovaIscrizioneRef, {
        nome: formData.nome,
        cognome: formData.cognome,
        email: formData.email,
        telefono: formData.telefono,
        pacchetto: formData.pacchetto,
        intolleranze: formData.intolleranze,
        privacyAccettata: formData.privacy,
        dataIscrizione: serverTimestamp() // Registra l'orario del server
      });

      setIsSuccess(true); // Mostra la schermata di successo

    } catch (error) {
      console.error("Errore di scrittura su Firebase: ", error);
      setErrorMessage("Si è verificato un errore durante l'invio. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* HEADER SEMPLIFICATO */}
      <header className="bg-white/95 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#800020]">
            Pellegrinaggio <span className="text-gray-900 font-light">San Michele</span>
          </Link>
          <Link to="/" className="flex items-center text-gray-700 hover:text-[#800020] font-medium transition-colors duration-300">
            <FaArrowLeft className="mr-2" />
            <span className="hidden sm:inline">Torna alla Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#800020] mb-4"
            initial="hidden" animate="visible" variants={fadeIn}
          >
            Iscriviti al pellegrinaggio
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto"
            initial="hidden" animate="visible" variants={fadeIn}
          >
            Compila il modulo per confermare la tua presenza. I posti potrebbero essere limitati!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* COLONNA SINISTRA: Info Evento */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial="hidden" animate="visible" variants={fadeIn}
          >
            <div className="bg-[#800020] text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Dettagli del pellegrinaggio</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 shrink-0">
                    <FaCalendarAlt className="text-xl text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#FFD700]">Data</h3>
                    <p className="text-white/90">Sabato 26 Settembre 2026</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 shrink-0">
                    <FaClock className="text-xl text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#FFD700]">Orari</h3>
                    <p className="text-white/90">Ritrovo: ore 09:00</p>
                    <p className="text-white/90">Fine prevista: ore 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 shrink-0">
                    <FaMapMarkerAlt className="text-xl text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#FFD700]">Luogo di ritrovo</h3>
                    <p className="text-white/90">Santuario Madonna dei Laghi<br/>Avigliana (TO)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">Importante:</h4>
              <p className="text-gray-700 text-sm">
                Il pagamento della quota di partecipazione avverrà in contanti la mattina stessa al momento del ritrovo. Si prega di portare la cifra esatta.
              </p>
            </div>
          </motion.div>

          {/* COLONNA DESTRA: Form o Messaggio di Successo */}
          <motion.div 
            className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative"
            initial="hidden" animate="visible" variants={fadeIn}
          >
            {isSuccess ? (
              // SCHERMATA DI SUCCESSO
              <div className="flex flex-col items-center justify-center text-center h-full py-10">
                <FaCheckCircle className="text-6xl text-green-500 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Iscrizione Ricevuta!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Grazie {formData.nome}, abbiamo registrato correttamente la tua iscrizione. Ci vediamo il 26 Settembre!
                </p>
                <Link to="/" className="px-8 py-3 bg-[#800020] text-white font-bold rounded-full shadow-lg hover:bg-[#5C0017] transition-all">
                  Torna alla Home
                </Link>
              </div>
            ) : (
              // FORM DI ISCRIZIONE
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl mb-4">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome *</label>
                    <input type="text" name="nome" required value={formData.nome} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50" placeholder="Mario" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cognome *</label>
                    <input type="text" name="cognome" required value={formData.cognome} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50" placeholder="Rossi" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50" placeholder="mario@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefono *</label>
                    <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50" placeholder="+39 333 1234567" />
                  </div>
                </div>

                {/* Scelta Pacchetto */}
                <div className="pt-4">
                  <label className="block text-base font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Seleziona il pacchetto *</label>
                  <div className="space-y-3">
                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.pacchetto === "solo_pellegrinaggio" ? "border-[#800020] bg-[#800020]/5 ring-1 ring-[#800020]" : "border-gray-200 hover:border-gray-300"} ${isSubmitting ? "opacity-50" : ""}`}>
                      <input type="radio" name="pacchetto" value="solo_pellegrinaggio" checked={formData.pacchetto === "solo_pellegrinaggio"} onChange={handleChange} disabled={isSubmitting} className="w-5 h-5 text-[#800020] focus:ring-[#800020]" />
                      <div className="ml-4 flex-grow flex justify-between items-center">
                        <div className="flex items-center">
                          <FaHiking className="text-gray-500 mr-2" />
                          <span className="font-medium text-gray-900">Solo Pellegrinaggio</span>
                        </div>
                        <span className="font-bold text-[#800020]">5€</span>
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.pacchetto === "pellegrinaggio_pizzata" ? "border-[#800020] bg-[#800020]/5 ring-1 ring-[#800020]" : "border-gray-200 hover:border-gray-300"} ${isSubmitting ? "opacity-50" : ""}`}>
                      <input type="radio" name="pacchetto" value="pellegrinaggio_pizzata" checked={formData.pacchetto === "pellegrinaggio_pizzata"} onChange={handleChange} disabled={isSubmitting} className="w-5 h-5 text-[#800020] focus:ring-[#800020]" />
                      <div className="ml-4 flex-grow flex justify-between items-center">
                        <div className="flex items-center">
                          <FaPizzaSlice className="text-gray-500 mr-2" />
                          <span className="font-medium text-gray-900">Pellegrinaggio + Pizzata serale</span>
                        </div>
                        <span className="font-bold text-[#800020]">10€</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Intolleranze */}
                {formData.pacchetto === "pellegrinaggio_pizzata" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pt-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Segnala eventuali allergie o intolleranze alimentari</label>
                    <textarea name="intolleranze" value={formData.intolleranze} onChange={handleChange} disabled={isSubmitting} rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50" placeholder="Es. celiachia, intolleranza al lattosio, vegetariano..."></textarea>
                  </motion.div>
                )}

                {/* Privacy */}
                <div className="pt-4 border-t border-gray-100">
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" name="privacy" required checked={formData.privacy} onChange={handleChange} disabled={isSubmitting} className="w-5 h-5 mt-1 text-[#800020] rounded focus:ring-[#800020]" />
                    <span className="ml-3 text-sm text-gray-600 leading-relaxed">
                      Ho letto e accetto l'informativa sulla privacy. Acconsento al trattamento dei miei dati e all'invio di email informative relative all'organizzazione di questo evento. *
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-6 bg-[#FFD700] text-gray-900 font-bold text-lg uppercase tracking-wider rounded-xl shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#FFD700]/50 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Invio in corso..." : "Conferma Iscrizione"}
                </button>

              </form>
            )}
          </motion.div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Iscrizione;