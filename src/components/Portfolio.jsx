import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Construcción de Camino de Acceso",
        location: "Faena Minera, Atacama",
        description: "Movimiento de tierras masivo y perfilado de rutas industriales de alto tonelaje utilizando nuestras Excavadoras Komatsu PC210LC.",
        image: "/hero-movil.webp"
    },
    {
        id: 2,
        title: "Supresión de Polvo y Riego",
        location: "Ruta D-43, Coquimbo",
        description: "Abastecimiento hídrico ininterrumpido para control de emisiones con nuestra flota de Camiones Aljibe (hasta 30.000 Litros).",
        image: "/machinery/renault-k480/main-new.webp"
    },
    {
        id: 3,
        title: "Excavación de Zanjas",
        location: "Sector Industrial, La Serena",
        description: "Zanjeo de precisión para tendido eléctrico y tuberías operado por personal certificado con Retroexcavadoras John Deere 4x4.",
        image: "/machinery/jd-310l/main-site-v3.webp"
    }
];

const Portfolio = () => {
    return (
        <section id="proyectos" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-julmar-green font-bold uppercase tracking-widest mb-2 block text-sm">Respaldo E-E-A-T</span>
                    <h2 className="text-4xl md:text-5xl font-black text-julmar-dark mb-4">PROYECTOS DESTACADOS</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Evidencia operacional de nuestros servicios de arriendo de maquinaria y movimiento de tierras en el norte de Chile.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-julmar-green text-xs font-bold uppercase tracking-wider mb-1 block">{project.location}</span>
                                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
