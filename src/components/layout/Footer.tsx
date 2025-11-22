import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import icon from '../../assets/images/icon.png'

export default function Footer() {
    return (
        <footer className="relative bg-linear-to-br from-gray-900 via-gray-800 to-secondary overflow-hidden">
            {/* Decorative SVG Wave Top */}
            <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path 
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                        opacity=".15" 
                        fill="currentColor"
                        className="text-primary"
                    />
                    <path 
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                        opacity=".25" 
                        fill="currentColor"
                        className="text-tertiary"
                    />
                    <path 
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                        fill="currentColor"
                        className="text-primary/30"
                    />
                </svg>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-tertiary rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 mt-12 sm:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-12">
                    {/* Brand - Col 1-4 */}
                    <div className="space-y-6 lg:col-span-4">
                        <div className="space-y-4">
                            <img 
                                src={icon} 
                                alt="Kutambula Marketplace" 
                                className="w-40 sm:w-44 h-auto object-contain brightness-0 invert"
                            />
                            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                                Conectando a diáspora africana aos melhores produtos alimentares e bebidas tradicionais em Portugal.
                            </p>
                        </div>
                        
                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">Siga-nos</h4>
                            <div className="flex items-center gap-2 flex-wrap">
                                <a 
                                    href="https://facebook.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a 
                                    href="https://youtube.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-5 h-5" />
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a 
                                    href="https://tiktok.com/@kutambula" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="TikTok"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                    </svg>
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a 
                                    href="https://open.spotify.com/user/kutambula" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="Spotify"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                    </svg>
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a 
                                    href="https://podcasts.kutambula.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="Podcast"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="11" r="3"/>
                                        <path d="M12 8V5"/>
                                        <path d="M12 14v9"/>
                                        <path d="M8 11a4 4 0 0 1 8 0"/>
                                        <path d="M5 11a7 7 0 0 1 14 0"/>
                                    </svg>
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                            </div>
                        </div>
                    </div>                    {/* Links - Col 5-6 */}
                    <div className="space-y-5 lg:col-span-2">
                        <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase">Plataforma</h4>
                        <ul className="space-y-3">
                            {["Explorar", "Categorias", "Lojas", "Anunciar"].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={`/${item.toLowerCase()}`} 
                                        className="group text-sm text-white/60 hover:text-primary transition-all duration-200 inline-flex items-center gap-2"
                                    >
                                        <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa - Col 7-8 */}
                    <div className="space-y-5 lg:col-span-2">
                        <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase">Empresa</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="group text-sm text-white/60 hover:text-primary transition-all duration-200 inline-flex items-center gap-2">
                                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group text-sm text-white/60 hover:text-primary transition-all duration-200 inline-flex items-center gap-2">
                                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group text-sm text-white/60 hover:text-primary transition-all duration-200 inline-flex items-center gap-2">
                                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <Link to="/contato" className="group text-sm text-white/60 hover:text-primary transition-all duration-200 inline-flex items-center gap-2">
                                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Suporte - Col 9-12 */}
                    <div className="space-y-5 lg:col-span-4 sm:col-span-2">
                        <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase">Suporte & Contacto</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link 
                                    to="/contato" 
                                    className="group flex items-start gap-3 text-sm text-white/60 hover:text-primary transition-all duration-200 p-3 rounded-lg hover:bg-white/5"
                                >
                                    <Mail className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-medium text-white text-xs uppercase tracking-wider">Email</span>
                                        <span>suporte@kutambula.com</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="tel:+351900000000" 
                                    className="group flex items-start gap-3 text-sm text-white/60 hover:text-primary transition-all duration-200 p-3 rounded-lg hover:bg-white/5"
                                >
                                    <Phone className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-medium text-white text-xs uppercase tracking-wider">Telefone</span>
                                        <span>+351 900 000 000</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="group flex items-start gap-3 text-sm text-white/60 hover:text-primary transition-all duration-200 p-3 rounded-lg hover:bg-white/5"
                                >
                                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-medium text-white text-xs uppercase tracking-wider">Localização</span>
                                        <span>Lisboa, Portugal</span>
                                    </div>
                                </a>
                            </li>
                            <li className="pt-2">
                                <Link 
                                    to="/reclamacoes" 
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group px-4 py-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Portal de Reclamações
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 mt-12 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-sm text-white/50 text-center md:text-left order-2 md:order-1">
                            © 2025 <span className="text-primary font-semibold">Kutambula Marketplace</span>. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-6 md:gap-8 order-1 md:order-2">
                            <a 
                                href="#" 
                                className="text-sm text-white/50 hover:text-primary transition-colors relative group"
                            >
                                Privacidade
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a 
                                href="#" 
                                className="text-sm text-white/50 hover:text-primary transition-colors relative group"
                            >
                                Termos
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a 
                                href="#" 
                                className="text-sm text-white/50 hover:text-primary transition-colors relative group"
                            >
                                Cookies
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative SVG Wave Bottom */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path 
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                        fill="currentColor"
                        className="text-gray-900/50"
                    />
                </svg>
            </div>
        </footer>
    )
}
