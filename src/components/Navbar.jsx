import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-julmar-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img src="/logo-new.jpg" alt="Julmar Logo" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-2xl shadow-lg border border-white/20" />
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Inicio', 'Flota', 'Servicios', 'Nosotros'].map((item) => (
                            <a
                                key={item}
                                href={item === 'Inicio' ? '#' : `#${item.toLowerCase()}`}
                                onClick={(e) => {
                                    if (item === 'Inicio') {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-julmar-green transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}

                        <a
                            href="#contacto"
                            className="bg-julmar-green hover:bg-julmar-green-light text-julmar-dark px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Phone size={16} />
                            COTIZAR AHORA
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:text-julmar-green transition-colors"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-julmar-dark/95 backdrop-blur-xl border-t border-gray-800"
                    >
                        <div className="px-4 py-8 space-y-4">
                            {['Inicio', 'Flota', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                                <a
                                    key={item}
                                    href={item === 'Inicio' ? '#' : `#${item.toLowerCase()}`}
                                    onClick={(e) => {
                                        setMobileMenuOpen(false);
                                        if (item === 'Inicio') {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }}
                                    className="block text-white text-lg font-bold py-2 border-b border-gray-800 hover:text-julmar-green transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="tel:+56966240252"
                                    className="w-full bg-julmar-green text-julmar-dark text-center py-3 rounded-xl font-black uppercase tracking-wide block"
                                >
                                    Llamar Ahora
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
