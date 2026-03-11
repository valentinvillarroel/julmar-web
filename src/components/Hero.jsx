import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
            {/* Imagen de fondo optimizada: JPG ligero para móvil, PNG alta calidad para PC */}
            <div className="absolute inset-0">
                <picture>
                    <source media="(max-width: 767px)" srcSet="/hero-movil.webp" type="image/webp" />
                    <source srcSet="/hero-bg-final.webp" type="image/webp" />
                    <motion.img
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        src="/hero-bg-final.webp"
                        alt="Arriendo de Maquinaria Pesada en Coquimbo"
                        className="w-full h-full object-cover"
                        fetchpriority="high"
                    />
                </picture>
            </div>

            {/* Overlay oscuro para contraste (Gradiente profesional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
            <div className="relative z-10 text-center px-4">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-julmar-green font-bold text-xl md:text-2xl mb-4 block tracking-wider"
                >
                    SOCIO ESTRATÉGICO EN TERRENO
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col mb-6"
                >
                    <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-julmar-green mb-2">
                        Arriendo de Maquinaria Pesada
                    </span>
                    <span className="text-5xl md:text-7xl font-black text-white leading-tight">
                        EN COQUIMBO Y ATACAMA
                    </span>
                    <span className="sr-only"> | Julmar SpA</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300 font-light"
                >
                    Arriendo de maquinaria pesada, excavadoras y camiones aljibe para la Gran Minería en Coquimbo, La Serena y Atacama.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#flota"
                        className="inline-block bg-julmar-green hover:bg-white text-julmar-dark font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-all shadow-xl shadow-julmar-green/20"
                    >
                        Ver Flota Disponible
                    </a>
                    <a
                        href="https://wa.me/56931052727?text=Hola%2C%20quiero%20cotizar%20arriendo%20de%20maquinaria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-all backdrop-blur-sm"
                    >
                        Cotizar por WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
