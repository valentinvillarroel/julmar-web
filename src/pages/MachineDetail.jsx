import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Phone, Mail, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { machines } from '../data/machines';

// Utility for slug matching
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};

const MachineDetail = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [machine, setMachine] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0); // Start at top
        const found = machines.find(m => slugify(m.name) === slug);
        setMachine(found);
    }, [slug]);

    useEffect(() => {
        if (location.hash === '#contact') {
            const timer = setTimeout(() => {
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Small delay to ensure render
            return () => clearTimeout(timer);
        }
    }, [location, machine]);

    if (!machine) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Máquina no encontrada</h2>
                    <Link to="/" className="text-julmar-green font-bold hover:underline">Volver al Inicio</Link>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        if (machine.gallery) {
            setCurrentImageIndex((prev) => (prev === machine.gallery.length - 1 ? 0 : prev + 1));
        }
    };

    const prevImage = () => {
        if (machine.gallery) {
            setCurrentImageIndex((prev) => (prev === 0 ? machine.gallery.length - 1 : prev - 1));
        }
    };

    const displayImage = machine.gallery ? machine.gallery[currentImageIndex] : machine.image;

    return (
        <div className="min-h-screen bg-white font-sans">
            <Helmet>
                <title>{`${machine.name} | Arriendo en Coquimbo - Julmar SpA`}</title>
                <meta name="description" content={`Arriendo de ${machine.name} en Coquimbo y La Serena. ${machine.capacity}. ${machine.description}`} />
                <link rel="canonical" href={`https://julmar.cl/flota/${slug}`} />

                {/* Open Graph */}
                <meta property="og:type" content="product" />
                <meta property="og:url" content={`https://julmar.cl/flota/${slug}`} />
                <meta property="og:title" content={`${machine.name} | Maquinarias Julmar`} />
                <meta property="og:description" content={`${machine.capacity}. Disponible para arriendo inmediato en IV Región.`} />
                <meta property="og:image" content={`https://julmar.cl${machine.image}`} />

                {/* Schema.org Product Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": "${machine.name}",
                            "image": [
                                "https://julmar.cl${machine.image}"
                                ${machine.gallery ? machine.gallery.map(img => `,"https://julmar.cl${img}"`).join('') : ''}
                            ],
                            "description": "${machine.description}",
                            "brand": {
                                "@type": "Brand",
                                "name": "${machine.category}" 
                            },
                            "offers": {
                                "@type": "Offer",
                                "url": "https://julmar.cl/flota/${slug}",
                                "priceCurrency": "CLP",
                                "availability": "https://schema.org/InStock",
                                "price": "0" 
                            }
                        }
                    `}
                </script>
            </Helmet>

            <Navbar />

            {/* Breadcrumb / Header */}
            <div className="bg-julmar-dark text-white pt-24 pb-8 md:pt-32 md:pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center text-sm text-gray-400 mb-4 space-x-2">
                        <Link to="/" className="hover:text-white transition-colors"><Home size={14} /></Link>
                        <span>/</span>
                        <Link to="/" className="hover:text-white transition-colors">Flota</Link>
                        <span>/</span>
                        <span className="text-julmar-green truncate">{machine.name}</span>
                    </div>
                    <span className="text-julmar-green font-bold uppercase tracking-widest text-xs md:text-sm block mb-2">{machine.category}</span>
                    <h1 className="text-3xl md:text-5xl font-black">{machine.name}</h1>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Gallery Section */}
                    <div className="space-y-4">
                        <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200 group">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={displayImage}
                                    src={displayImage}
                                    alt={machine.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`w-full h-full ${machine.fit === 'contain' ? 'object-contain p-8' : 'object-cover'}`}
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            {machine.gallery && machine.gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {machine.gallery && (
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {machine.gallery.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${currentImageIndex === idx ? 'border-julmar-green ring-2 ring-julmar-green/30' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info Section */}
                    <div>
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-julmar-green/10 rounded-bl-full pointer-events-none"></div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción General</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {machine.description}
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-2 h-2 bg-julmar-green rounded-full mr-2"></span>
                                Especificaciones Técnicas
                            </h3>

                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                                <div className="grid grid-cols-1 gap-y-4">
                                    {machine.specs ? Object.entries(machine.specs).map(([key, value], idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                                            <span className="font-medium text-gray-500">{key}</span>
                                            <span className="font-bold text-gray-900">{value}</span>
                                        </div>
                                    )) : (
                                        <p className="text-gray-400 italic">Especificaciones no disponibles.</p>
                                    )}
                                </div>
                            </div>

                            {machine.features && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Características Destacadas</h3>
                                    <ul className="space-y-2">
                                        {machine.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <CheckCircle2 size={20} className="text-julmar-green mr-2 shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="space-y-4">
                                <a
                                    href={`https://wa.me/56931052727?text=${encodeURIComponent(`Hola, me interesa arrendar la ${machine.name}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold py-4 rounded-xl text-center shadow-lg transition-all hover:scale-[1.02]"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone size={20} />
                                        <span>Cotizar Rápido por WhatsApp</span>
                                    </div>
                                </a>
                                <button
                                    onClick={() => {
                                        const contactSection = document.getElementById('contacto');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="block w-full bg-julmar-dark hover:bg-black text-white font-bold py-4 rounded-xl text-center shadow-lg transition-all hover:scale-[1.02]"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Mail size={20} />
                                        <span>Solicitar Cotización Formal</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Re-use Contact Component (It handles its own display, we just pass preselected props) */}
            <Contact preselectedMachine={machine.name} />

            <Footer />
        </div>
    );
};

export default MachineDetail;
