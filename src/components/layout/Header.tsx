import { useState } from 'react';
import { Search, ChevronDown, Menu, X, Store, Tag, Headset, Globe, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/icon.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('pt');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'km', name: 'Kimbundo', flag: '🇦🇴' },
        { code: 'gw', name: 'Crioulo Guineense', flag: '🇬🇼' },
        { code: 'cv', name: 'Cabo-verdiano', flag: '🇨🇻' },
        { code: 'st', name: 'Santomense', flag: '🇸🇹' },
    ];

    return (
        <header className="bg-white sticky top-0 z-50">

            {/* Navigation Links Bar */}
            <div className='relative african-pattern'>
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

                <div className="flex items-center justify-between gap-2 md:gap-6">

                    {/* Logo */}
                    <Link
                        to={`/`}
                        className="shrink-0"
                    >
                        <img
                            src={icon}
                            alt="Kutambula Marketplace Logo"
                            className="w-8 md:w-12 object-contain transition-transform duration-200 cursor-pointer"
                        />
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className='hidden lg:flex flex-1 max-w-2xl'>
                        <div className='w-full flex items-center gap-2 border-gray-300 hover:border-primary focus-within:border-primary px-4 py-2.5 rounded-full transition-colors duration-200'>
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
                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden cursor-pointer transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

        </header>
    );
}