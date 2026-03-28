import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { machines } from '../data/machines';
import { slugify } from '../utils/stringUtils';

const RetroexcavadoraLanding = () => {
    const retroMachines = machines.filter((machine) => machine.category === 'Retroexcavadoras');
    const canonicalUrl = 'https://julmar.cl/arriendo-retroexcavadora';
    const faqItems = [
        {
            question: '¿Cual es el precio del arriendo de retroexcavadora?',
            answer: 'El precio depende del plazo, ubicacion, tipo de faena y si requiere operador. Cotizamos rapido por WhatsApp segun tu proyecto.'
        },
        {
            question: '¿Tienen retroexcavadora con operador?',
            answer: 'Si. Disponemos de arriendo de retroexcavadora con operador certificado para trabajos en mineria, vialidad y construccion.'
        },
        {
            question: '¿En que zonas atienden el arriendo de retroexcavadora?',
            answer: 'Atendemos Coquimbo, La Serena, Ovalle, Illapel, Copiapo y Vallenar, con coordinacion logistica segun urgencia de faena.'
        },
        {
            question: '¿Cuanto demoran en responder una cotizacion?',
            answer: 'La respuesta comercial se gestiona de forma prioritaria en horario laboral y por WhatsApp para reducir tiempos de espera.'
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Helmet>
                <title>Arriendo de retroexcavadora en Coquimbo y Atacama | Maquinarias Julmar SpA</title>
                <meta
                    name="description"
                    content="Arriendo de retroexcavadora y retroexcavadora en arriendo con disponibilidad inmediata para mineria, obras viales y construccion en Coquimbo y Atacama. Cotiza por WhatsApp."
                />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Arriendo de retroexcavadora en Coquimbo y Atacama | Julmar" />
                <meta
                    property="og:description"
                    content="Servicio de arriendo de retroexcavadora para faena minera y construccion. Flota operativa, soporte tecnico y respuesta rapida."
                />
                <meta property="og:image" content="https://julmar.cl/machinery/jd-310l/main-site-v3.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Arriendo de retroexcavadora en Coquimbo y Atacama | Julmar" />
                <meta
                    name="twitter:description"
                    content="Arriendo de retroexcavadora para mineria y construccion en zona norte-centro de Chile."
                />
                <meta name="twitter:image" content="https://julmar.cl/machinery/jd-310l/main-site-v3.webp" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Arriendo retroexcavadora',
                        url: canonicalUrl,
                        serviceType: 'Arriendo de maquinaria pesada',
                        description: 'Arriendo retroexcavadora para mineria, obras viales y construccion en Coquimbo y Atacama.',
                        provider: {
                            '@type': 'LocalBusiness',
                            name: 'Maquinarias Julmar SpA',
                            url: 'https://julmar.cl',
                            telephone: '+56931052727'
                        },
                        areaServed: ['Coquimbo', 'La Serena', 'Ovalle', 'Copiapo', 'Vallenar', 'Region de Atacama'],
                        offers: {
                            '@type': 'Offer',
                            priceCurrency: 'CLP',
                            availability: 'https://schema.org/InStock',
                            url: canonicalUrl
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqItems.map((item) => ({
                            '@type': 'Question',
                            name: item.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: item.answer
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="pt-28 pb-16">
                <section className="bg-julmar-dark text-white py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-julmar-green font-bold uppercase tracking-widest text-xs mb-4">Cobertura Operativa Norte Chico</p>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                            Arriendo retroexcavadora en Coquimbo y Atacama
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
                            Disponibilidad inmediata para faenas mineras, obras viales y construccion. Flota mantenida, soporte tecnico y atencion directa por WhatsApp.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/56931052727?text=Hola,%20necesito%20cotizar%20arriendo%20retroexcavadora"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-julmar-green hover:bg-white text-julmar-dark font-black px-6 py-3 rounded-xl uppercase tracking-wider text-sm transition-colors"
                            >
                                Cotizar arriendo retroexcavadora
                            </a>
                            <a
                                href="/#flota"
                                className="border border-white/40 hover:border-julmar-green hover:text-julmar-green px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors"
                            >
                                Ver flota completa
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-14 md:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-black text-julmar-dark mb-4">Modelos disponibles para arriendo</h2>
                        <p className="text-gray-600 mb-10 max-w-3xl">
                            Equipos retroexcavadora para zanjas, movimiento de tierra, preparacion de terreno y apoyo operacional en faena.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {retroMachines.map((machine) => (
                                <article key={machine.id} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                    <img src={machine.image} alt={machine.name} className="w-full h-64 object-cover" loading="lazy" />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-black text-gray-900 mb-2">{machine.name}</h3>
                                        <p className="text-julmar-green-dark font-bold mb-3">{machine.capacity}</p>
                                        <p className="text-gray-600 mb-6">{machine.description}</p>
                                        <div className="flex gap-3 flex-wrap">
                                            <Link
                                                to={`/flota/${slugify(machine.name)}`}
                                                className="bg-julmar-dark hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors"
                                            >
                                                Ver ficha tecnica
                                            </Link>
                                            <a
                                                href={`https://wa.me/56931052727?text=${encodeURIComponent(`Hola, necesito cotizar arriendo retroexcavadora ${machine.name}`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-julmar-green/10 hover:bg-julmar-green hover:text-white text-julmar-green-dark px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors"
                                            >
                                                Cotizar este equipo
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-14 bg-gray-50 border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-black text-julmar-dark mb-4">Cobertura y tiempos de respuesta</h2>
                        <p className="text-gray-600 mb-6 max-w-3xl">
                            Operamos en Coquimbo, La Serena, Ovalle, Illapel, Copiapo y Vallenar. Priorizamos continuidad operacional y despacho coordinado segun criticidad de la faena.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/arriendo/arriendo-retroexcavadoras/en/coquimbo" className="text-sm font-bold text-julmar-green-dark hover:underline">
                                Arriendo retroexcavadora en Coquimbo
                            </Link>
                            <Link to="/arriendo/arriendo-retroexcavadoras/en/copiapo" className="text-sm font-bold text-julmar-green-dark hover:underline">
                                Arriendo retroexcavadora en Copiapo
                            </Link>
                            <Link to="/arriendo/arriendo-retroexcavadoras/en/la-serena" className="text-sm font-bold text-julmar-green-dark hover:underline">
                                Arriendo retroexcavadora en La Serena
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-14 md:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-black text-julmar-dark mb-8">Preguntas frecuentes sobre arriendo de retroexcavadora</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {faqItems.map((item) => (
                                <article key={item.question} className="border border-gray-200 rounded-2xl p-6 bg-white">
                                    <h3 className="text-xl font-black text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-gray-600">{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <Contact preselectedMachine="Retroexcavadora" />
            </main>

            <Footer />
        </div>
    );
};

export default RetroexcavadoraLanding;
