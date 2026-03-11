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
import MixerBanner from '../components/MixerBanner';
import AboutUs from '../components/AboutUs';

const LandingPage = () => {
    const [selectedMachineForQuote, setSelectedMachineForQuote] = useState('');
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const hasCategory = queryParams.has('categoria');

        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (hasCategory) {
            // Si hay categoría, bajamos automáticamente a la flota
            const fleetElement = document.getElementById('flota');
            if (fleetElement) {
                setTimeout(() => {
                    fleetElement.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>Maquinarias Julmar SpA | Arriendo Maquinaria Pesada Coquimbo y Atacama</title>
                <meta name="description" content="Especialistas en arriendo de maquinaria pesada, transporte de agua y servicios para minería y vialidad en Coquimbo, La Serena y Atacama. Equipos Komatsu, Excavadoras, Retroexcavadoras y Camiones Aljibe." />
                <link rel="canonical" href="https://julmar.cl/" />

                {/* Open Graph / Facebook / WhatsApp */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://julmar.cl/" />
                <meta property="og:title" content="Maquinarias Julmar SpA | Arriendo Maquinaria Pesada en Coquimbo" />
                <meta property="og:description" content="Flota certificada para faenas mineras, viales y agrícolas en la Región de Coquimbo y Atacama. Excavadoras, Retroexcavadoras y Camiones Aljibe disponibles." />
                <meta property="og:image" content="https://julmar.cl/hero-bg-final.webp" />
                <meta property="og:locale" content="es_CL" />
                <meta property="og:site_name" content="Maquinarias Julmar SpA" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Maquinarias Julmar SpA | Arriendo Maquinaria Pesada en Coquimbo" />
                <meta name="twitter:description" content="Flota certificada para faenas mineras, viales y agrícolas en la Región de Coquimbo y Atacama." />
                <meta name="twitter:image" content="https://julmar.cl/hero-bg-final.webp" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": "https://julmar.cl",
                            "name": "Maquinarias Julmar SpA",
                            "image": "https://julmar.cl/logo-julmar.webp",
                            "logo": "https://julmar.cl/logo-julmar.webp",
                            "telephone": "+56931052727",
                            "email": "jgalvez@julmarspa.com",
                            "url": "https://julmar.cl",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Coquimbo",
                                "addressLocality": "Coquimbo",
                                "addressRegion": "Región de Coquimbo",
                                "addressCountry": "CL"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -29.9533,
                                "longitude": -71.3436
                            },
                            "priceRange": "$$$",
                            "foundingDate": "2019",
                            "description": "Arriendo de maquinaria pesada, excavadoras y camiones aljibe para la Gran Minería y proyectos viales en la Región de Coquimbo y Atacama. Flota certificada y continuidad operacional.",
                            "areaServed": [
                                "Coquimbo",
                                "La Serena",
                                "Vicuña",
                                "Ovalle",
                                "Andacollo",
                                "Salamanca",
                                "Illapel",
                                "Copiapó",
                                "Vallenar",
                                "Región de Coquimbo",
                                "Región de Atacama"
                            ],
                            "knowsAbout": [
                                "Arriendo de Maquinaria Pesada",
                                "Servicios Mineros",
                                "Movimiento de Tierras",
                                "Transporte de Agua en Camión Aljibe"
                            ],
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "08:00",
                                "closes": "18:00"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/maquinarias-julmar/"
                            ],
                            "slogan": "Socio Estratégico en Terreno",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Flota de Maquinaria Pesada y Servicios",
                                "itemListElement": [
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arriendo de Excavadora" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arriendo de Retroexcavadora" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arriendo de Camión Aljibe" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arriendo de Cargador Frontal" } }
                                ]
                            }
                        }
                    `}
                </script>

                {/* Schema.org FAQPage - optimizado para búsquedas en IA (GEO/AEO) */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "¿Qué tipo de maquinaria arrienda Julmar SpA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Julmar SpA arrienda maquinaria pesada incluyendo equipos Komatsu, retroexcavadoras, excavadoras, camiones aljibe y cargadores frontales para la Gran Minería, construcción y obras viales en La Serena, Coquimbo y Atacama."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "¿En qué regiones opera Julmar SpA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Julmar SpA opera principalmente en la Región de Coquimbo (La Serena, Coquimbo, Ovalle, Andacollo, Vicuña) y la Región de Atacama (Copiapó, Vallenar). También tiene presencia en la Región Metropolitana para servicios de mixer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "¿Cómo puedo solicitar una cotización de arriendo?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Puede solicitar una cotización de arriendo de maquinaria pesada contactando directamente por WhatsApp al +56 9 3105 2727 o enviando un correo a jgalvez@julmarspa.com. También puede completar el formulario de contacto en esta página."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "¿La flota de Julmar está certificada para faenas mineras?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sí, Julmar SpA cuenta con flota certificada bajo estándares de seguridad para faenas mineras. La empresa está registrada como proveedor en SICEP y cumple con los protocolos de seguridad exigidos por la Gran Minería en Chile."
                                    }
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <div className="min-h-screen bg-white font-sans selection:bg-julmar-green selection:text-julmar-dark">
                <Navbar />
                <Hero />
                <Clients />
                <AboutUs />
                <Trust />
                <Quality />
                <Fleet onQuote={setSelectedMachineForQuote} />
                <Services />
                <Portfolio />
                <Contact preselectedMachine={selectedMachineForQuote} />
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
