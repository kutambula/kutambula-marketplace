
import 'boxicons/css/boxicons.min.css';
import { Search, ShoppingCart, Bell, ChevronDown } from 'lucide-react';
import icon from '../../assets/images/icon.png';

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <nav className='container mx-auto px-4 py-4 flex items-center justify-between gap-6' >
                {/* Logo */}
                <div className="shrink-0">
                    <img
                        src={icon}
                        alt="Kutambula Marketplace Logo"
                        className="w-16 object-contain transition-transform duration-200 cursor-pointer"
                    />
                </div>

                {/* Search Bar */}
                <div className='flex-1 max-w-2xl'>
                    <div className='flex items-center gap-2 border-3 border-gray-300 hover:border-primary focus-within:border-primary px-4 py-2.5 rounded-full transition-colors duration-200 '>
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
                        >
                            <Search className="w-4 h-4" />
                            <span className="hidden md:inline">Buscar</span>
                        </button>
                    </div>
                </div>

                {/* Right Menu */}
                <div>
                    <ul className='flex items-center gap-4'>

                        {/* Cart */}
                        <li>
                            <button
                                className='relative p-2.5 rounded-full hover:bg-gray-100  transition-colors duration-200 group cursor-pointer'
                                aria-label="Shopping Cart"
                            >
                                <ShoppingCart className="w-6 h-6 text-gray-600 transition-colors" />
                            </button>
                        </li>

                        {/* Notifications */}
                        <li>
                            <button
                                className='relative p-2.5 rounded-full hover:bg-gray-100  transition-colors duration-200 group cursor-pointer'
                                aria-label="Notifications"
                            >
                                <Bell className="w-6 h-6 text-gray-600 transition-colors" />
                            </button>
                        </li>

                        {/* User Account */}
                        <li>
                            <button
                                className='flex items-center gap-2 p-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 group cursor-pointer'
                                aria-label="User Account"
                            >
                                <h4>Iniciar sessão</h4>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}