import React from 'react';

const clients = [
    "UNITED",
    "HY TECH DRILLING",
    "VIVELO LTDA.",
    "ISASER SpA",
    "TOLEDO GIANZO",
    "COMERCIAL TRAGAL",
    "CMP",
    "WOLF DRILLING"
];

const Clients = () => {
    return (
        <section className="py-12 md:py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8 md:mb-12">
                    Confían en Nuestra Calidad
                </h3>

                {/* Responsive Layout: 2 Columns on Mobile, Flex/Grid on Desktop */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-4 md:gap-x-16 md:gap-y-10">
                    {clients.map((client, index) => (
                        <div key={index} className="flex justify-center items-center p-2">
                            <span className="text-lg sm:text-xl md:text-3xl font-black text-gray-300 hover:text-julmar-dark transition-colors duration-300 cursor-default uppercase text-center">
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
