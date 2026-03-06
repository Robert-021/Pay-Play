"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Marcas", href: "#brands" },
    { name: "Pasos", href: "#steps" },
    { name: "Beneficios", href: "#benefits" },
    { name: "Promociones", href: "#cajeros" },
    { name: "Preguntas", href: "#faq" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-3xl font-black tracking-tighter text-white">
                        PAY<span className="text-primary group-hover:text-white transition-colors">&</span>PLAY
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:width-full" />
                        </a>
                    ))}
                    <a
                        href="#"
                        className="bg-primary text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(230,57,70,0.4)] active:scale-95"
                    >
                        Crédito YA
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 bg-primary/20 rounded-lg border border-primary/20"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
