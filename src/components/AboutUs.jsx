import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Award, Target } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top translate-x-1/2 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Contenido Texto */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-1 bg-julmar-green rounded-full"></span>
                            <span className="text-julmar-green font-black uppercase tracking-widest text-sm">Quiénes Somos</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-6">
                            ESPECIALISTAS EN MOVIMIENTO DE TIERRAS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-julmar-green to-emerald-500">EN LA IV REGIÓN</span>
                        </h2>
                        
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Somos un equipo de profesionales altamente calificados, especializados en proveer soluciones integrales de maquinaria pesada para la Gran Minería, construcción y obras viales. 
                        </p>
                        
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Nuestra trayectoria en la Región de Coquimbo y Atacama nos permite entender las exigencias operacionales de cada faena, garantizando continuidad, seguridad y eficiencia mediante una flota certificada y soporte técnico 24/7.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <ShieldCheck size={32} className="text-julmar-green mb-2" />
                                <h4 className="text-xl font-black text-slate-800">Certificación SICEP</h4>
                                <p className="text-sm text-slate-500">Categoría Proveedor A</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <HardHat size={32} className="text-julmar-green mb-2" />
                                <h4 className="text-xl font-black text-slate-800">Cero Daño</h4>
                                <p className="text-sm text-slate-500">Estándar Operacional Minero</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Galería / Fotos E-E-A-T */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Columna Izquierda (Antes Derecha) */}
                            <div className="space-y-4">
                                <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-xl">
                                    <Award size={32} className="text-julmar-green mb-4" />
                                    <p className="font-black text-4xl text-slate-800 mb-2">+150</p>
                                    <p className="text-slate-600 font-medium text-sm">Proyectos Exitosos en Faena</p>
                                </div>
                                <img 
                                    src="/hero-bg-final.webp" 
                                    alt="Flota de maquinaria pesada Julmar" 
                                    className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-xl"
                                />
                            </div>

                            {/* Columna Derecha con padding-top (Antes Izquierda) */}
                            <div className="space-y-4 pt-12">
                                <img 
                                    src="/hero-movil.webp" 
                                    alt="Operaciones en faena minera" 
                                    className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-xl shadow-julmar-green/10"
                                />
                                <div className="bg-julmar-dark p-8 rounded-3xl text-white shadow-xl">
                                    <Target size={32} className="text-julmar-green mb-4" />
                                    <h4 className="font-black text-lg mb-2">Misión</h4>
                                    <p className="text-slate-400 text-sm">Asegurar la continuidad operacional de nuestros clientes.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Overlay Decorativo */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100">
                            <img src="/logo-julmar.webp" alt="Julmar Logo" className="h-8 w-auto" />
                            <div>
                                <p className="text-xs font-black text-slate-800 uppercase tracking-widest">Maquinarias Julmar SpA</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Operaciones Regionales</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Schema.org AboutPage (E-E-A-T Signal) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Maquinarias Julmar SpA",
                        "description": "Empresa especializada en arriendo de maquinaria pesada y servicios para la Gran Minería, construcción y obras viales en Coquimbo y Atacama.",
                        "founder": [
                            { "@type": "Person", "name": "Juan Luis Gálvez", "jobTitle": "Gerente Comercial" },
                            { "@type": "Person", "name": "Rodolfo Serrano", "jobTitle": "Gerente de Operaciones" }
                        ],
                        "award": "Certificación SICEP Categoría A"
                    }
                })}
            </script>
        </section>
    );
};

export default AboutUs;
