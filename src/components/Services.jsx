import React from 'react';
import { Truck, Pickaxe, Tractor } from 'lucide-react';

const services = [
    {
        icon: <Truck size={40} />,
        title: "Infraestructura Vial",
        description: "Gestión integral de caminos industriales y públicos. Cumplimiento normativo, supresión de polvo y movimiento de tierras de alta precisión."
    },
    {
        icon: <Pickaxe size={40} />,
        title: "Minería y Continuidad",
        description: "Flota certificada con estándares mineros. Enfoque en disponibilidad mecánica (KPIs) y seguridad operativa (HSE) para faenas críticas."
    },
    {
        icon: <Tractor size={40} />,
        title: "Proyectos Hídricos",
        description: "Desarrollo de infraestructura hídrica eficiente. Transporte de agua industrial, limpieza de canales y preparación de terrenos productivos."
    },
    {
        icon: <Truck size={40} />,
        title: "Unidad de Concreto",
        description: "Instalación, mantenimiento y reparación especializada de betoneras para camiones mixer en la Región Metropolitana y la IV Región (Coquimbo)."
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-julmar-green-light font-bold uppercase tracking-widest mb-2 block text-sm">Especialistas en la IV y III Región</span>
                    <h2 className="text-4xl md:text-5xl font-black text-julmar-dark mb-6">SERVICIOS MINEROS Y OBRAS VIALES</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Ofrecemos maquinaria y personal calificado para los sectores clave de la región.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-julmar-dark group-hover:scale-110 transition-all duration-300">
                                <span className="text-julmar-dark group-hover:text-julmar-green transition-colors duration-300">
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-julmar-green-light transition-colors duration-300">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;
