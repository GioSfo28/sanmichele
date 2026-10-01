import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDownload, FaBell } from "react-icons/fa";
import * as THREE from "three";

// ============ ASSETS SFONDO VIDEO ============
import videoPC from "../assets/back.mp4";
import videoMobile from "../assets/2025/3.mp4";

// ============ LOGO E LOCANDINA ============
import logoSacra from "../assets/SanMichele.png";
import locandinaImg from "../assets/Locandina.jpeg";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 0.8, 0]);

  // Configurazione Three.js per effetto particelle
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mountNode = document.getElementById("particle-container");
    if (mountNode) {
      mountNode.appendChild(renderer.domElement);
    }

    // Geometria particelle spirituali
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 5;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xd4a017,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountNode && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      id="top"
    >
      {/* Container particelle 3D */}
      <div
        id="particle-container"
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Sfondo Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="hidden md:block w-full h-full object-cover"
          src={videoPC}
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "brightness(0.4) saturate(1.2)" }}
        />
        <video
          className="block md:hidden w-full h-full object-cover"
          src={videoMobile}
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "brightness(0.4) saturate(1.2)" }}
        />
      </div>

      {/* Overlay gradiente animato */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

      {/* Linee decorative animate */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sacra-accent to-transparent animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sacra-accent to-transparent animate-pulse animation-delay-2000" />
      </div>

      {/* Contenuto principale */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4 w-full"
        style={{ opacity }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
          className="relative mb-4 sm:mb-10"
        >
          <div className="absolute inset-0 bg-sacra-accent/20 rounded-full blur-3xl transform scale-150" />
          <img
            src={logoSacra}
            alt="Logo Pellegrinaggio San Michele"
            className="w-56 sm:w-80 md:w-96 lg:w-[28rem] h-auto mx-auto drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Titolo con effetto */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sacra-accent via-amber-400 to-sacra-accent">
            Pellegrinaggio
          </span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide block sm:inline"
          >
            {" "}
            di San Michele
          </motion.span>
        </motion.h1>

        {/* Sottotitolo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto px-2 leading-relaxed"
        >
          Il pellegrinaggio dei giovani da Avigliana alla maestosa{" "}
          <strong className="font-semibold text-sacra-accent">
            Sacra di San Michele
          </strong>
          .
        </motion.p>

        {/* 🆕 BADGE "GRAZIE 2026" + DATA 2027 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.3,
            duration: 0.6,
            type: "spring",
            stiffness: 200,
          }}
          className="mt-4 sm:mt-6 mb-4 sm:mb-6 flex flex-col items-center gap-3"
        >
          {/* Badge ringraziamento 2026 */}
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm sm:text-base font-semibold text-white/90 tracking-wider">
            ✨ Grazie a tutti i 2026 pellegrini dell'edizione 2026 ✨
          </span>

          {/* Data 2027 in grande */}
          <span className="inline-block px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-sacra-accent/30 to-amber-500/30 backdrop-blur-md rounded-full border-2 border-sacra-accent/60 shadow-2xl shadow-sacra-accent/20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider">
            25/26 Settembre 2027
          </span>

          {/* Sottotitolo 2027 */}
          <span className="text-sm sm:text-base text-sacra-accent font-semibold uppercase tracking-widest">
            Prossima Edizione · In Preparazione
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 mb-6 sm:mt-8 sm:mb-10"
        >
          {[
            { value: "14", unit: "KM", label: "Distanza" },
            { value: "620", unit: "M", label: "Dislivello" },
            { value: "4-5", unit: "ORE", label: "Cammino" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl px-5 sm:px-8 py-3 sm:py-4 border border-white/20 shadow-2xl"
            >
              <div className="text-2xl sm:text-4xl font-black text-white whitespace-nowrap">
                {stat.value}
                <span className="text-base sm:text-xl text-sacra-accent ml-1">
                  {stat.unit}
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottoni CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 mb-24 sm:mb-12"
        >
          {/* CTA principale: Rimani aggiornato per il 2027 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/iscrizione"
              className="group relative flex justify-center items-center gap-3 px-8 py-4 bg-gradient-to-r from-sacra-accent to-amber-500 text-gray-900 font-bold text-base sm:text-lg uppercase tracking-wider rounded-full shadow-2xl hover:shadow-sacra-accent/50 transition-all duration-500 overflow-hidden w-full"
            >
              <FaBell className="relative z-10 text-lg" />
              <span className="relative z-10">Rimani aggiornato</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-sacra-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </Link>
          </motion.div>

          {/* CTA secondaria: Locandina */}
          <motion.a
            href={locandinaImg}
            download="Locandina_Pellegrinaggio_San_Michele.jpeg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-base sm:text-lg"
          >
            <FaDownload className="text-lg" />
            Scarica la locandina
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Indicatore scroll */}
      <motion.div
        className="absolute bottom-8 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-sacra-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;