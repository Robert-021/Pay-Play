"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const personaImages = [
    "/images/Persona1.png",
    "/images/Persona3.png",
    "/images/Persona4.png",
    "/images/Persona2.png",
]

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % personaImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative bg-[#000000] text-white min-h-screen flex items-center pt-24 overflow-hidden">
            {/* High Intensity Ambient Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="lg:w-7/12 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-primary text-xs md:text-[15px] font-black uppercase tracking-[0.5em]">
                                Tecnología al alcance de todos
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white">
                            ESTRENA <br />
                            <span className="text-primary uppercase">HOY MISMO</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-medium">
                            Obtén el celular que siemprequisiste con <span className="text-white font-bold">cuotitas semanales</span>. Sin bancos, sin complicaciones, solo con tu cédula.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap gap-6 items-center">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(230,57,70,0.5)] border-2 border-transparent"
                        >
                            Solicitar Crédito
                        </motion.a>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5 max-w-xl">
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-primary tracking-tighter">95%</p>
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Aprobados</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">0%</p>
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Trámites</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">15%</p>
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Entrada</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Persona Slideshow in the corner */}
            <div className="absolute bottom-0 right-0 w-[500px] md:w-[850px] h-[500px] md:h-[850px] pointer-events-none translate-x-10 translate-y-10 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src={personaImages[currentIndex]}
                            alt="Persona usando PayPlay"
                            fill
                            className="object-contain object-bottom-right drop-shadow-[0_20px_100px_rgba(0,0,0,0.8)]"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
