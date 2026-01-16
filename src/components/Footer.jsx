import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-6">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                JulMar<span className="text-julmar-green">.</span>
                            </span>
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
                                <a href="mailto:contacto@maquinariasjulmar.cl" className="hover:text-julmar-green transition-colors">contacto@maquinariasjulmar.cl</a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white font-bold min-w-[80px]">Teléfono:</span>
                                <a href="tel:+56966240252" className="hover:text-julmar-green transition-colors">+56 9 6624 0252</a>
                            </li>
                        </ul>
                    </div>

                    {/* Standards */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                            <span className="w-1 h-6 bg-julmar-green mr-3 rounded-full"></span>
                            Estándares
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Cultura Cero Daño (HSE)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Mantenimiento Preventivo Programado
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Disponibilidad 24/7
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Gestión Ambiental Responsable
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
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
