"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Promo() {
    return (
        <section id="cajeros" className="py-40 bg-primary text-black text-center relative overflow-hidden">
            {/* Background floating images */}
            <motion.div
                className="absolute left-[-5%] top-0 h-full w-1/4 pointer-events-none hidden xl:block opacity-50 xl:opacity-100"
                animate={{ x: [-20, 20, -20], rotate: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image
                    src="/images/honor.png"
                    alt="Honor Promo"
                    fill
                    className="object-contain object-left drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                />
            </motion.div>

            <motion.div
                className="absolute right-[-5%] top-0 h-full w-1/4 pointer-events-none hidden xl:block opacity-50 xl:opacity-100"
                animate={{ x: [20, -20, 20], rotate: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image
                    src="/images/infinix1.png"
                    alt="Infinix Promo"
                    fill
                    className="object-contain object-right drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                />
            </motion.div>

            {/* Massive background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/5 leading-none select-none pointer-events-none whitespace-nowrap">
                AHORRA YA
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    <span className="bg-black text-white md:text-[15px] px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-10">
                        Oferta Relámpago
                    </span>
                    <h2 className="text-7xl md:text-9xl font-black mb-6 tracking-[0.05em] leading-[0.8] text-secondary">
                        ¡ESTRENA <br /> <span className="text-white">CON 2x1!</span>
                    </h2>
                    <p className="text-2xl md:text-4xl font-black mb-8 text-black/80 max-w-3xl leading-tight">
                        Regalos exclusivos en modelos seleccionados. Solo por tiempo limitado.
                    </p>
                    <a
                        href="#"
                        className="bg-black text-white px-16 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-110 transition-transform shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black inline-block"
                    >
                        ¡LO QUIERO AHORA!
                    </a>

                    <div className="mt-10 flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                        <div className="w-3 h-3 rounded-full bg-black animate-ping" />
                        <span>Válido solo por hoy</span>
                    </div>
                </div>
            </div>
        </section>
    )
}