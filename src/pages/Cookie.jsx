import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Cookie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/95 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#800020]">
            Pellegrinaggio <span className="text-gray-900 font-light">San Michele</span>
          </Link>
          <Link to="/" className="flex items-center text-gray-700 hover:text-[#800020] font-medium transition-colors">
            <FaArrowLeft className="mr-2" /> Torna alla Home
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg border border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#800020] mb-8 border-b pb-4">Cookie Policy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-6">Cosa sono i Cookie?</h2>
            <p>I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall'utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6">Cookie utilizzati da questo sito</h2>
            <p>Questo sito web utilizza <strong>esclusivamente Cookie Tecnici</strong>. Questi cookie sono necessari per il corretto funzionamento del sito e per fornire il servizio richiesto dall'utente (ad esempio, mantenere attiva la sessione o memorizzare le preferenze di navigazione base). Non richiedono il consenso preventivo dell'utente.</p>
            
            <p>Non utilizziamo cookie di profilazione per inviare messaggi pubblicitari in linea con le preferenze manifestate dall'utente nell'ambito della navigazione in rete.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6">Servizi di Terze Parti</h2>
            <p>Il sito potrebbe integrare mappe (es. Leaflet/OpenStreetMap) o font (Google Fonts) che potrebbero a loro volta installare cookie tecnici o di statistica aggregata gestiti in autonomia da queste terze parti.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6">Come disabilitare i Cookie</h2>
            <p>Se lo desideri, puoi disabilitare l'uso dei cookie direttamente dalle impostazioni del tuo browser. Ricorda tuttavia che disabilitare i cookie tecnici potrebbe compromettere il corretto funzionamento di alcune sezioni del sito.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cookie;