import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
            {/* Imagen de fondo a todo color */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg-final.png")' }}></div>

            {/* Overlay oscuro para contraste (Gradiente profesional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
            <div className="relative z-10 text-center px-4">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-julmar-green font-bold text-xl mb-4 block"
                >
                    EXPERTOS EN MAQUINARIA PESADA
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black mb-6"
                >
                    MAQUINARIAS <span className="text-julmar-green">JULMAR</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl max-w-2xl mx-auto mb-8 text-gray-300"
                >
                    Soluciones integrales para minería, construcción y obras viales en toda la región.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
