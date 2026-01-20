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
                    <img
                        src="/hero-bg-final.webp"
                        alt="Fondo Maquinaria"
                        className="w-full h-full object-cover"
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
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                >
                    <span className="text-white">JULMAR</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300 font-light"
                >
                    Gestión de activos y arriendo de maquinaria con estándares de la Gran Minería.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
