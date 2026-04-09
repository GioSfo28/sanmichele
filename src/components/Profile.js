import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaMountain, FaChurch } from "react-icons/fa";
import PellegrinaggioLogo from "../assets/Sacra.jpg";
import { scrollToElement } from "../utils/scrollUtils";

const Intento = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white" id="Storia">
      {/* Sezione Visione/Storia */}
      <motion.div
        className="text-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div variants={itemFadeIn} className="relative inline-block">
          <img
            src={PellegrinaggioLogo}
            alt="Logo del Pellegrinaggio Sacra di San Michele"
            className="w-48 h-48 sm:w-56 sm:h-56 mx-auto object-cover rounded-full shadow-xl transition-transform duration-700 hover:scale-105 border-4 border-white"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-10 text-sacra-primary drop-shadow-sm"
          variants={itemFadeIn}
        >
          Fede e Sentiero
        </motion.h1>
        <motion.p
          className="text-xl mt-4 font-semibold max-w-3xl mx-auto text-sacra-secondary uppercase tracking-wider"
          variants={itemFadeIn}
        >
          Avigliana – Sacra di San Michele
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-light leading-relaxed"
          variants={itemFadeIn}
        >
          Un’esperienza unica lungo la Via Micaelica, dalla Valle di Susa all’Abbazia millenaria. La riscoperta del cammino storico.
        </motion.p>
      </motion.div>

      {/* Sezione Intento */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-8 flex items-center justify-center text-sacra-primary"
            variants={itemFadeIn}
          >
            <FaChurch className="mr-4 text-3xl text-sacra-accent drop-shadow-sm" />
            Il Nostro Intento
          </motion.h2>

          <div className="bg-gray-50 p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-100">
            <motion.p className="text-gray-700 leading-relaxed text-lg" variants={itemFadeIn}>
              Questo pellegrinaggio nasce dal desiderio di riscoprire e valorizzare un percorso antico e profondo: i <strong className="text-sacra-primary">14 chilometri</strong> che uniscono la città di Avigliana, porta della Valle di Susa, all’imponente <strong className="text-sacra-primary">Sacra di San Michele</strong>, simbolo del Piemonte e custode della fede.
            </motion.p>
            <motion.p className="text-gray-700 leading-relaxed mt-4 text-lg" variants={itemFadeIn}>
              Il nostro intento è creare un’occasione di <strong>comunione, riflessione e sforzo fisico</strong>, un cammino che non sia solo una passeggiata, ma un vero e proprio atto devozionale. Ci concentriamo su tre pilastri:
            </motion.p>

            <motion.ul className="list-none mt-8 space-y-6 text-gray-700 text-lg" variants={fadeIn}>
              <motion.li className="flex items-start" variants={itemFadeIn}>
                <FaHeart className="mr-4 mt-1 text-2xl text-sacra-primary shrink-0" />
                <span>
                  <strong className="text-gray-900">La storia Micaelica:</strong> approfondire il legame con l’allineamento dei sette santuari dedicati a San Michele Arcangelo.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={itemFadeIn}>
                <FaMountain className="mr-4 mt-1 text-2xl text-sacra-primary shrink-0" />
                <span>
                  <strong className="text-gray-900">L’impegno Comunitario:</strong> coinvolgere associazioni locali per garantire sicurezza e supporto logistico.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={itemFadeIn}>
                <FaChurch className="mr-4 mt-1 text-2xl text-sacra-primary shrink-0" />
                <span>
                  <strong className="text-gray-900">La sfida del sentiero:</strong> affrontare i 620 metri di dislivello come metafora del cammino spirituale personale.
                </span>
              </motion.li>
            </motion.ul>

            <motion.div className="mt-10 text-center" variants={itemFadeIn}>
              <p className="text-gray-800 leading-relaxed text-xl font-medium italic border-t border-gray-200 pt-6">
                Unisciti a noi per trasformare un breve sentiero in una grande esperienza di fede e fratellanza.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center pb-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.a
          href="#Percorso"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("Percorso");
          }}
          className="inline-block px-10 py-4 bg-sacra-primary text-white font-bold text-lg uppercase tracking-wide rounded-full shadow-xl hover:bg-sacra-hover transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-sacra-primary/50"
          variants={itemFadeIn}
        >
          Dettagli Tecnici del Percorso
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Intento;