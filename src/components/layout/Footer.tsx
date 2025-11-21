import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import icon from '../../assets/images/icon.png'

export default function Footer() {
    return (
        <footer className="relative bg-secondary border-t border-gray-700">
            {/* Decorative top wave */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4 sm:space-y-5 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <img 
                                src={icon} 
                                alt="Kutambula Marketplace" 
                                className="w-36 sm:w-40 h-auto object-contain brightness-0 invert"
                            />
                        </div>
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary hover:scale-110 text-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary hover:scale-110 text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://tiktok.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary hover:scale-110 text-white transition-all duration-300"
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
                                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary hover:scale-110 text-white transition-all duration-300"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary hover:scale-110 text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://spotify.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary hover:scale-110 text-white transition-all duration-300"
                                aria-label="Spotify"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary hover:scale-110 text-white transition-all duration-300"
                                aria-label="Podcast"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="11" r="3"/>
                                    <path d="M12 8v-3M12 14v9M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    <path d="M15.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    <path d="M5.5 16a6.5 6.5 0 0 1 13 0"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4 sm:space-y-5">
                        <h4 className="font-semibold text-primary text-base">Plataforma</h4>
                        <ul className="space-y-2.5">
                            {["Explorar", "Categorias", "Startups", "Publicar"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                        <h4 className="font-semibold text-primary text-base">Empresa</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <Link to="/contato" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Suporte */}
                    <div className="space-y-4 sm:space-y-5">
                        <h4 className="font-semibold text-primary text-base">Suporte</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/contato" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group">
                                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span className="truncate">suporte@kutambula.com</span>
                                </Link>
                            </li>
                            <li>
                                <a href="tel:+244900000000" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group">
                                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    +244 900 000 000
                                </a>
                            </li>
                            <li>
                                <Link to="/reclamacoes" className="text-sm font-semibold text-primary hover:text-white transition-colors inline-flex items-center gap-1 group">
                                    Portal de Reclamações
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4 sm:space-y-5 sm:col-span-2 lg:col-span-1">
                        <h4 className="font-semibold text-primary text-base">Newsletter</h4>
                        <p className="text-sm text-white/70 leading-relaxed">Receba as últimas novidades e oportunidades</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Seu email" 
                                className="flex-1 px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:bg-white/15 transition-all" 
                            />
                            <button className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/20">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/60 text-center md:text-left">© 2025 Kutambula. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                            Privacidade
                        </a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                            Termos
                        </a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}
