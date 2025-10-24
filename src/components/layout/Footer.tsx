import { Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative border-t border-primary/20 african-pattern bg-linear-to-b from-background via-white to-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#E76835] rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">K</span>
                            </div>
                            <span className="text-2xl font-bold text-[#C58548]">Kutambula</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Conectando ideias, produtos e inovação em um marketplace moderno para o ecossistema africano.
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-[#C58548]">Plataforma</h4>
                        <ul className="space-y-2">
                            {["Explorar", "Categorias", "Startups", "Publicar"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-[#C58548]">Empresa</h4>
                        <ul className="space-y-2">
                            {["Sobre nós", "Blog", "Carreiras", "Contato"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-[#C58548]">Newsletter</h4>
                        <p className="text-sm text-gray-600">Receba as últimas novidades e oportunidades</p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Seu email" 
                                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#E76835] focus:ring-1 focus:ring-[#E76835]" 
                            />
                            <button className="px-4 py-2 text-sm font-medium text-white bg-[#E76835] rounded-md hover:bg-[#C58548] transition-colors">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600">© 2025 Kutambula. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                            Privacidade
                        </a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                            Termos
                        </a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E76835] to-transparent opacity-50" />
        </footer>
    )
}
