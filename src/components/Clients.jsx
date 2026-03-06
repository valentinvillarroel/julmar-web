import React from 'react';

const clients = [
    { name: "UNITED", id: 1 },
    { name: "HY TECH DRILLING", id: 2 },
    { name: "VIVELO LTDA.", id: 3 },
    { name: "ISASER SpA", id: 4 },
    { name: "TOLEDO GIANZO", id: 5 },
    { name: "COMERCIAL TRAGAL", id: 6 },
    { name: "CMP", id: 7 },
    { name: "WOLF DRILLING", id: 8 }
];

const LogoPlaceholder = ({ name }) => (
    <div className="mx-8 flex items-center justify-center group">
        <div className="px-8 py-4 bg-gray-50 rounded-xl border-2 border-gray-100 group-hover:border-julmar-green/30 group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] min-w-[200px] text-center">
            <span className="text-xl md:text-2xl font-black text-gray-300 group-hover:text-gray-700 transition-colors uppercase tracking-tight flex items-center justify-center h-full">
                {name}
            </span>
        </div>
    </div>
);

const Clients = () => {
    return (
        <section className="py-16 bg-white border-b border-gray-100 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                <span className="text-julmar-green font-bold uppercase tracking-widest text-xs md:text-sm">Confianza Industrial</span>
                <h3 className="text-gray-900 text-2xl md:text-3xl font-black mt-2">
                    EMPRESAS QUE NOS ELIGEN
                </h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {clients.map((client) => (
                        <LogoPlaceholder key={client.id} name={client.name} />
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
                    {clients.map((client) => (
                        <LogoPlaceholder key={`${client.id}-duplicate`} name={client.name} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 25s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
            `}</style>
        </section>
    );
};

export default Clients;
