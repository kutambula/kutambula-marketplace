import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="relative border-t border-primary/20 african-pattern bg-linear-to-b from-background via-white to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
                    {/* Brand */}
                    <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E76835] rounded-lg flex items-center justify-center">
                                <span className="text-lg sm:text-2xl font-bold text-white">K</span>
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-[#C58548]">Kutambula</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            Conectando ideias, produtos e inovação em um marketplace moderno para o ecossistema africano.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://tiktok.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors"
                                aria-label="TikTok"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://youtube.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-md hover:bg-[#E76835]/10 hover:text-[#E76835] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-[#C58548] text-sm sm:text-base">Plataforma</h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {["Explorar", "Categorias", "Startups", "Publicar"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-[#C58548] text-sm sm:text-base">Empresa</h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            <li>
                                <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <Link to="/contato" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Suporte */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-[#C58548] text-sm sm:text-base">Suporte</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link to="/contato" className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="truncate">suporte@kutambula.com</span>
                                </Link>
                            </li>
                            <li>
                                <a href="tel:+244900000000" className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                                    +244 900 000 000
                                </a>
                            </li>
                            <li>
                                <Link to="/reclamacoes" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#E76835] transition-colors">
                                    Portal de Reclamações
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                        <h4 className="font-semibold text-[#C58548] text-sm sm:text-base">Newsletter</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Receba as últimas novidades e oportunidades</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Seu email" 
                                className="flex-1 px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#E76835] focus:ring-1 focus:ring-[#E76835]" 
                            />
                            <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#E76835] rounded-md hover:bg-[#C58548] transition-colors">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                    <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left">© 2025 Kutambula. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                            Privacidade
                        </a>
                        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                            Termos
                        </a>
                        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-[#E76835] transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Pattern */}
        </footer>
    )
}
