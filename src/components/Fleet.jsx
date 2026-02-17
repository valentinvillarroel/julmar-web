import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { slugify } from '../utils/stringUtils';

import { machines } from '../data/machines';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const Fleet = ({ onQuote = () => { } }) => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('Todos');

    const categories = ['Todos', ...new Set(machines.map(m => m.category))];
    const filteredMachines = filter === 'Todos' ? machines : machines.filter(m => m.category === filter);

    const handleQuote = (machineName, e) => {
        if (e) e.stopPropagation();
        // Navigate to the specific machine page with a hash to scroll to contact
        navigate(`/flota/${slugify(machineName)}#contact`);
    };

    const handleViewDetail = (machineName) => {
        navigate(`/flota/${slugify(machineName)}`);
    };

    return (
        <section id="flota" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <span className="text-julmar-green font-bold uppercase tracking-widest mb-2 block text-xs md:text-sm">Catálogo de Equipos</span>
                        <h2 className="text-3xl md:text-5xl font-black text-julmar-dark uppercase">Arriendo de Maquinaria en Coquimbo</h2>
                    </div>
                </div>

                {/* Filter Tabs - Sticky on Mobile */}
                <div className="sticky top-20 z-30 py-2 bg-white/80 backdrop-blur-md -mx-4 px-4 md:mx-0 md:bg-transparent md:static mb-8 md:mb-12 transition-all">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filter === cat
                                    ? 'bg-julmar-green text-julmar-dark shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredMachines.map((machine) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={machine.id}
                                variants={item}
                                onClick={() => handleViewDetail(machine.name)}
                                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="aspect-w-16 aspect-h-12 overflow-hidden h-56 relative bg-gray-100">
                                    <img src={machine.image} alt={machine.name} className={`w-full h-full ${machine.fit === 'contain' ? 'object-contain p-4' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-700`} loading="lazy" />
                                    <span className="absolute top-4 right-4 bg-julmar-green text-julmar-dark text-xs font-bold px-3 py-1.5 z-20 rounded-full shadow-lg">DISPONIBLE</span>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-julmar-green-dark font-bold uppercase mb-2 tracking-wide bg-gray-50 inline-block px-2 py-1 rounded">{machine.category}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{machine.name}</h3>
                                    <p className="text-xs text-gray-500 mb-4 line-clamp-2 min-h-[2.5em]">{machine.description}</p>

                                    <button
                                        onClick={(e) => handleQuote(machine.name, e)}
                                        className="w-full bg-julmar-green/10 text-julmar-green-dark font-bold py-2 rounded-lg mb-4 hover:bg-julmar-green hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center justify-center cursor-pointer"
                                    >
                                        Cotizar Ahora
                                    </button>

                                    <div className="flex items-center text-gray-700 text-sm border-t border-gray-100 pt-4 bg-gray-50 p-2 rounded -mx-2">
                                        <span className="w-2 h-2 rounded-full bg-julmar-green mr-2 shrink-0"></span>
                                        <span className="font-bold mr-1">Dato:</span> <span className="truncate">{machine.capacity}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Fleet;
