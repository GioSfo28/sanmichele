import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import stili di Swiper
import "swiper/css";
import "swiper/css/pagination";

import CisomLogo from "../assets/CISOM.png";
import OperaSanMichele from "../assets/OperaSanMichele.jpg";
import Salesiani from "../assets/Salesiani.jpg";

const Collaborazioni = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const supportGroups = [
    { name: "Avigliana - Salesiani Don Bosco", logo: Salesiani },
    { name: "Opera San Michele - Torino", logo: OperaSanMichele },
    { name: "CISOM (Corpo Italiano di Soccorso)", logo: CisomLogo },
  ];

  return (
    <section className="w-full py-20 bg-gray-100" id="Collaborazioni">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-sacra-primary">
            Supporto e Volontariato
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mt-4 max-w-2xl mx-auto">
            Il nostro cammino è reso possibile grazie al supporto essenziale di associazioni, volontari e comunità locali.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            loop={supportGroups.length >= 3} 
            autoplay={{
              delay: 3500,
              disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            className="pb-12" // Padding per i "pallini"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {supportGroups.map((group, index) => {
              // --- LOGICA DI INGRANDIMENTO E SPAZIATURA SPECIFICA ---
              // Verifichiamo se il logo corrente è uno di quelli da ingrandire/distanziare.
              const isSalesiani = group.logo === Salesiani;
              const isOperaSanMichele = group.logo === OperaSanMichele;

              // 1. Definiamo classi dinamiche per la dimensione del logo.
              // Per Salesiani e Opera San Michele (che sono rettangolari lunghi),
              // allentiamo i vincoli max-h e max-w per farli sembrare più grandi visivamente.
              // Il default rimane invariato per il CISOM.
              const dynamicLogoClasses = (isSalesiani || isOperaSanMichele)
                ? "max-h-40 max-w-[210px]" // Più grandi e larghi (rispetto a h-24 e w-180)
                : "max-h-24 max-w-[180px]"; // Dimensioni di default (perfette per CISOM)

              // 2. Definiamo classi dinamiche per lo spazio sotto il logo (margin-bottom).
              // Per il CISOM (che è percepito come troppo attaccato), aumentiamo la spaziatura.
              // Per Salesiani e Opera San Michele, manteniamo il default.
              const dynamicMarginClasses = (isSalesiani || isOperaSanMichele)
                ? "mb-4" // Default (distanza normale)
                : "mb-7"; // Aumentato (più spazio per CISOM)

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center h-56 border border-gray-100 group mx-2"
                  >
                    <img
                      src={group.logo}
                      alt={`${group.name} logo`}
                      // Applichiamo le classi dinamiche calcolate sopra
                      // Ho aggiunto ${dynamicMarginClasses} al posto del fisso mb-4
                      className={`${dynamicLogoClasses} ${dynamicMarginClasses} w-full object-contain transition-transform duration-300 group-hover:scale-110`}
                    />
                    <p className="text-sm font-medium text-gray-700 text-center leading-snug group-hover:text-sacra-primary transition-colors">
                      {group.name}
                    </p>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-gray-500 leading-relaxed italic text-sm">
            Un ringraziamento speciale a tutti i volontari che assicurano la sicurezza e l’assistenza spirituale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborazioni;