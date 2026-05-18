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

  // 1. Aggiunti i "link" corrispondenti dove disponibili
  const supportGroups = [
    { 
      name: "Avigliana - Salesiani Don Bosco", 
      logo: Salesiani, 
      link: "https://www.madonnadeilaghi.it/" 
    },
    { 
      name: "Opera San Michele - Torino", 
      logo: OperaSanMichele, 
      link: null // Nessun link specificato, non sarà cliccabile
    },
    { 
      name: "CISOM (Corpo Italiano di Soccorso)", 
      logo: CisomLogo, 
      link: "https://www.cisom.org/" 
    },
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
              const isSalesiani = group.logo === Salesiani;
              const isOperaSanMichele = group.logo === OperaSanMichele;

              const dynamicLogoClasses = (isSalesiani || isOperaSanMichele)
                ? "max-h-40 max-w-[210px]" 
                : "max-h-24 max-w-[180px]"; 

              const dynamicMarginClasses = (isSalesiani || isOperaSanMichele)
                ? "mb-4" 
                : "mb-7"; 

              // 2. Determiniamo dinamicamente se usare un tag <a> o un <div>
              const MotionTag = group.link ? motion.a : motion.div;
              
              // 3. Impostiamo le proprietà del link solo se è presente
              const tagProps = group.link 
                ? { href: group.link, target: "_blank", rel: "noopener noreferrer" } 
                : {};

              return (
                <SwiperSlide key={index}>
                  {/* Se c'è un link, questo elemento diventerà un <a> cliccabile */}
                  <MotionTag
                    {...tagProps}
                    whileHover={{ y: -8 }}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center h-56 border border-gray-100 group mx-2 cursor-pointer"
                  >
                    <img
                      src={group.logo}
                      alt={`${group.name} logo`}
                      className={`${dynamicLogoClasses} ${dynamicMarginClasses} w-full object-contain transition-transform duration-300 group-hover:scale-110`}
                    />
                    <p className="text-sm font-medium text-gray-700 text-center leading-snug group-hover:text-sacra-primary transition-colors">
                      {group.name}
                    </p>
                  </MotionTag>
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