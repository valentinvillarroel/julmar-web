import React from 'react';
import { ShieldCheck, Wrench, Clock, Leaf } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-6">
                            <img src="/logo-julmar.webp" alt="Maquinarias Julmar" className="h-16 w-auto mb-4 rounded-lg bg-white p-1" />
                            <p className="text-julmar-green text-sm font-bold uppercase tracking-widest mt-1">Socio Estratégico en Terreno</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Soluciones integrales en maquinaria pesada para la Gran Minería, construcción y obras viales. Comprometidos con la continuidad operacional y la seguridad.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                            <span className="w-1 h-6 bg-julmar-green mr-3 rounded-full"></span>
                            Contacto Directo
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <span className="text-white font-bold min-w-[80px]">Ubicación:</span>
                                <span>Coquimbo / IV Región, Chile</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white font-bold min-w-[80px]">Email:</span>
                                <a href="mailto:jgalvez@julmarspa.com" className="hover:text-julmar-green transition-colors">jgalvez@julmarspa.com</a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white font-bold min-w-[80px]">Teléfono:</span>
                                <a href="tel:+56931052727" className="hover:text-julmar-green transition-colors">+56 9 3105 2727</a>
                            </li>
                        </ul>
                    </div>

                    {/* Standards */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                            <span className="w-1 h-6 bg-julmar-green mr-3 rounded-full"></span>
                            Compromiso y Seguridad
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Badge 1: Seguridad */}
                            <div className="bg-gray-900 border border-gray-800 p-3 rounded-xl flex flex-col items-center justify-center text-center group hover:border-julmar-green/50 transition-colors">
                                <ShieldCheck className="text-julmar-green mb-2 group-hover:scale-110 transition-transform" size={28} />
                                <span className="text-xs font-bold text-gray-300">Cultura Cero Daño</span>
                            </div>

                            {/* Badge 2: Mantención */}
                            <div className="bg-gray-900 border border-gray-800 p-3 rounded-xl flex flex-col items-center justify-center text-center group hover:border-julmar-green/50 transition-colors">
                                <Wrench className="text-julmar-green mb-2 group-hover:scale-110 transition-transform" size={28} />
                                <span className="text-xs font-bold text-gray-300">Mantención Proactiva</span>
                            </div>

                            {/* Badge 3: Disponibilidad */}
                            <div className="bg-gray-900 border border-gray-800 p-3 rounded-xl flex flex-col items-center justify-center text-center group hover:border-julmar-green/50 transition-colors">
                                <Clock className="text-julmar-green mb-2 group-hover:scale-110 transition-transform" size={28} />
                                <span className="text-xs font-bold text-gray-300">Soporte 24/7</span>
                            </div>

                            {/* Badge 4: Medio Ambiente */}
                            <div className="bg-gray-900 border border-gray-800 p-3 rounded-xl flex flex-col items-center justify-center text-center group hover:border-julmar-green/50 transition-colors">
                                <Leaf className="text-julmar-green mb-2 group-hover:scale-110 transition-transform" size={28} />
                                <span className="text-xs font-bold text-gray-300">Sello Verde</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 pb-4">
                    <p className="text-gray-500 text-xs text-center leading-relaxed">
                        <span className="font-bold text-gray-400">Cobertura Regional:</span> La Serena • Coquimbo • Ovalle • Andacollo • Vicuña • Salamanca • Illapel • Vallenar • Copiapó
                    </p>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
                    <p>© {new Date().getFullYear()} Maquinarias Julmar SpA. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>Aviso Legal</span>
                        <span>Privacidad</span>
                        <span>Sostenibilidad</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
