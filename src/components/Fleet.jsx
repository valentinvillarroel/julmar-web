import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

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
    const [selectedMachine, setSelectedMachine] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('summary');
    const [filter, setFilter] = useState('Todos');

    const categories = ['Todos', ...new Set(machines.map(m => m.category))];
    const filteredMachines = filter === 'Todos' ? machines : machines.filter(m => m.category === filter);

    const openModal = (machine) => {
        setSelectedMachine(machine);
        setCurrentImageIndex(0);
        setActiveTab('summary');
    };

    const closeModal = () => {
        setSelectedMachine(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedMachine?.gallery) {
            setCurrentImageIndex((prev) => (prev === selectedMachine.gallery.length - 1 ? 0 : prev + 1));
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedMachine?.gallery) {
            setCurrentImageIndex((prev) => (prev === 0 ? selectedMachine.gallery.length - 1 : prev - 1));
        }
    };

    return (
        <section id="flota" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <span className="text-julmar-green font-bold uppercase tracking-widest mb-2 block text-xs md:text-sm">Catálogo 2026</span>
                        <h2 className="text-3xl md:text-5xl font-black text-julmar-dark">NUESTRA FLOTA</h2>
                    </div>
                    <a
                        href="#contacto"
                        className="group flex items-center gap-2 bg-julmar-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-julmar-green hover:text-julmar-dark transition-all duration-300 shadow-lg hover:shadow-julmar-green/20"
                    >
                        <Download size={20} className="group-hover:scale-110 transition-transform" />
                        <span>Descargar Catálogo Completo</span>
                    </a>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-12">
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
                                onClick={() => openModal(machine)}
                                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="aspect-w-16 aspect-h-12 overflow-hidden h-56 relative bg-gray-100">
                                    <img src={machine.image} alt={machine.name} className={`w-full h-full ${machine.fit === 'contain' ? 'object-contain p-4' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-700`} loading="lazy" />
                                    <span className="absolute top-4 right-4 bg-julmar-green text-julmar-dark text-xs font-bold px-3 py-1.5 z-20 rounded-full shadow-lg">DISPONIBLE</span>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-julmar-green-dark font-bold uppercase mb-2 tracking-wide bg-gray-50 inline-block px-2 py-1 rounded">{machine.category}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{machine.name}</h3>
                                    <p className="text-xs text-gray-500 mb-4 h-10 overflow-hidden">{machine.description}</p>

                                    <a
                                        href={`https://wa.me/56931052727?text=${encodeURIComponent(`Hola, me gustaría arrendar ${machine.name}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-full bg-julmar-green/10 text-julmar-green-dark font-bold py-2 rounded-lg mb-4 hover:bg-julmar-green hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center justify-center"
                                    >
                                        Cotizar Ahora
                                    </a>

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

            {/* Modal Gallery */}
            <AnimatePresence>
                {selectedMachine && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4 bg-julmar-dark/95 backdrop-blur-sm overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-none md:rounded-3xl overflow-hidden w-full max-w-4xl min-h-screen md:min-h-0 md:max-h-[90vh] flex flex-col shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors shadow-xl"
                            >
                                <X size={28} />
                            </button>

                            {/* Image Section */}
                            <div className="relative h-64 md:h-[500px] bg-gray-100 flex items-center justify-center overflow-hidden">
                                <AnimatePresence mode='wait'>
                                    <motion.img
                                        key={selectedMachine.gallery ? selectedMachine.gallery[currentImageIndex] : selectedMachine.image}
                                        src={selectedMachine.gallery ? selectedMachine.gallery[currentImageIndex] : selectedMachine.image}
                                        alt={selectedMachine.name}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full object-contain"
                                    />
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                {selectedMachine.gallery && selectedMachine.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Info Section with Tabs */}
                            <div className="p-8 bg-white flex-1 overflow-y-auto">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                    <div>
                                        <span className="text-julmar-green font-bold uppercase tracking-widest text-xs mb-2 block">{selectedMachine.category}</span>
                                        <h3 className="text-3xl font-black text-julmar-dark">{selectedMachine.name}</h3>
                                    </div>

                                    {/* Tabs */}
                                    <div className="flex bg-gray-100 p-1 rounded-lg mt-4 md:mt-0 relative z-0">
                                        <button
                                            onClick={() => setActiveTab('summary')}
                                            className={`relative z-10 px-4 py-2 rounded-md text-sm font-bold transition-colors duration-300 ${activeTab === 'summary' ? 'text-julmar-dark' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            {activeTab === 'summary' && (
                                                <motion.div
                                                    layoutId="tab-pill"
                                                    className="absolute inset-0 bg-white rounded-md shadow-sm -z-10"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            Resumen
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('specs')}
                                            className={`relative z-10 px-4 py-2 rounded-md text-sm font-bold transition-colors duration-300 ${activeTab === 'specs' ? 'text-julmar-dark' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            {activeTab === 'specs' && (
                                                <motion.div
                                                    layoutId="tab-pill"
                                                    className="absolute inset-0 bg-white rounded-md shadow-sm -z-10"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            Ficha Técnica
                                        </button>
                                    </div>
                                </div>

                                {/* Content based on Tab */}
                                {activeTab === 'summary' ? (
                                    <div className="space-y-6">
                                        <p className="text-gray-600 leading-relaxed text-lg">{selectedMachine.description}</p>

                                        {selectedMachine.features && (
                                            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                                                <h4 className="font-bold text-julmar-dark mb-4 flex items-center">
                                                    <span className="w-2 h-2 bg-julmar-green rounded-full mr-2"></span>
                                                    Destacados
                                                </h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {selectedMachine.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-gray-700 text-sm">
                                                            <span className="text-julmar-green mr-2">✓</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex items-center text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                                            <span className="font-bold mr-2 text-julmar-green">Capacidad:</span>
                                            <span className="font-medium">{selectedMachine.capacity}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-gray-50 text-gray-900 font-bold border-b border-gray-200">
                                                <tr>
                                                    <th className="px-6 py-3">Especificación</th>
                                                    <th className="px-6 py-3">Detalle</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {selectedMachine.specs ? Object.entries(selectedMachine.specs).map(([key, value], idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50">
                                                        <td className="px-6 py-3 font-medium text-gray-900 bg-gray-50/30 w-1/3">{key}</td>
                                                        <td className="px-6 py-3 text-gray-600">{value}</td>
                                                    </tr>
                                                )) : (
                                                    <tr>
                                                        <td colSpan="2" className="px-6 py-8 text-center text-gray-400 italic">
                                                            Información técnica detallada no disponible.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {/* Thumbnails (Only if gallery exists) */}
                                {selectedMachine.gallery && (
                                    <div className="flex gap-4 overflow-x-auto pb-2 mt-8 pt-6 border-t border-gray-100">
                                        {selectedMachine.gallery.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${currentImageIndex === idx ? 'border-julmar-green ring-2 ring-julmar-green/30' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                            >
                                                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Fleet;
