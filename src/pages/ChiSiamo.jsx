// File: src/pages/ChiSiamo.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCross } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer"; // Aggiusta il percorso se necessario
import Gio from "../assets/Gio.jpg";
import Ferdinando from "../assets/Ferdinando.jpeg"
import Simone from "../assets/Simone.jpeg"
import PadreMarco from "../assets/PadreMarco.jpeg"
import Giovanni from "../assets/Giovanni.jpeg"

// Sostituisci questi link con le tue immagini importate da assets!
const placeholderImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop";


const founders = [
    {
        name: "Simone Morano Gabbiani",
        role: "Ideatore",
        img: Simone,
        desc: "Ideatore del pellegrinaggio. Ha dato vita a questo progetto, coinvolgendo fin da subito i fratelli Giovanni e Ferdinando nell'organizzazione."
    },
    {
        name: "Giovanni di Gropello",
        role: "Organizzatore",
        img: Giovanni,
        desc: "Coinvolto nell'organizzazione dall'ideatore, si occupa in prima linea della logistica e della gestione pratica del cammino."
    },
    {
        name: "Ferdinando di Gropello",
        role: "Organizzatore",
        img: Ferdinando,
        desc: "Insieme al fratello Giovanni, cura i dettagli organizzativi, il coordinamento dei partecipanti e la sicurezza dell'evento."
    },
    {
        name: "Giorgio Sforza",
        role: "Responsabile Web",
        img: Gio,
        desc: "Responsabile di tutta la parte web, cura lo sviluppo della piattaforma digitale e la comunicazione online del pellegrinaggio."
    },
];

const spiritualFathers = [
    { name: "Padre Marco Moioli", role: "Padre Spirituale", img: PadreMarco },
    { name: "Don Lodovico De Bernardi", role: "Padre Spirituale", img: placeholderImage },
];

const ChiSiamo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerFadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemFadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

            {/* CONTENUTO PRINCIPALE */}
            <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
                <motion.div initial="hidden" animate="visible" variants={itemFadeIn} className="mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#800020] mb-4">
                        Chi siamo
                    </h1>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                        Un gruppo di amici uniti dalla fede e dalla passione per la montagna. Abbiamo creato questo cammino per condividere la bellezza della Sacra di San Michele.
                    </p>
                </motion.div>

                {/* I FONDATORI */}
                <motion.div
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerFadeIn}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b-2 border-gray-200 pb-4 inline-block">I Fondatori</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {founders.map((person, index) => (
                            <motion.div key={index} variants={itemFadeIn} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                                <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-50 shadow-sm" />
                                <h3 className="text-xl font-bold text-[#800020]">{person.name}</h3>
                                <p className="text-[#FFD700] font-semibold text-sm uppercase tracking-wider mb-4">{person.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{person.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* I PADRI SPIRITUALI */}
                <motion.div
                    className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerFadeIn}
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-[#800020]/10 rounded-full">
                            <FaCross className="text-3xl text-[#800020]" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Guida Spirituale</h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24">
                        {spiritualFathers.map((father, index) => (
                            <motion.div key={index} variants={itemFadeIn} className="flex flex-col items-center">
                                <img src={father.img} alt={father.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#800020]/20 shadow-md" />
                                <h3 className="text-2xl font-bold text-gray-900">{father.name}</h3>
                                <p className="text-[#688e26] font-medium text-sm uppercase tracking-wider mt-1">{father.role}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-gray-600 italic mt-8 text-lg max-w-xl mx-auto">
                        Ad accompagnarci in questo viaggio di fede e riflessione, guidando la preghiera e celebrando la S. Messa all'arrivo.
                    </p>
                </motion.div>

            </main>

            <Footer />
        </div>
    );
};

export default ChiSiamo;