"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const faqs = [
    {
        question: "¿Qué teléfonos puedo comprar con Pay & Play?",
        answer: "Puedes elegir entre marcas como Samsung, Huawei, Realme, TCL, Tecno, Infinix y ZTE. Los modelos están sujetos a disponibilidad inmediata en nuestras tiendas aliadas."
    },
    {
        question: "¿Qué requisitos necesito?",
        answer: "Solo necesitas tu cédula de identidad vigente y un número celular activo para poder validar tu identidad y enviarte las notificaciones de pago."
    },
    {
        question: "¿Cuánto debo pagar de entrada?",
        answer: "El valor de la entrada depende del nivel crediticio asignado por nuestro sistema, pero generalmente va desde el 15% hasta el 35% del valor total del equipo."
    },
    {
        question: "¿Dónde puedo pagar mis cuotitas semanales?",
        answer: "Puedes realizar tus pagos de forma rápida y segura mediante transferencias directas o depósitos en nuestras cuentas bancarias oficiales autorizadas:",
        logos: [
            "/images/BancoPichincha.png",
            "/images/BancoBolivariano.png",
            "/images/Produbanco.webp",
            "/images/InternacionalBanco.svg"
        ]
    }
]

export default function Faq() {
    const [active, setActive] = useState<number | null>(null)

    return (
        <section id="faq" className="py-40 bg-white text-black relative overflow-hidden">
            {/* Red intensity glows */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-primary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-primary font-black uppercase tracking-[0.5em] text-[20px] mb-6 inline-block">Preguntas Frecuentes</span>
                    <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-black">
                        RESOLVEMOS <br /><span className="text-primary italic">TUS DUDAS</span>
                    </h2>
                    <p className="text-gray-500 text-lg font-medium">Todo lo que necesitas saber antes de estrenar tu equipo.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 rounded-[3rem] border transition-all duration-500 overflow-hidden cursor-pointer group ${active === index ? 'border-primary shadow-xl shadow-primary/5 bg-primary/5' : 'border-gray-100 hover:border-primary/30'}`}
                            onClick={() => setActive(active === index ? null : index)}
                        >
                            <div className="p-10 flex gap-6 items-center">
                                <span className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-500 ${active === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight text-black leading-tight flex-grow pt-1">
                                    {faq.question}
                                </h3>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-500 ${active === index ? 'rotate-180 bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            <AnimatePresence>
                                {active === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                    >
                                        <div className="px-10 pb-10">
                                            <div className="text-black/70 text-lg leading-relaxed font-medium pt-4 border-t border-primary/10">
                                                <p className={faq.logos ? "mb-10" : ""}>{faq.answer}</p>

                                                {faq.logos && (
                                                    <div className="grid grid-cols-2 gap-6 items-center bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                                                        {faq.logos.map((logo, lIndex) => (
                                                            <div key={lIndex} className="flex justify-center h-16 relative">
                                                                <Image
                                                                    src={logo}
                                                                    alt="Banco Autorizado"
                                                                    width={150}
                                                                    height={60}
                                                                    className="object-contain hover:scale-110 transition-all duration-300 contrast-[1.1]"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Image at the bottom right */}
            <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] pointer-events-none opacity-10 md:opacity-30 translate-x-20 translate-y-20">
                <Image
                    src="/images/FAQ.png"
                    alt="FAQ Illustration Professional"
                    fill
                    className="object-contain object-bottom-right grayscale brightness-50 contrast-125"
                />
            </div>
        </section>
    )
}
