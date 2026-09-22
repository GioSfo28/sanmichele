import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaChurch, FaArrowUp, FaDownload, FaTimes, FaSpinner } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Firebase
import { db } from "../firebase/config.js";
import { ref, get, child } from "firebase/database";

// Librerie per PDF
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [iscrizioni, setIscrizioni] = useState([]);
  const [loading, setLoading] = useState(false);



  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // ----- FUNZIONI ADMIN -----
  const fetchIscrizioni = async () => {
    setLoading(true);
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, "iscrizioni"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        lista.sort((a, b) => {
          if (a.timestamp && b.timestamp) {
            return b.timestamp - a.timestamp;
          }
          return (b.dataIscrizione || "").localeCompare(a.dataIscrizione || "");
        });
        setIscrizioni(lista);
      } else {
        setIscrizioni([]);
      }
    } catch (error) {
      console.error("Errore nel recupero iscrizioni:", error);
      alert("Impossibile caricare i dati. Controlla la console.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setShowAdminModal(true);
    fetchIscrizioni();
  };

  const closeModal = () => {
    setShowAdminModal(false);
  };
  // ----- GENERA PDF STILATO CON TABELLA PIÙ LARGA -----
const generatePDF = () => {
  if (iscrizioni.length === 0) {
    alert("Nessun dato da esportare.");
    return;
  }

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  // Colori del sito
  const primaryColor = [128, 0, 32]; // #800020
  const accentColor = [212, 160, 23]; // #d4a017
  const lightBg = [245, 245, 245];

  // Bordo decorativo
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(1);
  doc.rect(5, 5, 287, 200, 'S');

  // Intestazione
  doc.setFillColor(...primaryColor);
  doc.rect(5, 5, 287, 40, 'F');

  // Titolo
  doc.setFontSize(22);
  doc.setTextColor(...accentColor);
  doc.setFont('helvetica', 'bold');
  doc.text("Pellegrinaggio alla Sacra di San Michele", 14, 22);

  // Sottotitolo
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.text(`Elenco Iscritti - ${new Date().toLocaleDateString('it-IT')}`, 14, 32);

  // Data evento in alto a destra
  doc.setFontSize(12);
  doc.setTextColor(...accentColor);
  doc.setFont('helvetica', 'bold');
  doc.text("27 Settembre 2026", 230, 22);

  // Numero iscritti
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.text(`Totale iscritti: ${iscrizioni.length}`, 230, 32);

  // Tabella - ORA PIÙ LARGA
  const headers = [
    ["#", "Nome", "Cognome", "Email", "Telefono", "Data Iscrizione", "Privacy"],
  ];
  const rows = iscrizioni.map((item, index) => [
    index + 1,
    item.nome || "",
    item.cognome || "",
    item.email || "",
    item.telefono || "",
    item.dataIscrizione || "",
    item.privacyAccettata ? "Sì" : "No",
  ]);

  autoTable(doc, {
    startY: 55,
    head: headers,
    body: rows,
    theme: "striped",
    tableWidth: 'auto', // 👈 OCCUPA TUTTA LA LARGHEZZA DISPONIBILE
    styles: {
      fontSize: 10, // 👈 LEGGERMENTE PIÙ GRANDE PER SFRUTTARE LO SPAZIO
      cellPadding: 4,
      lineColor: [200, 200, 200],
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontSize: 11,
      fontStyle: "bold",
      halign: "center",
    },
    alternateRowStyles: {
      fillColor: lightBg,
    },
    columnStyles: {
      0: { cellWidth: 12, halign: "center" }, // solo # è fisso
      // Le altre colonne si adattano automaticamente allo spazio
    },
    margin: { top: 10, left: 12, right: 12 }, // 👈 MARGINI LEGGERMENTE PIÙ AMPI
  });

  // Piè di pagina
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.setFont('helvetica', 'italic');
    doc.text("Pellegrinaggio San Michele - Documento riservato", 14, doc.internal.pageSize.getHeight() - 10);
    doc.text(`Pagina ${i} di ${pageCount}`, 270, doc.internal.pageSize.getHeight() - 10);
  }

  doc.save("iscritti_pellegrinaggio.pdf");
};

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-8 overflow-hidden">
      {/* Effetto onda superiore */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="white"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sacra-primary to-sacra-accent rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Unisciti al Pellegrinaggio
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contattaci per informazioni o per partecipare come volontario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:pellegrinaggiosacrasanmichele@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full"
              >
                <FaEnvelope /> Inviaci un'email
              </motion.a>
              <Link to="/Iscrizione"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-colors">
                Iscriviti ora
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Grid Footer */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left border-t border-gray-800 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Colonna 1: Logo/Nome */}
          <motion.div variants={itemFadeIn}>
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start text-sacra-accent">
              <FaChurch className="mr-3" />
              Pellegrinaggio Sacra San Michele
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Il cammino storico dalla città di Avigliana all'Abbazia millenaria della Valle di Susa. Un'esperienza di fede e natura, ideato e organizzato dall'Opera San Michele di Torino.
            </p>
          </motion.div>

          {/* Colonna 2: Social */}
          <motion.div variants={itemFadeIn} className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider text-sm">Resta Connesso</h4>
            <div className="space-y-3">
              <a href="https://www.instagram.com/pellegrinaggiosanmichele/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-sacra-accent transition-colors duration-300">
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* COLONNA 3: NOTE LEGALI + BOTTONE PRIVATO */}
          <motion.div variants={itemFadeIn} className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider text-sm">Note Legali</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/Privacy" className="text-gray-400 hover:text-sacra-accent transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/Cookie" className="text-gray-400 hover:text-sacra-accent transition-colors duration-300">
                Cookie Policy
              </Link>
              
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-500 pb-4 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
          <span>© 2025 – {new Date().getFullYear()} Pellegrinaggio Sacra di San Michele. Tutti i diritti riservati.</span>
          <span>
            Creato con <span className="text-red-500 mx-1">♥</span> da{" "}
            <a 
              href="https://www.giorgiosforza.it" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#d97706] hover:text-sacra-accent font-semibold transition-colors duration-300"
            >
              Giorgio Sforza
            </a>.
          </span>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-sacra-accent text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors z-50"
        >
          <FaArrowUp />
        </motion.button>
      </div>

      {/* ===== MODALE ADMIN ===== */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-3xl max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header modale */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaDownload className="text-purple-600" />
                  Gestione Iscritti
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <FaTimes className="text-xl text-gray-500 hover:text-gray-800 dark:hover:text-white" />
                </button>
              </div>

              {/* Corpo modale */}
              <div className="flex-1 overflow-auto p-6">
                {loading ? (
                  <div className="flex justify-center items-center py-20">
                    <FaSpinner className="text-4xl text-purple-600 animate-spin" />
                    <span className="ml-3 text-lg text-gray-600 dark:text-gray-300">
                      Caricamento iscritti...
                    </span>
                  </div>
                ) : iscrizioni.length === 0 ? (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-20 text-lg">
                    Nessun iscritto al momento.
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300 border-collapse">
                      <thead className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs uppercase tracking-wider border-b-2 border-purple-300 dark:border-purple-700">
                        <tr>
                          <th className="px-4 py-3">#</th>
                          <th className="px-4 py-3">Nome</th>
                          <th className="px-4 py-3">Cognome</th>
                          <th className="px-4 py-3">Email</th>
                          <th className="px-4 py-3">Telefono</th>
                          <th className="px-4 py-3">Data Iscrizione</th>
                          <th className="px-4 py-3 text-center">Privacy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {iscrizioni.map((item, index) => (
                          <tr
                            key={item.id}
                            className="hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors"
                          >
                            <td className="px-4 py-3 font-medium">{index + 1}</td>
                            <td className="px-4 py-3">{item.nome || "-"}</td>
                            <td className="px-4 py-3">{item.cognome || "-"}</td>
                            <td className="px-4 py-3 break-all">{item.email || "-"}</td>
                            <td className="px-4 py-3">{item.telefono || "-"}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {item.dataIscrizione || "-"}
                            </td>
                            <td className="px-4 py-3 text-center">
                              {item.privacyAccettata ? (
                                <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">
                                  Sì
                                </span>
                              ) : (
                                <span className="inline-block px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-bold">
                                  No
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Footer modale */}
              <div className="flex justify-end gap-4 p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Chiudi
                </button>
                <button
                  onClick={generatePDF}
                  disabled={iscrizioni.length === 0 || loading}
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <FaDownload />
                  Scarica PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;