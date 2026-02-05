import React from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatWhatsAppMessage, generateWhatsAppLink } from '../utils/whatsapp';

const Contact = ({ preselectedMachine }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        rut: '',
        phone: '',
        email: '',
        equipment: '',
        duration: '',
        location: '',
        details: ''
    });

    React.useEffect(() => {
        if (preselectedMachine) {
            // Map simple category names or use exact machine name if preferred
            setFormData(prev => ({ ...prev, equipment: preselectedMachine }));
        }
    }, [preselectedMachine]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation (basic)
        if (!formData.name || !formData.phone) {
            alert('Por favor completa al menos tu nombre y teléfono.');
            return;
        }

        const message = formatWhatsAppMessage(formData);

        // Number: +56 9 3105 2727 -> 56931052727
        const whatsappUrl = generateWhatsAppLink('56931052727', message);
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contacto" className="py-24 bg-julmar-dark relative overflow-hidden">
            {/* Background elements */}
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
                        <span className="text-julmar-green font-bold uppercase tracking-widest mb-4 block">Hablemos de tu Proyecto</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            ¿LISTO PARA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-julmar-green-light to-julmar-green">COMENZAR?</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start group">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mr-6 group-hover:bg-julmar-green group-hover:text-julmar-dark transition-colors duration-300">
                                    <Mail size={24} className="current-color" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email Corporativo</h4>
                                    <a href="mailto:jgalvez@julmarspa.com" className="text-gray-400 hover:text-white transition-colors">jgalvez@julmarspa.com</a>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mr-6 group-hover:bg-julmar-green group-hover:text-julmar-dark transition-colors duration-300">
                                    <Phone size={24} className="current-color" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Teléfono Ventas</h4>
                                    <a href="tel:+56931052727" className="text-gray-400 hover:text-white transition-colors">+56 9 3105 2727</a>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mr-6 group-hover:bg-julmar-green group-hover:text-julmar-dark transition-colors duration-300">
                                    <MapPin size={24} className="current-color" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                                    <p className="text-gray-400">Coquimbo / La Serena, Chile</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 shadow-2xl relative"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicita una Cotización</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre / Empresa</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Tu Nombre o Empresa"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">RUT</label>
                                    <input
                                        name="rut"
                                        value={formData.rut}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="12.345.678-9"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="+56 9 ..."
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="correo@ejemplo.com"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Equipo Requerido</label>
                                    <select
                                        name="equipment"
                                        value={formData.equipment}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Seleccionar Equipo...</option>
                                        {preselectedMachine && (
                                            <option value={preselectedMachine}>{preselectedMachine}</option>
                                        )}
                                        <option value="Excavadora">Excavadora</option>
                                        <option value="Retroexcavadora">Retroexcavadora</option>
                                        <option value="Cargador Frontal">Cargador Frontal</option>
                                        <option value="Camión Aljibe">Camión Aljibe</option>
                                        <option value="Martillo Hidráulico">Martillo Hidráulico</option>
                                        <option value="Otro">Otro / Varios</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Duración Estimada</label>
                                    <input
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Ej: 2 semanas, 1 mes"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Ubicación de Faena</label>
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Ej: Minera X, Sector Y, Región Z"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Detalles Adicionales</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="¿Algún requerimiento específico? Horómetro esperado, condiciones, etc."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-julmar-green focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full bg-julmar-green hover:bg-julmar-green-light text-julmar-dark font-black py-4 rounded-xl flex items-center justify-center gap-2 transform active:scale-95 transition-all shadow-lg hover:shadow-xl"
                                >
                                    COTIZAR POR WHATSAPP
                                    <Send size={18} />
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!formData.name || !formData.phone) {
                                            alert('Por favor completa al menos tu nombre y teléfono.');
                                            return;
                                        }
                                        const subject = `Solicitud de Cotización: ${formData.equipment || 'Maquinaria'}`;
                                        const body = `Hola, me gustaría solicitar una cotización formal.%0D%0A%0D%0A` +
                                            `*Cliente/Empresa:* ${formData.name}%0D%0A` +
                                            `*RUT:* ${formData.rut || 'No indicado'}%0D%0A` +
                                            `*Teléfono:* ${formData.phone}%0D%0A` +
                                            `*Email:* ${formData.email || 'No indicado'}%0D%0A` +
                                            `*Equipo:* ${formData.equipment || 'No especificado'}%0D%0A` +
                                            `*Duración:* ${formData.duration || 'No especificada'}%0D%0A` +
                                            `*Ubicación:* ${formData.location || 'No indicada'}%0D%0A` +
                                            `*Detalles:* ${formData.details || 'Sin detalles adicionales'}%0D%0A%0D%0A` +
                                            `Quedo atento a su respuesta.`;

                                        window.location.href = `mailto:jgalvez@julmarspa.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                                    }}
                                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transform active:scale-95 transition-all shadow-lg hover:shadow-xl border border-gray-600"
                                >
                                    COTIZAR POR CORREO
                                    <Mail size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
