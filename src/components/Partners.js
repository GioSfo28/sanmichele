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
import PastoraleCamilliana from "../assets/PastoraleCamilliana.jpeg"; 

const Collaborazioni = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const supportGroups = [
    { 
      name: "Avigliana - Salesiani Don Bosco", 
      logo: Salesiani, 
      link: "https://www.madonnadeilaghi.it/" 
    },
    { 
      name: "Opera San Michele - Torino", 
      logo: OperaSanMichele, 
      link: null 
    },
    { 
      name: "CISOM (Corpo Italiano di Soccorso)", 
      logo: CisomLogo, 
      link: "https://www.cisom.org/" 
    },
    { 
      name: "Pastorale Giovanile Camilliana", 
      logo: PastoraleCamilliana, 
      link: "https://www.facebook.com/PastoraleGiovanileCamillianaNordItaliana/?locale=it_IT" 
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
            className="pb-12 px-2"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {supportGroups.map((group, index) => {
              // Determiniamo dinamicamente se usare un tag <a> o un <div>
              const MotionTag = group.link ? motion.a : motion.div;
              
              const tagProps = group.link 
                ? { href: group.link, target: "_blank", rel: "noopener noreferrer" } 
                : {};

              return (
                <SwiperSlide key={index} className="h-auto"> 
                  {/* STRUTTURA CARD PULITA E PROFESSIONALE */}
                  <MotionTag
                    {...tagProps}
                    whileHover={{ y: -8 }}
                    // La card è un flex in colonna. h-full assicura che tutte le card siano alte uguali.
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group mx-2 cursor-pointer"
                  >
                    
                    {/* CONTENITORE LOGO (Bounding Box fissa) */}
                    {/* h-36 fissa l'altezza. I loghi si centreranno senza deformarsi */}
                    <div className="h-36 w-full flex items-center justify-center mb-6 overflow-hidden">
                      <img
                        src={group.logo}
                        alt={`${group.name} logo`}
                        // max-h-full max-w-full object-contain sono il segreto per loghi perfetti
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* CONTENITORE TESTO */}
                    {/* flex-grow spinge il testo a occupare lo spazio rimanente, allineandolo al centro in basso */}
                    <div className="flex-grow flex items-center justify-center w-full">
                      <p className="text-sm font-medium text-gray-700 text-center leading-snug group-hover:text-sacra-primary transition-colors">
                        {group.name}
                      </p>
                    </div>

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