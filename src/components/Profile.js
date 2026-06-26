import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHeart, FaMountain, FaChurch, FaStar } from "react-icons/fa";
import PellegrinaggioLogo from "../assets/Sacra.jpg";
import { scrollToElement } from "../utils/scrollUtils";

const Intento = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Solo l'effetto scale, SENZA rotazione
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const pillars = [
    {
      icon: FaChurch,
      title: "Un cammino che parla al cuore",
      description: "Riscopri la storia millenaria della Sacra di San Michele e lasciati guidare da un pellegrinaggio che unisce fede, bellezza e ricerca di senso.",
      color: "from-blue-500 to-purple-600",
      gradient: "from-blue-500/20 to-purple-600/20"
    },
    {
      icon: FaHeart,
      title: "Insieme, come una sola Chiesa",
      description: "Cammina accanto a giovani provenienti da parrocchie, movimenti e associazioni diverse. Nuovi incontri, condivisione e fraternità lungo ogni passo.",
      color: "from-red-500 to-pink-600",
      gradient: "from-red-500/20 to-pink-600/20"
    },
    {
      icon: FaMountain,
      title: "Una sfida che ti cambia",
      description: "620 metri di dislivello, fatica, silenzio e gioia. Un percorso che mette alla prova il corpo e rafforza lo spirito, fino alla vetta della Sacra.",
      color: "from-green-500 to-emerald-600",
      gradient: "from-green-500/20 to-emerald-600/20"
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white" id="Storia">
      {/* Sfondo animato con gradienti fluttuanti */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-sacra-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-sacra-primary/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo centrale con effetto 3D - STATICO, SENZA ROTAZIONE */}
        <motion.div
          className="text-center mb-16"
          style={{ scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            {/* Effetto glow dietro il logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-sacra-accent via-amber-400 to-sacra-primary rounded-full blur-2xl opacity-50 animate-pulse" />

            {/* Anello decorativo (NON ruota, solo effetto pulse) */}
            <div className="absolute -inset-4 border-2 border-dashed border-sacra-accent/30 rounded-full animate-pulse" />

            {/* Logo immagine - STATICO */}
            <img
              src={PellegrinaggioLogo}
              alt="Logo del Pellegrinaggio Sacra di San Michele"
              className="w-48 h-48 sm:w-56 sm:h-56 mx-auto object-cover rounded-full shadow-2xl border-4 border-white relative z-10 hover:scale-105 transition-transform duration-700"
            />

            {/* Decorazione stella */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 text-3xl"
            >
              ✦
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Titolo con effetto moderno */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sacra-primary via-sacra-accent to-amber-500">
              Fede e Sentiero
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-sacra-accent" />
            <FaStar className="text-sacra-accent text-2xl animate-spin" style={{ animationDuration: '3s' }} />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-sacra-accent" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl mt-4 font-semibold max-w-3xl mx-auto text-sacra-secondary uppercase tracking-wider"
          >
            Avigliana – Sacra di San Michele
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Un'esperienza unica lungo la Via Micaelica, dalla Valle di Susa all'Abbazia millenaria. La riscoperta del cammino storico.
          </motion.p>
        </motion.div>

        {/* Blocco storico con design moderno glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50 max-w-5xl mx-auto mb-20 overflow-hidden group"
        >
          {/* Sfondo gradiente animato */}
          <div className="absolute inset-0 bg-gradient-to-br from-sacra-primary/5 via-transparent to-sacra-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Linea decorativa laterale */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sacra-primary via-sacra-accent to-sacra-primary" />

          {/* Decorazione angolare */}
          <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            ✦
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-sacra-primary mb-6 relative z-10">
            Una via millenaria
          </h3>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg font-light relative z-10">
            <p className="text-justify">
              Fin dal Medioevo, la <strong className="font-semibold text-gray-900">Valle di Susa</strong> è stata
              un crocevia fondamentale per i pellegrini in transito lungo le vie della fede verso Roma o Santiago.
              Salire lungo i pendii boscosi verso la cima del Monte Pirchiriano non ha mai rappresentato solo uno
              sforzo fisico, ma un vero e proprio atto di purificazione e preghiera.
            </p>
            <p className="text-justify">
              Ripercorrere oggi i sentieri che separano Avigliana dalla Sacra significa riconnettersi a questa
              antica tradizione. L'Abbazia non è un luogo scelto a caso: si erge maestosa come punto centrale
              della misteriosa <strong className="font-semibold text-gray-900">Linea Micaelica</strong>, un perfetto
              e inspiegabile allineamento di oltre duemila chilometri che unisce sette grandi santuari dedicati
              all'Arcangelo Michele, dall'Irlanda fino a Gerusalemme.
            </p>
            <div className="bg-gradient-to-r from-sacra-primary/5 to-sacra-accent/5 rounded-2xl p-6 border border-sacra-accent/20 backdrop-blur-sm">
              <p className="italic text-gray-600 text-xl font-light text-justify">
                "Camminare verso la Sacra significa mettere i propri passi in quelli di chi, per secoli,
                ha cercato la luce e la protezione dell'Arcangelo guerriero."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pilastri con card 3D effetto hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center justify-center text-sacra-primary">
            <FaChurch className="mr-4 text-3xl text-sacra-accent drop-shadow-sm" />
            Il nostro intento
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Sfondo gradiente al hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                {/* Contenuto */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                  >
                    <pillar.icon className="text-4xl text-white" />
                  </motion.div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sacra-primary transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorazione angolo */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <FaStar className="text-sacra-accent animate-spin" style={{ animationDuration: '4s' }} />
                  </div>
                </div>

                {/* Effetto bordo luminoso al hover */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-50 transition-all duration-500`}
                  style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(to bottom right, ${pillar.color.split(' ')[1]}, ${pillar.color.split(' ')[3]}) border-box`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="#Percorso"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("Percorso");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sacra-primary to-sacra-accent text-white font-bold text-lg uppercase tracking-wide rounded-full shadow-xl hover:shadow-2xl hover:shadow-sacra-accent/30 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Dettagli Tecnici del Percorso</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              →
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-r from-sacra-accent to-sacra-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intento;