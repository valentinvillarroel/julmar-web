import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MixerBanner = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 relative overflow-hidden bg-julmar-dark">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234caf50\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-gradient-to-r from-emerald-900/40 to-slate-900 border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-julmar-green/20 text-julmar-green text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full w-fit mb-8 mx-auto md:mx-0 border border-julmar-green/30"
                        >
                            NUEVA DIVISIÓN 2026
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                            Especialistas en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-julmar-green to-emerald-300">Flota Mixer & Betoneras</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-xl">
                            Expandimos nuestra capacidad operativa con servicios exclusivos de mantenimiento integral y arriendo de equipos hormigoneros para la Región de Coquimbo.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button
                                onClick={() => navigate('/mixer')}
                                className="group bg-julmar-green hover:bg-white text-julmar-dark px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-julmar-green/20 flex items-center gap-3"
                            >
                                Ver Propuesta Comercial
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>

                            <div className="flex items-center gap-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                <div className="p-3 bg-white/10 rounded-xl text-julmar-green">
                                    <Cog size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Servicios 24/7</p>
                                    <p className="text-sm font-black text-white">Soporte en Terreno</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative group w-full max-w-md md:max-w-none">
                        <div className="absolute inset-0 bg-julmar-green/20 blur-[100px] rounded-full group-hover:bg-julmar-green/30 transition-all duration-700"></div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative bg-slate-800 rounded-[32px] overflow-hidden border border-white/10 shadow-3xl aspect-[4/3] flex items-center justify-center p-8"
                        >
                            <Truck size={120} className="text-julmar-green/20 absolute -bottom-10 -right-10 transform -rotate-12" />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 bg-julmar-green rounded-3xl flex items-center justify-center text-julmar-dark shadow-2xl mb-6 mx-auto transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                    <Truck size={48} />
                                </div>
                                <p className="text-2xl font-black text-white italic tracking-tighter">FLOTA MIXER</p>
                                <p className="text-xs text-julmar-green font-bold uppercase tracking-widest mt-2">Tecnología de Punta</p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-6 left-6 flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-julmar-green/40"></div>
                                <div className="w-2 h-2 rounded-full bg-julmar-green/20"></div>
                                <div className="w-2 h-2 rounded-full bg-julmar-green/10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MixerBanner;
