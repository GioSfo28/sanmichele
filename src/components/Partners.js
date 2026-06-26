import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import CisomLogo from "../assets/CISOM.png";
import OperaSanMichele from "../assets/OperaSanMichele.jpg";
import Salesiani from "../assets/Salesiani.jpg";
import PastoraleCamilliana from "../assets/PastoraleCamilliana.jpeg"; 

const Collaborazioni = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const supportGroups = [
    { 
      name: "Salesiani Don Bosco", 
      subtitle: "Avigliana",
      logo: Salesiani, 
      link: "https://www.madonnadeilaghi.it/",
      accent: "border-l-blue-500"
    },
    { 
      name: "Opera San Michele", 
      subtitle: "Torino",
      logo: OperaSanMichele, 
      link: null,
      accent: "border-l-sacra-primary"
    },
    { 
      name: "CISOM", 
      subtitle: "Corpo Italiano di Soccorso",
      logo: CisomLogo, 
      link: "https://www.cisom.org/",
      accent: "border-l-red-500"
    },
    { 
      name: "Pastorale Camilliana", 
      subtitle: "Giovanile Nord Italia",
      logo: PastoraleCamilliana, 
      link: "https://www.facebook.com/PastoraleGiovanileCamillianaNordItaliana/?locale=it_IT",
      accent: "border-l-green-500"
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden" id="Collaborazioni">
      {/* Elemento decorativo di sfondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sacra-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sacra-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header pulito ed elegante */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sacra-primary/10 rounded-xl flex items-center justify-center">
              <FaHandsHelping className="text-2xl text-sacra-primary" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Supporto e Volontariato
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sacra-accent/50" />
            <div className="w-1.5 h-1.5 bg-sacra-accent rounded-full" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sacra-accent/50" />
          </div>

          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Il nostro cammino è reso possibile grazie al supporto essenziale di associazioni, volontari e comunità locali.
          </p>
        </motion.div>

        {/* Swiper professionale con effetto 3D sottile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            loop={supportGroups.length >= 3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            className="pb-14 px-2"
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 25 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
          >
            {supportGroups.map((group, index) => (
              <SwiperSlide key={index} className="h-auto py-4">
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="h-full"
                >
                  {group.link ? (
                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card group={group} />
                    </a>
                  ) : (
                    <Card group={group} />
                  )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Ringraziamento elegante */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-gray-500 text-sm italic font-light">
            Un ringraziamento speciale a tutti i volontari che assicurano la sicurezza e l'assistenza spirituale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Componente Card separato per pulizia
const Card = ({ group }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${group.accent} border-l-4 overflow-hidden group h-full flex flex-col`}>
      {/* Contenitore logo */}
      <div className="h-44 w-full flex items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="relative">
          {/* Effetto glow sottile al hover */}
          <div className="absolute inset-0 bg-sacra-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100" />
          <img
            src={group.logo}
            alt={`${group.name} logo`}
            className="relative z-10 max-h-32 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Contenuto testuale */}
      <div className="flex-grow flex flex-col justify-center items-center p-6 text-center border-t border-gray-50">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-sacra-primary transition-colors duration-300 mb-1">
          {group.name}
        </h3>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
          {group.subtitle}
        </p>
        
        {group.link && (
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-sacra-accent font-semibold tracking-wide">
              Visita il sito →
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collaborazioni;