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
    Users,
    ChevronLeft,
    ChevronRight,
    Search,
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
import Contact from '../components/Contact';
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
        { src: "/machinery/attachments/machinery2/image.png", title: "Mixer BSA en Faena" },
        { src: "/machinery/attachments/machinery2/image copy 6.png", title: "McNeilus Global Details" },
        { src: "/machinery/attachments/machinery2/image copy 14.png", title: "Flota FAW J6" },
        { src: "/machinery/attachments/machinery2/image copy 15.png", title: "Soporte Técnico Terreno" },
        { src: "/machinery/attachments/machinery2/image copy 7.png", title: "Sistema de Tambor" },
        { src: "/machinery/attachments/machinery2/image copy 10.png", title: "Detalle Motores Hidráulicos" }
    ];

    const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    // Chart configurations (Keep original commercial data)
    const betonerasData = {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'McNeilus',
                data: [52, 49, 19, 32],
                backgroundColor: '#4472c4',
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
            },
            {
                label: 'Total',
                data: [76, 81, 37, 46],
                backgroundColor: '#ffc000',
                borderRadius: 4,
            }
        ]
    };

    const participacionData = {
        labels: ['McNeilus (60%)', 'Otros (40%)'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#70ad47', '#5b9bd5'],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    };

    const ventasData = {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Ventas (CLP)',
            data: [873045273, 1218170137, 788967670, 727750721],
            borderColor: '#4472c4',
            backgroundColor: 'rgba(68, 114, 196, 0.1)',
            borderWidth: 3,
            pointBackgroundColor: '#4472c4',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: true,
            tension: 0.1
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
                    font: { family: 'Inter, sans-serif' }
                }
            }
        }
    };

    const handleQuote = (machine) => {
        setSelectedMachineForQuote(machine);
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#4CAF50] selection:text-white">
            <Helmet>
                <title>Flota Mixer & Betoneras | Maquinarias JulMar SPA</title>
                <meta name="description" content="Propuesta Comercial: Flota de camiones mixer FAW y Freightliner, especialistas en betoneras McNeilus Global." />
            </Helmet>

            <Navbar />

            {/* Hero Section with Diagonal Effect */}
            <header className="relative bg-slate-900 text-white overflow-hidden pt-36 pb-48 md:pt-48 md:pb-60">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234caf50\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-[#4CAF50]/10"></div>

                <div className="container mx-auto px-6 relative z-10">

                    <div className="mt-16 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >

                            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase">
                                Potenciando la <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-emerald-300">Continuidad</span><br />
                                Operacional
                            </h1>
                            <p className="text-slate-300 text-xl md:text-2xl font-light border-l-4 border-[#4CAF50] pl-8 leading-relaxed max-w-2xl">
                                Brindamos la infraestructura logística y técnica necesaria para posicionar su flota en los proyectos más exigentes de la Región de Coquimbo.
                            </p>

                            <div className="mt-12 flex flex-wrap gap-6">
                                <button
                                    onClick={() => handleQuote('Reunión Técnica Alianza')}
                                    className="bg-[#4CAF50] hover:bg-white text-julmar-dark px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-[#4CAF50]/20 flex items-center gap-3"
                                >
                                    Solicitar Reunión Técnica
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-40 bg-slate-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
            </header>

            {/* Gallery Slider - NEW SECTION from provided images */}
            <section className="container mx-auto px-6 -mt-24 relative z-20 mb-32">
                <div className="bg-slate-900 rounded-[48px] overflow-hidden shadow-3xl border border-white/10">
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
                                <button onClick={prevImage} className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] text-white backdrop-blur-md flex items-center justify-center transition-all">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextImage} className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] text-white backdrop-blur-md flex items-center justify-center transition-all">
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
                                <span className="text-[#4CAF50] font-black uppercase text-xs tracking-[0.3em] mb-4 block">Experiencia en Terreno</span>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">Capacidad Logística sin Precedentes</h2>
                                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                                    Operamos con flota propia de camiones FAW J6 Jiefang equipados con betoneras de 8m³ y 10m³, garantizando el suministro constante en proyectos de gran envergadura.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars Section with Icons from original brochure */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Reemplazo Betoneras', icon: <Zap />, desc: 'Especialistas en la sustitución y montaje de tambores y sistemas de revoltura para camiones mixer.', border: 'border-[#4CAF50]' },
                        { title: 'Overhaul Mixers', icon: <Truck />, desc: 'Reacondicionamiento integral de sistemas hidráulicos y motores de giro para toda la flota.', border: 'border-slate-300' },
                        { title: 'Soporte Técnico', icon: <ShieldCheck />, desc: 'Soporte oficial de componentes y repuestos montados sobre chasis de alta capacidad.', border: 'border-[#4CAF50]' },
                        { title: 'Renovación de Flota', icon: <Settings />, desc: 'Alternativas de ensamble y renovación para extender la vida útil de su inversión.', border: 'border-slate-300' },
                    ].map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white rounded-[32px] shadow-2xl p-10 border-b-8 ${pillar.border} hover:-translate-y-4 transition-all duration-500 group`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 text-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-300 shadow-inner">
                                {pillar.icon}
                            </div>
                            <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-4 leading-tight">{pillar.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Vision & Values - Replaced with Alianza de Alto Estándar */}
            <section className="container mx-auto px-6 mb-32">
                <div className="relative bg-slate-900 rounded-[64px] p-12 md:p-24 text-white shadow-3xl overflow-hidden border-t-8 border-[#4CAF50]">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4CAF50]/10 skew-x-[-20deg] translate-x-1/2"></div>

                    <div className="relative z-10 max-w-5xl">
                        <h4 className="text-[#4CAF50] font-black uppercase text-xs tracking-[0.4em] mb-6">Alianza de Alto Estándar</h4>
                        <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-none">Uniendo Tecnología y Terreno</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 text-slate-400 font-light text-xl leading-relaxed">
                            <p>Esta propuesta busca alinear las capacidades tecnológicas de su flota con la potencia operativa de JulMar SpA. Juntos, ofrecemos al cliente final no solo un camión, sino una solución de bombeo y transporte con respaldo técnico garantizado.</p>
                            <p>Nuestra infraestructura está lista para absorber la gestión post-venta, el mantenimiento predictivo y la representación de marca ante las principales mineras y constructoras del norte de Chile.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: 'Compromiso de Uptime',
                                    icon: <ShieldCheck />,
                                    desc: 'Minimizamos los tiempos de detención mediante un stock crítico de repuestos y soporte técnico 24/7 en faena.'
                                },
                                {
                                    title: 'Sello de Seguridad HSE',
                                    icon: <Settings />,
                                    desc: 'Operamos bajo rigurosos protocolos de seguridad clase A, cumpliendo con las exigencias de SICEP y auditorías mineras.'
                                }
                            ].map((box, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 group hover:bg-white/10 transition-all">
                                    <div className="text-[#4CAF50] mb-6 group-hover:scale-110 transition-transform">
                                        {React.cloneElement(box.icon, { size: 40 })}
                                    </div>
                                    <h3 className="font-black text-2xl mb-4 text-white uppercase tracking-tight">{box.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{box.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Representación de Marca - Servicio Técnico Autorizado */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="text-[#4CAF50] font-black uppercase text-xs tracking-[0.4em] mb-4 block">Propuesta de Valor Exclusiva</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter leading-none mb-8">
                                Servicio Técnico<br />
                                <span className="text-[#4CAF50]">Autorizado Regional</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-light max-w-3xl mx-auto leading-relaxed">
                                Nuestro equipo puede certificarse oficialmente en su marca, actuando como representantes técnicos autorizados en la IV y III Región. <strong className="text-slate-700">Sin necesidad de enviar técnicos desde Santiago.</strong>
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    step: '01',
                                    title: 'Certificación Oficial',
                                    desc: 'Nuestros técnicos se forman en sus instalaciones o de manera remota bajo sus estándares de marca, adquiriendo la acreditación necesaria para operar con garantía.'
                                },
                                {
                                    step: '02',
                                    title: 'Representación Local',
                                    desc: 'Una vez certificados, JulMar actúa como su brazo técnico en la zona minera, brindando soporte de primera línea a sus clientes finales de forma inmediata.'
                                },
                                {
                                    step: '03',
                                    title: 'Expansión sin Costo Logístico',
                                    desc: 'Usted expande su presencia regional sin incurrir en costos de desplazamiento ni riesgo operativo. Nosotros ponemos la infraestructura, el taller y el personal.'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.12 }}
                                    className="relative bg-slate-50 border border-slate-200 rounded-[40px] p-10 group hover:border-[#4CAF50]/50 hover:shadow-2xl transition-all duration-500"
                                >
                                    <span className="text-[100px] font-black text-slate-100 leading-none absolute -top-4 -right-2 select-none group-hover:text-[#4CAF50]/10 transition-colors z-0">
                                        {item.step}
                                    </span>
                                    <div className="relative z-10">
                                        <div className="w-12 h-1 bg-[#4CAF50] rounded-full mb-8"></div>
                                        <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-[48px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border-l-8 border-[#4CAF50] shadow-3xl"
                        >
                            <div>
                                <p className="text-[#4CAF50] font-black uppercase text-xs tracking-widest mb-3">¿Listo para aliarse?</p>
                                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                                    Un socio técnico en terreno<br />vale más que diez visitas al año
                                </h3>
                            </div>
                            <button
                                onClick={() => handleQuote('Certificación Técnica Autorizada')}
                                className="bg-[#4CAF50] hover:bg-white text-julmar-dark px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl whitespace-nowrap flex items-center gap-3"
                            >
                                Iniciar Conversación
                                <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Fleet Section - Premium Cards */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-3xl">
                            <span className="text-[#4CAF50] font-black uppercase text-xs tracking-[0.4em] mb-4 block">Catálogo 2026</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter leading-none mb-8">Nuestra Flota</h2>
                        </div>
                        <div className="bg-white border border-slate-200 px-8 py-5 rounded-[32px] shadow-sm flex items-center gap-6">
                            <img src="/logo-julmar.webp" className="h-10 grayscale opacity-30" />
                            <div className="w-px h-10 bg-slate-200"></div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">BSA / Polpaico / Melon / Cbb</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {[
                            {
                                title: 'Camión Mixer 8-10m³',
                                subtitle: 'FAW J6 Jiefang • McNeilus Global',
                                image: '/machinery/attachments/machinery2/image copy 14.png',
                                features: ['Chasis FAW Jiefang 420HP', 'Betonera McNeilus 10m³', 'Tracción 8x4 estabilidad total'],
                                badge: 'Flota Activa'
                            },
                            {
                                title: 'Mixer BSA High Stability',
                                subtitle: 'Freightliner • Concrete Unit',
                                image: '/machinery/attachments/machinery2/image.png',
                                features: ['Optimizado para BSA Hormigones', 'Kit Minero incorporado', 'Motorización alto torque'],
                                badge: 'Premium'
                            },
                            {
                                title: 'Servicio de Overhaul',
                                subtitle: 'Mantenimiento en Terreno',
                                image: '/machinery/attachments/machinery2/image copy 15.png',
                                features: ['Técnicos certificados SICEP', 'Repuestos McNeilus Originales', 'Garantía 1000 horas operativas'],
                                badge: 'Soporte 24/7'
                            },
                            {
                                title: 'Ingeniería de Betonera',
                                subtitle: 'Intercambio y Reemplazo',
                                image: '/machinery/attachments/machinery2/image copy 6.png',
                                features: ['Compatibilidad chasis global', 'Ajuste de aspas automático', 'Seguridad ROPS/FOPS'],
                                badge: 'Certificado'
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
                                    <span className="absolute top-8 left-8 bg-[#4CAF50] text-julmar-dark text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest z-20 shadow-xl">
                                        {card.badge}
                                    </span>
                                </div>
                                <div className="p-10 md:w-1/2 flex flex-col justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-[#4CAF50] uppercase tracking-widest mb-3 leading-none">{card.subtitle}</p>
                                        <h3 className="text-3xl font-black text-slate-800 mb-8 tracking-tight leading-none group-hover:text-[#4CAF50] transition-colors">{card.title}</h3>

                                        <ul className="space-y-4 mb-10">
                                            {card.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-4 text-sm text-slate-500 font-bold">
                                                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#4CAF50] flex items-center justify-center flex-shrink-0 shadow-sm">
                                                        <CheckCircle2 size={14} />
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => handleQuote(card.title)}
                                        className="w-full bg-slate-900 group-hover:bg-[#4CAF50] text-white group-hover:text-julmar-dark py-5 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-4"
                                    >
                                        Solicitar Factibilidad
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Bar with unified industry names */}
            <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-16">Estratégicamente posicionados con</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        {['UNITED', 'MELÓN', 'POLPAICO', 'BSA', 'CBB', 'UNICON', 'HY TECH', 'VIVELO'].map((client, idx) => (
                            <span key={idx} className="font-black text-3xl md:text-4xl text-slate-900 tracking-tighter hover:text-[#4CAF50] transition-colors cursor-default">
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacto exclusivo Mixer */}
            <section id="contacto" className="py-24 bg-julmar-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top translate-x-1/2 pointer-events-none"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left: info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-white flex flex-col justify-center"
                        >
                            <span className="text-julmar-green font-bold uppercase tracking-widest mb-4 block">Hablemos de una Alianza</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                                ¿LISTO PARA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-julmar-green-light to-julmar-green">CONVERSAR?</span>
                            </h2>

                            <div className="space-y-6">
                                {/* Juan Luis */}
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-julmar-green/40 transition-colors">
                                    <p className="text-xs font-black text-julmar-green uppercase tracking-widest mb-4">Juan Luis Gálvez Fuica — Gerencia</p>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail size={18} className="text-julmar-green" />
                                        </div>
                                        <a href="mailto:jgalvez@julmarspa.com" className="text-gray-400 hover:text-white transition-colors text-sm">jgalvez@julmarspa.com</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone size={18} className="text-julmar-green" />
                                        </div>
                                        <a href="https://wa.me/56931052727" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">+56 9 3105 2727</a>
                                    </div>
                                </div>

                                {/* Rodolfo */}
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-julmar-green/40 transition-colors">
                                    <p className="text-xs font-black text-julmar-green uppercase tracking-widest mb-4">Rodolfo Serrano San Martín — Ingeniería</p>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail size={18} className="text-julmar-green" />
                                        </div>
                                        <a href="mailto:Rodolfo@ingenieriaserrano.cl" className="text-gray-400 hover:text-white transition-colors text-sm">Rodolfo@ingenieriaserrano.cl</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone size={18} className="text-julmar-green" />
                                        </div>
                                        <a href="https://wa.me/56998793145" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">+56 9 9879 3145</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-2">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin size={18} className="text-julmar-green" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm mb-1">Ubicación</p>
                                        <p className="text-gray-400 text-sm">Coquimbo / La Serena, IV Región, Chile</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: CTA banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col justify-center gap-6"
                        >
                            <div className="bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-3xl p-10 text-white">
                                <h3 className="text-2xl font-black mb-4 text-white">Solicitar Reunión Técnica</h3>
                                <p className="text-slate-400 text-base leading-relaxed mb-8">
                                    Coordinamos una reunión para presentar nuestra capacidad operativa, certificaciones y la propuesta de alianza formal. Sin compromiso.
                                </p>
                                <a
                                    href="https://wa.me/56998793145?text=Hola%20Rodolfo%2C%20me%20interesa%20conocer%20la%20propuesta%20de%20alianza%20JulMar%20para%20flota%20Mixer."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#4CAF50] hover:bg-white text-julmar-dark font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#4CAF50]/20 text-sm uppercase tracking-widest"
                                >
                                    Iniciar Conversación por WhatsApp
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-white">
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    También puedes escribirnos directamente a{' '}
                                    <a href="mailto:jgalvez@julmarspa.com" className="text-julmar-green hover:underline">jgalvez@julmarspa.com</a>
                                    {' '}o a{' '}
                                    <a href="mailto:Rodolfo@ingenieriaserrano.cl" className="text-julmar-green hover:underline">Rodolfo@ingenieriaserrano.cl</a>
                                    {' '}para coordinar una visita técnica o presentación formal.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MixerFleet;
