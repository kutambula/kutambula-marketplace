import { useState } from 'react';
import { Search, ChevronDown, Menu, X, Store, Tag, Headset, Globe, ShoppingBag, User, MessageCircle, FileText, HelpCircle, Mail, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/icon.png';
import icon4 from '../../assets/images/icon4.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('pt');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const languages = [
		{ code: 'pt', name: 'Português', flag: '🇵🇹' },           // Portugal
		{ code: 'en', name: 'English', flag: '🇬🇧' },            // Reino Unido
		{ code: 'fr', name: 'Français', flag: '🇫🇷' },           // França
		{ code: 'it', name: 'Italiano', flag: '🇮🇹' },           // Itália
		{ code: 'km', name: 'Kimbundo', flag: '🇦🇴' },           // Angola (língua nacional)
		{ code: 'gw', name: 'Crioulo Guineense', flag: '🇬🇼' },   // Guiné-Bissau
		{ code: 'cv', name: 'Cabo-verdiano', flag: '🇨🇻' },       // Cabo Verde
		{ code: 'st', name: 'Santomense', flag: '🇸🇹' },          // São Tomé e Príncipe
	];


    return (
        <header className="bg-primary md:bg-white sticky top-0 z-50">

            {/* Navigation Links Bar */}
            <div className='relative african-pattern'>
                <div className='container mx-auto px-4 relative z-10'>
                    {/* Desktop Navigation */}
                    <nav className='hidden lg:flex items-center justify-between py-2'>
                        <ul className='flex items-center gap-6'>
                            <li>
                                <Link to="/marketplace" className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Store className="w-4 h-4" />
                                    Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link to="/ofertas" className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Tag className="w-4 h-4" />
                                    Ofertas
                                </Link>
                            </li>
                            <li>
                                <Link to="/categorias" className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    Categorias
                                </Link>
                            </li>
                        </ul>

                        <ul className='flex items-center gap-6'>
                            <li>
                                <a href="tel:+244999000000" className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Phone className="w-4 h-4" />
                                    Contacto
                                </a>
                            </li>
                            <li className="relative group">
                                <button className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Globe className="w-4 h-4" />
                                    {languages.find(lang => lang.code === currentLanguage)?.name}
                                    <ChevronDown className="w-3 h-3" />
                                </button>
                                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setCurrentLanguage(lang.code)}
                                            className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-left ${currentLanguage === lang.code ? 'text-primary font-semibold' : 'text-gray-700'
                                                }`}
                                        >
                                            <span className="shrink-0">{lang.flag}</span>
                                            <span className="truncate">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className='container mx-auto px-4 py-3 md:py-4' >
                {/* Mobile Menu Overlay */}
                <div 
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={toggleMenu}
                />

                <div className="flex items-center justify-between gap-2 md:gap-6">
                    {/* Mobile Layout */}
                    <div className="flex items-center gap-3 lg:hidden">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="cursor-pointer transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                        {/* Mobile Logo */}
                        <Link to={`/`} className="shrink-0">
                            <img
                                src={icon4}
                                alt="Kutambula Marketplace Logo"
                                className="w-28 object-contain transition-transform duration-200 cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Logo */}
                    <Link
                        to={`/`}
                        className="shrink-0 hidden lg:block"
                    >
                        <img
                            src={icon}
                            alt="Kutambula Marketplace Logo"
                            className="w-12 object-contain transition-transform duration-200 cursor-pointer"
                        />
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className='hidden lg:flex flex-1 max-w-2xl'>
                        <div className='w-full flex items-center gap-2 border-1 border-gray-300 hover:border-primary focus-within:border-primary px-4 py-2.5 rounded-full transition-colors duration-200'>
                            <div className='relative'>
                                <select
                                    name="category"
                                    aria-label="Selecionar categoria"
                                    className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer hover:text-primary transition-colors"
                                >
                                    <option value="all-categories">Todas as Categorias</option>
                                    <option value="category-1">Eletrônicos</option>
                                    <option value="category-2">Moda</option>
                                    <option value="category-3">Casa & Jardim</option>
                                    <option value="category-4">Esportes</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                            </div>

                            <div className='w-px h-6 bg-gray-300'></div>

                            <input
                                type="search"
                                placeholder="Pesquisa por produtos e lojas..."
                                className='flex-1 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none px-2'
                            />

                            <button
                                className='flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-tertiary text-white font-medium transition-all duration-200 hover:shadow-md active:scale-95'
                                aria-label="Search"
                            >
                                <Search className="w-4 h-4" />
                                <span>Buscar</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Menu */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {/* Cart */}
                        <button
                            className='relative p-2 md:p-2.5 cursor-pointer transition-colors duration-200'
                            aria-label="Shopping Cart"
                        >
                            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                        </button>

                        {/* User Account */}
                        <button
                            className='flex items-center gap-2 p-2 md:px-3 md:py-2.5 cursor-pointer transition-colors duration-200'
                            aria-label="User Account"
                        >
                            <User className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Search Bar */}
            <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Pesquisar produtos e lojas..."
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-tertiary text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                    >
                        Buscar
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="lg:hidden bg-gray-50 border-t border-gray-200 overflow-x-auto">
                <div className="px-4 py-3">
                    <nav className="flex gap-4 min-w-max">
                        <a href="#comentarios" className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white">
                            <MessageCircle className="w-3.5 h-3.5" />
                            Comentários
                        </a>
                        <Link to="/reclamacoes" className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white">
                            <FileText className="w-3.5 h-3.5" />
                            Reclamações
                        </Link>
                        <Link to="/suporte" className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white">
                            <HelpCircle className="w-3.5 h-3.5" />
                            Suporte
                        </Link>
                        <a href="mailto:suporte@kutambula.com" className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white">
                            <Mail className="w-3.5 h-3.5" />
                            E-mail
                        </a>
                        <a href="#chat" className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white">
                            <MessageSquare className="w-3.5 h-3.5" />
                            Chat
                        </a>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <img
                            src={icon}
                            alt="Kutambula"
                            className="w-8 h-8 object-contain"
                        />
                        <h2 className="text-lg font-bold text-gray-900">Menu</h2>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Fechar Menu"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full overflow-y-auto">
                    {/* Search Bar Mobile */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Pesquisar produtos..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 p-4">
                        <nav className="space-y-1">
                            {/* Main Navigation */}
                            <div className="mb-6">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Navegação</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link 
                                            to="/marketplace" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <Store className="w-5 h-5" />
                                            <span className="font-medium">Marketplace</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/ofertas" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <Tag className="w-5 h-5" />
                                            <span className="font-medium">Ofertas</span>
                                            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">Hot</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/categorias" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H3a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM9 7v10" />
                                            </svg>
                                            <span className="font-medium">Categorias</span>
                                            <ChevronDown className="w-4 h-4 ml-auto" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/lojas" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            <span className="font-medium">Lojas Verificadas</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Account Section */}
                            <div className="mb-6">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Conta</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link 
                                            to="/login" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <User className="w-5 h-5" />
                                            <span className="font-medium">Entrar / Registar</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/carrinho" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <ShoppingBag className="w-5 h-5" />
                                            <span className="font-medium">Carrinho</span>
                                            <span className="ml-auto bg-primary text-white text-xs px-2 py-1 rounded-full">3</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/favoritos" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            <span className="font-medium">Lista de Desejos</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Support Section */}
                            <div className="mb-6">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Suporte</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link 
                                            to="/contato" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <Headset className="w-5 h-5" />
                                            <span className="font-medium">Centro de Ajuda</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/sobre" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-medium">Sobre Nós</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/reclamacoes" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.179 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                            </svg>
                                            <span className="font-medium">Portal de Reclamações</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Language Selector - Mobile */}
                    <div className="p-4 border-t border-gray-200">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Idioma</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setCurrentLanguage(lang.code);
                                        toggleMenu();
                                    }}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                        currentLanguage === lang.code 
                                            ? 'bg-primary text-white' 
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <span className="text-base">{lang.flag}</span>
                                    <span className="font-medium truncate">{lang.name.split(' ')[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-gray-50 text-center">
                        <p className="text-xs text-gray-500 mb-2">© 2025 Kutambula Marketplace</p>
                        <div className="flex justify-center gap-4">
                            <Link to="/privacidade" className="text-xs text-gray-500 hover:text-primary" onClick={toggleMenu}>
                                Privacidade
                            </Link>
                            <Link to="/termos" className="text-xs text-gray-500 hover:text-primary" onClick={toggleMenu}>
                                Termos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}