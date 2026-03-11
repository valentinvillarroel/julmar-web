import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSeoDataFromUrl } from '../data/seoMatrix';
import { ShieldCheck, HardHat, Phone } from 'lucide-react';
import Fleet from '../components/Fleet';

const LocalServicePage = () => {
    const { serviceSlug, citySlug } = useParams();
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const data = getSeoDataFromUrl(serviceSlug, citySlug);
        if (!data.service || !data.location) {
            // Si la URL es inválida o tipeada mal, redirigir al inicio para evitar soft-404s
            navigate('/', { replace: true });
        } else {
            setPageData(data);
            window.scrollTo(0, 0);
        }
    }, [serviceSlug, citySlug, navigate]);

    if (!pageData) return null; // Prevenir destellos antes de redirigir

    const { service, location } = pageData;
    const pageTitle = `${service.name} en ${location.name} | Julmar`;
    const pageDescription = `Especialistas en ${service.name.toLowerCase()} para la Gran Minería e industria en ${location.name}, ${location.region}. Flota operativa y personal calificado. Cotiza tu equipo.`;
    const whatsappText = `Hola, me interesa solicitar una cotización para el servicio de ${service.name} en la zona de ${location.name}.`;

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* 1. Inyección de SEO Semántico (Helmet) */}
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={`https://julmar.cl/arriendo/${serviceSlug}/en/${citySlug}`} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={`https://julmar.cl${service.imageUrl}`} />
                <meta property="og:url" content={`https://julmar.cl/arriendo/${serviceSlug}/en/${citySlug}`} />
                
                {/* Microdata Estática Optimizada para IA Generativa */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": `${service.name} en ${location.name}`,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Maquinarias Julmar SpA",
                            "image": "https://julmar.cl/logo-julmar.webp"
                        },
                        "areaServed": [
                            {
                                "@type": "City",
                                "name": location.name
                            },
                            {
                                "@type": "State",
                                "name": location.region
                            }
                        ],
                        "description": pageDescription
                    })}
                </script>
            </Helmet>

            <Navbar />

            {/* 2. Hero Específico de H1 (Dominación Local Semántica) */}
            <section className="pt-32 pb-20 bg-julmar-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img src={service.imageUrl} alt={`${service.name} trabajando en ${location.name}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-julmar-dark via-julmar-dark/80 to-transparent"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-julmar-green/20 text-julmar-green px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                        <ShieldCheck size={18} /> Operaciones en {location.region}
                    </div>
                    {/* H1 Exacto para el Crawler */}
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
                        {service.name} en <span className="text-julmar-green">{location.name}</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {service.description} Disponibilidad operativa inmediata para proyectos en la zona de {location.name}.
                    </p>
                    <a 
                        href={`https://wa.me/56931052727?text=${encodeURIComponent(whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-julmar-green hover:bg-white text-julmar-dark font-black px-8 py-4 rounded-xl transition-all shadow-xl shadow-julmar-green/20 text-lg uppercase tracking-wide group"
                    >
                        <Phone size={24} className="group-hover:scale-110 transition-transform" />
                        Cotizar Disponibilidad
                    </a>
                </div>
            </section>

            {/* 3. Proof of Confidence */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                         <div className="p-4">
                             <HardHat size={40} className="mx-auto text-julmar-green mb-4" />
                             <h4 className="font-black text-xl text-slate-800 mb-2">Operadores Locales</h4>
                             <p className="text-slate-600">Personal certificado con experiencia técnica en los terrenos de {location.name}.</p>
                         </div>
                         <div className="p-4">
                             <ShieldCheck size={40} className="mx-auto text-julmar-green mb-4" />
                             <h4 className="font-black text-xl text-slate-800 mb-2">Estándar Minero</h4>
                             <p className="text-slate-600">Equipos de la categoría {service.machineType} bajo mantenimiento estricto cero fallas.</p>
                         </div>
                         <div className="p-4">
                             <Phone size={40} className="mx-auto text-julmar-green mb-4" />
                             <h4 className="font-black text-xl text-slate-800 mb-2">Respuesta Rápida</h4>
                             <p className="text-slate-600">Alianzas logísticas para posicionar la maquinaria en faena sin demoras operativas.</p>
                         </div>
                     </div>
                 </div>
            </section>

            {/* 4. Catálogo Global (Retiene en la página si no le convence este equipo) */}
            <div className="py-12">
                 <div className="text-center mb-8">
                      <h3 className="text-2xl font-black text-slate-800 uppercase">Explora Otros Equipos</h3>
                 </div>
                 <Fleet />
            </div>

            <Footer />
        </div>
    );
};

export default LocalServicePage;
