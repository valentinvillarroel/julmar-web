import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Award, HardHat, CheckCircle2, Leaf } from 'lucide-react';

const Quality = () => {
    const features = [
        {
            icon: <Award size={40} />,
            title: "Cultura Cero Daño",
            description: "Seguridad intransable. Nuestros operadores y equipos cumplen con los exigentes protocolos de la Gran Minería."
        },
        {
            icon: <Wrench size={40} />,
            title: "Disponibilidad Garantizada",
            description: "Mantenimiento preventivo riguroso para asegurar la continuidad operacional y evitar detenciones no programadas."
        },
        {
            icon: <Leaf size={40} />,
            title: "Compromiso Ambiental",
            description: "Gestión eficiente de recursos y residuos. Operamos con conciencia del impacto en el entorno y comunidades."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-julmar-green font-bold uppercase tracking-widest mb-2 block text-sm">Estándar Corporativo</span>
                    <h2 className="text-3xl md:text-5xl font-black text-julmar-dark mb-4 uppercase">Seguridad en Faena Minera y Vial</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(163,230,53,0.3)] hover:border-julmar-green/50 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-julmar-green/10 rounded-2xl flex items-center justify-center mb-6 text-julmar-green group-hover:bg-julmar-green group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="mt-6 flex items-center text-julmar-green font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <CheckCircle2 size={16} className="mr-2" />
                                <span>Garantizado</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Ribbon / Standards Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 border-t border-gray-200 pt-12"
                >
                    <p className="text-center text-gray-400 text-sm uppercase tracking-widest font-bold mb-8">Operamos bajo estándares de</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder "Logos" using stylized text/icons */}
                        <div className="flex items-center space-x-2 group cursor-default">
                            <span className="text-3xl font-black text-gray-800">ISO</span>
                            <div className="flex flex-col leading-none">
                                <span className="text-xs font-bold text-gray-500">GESTIÓN DE</span>
                                <span className="font-bold text-gray-700">CALIDAD 9001</span>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-300 hidden md:block"></div>

                        <div className="flex items-center space-x-2 group cursor-default">
                            <span className="text-3xl font-black text-gray-800">HSE</span>
                            <div className="flex flex-col leading-none">
                                <span className="text-xs font-bold text-gray-500">SEGURIDAD Y</span>
                                <span className="font-bold text-gray-700">MEDIO AMBIENTE</span>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-300 hidden md:block"></div>

                        <div className="flex items-center space-x-2 group cursor-default">
                            <span className="text-3xl font-black text-gray-800">SICEP</span>
                            <div className="flex flex-col leading-none">
                                <span className="text-xs font-bold text-gray-500">ESTÁNDAR</span>
                                <span className="font-bold text-gray-700">PROVEEDORES</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Quality;

