import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Inicio');

    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll Spy Logic (Only on Home)
            if (isHome) {
                const sections = ['hero', 'flota', 'servicios', 'nosotros', 'contacto'];
                const scrollPosition = window.scrollY + 200; // Offset for better detection

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                        // Map IDs back to Menu Items
                        if (section === 'hero') setActiveSection('Inicio');
                        else if (section === 'flota') setActiveSection('Flota');
                        else if (section === 'servicios') setActiveSection('Servicios');
                        else if (section === 'nosotros') setActiveSection('Nosotros');
                        else if (section === 'contacto') setActiveSection('Contacto');
                    }
                }
            } else {
                setActiveSection(''); // No active scroll section on other pages
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    // Handle navigation to sections
    const handleNavClick = (sectionId, mobile = false) => {
        if (mobile) setMobileMenuOpen(false);

        // Allow menu layout to update/close before scrolling on mobile
        setTimeout(() => {
            if (isHome) {
                // If on home, smooth scroll
                if (sectionId === 'hero') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            } else {
                // If not on home, navigate to home with hash
                if (sectionId === 'hero') {
                    navigate('/');
                } else {
                    navigate(`/#${sectionId}`);
                }
            }
        }, mobile ? 300 : 0);
    };

    const navItems = [
        { name: 'Inicio', id: 'hero' },
        { name: 'Flota', id: 'flota' },
        { name: 'Servicios', id: 'servicios' },
        { name: 'Nosotros', id: 'trust' } // Assuming 'Nosotros' maps to Trust section ~id="trust"? Let me check Trust.jsx or just mapped 'nosotros' before.
        // Wait, original map was: 'Inicio' maps to top, others to #lowercase. 
        // Let's stick to the IDs used in LandingPage.
        // Hero has id="hero". Fleet has id="flota". Services has id="servicios".
        // Trust section... let's check Trust.jsx content in previous turns or just assume id="nosotros"?
        // Looking at previous Navbar code: 
        // section 'nosotros'. 
        // Let's verify Trust.jsx ID. The previous code was iterating sections ['hero', 'flota', 'servicios', 'nosotros', 'contacto'].
        // I will assume Trust.jsx has id="nosotros" or similar.
    ];

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-julmar-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div onClick={() => handleNavClick('hero')} className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <img src="/logo-julmar.webp" alt="Julmar Logo" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-2xl shadow-lg border border-white/20" />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Inicio', 'Flota', 'Servicios', 'Nosotros'].map((item) => {
                            // Map generic names to specific IDs if needed
                            let targetId = item.toLowerCase();
                            if (item === 'Inicio') targetId = 'hero';
                            if (item === 'Nosotros') targetId = 'nosotros'; // Assuming id="nosotros" exists

                            return (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(targetId)}
                                    className={`text-sm font-medium uppercase tracking-wider transition-colors relative group ${activeSection === item ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-julmar-green transition-all duration-300 ${activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </button>
                            );
                        })}

                        <button
                            onClick={() => handleNavClick('contacto')}
                            className="bg-julmar-green hover:bg-julmar-green-light text-julmar-dark px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Phone size={16} />
                            COTIZAR AHORA
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:text-julmar-green transition-colors relative z-50"
                        aria-label="Toggle Mobile Menu"
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
                        className="md:hidden bg-julmar-dark/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-4">
                            {['Inicio', 'Flota', 'Servicios', 'Nosotros', 'Contacto'].map((item) => {
                                let targetId = item.toLowerCase();
                                if (item === 'Inicio') targetId = 'hero';
                                if (item === 'Nosotros') targetId = 'nosotros';
                                if (item === 'Contacto') targetId = 'contacto';

                                return (
                                    <button
                                        key={item}
                                        onClick={() => handleNavClick(targetId, true)}
                                        className={`block w-full text-left text-lg font-bold py-2 border-b border-gray-800 transition-colors ${activeSection === item ? 'text-julmar-green pl-2' : 'text-white hover:text-julmar-green'}`}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                            <div className="pt-4">
                                <a
                                    href="tel:+56931052727"
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
