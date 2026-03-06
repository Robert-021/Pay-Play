export default function Benefits() {

    const benefits = [
        {
            title: "Simple",
            desc: "No necesitas cuenta bancaria para empezar.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 6h16M4 18h10" />
                </svg>
            )
        },
        {
            title: "Transparente",
            desc: "No cobramos recargos por retrasos en los pagos.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3.866 0-7 2.239-7 5s3.134 5 7 5 7-2.239 7-5-3.134-5-7-5z" />
                    <circle cx="12" cy="13" r="2" />
                </svg>
            )
        },
        {
            title: "Crecimiento",
            desc: "Te ayudamos a mejorar tu score crediticio.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 7-7" />
                </svg>
            )
        },
        {
            title: "Aprobación",
            desc: "95% de las solicitudes son aprobadas al instante.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            )
        }
    ]

    return (
        <section id="benefits" className="py-40 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-primary text-xs md:text-[20px] font-black uppercase tracking-[0.5em]">
                                Ventajas Exclusivas
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter text-black">
                            MÁS QUE <br /><span className="text-primary italic">SOLO CRÉDITO</span>
                        </h2>

                        <p className="text-gray-500 text-xl mb-12 font-medium leading-relaxed max-w-lg">
                            Diseñamos un sistema que premia tu cumplimiento y te abre las puertas al mundo digital.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-10 bg-gray-50 border border-gray-100 rounded-[3rem] hover:border-primary transition-all group shadow-sm">

                                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>

                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-black">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    {benefit.desc}
                                </p>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        </section>
    )
}