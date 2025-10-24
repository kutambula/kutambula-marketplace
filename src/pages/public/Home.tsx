import Header from '../../components/layout/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

export default function HomePage() {
    // Dados de exemplo - substituir com dados reais
    const weeklyRecommendations = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            title: 'Headphones Premium',
            badge: 'Recomendado'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
            title: 'Smartwatch Pro',
            badge: 'Top da Semana'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
            title: 'Tênis Esportivo',
            badge: 'Mais Vendido'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop',
            title: 'Câmera Digital',
            badge: 'Novidade'
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

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Coluna Esquerda — Recomendações da Semana */}
                <aside className="lg:col-span-1 bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-100 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">⭐</span>
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
                                <div className="relative overflow-hidden rounded-xl cursor-pointer group">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/90 to-transparent p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                                        <p className="text-xs opacity-90">Clique para ver detalhes</p>
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
                <section className="lg:col-span-3 bg-white rounded-2xl  border border-gray-100 overflow-hidden">

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



            {/* <div className="container mx-auto px-4 py-6 flex gap-6">
                <SidebarFilters />
                <MainContent />
            </div> */}
        </div>
    );
}