import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Settings,
    Truck,
    Phone,
    Mail,
    MapPin,
    ShieldCheck,
    Zap,
    Lightbulb,
    ChevronLeft,
    ChevronRight,
    Download
} from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

// Register ChartJS modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const MixerFleet = () => {
    const [selectedMachineForQuote, setSelectedMachineForQuote] = useState('');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const galleryImages = [
        { src: "/machinery/mixer-8m3.jpg", title: "Capacidad Operativa de Vanguardia" },
        { src: "/machinery/mixer-10m3.jpg", title: "Instalación en Terreno" },
        { src: "/machinery/betonera.jpg", title: "Reemplazo de Betoneras" },
        { src: "/machinery/mantencion.jpg", title: "Soporte Técnico Terreno" }
    ];

    const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    // Chart configurations
    const betonerasData = {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'JulMar',
                data: [52, 49, 19, 32],
                backgroundColor: '#A3E635',
                borderRadius: 4,
            },
            {
                label: 'London',
                data: [16, 18, 14, 9],
                backgroundColor: '#ed7d31',
                borderRadius: 4,
            },
            {
                label: 'Continental',
                data: [7, 14, 4, 5],
                backgroundColor: '#a5a5a5',
                borderRadius: 4,
            }
        ]
    };

    const participacionData = {
        labels: ['JulMar (60%)', 'Otros (40%)'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#A3E635', '#0B2427'],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    };

    const ventasData = {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Ventas (CLP)',
            data: [873045273, 1218170137, 788967670, 727750721],
            borderColor: '#A3E635',
            backgroundColor: 'rgba(163, 230, 53, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.1,
            pointRadius: 4,
            pointBackgroundColor: '#A3E635'
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    padding: 20,
                    font: { family: 'Barlow, sans-serif' }
                }
            }
        }
    };

    const handleQuote = (machine) => {
        setSelectedMachineForQuote(machine);
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-julmar-green selection:text-julmar-dark">
            <Helmet>
                <title>Flota Mixer & Betoneras | Maquinarias JulMar SPA</title>
                <meta name="description" content="Especialistas en instalación, reparación y mantenimiento de betoneras para camiones mixer en la Región Metropolitana y IV Región." />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <header className="relative bg-julmar-dark text-white overflow-hidden pt-36 pb-48 md:pt-48 md:pb-60">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23A3E635\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-julmar-dark via-julmar-dark/90 to-julmar-green/10"></div>

                <div className="container mx-auto px-6 relative z-10">


                    <div className="mt-16 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-16 h-1 bg-julmar-green rounded-full"></span>
                                <p className="text-julmar-green font-black uppercase tracking-[0.4em] text-xs">Unidad Concreto 2026</p>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase">
                                TU SOCIO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-julmar-green to-emerald-300">ESTRATÉGICO</span><br />
                                EN TERRENO
                            </h1>
                            <p className="text-slate-300 text-xl md:text-2xl font-light border-l-4 border-julmar-green pl-8 leading-relaxed max-w-2xl">
                                Especialistas en instalación, reparación y mantenimiento de alta precisión para mixers. Soporte técnico garantizado en la Región Metropolitana y la IV Región (Coquimbo).
                            </p>

                            <div className="mt-12 flex flex-wrap gap-4 items-center">
                                <button
                                    onClick={() => handleQuote('Servicio Mixer')}
                                    className="bg-julmar-green hover:bg-white text-julmar-dark px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-julmar-green/20 flex items-center gap-3"
                                >
                                    Cotizar Servicio
                                    <ArrowRight size={20} />
                                </button>
                                <a
                                    href="/Brochure_julmar2024.pdf"
                                    download
                                    className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-3"
                                >
                                    Ver Portafolio PDF
                                    <Download size={20} />
                                </a>
                                <div className="flex items-center gap-3 bg-white/5 border border-white/15 backdrop-blur-md px-5 py-5 rounded-2xl h-full">
                                    <img src="/sicep.png" alt="Certificado SICEP" className="h-8 w-auto object-contain" />
                                    <div>
                                        <p className="text-white font-black text-xs uppercase tracking-widest leading-none">Proveedor Certificado</p>
                                        <p className="text-julmar-green font-black text-xs uppercase tracking-widest leading-none mt-1">SICEP</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-40 bg-slate-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
            </header>

            {/* Gallery Slider */}
            <section className="container mx-auto px-6 -mt-24 relative z-20 mb-32">
                <div className="bg-julmar-dark rounded-[48px] overflow-hidden shadow-3xl border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square overflow-hidden bg-black group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImageIndex}
                                    src={galleryImages[activeImageIndex].src}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Slider Controls */}
                            <div className="absolute bottom-10 left-10 flex gap-4 z-40">
                                <button onClick={prevImage} className="w-12 h-12 rounded-full bg-white/10 hover:bg-julmar-green text-white backdrop-blur-md flex items-center justify-center transition-all">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextImage} className="w-12 h-12 rounded-full bg-white/10 hover:bg-julmar-green text-white backdrop-blur-md flex items-center justify-center transition-all">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                            <div className="absolute bottom-12 right-12 z-40 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                                <p className="text-white font-black text-sm uppercase tracking-[0.2em]">{galleryImages[activeImageIndex].title}</p>
                            </div>
                        </div>

                        <div className="p-12 md:p-20 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-julmar-green font-black uppercase text-xs tracking-[0.3em] mb-4 block">Experiencia en Terreno</span>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight uppercase">Capacidad Operativa de Vanguardia</h2>
                                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                                    Prestamos servicio especializado de instalación y reparación de betoneras directamente en terreno, asegurando la máxima fiabilidad.
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="border-l-2 border-julmar-green pl-6 py-2">
                                        <p className="text-3xl font-black text-white leading-none mb-2">60%</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Market Share</p>
                                    </div>
                                    <div className="border-l-2 border-julmar-green pl-6 py-2">
                                        <p className="text-3xl font-black text-white leading-none mb-2">SICEP</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certificación Clase A</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Reemplazo Betoneras', icon: <Zap />, desc: 'Sustitución y montaje de tambores para camiones mixer en faena.', border: 'border-julmar-green' },
                        { title: 'Overhaul Técnico', icon: <Truck />, desc: 'Mantenimiento integral de sistemas hidráulicos y motores de giro.', border: 'border-slate-300' },
                        { title: 'Soporte Especializado', icon: <Lightbulb />, desc: 'Soporte técnico y reparación para componentes de alta capacidad.', border: 'border-julmar-green' },
                        { title: 'Servicio 24/7', icon: <Settings />, desc: 'Taller móvil acreditado para asegurar la continuidad en faena.', border: 'border-slate-300' },
                    ].map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white rounded-[32px] shadow-2xl p-10 border-b-8 ${pillar.border} hover:-translate-y-4 transition-all duration-500 group`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 text-julmar-green group-hover:bg-julmar-green group-hover:text-julmar-dark transition-all duration-300 shadow-inner">
                                {pillar.icon}
                            </div>
                            <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-4 leading-tight">{pillar.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Analytics Section */}
            <section className="bg-white py-32 border-y border-slate-200 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-3xl">
                            <div className="bg-julmar-green text-julmar-dark p-4 rounded-3xl w-fit mb-8 shadow-2xl shadow-julmar-green/20">
                                <BarChart3 size={32} />
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter leading-none mb-6 uppercase">Analíticas del Mercado</h2>
                            <p className="text-slate-500 font-medium text-lg italic">Liderazgo indiscutido en la industria de mixers.</p>
                        </div>
                        <div className="text-right">
                            <div className="bg-slate-100 px-8 py-4 rounded-3xl border border-slate-200">
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Informe Comercial</p>
                                <p className="text-julmar-dark font-black">Periodo 2018 - 2026</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white border border-slate-100 rounded-[48px] p-10 shadow-2xl"
                        >
                            <h3 className="text-center font-black text-julmar-dark text-xl uppercase tracking-widest mb-10">Betoneras Vendidas Oficiales</h3>
                            <div className="h-[400px]">
                                <Bar data={betonerasData} options={chartOptions} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white border border-slate-100 rounded-[48px] p-10 shadow-2xl"
                        >
                            <h3 className="text-center font-black text-julmar-dark text-xl uppercase tracking-widest mb-10">Participación de Mercado</h3>
                            <div className="h-[400px] flex justify-center">
                                <Pie
                                    data={participacionData}
                                    options={{
                                        ...chartOptions,
                                        plugins: {
                                            ...chartOptions.plugins,
                                            legend: { position: 'bottom', labels: { usePointStyle: true, padding: 30 } }
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-julmar-dark border border-slate-800 rounded-[48px] p-12 shadow-3xl overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-julmar-green/10 blur-[100px]"></div>
                        <h3 className="text-center font-black text-white text-xl uppercase tracking-widest mb-10">Inversión y Crecimiento (CLP)</h3>
                        <div className="h-[350px]">
                            <Line
                                data={ventasData}
                                options={{
                                    ...chartOptions,
                                    plugins: {
                                        ...chartOptions.plugins,
                                        legend: { display: false },
                                        tooltip: {
                                            callbacks: { label: (context) => `$ ${context.parsed.y.toLocaleString('es-CL')}` }
                                        }
                                    },
                                    scales: {
                                        y: {
                                            grid: { color: 'rgba(255,255,255,0.05)' },
                                            ticks: { color: '#64748b', callback: (value) => `$${(value / 1000000).toFixed(0)}M` }
                                        },
                                        x: { grid: { display: false }, ticks: { color: '#64748b' } }
                                    }
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Cards */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-3xl">
                            <span className="text-julmar-green font-black uppercase text-xs tracking-[0.4em] mb-4 block">Especialización Mixer</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter leading-none mb-8 uppercase">Nuestra Oferta</h2>
                        </div>
                        <div className="bg-white border border-slate-200 px-8 py-5 rounded-[32px] shadow-sm flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>)}
                            </div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Alianzas: Melón / Polpaico / CBB</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {[
                            {
                                title: 'Servicio de Overhaul',
                                subtitle: 'Reparación de Betoneras',
                                image: '/machinery/betonera.jpg',
                                features: ['Intervención mecánica integral', 'Sustitución de tambores y aspas', 'Certificación de operatividad post-arreglo'],
                                badge: 'Taller Faena'
                            },
                            {
                                title: 'Ingeniería de Betonera',
                                subtitle: 'Fabricación y Montaje',
                                image: '/machinery/mantencion.jpg',
                                features: ['Sustitución e instalación de cuerpos', 'Reparación de sistemas hidráulicos', 'Pruebas de rotación y calibración'],
                                badge: 'Certificación'
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -15 }}
                                className="bg-white rounded-[48px] overflow-hidden shadow-3xl border border-slate-100 group flex flex-col md:flex-row h-full"
                            >
                                <div className="relative md:w-1/2 overflow-hidden bg-slate-900 aspect-video md:aspect-auto">
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <span className="absolute top-8 left-8 bg-julmar-green text-julmar-dark text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest z-20 shadow-xl">
                                        {card.badge}
                                    </span>
                                </div>
                                <div className="p-10 md:w-1/2 flex flex-col justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-julmar-green uppercase tracking-widest mb-3 leading-none">{card.subtitle}</p>
                                        <h3 className="text-3xl font-black text-slate-800 mb-8 tracking-tight leading-none group-hover:text-julmar-green transition-colors">{card.title}</h3>

                                        <ul className="space-y-4 mb-10">
                                            {card.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-4 text-sm text-slate-500 font-bold">
                                                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-julmar-green flex items-center justify-center flex-shrink-0 shadow-sm">
                                                        <CheckCircle2 size={14} />
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => handleQuote(card.title)}
                                        className="w-full bg-slate-900 group-hover:bg-julmar-green text-white group-hover:text-julmar-dark py-5 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-4"
                                    >
                                        Solicitar Cotización
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-24 bg-julmar-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top translate-x-1/2 pointer-events-none"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-white flex flex-col justify-center"
                        >
                            <span className="text-julmar-green font-bold uppercase tracking-widest mb-4 block">Canal de Ventas Exclusivo</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase">
                                Hablemos de su <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-julmar-green-light to-julmar-green">PRÓXIMO PROYECTO</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-julmar-green/40 transition-colors">
                                    <p className="text-xs font-black text-julmar-green uppercase tracking-widest mb-4">Gerencia Comercial</p>
                                    <div className="flex items-center gap-4 mb-3">
                                        <Mail size={18} className="text-julmar-green" />
                                        <a href="mailto:jgalvez@julmarspa.com" className="text-gray-400 hover:text-white transition-colors text-sm font-bold">jgalvez@julmarspa.com</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone size={18} className="text-julmar-green" />
                                        <a href="https://wa.me/56931052727" className="text-gray-400 hover:text-white transition-colors text-sm font-bold">+56 9 3105 2727</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-4 opacity-60">
                                    <MapPin size={20} className="text-julmar-green shrink-0" />
                                    <div>
                                        <p className="text-white font-bold text-sm">Operaciones Regionales</p>
                                        <p className="text-gray-400 text-sm">Coquimbo / La Serena / Vallenar / Copiapó</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[48px] p-10 md:p-16 shadow-3xl flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-emerald-50 text-julmar-green rounded-3xl flex items-center justify-center mb-8">
                                <Phone size={40} />
                            </div>
                            <h3 className="text-slate-800 text-3xl font-black mb-4 uppercase tracking-tighter">Atención Inmediata</h3>
                            <p className="text-slate-500 mb-10 font-medium">Contáctenos vía WhatsApp para una respuesta rápida sobre disponibilidad de flota y servicios de mantenimiento.</p>

                            <a
                                href={`https://wa.me/56931052727?text=Hola,%20me%20interesa%20una%20cotización%20para%20${selectedMachineForQuote || 'servicio%20Mixer'}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-julmar-green hover:bg-julmar-dark text-julmar-dark hover:text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-julmar-green/20 flex items-center justify-center gap-4"
                            >
                                WhatsApp Comercial
                                <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MixerFleet;
