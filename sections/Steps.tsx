"use client"

import { motion } from "framer-motion"

const steps = [
    {
        title: "Paso 1",
        description: "Acércate a tu tienda más cercana.",
        details: ["Número de teléfono", "Cédula vigente"]
    },
    {
        title: "Paso 2",
        description: "Elige el smartphone de tus sueños.",
        details: ["Planes de 3, 6 o 9 meses", "Sin trámites pesados"]
    },
    {
        title: "Paso 3",
        description: "Sin intereses moratorios.",
        details: ["Construye tu historial", "Paga semanalmente"]
    }
]

export default function Steps() {
    return (
        <section id="steps" className="py-40 bg-black text-white relative overflow-hidden">
            {/* Red accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10 px-6">
                <div className="text-center mb-24">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[20px] mb-4 inline-block">Proceso de Registro</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                        SOLO <span className="text-primary">3 PASOS</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
                        Sin burocracia. Sin complicaciones. Solo tres simples pasos para tener tu equipo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative group p-12 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-primary transition-all duration-500 hover:-translate-y-4"
                        >
                            <div className="text-8xl font-black absolute -top-8 -right-4 text-white/5 group-hover:text-black/20 transition-colors pointer-events-none">
                                0{index + 1}
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-primary group-hover:bg-white flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(230,57,70,0.3)] group-hover:shadow-none transition-all">
                                <span className="text-white group-hover:text-primary font-black text-2xl">{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors uppercase tracking-tight">{step.description}</h3>
                            <ul className="space-y-4">
                                {step.details.map((detail, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-500 group-hover:text-white/80 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white" />
                                        <span className="text-xs font-black uppercase tracking-widest">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
