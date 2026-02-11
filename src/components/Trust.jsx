import React from 'react';
import { Shield, Clock, MapPin } from 'lucide-react';

const Trust = () => {
    return (
        <section id="nosotros" className="py-24 bg-julmar-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-julmar-green/20 via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-julmar-green font-bold uppercase tracking-widest mb-2 block text-sm">Nuestra Esencia</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">SOMOS SU SOCIO ESTRATÉGICO EN LA REGIÓN</h2>
                    <div className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed text-justify mb-10">
                        <p className="mb-4">
                            JulMar SPA es una empresa especializada ubicada en la cuarta región, dedicada al alquiler de camiones y maquinaria para empresas en los sectores de vialidad, minería y agropecuario.
                        </p>
                        <p>
                            Con una trayectoria de 5 años en el rubro, nuestro compromiso radica en situar al cliente en el centro de nuestras operaciones, brindándole una atención ágil y personalizada. Nos esforzamos por proporcionar equipos de calidad que satisfagan las necesidades de nuestros clientes, manteniendo un enfoque ágil tanto en el cumplimiento de plazos como en la gestión de costos.
                        </p>
                    </div>

                    {/* Stats / Counters */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-gray-800 pt-8">
                        <div>
                            <span className="block text-4xl md:text-5xl font-black text-julmar-green mb-1">+5</span>
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Años Exp.</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-black text-julmar-green mb-1">+15</span>
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Equipos</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-black text-julmar-green mb-1">+20</span>
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Clientes</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-black text-julmar-green mb-1">24/7</span>
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Soporte</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Vision */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-julmar-green/50 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-julmar-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-julmar-green transition-colors duration-300">
                            <Shield className="text-julmar-green group-hover:text-julmar-dark transition-colors duration-300" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">VISIÓN</h3>
                        <p className="text-gray-400 text-lg">
                            Nuestra visión consiste en desafiarnos continuamente para contribuir al progreso de nuestros clientes, adaptándonos a sus necesidades y promoviendo un crecimiento sostenido a lo largo del tiempo.
                        </p>
                    </div>

                    {/* Values (Inferred from context) */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-julmar-green/50 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-julmar-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-julmar-green transition-colors duration-300">
                            <Clock className="text-julmar-green group-hover:text-julmar-dark transition-colors duration-300" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">NUESTROS VALORES</h3>
                        <ul className="text-gray-400 text-lg space-y-2">
                            <li>• <strong>Compromiso:</strong> Situamos al cliente en el centro.</li>
                            <li>• <strong>Agilidad:</strong> Atención rápida y cumplimiento de plazos.</li>
                            <li>• <strong>Calidad:</strong> Equipos que satisfacen altos estándares.</li>
                            <li>• <strong>Cercanía:</strong> Atención personalizada.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Trust;
