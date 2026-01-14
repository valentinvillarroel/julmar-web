import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// DATOS REALES DE MAQUINARIA
const machines = [
    {
        id: 2,
        name: "Retroexcavadora John Deere 310L",
        category: "Retroexcavadoras",
        capacity: "Peso 6.770 kg | Potencia 87 hp",
        description: "Versatilidad máxima para excavación y zanjas en obras urbanas.",
        image: "/machinery/jd-310l/main.jpg",
        gallery: [
            "/machinery/jd-310l/detail-1.jpg",
            "/machinery/jd-310l/detail-2.jpg",
            "/machinery/jd-310l/detail-3.jpg"
        ],
        features: ["Brazo extensible", "Tracción 4x4"],
        specs: { "Potencia": "87 hp", "Peso Operativo": "6,770 kg" }
    },
    {
        id: 6,
        name: "Retroexcavadora John Deere 310P",
        category: "Retroexcavadoras",
        capacity: "Peso 7.100 kg | Potencia 99 hp",
        description: "Mayor potencia y precisión para trabajos exigentes.",
        image: "/machinery/jd-310p/main-new.jpg",
        gallery: [
            "/machinery/jd-310p/detail-1-new.jpg"
        ],
        features: ["Control de precisión", "Mayor capacidad de levante"],
        specs: { "Potencia": "99 hp", "Peso Operativo": "7,100 kg" }
    },
    {
        id: 5,
        name: "Camión Aljibe Renault K480 8x4",
        category: "Camiones Aljibe",
        capacity: "Estanque 30.000 L | Potencia 480 HP",
        description: "Gran capacidad para riego industrial y transporte de agua.",
        image: "/machinery/renault-k480/main-new.jpg",
        gallery: [
            "/machinery/renault-k480/detail-1-new.jpg"
        ],
        features: ["Tracción 8x4 para terrenos difíciles", "Sistema de riego automatizado"],
        specs: { "Potencia": "480 hp", "Capacidad Tanque": "30,000 L" }
    },
    {
        id: 7,
        name: "Camión Aljibe Renault K460 6x4",
        category: "Camiones Aljibe",
        capacity: "Estanque 20.000 L | Potencia 460 HP",
        description: "Eficiencia y versatilidad para distribución de agua en faena.",
        image: "/machinery/renault-k460/main-user.jpg",
        gallery: [
            "/machinery/renault-k460/detail-1-user.jpg"
        ],
        features: ["Tracción 6x4", "Barras de riego traseras"],
        specs: { "Potencia": "460 hp", "Capacidad Tanque": "20,000 L" }
    },
    {
        id: 8,
        name: "Excavadora Komatsu PC210LC",
        category: "Excavadoras",
        capacity: "Balde 1.2 m³ | Peso 22 Ton",
        description: "Excavación de alto rendimiento y estabilidad en terreno.",
        image: "/machinery/komatsu-pc210lc/main-new.jpg",
        gallery: [
            "/machinery/komatsu-pc210lc/detail-1-new.jpg"
        ],
        features: ["Bajo consumo de combustible", "Cabina ROPS/FOPS"],
        specs: { "Peso Operativo": "22,000 kg", "Capacidad Balde": "1.2 m³" }
    },
    {
        id: 9,
        name: "Excavadora John Deere 210G LC",
        category: "Excavadoras",
        capacity: "Peso ~22 Ton | Potencia 159 hp",
        description: "Excavación pesada y construcción.",
        image: "/machinery/jd-210g/main-v2.jpg",
        gallery: [
            "/machinery/jd-210g/detail-1.jpg"
        ],
        features: ["Modo de potencia Powerwise III", "Monitor LCD multilingüe"],
        specs: { "Potencia": "159 hp", "Peso Operativo": "22,000 kg" }
    },
    {
        id: 10,
        name: "Camión Aljibe Renault C440",
        category: "Camiones Aljibe",
        capacity: "Estanque 20.000 L | Potencia 440 HP",
        description: "Distribución de agua potable o industrial.",
        image: "/machinery/renault-c440/main-v2.png",
        specs: { "Potencia": "440 hp", "Capacidad Tanque": "20,000 L" }
    },
    {
        id: 11,
        name: "Cargador Frontal Caterpillar 962L",
        category: "Cargadores",
        capacity: "Balde 4.4 m³ | Potencia ~250 hp",
        description: "Carga de alto rendimiento y eficiencia de combustible.",
        image: "/machinery/cat-962l/main-user.png",
        gallery: [
            "/machinery/cat-962l/side-user.png"
        ],
        specs: { "Potencia": "250 hp", "Capacidad Balde": "4.4 m³" }
    },
    {
        id: 12,
        name: "Cargador Frontal John Deere 744L",
        category: "Cargadores",
        capacity: "Balde 4.5 m³ | Potencia ~315 hp",
        description: "Máxima productividad en movimiento de tierras.",
        image: "/machinery/jd-744l/main-v2.jpg",
        gallery: [
            "/machinery/jd-744l/detail-1-v2.jpg",
            "/machinery/jd-744l/detail-2-v2.jpg"
        ],
        specs: { "Potencia": "315 hp", "Capacidad Balde": "4.5 m³" }
    },
    {
        id: 13,
        name: "Martillo Hidráulico MTM50T",
        category: "Implementos",
        capacity: "Para Excavadora 20-25 Ton",
        description: "Demolición y rotura de rocas de alta eficiencia.",
        image: "/machinery/attachments/martillo-user-2.png",
        fit: "contain",
        specs: { "Compatibilidad": "20-25 Ton", "Aplicación": "Demolición" }
    }
];

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
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <span className="text-julmar-green font-bold uppercase tracking-widest mb-2 block text-sm">Catálogo 2026</span>
                        <h2 className="text-4xl md:text-5xl font-black text-julmar-dark">NUESTRA FLOTA</h2>
                    </div>
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
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-julmar-dark/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            >
                                <X size={24} />
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
                                    <div className="flex bg-gray-100 p-1 rounded-lg mt-4 md:mt-0">
                                        <button
                                            onClick={() => setActiveTab('summary')}
                                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'summary' ? 'bg-white shadow-sm text-julmar-dark' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Resumen
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('specs')}
                                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'specs' ? 'bg-white shadow-sm text-julmar-dark' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
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
