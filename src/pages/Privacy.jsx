import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Privacy = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-[#800020] mb-8 border-b pb-4">Informativa sulla Privacy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-6">1. Titolare del Trattamento</h2>
            <p>Il Titolare del trattamento dei dati è l'organizzazione del "Pellegrinaggio Sacra di San Michele" (Email: pellegrinaggiosacrasanmichele@gmail.com).</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6">2. Dati raccolti</h2>
            <p>Durante la compilazione del modulo di iscrizione, raccogliamo i seguenti dati personali: Nome, Cognome, Indirizzo Email, Numero di Telefono, scelta del pacchetto e, facoltativamente, eventuali intolleranze o allergie alimentari (Dati particolari ex art. 9 GDPR).</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6">3. Finalità del trattamento</h2>
            <p>I dati forniti verranno utilizzati esclusivamente per:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestire l'iscrizione e l'organizzazione logistica del pellegrinaggio.</li>
              <li>Comunicare aggiornamentchi, modifiche di orari o emergenze inerenti all'evento.</li>
              <li>Gestire in sicurezza i pasti tramite la conoscenza di allergie/intolleranze.</li>
              <li>Inviare materiale informativo relativo alle prossime edizioni del pellegrinaggio.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-6">4. Base giuridica</h2>
            <p>Il trattamento dei dati personali si basa sul consenso esplicito dell'utente, prestato tramite l'apposita spunta (checkbox) in fase di iscrizione.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6">5. Conservazione dei dati</h2>
            <p>I dati saranno conservati per il tempo strettamente necessario a compiere le finalità organizzative descritte e non verranno in alcun caso ceduti a terzi per scopi commerciali o di marketing.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6">6. Diritti dell'utente</h2>
            <p>L'utente ha il diritto di chiedere in ogni momento l'accesso ai propri dati, la rettifica, la cancellazione (diritto all'oblio) o la limitazione del trattamento, inviando una mail all'indirizzo sopra indicato.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;