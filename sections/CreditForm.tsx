export default function CreditForm() {
    return (
        <section id="credit" className="py-48 bg-primary relative overflow-hidden">
            {/* Background floating circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 text-white">
                    <span className="bg-black/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6 inline-block">Proceso 100% Digital</span>
                    <h2 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
                        SOLICITAR <br /><span className="text-black">CRÉDITO</span>
                    </h2>
                    <p className="text-black/70 text-xl font-black uppercase tracking-widest text-sm">Toma menos de 2 minutos.</p>
                </div>

                <form className="space-y-8 bg-black p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Nombres</label>
                            <input
                                type="text"
                                placeholder="JUAN"
                                className="w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-white placeholder:text-gray-700 font-bold uppercase"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Apellidos</label>
                            <input
                                type="text"
                                placeholder="PÉREZ"
                                className="w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-white placeholder:text-gray-700 font-bold uppercase"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Cédula de Identidad</label>
                        <input
                            type="text"
                            placeholder="0000000000"
                            className="w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-white placeholder:text-gray-700 font-black tracking-widest"
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Número de Whatsapp</label>
                        <input
                            type="text"
                            placeholder="+593 ..."
                            className="w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-white placeholder:text-gray-700 font-bold"
                        />
                    </div>

                    <div className="pt-8">
                        <button className="w-full bg-primary text-white py-6 rounded-full text-xl font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_-10px_rgba(230,57,70,0.6)] hover:bg-white hover:text-black transition-all active:scale-95">
                            Enviar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}