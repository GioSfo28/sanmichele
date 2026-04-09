import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CisomLogo from "../assets/CISOM.png";
import VociDelVerboLogo from "../assets/VociVerbo.png";
// Loghi segnaposto per chi non lo ha ancora


const Collaborazioni = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  const supportGroups = [
    { name: "CISOM (Corpo Italiano di Soccorso)", logo: CisomLogo },
    { name: "Voci del Verbo (Animazione Liturgica)", logo: VociDelVerboLogo },
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
          <Slider {...settings} className="pb-8">
            {supportGroups.map((group, index) => (
              <div key={index} className="px-4 outline-none">
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center h-56 border border-gray-100 group">
                  <img
                    src={group.logo}
                    alt={`${group.name} logo`}
                    className="max-h-24 w-full max-w-[180px] object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="text-sm font-medium text-gray-700 text-center leading-snug">
                    {group.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
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