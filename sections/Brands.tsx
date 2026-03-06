"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const brands = [
    "/images/brands/Samsung.png",
    "/images/brands/Huawei.png",
    "/images/brands/Realme.png",
    "/images/brands/ZTE.png",
    "/images/brands/Xiaomi.png",
    "/images/brands/Tecno.png",
    "/images/brands/Inifinix.png",
    "/images/brands/Motorola.svg",
    "/images/brands/Hyundai.svg",
    "/images/brands/LG.png",
    "/images/brands/Honor.png",
]

export default function Brands() {
    return (
        <section id="brands" className="py-16 bg-white relative overflow-hidden border-y border-gray-100">
            <div className="relative z-10 w-full px-4">
                <p className="text-center text-[16px] md:text-[20px] font-black uppercase tracking-[0.6em] text-primary mb-16">
                    Marcas Globales
                </p>

                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex items-center w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 25, // Adjusted speed for a smooth feel
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex justify-center px-10 md:px-16 w-[200px] md:w-[300px]"
                            >
                                <Image
                                    src={brand}
                                    alt="Logo de marca"
                                    width={220}
                                    height={110}
                                    className="object-contain max-h-16 md:max-h-20 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}