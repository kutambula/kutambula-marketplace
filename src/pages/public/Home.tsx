import Header from '../../components/layout/Header';
import MainContent from '../../components/layout/MainContent';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

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
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section - Welcome & CTAs */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Conteúdo Principal */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                                Conectando
                                <span className="text-primary block">África</span>
                                através do comércio
                            </h1>
                            
                            <p className="text-xl text-gray-600 leading-relaxed">
                                O marketplace que une vendedores e compradores de toda a África lusófona. 
                                Descubra produtos únicos, apoie negócios locais e faça parte da maior 
                                comunidade comercial africana.
                            </p>
                        </div>

                        {/* CTAs Principais */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-primary hover:bg-tertiary text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Começar a Comprar
                            </button>
                            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                                Torne-se Vendedor
                            </button>
                        </div>

                        {/* CTAs Secundários */}
                        <div className="flex flex-wrap gap-4 text-sm">
                            <button className="text-gray-600 hover:text-primary font-medium flex items-center gap-2 group">
                                <i className='bx bx-info-circle text-lg'></i>
                                Como funciona
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button className="text-gray-600 hover:text-primary font-medium flex items-center gap-2 group">
                                <i className='bx bx-help-circle text-lg'></i>
                                Saiba mais
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button className="text-gray-600 hover:text-primary font-medium flex items-center gap-2 group">
                                <i className='bx bx-phone text-lg'></i>
                                Suporte em Português
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        {/* Indicadores de Confiança */}
                        <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-black text-primary">50K+</div>
                                <div className="text-sm text-gray-600">Vendedores</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-primary">200K+</div>
                                <div className="text-sm text-gray-600">Produtos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-primary">8</div>
                                <div className="text-sm text-gray-600">Países</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Imagem Hero */}
                    <div className="relative">
                        <div className="bg-linear-to-br from-primary/10 to-tertiary/10 rounded-3xl p-8 relative overflow-hidden">
                            {/* Padrão Africano Decorativo */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="w-full h-full african-pattern"></div>
                            </div>
                            
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop"
                                alt="Marketplace Africano"
                                className="w-full h-80 object-cover rounded-2xl shadow-xl"
                            />
                            
                            {/* Cards Flutuantes */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border">
                                <div className="flex items-center gap-2">
                                    <i className='bx bx-shield-check text-2xl text-green-500'></i>
                                    <div>
                                        <div className="font-bold text-sm">100% Seguro</div>
                                        <div className="text-xs text-gray-600">Pagamentos protegidos</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border">
                                <div className="flex items-center gap-2">
                                    <i className='bx bx-world text-2xl text-primary'></i>
                                    <div>
                                        <div className="font-bold text-sm">Multi-idioma</div>
                                        <div className="text-xs text-gray-600">8 idiomas locais</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Como Funciona Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Como Funciona</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Três passos simples para começar a comprar ou vender no maior marketplace da África lusófona
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Passo 1 - Comprador */}
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className='bx bx-search text-3xl text-primary'></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Explore & Descubra</h3>
                            <p className="text-gray-600 mb-6">
                                Navegue por milhares de produtos de vendedores verificados de toda a África
                            </p>
                            <button className="text-primary font-semibold hover:underline">
                                Começar a explorar →
                            </button>
                        </div>

                        {/* Passo 2 */}
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className='bx bx-cart text-3xl text-green-600'></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Compre com Segurança</h3>
                            <p className="text-gray-600 mb-6">
                                Pagamentos protegidos, frete calculado automaticamente e suporte multilíngue
                            </p>
                            <button className="text-primary font-semibold hover:underline">
                                Ver formas de pagamento →
                            </button>
                        </div>

                        {/* Passo 3 - Vendedor */}
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className='bx bx-store text-3xl text-yellow-600'></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Venda & Cresça</h3>
                            <p className="text-gray-600 mb-6">
                                Configure sua loja em minutos e alcance clientes em 8 países africanos
                            </p>
                            <button className="text-primary font-semibold hover:underline">
                                Criar minha loja →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lojas em Destaque Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <i className='bx bx-store-alt text-4xl text-primary'></i>
                            <h2 className="text-3xl font-black text-gray-900">Lojas em Destaque</h2>
                        </div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Descubra as melhores lojas verificadas da nossa comunidade africana
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                                <span className="text-xs text-gray-500">(284 avaliações)</span>
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

                    {/* Botão Ver Todas */}
                    <div className="text-center mt-12">
                        <button className="bg-primary hover:bg-tertiary text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                            <span className="flex items-center gap-2">
                                <i className='bx bx-grid-alt text-xl'></i>
                                Ver Todas as Lojas
                                <i className='bx bx-right-arrow-alt text-xl'></i>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

   

            {/* Seção de Suporte & Idiomas */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-r from-primary to-tertiary rounded-3xl p-12 text-white text-center">
                        <h2 className="text-3xl font-black mb-6">Suporte em Sua Língua</h2>
                        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                            Nossa equipe fala português, francês, inglês e idiomas locais africanos. 
                            Chat ao vivo 24/7 com respostas treinadas para expressões e contextos locais.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-2xl mb-2">🇦🇴</div>
                                <div className="font-semibold">Português & Kimbundo</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">🇬🇼</div>
                                <div className="font-semibold">Crioulo Guineense</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">🇨🇻</div>
                                <div className="font-semibold">Cabo-verdiano</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">🇸🇹</div>
                                <div className="font-semibold">Santomense</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-primary font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                                <i className='bx bx-chat mr-2'></i>
                                Iniciar Chat
                            </button>
                            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-primary transition-colors">
                                <i className='bx bx-help-circle mr-2'></i>
                                FAQ Completo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

			<div className="container mx-auto px-4 py-6">
                <MainContent />
            </div>

            {/* Seção para Anunciantes */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-gray-900 mb-6">
                            Anuncie e Alcance Milhões
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Promova seus produtos com banners estratégicos, posts patrocinados e anúncios direcionados
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <i className='bx bx-image text-3xl text-primary mb-4'></i>
                                <h3 className="font-bold text-lg mb-2">Banner Display</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    728x90, 300x250, 160x600<br/>
                                    Formatos responsivos
                                </p>
                                <div className="text-primary font-bold">A partir de €50/mês</div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <i className='bx bx-bullseye text-3xl text-green-600 mb-4'></i>
                                <h3 className="font-bold text-lg mb-2">Posts Patrocinados</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Destaque nos resultados<br/>
                                    Segmentação por país
                                </p>
                                <div className="text-primary font-bold">€0,20 por clique</div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <i className='bx bx-video text-3xl text-yellow-600 mb-4'></i>
                                <h3 className="font-bold text-lg mb-2">Vídeo Stories</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Até 30 segundos<br/>
                                    MP4, MOV máx 50MB
                                </p>
                                <div className="text-primary font-bold">€100/semana</div>
                            </div>
                        </div>

                        <button className="bg-primary hover:bg-tertiary text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                            <i className='bx bx-rocket mr-2'></i>
                            Começar a Anunciar
                        </button>
                    </div>
                </div>
            </section>

        

            <Footer />
        </div>
    );
}