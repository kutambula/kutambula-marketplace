import Header from '../../components/layout/Header';
import MainContent from '../../components/layout/MainContent';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Grid3X3, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import HowItWorks from '../../components/layout/HowItWorks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function HomePage() {
    const featuredStores = [
        {
            id: 1,
            name: 'TechWorld Store',
            logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop',
            category: 'Eletrônicos',
            rating: 4.8,
            totalProducts: 1250,
            verified: true,
            description: 'Os melhores produtos tecnológicos com garantia'
        },
        {
            id: 2,
            name: 'Fashion Hub',
            logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
            category: 'Moda & Estilo',
            rating: 4.9,
            totalProducts: 3400,
            verified: true,
            description: 'Tendências da moda com os melhores preços'
        },
        {
            id: 3,
            name: 'Home Decor Plus',
            logo: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=400&fit=crop',
            category: 'Casa & Decoração',
            rating: 4.7,
            totalProducts: 890,
            verified: true,
            description: 'Transforme seu espaço com estilo único'
        },
        {
            id: 4,
            name: 'Sports & Fitness',
            logo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
            category: 'Esportes',
            rating: 4.6,
            totalProducts: 670,
            verified: true,
            description: 'Equipamentos para sua vida ativa'
        },
        {
            id: 5,
            name: 'Beauty & Care',
            logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=400&fit=crop',
            category: 'Beleza & Saúde',
            rating: 4.9,
            totalProducts: 1520,
            verified: true,
            description: 'Cuidados essenciais para você'
        },
        {
            id: 6,
            name: 'Kids Paradise',
            logo: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1558877385-8c7f7bfc0bcd?w=800&h=400&fit=crop',
            category: 'Infantil',
            rating: 4.8,
            totalProducts: 980,
            verified: true,
            description: 'Tudo para a alegria dos pequenos'
        },
          {
            id: 7,
            name: 'TechWorld Store',
            logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop',
            category: 'Eletrônicos',
            rating: 4.8,
            totalProducts: 1250,
            verified: true,
            description: 'Os melhores produtos tecnológicos com garantia'
        },
        {
            id: 8,
            name: 'Home Decor Plus',
            logo: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop',
            banner: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=400&fit=crop',
            category: 'Casa & Decoração',
            rating: 4.7,
            totalProducts: 890,
            verified: true,
            description: 'Transforme seu espaço com estilo único'
        }
    ];

    const [isAtTop, setIsAtTop] = useState(true);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        // Consider "at top" if within 100px of top
        // Consider "at bottom" if within 100px of bottom
        if (scrollTop < 100) {
            setIsAtTop(true);
        } else if (scrollTop + clientHeight >= scrollHeight - 100) {
            setIsAtTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToggle = () => {
        if (isAtTop) {
            // Scroll to bottom
            const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            window.scrollTo({ top: height, behavior: 'smooth' });
        } else {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section - Welcome & CTAs */}
            <section className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    
                    {/* Conteúdo Principal */}
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                        <div className="space-y-4 sm:space-y-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                                Conectando
                                <span className="text-primary block">Empresas</span>
                                através da inovação
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                O marketplace que conecta empresas e startups com seus clientes ideais. 
                                Descubra produtos e serviços inovadores, apoie negócios emergentes e faça parte 
                                da maior comunidade empresarial digital.
                            </p>
                        </div>

                        {/* CTAs Principais */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button className="bg-primary hover:bg-tertiary text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                                Começar a Comprar
                            </button>
                            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base">
                                Torne-se Vendedor
                            </button>
                        </div>

                        {/* CTAs Secundários */}
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                            <button className="text-gray-600 hover:text-primary font-medium flex items-center justify-center sm:justify-start gap-2 group py-2 sm:py-0">
                                <i className='bx bx-info-circle text-base sm:text-lg'></i>
                                Como funciona
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button className="text-gray-600 hover:text-primary font-medium flex items-center justify-center sm:justify-start gap-2 group py-2 sm:py-0">
                                <i className='bx bx-help-circle text-base sm:text-lg'></i>
                                Saiba mais
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button className="text-gray-600 hover:text-primary font-medium flex items-center justify-center sm:justify-start gap-2 group py-2 sm:py-0">
                                <i className='bx bx-phone text-base sm:text-lg'></i>
                                <span className="hidden sm:inline">Suporte em Português</span>
                                <span className="sm:hidden">Suporte</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        {/* Indicadores de Confiança */}
                        <div className="flex items-center justify-between sm:justify-start sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-lg sm:text-xl md:text-2xl font-black text-primary">50K+</div>
                                <div className="text-xs sm:text-sm text-gray-600">Vendedores</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg sm:text-xl md:text-2xl font-black text-primary">200K+</div>
                                <div className="text-xs sm:text-sm text-gray-600">Produtos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg sm:text-xl md:text-2xl font-black text-primary">15+</div>
                                <div className="text-xs sm:text-sm text-gray-600">Setores</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Imagem Hero */}
                    <div className="relative order-1 lg:order-2">
                        <div className="bg-linear-to-br from-primary/10 to-tertiary/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
                            {/* Padrão Decorativo */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="w-full h-full business-pattern"></div>
                            </div>
                            
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop"
                                alt="Marketplace Empresarial"
                                className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-xl sm:rounded-2xl shadow-xl"
                            />
                            
                            {/* Cards Flutuantes - Responsivos */}
                            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg border">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <i className='bx bx-shield-check text-lg sm:text-xl md:text-2xl text-green-500'></i>
                                    <div>
                                        <div className="font-bold text-xs sm:text-sm">100% Seguro</div>
                                        <div className="text-xs text-gray-600 hidden sm:block">Pagamentos protegidos</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg border">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <i className='bx bx-world text-lg sm:text-xl md:text-2xl text-primary'></i>
                                    <div>
                                        <div className="font-bold text-xs sm:text-sm">Multi-categoria</div>
                                        <div className="text-xs text-gray-600 hidden sm:block">15+ setores ativos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       
            <HowItWorks     />

            {/* Lojas em Destaque Section */}
            <section className="py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <i className='bx bx-store-alt text-2xl sm:text-3xl md:text-4xl text-primary'></i>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Lojas em Destaque</h2>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Descubra as melhores lojas verificadas da nossa comunidade empresarial
                        </p>
                    </div>

                    {/* Desktop Grid - Hidden on mobile/tablet */}
                    <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8">
                        {featuredStores.map((store) => (
                            <Link
                                to={`/loja/${store.id}`}
                                key={store.id}
                                className="group block"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                                    {/* Header com Banner e Logo */}
                                    <div className="relative h-32 bg-linear-to-br from-primary/20 to-tertiary/20 overflow-hidden">
                                        <img
                                            src={store.banner}
                                            alt={store.name}
                                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                                        
                                        {/* Badge verificação */}
                                        {store.verified && (
                                            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                <i className='bx bx-check text-sm'></i>
                                                Verificada
                                            </div>
                                        )}
                                    </div>

                                    {/* Logo e Conteúdo */}
                                    <div className="p-6">
                                        {/* Logo da empresa */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-200 shadow-md bg-white shrink-0">
                                                <img
                                                    src={store.logo}
                                                    alt={`${store.name} logo`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                                    {store.name}
                                                </h3>
                                                <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                                                    {store.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Descrição */}
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {store.description}
                                        </p>

                                        {/* Estatísticas */}
                                        <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                <span className="font-bold text-sm text-gray-900">{store.rating}</span>
                                                <span className="text-xs text-gray-500">(284)</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-gray-900">{store.totalProducts.toLocaleString()}</div>
                                                <div className="text-xs text-gray-500">produtos</div>
                                            </div>
                                        </div>

                                        {/* Botão de ação */}
                                        <button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white border border-gray-200 group-hover:border-primary">
                                            <span className="flex items-center justify-center gap-2">
                                                <i className='bx bx-store text-lg'></i>
                                                Visitar Loja
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile/Tablet Slider - Visible on smaller screens */}
                    <div className="lg:hidden">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1.2}
                            centeredSlides={false}
                            navigation={{
                                nextEl: '.stores-swiper-button-next',
                                prevEl: '.stores-swiper-button-prev',
                            }}
                            pagination={{
                                el: '.stores-swiper-pagination',
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                }
                            }}
                            className="stores-swiper pb-12!"
                        >
                            {featuredStores.map((store) => (
                                <SwiperSlide key={store.id}>
                                    <Link
                                        to={`/loja/${store.id}`}
                                        className="group block h-full"
                                    >
                                        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                                            {/* Header compacto com Banner */}
                                            <div className="relative h-24 sm:h-28 bg-linear-to-br from-primary/20 to-tertiary/20 overflow-hidden">
                                                <img
                                                    src={store.banner}
                                                    alt={store.name}
                                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                                                
                                                {/* Badge verificação - Menor */}
                                                {store.verified && (
                                                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                        <i className='bx bx-check text-xs'></i>
                                                        <span className="hidden sm:inline">Verificada</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Conteúdo otimizado */}
                                            <div className="p-4 sm:p-5 flex-1 flex flex-col">
                                                {/* Header com Logo e Nome - Compacto */}
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 border-gray-200 bg-white shrink-0">
                                                        <img
                                                            src={store.logo}
                                                            alt={`${store.name} logo`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors truncate">
                                                            {store.name}
                                                        </h3>
                                                        <span className="text-xs sm:text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                                                            {store.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Descrição - Apenas em SM+ */}
                                                <p className="text-sm text-gray-600 mb-3 line-clamp-2 hidden sm:block">
                                                    {store.description}
                                                </p>

                                                {/* Estatísticas - Simplificadas */}
                                                <div className="flex items-end justify-between mb-4 pt-3 border-t border-gray-100 flex-1">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                                                        <span className="font-bold text-sm text-gray-900">{store.rating}</span>
                                                        <span className="text-xs text-gray-500 hidden sm:inline">(284)</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-sm font-bold text-gray-900">{Math.round(store.totalProducts / 1000)}K</div>
                                                        <div className="text-xs text-gray-500">produtos</div>
                                                    </div>
                                                </div>

                                                {/* Botão de ação - Compacto */}
                                                <button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white border border-gray-200 group-hover:border-primary text-sm">
                                                    <span className="flex items-center justify-center gap-2">
                                                        <i className='bx bx-store text-base sm:text-lg'></i>
                                                        <span className="hidden sm:inline">Visitar Loja</span>
                                                        <span className="sm:hidden">Visitar</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation buttons - Hidden on mobile, visible on tablet+ */}
                        <div className="hidden sm:flex justify-center items-center gap-4 mt-6">
                            <button className="stores-swiper-button-prev w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="stores-swiper-pagination position-static! w-auto!"></div>
                            <button className="stores-swiper-button-next w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Pagination only - Visible only on mobile */}
                        <div className="sm:hidden flex justify-center mt-4">
                            <div className="stores-swiper-pagination position-static! w-auto!"></div>
                        </div>
                    </div>

                    {/* Botão Ver Todas */}
                    <div className="text-center mt-8 sm:mt-10 md:mt-12">
                        <button className="bg-primary hover:bg-tertiary text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                            <span className="flex items-center gap-2">
                                <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="hidden sm:inline">Ver Todas as Lojas</span>
                                <span className="sm:hidden">Ver Todas</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

			<div className="container mx-auto px-4 py-6">
                <MainContent />
            </div>

            {/* Seção para Anunciantes */}
            <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6">
                            Anuncie e Alcance Milhões
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
                            Promova seus produtos com banners estratégicos, posts patrocinados e anúncios direcionados
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                                <i className='bx bx-image text-2xl sm:text-3xl text-primary mb-3 sm:mb-4'></i>
                                <h3 className="font-bold text-base sm:text-lg mb-2">Banner Display</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                    <span className="hidden sm:block">728x90, 300x250, 160x600<br/>Formatos responsivos</span>
                                    <span className="sm:hidden">Formatos responsivos<br/>Múltiplos tamanhos</span>
                                </p>
                                <div className="text-primary font-bold text-sm sm:text-base">
                                    <span className="hidden sm:inline">A partir de €50/mês</span>
                                    <span className="sm:hidden">€50+/mês</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                                <i className='bx bx-bullseye text-2xl sm:text-3xl text-green-600 mb-3 sm:mb-4'></i>
                                <h3 className="font-bold text-base sm:text-lg mb-2">
                                    <span className="hidden sm:inline">Posts Patrocinados</span>
                                    <span className="sm:hidden">Patrocinados</span>
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                    Destaque nos resultados<br/>
                                    <span className="hidden sm:inline">Segmentação por país</span>
                                    <span className="sm:hidden">Segmentação</span>
                                </p>
                                <div className="text-primary font-bold text-sm sm:text-base">€0,20 por clique</div>
                            </div>

                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 sm:col-span-2 md:col-span-1">
                                <i className='bx bx-video text-2xl sm:text-3xl text-yellow-600 mb-3 sm:mb-4'></i>
                                <h3 className="font-bold text-base sm:text-lg mb-2">Vídeo Stories</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                    Até 30 segundos<br/>
                                    <span className="hidden sm:inline">MP4, MOV máx 50MB</span>
                                    <span className="sm:hidden">Múltiplos formatos</span>
                                </p>
                                <div className="text-primary font-bold text-sm sm:text-base">€100/semana</div>
                            </div>
                        </div>

                        <button className="bg-primary hover:bg-tertiary text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                            <span className="flex items-center justify-center gap-2">
                                <i className='bx bx-rocket text-base sm:text-lg'></i>
                                <span className="hidden sm:inline">Começar a Anunciar</span>
                                <span className="sm:hidden">Começar</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Scroll helper (toggle top/bottom) */}
            <div className="fixed right-6 bottom-6 z-50">
                <button
                    onClick={handleScrollToggle}
                    aria-label={isAtTop ? "Ir para o final da página" : "Ir para o topo"}
                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                    {isAtTop ? (
                        <ChevronDown className="w-6 h-6" />
                    ) : (
                        <ChevronUp className="w-6 h-6" />
                    )}
                </button>
            </div>

            <Footer />
        </div>
    );
}