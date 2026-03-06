export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 border-t-2 border-primary/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-16 mb-12">
                    <div className="md:col-span-2">
                        <span className="text-4xl font-black tracking-tighter">
                            PAY<span className="text-primary">&</span>PLAY
                        </span>
                        <p className="text-gray-500 mt-6 max-w-sm text-base font-medium leading-relaxed">
                            Transformamos la manera en que los ecuatorianos acceden a la tecnología más avanzada. Sin bancos, sin esperas, solo beneficios.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                            Redes Sociales
                        </h4>

                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M21 8.5a7.5 7.5 0 01-4.5-1.5v7.5a6 6 0 11-6-6c.34 0 .67.03 1 .08v3.03a3 3 0 10 2 2.83V2h3a4.5 4.5 0 004.5 4.5v2z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-2.9h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M20 4a10 10 0 00-17 7c0 1.8.5 3.6 1.4 5.1L3 21l5.1-1.3A10 10 0 0020 4zm-8 15a7 7 0 01-3.6-1l-.3-.2-3 .8.8-2.9-.2-.3A7 7 0 1112 19zm3.9-5.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8c-.1.1-.3.2-.5.1s-.9-.3-1.7-1a6.5 6.5 0 01-1.2-1.5c-.1-.2 0-.3.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5 0-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-.9 2.4.1 1.4 1 2.8 1.1 3 .1.2 2 3.1 5 4.3.7.3 1.2.4 1.6.5.7.2 1.3.2 1.8.1.6-.1 1.2-.5 1.3-.9.2-.4.2-.8.1-.9-.1-.1-.2-.1-.5-.2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">
                    <p>© 2026 PAY & PLAY. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex gap-8">
                        <a className="hover:text-primary transition-colors">Términos Legales</a>
                        <a className="hover:text-primary transition-colors">Protección de Datos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
