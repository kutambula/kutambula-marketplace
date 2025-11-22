import { useState } from 'react';
import { Search, ChevronDown, Menu, X, Store, Headset, Globe, ShoppingBag, User, FileText, Phone, Heart, Package, TrendingUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/icon.png';
import icon4 from '../../assets/images/icon4.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('pt');
    const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
    const [showLanguagesMenu, setShowLanguagesMenu] = useState(false);
    const [showPartnerModal, setShowPartnerModal] = useState(false);

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

    const featuredCategories = [
        { 
            icon: '☕', 
            name: 'Cafés & Infusões', 
            link: '/categorias/cafes',
            description: 'Cafés etíopes, chás africanos',
            badge: 'Popular'
        },
        { 
            icon: '🌶️', 
            name: 'Temperos & Molhos', 
            link: '/categorias/temperos',
            description: 'Piri-piri, berbere, harissa'
        },
        { 
            icon: '🍹', 
            name: 'Bebidas Artesanais', 
            link: '/categorias/bebidas',
            description: 'Vinhos, licores, sumos naturais'
        },
        { 
            icon: '🌾', 
            name: 'Cereais & Grãos', 
            link: '/categorias/cereais',
            description: 'Funge, fubá, milho'
        },
        { 
            icon: '🥜', 
            name: 'Óleos & Manteigas', 
            link: '/categorias/oleos',
            description: 'Óleo de coco, karité, palma',
            badge: 'Premium'
        },
        { 
            icon: '🍯', 
            name: 'Doces & Snacks', 
            link: '/categorias/doces',
            description: 'Mel, frutos secos, biscoitos'
        },
        { 
            icon: '✨', 
            name: 'Especiarias', 
            link: '/categorias/especiarias',
            description: 'Gengibre, canela, cardamomo'
        },
        { 
            icon: '🥘', 
            name: 'Produtos Frescos', 
            link: '/categorias/frescos',
            description: 'Frutas, vegetais, carnes'
        }
    ];

    return (
        <header className="bg-primary md:bg-white sticky top-0 z-50 shadow-sm">
            {/* Top Bar - Desktop Only */}
            <div className='hidden lg:block bg-orange-50 border-b border-orange-100'>
                <div className='container mx-auto px-6'>
                    <div className='flex items-center justify-between py-2.5'>
                        {/* Left Side - Info */}
                        <div className='flex items-center gap-6 text-sm'>
                            <div className='flex items-center gap-2 text-gray-600'>
                                <Store className="w-3.5 h-3.5 text-primary" />
                                <span className='font-medium'>Marketplace de Confiança</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-600'>
                                <Package className="w-3.5 h-3.5 text-primary" />
                                <span>Entregas em Angola & Europa</span>
                            </div>
                        </div>

                        {/* Right Side - Actions */}
                        <div className='flex items-center gap-5'>
                            <button 
                                onClick={() => setShowPartnerModal(true)}
                                className='flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-tertiary transition-colors'
                            >
                                <TrendingUp className="w-3.5 h-3.5" />
                                Tornar-se Parceiro
                            </button>
                            <div className='w-px h-4 bg-gray-300'></div>
                            <a href="tel:+244999000000" className='flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary transition-colors'>
                                <Phone className="w-3.5 h-3.5" />
                                +244 999 000 000
                            </a>
                            <div className='w-px h-4 bg-gray-300'></div>
                            <div className="relative group">
                                <button className='flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary transition-colors'>
                                    <Globe className="w-3.5 h-3.5" />
                                    <span className='font-medium'>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                                    <ChevronDown className="w-3 h-3" />
                                </button>
                                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] z-50 overflow-hidden">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setCurrentLanguage(lang.code)}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-orange-50 transition-colors text-left ${
                                                currentLanguage === lang.code ? 'text-primary font-semibold bg-orange-50' : 'text-gray-700'
                                            }`}
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            <span className="truncate">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Desktop */}
            <nav className='hidden lg:block container mx-auto px-6 py-4'>
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link to="/" className="shrink-0 group">
                        <img
                            src={icon}
                            alt="Kutambula Marketplace"
                            className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                        />
                    </Link>

                    {/* Search Bar */}
                    <div className='flex-1 max-w-3xl'>
                        <div className='w-full flex items-center gap-0 border-2 border-gray-300 hover:border-primary focus-within:border-primary focus-within:shadow-md rounded-full transition-all duration-200 overflow-hidden bg-white'>
                            <input
                                type="search"
                                placeholder="Procurar café etíope, piri-piri, berbere, óleo de coco..."
                                className='flex-1 bg-transparent text-sm placeholder:text-gray-500 focus:outline-none px-5 py-3.5 text-gray-700'
                            />

                            <button
                                className='flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-tertiary text-white font-bold transition-all duration-200 hover:shadow-md active:scale-95'
                                aria-label="Pesquisar"
                            >
                                <Search className="w-5 h-5" />
                                <span>Pesquisar</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* Wishlist */}
                        <Link 
                            to="/favoritos"
                            className='flex flex-col items-center gap-1 p-2 hover:text-primary transition-colors group'
                            aria-label="Lista de Desejos"
                        >
                            <div className='relative'>
                                <Heart className="w-6 h-6 text-gray-700 group-hover:text-primary group-hover:fill-primary transition-all" />
                                <span className='absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center'>0</span>
                            </div>
                            <span className='text-xs font-medium text-gray-600 group-hover:text-primary'>Favoritos</span>
                        </Link>

                        {/* Cart */}
                        <Link 
                            to="/carrinho"
                            className='flex flex-col items-center gap-1 p-2 hover:text-primary transition-colors group'
                            aria-label="Carrinho de Compras"
                        >
                            <div className='relative'>
                                <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
                                <span className='absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center'>0</span>
                            </div>
                            <span className='text-xs font-medium text-gray-600 group-hover:text-primary'>Carrinho</span>
                        </Link>

                        {/* User Account */}
                        <Link 
                            to="/conta"
                            className='flex flex-col items-center gap-1 p-2 hover:text-primary transition-colors group'
                            aria-label="Minha Conta"
                        >
                            <User className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
                            <span className='text-xs font-medium text-gray-600 group-hover:text-primary'>Conta</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Categories Bar - Desktop */}
            <div className='hidden lg:block bg-secondary border-t border-gray-200'>
                <div className='container mx-auto px-6'>
                    <div className='flex items-center justify-between'>
                        {/* Categories Mega Menu Trigger */}
                        <div className='relative'>
                            <button
                                onMouseEnter={() => setShowCategoriesMenu(true)}
                                onMouseLeave={() => setShowCategoriesMenu(false)}
                                className='flex items-center gap-3 px-6 py-4 bg-primary hover:bg-tertiary text-white font-bold transition-colors'
                            >
                                <Menu className="w-5 h-5" />
                                <span>Todas as Categorias</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Mega Menu */}
                            {showCategoriesMenu && (
                                <div 
                                    onMouseEnter={() => setShowCategoriesMenu(true)}
                                    onMouseLeave={() => setShowCategoriesMenu(false)}
                                    className='absolute top-full left-0 bg-white shadow-2xl rounded-b-xl overflow-hidden z-50 w-[800px] border-t-4 border-primary'
                                >
                                    <div className='grid grid-cols-2 gap-0'>
                                        {featuredCategories.map((category, index) => (
                                            <Link
                                                key={index}
                                                to={category.link}
                                                className='flex items-start gap-4 p-5 hover:bg-orange-50 transition-all group border-b border-r border-gray-100'
                                            >
                                                <div className='text-3xl bg-orange-100 rounded-lg p-3 group-hover:scale-110 transition-transform'>
                                                    {category.icon}
                                                </div>
                                                <div className='flex-1'>
                                                    <div className='flex items-center gap-2 mb-1'>
                                                        <h3 className='font-bold text-gray-800 group-hover:text-primary transition-colors'>
                                                            {category.name}
                                                        </h3>
                                                        {category.badge && (
                                                            <span className='text-xs font-bold px-2 py-0.5 bg-primary text-white rounded-full'>
                                                                {category.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className='text-sm text-gray-600'>{category.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className='bg-orange-50 p-4 text-center'>
                                        <Link to="/categorias" className='text-primary font-bold hover:text-tertiary transition-colors'>
                                            Ver Todas as Categorias →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Links */}
                        <nav className='flex items-center gap-1'>
                            <Link to="/marketplace" className='flex items-center gap-2 px-5 py-4 text-white hover:bg-white/10 font-semibold transition-colors'>
                                <Store className="w-4 h-4" />
                                Lojas
                            </Link>
                            <Link to="/chat-ia" className='flex items-center gap-2 px-5 py-4 text-white hover:bg-white/10 font-semibold transition-colors'>
                                <MessageCircle className="w-4 h-4" />
                                Chat de IA
                                <span className='bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full'>Novo</span>
                            </Link>
                            <Link to="/servicos" className='flex items-center gap-2 px-5 py-4 text-white hover:bg-white/10 font-semibold transition-colors'>
                                <TrendingUp className="w-4 h-4" />
                                Serviços
                            </Link>
                            <Link to="/contacto" className='flex items-center gap-2 px-5 py-4 text-white hover:bg-white/10 font-semibold transition-colors'>
                                <Headset className="w-4 h-4" />
                                Ajuda
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className='lg:hidden bg-primary'>
                {/* Mobile Menu Overlay */}
                <div 
                    className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={toggleMenu}
                />

                <div className="container mx-auto px-4 py-3.5">
                    <div className="flex items-center justify-between gap-2">
                        {/* Mobile Layout */}
                        <div className="flex items-center gap-3">
                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6 text-white" />
                                ) : (
                                    <Menu className="w-6 h-6 text-white" />
                                )}
                            </button>
                            {/* Mobile Logo */}
                            <Link to="/" className="shrink-0">
                                <img
                                    src={icon4}
                                    alt="Kutambula Marketplace Logo"
                                    className="w-32 object-contain transition-transform duration-200 active:scale-95"
                                />
                            </Link>
                        </div>

                        {/* Right Menu */}
                        <div className="flex items-center gap-2">
                            {/* Wishlist */}
                            <Link 
                                to="/favoritos"
                                className='relative p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95'
                                aria-label="Lista de Desejos"
                            >
                                <Heart className="w-5 h-5 text-white" />
                                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-primary'>0</span>
                            </Link>

                            {/* Cart */}
                            <Link
                                to="/carrinho"
                                className='relative p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95'
                                aria-label="Carrinho de Compras"
                            >
                                <ShoppingBag className="w-5 h-5 text-white" />
                                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-primary'>0</span>
                            </Link>

                            {/* User Account */}
                            <Link
                                to="/conta"
                                className='p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95'
                                aria-label="Minha Conta"
                            >
                                <User className="w-5 h-5 text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Search Bar */}
            <div className="lg:hidden bg-white shadow-md">
                <div className="container mx-auto px-4 py-3">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Café, temperos, bebidas..."
                            className="w-full pl-10 pr-20 py-3.5 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-gray-50 focus:bg-white transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-tertiary text-white px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 shadow-md"
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Quick Navigation */}
            <div className="lg:hidden bg-orange-50 border-y border-orange-100 overflow-x-auto scrollbar-hide">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex gap-2 min-w-max">
                        <Link to="/marketplace" className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-primary transition-all whitespace-nowrap px-3 py-2 rounded-lg bg-white hover:bg-orange-50 shadow-sm border border-gray-100 active:scale-95">
                            <Store className="w-3.5 h-3.5" />
                            Lojas
                        </Link>
                        <button 
                            onClick={() => setShowPartnerModal(true)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-primary transition-all whitespace-nowrap px-3 py-2 rounded-lg bg-white hover:bg-orange-50 shadow-sm border border-gray-100 active:scale-95"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Tornar-se Parceiro
                        </button>
                        <Link to="/servicos" className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-primary transition-all whitespace-nowrap px-3 py-2 rounded-lg bg-white hover:bg-orange-50 shadow-sm border border-gray-100 active:scale-95">
                            <Package className="w-3.5 h-3.5" />
                            Serviços
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 left-0 h-full w-[340px] max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 bg-primary">
                    <div className="flex items-center gap-3">
                        <img
                            src={icon}
                            alt="Kutambula"
                            className="w-10 h-10 object-contain bg-white rounded-lg p-1.5 shadow-md"
                        />
                        <div>
                            <h2 className="text-base font-bold text-white">Kutambula</h2>
                            <p className="text-xs text-white/80">Sabores Africanos</p>
                        </div>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors active:scale-95"
                        aria-label="Fechar Menu"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full overflow-y-auto">
                    {/* Search Bar Mobile */}
                    <div className="p-4 border-b border-gray-200 bg-orange-50">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Buscar produtos africanos..."
                                className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-white"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 p-4 pb-20 overflow-y-auto">
                        <nav className="space-y-2">
                            {/* Featured Actions */}
                            <div className="mb-4 space-y-2">
                                <Link 
                                    to="/chat-ia" 
                                    className="flex items-center justify-between p-4 bg-primary hover:bg-tertiary rounded-xl shadow-md transition-all active:scale-95"
                                    onClick={toggleMenu}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <MessageCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-white text-sm">Chat de IA</span>
                                            <span className="block text-white/80 text-xs">Assistente inteligente</span>
                                        </div>
                                    </div>
                                    <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded-full">Novo</span>
                                </Link>

                                <button 
                                    onClick={() => {
                                        setShowPartnerModal(true);
                                        toggleMenu();
                                    }}
                                    className="w-full flex items-center justify-between p-4 bg-primary hover:bg-tertiary rounded-xl shadow-md transition-all active:scale-95"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <TrendingUp className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-white text-sm">Tornar-se Parceiro</span>
                                            <span className="block text-white/80 text-xs">Vendedor ou Fornecedor</span>
                                        </div>
                                    </div>
                                </button>
                            </div>

                            {/* Categories Grid */}
                            {/* <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3 px-1">Categorias Populares</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {featuredCategories.slice(0, 6).map((category, index) => (
                                        <Link
                                            key={index}
                                            to={category.link}
                                            className="flex flex-col items-center gap-2 p-3 bg-orange-50 hover:bg-orange-100 rounded-xl transition-all active:scale-95 border border-orange-200"
                                            onClick={toggleMenu}
                                        >
                                            <span className="text-2xl">{category.icon}</span>
                                            <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{category.name}</span>
                                        </Link>
                                    ))}
                                </div>
                                <Link 
                                    to="/categorias" 
                                    className="block text-center mt-3 text-sm font-semibold text-primary hover:text-tertiary transition-colors"
                                    onClick={toggleMenu}
                                >
                                    Ver Todas as Categorias →
                                </Link>
                            </div> */}

                            {/* Main Navigation */}
                            <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3 px-1">Explorar</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link 
                                            to="/marketplace" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                                            onClick={toggleMenu}
                                        >
                                            <Store className="w-5 h-5" />
                                            <span className="font-semibold">Todas as Lojas</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/servicos" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                                            onClick={toggleMenu}
                                        >
                                            <Package className="w-5 h-5" />
                                            <span className="font-semibold">Serviços</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Account Section */}
                            <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3 px-1">Minha Conta</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link 
                                            to="/login" 
                                            className="flex items-center gap-3 px-3 py-3.5 bg-primary hover:bg-tertiary text-white rounded-xl transition-all active:scale-95 shadow-md"
                                            onClick={toggleMenu}
                                        >
                                            <User className="w-5 h-5" />
                                            <span className="font-bold">Entrar / Registar</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/carrinho" 
                                            className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                                            onClick={toggleMenu}
                                        >
                                            <div className="flex items-center gap-3">
                                                <ShoppingBag className="w-5 h-5" />
                                                <span className="font-semibold">Meu Carrinho</span>
                                            </div>
                                            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">0</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/favoritos" 
                                            className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                                            onClick={toggleMenu}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Heart className="w-5 h-5" />
                                                <span className="font-semibold">Favoritos</span>
                                            </div>
                                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">0</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Support Section */}
                            <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3 px-1">Suporte & Ajuda</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link 
                                            to="/contato" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                                            onClick={toggleMenu}
                                        >
                                            <Headset className="w-5 h-5" />
                                            <span className="font-semibold">Fale Connosco</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/sobre" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                                            onClick={toggleMenu}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold">Nossa História</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/reclamacoes" 
                                            className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                                            onClick={toggleMenu}
                                        >
                                            <FileText className="w-5 h-5" />
                                            <span className="font-semibold">Reclamações</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Language Selector - Mobile */}
                    <div className="border-t border-gray-200 bg-gray-50">
                        <button
                            onClick={() => setShowLanguagesMenu(!showLanguagesMenu)}
                            className="w-full flex items-center justify-between p-4 hover:bg-orange-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-primary" />
                                <div className="text-left">
                                    <h3 className="text-sm font-bold text-gray-900">Idioma</h3>
                                    <p className="text-xs text-gray-600">{languages.find(lang => lang.code === currentLanguage)?.flag} {languages.find(lang => lang.code === currentLanguage)?.name}</p>
                                </div>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${showLanguagesMenu ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-300 ${showLanguagesMenu ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setCurrentLanguage(lang.code);
                                            setShowLanguagesMenu(false);
                                        }}
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 ${
                                            currentLanguage === lang.code 
                                                ? 'bg-primary text-white shadow-md' 
                                                : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                                        }`}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className="truncate">{lang.name.split(' ')[0]}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-secondary text-center">
                        <p className="text-xs text-white/90 mb-2 font-medium">© 2025 Kutambula Marketplace</p>
                        <p className="text-xs text-white/70 mb-3">Sabores Autênticos de África</p>
                        <div className="flex justify-center gap-4">
                            <Link to="/privacidade" className="text-xs text-white/80 hover:text-white font-medium transition-colors" onClick={toggleMenu}>
                                Privacidade
                            </Link>
                            <span className="text-white/40">•</span>
                            <Link to="/termos" className="text-xs text-white/80 hover:text-white font-medium transition-colors" onClick={toggleMenu}>
                                Termos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partner Modal */}
            {showPartnerModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="relative bg-primary text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
                            <button
                                onClick={() => setShowPartnerModal(false)}
                                className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                                aria-label="Fechar"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Tornar-se Parceiro</h2>
                            </div>
                            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                                Escolha como deseja colaborar com o Kutambula Marketplace
                            </p>
                        </div>

                        {/* Modal Content */}
                        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                            {/* Opção 1: Ser Vendedor */}
                            <Link
                                to="/anuncie"
                                onClick={() => setShowPartnerModal(false)}
                                className="group relative bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <Store className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Ser Vendedor</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 grow leading-relaxed">
                                        Crie sua própria loja virtual e venda produtos africanos autênticos para clientes em Angola e Europa.
                                    </p>
                                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0"></div>
                                            <span className="text-[11px] sm:text-xs text-gray-600">Sua própria loja online</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0"></div>
                                            <span className="text-[11px] sm:text-xs text-gray-600">Gestão de produtos</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0"></div>
                                            <span className="text-[11px] sm:text-xs text-gray-600">Alcance internacional</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-primary font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                                        <span>Começar agora</span>
                                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-90" />
                                    </div>
                                </div>
                            </Link>

                            {/* Opção 2: Ser Fornecedor */}
                            <Link
                                to="/contato?tipo=fornecedor"
                                onClick={() => setShowPartnerModal(false)}
                                className="group relative bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <Package className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Ser Fornecedor</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 grow leading-relaxed">
                                        Forneça produtos em grande escala para vendedores do marketplace e expanda seu negócio.
                                    </p>
                                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0"></div>
                                            <span className="text-[11px] sm:text-xs text-gray-600">Vendas em volume</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0"></div>
                                            <span className="text-[11px] sm:text-xs text-gray-600">Rede de vendedores</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0"></div>
                                            <span className="text-[11px] sm:text-xs text-gray-600">Logística facilitada</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-secondary font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                                        <span>Entrar em contato</span>
                                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-90" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-b-xl sm:rounded-b-2xl border-t border-gray-200">
                            <p className="text-[11px] sm:text-xs text-gray-600 text-center leading-relaxed">
                                Tem dúvidas? <Link to="/contato" onClick={() => setShowPartnerModal(false)} className="text-primary font-semibold hover:underline">Entre em contato</Link> com nossa equipe.
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}