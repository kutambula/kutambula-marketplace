import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Search, ShoppingCart, Bell, ChevronDown, Menu, X, User } from 'lucide-react';
import icon from '../../assets/images/icon.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
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
                    <div className="shrink-0">
                        <img
                            src={icon}
                            alt="Kutambula Marketplace Logo"
                            className="w-12 md:w-16 object-contain transition-transform duration-200 cursor-pointer hover:scale-105"
                        />
                    </div>

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
                                placeholder="Pesquisa por produtos..."
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
                            <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                        </button>

                        {/* Cart */}
                        <button
                            className='relative p-2 md:p-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200'
                            aria-label="Shopping Cart"
                        >
                            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>

                        {/* Notifications - Hidden on mobile */}
                        <button
                            className='hidden md:block relative p-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200'
                            aria-label="Notifications"
                        >
                            <Bell className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* User Account */}
                        <button
                            className='flex items-center gap-2 p-2 md:px-3 md:py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200'
                            aria-label="User Account"
                        >
                            <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
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
                                className="w-full appearance-none bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:border-primary cursor-pointer"
                            >
                                <option value="all-categories">Todas as Categorias</option>
                                <option value="category-1">Eletrônicos</option>
                                <option value="category-2">Moda</option>
                                <option value="category-3">Casa & Jardim</option>
                                <option value="category-4">Esportes</option>
                            </select>

                            <div className='flex items-center gap-2 border-2 border-gray-300 focus-within:border-primary px-4 py-2.5 rounded-lg transition-colors duration-200 bg-white'>
                                <Search className="w-5 h-5 text-gray-400" />
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
                <div className='lg:hidden border-t border-gray-200 animate-in slide-in-from-top-2 duration-200'>
                    <div className='container mx-auto px-4 py-4'>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors'>
                                    <Bell className="w-5 h-5 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-700">Notificações</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors'>
                                    <User className="w-5 h-5 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-700">Minha Conta</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors'>
                                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-700">Meus Pedidos</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}