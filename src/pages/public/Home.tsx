import Header from '../../components/layout/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainContent from '../../components/layout/MainContent';
import Footer from '../../components/layout/Footer';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Star, Store, CheckCircle, Package, Truck, ShoppingBag } from 'lucide-react';

export default function HomePage() {
    // Dados de exemplo - substituir com dados reais
    const weeklyRecommendations = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            title: 'Headphones Premium Wireless',
            badge: 'Recomendado',
            price: 299.99,
            originalPrice: 499.99,
            rating: 4.8,
            totalReviews: 234,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 40
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
            title: 'Smartwatch Pro Series 5',
            badge: 'Top da Semana',
            price: 599.90,
            originalPrice: 899.90,
            rating: 4.9,
            totalReviews: 567,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 33
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
            title: 'Tênis Esportivo Ultra Comfort',
            badge: 'Mais Vendido',
            price: 249.90,
            originalPrice: 349.90,
            rating: 4.7,
            totalReviews: 892,
            storeName: 'Sports & Fitness',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 29
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop',
            title: 'Câmera Digital 4K Pro',
            badge: 'Novidade',
            price: 1299.00,
            originalPrice: 1799.00,
            rating: 4.9,
            totalReviews: 156,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 28
        }
    ];

    const specialOffers = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=500&fit=crop',
            title: 'Super Promoção Tech',
            description: 'Até 50% OFF em eletrônicos',
            discount: '50% OFF'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop',
            title: 'Moda Outono/Inverno',
            description: 'Novas coleções com descontos incríveis',
            discount: '30% OFF'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1200&h=500&fit=crop',
            title: 'Casa & Decoração',
            description: 'Transforme seu lar com estilo',
            discount: '40% OFF'
        }
    ];

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
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Coluna Esquerda — Recomendações da Semana */}
                <aside className="lg:col-span-1 bg-linear-to-br from-white to-gray-50 rounded-xl border shadow-lg border-gray-100 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            <span>Recomendações</span>
                        </h2>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ 
                            clickable: true,
                            bulletActiveClass: 'swiper-pagination-bullet-active bg-primary!'
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        className="recommendations-swiper"
                        style={{ paddingBottom: '35px' }}
                    >
                        {weeklyRecommendations.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="relative overflow-hidden rounded-xl cursor-pointer group bg-white border border-gray-100">
                                    {/* Imagem do Produto */}
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        
                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                                            <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                {item.badge}
                                            </span>
                                            {item.discount > 0 && (
                                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                                    -{item.discount}%
                                                </span>
                                            )}
                                        </div>

                                        {/* Frete Grátis Badge */}
                                        {item.freeShipping && (
                                            <div className="absolute bottom-3 left-3">
                                                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                                                    Frete Grátis
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Informações do Produto */}
                                    <div className="p-3 space-y-2">
                                        {/* Nome da Loja */}
                                        <div className="flex items-center gap-1 text-xs text-gray-600">
                                            <Store className="w-4 h-4" />
                                            <span className="font-medium">{item.storeName}</span>
                                            {item.storeVerified && (
                                                <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
                                            )}
                                        </div>

                                        {/* Título */}
                                        <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Avaliação */}
                                        <div className="flex items-center gap-1 text-xs">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                <span className="font-semibold text-gray-900">{item.rating}</span>
                                            </div>
                                            <span className="text-gray-400">({item.totalReviews})</span>
                                        </div>

                                        {/* Preços */}
                                        <div className="space-y-1">
                                            {item.originalPrice > item.price && (
                                                <p className="text-xs text-gray-400 line-through">
                                                    {item.originalPrice.toLocaleString('pt-AO', { 
                                                        style: 'currency', 
                                                        currency: 'AOA' 
                                                    })}
                                                </p>
                                            )}
                                            <p className="text-lg font-black text-primary">
                                                {item.price.toLocaleString('pt-AO', { 
                                                    style: 'currency', 
                                                    currency: 'AOA' 
                                                })}
                                            </p>
                                        </div>

                                        {/* Status de Estoque */}
                                        <div className="pt-2 border-t border-gray-100">
                                            {item.inStock ? (
                                                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                                    Em estoque
                                                </span>
                                            ) : (
                                                <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                                                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                                    Esgotado
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="pt-2">
                        <p className="text-xs text-gray-500 text-center italic">
                            Produtos selecionados especialmente para você
                        </p>
                    </div>
                </aside>

                {/* Coluna Direita — Slider de Ofertas */}
                <section className="lg:col-span-3 bg-white rounded-2xl  border border-gray-100 overflow-hidden shadow-lg">

                    <div className="p-5 pt-4">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ 
                                clickable: true,
                                bulletActiveClass: 'swiper-pagination-bullet-active bg-primary!'
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            effect="fade"
                            fadeEffect={{
                                crossFade: true
                            }}
                            loop={true}
                            className="offers-swiper rounded-2xl"
                            style={{ paddingBottom: '45px' }}
                        >
                            {specialOffers.map((offer) => (
                                <SwiperSlide key={offer.id}>
                                    <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                                        <img
                                            src={offer.image}
                                            alt={offer.title}
                                            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        
                                        {/* Overlay gradiente */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                        
                                        {/* Badge de desconto */}
                                        <div className="absolute top-6 right-6 animate-pulse">
                                            <div className="bg-red-500 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                                                {offer.discount}
                                            </div>
                                        </div>

                                        {/* Conteúdo */}
                                        <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                                            <h3 className="text-4xl font-black mb-3 drop-shadow-lg">
                                                {offer.title}
                                            </h3>
                                            <p className="text-lg opacity-95 mb-6 drop-shadow-md">
                                                {offer.description}
                                            </p>
                                            <button className="bg-white text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
                                                Aproveitar Agora
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            
                            {/* Botões de navegação customizados */}
                            <div className="swiper-button-prev text-white! w-12! h-12! bg-black/50! rounded-full! left-4! hover:bg-primary! transition-colors backdrop-blur-sm"></div>
                            <div className="swiper-button-next text-white! w-12! h-12! bg-black/50! rounded-full! right-4! hover:bg-primary! transition-colors backdrop-blur-sm"></div>
                        </Swiper>
                    </div>
                </section>
            </section>

            {/* Featured Stores Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
                            <ShoppingBag className="w-10 h-10 text-primary" />
                            Lojas em Destaque
                        </h2>
                        <p className="text-gray-600">Conheça as melhores lojas verificadas da plataforma</p>
                    </div>
                    <button className="text-primary font-semibold hover:underline flex items-center gap-2 group">
                        Ver Todas
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredStores.map((store) => (
                        <Link
                            to={`/loja/${store.id}`}
                            key={store.id}
                            className="bg-white rounded-2xl overflow-hidden border shadow-lg border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 cursor-pointer group block"
                        >
                            {/* Banner */}
                            <div className="relative h-32 overflow-hidden">
                                <img
                                    src={store.banner}
                                    alt={store.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                
                                {/* Badge de verificação */}
                                {store.verified && (
                                    <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                        <span>✓</span>
                                        Verificada
                                    </div>
                                )}
                            </div>

                            {/* Logo sobreposto */}
                            <div className="relative px-6 -mt-12 mb-4">
                                <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-xl bg-white">
                                    <img
                                        src={store.logo}
                                        alt={`${store.name} logo`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Conteúdo */}
                            <div className="px-6 pb-6 space-y-3">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                        {store.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium">
                                        {store.category}
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {store.description}
                                </p>

                                {/* Estatísticas */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="font-semibold text-gray-900">{store.rating}</span>
                                        <span className="text-gray-400">/5</span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <span className="font-semibold text-gray-900">{store.totalProducts.toLocaleString()}</span> produtos
                                    </div>
                                </div>

                                {/* Botão de ação */}
                                <button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-gray-900 font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-[1.02]">
                                    Visitar Loja
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <div className="container mx-auto px-4 py-6">
                <MainContent />
            </div>

            <Footer />
        </div>
    );
}