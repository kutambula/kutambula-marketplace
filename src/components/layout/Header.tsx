import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Search, ChevronDown, Menu, X, Store, Tag, Headset, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/icon.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('pt');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇦🇴' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'km', name: 'Kimbundo', flag: '🇦🇴' },
        { code: 'gw', name: 'Crioulo Guineense', flag: '🇬🇼' },
        { code: 'cv', name: 'Cabo-verdiano', flag: '🇨🇻' },
        { code: 'st', name: 'Santomense', flag: '🇸🇹' },
    ];

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">

            {/* Navigation Links Bar */}
            <div className='relative border-t border-primary/20 african-pattern bg-linear-to-r from-background via-white to-background'>
                <div className='container mx-auto px-4 relative z-10'>
                    {/* Desktop Navigation */}
                    <nav className='hidden lg:flex items-center justify-between py-2'>
                        <ul className='flex items-center gap-6'>
                            <li>
                                <a href="#" className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Store className="w-4 h-4" />
                                    Loja
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Tag className="w-4 h-4" />
                                    Ofertas
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Store className="w-4 h-4" />
                                    Torne-se um Vendedor
                                </a>
                            </li>
                        </ul>

                        <ul className='flex items-center gap-6'>
                            <li>
                                <a href="#" className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2'>
                                    <Headset className="w-4 h-4" />
                                    Centro de Ajuda
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
                                            className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-left ${
                                                currentLanguage === lang.code ? 'text-primary font-semibold' : 'text-gray-700'
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

                    {/* Mobile Navigation - Scrollable */}
                    <nav className='lg:hidden overflow-x-auto scrollbar-hide py-2'>
                        <ul className='flex items-center gap-4 min-w-max'>
                            <li>
                                <a href="#" className='flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap'>
                                    <Store className="w-3.5 h-3.5" />
                                    Loja
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap'>
                                    <Tag className="w-3.5 h-3.5" />
                                    Ofertas
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:text-primary transition-colors px-3 py-1.5 bg-white rounded-lg whitespace-nowrap'>
                                    <Store className="w-3.5 h-3.5" />
                                    Torne-se Vendedor
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap'>
                                    <Headset className="w-3.5 h-3.5" />
                                    Centro de Ajuda
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E76835] to-transparent opacity-50" />
            </div>

            {/* Main Navigation */}
            <nav className='container mx-auto px-4 py-3 md:py-4' >

                <div className="flex items-center justify-between gap-2 md:gap-6">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>

                    {/* Logo */}
                    <Link
                        to={`/`}
                        className="shrink-0"
                    >
                        <img
                            src={icon}
                            alt="Kutambula Marketplace Logo"
                            className="w-12 md:w-12 object-contain transition-transform duration-200 cursor-pointer"
                        />
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className='hidden lg:flex flex-1 max-w-2xl'>
                        <div className='w-full flex items-center gap-2 border-2 border-gray-300 hover:border-primary focus-within:border-primary px-4 py-2.5 rounded-full transition-colors duration-200'>
                            <div className='relative'>
                                <select
                                    name="category"
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
                        {/* Mobile Search Button */}
                        <button
                            onClick={toggleSearch}
                            className='lg:hidden p-2 md:p-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200'
                            aria-label="Toggle Search"
                        >
                            <i className='bx bx-search text-xl md:text-2xl text-gray-600'></i>
                        </button>

                        {/* Notifications - Hidden on mobile */}
                        <button
                            className='hidden md:block relative p-2.5 cursor-pointer transition-colors duration-200'
                            aria-label="Notifications"
                        >
                            <i className='bx bx-bell text-2xl text-gray-600'></i>
                            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* Cart */}
                        <button
                            className='relative p-2 md:p-2.5 cursor-pointer transition-colors duration-200'
                            aria-label="Shopping Cart"
                        >
                            <i className='bx bx-shopping-bag text-xl md:text-2xl text-gray-600'></i>
                        </button>

                        {/* User Account */}
                        <button
                            className='flex items-center gap-2 p-2 md:px-3 md:py-2.5 cursor-pointer transition-colors duration-200'
                            aria-label="User Account"
                        >
                            <i className='bx bx-user text-xl md:text-2xl text-gray-600'></i>
                            <span className="hidden xl:inline text-sm font-medium text-gray-700">Iniciar sessão</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isSearchOpen && (
                    <div className='lg:hidden mt-3 animate-in slide-in-from-top-2 duration-200'>
                        <div className='flex flex-col gap-2'>
                            <select
                                name="category"
                                title="Selecione uma categoria"
                                className="w-full appearance-none bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:border-primary cursor-pointer"
                            >
                                <option value="all-categories">Todas as Categorias</option>
                                <option value="category-1">Eletrônicos</option>
                                <option value="category-2">Moda</option>
                                <option value="category-3">Casa & Jardim</option>
                                <option value="category-4">Esportes</option>
                            </select>

                            <div className='flex items-center gap-2 border-2 border-gray-300 focus-within:border-primary px-4 py-2.5 rounded-lg transition-colors duration-200 bg-white'>
                                <i className='bx bx-search text-xl text-gray-400'></i>
                                <input
                                    type="search"
                                    placeholder="Pesquisa por produtos..."
                                    className='flex-1 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none'
                                />
                                <button
                                    className='px-4 py-1.5 rounded-lg bg-primary hover:bg-tertiary text-white text-sm font-medium transition-all duration-200 active:scale-95'
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='lg:hidden border-t border-gray-200 bg-gray-50 animate-in slide-in-from-top-2 duration-200'>
                    <div className='container mx-auto px-3 py-3'>
                        <ul className='flex flex-col gap-1'>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white transition-colors'>
                                    <i className='bx bx-store-alt text-xl text-primary'></i>
                                    <span className="text-sm font-medium text-gray-700">Loja</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white transition-colors'>
                                    <i className='bx bx-purchase-tag text-xl text-primary'></i>
                                    <span className="text-sm font-medium text-gray-700">Ofertas</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white transition-colors'>
                                    <i className='bx bx-heart text-xl text-primary'></i>
                                    <span className="text-sm font-medium text-gray-700">Lista de Desejos</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white transition-colors'>
                                    <i className='bx bx-shopping-bag text-xl text-primary'></i>
                                    <span className="text-sm font-medium text-gray-700">Meus Pedidos</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white transition-colors'>
                                    <i className='bx bx-headphone text-xl text-primary'></i>
                                    <span className="text-sm font-medium text-gray-700">Centro de Ajuda</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white transition-colors'>
                                    <i className='bx bx-bell text-xl text-primary'></i>
                                    <span className="text-sm font-medium text-gray-700">Notificações</span>
                                    <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
                                </a>
                            </li>
                            
                            {/* Language Selector */}
                            <li className="border-t border-gray-200 mt-2 pt-2">
                                <div className="space-y-2">
                                    <button className='w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors'>
                                        <div className="flex items-center gap-3">
                                            <i className='bx bx-world text-xl text-primary'></i>
                                            <span className="text-sm font-medium text-gray-700">
                                                {languages.find(lang => lang.code === currentLanguage)?.flag} {languages.find(lang => lang.code === currentLanguage)?.name}
                                            </span>
                                        </div>
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                    </button>
                                    
                                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setCurrentLanguage(lang.code);
                                                }}
                                                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                                                    currentLanguage === lang.code ? 'bg-primary/5 text-primary font-semibold' : 'text-gray-700'
                                                }`}
                                            >
                                                <span className="text-lg shrink-0">{lang.flag}</span>
                                                <span className="truncate text-left">{lang.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            {/* Call to Action */}
                            <li className="mt-2">
                                <a href="#" className='flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-primary hover:bg-tertiary text-white font-semibold transition-colors shadow-sm'>
                                    <i className='bx bx-store text-xl'></i>
                                    <span className="text-sm">Torne-se um Vendedor</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}


        </header>
    );
}