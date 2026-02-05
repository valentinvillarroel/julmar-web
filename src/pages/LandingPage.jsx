import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Trust from '../components/Trust';
import Quality from '../components/Quality';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
    const [selectedMachineForQuote, setSelectedMachineForQuote] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>Maquinarias Julmar SpA | Arriendo de Maquinaria Pesada IV Región</title>
                <meta name="description" content="Especialistas en arriendo de maquinaria pesada, transporte de agua y servicios para minería, vialidad y agropecuario en la IV Región (Coquimbo, La Serena)." />
                <meta name="keywords" content="maquinaria pesada, arriendo retroexcavadora, camiones aljibe, movimiento de tierra, minería, vialidad, agropecuario, la serena, coquimbo, julmar" />
                <meta property="og:title" content="Maquinarias Julmar SpA - Soluciones Integrales en IV Región" />
                <meta property="og:description" content="Flota moderna y servicio experto para faenas mineras, viales y agrícolas. Cotiza con nosotros." />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="min-h-screen bg-white font-sans selection:bg-julmar-green selection:text-julmar-dark">
                <Navbar />
                <Hero />
                <Clients />
                <Trust />
                <Quality />
                <Fleet onQuote={setSelectedMachineForQuote} />
                <Services />
                {/* <Portfolio /> */}
                <Contact preselectedMachine={selectedMachineForQuote} />
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
